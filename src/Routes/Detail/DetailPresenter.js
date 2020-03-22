import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from '../../Components/loader';

const Container = styled.div`

`;

const Backdrop = styled.div``;


const DetailPresenter = ({
    result,
    loading,
    error
}) => (
    loading ?
        <Loader /> : (
            <Container>
                <Backdrop>

                </Backdrop>
            </Container>
        )
);




DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};



export default DetailPresenter;