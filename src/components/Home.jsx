import SubNavbar from "./SubNavbar";
import NetflixCarousel from "./NetflixCarousel";

const Home = () => {
  return (
    <>
      <SubNavbar />
      <NetflixCarousel movie="Harry Potter" />
      <NetflixCarousel movie="Lord of the Rings" />
      <NetflixCarousel movie="Star Wars" />
      <NetflixCarousel movie="Top" />
    </>
  );
};
export default Home;
