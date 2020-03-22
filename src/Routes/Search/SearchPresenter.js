import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Message from "../../Components/Message";


const Container = styled.div`
  padding: 10px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;


class SearchPresenter extends Component{

    render() {
        let {
            movieResults,
            tvResults,
            error,
            searchTerm,
            loading,
            handleSubmit,
            updateTerm
        } = this.props;

        return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Search Movies or TV Show..."
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </Form>
                {
                    loading ?
                        <Loader /> : (
                            <>
                                {
                                    movieResults && movieResults.length > 0 && (
                                        <Section title="Movie Results">
                                            {movieResults.map(movie => (
                                                <Poster
                                                    id={movie.id}
                                                    imageURL={movie.poster_path}
                                                    title={movie.title}
                                                    rating={movie.vote_average}
                                                    year={movie.release_date.substring(0,4)}
                                                />
                                            ))}
                                        </Section>
                                    )
                                }

                                {
                                    tvResults && tvResults.length > 0 && (
                                        <Section title="TV Results">
                                            {tvResults.map(tv => (
                                                <Poster
                                                    id={tv.id}
                                                    imageURL={tv.poster_path}
                                                    title={tv.name}
                                                    rating={tv.vote_average}
                                                    year={tv.first_air_date.substring(0,4)}
                                                />
                                            ))}
                                        </Section>
                                    )
                                }
                            </>
                        )}
                {error && <Message color="#e74c3c" text={error}/>}
                {
                    tvResults &&
                    movieResults &&
                    tvResults.length === 0 &&
                    movieResults.length === 0 &&
                    <Message color="#95a5a6" text="Nothing found"/>


                }
            </Container>
        );
    }
};



SearchPresenter.propTypes = {
    movieResults: PropsTypes.array,
    tvResults: PropsTypes.array,
    error: PropsTypes.string,
    searchTerm: PropsTypes.string,
    loading: PropsTypes.bool.isRequired,
    handleSubmit: PropsTypes.func.isRequired,
    updateTerm: PropsTypes.func.isRequired
};


export default SearchPresenter;