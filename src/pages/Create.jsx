import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeDataContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(RecipeDataContext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copyData = [...data];
    copyData.push(recipe);
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));

    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
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

      <button className="block px-4 py-2 mt-5 bg-gray-900 rounded cursor-pointer">
        Save Recipes
      </button>
    </form>
  );
};

export default Create;
