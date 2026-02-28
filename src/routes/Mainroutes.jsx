import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/details/:id" element={<SingleRecipe />}></Route>
      <Route path="/create-recipe" element={<Create />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Mainroutes;
