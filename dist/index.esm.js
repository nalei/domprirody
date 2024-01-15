/*!
 * domprirody v0.0.1
 * (c) 2024 Yuri Anikin <anikin.yu@gmail.com>
 * Released under the MIT License.
 */
import{QBtn}from"quasar";import{resolveComponent,openBlock,createBlock,withCtx,renderSlot}from"vue";var script={name:"PxyButton",props:{label:{type:String,required:!0}},components:{QBtn:QBtn}};function render(e,n,t,r,o,l){var i=resolveComponent("q-btn");return openBlock(),createBlock(i,{label:t.label,color:"primary"},{default:withCtx(function(){return[renderSlot(e.$slots,"default")]}),_:3},8,["label"])}script.render=render;var version="0.0.1",components=[script];function install(n){components.forEach(function(e){n.component(e.name,e)})}var VuePlugin=Object.freeze({__proto__:null,PxyButton:script,version:version,install:install});export{script as PxyButton,VuePlugin as default,install,version};