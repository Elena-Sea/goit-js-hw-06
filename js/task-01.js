'use strict'

const listCategories = categories.querySelectorAll('.item');

const categoriesNumber = () => {
    return `Number of categories: ${listCategories.length}`;
};
console.log(categoriesNumber());


listCategories.forEach(function (categorie) {
    console.log(`Category: ${categorie.firstElementChild.textContent}`);

    const listItems = categorie.querySelectorAll('li');
console.log(`Elements: ${listItems.length}`);
    
});

