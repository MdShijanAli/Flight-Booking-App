import { BOOK, REMOVE } from "./actionTypes";

export const book = (value) => {
    console.log('value------->', value);
    return {
        type: BOOK,
        payload: value
    };
};

export const remove = (id) => {
    return {
        type: REMOVE,
        payload: id
    };
};
