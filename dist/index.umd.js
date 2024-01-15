/*!
 * domprirody v0.0.1
 * (c) 2024 Yuri Anikin <anikin.yu@gmail.com>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('quasar'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['quasar', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.max = factory(global.Quasar, global.Vue));
})(this, (function (quasar, vue) { 'use strict';

  var script = {
    name: 'PxyButton',
    props: {
      label: {
        type: String,
        required: true,
      }
    },
    components: {
      QBtn: quasar.QBtn,
    },
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_q_btn = vue.resolveComponent("q-btn");

    return (vue.openBlock(), vue.createBlock(_component_q_btn, {
      label: $props.label,
      color: "primary"
    }, {
      default: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      _: 3
    }, 8, ["label"]))
  }

  script.render = render;

  var version = '0.0.1';

  var components = [script];

  function install (app) {
    components.forEach(function (component) {
      app.component(component.name, component);
    });
  }

  var VuePlugin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PxyButton: script,
    version: version,
    install: install
  });

  return VuePlugin;

}));
