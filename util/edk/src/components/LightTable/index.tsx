import type { ReactNode, Ref, CSSProperties } from 'react';
import Scope from '../../';
const { Table, Typography } = Scope.antd;
import type { TableProps, TableColumnProps } from 'antd';
import type { ParagraphProps } from 'antd/lib/typography/Paragraph';
import type { LinkProps } from 'antd/lib/typography/Link';
import type { ValueEnum, ValueType } from '../type';
import { RenderNode, RenderChain } from './struct/renderChain';

import { getValueEnumValue } from '../type';
import { _valueTypeRegister } from './valueTypeRegister';
import prune from '../../struct/tree/prune';
import trimEndWith from '../../struct/string/trimEndWith';
import isValidValue from '../../utils/isValidValue';
import { ColumnTitle } from 'antd/es/table/interface';

const { Paragraph, Link } = Typography;

export interface LightTableProps<RecordType> extends Omit<TableProps<RecordType>, 'columns'> {
  columns?: LightColumnProps<RecordType>[];
  columnEmptyText?: ReactNode;
}

export interface LightColumnProps<RecordType>
  extends Omit<TableColumnProps<RecordType>, 'ellipsis'> {
  ellipsis?: ParagraphProps['ellipsis'] & { padding: number };
  copyable?: ParagraphProps['copyable'];
  paragraph?: ParagraphProps['copyable'];
  link?: LinkProps | boolean;

  valueEnum?: ValueEnum;
  valueType?: ValueType;
  prefix?: string;
  suffix?: string;
  decimal?: number;

  columnEmptyText?: ReactNode;

  hideInTable?: boolean;

  ref?: Ref<HTMLDivElement>;
}

export const globalRenderKey = ['columnEmptyText'] as const;

export const renderKey = [
  'render',

  'ellipsis',
  'copyable',
  'paragraph',
  'link',

  'valueEnum',
  'valueType',
  'prefix',
  'suffix',

  'decimal',
] as const;

export const allRenderKey = [...globalRenderKey, ...renderKey] as const;

export function renderTitle(title: ColumnTitle<any>) {
  return typeof title === 'function' ? title?.({}) : title;
}

export default <RecordType extends Record<any, any> = any>(props: LightTableProps<RecordType>) => (
  <Table {..._pruneProps(props)} />
);

function _pruneProps<RecordType>({
  columns,
  ...props
}: LightTableProps<RecordType>): TableProps<RecordType> {
  const extraColumn: LightColumnProps<RecordType> = {};

  const pruneProps = Object.keys(props)?.reduce((acc: TableProps<RecordType>, key) => {
    const k = key as (typeof globalRenderKey)[number];

    if (globalRenderKey?.includes(k)) {
      // effect
      extraColumn[k] = props?.[k];
      return acc;
    }
    return { ...acc, [k]: props?.[k] };
  }, {});

  return {
    columns: columns?.reduce?.(
      (acc: TableColumnProps<RecordType>[], { hideInTable, ...c }) =>
        hideInTable ? acc : acc.concat(_processColumn({ ...extraColumn, ...c })),
      [],
    ),
    ...pruneProps,
  };
}

function _processColumn<RecordType>(c: LightColumnProps<RecordType>): TableColumnProps<RecordType> {
  const render = _tsumugi(c);
  return { ..._pruneColumn(c), render };
}

function _pruneColumn<RecordType>(c: LightColumnProps<RecordType>): TableColumnProps<RecordType> {
  return Object.keys(c)?.reduce(
    (acc: TableColumnProps<RecordType>, key) =>
      renderKey?.includes(key as (typeof renderKey)[number])
        ? acc
        : { ...acc, [key]: c?.[key as keyof TableColumnProps<RecordType>] },
    {},
  );
}

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

function _tsumugi<RecordType>(
  c: LightColumnProps<RecordType>,
): TableColumnProps<RecordType>['render'] {
  const { basicRenderNode, ...node } = _toLightRenderNode(_factory(c));

  const chain = new RenderChain(basicRenderNode);
  const prepend = _pickNode(
      ['valueEnum', 'valueType', 'decimal', 'prefix', 'suffix', 'paragraph'],
      node,
    ),
    append = _pickNode(['columnEmptyText'], node);

  chain.Prepend(basicRenderNode, ...prepend)?.Append(basicRenderNode, ...append);

  return (v, r, i) => {
    let tmp = v;

    for (const n of chain) {
      tmp = n?.render?.(tmp, r, i, v);
    }

    return tmp;
  };
}

