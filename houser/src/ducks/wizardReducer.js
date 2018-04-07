import axios from "axios";
var initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  items: "",
  forms: []
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const POST_REQ = "POST_REQ";
const GET_REQ = "GET_REQ";

export function getRequest() {
  return {
    type: GET_REQ,
    payload: axios.get("./api/products")
  };
}
export function postRequest(name, address, city, state, zipcode) {
  // const { name, address, city, state, zipcode } = initialState;

  return {
    type: POST_REQ,
    payload: axios.post("./api/addform", {
      name,
      address,
      city,
      state,
      zipcode
    })
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
}
export default function wizardReducer(state = initialState, action) {
  const { forms, items } = state;
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });
    case UPDATE_ZIPCODE:
      return Object.assign({}, state, { zipcode: action.payload });
    case POST_REQ:
      return Object.assign({}, state, { forms: action.payload.data });
    case GET_REQ:
      return Object.assign({}, state, {
        items: action.payload.data
      });
    default:
      return state;
  }
}
