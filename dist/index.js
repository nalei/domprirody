import { defineComponent as p, resolveComponent as c, openBlock as a, createBlock as l, withCtx as f, renderSlot as i } from "vue";
import { ElButton as m } from "element-plus";
const u = p({
  name: "proxy-button",
  inheritAttrs: !1,
  components: {
    ElButton: m
  },
  props: {
    type: {
      type: String
    }
  }
}), _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
};
function d(t, o, e, n, r, $) {
  const s = c("el-button");
  return a(), l(s, { type: t.type }, {
    default: f(() => [
      i(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["type"]);
}
const y = /* @__PURE__ */ _(u, [["render", d]]);
const x = [
  y
], b = {
  install(t) {
    x.forEach((o) => {
      t.component(o.name, o);
    });
  }
};
export {
  b as default
};
