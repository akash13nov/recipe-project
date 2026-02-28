import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(RecipeDataContext);

  const rendorrecipes = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ));

  return <div>{rendorrecipes}</div>;
};

export default Recipes;
