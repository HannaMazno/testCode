"use strict";

const menuLink = document.querySelector('.md_link '),
      menuLinkContent = document.querySelector('.mdl_content ');


   menuLink.addEventListener('click', (event)=> {
         if(event.target && event.target.matches('a')) {
             menuLinkContent.classList.add('show');
         }
   });
      


const wraper  = document.querySelector('.wraper'),
     ellements =document.querySelectorAll('.ho_item');


wraper.addEventListener('click', (event)=> {
      if (event.target && event.target.matches("div.ho_item")) {
            ellements.classList. add('.ho_item_delite ');
      } else {
          ellements.classList. remove('.ho_item_delite');
      }
});


// slider

const line = document.querySelector('.line');
    let left = 0;

    
line.addEventListener('click', sliderMove );
function sliderMove () {
      let storeWrap =     document.querySelector('.store_wrap');
       left = left -310;

      if (left < -1240 ) {
             left = 0;
      }
      storeWrap.style.left = left + "px";
}






// const newItem = document.createElement('div');
// newItem.classList.add('.ho_item');
// wraper.append(newItem);

    


// function addBlackFon (item) {
   
//             if( !item.classList.contains('ho_item_delite ')) {
//                 item.classList.add('ho_item_delite');
//             } else {
//                 item.classList.remove('ho_item_delite');
//             }
//       }

    
   
    


// items[0].addEventListener('click', () => {
//       if( !items[3].classList.contains('ho_item_delite ')) {
//           items[3].classList.add('ho_item_delite');
//       } else {
//           items[3].classList.remove('ho_item_delite');
//       }
// });

// items.forEach((item) => {
//     addEventListener('click', () => {
//         if( !item.classList.contains('ho_item_delite ')) {
//             item.classList.add('ho_item_delite');
//         } else {
//             item.classList.remove('ho_item_delite');
//         }
//     });
// });
