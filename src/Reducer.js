export const initialState = {
    cart: [],
    user: null,
};

export const totalPrice = (cart) =>
    cart.reduce((accumulator, item) => item.price + accumulator, 0);

export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.product],
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};