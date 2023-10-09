import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(
                `/search/multi?include_adult=false$query=${searchTerm}`
            );
            setSearchResults(response.data.results);
            console.log("response", response);
        } catch (error) {
            console.log(error); // 에러 발생 시 내용을 콘솔에 표시
        }
    };

    if (searchResults.length > 0) {
        return (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if (
                        movie.backdrop_path !== null &&
                        movie.media_type !== "person"
                    ) {
                        const movieImageUrl =
                            "https://image.tmdb.org/t/p/w500" +
                            movie.backdrop_path;
                        return (
                            <div className="movie" key={movie.id}>
                                <div
                                    className="movie_column-poster"
                                    onClick={() => navigate(`/${movie.id}`)}
                                >
                                    <img
                                        src={movieImageUrl}
                                        alt="movie"
                                        className="movie_poster"
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
            </section>
        );
    } else {
        return (
            <section className="no-results">
                <div className="no-results_text">
                    <p>
                        찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        );
    }
};

export default SearchPage;
