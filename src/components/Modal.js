import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

// handling functions like added and editing tricks 
export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
// from DC notes: Helper functions should be named using an underscore.
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        
        this.setState({activeItem});
    };
    render() {
        const { toggle, onSave } = this.props;
        console.log(this.state.activeItem)
        // form validation with an isEnabled variable
        const isEnabled = this.state.activeItem.title.length > 0 && this.state.activeItem.description.length > 0;

        return (
            <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Trick</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Name</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Enter Trick Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Enter Trick description"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="completed">
                    <Input
                      type="checkbox"
                      name="completed"
                      checked={this.state.activeItem.completed}
                      onChange={this.handleChange}
                    />
                    Completed
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button disabled={!isEnabled} color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
            </Modal>
        );
    }
}