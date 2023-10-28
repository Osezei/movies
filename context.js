import React, {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useState,
} from "react";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [data, setData] = useState([]);
  const { inputValue, setInputValue } = useState("");
  const { stockData, setStockData } = useState([]);
  const [fetchData, setFetchData] = useState([]);

  //search menu
  const updateSearch = (value) => {
    setInputValue(value);
    const newList = setData.filter((item) => item.title.includes(value));
    setData(newList);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        inputValue,
        updateSearch,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
