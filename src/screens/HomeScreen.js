import React from "react";
import Nav from "../Nav";
import "./HomeScreen.css";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav  */}
      <Nav />
      {/* Banner  */}
      <Banner />
      {/* Row  */}
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
