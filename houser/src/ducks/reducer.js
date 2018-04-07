var initialState = {
  header: "Houser header"
};

const CHANGE_DATA = "CHANGE_DATA";

export function changeData(data) {
  // var {data} = state;
  return {
    type: CHANGE_DATA,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}
