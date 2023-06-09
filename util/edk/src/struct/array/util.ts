/*
 * @Author: fuRan NgeKaworu@gmail.com
 * @Date: 2023-03-21 13:43:51
 * @LastEditors: fuRan NgeKaworu@gmail.com
 * @LastEditTime: 2023-03-21 13:53:56
 * @FilePath: /yuzhou/util/edk/src/struct/array/util.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export function findLastLTE(n: number, iterator: Iterable<number>) {
  let nearestDiff = Infinity,
    nearest;
  for (const cur of iterator) {
    const diff = n - cur;
    if (diff < 0) continue;
    if (diff === 0) return cur;
    if (diff < nearestDiff) {
      nearest = cur;
      nearestDiff = diff;
    }
  }
  return nearest;
}
