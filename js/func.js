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





function showOverlay(color) {
    overlay.classList.add('active');
    overlay.style.backgroundColor = color;
}

function hideOverlay() {
    overlay.classList.remove('active');
}