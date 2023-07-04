import React from "react";
import NavBar from "../../components/NavBar";
import Dashboard from "./components/Dashboard";

class Homepage extends React.Component {
    render() {
        return <div className="bg-black text-white">
        <NavBar />
        <Dashboard />        
        </div>
    }
}

export default Homepage