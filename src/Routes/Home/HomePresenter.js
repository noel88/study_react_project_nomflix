import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 0px 10px;

`;



const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? (
            <Loader />
        ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map(movie =>
                             <Poster
                                id={movie.id}
                                imageURL={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true}
                             />
                        )}
                    </Section>

                )}
                {popular && popular.length > 0 && (
                    <Section title="Movie Popular">
                        {popular.map(movie =>
                            <Poster
                                id={movie.id}
                                imageURL={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true}
                            />
                        )}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title="Movie Upcoming">
                        {upcoming.map(movie =>
                            <Poster
                                id={movie.id}
                                imageURL={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true}
                            />
                        )}
                    </Section>

                )}
                {error && <Message color="#e74c3c" text={error}/>}
            </Container>
        );


HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;