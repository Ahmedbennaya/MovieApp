import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = () => {
  const { movies } = useSelector((state) => state.MovieRed);

  return (
    <Container>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={12} md={6} lg={4}>
            <MovieCard movieinfo={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
