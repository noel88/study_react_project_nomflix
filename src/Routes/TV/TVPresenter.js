//1
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//4
const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    <h1>test</h1>;


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

