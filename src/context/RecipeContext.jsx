import { createContext, useEffect, useState } from "react";

export const RecipeDataContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <RecipeDataContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeDataContext.Provider>
  );
};

export default RecipeContext;
