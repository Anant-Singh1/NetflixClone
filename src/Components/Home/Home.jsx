import React, { useEffect, useState } from "react";
// import Header from "../Header/Header";
import "./Home.scss";
import axios from "axios";

const apiKey = "375dcd5638117bad1d4c773815f5572e";
const url = "https://api.themoviedb.org/3/movie";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const popularmovie = "popular";
const imgURL = "https://image.tmdb.org/t/p/original/";
const Card = ({ img }) => <img className="card" src={img} alt="" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://img.freepik.com/free-vector/abstract-poster-template-with-elegant-landscape_1361-2207.jpg?w=2000",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card img={`${imgURL}/${item.poster_path}`} key={index} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingmovie, setUpcomingmovie] = useState();
  const [nowplaying, setNowplaying] = useState();
  const [toprated, setToprated] = useState();
  const [polular, setPolular] = useState();

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      // console.log(data);
      setUpcomingmovie(results);
    };
    fetchUpcoming();

    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`);
      // console.log(data);
      setNowplaying(results);
    };
    fetchNowplaying();

    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
      // console.log(data);
      setToprated(results);
    };
    fetchToprated();

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popularmovie}?api_key=${apiKey}`);
      // console.log(data);
      setPolular(results);
    };
    fetchPopular();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: toprated[0]
              ? `url(${`${imgURL}/${upcomingmovie[6].poster_path}`})`
              : " ",
          }}
        >
          <h1>{upcomingmovie[6].original_title}</h1>
          <p>{upcomingmovie[6].overview}</p>
        </div>
        <Row title={"Upcoming Movies"} arr={upcomingmovie} />
        <Row title={"Popular on Netfix"} arr={polular} />
        <Row title={"Top Rated"} arr={toprated} />
        <Row title={"Now Playing"} arr={nowplaying} />
      </section>
    </>
  );
};

export default Home;
