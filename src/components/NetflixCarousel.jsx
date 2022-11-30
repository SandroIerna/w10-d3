import { useEffect, useState } from "react";
import { Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NetflixCarousel = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=89b39348&s=" + movie
      );
      if (response.ok) {
        let data = await response.json();
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        alert("Something went wrong :(");
        setIsLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  return (
    <Container fluid>
      {isLoading && <Spinner animation="border" />}
      <h5 className="text-light my-3">{movie}</h5>
      <Carousel indicators={false} className="my-2">
        <Carousel.Item>
          <Row>
            {movies
              .filter((movie, index) => index < 6)
              .map((movie) => (
                <Col md={2} key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="carousel-image-style"
                    onClick={() => navigate("/details/" + movie.imdbID)}
                  />
                </Col>
              ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {movies
              .filter((movie, index) => index < 12 && index >= 6)
              .map((movie) => (
                <Col md={2} key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="carousel-image-style"
                    onClick={() => navigate("/details/" + movie.imdbID)}
                  />
                </Col>
              ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default NetflixCarousel;
