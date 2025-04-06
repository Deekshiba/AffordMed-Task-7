import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const movies = [
  {
    id: 1,
    title: "Cars",
    duration: "1h 57m",
    description: "A hotshot race car named Lightning McQueen gets lost on the way to an important race and ends up in a small town called Radiator Springs. While trying to get back on track, he learns valuable lessons about friendship, humility, and the true meaning of success.",
    casts: "Owen Wilson as Lightning McQueen, Paul Newman as Doc Hudson, Bonnie Hunt as Sally Carrera, Larry the Cable Guy as Mater",
    image: "/Cars.jpeg"
  },
  {
    id: 2,
    title: "Frozen",
    duration: "1h 42m",
    description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice and traps her kingdom in eternal winter, her sister Anna teams up with a mountain man, his loyal reindeer, and a snowman to bring summer back.",
    casts: "Kristen Bell as Anna, Idina Menzel as Elsa, Josh Gad as Olaf, Jonathan Groff as Kristoff",
    image: "/frozen.jpeg"
  },
  {
    id: 3,
    title: "Zootopia",
    duration: "1h 48m",
    description: "In the modern mammal metropolis of Zootopia, Judy Hopps becomes the first rabbit to join the police force. Determined to prove herself, she jumps at the opportunity to solve a mysterious case of missing animals. To crack the case, she reluctantly teams up with a fast-talking, sly fox named Nick Wilde. As the unlikely duo uncovers clues, they begin to unravel a deep conspiracy that threatens the harmony of their diverse city.",
    casts: "Ginnifer Goodwin as Judy Hopps, Jason Bateman as Nick Wilde, Idris Elba as Chief Bogo, Jenny Slate as Assistant Mayor Bellwether, J.K. Simmons as Mayor Lionheart, Nate Torrence as Officer Clawhauser",
    image: "/zootopia.jpeg"
  }
];

function MovieDetailsPage() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <>
      <AppNavbar />

      <Container className="mt-5">
        <Card className="p-4 shadow">
          <Row>
            <Col md={5} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <Card.Img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  maxWidth: "300px",    // Image width cap
                  maxHeight: "400px",   // Image height cap
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title as="h2">{movie.title}</Card.Title>
                <Card.Text><strong>Duration:</strong> {movie.duration}</Card.Text>
                <Card.Text><strong>Description:</strong> {movie.description}</Card.Text>
                <Card.Text><strong>Casts:</strong> {movie.casts}</Card.Text>

                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={() => alert("Movie is now playing... 🎬")}
                >
                  ▶ Play Movie
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default MovieDetailsPage;
