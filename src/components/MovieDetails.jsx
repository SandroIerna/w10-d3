import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const fetchSelectedMovie = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=89b39348&i=" + params.movieId
      );
      let data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSelectedMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      {movie && (
        <div>
          <h3>{movie.Title}</h3>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img src={movie.Poster} alt={movie.Title} />
            </Col>
            <Col sm={12} md={6} lg={8}>
              <p>Actors: {movie.Actors}</p>
              <p>Duration: {movie.Runtime}</p>
              <p>{movie.Plot}</p>
              <p>{movie.Released}</p>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};
export default MovieDetails;
