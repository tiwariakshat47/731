import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({

    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            //action has action called payload
            state.origin = action.payload
            //set the state origin to action to make the action work
            //thru set origin, passes in action, goes to payload, then goes to state.origin
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    },
});

//destructuring
//exporting navigation slice actions
//exporting each action so app can tap into them
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

//Selectors
//state."name".origin
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//need one primary default export from this file
//connects to the store
export default navSlice.reducer;