/*
 * @Author: fuRan NgeKaworu@gmail.com
 * @Date: 2023-03-15 11:56:08
 * @LastEditors: fuRan NgeKaworu@gmail.com
 * @LastEditTime: 2023-10-30 23:45:36
 * @FilePath: /yuzhou/app/stock/src/app.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import edk from 'edk/src';

import * as antd from 'antd';
import * as reactQuery from '@tanstack/react-query';
import * as react from 'react';
import * as reactDnD from 'react-dnd';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    if (window.__POWERED_BY_QIANKUN__) {
      __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
  },
  // 应用 render 之前触发
  async mount(props: any) {},
  // 应用卸载之后触发
  async unmount(props: any) {},
  // loadMicroApp 方式加载微应用时生效
  async update(props: any) {},
};

declare var __webpack_public_path__: string;
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  }
}

edk.antd = antd;
edk.reactQuery = reactQuery;
edk.react = react;
edk.reactDnD = reactDnD;
