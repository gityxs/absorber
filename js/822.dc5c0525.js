"use strict";(globalThis["webpackChunkabsorber"]=globalThis["webpackChunkabsorber"]||[]).push([[822],{822:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(6252),a=n(9963);const i={key:0},s=(0,r._)("span",null,"Current Scores",-1),o={key:0,style:{float:"right"}},l={key:1,style:{float:"right"}},u={class:"kiste innerbox"};function c(e,t,n,c,d,h){const y=(0,r.up)("MiniEnemy");return h.getAnyElement(e.player.counter)>0?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",{onClick:t[0]||(t[0]=(...e)=>h.hideBar&&h.hideBar(...e)),class:"kiste dark title"},[s,e.statBar.counter?((0,r.wg)(),(0,r.iD)("span",o,"▼")):((0,r.wg)(),(0,r.iD)("span",l,"▲"))]),(0,r.wy)((0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.player.counter,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:e+t},[(0,r.Wm)(y,{k:e,val:t},null,8,["k","val"])])))),128))],512),[[a.F8,e.statBar.counter]])])):(0,r.kq)("",!0)}var d=n(3907);const h={name:"StatsCounter",methods:{hideBar(){this.$store.dispatch("hideBar","counter")},getAnyElement(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&(t+=parseFloat(e[n]));return t},getRealEnemyName(e){return this.getEnemies.find((t=>t.id==e)).name}},components:{MiniEnemy:(0,r.RC)((()=>n.e(1791).then(n.bind(n,1791))))},computed:{...(0,d.rn)(["player","statBar"]),...(0,d.Se)(["getEnemies"])}};var y=n(3744);const k=(0,y.Z)(h,[["render",c]]),p=k}}]);
//# sourceMappingURL=822.dc5c0525.js.map