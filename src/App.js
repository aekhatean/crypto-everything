import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout, Typography, Space } from "antd";
import { ResponsiveNavbar } from "./components";
import {
  Exchanges,
  HomePage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./pages";

const { Title } = Typography;

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <div className="navbar">
        <ResponsiveNavbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Title level={5} style={{ color: "white", textAlign: "center" }}>
            Crypto Everything <br />
            All rights reserved
          </Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
