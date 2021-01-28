
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

const overlay = document.querySelector('.ao-overlay-container');

// overlay functionality
overlay.addEventListener('click', e => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});


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



const productCatalogGroups = [
    'All Products', 
    'Skincare',
    'Hair Care',
    'Wellness'
];

const filterContainer = document.querySelector('.filter-container');
const filterSelectMenu = filterContainer.querySelector('.filter-select-menu-container');
const filterSelectMenuIcon = filterContainer.querySelector('i');
const filterDropDown = filterContainer.querySelector('.product-group-dropdown');
const groupDropDown = document.querySelector('.group-dropdown');

const filterType = document.querySelector('.filter-type');
filterContainer.addEventListener('click', e => {
    if (e.target === filterSelectMenu || e.target.parentNode === filterSelectMenu) {
        filterDropDown.classList.toggle('active');
        filterSelectMenuIcon.classList.toggle('spin');
    }
});


productCatalogGroups.forEach((group) => {
    groupDropDown.innerHTML += 
    `
    <li class="group-item">${group}</li>
    `
});

groupDropDown.addEventListener('click', e => {
    const groupItems = document.querySelectorAll('.group-item');
    groupItems.forEach((item) => {
        if (e.target === item) {
            filterDropDown.classList.toggle('active');
            filterSelectMenuIcon.classList.toggle('spin');
            filterType.textContent = e.target.textContent;
        }
    });
});








/* ================================== */
// pricing
/* ================================== */



const priceFooter = document.querySelector('.price-footer');
const priceHeader = document.querySelector('.price-header');
const priceHeaderIcon = priceHeader.querySelector('i');
const html = document.querySelector('html');

priceHeader.addEventListener('click', e => {
    priceFooter.classList.toggle('open-price-ui');
    priceHeaderIcon.classList.toggle('active');
    
});



/* ================================== */
// END pricing
/* ================================== */













// product catalog functionality




const skincare = [];
const haircare = [];
const wellness = [];
const totalProducts = [];

function createProductList(groupArray, group, collection, type) {
    groupArray.push({
        sectionHeader: group, // header
        type: type, // used for filter
    });
    groupArray.push({
        productList: []
    });

    collection.forEach((item) => {
        groupArray[1].productList.push({
            name: item.name,
            longDesc: item.longDesc,
            localImg: item.localImg,
            oneTimePrice: item.oneTimePrice,
            orderPrice: item.orderPrice
        });
    });
    totalProducts.push(groupArray);
}



createProductList(skincare, "Skincare", products[2], "skincare");
createProductList(haircare, "Hair Care", products[3], "haircare");
createProductList(wellness, "Wellness", products[4], "wellness");
console.log(totalProducts);

const productCatalogContent = document.querySelector('.product-catalog-content');

totalProducts.forEach((productSection) => {
    productCatalogContent.innerHTML += 
    `<section class="${productSection[0].type}">
        <h3>${productSection[0].sectionHeader}</h3>
        <div class="product-line-${productSection[0].type} pls">
        </div>
    </section>
    `
});

const skincareSection = document.querySelector('.product-line-skincare');
const haircareSection = document.querySelector('.product-line-haircare');
const wellnessSection = document.querySelector('.product-line-wellness');

function renderProductCards(line, section) {
    line[1].productList.forEach((item) => {
        section.innerHTML += 
        `
        <div class="product-catalog-card">
            <div class="product-image-container">
                <i class="fas fa-check-circle prod-confirm"></i>
                <i class="fas fa-search"></i>
                <img src="${item.localImg}" alt="Product image for ${item.name}">
            </div>
            <h4 class="product-name">${item.name}</h4>
            <button class="product-card-btn btn-link round2">
                <p class="default-content content">ADD <span class="price-divider">|</span> $${item.orderPrice}</p>
                <p class="content adding-content hidden"><img class="btn-loader" src="./assets/loaders/GLdqYB2.gif">Adding...</p>
                <p class="content added-content hidden"><i class="fas fa-check"></i>Added!</p>
            </button>
        </div>
        `
    });
}

renderProductCards(skincare, skincareSection);
renderProductCards(haircare, haircareSection);
renderProductCards(wellness, wellnessSection);



groupDropDown.addEventListener('click', e => {
    // product catalog section variable
    const pls = document.querySelectorAll('.pls');
    if (e.target.textContent.toLowerCase() === 'all products') {
        pls.forEach((section) => {
            section.parentNode.classList.remove('hide');
        });
    } else
    if (e.target.textContent.toLowerCase() === 'skincare') {
        pls.forEach((section) => {
            section.parentNode.classList.add('hide');
        });
        pls[0].parentNode.classList.remove('hide');
    } else 
    if (e.target.textContent.toLowerCase() === 'hair care') {
        pls.forEach((section) => {
            section.parentNode.classList.add('hide');
        });
        pls[1].parentNode.classList.remove('hide');
    } else
    if (e.target.textContent.toLowerCase() === 'wellness') {
        pls.forEach((section) => {
            section.parentNode.classList.add('hide');
        });
        pls[2].parentNode.classList.remove('hide');
    }
});




const prodCard = document.querySelectorAll('.product-catalog-card');
const prodConfirm = document.querySelectorAll('.prod-confirm');
const prodBtn = document.querySelectorAll('.product-catalog-card button');




prodBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // phase 1
        // adding product to bag
        btn.style.pointerEvents = 'none';
        btn.style.opacity = '.4';
        btn.querySelectorAll('.content')[0].classList.add('hidden');
        btn.querySelectorAll('.content')[1].classList.remove('hidden');

        // phase 2
        // showing success
        setTimeout(() => {
            btn.querySelectorAll('.content')[1].classList.add('hidden');
            btn.querySelectorAll('.content')[2].classList.remove('hidden');
            btn.classList.add('success');
            btn.style.opacity = '1';
            prodConfirm[index].style.opacity = '1';
            prodCard[index].classList.add('card-success');
            // phase 3
            // restoring btn defaults
            setTimeout(() => {
                btn.classList.remove('success');
                btn.style.pointerEvents = 'auto';
                btn.querySelectorAll('.content')[2].classList.add('hidden');
                btn.querySelectorAll('.content')[0].classList.remove('hidden');
                // adding confirmation to product card
                
            }, 2000)

        }, 2000)
    });
})