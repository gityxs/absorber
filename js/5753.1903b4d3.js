"use strict";(globalThis["webpackChunkabsorber"]=globalThis["webpackChunkabsorber"]||[]).push([[5753],{5753:(t,e,i)=>{i.r(e),i.d(e,{default:()=>H});var l=i(6252),s=i(9963),n=i(3577);const a=t=>((0,l.dD)("data-v-b5ff84b6"),t=t(),(0,l.Cn)(),t),r={key:0,class:"wiste"},o={key:0},d={key:0},c={class:"title"},h=a((()=>(0,l._)("b",null,"Stats:",-1))),u={key:1},p={class:"title"},m=a((()=>(0,l._)("b",null,"Description:",-1))),w=a((()=>(0,l._)("hr",null,null,-1))),g={key:2},y={class:"title"},v={key:0},b=a((()=>(0,l._)("b",null,"Description:",-1))),f=a((()=>(0,l._)("hr",null,null,-1))),k={key:0},_=a((()=>(0,l._)("b",null,"Special:",-1))),D=a((()=>(0,l._)("hr",null,null,-1))),x={key:1},q={key:1},W={class:"title"};function C(t,e,i,a,C,S){const E=(0,l.up)("Statslist"),z=(0,l.up)("Ability");return(0,l.wg)(),(0,l.j4)(s.uT,{name:"fade"},{default:(0,l.w5)((()=>[C.show&&null!=i.item?((0,l.wg)(),(0,l.iD)("div",r,["text"!=i.type?((0,l.wg)(),(0,l.iD)("div",o,[i.ctrl?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("h2",c,(0,n.zw)(i.item.name),1),h,(0,l.Wm)(E,{item:S.filtred},null,8,["item"])])):i.shift?((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("h2",p,(0,n.zw)(i.item.name),1),m,w,(0,l.Wm)(z,{class:"basic",style:{"white-space":"normal",width:"200px",height:"auto"},pid:"description",val:i.item.description},null,8,["val"])])):((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("h2",y,(0,n.zw)(i.item.name),1),"item"==i.type?((0,l.wg)(),(0,l.iD)("div",v,[b,f,(0,l.Wm)(z,{class:"basic",style:{"white-space":"normal",width:"200px",height:"auto"},pid:"description",val:i.item.description},null,8,["val"]),null!=i.item.special?((0,l.wg)(),(0,l.iD)("div",k,[_,D,(0,l.Wm)(z,{class:"basic",style:{"white-space":"normal",width:"200px",height:"auto"},pid:"crit",val:i.item.special},null,8,["val"])])):(0,l.kq)("",!0)])):(0,l.kq)("",!0),0!==Object.keys(i.item.gain).length?((0,l.wg)(),(0,l.iD)("b",x,"Gain:")):(0,l.kq)("",!0),(0,l.Wm)(E,{item:i.item.gain},null,8,["item"])]))])):((0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("b",W,(0,n.zw)(i.title),1),(0,l.wy)((0,l._)("hr",null,null,512),[[s.F8,null!=i.title]]),(0,l._)("div",null,(0,n.zw)(i.item),1)]))])):(0,l.kq)("",!0)])),_:1})}const S={name:"Tooltip",components:{Ability:(0,l.RC)((()=>i.e(8943).then(i.bind(i,8943)))),Statslist:(0,l.RC)((()=>i.e(1930).then(i.bind(i,1930))))},props:{item:{type:[Object,String],required:!0},title:{type:String,required:!1},ctrl:{type:Boolean,required:!1},shift:{type:Boolean,required:!1},type:{type:String,required:!1,value:"enemy"}},data(){return{show:!1,elistender:null,llistender:null,mlistender:null,lastcord:[0,0,0,0]}},computed:{filtred(){const t=["description","name","id","boss","clife","cspeed","status","gain","max","prestige"],e={};for(const i in this.item)t.includes(i)||(e[i]=this.item[i]);return e}},methods:{calculatePosition(t,e){let i,l,s,n;t&&(this.show=!0),void 0!=e?(i=e.target.getBoundingClientRect().left,l=e.target.getBoundingClientRect().top,s=e.target.offsetWidth,n=e.target.offsetHeight,this.lastcord=[i,l,s,n]):(i=this.lastcord[0],l=this.lastcord[1],s=this.lastcord[2],n=this.lastcord[3]),this.$nextTick((()=>{let t=this.$el;if(void 0!=t.style){let e=t.offsetWidth;i+e>=window.innerWidth-100?t.style.left=i-e+"px":t.style.left=i+s+"px";let a=t.offsetHeight;if(l+a>=window.innerHeight-20?t.style.top=l-a+n/2+"px":t.style.top=l+n/2+"px",l+n/2+a>=window.innerHeight-20){let e=l+n/2+a-window.innerHeight+20;t.style.top=l+n/2-e+"px"}}}))}},mounted(){const t=this.$el.parentElement;this.elistener=t=>this.calculatePosition(!0,t),this.llistener=()=>{this.show=!1},t.addEventListener("mouseenter",this.elistener),t.addEventListener("mouseleave",this.llistener)},beforeUnmount(){const t=this.$el.parentElement;t.removeEventListener("mouseenter",this.elistener),t.removeEventListener("mouseleave",this.llistener)},watch:{shift(){this.calculatePosition(!1)},ctrl(){this.calculatePosition(!1)}}};var E=i(3744);const z=(0,E.Z)(S,[["render",C],["__scopeId","data-v-b5ff84b6"]]),H=z}}]);
//# sourceMappingURL=5753.1903b4d3.js.map