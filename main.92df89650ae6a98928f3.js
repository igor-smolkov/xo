!function(){"use strict";var e={4893:function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.food=e.food}var o,n,r;return o=t,(n=[{key:"mealTime",value:function(){this.food-=10}},{key:"addFood",value:function(e){this.food+=e}}])&&e(o.prototype,n),r&&e(o,r),t}();function o(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var n=document.querySelector(".game"),r=n.querySelector(".game__log"),a=new t({food:100}),c=!1,i=0,l=0;n.addEventListener("scroll",(function(e){if(f){var t=document.querySelector(".effect");t.volume=.2,t.play()}if(!c){c=!0;var o=document.querySelector(".boat");o.classList.toggle("boat_water-effect"),setTimeout((function(){o.classList.toggle("boat_water-effect"),c=!1}),200)}l=e.target.scrollTop/100,e.target.scrollHeight-e.target.scrollTop<=e.target.clientHeight&&alert("вы победили"),l%1==0&&(i++,u(),i%5==0&&(a.mealTime(),a.food<0&&(a.food=0,alert("вы померли с голоду"))))}),!0);var f=!1;function u(e){r.innerText=i+" ход\n",r.innerText+=l+" м\n",r.innerText+=a.food+" еды",e&&(r.innerText+="\n+ "+e)}n.addEventListener("click",(function(e){if(!f){f=!0;var t=document.querySelector(".music");t.volume=.5,t.play()}if(e.target.classList.contains("coast__bend_fooded")){e.target.style.backgroundColor="yellowgreen";var o=Math.ceil(e.target.offsetWidth/100*(e.target.offsetHeight/100));a.addFood(o),u(o);var n=document.querySelector(".effect2");n.volume=.04,n.play()}}),!0),document.querySelector(".terrain").style.height=o(1e3,1e4)+"%",function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=o(10,300),n=o(10,300),r=document.createElement("div");return r.classList.add("coast__bend"),r.style.width=t+"px",r.style.left=0!==e?e+"px":-t+"px",r.style.height=n+"px",1===o(1,10)&&(r.classList.add("coast__bend_fooded"),r.addEventListener("click",(function(e){e.target.classList.remove("coast__bend_fooded")}))),r}document.querySelectorAll(".coast").forEach((function(t,o){for(var n=0;n<t.offsetHeight;){var r=0===o?e(t.offsetWidth):e();t.append(r),n+=r.offsetHeight}}))}(),setInterval(u,500)}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,o.x=function(){},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1202,202],[4893,202]],n=function(){},r=function(r,a){for(var c,i,l=a[0],f=a[1],u=a[2],s=a[3],d=0,h=[];d<l.length;d++)i=l[d],o.o(e,i)&&e[i]&&h.push(e[i][0]),e[i]=0;for(c in f)o.o(f,c)&&(o.m[c]=f[c]);for(u&&u(o),r&&r(a);h.length;)h.shift()();return s&&t.push.apply(t,s),n()},a=self.webpackChunk=self.webpackChunk||[];function c(){for(var n,r=0;r<t.length;r++){for(var a=t[r],c=!0,i=1;i<a.length;i++){var l=a[i];0!==e[l]&&(c=!1)}c&&(t.splice(r--,1),n=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=function(){}),n}a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a));var i=o.x;o.x=function(){return o.x=i||function(){},(n=c)()}}(),o.x()}();