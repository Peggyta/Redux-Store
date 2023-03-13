const initialState = {
    selectedItem: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product)=> 
    total+product.quantity,0);

    let total = items.reduce((total, product)=>
    total+product.price*product.quantity,0).toFixed(2);
    return {itemsCounter, total};
}
const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case"ADD_ITEM":
        if(!state.selectedItem.find(item => item.id === action.payload.id)) {
            state.selectedItem.push({
                ...action.payload,
                quantity:1
            })
        }
        return {
            ...state,
            selectedItem:[...state.selectedItem],
            // ...sumItems(state, selectedItem),
            checkout: false
        }
        case "REMOVE_ITEM":
            const deletedItems = state.selectedItem.filter(item => item.id !== action.payload.id);
            return ({
                ...state,
                selectedItem:[...deletedItems],
                ...sumItems(deletedItems)
            })
        default :
        return state
    }
}

export default cartReducer;