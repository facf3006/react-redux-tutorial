import cartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type:cartActionTypes.ADD_PRODUCT,
    payload,
})
export const removeProductFromCart = (payload) => ({
    type:cartActionTypes.REMOVE_PRODUCT,
    payload,
})
export const increaseProductToCart = (payload) => ({
    type:cartActionTypes.INCREASE_PRODUCT,
    payload,
})
export const decreaseProductToCart = (payload) => ({
    type:cartActionTypes.DECREASE_PRODUCT,
    payload,
})