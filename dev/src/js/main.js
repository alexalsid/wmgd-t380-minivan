
$(document).ready(function () {
    console.log("ready!");
    var divs = document.querySelector('.technology').children;
    var nums = document.querySelector('.controller').children;


    function revealFirst(){
        console.log('click');

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
   

});
