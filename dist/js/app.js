"use strict";var randomInt=function(t,r){var e=parseInt(r),i=parseInt(t);return Math.floor(Math.random()*(e-i+1))+i},Data={rotate2Dactive:!1,rotate2D:10,rotate3Dactive:!1,rotateX:35,rotateY:35,rotateZ:0,perspectiveActive:!1,perspective:700,transformOriginActive:!1,transformOriginX:50,transformOriginY:50,transformOriginZ:-70,scaleActive:!1,scale:1.2,translateActive:!1,translateX:-10,translateY:-20,skewActive:!1,skewX:5,skewY:5,modal:{visible:!1,current:null},sidebar:!1},App=new Vue({el:"#app",data:Data,mounted:function(){var i=this,n=Array.from(document.querySelectorAll("#app > article section"));n.forEach(function(t){t.addEventListener("click",function(t){return t.stopPropagation()})}),Array.from(document.querySelectorAll("#app > aside dl dt a")).forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var r=e.href.split("#")[1];i.modal.current=r,n.forEach(function(t){return t.style.display="none"}),document.querySelector("#app > article section#".concat(r)).style.display="block",i.modalWindowShow()})}),document.querySelector("#app > article > p a").addEventListener("click",function(t){t.preventDefault(),i.modalWindowHide()}),document.querySelector("#app > article").addEventListener("click",function(){return i.modalWindowHide()}),Array.from(document.querySelectorAll("#app > article > section details summary")).forEach(function(r){r.addEventListener("click",function(t){t.preventDefault(),Array.from(r.parentNode.parentNode.querySelectorAll("details")).forEach(function(t){return t.removeAttribute("open")}),r.parentNode.setAttribute("open","")})})},computed:{styleObject:function(){var t={transform:[],"transform-origin":null},r=[];if(0!=this.rotate2D&&360!=this.rotate2D&&this.rotate2Dactive&&r.push("rotate("+this.rotate2D+"deg)"),this.rotate3Dactive&&(this.rotateX&&0!=this.rotateX&&r.push("rotateX("+this.rotateX+"deg)"),this.rotateY&&0!=this.rotateY&&r.push("rotateY("+this.rotateY+"deg)"),this.rotateZ&&0!=this.rotateZ&&r.push("rotateZ("+this.rotateZ+"deg)")),this.perspectiveActive&&r.push("perspective("+this.perspective+"px)"),this.scaleActive&&1!=this.scale&&r.push("scale("+this.scale+")"),!this.translateActive||0==this.translateX&&0==this.translateY||r.push("translate("+this.translateX+"px,"+this.translateY+"px)"),!this.skewActive||0==this.skewX&&0==this.skewY||r.push("skew("+this.skewX+"deg,"+this.skewY+"deg)"),t.transform=r,this.transformOriginActive){var e=(0==this.transformOriginX||50==this.transformOriginX||100==this.transformOriginX?{0:"left",50:"center",100:"right"}[this.transformOriginX]:this.transformOriginX+"%")+" "+(0==this.transformOriginY||50==this.transformOriginY||100==this.transformOriginY?{0:"top",50:"center",100:"bottom"}[this.transformOriginY]:this.transformOriginY+"%");e=this.transformOriginZ&&0!=this.transformOriginZ?e+" "+this.transformOriginZ+"px":e,t["transform-origin"]=e}return t},styleClass:function(){return{transform:this.styleObject.transform.join(" "),transformOrigin:this.styleObject["transform-origin"]?this.styleObject["transform-origin"]:""}},hasStyle:function(){return 0<this.styleObject.transform.length||null!=this.styleObject["transform-origin"]}},filters:{stringOutput:function(t){var r=[];return t.transform.length&&r.push("transform: ".concat(t.transform.join("\n\t\t"),";")),t["transform-origin"]&&r.push("transform-origin: ".concat(t["transform-origin"],";")),r.length?"element {\n\t".concat(r.join("\n\t"),"\n}"):""}},methods:{modalWindowShow:function(){document.querySelector("#app > article").classList.add("visible")},modalWindowHide:function(){document.querySelector("#app > article").classList.remove("visible")},openSidebar:function(){this.sidebar=!0},closeSidebar:function(){this.sidebar=!1},randomRotate2D:function(){this.rotate2D=randomInt(0,359)},resetRotate2D:function(){this.rotate2D=0},randomRotate3D:function(){this.rotateX=randomInt(0,359),this.rotateY=randomInt(0,359),this.rotateZ=randomInt(0,359)},resetRotate3D:function(){this.rotateX=this.rotateY=this.rotateZ=0},randomPerspective:function(){this.perspective=100*randomInt(3,23)},resetPerspective:function(){this.perspective=700},randomTransformOrigin:function(){this.transformOriginX=randomInt(0,100),this.transformOriginY=randomInt(0,100),this.transformOriginZ=randomInt(-250,250)},resetTransformOrigin:function(){this.transformOriginX=this.transformOriginY=50,this.transformOriginZ=0},randomScale:function(){this.scale=randomInt(5,20)/10},resetScale:function(){this.scale=1},randomTranslate:function(){this.translateX=10*randomInt(-10,10),this.translateY=10*randomInt(-10,10)},resetTranslate:function(){this.translateX=this.translateY=0},randomSkew:function(){this.skewX=randomInt(0,180),this.skewY=randomInt(0,180)},resetSkew:function(){this.skewX=this.skewY=0},randomAll:function(){this.randomTransformOrigin(),this.randomRotate2D(),this.randomRotate3D(),this.randomPerspective(),this.randomScale(),this.randomTranslate(),this.randomSkew()},resetAll:function(){this.resetTransformOrigin(),this.resetRotate2D(),this.resetRotate3D(),this.resetPerspective(),this.resetScale(),this.resetTranslate(),this.resetSkew()},activateAll:function(t){this.transformOriginActive=this.rotate2Dactive=this.rotate3Dactive=this.perspectiveActive=this.scaleActive=this.translateActive=this.skewActive=t}}});