import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

export default class DescriptionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    };
    render() {
        const { toggle, wikiLink } = this.props;

        return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>
        {this.state.activeItem.title}
        </ModalHeader>
        <ModalBody>
            {this.state.activeItem.description}
        </ModalBody>
        <ModalFooter>
            <Button color="info" onClick={() => wikiLink(this.state.activeItem.title)}>
            Wikipedia
            </Button>
        </ModalFooter>
        
        </Modal>
        );
    }
}