function _pickNode<RecordType>(
  keys: (typeof allRenderKey)[number][],
  renders: Partial<LightRenderNode<RecordType>>,
) {
  return keys?.reduce((acc: RenderNode<RecordType>[], cur) => {
    const key = `${cur}RenderNode` as NodeType;
    const rn = renders?.[key];
    if (rn != null) {
      return acc.concat(rn);
    }
    return acc;
  }, []);
}

type NodeType = `${RenderType}Node`;

type LightRenderNode<RecordType> = AtLeast<
  Record<NodeType, RenderNode<RecordType>>,
  'basicRenderNode'
>;

function _toLightRenderNode<RecordType>(renders?: Render<RecordType>): LightRenderNode<RecordType> {
  return Object.keys(renders ?? {}).reduce(
    (acc: LightRenderNode<RecordType>, cur) => {
      const k: RenderType = cur as RenderType;
      return {
        ...acc,
        [`${k}Node`]: new RenderNode(renders?.[k]),
      };
    },
    { basicRenderNode: new RenderNode((v) => v) },
  );
}

export type RenderType = `${
  | Exclude<(typeof allRenderKey)[number], 'render' | 'ellipsis' | 'copyable' | 'link'>
  | 'basic'}Render`;

export type Render<RecordType> = AtLeast<
  Record<RenderType, TableColumnProps<RecordType>['render']>,
  'basicRender'
>;

function _factory<RecordType>(
  c: LightColumnProps<RecordType>,
): AtLeast<Render<RecordType>, 'basicRender'> {
  const {
    valueEnum,
    valueType,
    render,
    ellipsis,
    copyable,
    prefix,
    suffix,
    columnEmptyText,
    link,
    paragraph,
    decimal,
  } = allRenderKey?.reduce(
    (acc: Pick<LightColumnProps<RecordType>, (typeof allRenderKey)[number]>, cur) =>
      c[cur] ? { ...acc, [cur]: c[cur] } : acc,
    {},
  );

  const ret: Render<RecordType> = {
    basicRender: render ?? ((v) => v),
    valueEnumRender: (value) => (valueEnum ? getValueEnumValue?.(valueEnum, value) : undefined),
    valueTypeRender: valueType ? _safeRender(_valueTypeRegister<RecordType>(valueType)) : undefined,

    paragraphRender: _safeRender((v) => {
      const children = (
        <Paragraph
          style={{
            width: _calcEllipsisWidth(c),
            color: 'inherit',
            marginBottom: 0,
          }}
          ellipsis={ellipsis}
          copyable={copyable ?? paragraph}
        >
          {v}
        </Paragraph>
      );

      return link ? (
        <Link href={v} {...(typeof link === 'object' && link)}>
          {children}
        </Link>
      ) : (
        children
      );
    }),

    prefixRender: _safeRender((v) => `${prefix}${v}`),
    suffixRender: _safeRender((v) => `${v}${suffix}`),
    columnEmptyTextRender: (v) => v ?? columnEmptyText,
    decimalRender: _safeRender((t: number | string) => (+t).toFixed(decimal)),
  };

  const extra = prune(
    {
      paragraph: {
        ellipsis,
        copyable,
        paragraph,
        link,
      },
      basic: render,
    },
    isValidValue,
  );

  return prune(ret, _isInLightColumnProps<RecordType>({ ...c, ...extra }));
}

function _calcEllipsisWidth<RecordType>({
  ellipsis,
  width = 'inherit',
}: LightColumnProps<RecordType>): CSSProperties['minWidth'] {
  let w: CSSProperties['minWidth'] = width;

  if (typeof w === 'number' || !Number.isNaN(+w)) w = w + 'px';

  if (w.endsWith('%')) console.warn('present % not work? try use vw');

  if (!w.endsWith('px')) return w;

  const padding = `${ellipsis?.padding ?? 0}px`;

  return `calc(${w} - ${padding})`;
}

function _safeRender<RecordType>(
  r: TableColumnProps<RecordType>['render'],
): TableColumnProps<RecordType>['render'] {
  return (v, ...rest) => (isValidValue(v) ? r?.(v, ...rest) : undefined);
}

function _isInLightColumnProps<RecordType>(c: LightColumnProps<RecordType>) {
  return (_: unknown, k?: RenderType) =>
    k ? c?.[trimEndWith(k, 'Render') as keyof LightColumnProps<RecordType>] != null : false;
}
