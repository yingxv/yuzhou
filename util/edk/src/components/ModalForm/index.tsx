import type { PropsWithChildren } from 'react';
import Scope from '../../';
const { Modal, Form } = Scope.antd;
import type { InitValue } from './useModalForm';
export { default as useModalForm } from './useModalForm';

const ModalForm = ({ children, modalProps, formProps }: PropsWithChildren<InitValue>) => (
  <Modal {...modalProps}>
    <Form {...formProps}>
      {children}
      <Form.Item hidden>
        <button html-type="submit" />
      </Form.Item>
    </Form>
  </Modal>
);

export default ModalForm;
