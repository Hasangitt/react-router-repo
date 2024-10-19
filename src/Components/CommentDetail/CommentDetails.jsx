import { Link, useLoaderData, useNavigate } from "react-router-dom";
import './CommentDetail.css'

const CommentDetails = () => {

    const comment = useLoaderData();
    console.log(comment);
    const {id, email, body} = comment;

    const navigate = useNavigate();
    const handleClickForGoBack = () => {
        navigate(-1);
    }
   
    return (
        <div className="css">
            <h1>User id: {id}</h1>
            <h3>user email: {email}</h3>
            <h4>Comment Detail: {body}</h4>
            <Link><button onClick={handleClickForGoBack}>Go Back</button></Link>
        </div>
    );
};

export default CommentDetails;