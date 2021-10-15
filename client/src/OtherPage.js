import { Link } from 'react-router-dom';

const GoBack = () => {
    return (
        <div>
            In some other page!
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default GoBack;