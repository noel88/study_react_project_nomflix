import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;






const Poster = ({
    id,
    imageURL,
    title,
    rating,
    year
}) => (
    <Container>
        <ImageContainer>
            <Image bgUrl={imageURL} />
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐️
                </span>{" "}
                {rating / 10}
            </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string
};

export default Poster;