import { useLoaderData } from "react-router-dom";
import Categorie from "../Categorie/Categorie";
import './Categories.css'

const Categories = () => {

    const {categories} = useLoaderData();
    console.log(categories)

    return (
        <div>
           <h1>This is my categories bar</h1> 
           <h2>Here my all meal number: {categories.length}</h2>
           <div className="style">
                {
                    categories?.map(categorie => <Categorie key={categorie.idCategory} categorie={categorie}></Categorie>)
                }
           </div>
        </div>
    );
};

export default Categories;