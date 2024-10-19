import { Link, useNavigate } from "react-router-dom";


const Comment = ({comment}) => {
    
    const { id, name } = comment;

    const navigate = useNavigate();
    const handleClickForDetail = () =>{
        navigate(`/comment/${id}`)
    }

    return (
        <div className="div">
            <h3>User comment id: {id}</h3>
            <h2>User Name: {name}</h2>
           <Link to={`/comment/${id}`}>Comment Detail</Link>
           <button onClick={handleClickForDetail}>Show Comment Detail</button>
        </div>
    );
};

export default Comment;