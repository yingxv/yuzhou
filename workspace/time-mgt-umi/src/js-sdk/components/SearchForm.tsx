/*
 * @Author: fuRan NgeKaworu@gmail.com
 * @Date: 2023-03-05 01:55:13
 * @LastEditors: fuRan NgeKaworu@gmail.com
 * @LastEditTime: 2023-03-05 20:13:17
 * @FilePath: /monorepo-lab/workspace/time-mgt-umi/src/js-sdk/components/SearchForm.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-underscore-dangle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import type { PropsWithChildren } from 'react';
import { useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import type { FormProps } from 'antd';
import { Form } from 'antd';
import moment from 'dayjs';

export interface SearchFormProps {
  formProps?: FormProps;
}

/**
 * SearchForm
 * 单一责任, 仅负责Form值和search双向绑定
 */
export default ({ formProps, children }: PropsWithChildren<SearchFormProps>) => {
  const navigate = useNavigate();
  const { onFinish, onReset, ...restFormProps } = formProps || {};
  const [form] = Form.useForm(restFormProps?.form);

  const _location = useLocation();
  const formName = restFormProps?.name ?? 'search_form';

  useLayoutEffect(() => {
    const params = new URLSearchParams(_location.search).get(`_${formName}`);
    if (params) {
      try {
        const value = JSON.parse(params, (_, v) => {
          //  moment 处理 ISO 8601 -> moment
          if (/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/.test(v)) {
            return moment(v);
          }
          return v;
        });
        form.setFieldsValue(value);
      } catch (e) {
        console.error('search form json 格式错误');
      }
    } else {
      form.resetFields();
    }
  }, [_location.search]);

  function submitHandler(values: any) {
    const searchJSON = toSearchForm(values);

    const par = new URLSearchParams(_location.search);

    if (par.get(`_${formName}`) !== searchJSON) {
      par.set(`_${formName}`, searchJSON);
      navigate({
        pathname: _location.pathname,
        search: `?${par}`,
      });
    }
    onFinish?.(values);
  }

  function resetHandler(e: any) {
    const par = new URLSearchParams(_location.search);
    par.delete(`_${formName}`);
    navigate({
      pathname: _location.pathname,
      search: `?${par}`,
    });
    onReset?.(e);
  }

  return (
    <Form
      form={form}
      name={formName}
      labelCol={{ offset: 1, span: 6 }}
      wrapperCol={{ span: 17 }}
      onFinish={submitHandler}
      onReset={resetHandler}
      children={children}
      {...restFormProps}
    />
  );
};

export function toSearchForm(obj: Record<string, any>) {
  return JSON.stringify(obj, (_, v) => {
    if (moment.isDayjs(v)) {
      return v?.toISOString();
    }
    return v;
  });
}
