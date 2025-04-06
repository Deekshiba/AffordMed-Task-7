// components/MovieCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie, onClick }) {
  return (
    <Card style={{ width: "18rem", cursor: "pointer" }} onClick={() => onClick(movie.id)} className="mb-4">
      <Card.Img variant="top" src={movie.image} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
