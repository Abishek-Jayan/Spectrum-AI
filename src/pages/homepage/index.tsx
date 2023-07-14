import React from "react";
import NavBar from "../../components/NavBar";
import Dashboard from "./components/Dashboard";
import SplashTitle from "./components/SplashTitle";
import LightsBackground from "../../components/LightsBackground";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col">
          <NavBar />
          <LightsBackground />
          <SplashTitle />
          <Dashboard />
        </div>
      </>
    );
  }
}

export default Homepage;
