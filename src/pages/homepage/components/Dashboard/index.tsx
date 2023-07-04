import React from "react";
import { Slider, Button } from "@material-tailwind/react";

class Dashboard extends React.Component {
    render() {
        return <>
            <div className="h-screen flex flex-col items-center justify-center space-y-20">
                <input className="w-96 h-10 border-yellow-600 rounded-md border-2 bg-gray-900" type="text" value="The dragon stole the prince and..."/>
                <div className="flex space-x-10">
                    <p>Precise</p>
                <Slider className="w-96 h-0" size="lg"defaultValue={50} />
                    <p>Diverse</p>
                </div>
                <Button ripple >Go</Button>
            </div>        
        </>
    }
}

export default Dashboard;