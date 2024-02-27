import Header from "../Header/Header";

/* eslint-disable react/prop-types */
const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayOut;
