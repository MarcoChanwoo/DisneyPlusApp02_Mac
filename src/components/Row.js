import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchMovieData = useCallback(async () => {
        const response = await axios.get(fetchUrl);
        console.log("response", response);
        setMovies(response.data.results);
    }, [fetchUrl]);

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    const handleClick = (movie) => {
        setModalOpen(true);
    };

    return (
        <div>
            <h2>{title}</h2>
            <div className="slider">
                <div className="slider_arrow-left">
                    <span
                        className="arrow"
                        onClick={() => {
                            document.getElementById(id).scrollLeft -=
                                window.innerWidth - 80;
                        }}
                    >
                        {"<"}
                    </span>
                </div>
                <div id={id} className="row_posters">
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className="row_poster"
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div className="slider_arrow-right">
                    <span
                        className="arrow"
                        onClick={() => {
                            document.getElementById(id).scrollLeft +=
                                window.innerWidth - 80;
                        }}
                    >
                        {">"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Row;
