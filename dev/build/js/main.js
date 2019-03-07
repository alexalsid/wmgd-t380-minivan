










var $burger = $('#burger');
var $navContainer = $('#nav-container');
var $TopLine = $('#TopLine');
var $MiddleLine = $('#MiddleLine');
var $BottomLine = $('#BottomLine');

var isMenuOut = false;
$navContainer.on("click", menuActions);



function menuActions(){

    console.log("working");
    if(isMenuOut === false){
        // TweenMax.to($navContainer,0.5,{opacity:0});
        TweenMax.set($navContainer,{display:"block"});
        TweenMax.from($navContainer,0.25,{alpha:0});
        isMenuOut = true;
    }

    else{
        // TweenMax.to($navContainer,0.5,{opacity:0.8});
        isMenuOut = false;
    }
}


$burger.on("click", menuActions);


$burger.on("mouseenter", burgerOver);
// this is the function that will be called when the mouse is rolled over the burger

function burgerOver(){

    if(isMenuOut === true){
          TweenMax.to($TopLine,0.5,{rotate:-90});

}
  else {


}
}


  $burger.on("mouseleave", burgerOut);

function burgerOut() {

  if (isMenuOut === true) {

  }

  else{


  }
}
