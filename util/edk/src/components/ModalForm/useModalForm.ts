import Scope from '../../';
const { useState } = Scope.react;
import type { FormInstance, FormProps, ModalProps } from 'antd';

const { Form } = Scope.antd;

export interface InitValue {
  modalProps?: ModalProps;
  formProps?: FormProps;
  data?: any;
  form?: FormInstance;
}

export default function useModalForm(initValue?: InitValue) {
  const [form] = Form.useForm(initValue?.form);

  const [modalProps, setModalProps] = useState<ModalProps>({
    width: 600,
    onCancel: close,
    ...initValue?.modalProps,
  });

  const [formProps, setFormProps] = useState<FormProps>({
    form,
    layout: 'vertical',
    scrollToFirstError: true,
    ...initValue?.formProps,
    validateMessages: { required: '${label} 是必选字段' },
  });

  const [data, setData] = useState<any>(initValue?.data);

  function close() {
    setModalProps((pre) => ({ ...pre, open: false }));
    form.resetFields();
    setData(undefined);
  }

  return {
    form,
    modalProps,
    setModalProps,
    formProps,
    setFormProps,
    data,
    setData,
    close,
  };
}
