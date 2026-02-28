import { createContext, useState } from "react";

export const RecipeDataContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  return (
    <RecipeDataContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeDataContext.Provider>
  );
};

export default RecipeContext;
