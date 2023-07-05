import React from "react";
import NavBar from "../../components/NavBar";
import Dashboard from "./components/Dashboard";
import SplashTitle from "./components/SplashTitle";

class Homepage extends React.Component {
    render() {
        return <div className="bg-black h-screen   text-white">
        <NavBar />
        <SplashTitle />
        <Dashboard />        
        </div>
    }
}

export default Homepage