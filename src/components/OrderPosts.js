import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { orderByMoreVotes } from '../actions';
import { orderByLessVotes } from '../actions';

class OrderPosts extends Component{
    constructor(props){
        super(props);
        this.orderByMoreVotes = this.orderByMoreVotes.bind(this);
        this.orderByLessVotes = this.orderByLessVotes.bind(this);      
    }
    render(){
        return(
            <article>
              <button onClick={()=>this.props.orderByMoreVotes()}>More voted</button>
              <button onClick={()=>this.props.orderByLessVotes()}>Less voted</button>
            </article>
        )
    }
  orderByMoreVotes(){
    this.props.dispatch(orderByMoreVotes());
  }
  orderByLessVotes(){
    this.props.dispatch(orderByLessVotes());
  }   
}
const mapStateToProps = state => {
  return {
    posts : state
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ orderByMoreVotes , orderByLessVotes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderPosts);
