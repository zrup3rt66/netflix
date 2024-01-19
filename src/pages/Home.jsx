import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import endpoints from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Popular" url={endpoints.popular} />
      <Row rowID="2" title="Top Rated" url={endpoints.topRated} />
      <Row rowID="3" title="Trending" url={endpoints.trending} />
      <Row rowID="4" title="Action" url={endpoints.action} />
      <Row rowID="5" title="Upcoming" url={endpoints.upcoming} />
    </>
  );
};

export default Home;
