import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";


const Comments = () => {

    const comments = useLoaderData();

    return (
        <div>
            <h1>This is my web comments area: {comments.length}</h1>
            <div className="style">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;