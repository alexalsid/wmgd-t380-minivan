










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
        TweenMax.to([$TopLine,$MiddleLine,$BottomLine],0.25,{stroke:"#ffffff"});
        // TweenMax.to($TopLine,0.25,{rotation:45,transformOrigin:"center"});
        // TweenMax.to($BottomLine,0.25,{rotation:-45,transformOrigin:"center"});
        isMenuOut = true;
    }

    else{
        TweenMax.to($navContainer,0.25,{alpha:0, onComplete: setDisplayNone});
        TweenMax.to([$TopLine,$MiddleLine,$BottomLine],0.25,{stroke:"#000000"});
        // TweenMax.to($TopLine,0.25,{rotation:0});
        // TweenMax.to($BottomLine,0.25,{rotation:0});
        isMenuOut = false;


    }
}

function setDisplayNone(){
  console.log("setting");
  TweenMax.set($navContainer,{display:"none"});
  TweenMax.set($navContainer,{alpha:0.8});
}



$burger.on("click", menuActions);


// $burger.on("mouseenter", burgerOver);
// this is the function that will be called when the mouse is rolled over the burger

function burgerOver(){

    if(isMenuOut === true){
          TweenMax.to($TopLine,0.5,{rotate:-90});

}
  else {


}
}


  // $burger.on("mouseleave", burgerOut);

function burgerOut() {

  if (isMenuOut === true) {

  }

  else{


  }
}
