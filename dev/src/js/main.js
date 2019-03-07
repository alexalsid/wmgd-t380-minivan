
<<<<<<< HEAD
$(document).ready(function () {
    console.log("ready!");
    var divs = document.querySelector('.technology').children;
    var nums = document.querySelector('.controller').children;
=======
>>>>>>> 7554954047eb3c32983a0ae072487a85496882a8


    function revealFirst(){
        console.log('click');

<<<<<<< HEAD
        divs[0].classList.add('active');
        divs[1].classList.remove('active');
        divs[2].classList.remove('active');
        divs[3].classList.remove('active');
       

    }

    function revealSecond(){
        console.log('click');
    

        divs[0].classList.remove('active');
        divs[1].classList.add('active');
        divs[2].classList.remove('active');
        divs[3].classList.remove('active');

    }

    function revealThird(){
        console.log('click');
       
        divs[0].classList.remove('active');
        divs[2].classList.add('active');
        divs[1].classList.remove('active');
        divs[3].classList.remove('active');

    }

    function revealFourth(){
        console.log('click');
       

        divs[0].classList.remove('active');
        divs[3].classList.add('active');
        divs[1].classList.remove('active');
        divs[2].classList.remove('active');

    }

    nums[0].addEventListener('click', revealFirst);
    nums[1].addEventListener('click', revealSecond);
    nums[2].addEventListener('click', revealThird);
    nums[3].addEventListener('click', revealFourth);
   








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
=======
});

AOS.init({
 duration: 1200
});
>>>>>>> 15964421db8a4d1cd4c50cb1deb3e734ccb44ee0
