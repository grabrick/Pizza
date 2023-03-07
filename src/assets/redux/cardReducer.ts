import { cardItem } from "../types/types";
const GET_ITEMS = "GET-ITEMS"

const initialState = {
    cardData: [],
};

const cardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ITEMS:
        return {
            ...state, cardData: action.cardData
        }
    default:
        return state;
    }
}

 
export const getItems = (cardData: cardItem) => ({
    type: GET_ITEMS,
    cardData: cardData
})

export default cardReducer;