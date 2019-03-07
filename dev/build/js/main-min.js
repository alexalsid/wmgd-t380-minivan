<<<<<<< HEAD
var $burger=$("#burger"),$navContainer=$("#nav-container"),$TopLine=$("#TopLine"),$MiddleLine=$("#MiddleLine"),$BottomLine=$("#BottomLine"),isMenuOut=!1;function menuActions(){console.log("working"),isMenuOut=!1===isMenuOut?(TweenMax.set($navContainer,{display:"block"}),TweenMax.from($navContainer,.25,{alpha:0}),TweenMax.to([$TopLine,$MiddleLine,$BottomLine],.25,{stroke:"#ffffff"}),!0):(TweenMax.to($navContainer,.25,{alpha:0,onComplete:setDisplayNone}),TweenMax.to([$TopLine,$MiddleLine,$BottomLine],.25,{stroke:"#000000"}),!1)}function setDisplayNone(){console.log("setting"),TweenMax.set($navContainer,{display:"none"}),TweenMax.set($navContainer,{alpha:.8})}function burgerOver(){!0===isMenuOut&&TweenMax.to($TopLine,.5,{rotate:-90})}function burgerOut(){}$burger.on("click",menuActions);
=======
$(document).ready(function(){console.log("ready!")}),AOS.init({duration:1200});
>>>>>>> 15964421db8a4d1cd4c50cb1deb3e734ccb44ee0
