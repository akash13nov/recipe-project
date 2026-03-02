import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeDataContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(RecipeDataContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => {
    return params.id == recipe.id;
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
    },
  });

  const UpdateHandler = (formData) => {
    const index = data.findIndex((r) => r.id == params.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formData };

    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);

    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl">{recipe?.title}</h1>
        <img className="h-[50vh]" src={recipe?.image} alt="" />
        <h2>{recipe?.chef}</h2>
        <p>{recipe?.desc}</p>
      </div>
      <form className="right w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter Image Url"
        />
        <small className="text-red-500">This is error message</small>

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="Start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr ")}
          placeholder="write ingrediants by comma saprated"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst  ")}
          placeholder="write instructions by comma saprated"
        ></textarea>

        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="cat-1">Breakfast</option>
          <option value="cat-2">Lunch</option>
          <option value="cat-3">Starter</option>
          <option value="cat-4">Dinner</option>
        </select>

        <button className="block px-4 py-2 mt-5 bg-green-400  rounded cursor-pointer">
          Update Recipes
        </button>
        <button
          onClick={DeleteHandler}
          className="block px-4 py-2 mt-5 bg-red-900 rounded cursor-pointer"
        >
          Delete Recipes
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
