import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <div className="movie__poster">
                <img src={poster} alt={title} title={title}/>
            </div>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, i) => (
                    <li className="genres__genre" key={i}>{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 150)}...</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;