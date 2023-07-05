import React from "react";
import { Button } from "@material-tailwind/react";

class NavBar extends React.Component {
    render() {
        return <nav>
            
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src="/_nuxt/logo-full.fa5c06d6.png" alt="Spectrum.ai" />
            <div className="w-50 space-x-4">
            <Button ripple>Log In</Button>
            <select className="bg-black" name="language" >
                <option value="English">English</option>
                <option value="Espanol">Espanol</option>
            </select>
            </div>
        </div>
        </nav>
    }
}

export default NavBar