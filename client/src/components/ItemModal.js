import React from 'react';
import {
    Button,
    Modal, ModalHeader, ModalBody,
    Form,FormGroup,
    Label,Input 
  } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../store/actions/itemActions';


  class ItemModal extends React.Component {

    state = {
        modal: false,
        name: ''
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit = (e) => {
      e.preventDefault();
      const newItem = {
        name: this.state.name
      }
      this.props.addItem(newItem);
      this.toggleModal();
    }

    inputChange = (e) => {
      this.setState({ 
        [e.target.name]: e.target.value 
      })
    }

    render() {
      return (
        <div>

            <Button color="dark" style={{marginBottom: '2rem', marginLeft: '1rem'}}
            onClick={this.toggleModal}>Add Item</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal} charCode="X">Add to your list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <Label for="item"></Label>
                        <Input name="name" type="text" id="item" placeholder="add item"
                        onChange={this.inputChange}>
                        </Input>
                        <Button type="submit" color="dark"  style={{marginTop: '2rem'}} block>Add</Button>
                      </FormGroup>
                    </Form>
                </ModalBody>
          </Modal>

        </div>
      )
    }
  }

const mapStateToProps = state => ({
    itemReducer: state.itemReducer,
})
  
export default connect(mapStateToProps, {addItem} )(ItemModal);
