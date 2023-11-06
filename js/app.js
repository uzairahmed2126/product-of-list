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
    };

    // Functionality Of Pagination.
    let initialPage = 1;
    let itemPerPage = 5;
    let paginatedArray = paginationCalculation(initialPage, itemPerPage);

    // Create PaginationData To Add Data With The Help Of Foreach. 
    const paginationData = [
        {},
    ];

    // Get Id Of A Main Container To Append The Pagination Data Buttons And Div
    const pagination = document.getElementById('pagination');
    paginationData.forEach(() => {
        const prev = createBtn();
        prev.className = 'prev btn';
        prev.innerText = 'Prev';
        prev.addEventListener('click', () => {
            initialPage -= 1;
            if (initialPage <= 0) {
                initialPage = 1;
            };
            paginatedArray = paginationCalculation(initialPage, itemPerPage);
            appendData();
        });
        pagination.append(prev);
        for (let i = 0; i <= 4; i++) {
            const pages = createDiv();
            pages.classList.add('page');
            pages.innerHTML = i + 1;
            pages.addEventListener('click', (e) => {
                if (e.target === pages) {
                    console.log(initialPage = i + 1);
                    paginatedArray = paginationCalculation(initialPage, itemPerPage);
                    appendData();
                }
                else {
                    console.log('Check The Issues');
                };
            });
            pagination.append(pages);
            appendData();
        };

        const next = createBtn();
        next.className = 'next btn';
        next.innerText = 'Next';
        next.addEventListener('click', () => {
            initialPage += 1;
            console.log(initialPage);
            if (initialPage >= 6) {
                initialPage = 1;
            };
            paginatedArray = paginationCalculation(initialPage, itemPerPage);
            appendData();
        });
        pagination.append(next);
    })
    function createBtn() {
        const newBtn = document.createElement('button');
        return newBtn;
    };

    function createDiv() {
        const newDiv = document.createElement('div');
        return newDiv;
    }
    function paginationCalculation(currentPage, itemPerPage) {
        const currentNumber = currentPage - 1;
        const currentItem = currentNumber * itemPerPage;
        const lastItem = currentItem + itemPerPage;
        return productData.slice(currentItem, lastItem);
    }
    function loadHeading() {
        const idDiv = createDiv();
        idDiv.title='Click and change the page to see sorted data';
        idDiv.innerText = 'id';

        const titleDiv = createDiv();
        titleDiv.title='Click and change the page to see sorted data';
        titleDiv.innerText = 'title';

        const priceDiv = createDiv();
        priceDiv.title='Click and change the page to see sorted data';
        priceDiv.innerText = 'price';

        const descDiv = createDiv();
        descDiv.title='Click and change the page to see sorted data';
        descDiv.innerText = 'description';

        const imgDiv = createDiv();
        imgDiv.title='Click and change the page to see sorted data';
        imgDiv.innerText = 'image';

        tableHeading.append(idDiv, titleDiv, priceDiv, descDiv, imgDiv);
    }

    function appendData() {
        productBody.innerHTML = '';
        paginatedArray.forEach((eachProduct) => {
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
