// DataProvider.jsx
import React, { createContext, useReducer } from "react";

export const DataContext = createContext(); // creating context

export const DataProvider = ({ children, reducer, initialState }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);
