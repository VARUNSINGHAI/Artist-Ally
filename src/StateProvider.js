import React,{createContext, useContext, useReducer } from "react";
//importing the context API stuff here
export const StateContext=createContext();
//Making the data layer here from the data layer u can use the data wherever u can

//from next line onwards what we have done is making data layer as a packed type of something
//whosoever need the data can use this package StateProvider and get stuff out of it
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);