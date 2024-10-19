import { useLoaderData } from "react-router-dom";


const CategorieDetails = () => {
   
    const {meals: [categorie]} = useLoaderData();
    console.log(categorie);
    const {strArea, strCategory, strInstructions, strMealThumb, strTags} = categorie;
    return (
        <div>
            <h1>Category Details</h1>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strCategory}</h2>
            <h3>Area: {strArea}</h3>
            <p>Instruction: {strInstructions}</p>
            <p>foodTags: {strTags}</p>
        </div>
    );
};

export default CategorieDetails;