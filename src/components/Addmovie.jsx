import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/MovieSlice';


function Addmovie() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [upDateMovie, setMovie] = useState({
    imdbID:"", 
    Title: "",
    Plot: "",
    Poster: "",
    Trailer: "",
    Rating: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onchangeHandler = (e) => {
    setMovie({ ...upDateMovie, [e.target.name]: e.target.value });
  };

  const AddmovieHandler = (e) => {
    e.preventDefault();
    dispatch(addMovie(upDateMovie));
    handleClose();
  };

  return (
    <>
      <div className="text-center mt-0">
        <Button variant="primary" onClick={handleShow}>
        Addmovie        </Button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Movie details

</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={AddmovieHandler}>
            <Form.Group className="mb-3" controlId="formMovieTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Enter movie title" name="Title" onChange={onchangeHandler} />
            </Form.Group>

            <Form.Group className="mb3" controlId="formMovieDescription">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter movie description" name="Plot" onChange={onchangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterUrl">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control type="text" placeholder="Enter poster URL" name="Poster" onChange={onchangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTrailerUrl">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control type="text" placeholder="Enter trailer URL" name="Trailer" onChange={onchangeHandler} />
            </Form.Group>

            <Rating
              name="simple-controlled"
              value={upDateMovie.Rating}
              onChange={(event, newValue) => {
                setMovie({ ...upDateMovie, Rating: newValue });
              }}
              max={10}
            />

            <div className="text-center mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;
