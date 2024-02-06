import Routing from "./Router";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utitlity/reducer";
function App() {
  return (
    <>
      <DataProvider reducer={reducer} initialState={initialState}>
        <Routing />
      </DataProvider>
    </>
  );
}

export default App;
