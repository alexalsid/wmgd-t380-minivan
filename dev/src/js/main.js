










var $burger = $('#burger');
var $navContainer = $('#nav-container');
var $TopLine = $('#TopLine');
var $MiddleLine = $('#MiddleLine');
var $BottomLine = $('#BottomLine');

var isMenuOut = false;

function menuActions(){

    console.log("working");
    if(isMenuOut === false){
        TweenMax.set($navContainer,{display:"block"});
        TweenMax.from($navContainer,0.25,{alpha:0});
        isMenuOut = true;
    }

    else{
        TweenMax.to($navContainer,0.5,{opacity:0, onComplete: setDisplayNone});
        // TweenMax.set($navContainer,{display:"none"});
        // TweenMax.from($navContainer,0.25,{alpha:1});
        // TweenMax.to($navContainer,0.25,{alpha:0});

        isMenuOut = false;

    }
}

function setDisplayNone(){
  TweenMax.set($navContainer,{display:"none"});
}

$burger.on("click", menuActions);


// $burger.on("mouseenter", burgerOver);
// this is the function that will be called when the mouse is rolled over the burger

// function burgerOver(){
//
//     if(isMenuOut === true){
//
//
// }
//   else {
//
//
// }
// }

//
//   $burger.on("mouseleave", burgerOut);
//
// function burgerOut() {
//
//   if (isMenuOut === true) {
//
//   }
//
//   else{
//
//
//   }
// }
