import { BOOK, REMOVE } from "./actionTypes";

const initialState = {
  bookings: []
}

console.log('Bookings-------->', initialState.bookings);

const bookingReducer = (state=initialState, action) => {
      switch (action.type) {
        case BOOK:
          return {
            ...state,
            bookings: [...state.bookings, action.payload]
          };
        
          case REMOVE:
            return {
              ...state,
              bookings: state.bookings?.filter(booking=> booking.id !== action.payload),
               }
      
        default:
          return state;
      }
}

export default bookingReducer;