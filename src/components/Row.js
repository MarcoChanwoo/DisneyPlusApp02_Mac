import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";
import styled from "styled-components";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper"; <- 뒤에 /modules를 작성해야 함(아래 참고)
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Row = ({ title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});

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
        setMovieSelection(movie);
    };

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                navigation // arrow 버튼 사용 여부
                pagination={{ clickable: true }}
            >
                <Content id={id}>
                    {movies.map((movie) => (
                        <SwiperSlide>
                            <Wrap>
                                <img
                                    key={movie.id}
                                    className="row_poster"
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.name}
                                    onClick={() => handleClick(movie)}
                                />
                            </Wrap>
                        </SwiperSlide>
                    ))}
                </Content>
            </Swiper>
            {modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )}
        </Container>
    );
};

export default Row;

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div``;
