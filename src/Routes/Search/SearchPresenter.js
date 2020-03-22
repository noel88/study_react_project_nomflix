import React from 'react';
import PropsTypes from 'prop-types';
import styled from "styled-components";


const SearchPresenter =({
    movieResults,
    tvResults,
    error,
    searchTerm,
    loading,
    handleSubmit
}) => null;


SearchPresenter.propTypes = {
    movieResults: PropsTypes.array,
    tvResults: PropsTypes.array,
    error: PropsTypes.string,
    searchTerm: PropsTypes.string,
    loading: PropsTypes.bool.isRequired,
    handleSubmit: PropsTypes.func.isRequired
};


export default SearchPresenter;