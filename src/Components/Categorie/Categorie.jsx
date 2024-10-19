import { Link } from 'react-router-dom';
import './Categorie.css';


const Categorie = ({categorie}) => {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = categorie;
    return (
        <div className='div'>
            <h2>ID: <span>{idCategory}</span> Name: {strCategory}</h2>
            <img src={strCategoryThumb} alt="" />
            <Link to={`/categorie/${idCategory}`}>Show Details</Link>
        </div>
    );
};

export default Categorie;