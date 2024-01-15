/*!
 * domprirody v0.0.1
 * (c) 2024 Yuri Anikin <anikin.yu@gmail.com>
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var quasar=require("quasar"),vue=require("vue"),script={name:"PxyButton",props:{label:{type:String,required:!0}},components:{QBtn:quasar.QBtn}};function render(e,r,t,n,o,s){var u=vue.resolveComponent("q-btn");return vue.openBlock(),vue.createBlock(u,{label:t.label,color:"primary"},{default:vue.withCtx(function(){return[vue.renderSlot(e.$slots,"default")]}),_:3},8,["label"])}script.render=render;var version="0.0.1",components=[script];function install(r){components.forEach(function(e){r.component(e.name,e)})}exports.PxyButton=script,exports.install=install,exports.version=version;