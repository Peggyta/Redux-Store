const itemsTitle = title => { //Titles of products were too long...
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle;
}

const searchTitle = title => {
    const searchSplit = title.split(" ");
    const newSearchSplit= `${searchSplit[0]} ${searchSplit[1]} ${searchSplit[2]}`
    return newSearchSplit;
}

const numberOfItems = (state, id) => {
    const index = state.selectedItem.findIndex(item => item.id === id);
    if(index === -1) {
        return false; // if the app doesn't find a product
    } else {
        return state.selectedItem[index].quantity; //if the app found a product
    }
}

const isInCart = (state, id) => {
    const result = !!state.selectedItem.find(item => item.id === id)
    return result;
}
export {itemsTitle, numberOfItems, isInCart, searchTitle};