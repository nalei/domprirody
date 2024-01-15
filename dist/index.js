import { defineComponent as c, resolveComponent as a, openBlock as p, createBlock as l, normalizeProps as f, guardReactiveProps as m, withCtx as u, renderSlot as _ } from "vue";
import { ElButton as i } from "element-plus";
const d = c({
  name: "sf-button",
  components: {
    ElButton: i
  }
}), $ = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of o)
    n[e] = r;
  return n;
};
function v(t, o, n, e, r, h) {
  const s = a("el-button");
  return p(), l(s, f(m(t.$attrs)), {
    default: u(() => [
      _(t.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const B = /* @__PURE__ */ $(d, [["render", v]]), b = [
  B
], C = {
  install(t) {
    b.forEach((o) => {
      t.component(o.name, o);
    });
  }
};
export {
  C as default
};
