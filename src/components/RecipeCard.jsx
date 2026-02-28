import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block mr-3 mb-3 w-[23vw] rouded overflow-hidden shadow scale-100 duration-100"
    >
      <img className="w-full h-[20vh] object-cover" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 text-red-500">{chef}</small>
      <p className="px-2">
        {desc.slice(0, 100)}...{""}
        <small className="text-blue-500">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
