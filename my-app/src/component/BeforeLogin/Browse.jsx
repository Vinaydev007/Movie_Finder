import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "../css/demo.css"; // Ensure styles are imported

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  if (!movie) {
    return null; // Return nothing if movie is undefined
  }

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="movie-card" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title || "No Title"}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title>{movie.title || "Unknown Title"}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movie.vote_average ? `Rating: ${movie.vote_average}` : "No Rating"}
          </Card.Subtitle>
          <Card.Text>
            {movie.release_date ? movie.release_date.split("-")[0] : "Unknown Year"}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal for Login Prompt */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to log in to view movie details.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Redirect to login")}>
            Login Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieCard;
