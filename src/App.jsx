import Routing from "./Router";
import { DataProvider } from "./components/DataProvider/DataProvider";
import React, { useContext, useEffect, useState } from "react";
import { initialState, reducer } from "./Utility/reducer";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./utility/firebase";
import { Type } from "./utility/action.type";
function App() {
  // const [{ user }, dispatch] = useContext(DataContext);

  const [{ user }, dispatch] = useState(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <DataProvider reducer={reducer} initialState={initialState}>
        <Routing />
      </DataProvider>
    </>
  );
}

export default App;
