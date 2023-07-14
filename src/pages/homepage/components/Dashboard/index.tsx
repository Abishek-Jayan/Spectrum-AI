import React from "react";
import { Slider } from "@material-tailwind/react";
import PopupDialog from "../../../../components/Popup";

class Dashboard extends React.Component {
  state = {
    input_text: "The dragon stole the prince and...",
  };
  handleChange(value: any) {
    this.setState((prevState) => {
      return {
        ...prevState,
        input_text: value,
      };
    });
  }
  render() {
    return (
      <>
        <section className="flex flex-col items-center justify-center space-y-20 snap-start h-screen">
          <input
            className="w-2/5 h-20 border-yellow-600 rounded-md border-2 bg-gray-900 p-5 text-xl"
            type="text"
            value={this.state.input_text}
            onChange={(e) => {
              this.handleChange(e.target.value);
            }}
          />
          <div className="flex space-x-10 w-1/2">
            <p className="text-xl ">Precise</p>
            <Slider
              trackClassName="h-0"
              barClassName="h-0"
              thumbClassName="h-1 mt-3"
              size="lg"
              defaultValue={50}
            />
            <p className="text-xl">Diverse</p>
          </div>
          <PopupDialog buttonName="Go" />
        </section>
      </>
    );
  }
}

export default Dashboard;
