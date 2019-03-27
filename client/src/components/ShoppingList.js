import React from 'react';
import {
    Container, ListGroup, ListGroupItem, Button
  } from 'reactstrap';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../store/actions/itemActions';


  
  class ShoppingList extends React.Component {


    componentDidMount(){
        this.props.getItems();
    }

    deleteAnItem = id => {
        return e => {
            this.props.deleteItem(id);
        }
    }

    render() {
      const {items} = this.props.itemReducer;
      return (
        <div>
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" 
                                    onClick={this.deleteAnItem(id) }> &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        </div>
      )
    }
  }

const mapStateToProps = (state, ownProps) => ({
    itemReducer: state.itemReducer,
})
  
export default connect(mapStateToProps, {getItems, deleteItem} )(ShoppingList);
