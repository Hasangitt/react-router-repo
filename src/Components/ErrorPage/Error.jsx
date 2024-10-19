import { Link, useRouteError } from "react-router-dom";


const Error = () => {

    const erroStyle = {
        marginTop: '400px',
        color: 'red'
    }
    
    const error = useRouteError();
    console.log(error);

    return (
        <div style={erroStyle}>
            <h1>Ooopss!</h1>
            <h3>You are wrong place.</h3>
            <h4>Error from Gul Mabu</h4>
            <p>{error.messege || error.statusText}</p>
            {
                error.status === 404 && <div>
                    <h2>Go to home page</h2>
                    <Link to="/"><button>Go to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;