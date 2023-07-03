import React from "react";

class NavBar extends React.Component {
    render() {
        return <div className="flex flex-wrap item-center justify-between w-screen py-4 md:py-0 px-4 text-lg text-gray 700 bg-white">
            <img src="/_nuxt/logo-full.fa5c06d6.png" alt="makelogo.ai" />
            <div>
            <button>Log In</button>
            <select name="language">
                <option value="English">English</option>
                <option value="Espanol">Espanol</option>
            </select>
            </div>
            
        </div>
    }
}

export default NavBar