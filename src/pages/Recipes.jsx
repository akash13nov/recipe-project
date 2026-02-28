import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(RecipeDataContext);

  const rendorrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? rendorrecipes : "No recipes found!"}
    </div>
  );
};

export default Recipes;
