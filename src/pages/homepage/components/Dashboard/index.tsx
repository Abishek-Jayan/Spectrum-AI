import React from "react";
import { Slider } from "@material-tailwind/react";
import PopupDialog from "../../../../components/Popup";

class Dashboard extends React.Component {
    render() {
        return <>
            <div className="flex flex-col items-center justify-center mt-56 space-y-20">
                <input className="w-96 h-10 border-yellow-600 rounded-md border-2 bg-gray-900" type="text" value="The dragon stole the prince and..."/>
                <div className="flex space-x-10">
                    <p>Precise</p>
                <Slider className="w-96 h-0" size="lg"defaultValue={50} />
                    <p>Diverse</p>
                </div>
                <PopupDialog buttonName="Go"/>
            </div>        
        </>
    }
}

export default Dashboard;