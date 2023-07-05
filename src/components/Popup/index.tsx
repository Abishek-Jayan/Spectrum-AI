import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

interface PopupDialogState {
    open: boolean;
}
interface PopupDialogProps {
    buttonName: string;
  }

class PopupDialog extends React.Component<PopupDialogProps, PopupDialogState> {
    constructor(props : PopupDialogProps) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
    }
    handleOpen() { this.setState((prevState) => ({open: !prevState.open}));}
    render () {
        return <>
        <Button  onClick={this.handleOpen} variant="gradient" ripple >{this.props.buttonName}</Button>
        <Dialog open={this.state.open} handler = {this.handleOpen}>
        <DialogHeader>Estimated Cost: X</DialogHeader>
        <DialogBody>
          Run Spectrum?
        </DialogBody>
        <DialogFooter className="space-x-3">
            <Button variant="gradient" color="green" onClick={this.handleOpen}><span>Yes</span></Button>
            <Button variant="text"
            color="red"
            onClick={this.handleOpen}
            className="mr-1"><span>No</span></Button>
        </DialogFooter>
        </Dialog>
        </>
}
}

export default PopupDialog;