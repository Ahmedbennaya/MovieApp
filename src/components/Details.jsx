import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// $PLACEHOLDER$
// This is where your additional code will go

const Details = () => {
  // Access the 'movies' state from the Redux store
  const { movies } = useSelector((state) => state.MovieRed);

  // Get the 'imdbID' parameter from the URL
  const { imdbID } = useParams();

  // Find the specific movie based on the 'imdbID'
  const specMovie = movies.find((movie) => movie.imdbID === imdbID);

  // If the movie or its trailer is not available, display a message
  if (!specMovie || !specMovie.Trailer) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h1>Video not available</h1>
      </div>
    );
  }

  // Extract the video ID from the trailer URL
  const videoId = specMovie.Trailer.includes('youtube.com')
    ? new URL(specMovie.Trailer).searchParams.get('v')
    : specMovie.Trailer;

  // Render the movie details page
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="w-100" style={{ maxWidth: '900px', height: '80vh' }}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allowFullScreen
            style={{ width: '100%', height: '50vh', border: 'none', borderRadius: '10px' }}
          ></iframe>
        </div>
        <Card.Body className="text-center">
          <Card.Title className="mb-3">{specMovie.Title}</Card.Title>
          <Card.Text className="mb-4">
            {specMovie.Plot}
          </Card.Text>
          <div className="rating mb-4">
            <Rating name="read-only" value={specMovie.Rating} readOnly max={10} />
          </div>
          <Link to="/">
            <Button variant="primary">Back Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
