import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import darkModeReducer from "./mode/darkModeReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer,
    darkMode: darkModeReducer
});

export default rootReducer;