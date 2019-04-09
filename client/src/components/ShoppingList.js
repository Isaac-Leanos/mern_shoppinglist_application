import React from 'react';
import {
    Container, ListGroup, ListGroupItem, Button
  } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../store/actions/itemActions';


  
  class ShoppingList extends React.Component {
    componentDidMount(){
      this.props.getItems();
    }

    deleteAnItem = (id)=>{
      this.props.deleteItem(id);
    }

    render() {
      const {items} = this.props.itemReducer;
      const {loading} = this.props.itemReducer;
      return (
        <div>
            <Container>
                <div>{loading ? <p>Loading..</p> : false}</div>
                <ListGroup>
                        {items.map(({_id, name}) => (
                            <ListGroupItem key={_id}>
                                <Button className="remove-btn" color="danger" size="sm" 
                                onClick={this.deleteAnItem.bind(null, _id) }> &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        ))}
                </ListGroup>
            </Container>
        </div>
      )
    }
  }

const mapStateToProps = (state) => ({
    itemReducer: state.itemReducer,
})
  
export default connect(mapStateToProps, {getItems, deleteItem} )(ShoppingList);
