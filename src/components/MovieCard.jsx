import React, { useState } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../Redux/MovieSlice';
import './MovieCard.css'; 

const MovieCard = ({ movieinfo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movieinfo.imdbID)); 
  };

  return (
    <Card
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="delete-icon" onClick={handleDelete} aria-label="Delete movie">
        <RiDeleteBin2Fill />
      </div>
      <Card.Img variant="top" src={movieinfo.Poster} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{movieinfo.Title}</Card.Title>
        <Card.Text className="card-text">{movieinfo.Plot}</Card.Text>
        <Button
          className="details-button"
          style={{ display: isHovered ? 'block' : 'none' }}
          variant="primary"
          href={`/movies/${movieinfo.imdbID}`}
        >
          Check Details
        </Button>
        <div className="rating">
          <Rating name="read-only" value={movieinfo.Rating} readOnly max={10} />
        </div>
      
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
