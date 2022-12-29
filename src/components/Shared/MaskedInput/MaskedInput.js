/* eslint-disable */
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};
import * as React from 'react';
import { useMemo } from 'react';
import Input from 'antd/lib/input';
import IMask from 'imask';
export { IMask };
export const MaskedInput = React.forwardRef(function MaskedInput(props, antdRef) {
  const { mask, maskOptions: _maskOptions, value: _value, defaultValue, definitions } = props, antdProps = __rest(props, ["mask", "maskOptions", "value", "defaultValue", "definitions"]);
  const innerRef = React.useRef(null);
  const maskOptions = useMemo(() => {
      return Object.assign({ mask, definitions: Object.assign(Object.assign({ '0': /[0-9]/ }, _maskOptions === null || _maskOptions === void 0 ? void 0 : _maskOptions.definitions), definitions), lazy: false }, _maskOptions);
  }, [mask]);
  const placeholder = useMemo(() => {
      return IMask.createPipe(Object.assign(Object.assign({}, maskOptions), { lazy: false }))('');
  }, [maskOptions]);
  const imask = React.useRef(null);
  const propValue = (typeof _value === 'string' ? _value : defaultValue) || '';
  const lastValue = React.useRef(propValue);
  const [value, setValue] = React.useState(propValue);
  const _onEvent = React.useCallback((ev, execOnChangeCallback = false) => {
      var _a;
      const masked = imask.current;
      if (!masked)
          return;
      if (ev.target) {
          if (ev.target.value !== masked.value) {
              masked.value = ev.target.value;
              ev.target.value = masked.value;
              lastValue.current = masked.value;
          }
      }
      Object.assign(ev, {
          maskedValue: masked.value,
          unmaskedValue: masked.unmaskedValue,
      });
      masked.updateValue();
      setValue(lastValue.current);
      if (execOnChangeCallback) {
          (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, ev);
      }
  }, []);
  const _onAccept = React.useCallback((ev) => {
      if (!(ev === null || ev === void 0 ? void 0 : ev.target))
          return;
      const input = innerRef.current;
      const masked = imask.current;
      if (!input || !masked)
          return;
      ev.target.value = masked.value;
      input.value = masked.value;
      lastValue.current = masked.value;
      _onEvent(ev, true);
  }, []);
  function updateMaskRef() {
      const input = innerRef.current;
      if (imask.current) {
          imask.current.updateOptions(maskOptions);
      }
      if (!imask.current && input) {
          imask.current = IMask(input, maskOptions);
          imask.current.on('accept', _onAccept);
      }
      if (imask.current && imask.current.value !== lastValue.current) {
          imask.current.value = lastValue.current;
          imask.current.alignCursor();
      }
  }
  function updateValue(value) {
      lastValue.current = value;
      const input = innerRef.current;
      const masked = imask.current;
      if (!(input && masked))
          return;
      masked.value = value;
      setValue(value)
      // updating value with the masked
      //   version (imask.value has a setter that triggers masking)
      input.value = masked.value;
      lastValue.current = masked.value;
  }
  React.useEffect(() => {
      updateMaskRef();
      return () => {
          var _a;
          (_a = imask.current) === null || _a === void 0 ? void 0 : _a.destroy();
          imask.current = null;
      };
  }, [mask]);
  React.useEffect(() => {
      updateValue(propValue);
  }, [propValue]);
  const eventHandlers = React.useMemo(() => {
      return {
          onBlur(ev) {
              var _a;
              _onEvent(ev);
              (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, ev);
          },
          onPaste(ev) {
              var _a, _b;
              lastValue.current = (_a = ev.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text');
              if (ev.target) {
                  // @ts-ignore
                  ev.target.value = lastValue.current;
              }
              _onEvent(ev, true);
              (_b = props.onPaste) === null || _b === void 0 ? void 0 : _b.call(props, ev);
          },
          onFocus(ev) {
              var _a;
              _onEvent(ev);
              (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, ev);
          },
          [KEY_PRESS_EVENT]: (ev) => {
              var _a;
              _onEvent(ev, true);
              (_a = props[KEY_PRESS_EVENT]) === null || _a === void 0 ? void 0 : _a.call(props, ev);
          },
      };
  }, []);
  return (React.createElement(Input, Object.assign({ placeholder: placeholder }, antdProps, eventHandlers, { onChange: (ev) => _onEvent(ev, true), value: value, ref: function handleInputMask(ref) {
          if (antdRef) {
              if (typeof antdRef == 'function') {
                  antdRef(ref);
              }
              else {
                  antdRef.current = ref;
              }
          }
          if (ref === null || ref === void 0 ? void 0 : ref.input) {
              innerRef.current = ref.input;
              if (!imask.current) {
                  updateMaskRef();
              }
          }
      } })));
});
function keyPressPropName() {
  if (typeof navigator !== 'undefined') {
      return navigator.userAgent.match(/Android/i)
          ? 'onBeforeInput'
          : 'onKeyPress';
  }
  return 'onKeyPress';
}
const KEY_PRESS_EVENT = keyPressPropName();
export default MaskedInput;