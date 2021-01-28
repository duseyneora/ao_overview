   
// FUNCTIONS


// function to create first and last name abbreviations
function nameSlice(first, last) {
    let firstName = first;
    let lastName = last;

    let split_fn = firstName.split("");
    let split_ln = lastName.split("");

    let slicedName = split_fn[0] + split_ln[0];
}




function displayPrimaryOrderOnLoad() {
    productsContainer_current.innerHTML = '<img class="loader" src="./assets/loaders/GLdqYB2.gif">'
    const selectActiveOption = document.querySelector('.select-active-option');
    selectActiveOption.parentNode.classList.add('disabled');
    // set timeout to mimic a call to an API awaiting the response
    setTimeout(() => {

        settingsContainer.classList.remove('hide');
        settingsArrow.classList.toggle('active');
        let settingsCard = document.querySelectorAll('.ao-settings-card-container .card');
        settingsCard.forEach((card) => {
            card.classList.remove('shrink');
        })

        selectActiveOption.innerHTML = `<i class="viewing-order fas fa-eye"></i> ${currentUser[0].orders[0].order_id}`
        selectActiveOption.parentNode.classList.remove('disabled');
        productsContainer_current.innerHTML = ''; 
        currentUser[0].orders[0].products.forEach((item) => {
            if (item.inStock) {
                productsContainer_current.innerHTML += 
                `
                <div class="product-card current">
                    <div class="img-container card-child">
                        <img src="${item.asset}" alt="Image for ${item.name} product">
                    </div>
                    <div class="name-and-qty card-child">
                        <p class="product-name-copy">${item.name}</p>
                        <p class="qty-copy">Qty: <span class="qty-amount">${item.qty}</span></p>
                    </div>
                    <div class="price card-child">
                        <p class="price-copy">$${item.ao_price}</p>
                    </div>
                </div>
                `
            } else {
                productsContainer_current.innerHTML += 
            `
            <div class="product-card current outofstock-card">
            
                <div class="img-container card-child">
                    <img src="${item.asset}" alt="Image for ${item.name} product">
                </div>
                <div class="name-and-qty card-child">
                    <p class="product-name-copy">${item.name}</p>
                    <p class="qty-copy">Qty: <span class="qty-amount">${item.qty}</span></p>
                </div>
                <div class="price card-child">
                    <p class="price-copy">$${item.ao_price} <i class="fas fa-exclamation-circle outofstock-icon"></i></p>
                    <p class="outofstock-copy">Out of Stock</p>
                </div>
            </div>
            `
            }
        });
    }, 1000);
}



function iterateClass(collection, className, e) {
    collection.forEach((item) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i ++) {
                collection[i].classList.remove(className);
            }
            e.target.classList.add(className);
        }
    });
}



function showOverlay(color) {
    overlay.classList.add('active');
    overlay.style.backgroundColor = color;
}

function hideOverlay() {
    overlay.classList.remove('active');
}


let navIndex = 0;
const prevArrow = document.querySelector('.controls .prev');
const nextArrow = document.querySelector('.controls .next');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContent = document.querySelector('.carousel-content');
const carouselControls = document.querySelector('.carousel-container .controls');

carouselControls.addEventListener('click', e => {
    if (e.target === prevArrow) {
        if (navIndex === 0) {
            navIndex = carouselItems.length -1;
            showCarouselItem();
        } else {
            navIndex -= 1;
            showCarouselItem();
        }
    } else 
    if (e.target === nextArrow) {
        if (navIndex === carouselItems.length -1) {
            navIndex = 0;
            showCarouselItem();
        } else {
            navIndex += 1;
            showCarouselItem();
        }

    }
});

function showCarouselItem() {
    carouselItems.forEach((item) => {
        item.classList.add('hidden-carousel-item');
    });
    carouselItems[navIndex].classList.remove('hidden-carousel-item');
}






// END FUNCTIONS

const userInfoContainer = document.querySelector('.user-info-container');
// user image
const userImage = userInfoContainer.querySelector('img');
userImage.src = `${currentUser[0].user_avatar}`
// user name
const userName = userInfoContainer.querySelector('.name');
userName.textContent = `${currentUser[0].first_name} ${currentUser[0].last_name}`;
// user ID
const userID = userInfoContainer.querySelector('.user-id');
userID.textContent = `ID: ${currentUser[0].user_id}`

// showing auto order selections
const customSelect = document.querySelector('.custom-select-container');
const selectMenu = customSelect.querySelector('.menu-box');
const customSelectArrow = customSelect.querySelector('i');
customSelect.addEventListener('click', e => {

    // close price footer if open
    priceFooter.classList.remove('open-price-ui');
    priceHeaderIcon.classList.remove('active');
    autoOrderSettings.classList.remove('margin-space');
    // open select menu
    selectMenu.classList.toggle('active');
    customSelectArrow.classList.toggle('active');
});


// 2
// populating the auto order select menu with selections

const selectContainer = document.querySelector('.ao-select-container');
// order count
const count = selectContainer.querySelector('.count');
count.innerHTML = `<p>${currentUser[0].orders.length}</p>`
// selections
const orderSelections = selectContainer.querySelector('.auto-order-selections');
currentUser[0].orders.forEach((order) => {
    orderSelections.innerHTML += 
    `<li class="order-item">
        <p class="order-number-copy">${order.order_id}</p>
        <p class="product-count">${order.products.length}</p>
    </li>
    `
});
// adding create new order 
orderSelections.innerHTML += "<li class='create-new'><p>Create a New Auto Order</p></li>"

