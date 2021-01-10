'use strict';


$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
  });

  const searchFeald = document.querySelector('.wish_list-search');
  const clearListBtn = document.querySelector('.cl_list_btn');
   clearListBtn.addEventListener('click', ()=> {
         searchFeald.classList.add('show');
   });
