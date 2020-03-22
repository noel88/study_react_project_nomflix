//1
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 10px
`;



//4
const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="TV Top Rated">
                    {
                        topRated.map(tv =>
                            <Poster
                                id={tv.id}
                                imageURL={tv.poster_path}
                                title={tv.name}
                                rating={tv.vote_average}
                                year={tv.first_air_date.substring(0,4)}
                            />
                        )
                    }
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="TV popular">
                    {
                        popular.map(tv =>
                            <Poster
                                id={tv.id}
                                imageURL={tv.poster_path}
                                title={tv.name}
                                rating={tv.vote_average}
                                year={tv.first_air_date.substring(0,4)}
                            />
                        )
                    }
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="TV airingToday">
                    {
                        airingToday.map(tv =>
                            <Poster
                                id={tv.id}
                                imageURL={tv.poster_path}
                                title={tv.name}
                                rating={tv.vote_average}
                                year={tv.first_air_date.substring(0,4)}
                            />
                        )
                    }
                </Section>
            )}
        </Container>
    );

// {nowPlaying && nowPlaying.length > 0 && (
//     <Section title="Now Playing">
//         {nowPlaying.map(movie =>
//             <span key={movie.id}>{movie.title}</span>
//         )}
//     </Section>
//
// )}

//2
TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

//3

export default TVPresenter;

