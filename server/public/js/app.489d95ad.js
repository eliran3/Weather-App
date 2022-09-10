(function(){"use strict";var e={5347:function(e,t,r){var s=r(9242),n=r(3396);const i={id:"app"};function o(e,t,r,s,o,a){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l)])}var a=r(8578),l={name:"App",components:{Home:a["default"]}},u=r(89);const d=(0,u.Z)(l,[["render",o]]);var c=d,h=r(2483);const p=[{path:"/",name:"Home",component:()=>Promise.resolve().then(r.bind(r,8578))},{path:"/contact",name:"Contact",component:()=>Promise.resolve().then(r.bind(r,3071))},{path:"/login",name:"Login",component:()=>Promise.resolve().then(r.bind(r,9380))}],w=(0,h.p7)({history:(0,h.PO)("/"),routes:p});var g=w;(0,s.ri)(c).use(g).mount("#app")},3071:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var s=r(3396);const n={class:"list-links"},i={class:"links"},o=(0,s.Uk)("LOGIN"),a={style:{display:"inline"}},l=(0,s.Uk)("HOME"),u=(0,s._)("br",null,null,-1),d=(0,s._)("h1",null,"Contact",-1);function c(e,t,r,c,h,p){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("ul",n,[(0,s._)("li",i,[(0,s.Wm)(w,{to:"/login"},{default:(0,s.w5)((()=>[o])),_:1})]),(0,s._)("li",a,[(0,s.Wm)(w,{to:"/"},{default:(0,s.w5)((()=>[l])),_:1})])]),u,d],64)}var h={name:"Contact"},p=r(89);const w=(0,p.Z)(h,[["render",c]]);var g=w},8578:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var s=r(3396),n=r(7139),i=r(9242);const o={class:"list-links"},a={class:"links"},l=(0,s.Uk)("CONTACT"),u={style:{display:"inline"}},d=(0,s.Uk)("LOGIN"),c={key:0,class:"search-box"},h={key:1,class:"weather-warp"},p={class:"location-box"},w={class:"location"},g=(0,s._)("div",{class:"date"},"Wednesday 17",-1),f={class:"weather-box"},y={class:"temp"},m={class:"weather"},_={key:2},v=(0,s._)("div",{class:"error"},"No weather for you sir!",-1),k=[v];function b(e,t,r,v,b,U){const O=(0,s.up)("router-link"),C=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",{id:"home",class:(0,n.C_)("undefined"!=typeof this.weather.main&&"Clouds"==this.weather.weather[0].main?"night":"")},[(0,s._)("main",null,[(0,s._)("ul",o,[(0,s._)("li",a,[(0,s.Wm)(O,{to:"/contact"},{default:(0,s.w5)((()=>[l])),_:1})]),(0,s._)("li",u,[(0,s.Wm)(O,{to:"/login"},{default:(0,s.w5)((()=>[d])),_:1})])]),this.register?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>b.query=e),class:"search-bar",placeholder:"search...",onKeypress:t[1]||(t[1]=(...e)=>U.fetch_weather&&U.fetch_weather(...e))},null,544),[[i.nr,b.query]])])),"undefined"==typeof this.weather.main||this.register?!this.register&&this.query&&"undefined"==typeof this.weather.main?((0,s.wg)(),(0,s.iD)("div",_,k)):(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",p,[(0,s._)("div",w,(0,n.zw)(this.weather.name)+", "+(0,n.zw)(this.weather.sys.country),1),g]),(0,s._)("div",f,[(0,s._)("div",y,(0,n.zw)(Math.round(this.weather.main.temp))+"°C",1),(0,s._)("div",m,(0,n.zw)(b.weather.weather[0].main),1)])])),this.register?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:3,id:"weather-list",class:(0,n.C_)(this.query||"undefined"!=typeof this.weather.main?"":"no_weather")},[(0,s._)("ol",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.weather_cart,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e},(0,n.zw)(e),1)))),128))])],2)),(0,s.Wm)(C)])],2)}var U=r(3071),O=r(9380),C={name:"Home",components:{Contact:U["default"],Login:O["default"]},data(){return{api_key:"5350f438cde3d0721a040bdffea36873",url_base:"https://api.openweathermap.org/data/2.5/",query:"",weather:{},weather_cart:[]}},methods:{fetch_weather(e){fetch(`${this.url_base}weather?q=${this.query}\n        &units=metric&appid=${this.api_key}`).then((e=>e.json())).then(this.setResults),"Enter"==e.key&&this.weather_cart.push(`${this.weather.name}, ${this.weather.sys.country}`)},setResults(e){this.weather=e}}},D=r(89);const L=(0,D.Z)(C,[["render",b]]);var q=L},9380:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var s=r(3396),n=r(7139),i=r(9242);const o=e=>((0,s.dD)("data-v-c4d84cfe"),e=e(),(0,s.Cn)(),e),a={id:"register-login"},l={key:0},u={key:1},d=o((()=>(0,s._)("br",null,null,-1))),c={class:"list-links"},h={class:"links"},p=(0,s.Uk)("CONTACT"),w={style:{display:"inline"}},g=(0,s.Uk)("HOME"),f=o((()=>(0,s._)("br",null,null,-1))),y={key:4},m=o((()=>(0,s._)("h1",null,"Register",-1))),_=o((()=>(0,s._)("br",null,null,-1))),v=o((()=>(0,s._)("br",null,null,-1))),k={key:5},b=o((()=>(0,s._)("h1",null,"Login",-1))),U=o((()=>(0,s._)("br",null,null,-1))),O=o((()=>(0,s._)("br",null,null,-1)));function C(e,t,r,o,C,D){const L=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",a,[this.error?((0,s.wg)(),(0,s.iD)("p",l,(0,n.zw)(this.error),1)):(0,s.kq)("",!0),this.currentUser?((0,s.wg)(),(0,s.iD)("h1",u,"logged user: "+(0,n.zw)(this.currentUser),1)):(0,s.kq)("",!0),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.userSaved,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id},(0,n.zw)(e.username),1)))),128))]),d,(0,s._)("ul",c,[(0,s._)("li",h,[(0,s.Wm)(L,{to:"/contact"},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s._)("li",w,[(0,s.Wm)(L,{to:"/"},{default:(0,s.w5)((()=>[g])),_:1})])]),f,"Register"==this.log_user?((0,s.wg)(),(0,s.iD)("input",{key:2,type:"submit",value:"Login",onClick:t[0]||(t[0]=(...e)=>D.LogUser&&D.LogUser(...e))})):(0,s.kq)("",!0),"Login"==this.log_user?((0,s.wg)(),(0,s.iD)("input",{key:3,type:"submit",value:"Register",onClick:t[1]||(t[1]=(...e)=>D.LogUser&&D.LogUser(...e))})):(0,s.kq)("",!0),"Register"==this.log_user?((0,s.wg)(),(0,s.iD)("div",y,[m,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>this.register.username=e),placeholder:"Username"},null,512),[[i.nr,this.register.username]]),_,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>this.register.password=e),placeholder:"Password"},null,512),[[i.nr,this.register.password]]),(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=e=>this.register.re_typed_password=e),placeholder:"Re-type Password"},null,512),[[i.nr,this.register.re_typed_password]]),v,(0,s._)("input",{type:"submit",class:"submit-user",value:"Register",onClick:t[5]||(t[5]=(...e)=>D.Register&&D.Register(...e))})])):((0,s.wg)(),(0,s.iD)("div",k,[b,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>this.login.username=e),placeholder:"Username"},null,512),[[i.nr,this.login.username]]),U,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>this.login.password=e),placeholder:"Password"},null,512),[[i.nr,this.login.password]]),O,(0,s._)("input",{type:"submit",class:"submit-user",value:"Login",onClick:t[8]||(t[8]=(...e)=>D.Login&&D.Login(...e))})]))])}var D=r(6265),L=r.n(D);const q=r(759),R="api/users/";class P{static GetUser(){return new Promise((async(e,t)=>{try{const t=await L().get(R),r=t.data;e(r.map((e=>({...e,id:e.id,username:e.username,password:e.password}))))}catch(r){t(r),console.log(r)}}))}static async AddUser(e,t){try{console.log("erryes:");const r=await L().post(R,{id:q.v4(),username:e,password:t});console.log(r)}catch(r){console.log("errno:"),console.log(r.response)}}}var x=P,j={name:"Login",data(){return{userSaved:"",currentUser:"",error:"",log_user:"Register",register:{username:"",password:"",re_typed_password:""},login:{username:"",password:""},validateFields:()=>{if("Register"==this.log_user)return this.register.username.length<6?(this.error="username too short!",!1):this.register.password===this.register.re_typed_password?this.register.password.length>5?(this.error="register success!",!0):(this.error="password not long enough!",!1):(this.error="passwords not match!",!1)}}},async created(){try{this.userSaved=await x.GetUser()}catch(e){this.error=e.message}},methods:{LogUser(){"Login"==this.log_user?this.log_user="Register":this.log_user="Login"},async Register(){this.validateFields()&&(await x.AddUser(this.register.username,this.register.password),this.userSaved=await x.GetUser())},async Login(){this.validateFields()}}},S=r(89);const W=(0,S.Z)(j,[["render",C],["__scopeId","data-v-c4d84cfe"]]);var z=W}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],a=s[1],l=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(t&&t(s);u<o.length;u++)i=o[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},s=self["webpackChunkweather"]=self["webpackChunkweather"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(5347)}));s=r.O(s)})();
//# sourceMappingURL=app.489d95ad.js.map