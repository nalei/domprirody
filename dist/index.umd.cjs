(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue"),require("element-plus")):typeof define=="function"&&define.amd?define(["vue","element-plus"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.domprirody=n(e.vue,e.ElementPlus))})(this,function(e,n){"use strict";const i=e.defineComponent({name:"sf-button",components:{ElButton:n.ElButton}}),p=(t,o)=>{const s=t.__vccOpts||t;for(const[r,c]of o)s[r]=c;return s};function u(t,o,s,r,c,a){const f=e.resolveComponent("el-button");return e.openBlock(),e.createBlock(f,e.normalizeProps(e.guardReactiveProps(t.$attrs)),{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3},16)}const d=[p(i,[["render",u]])];return{install(t){d.forEach(o=>{t.component(o.name,o)})}}});
