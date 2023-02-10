"use strict";

//==============Mouse Over Effect on Logo Starts=========================================
const logo = document.querySelector("body > header > div:nth-child(1) > a");
const basketLogo = document.querySelector(".fa-shopping-basket");
const logoName = document.querySelector(".logo");

logo.onmouseover = () => {
  basketLogo.setAttribute(
    "style",
    "color:#130f40; transform: translateX(0.7rem);"
  );
  logoName.setAttribute("style", "color:#ff7800; ");
};
logo.onmouseleave = () => {
  basketLogo.setAttribute("style", "color:#ff7800;");
  logoName.setAttribute("style", "color:#130f40;");
};
//==============End ofMouse Over Effect =========================================

//=============Search box toggle effect Starts======================
const searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navBar.classList.remove("active");
};
//=============Search box toggle effect Ends======================

//===========shopping cart toggle effect Starts=================
let shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navBar.classList.remove("active");
};
//===========shopping cart toggle effect Ends=================

//=================form toggle effect Starts=================
let loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector("#login-btn");

loginBtn.onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navBar.classList.remove("active");
};
//=================form toggle effect Ends=================

//=================menu bar toggle effect Starts=================
let navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
//=================menu bar toggle effect Ends=================

//=========== SHOWING MODAL BY CLICKING ON DELETE ICON =================
const deleteIcons = document.querySelectorAll(".fa-trash");
const modalMessage = document.querySelector(".modal-message");

deleteIcons.forEach((deleteIcon) => {
  deleteIcon.addEventListener("click", (e) => {
    if (e.target.className == "fas fa-trash") {
      modal.classList.toggle("active");
    }
  });
});
modalMessage.textContent = "Are you sure you want to delete?";
//=========== END OF SHOWING MODAL BY CLICKING ON DELETE ICON =================

//====================CLOSE MODAL ==================

//close modal by cancel button
const cancleModal = document.querySelector(
  "body > header > div.modal-container > div > div > div.modal-btn-container > button:nth-child(2)"
);
const modal = document.querySelector(".modal-container");
cancleModal.addEventListener("click", () => {
  modal.className = "modal-container";
});

//close modal by close button
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", (e) => {
  if (e.target.className == "x") {
    modal.classList = "modal-container";
  }
});
//==============CLOSE MODAL ENDS ====================

/*
const modalOkBtn = document.querySelector("body > header > div.modal-container.active > div > div > div.modal-btn-container > button:nth-child(1)");
modalOkBtn.addEventListener("click", () => { 
    
    //modal.classList = ("modal-container");
    shoppingCart.addEventListener("click", (e) => { 

        if (e.target.className == "fas fa-trash") {

            shoppingCart.removeChild(e.target.parentElement);
            
        }
    });

}); 
    
 */

/*
const productButtons = document.querySelector("#products").querySelectorAll(".btn");
productButtons.forEach((productButton) => { 

    productButton.addEventListener("click", (e) => { 
        let children = productButton.parentElement.children;
        //getting product details
        const image = children[0].src;
        const productName = children[1].textContent;
        const productPrice = children[2].textContent;

        //creating a div element
        const divBox = document.createElement("div").className = "box";
        const iTrashCan = document.createElement("i").className = "fas fa-trash";
        const img = document.createElement("img");

        divBox.appendChild(iTrashCan);
        divBox.appendChild(img.setAttribute("src", image));
        
        shoppingCart.appendChild(divBox);
        
    });
});









//Window scroll effect on btns
/*window.onscroll = () => {
    
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
    
};*/

//=============PRODUCTS SLIDER EFFECT ===================
let swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
//=============END OF PRODUCTS SLIDER EFFECT ===================

//=============CUSTOMER'S REVIEW SLIDER EFFECT STARTS ===============
let swiper2 = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
//=============END OF CUSTOMER'S REVIEW SLIDER EFFECT ===================

// const pContent = document.querySelectorAll(".close");
// const pContentBtn = document.querySelectorAll("#button");

// const icon = document.createElement("i");
// icon.className = "fas fa-arrow-up";

// pContentBtn[0].addEventListener("click", function() {

//     if (pContent[0].className == "close"){

//         pContent[0].className = "open";

//         pContentBtn[0].innerHTML = "Show Less"
//         pContentBtn[0].appendChild(icon);

//     }else{
//         pContent[0].className = "close";
//         pContentBtn[0].innerHTML = "Read More"

//     }

// });

// pContentBtn[1].addEventListener("click", function() {

//     if (pContent[1].className == "close"){

//         pContent[1].className = "open";
//         pContentBtn[1].innerHTML = "Show Less"
//         pContentBtn[1].appendChild(icon);

//     }else{
//         pContent[1].className = "close";
//         pContentBtn[1].innerHTML = "Read More"
//     }

// });

// pContentBtn[2].addEventListener("click", function() {

//     if (pContent[2].className == "close"){

//         pContent[2].className = "open";
//         pContentBtn[2].innerHTML = "Show Less"
//         pContentBtn[2].appendChild(icon);

//     }else{
//         pContent[2].className = "close";
//         pContentBtn[2].innerHTML = "Read More"
//     }

// });
