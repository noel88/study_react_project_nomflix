import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/loader";

const Container = styled.div`
  padding: 0px 10px;

`;



const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? (
            <Loader />
        ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    nowPlaying.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )
                )}
                {popular && popular.length > 0 && (
                    popular.map(popular =>
                        <span key={popular.id}>{popular.title}</span>
                    )
                )}
                {upcoming && upcoming.length > 0 && (
                    upcoming.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )
                )}
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