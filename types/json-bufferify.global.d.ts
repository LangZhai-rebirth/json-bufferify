/**
 * json-bufferify 0.2.3
 * Date: 2025-03-11
 * © 2017-2025 LangZhai(智能小菜菜)
 * This is licensed under the GNU LGPL, version 3 or later.
 * For details, see: https://www.gnu.org/licenses/lgpl.html
 * Project home: https://github.com/LangZhai-rebirth/json-bufferify
 */

declare namespace bufferify {
    export function encode(offset: number, data: Object): DataView;
    export function decode(offset: number, template: Object, source: ArrayBuffer): Object;
    export function decode(offset: number, template: Object, source: DataView): Object;
}