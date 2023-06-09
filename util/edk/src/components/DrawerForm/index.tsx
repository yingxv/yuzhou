import type { PropsWithChildren } from 'react';
import Scope from '../../';
const { Form, Drawer, Space, Button } = Scope.antd;
import type { DrawerProps } from 'antd';
import type { InitValue } from './useDrawerForm';
export { default as useDrawerForm } from './useDrawerForm';

export default ({ children, drawerProps, formProps }: PropsWithChildren<InitValue>) => (
  <CustomDrawer {...drawerProps}>
    <Form {...formProps}>
      {children}
      <Form.Item hidden>
        <button html-type="submit" />
      </Form.Item>
    </Form>
  </CustomDrawer>
);

export interface CustomDrawerProps extends DrawerProps {
  onOk?: (...args: any[]) => void;
  confirmLoading?: boolean;
}

export function CustomDrawer({ onOk, confirmLoading, ...props }: CustomDrawerProps) {
  return (
    <Drawer
      footer={
        <Space>
          <Button onClick={props?.onClose as any}>取消</Button>
          <Button type="primary" onClick={onOk} loading={confirmLoading}>
            确定
          </Button>
        </Space>
      }
      {...props}
    />
  );
}
