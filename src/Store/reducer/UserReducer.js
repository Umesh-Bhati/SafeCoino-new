

export default function CartReducer(state, action) {
  switch (action.type) {
    case 'Email':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          qty: action.payload.qty,
        },
      
      ];
    case 'REMOVE_CART':
      return state.filter(i => i.id !== action.payload.id);
    case 'INCREAMENT_ITEM':
      ++state[action.payload.index].qty;

      return [...state];
    case 'DECREAMENT_ITEM':
      state[action.payload.index].qty === 1
        ? null
        : --state[action.payload.index].qty;
      return [...state];
    default:
      return state;
  }
}