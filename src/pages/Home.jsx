import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main></Main>
      <Row rowId='1'  title="Up Coming" fetchUrl={requests.requestUpcoming}></Row>
      <Row  rowId='2' title="Popular" fetchUrl={requests.requestPopular}></Row>
      <Row  rowId='3' title="Trending" fetchUrl={requests.requestTrending}></Row>
      <Row  rowId='4' title="Top Rated" fetchUrl={requests.requestTopRated}></Row>
      <Row  rowId='5' title="Horror" fetchUrl={requests.requestHorror}></Row>
    </div>
  );
};

export default Home;
