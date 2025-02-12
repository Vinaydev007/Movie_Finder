import { useNavigate } from 'react-router-dom';  // Import useNavigate

function BrowseMoviesButton() {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        navigate("/");
    };

    return (
        <button className="browse-movies-button" onClick={handleClick}>
            Browse Movies
        </button>
    );
}

export default BrowseMoviesButton;
