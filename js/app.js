import productData from "../dummydata/dummyData.js";
document.addEventListener('DOMContentLoaded', () => {
    const productBody = document.getElementById('product-body');
    const tableHeading = document.getElementById('table-heading');
    tableHeading.addEventListener('click', handleClick);
    function handleClick(event) {
        const sortedField = event.target.innerText;
        productData.sort((a, b) => {
            return a[sortedField] > b[sortedField] ? 1 : -1;
        });
        appendData();
    }
    function createDiv() {
        const newDiv = document.createElement('div');
        return newDiv;
    }
    function loadHeading() {
        const idDiv = createDiv();
        idDiv.innerText = 'id';

        const titleDiv = createDiv();
        titleDiv.innerText = 'title';

        const priceDiv = createDiv();
        priceDiv.innerText = 'price';

        const descDiv = createDiv();
        descDiv.innerText = 'description';

        const imgDiv = createDiv();
        imgDiv.innerText = 'image';

        tableHeading.append(idDiv, titleDiv, priceDiv, descDiv, imgDiv);
    }

    function appendData() {
        productBody.innerHTML = '';
        productData.forEach((eachProduct) => {
            const rowDiv = createDiv();
            rowDiv.classList.add('row');

            const idDiv = createDiv();
            idDiv.innerText = eachProduct.id;

            const titleDiv = createDiv();
            titleDiv.innerText = eachProduct.title;

            const priceDiv = createDiv();
            priceDiv.innerText = eachProduct.price;

            const descDiv = createDiv();
            descDiv.innerText = eachProduct.description;

            const imgDiv = createDiv();
            imgDiv.innerText = eachProduct.image;

            rowDiv.append(idDiv, titleDiv, priceDiv, descDiv, imgDiv);
            productBody.append(rowDiv)
        })
    }
    loadHeading();
    appendData();
})
