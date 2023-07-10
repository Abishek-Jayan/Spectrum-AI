import React from "react";
import { Slider } from "@material-tailwind/react";
import PopupDialog from "../../../../components/Popup";

class Dashboard extends React.Component {
    state = {
        input_text: "The dragon stole the prince and..."
    }
    handleChange (value:any) {
        this.setState(prevState=>{
            return {
                ...prevState,
                input_text: value
            }
        })
    }
    render() {
        return <>
            <section className="flex flex-col mt-56 items-center justify-center space-y-20">
                <input className="w-96 h-10 border-yellow-600 rounded-md border-2 bg-gray-900" type="text" value={this.state.input_text} onChange={e=>{this.handleChange(e.target.value)}}/>
                <div className="flex space-x-10">
                    <p>Precise</p>
                <Slider className="w-96 h-0" size="lg"defaultValue={50} />
                    <p>Diverse</p>
                </div>
                <PopupDialog buttonName="Go"/>
            </section>        
        </>
    }
}

export default Dashboard;