const createNew = document.querySelector('.create-new');
const overlay = document.querySelector('.ao-overlay-container');
createNew.addEventListener('click', () => {
    
    showOverlay('rgba(0,0,0,0.55)');
    overlay.classList.add('flex-overlay');
    overlay.innerHTML = '<img class="page-loader" src="./assets/loaders/GLdqYB2.gif">';
    //load to next route
    setTimeout(() => {
        window.location.href = '../routes/create-new/index.html';
    }, 2000)
    
});


// 3
// updating text inside selector when selection is made
selectMenu.addEventListener('click', e => {
    const listItems = orderSelections.querySelectorAll('li');
    const selectActiveOption = document.querySelector('.select-active-option');
    listItems.forEach((item, index) => {
        if (e.target === item && item.classList.contains('order-item')) {
            selectActiveOption.innerHTML = `<i class="viewing-order fas fa-eye"></i> ${currentUser[0].orders[index].order_id}`
            updateProductCards(e, index);
        }
    });
});


// 3a
// overlay functionality
overlay.addEventListener('click', e => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
})



// 4
// populating product cards


// variables
const productsContainer_current = document.querySelector('.current-products-container');


// function to populate page on load - can be found in func.js
displayPrimaryOrderOnLoad();

// current index
let currentIndex = '';

// this function call can be found inside above event listener ( 3 )
function updateProductCards(e, index) {

    const currentIndex = index;
    productsContainer_current.innerHTML = ''; 
    productsContainer_current.innerHTML = '<img class="loader" src="./assets/loaders/GLdqYB2.gif">'

    settingsContainer.classList.add('hide');
    settingsArrow.classList.toggle('active');
        let settingsCard = document.querySelectorAll('.ao-settings-card-container .card');
        settingsCard.forEach((card) => {
            card.classList.add('shrink');
        })

    // set timeout to mimic a call to an API awaiting the response
    setTimeout(() => {
        productsContainer_current.innerHTML = ''; 

        settingsContainer.classList.remove('hide');
        settingsArrow.classList.toggle('active');
        let settingsCard = document.querySelectorAll('.ao-settings-card-container .card');
        settingsCard.forEach((card) => {
            card.classList.remove('shrink');
        })


        currentUser[0].orders[index].products.forEach((item) => {
            if (item.inStock) {
                productsContainer_current.innerHTML += 
                `
                <div class="product-card current">
                    <div class="img-container card-child">
                        <img src="${item.asset}" alt="Image for ${item.name} product">
                    </div>
                    <div class="name-and-qty card-child">
                        <p class="product-name-copy">${item.name}</p>
                        <p class="qty-copy">Qty: <span class="qty-amount">${item.qty}</span></p>
                    </div>
                    <div class="price card-child">
                        <p class="price-copy">$${item.ao_price}</p>
                    </div>
                </div>
                `
            } else {
                productsContainer_current.innerHTML += 
            `
            <div class="product-card current outofstock-card">
            
                <div class="img-container card-child">
                    <img src="${item.asset}" alt="Image for ${item.name} product">
                </div>
                <div class="name-and-qty card-child">
                    <p class="product-name-copy">${item.name}</p>
                    <p class="qty-copy">Qty: <span class="qty-amount">${item.qty}</span></p>
                </div>
                <div class="price card-child">
                    <p class="price-copy">$${item.ao_price}</p>
                    <p class="outofstock-copy">Out of Stock <i class="fas fa-exclamation-circle outofstock-icon"></i></p>
                </div>
            </div>
            `
            }
        });
    }, 1700);
}




/* ================================== */
// auto order settings
/* ================================== */


// 1 toggle auto order settings display
const settingsSectionHeader = document.querySelector('.auto-order-settings .header');
const settingsContainer  = document.querySelector('.ao-settings-card-container');
const settingsArrow = settingsSectionHeader.querySelector('i');


settingsSectionHeader.addEventListener('click', () => {
    settingsArrow.classList.toggle('active');
    settingsContainer.classList.toggle('hide');
        let settingsCard = document.querySelectorAll('.ao-settings-card-container .card');
        settingsCard.forEach((card) => {
            card.classList.toggle('shrink');
        });
});








/* ================================== */
// pricing
/* ================================== */


// 1 
// coupon/promo code entry
const couponBtn = document.querySelector('.coupon-btn');
const couponInputContainer = document.querySelector('.coupon-input-container');
const autoOrderSettings = document.querySelector('.auto-order-settings');

couponBtn.addEventListener('click', () => {
    couponInputContainer.classList.toggle('active');
});


const priceFooter = document.querySelector('.price-footer');
const priceHeader = document.querySelector('.price-header');
const priceHeaderIcon = priceHeader.querySelector('i');
const html = document.querySelector('html');

priceHeader.addEventListener('click', e => {
    priceFooter.classList.toggle('open-price-ui');
    priceHeaderIcon.classList.toggle('active');
    autoOrderSettings.classList.toggle('margin-space');
    setTimeout(() => {
        html.scrollTop = 500000;
        setTimeout(() => {
            couponInputContainer.classList.add('active');
        }, 800);
    }, 300);
});

