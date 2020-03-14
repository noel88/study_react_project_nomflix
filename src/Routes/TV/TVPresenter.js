// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
//
// const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
//     <h1>{nowPlaying}</h1>;
//
// HomePresenter.propTypes = {
//     nowPlaying: PropTypes.array,
//     popular: PropTypes.array,
//     upcoming: PropTypes.array,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.string
// };
//
// export default HomePresenter;


//1
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//4
const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    <h1>{topRated}</h1>;


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

