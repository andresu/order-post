import React, {Component} from 'react';

class OrderPosts extends Component{
    constructor(props){
        super(props);
        /*this.morevoted = this.morevoted.bind(this);
        this.lessvoted = this.lessvoted.bind(this);*/
        
    }

    render(){
        return(
            <article>
              <button onClick={this.morevoted}>More voted</button>
              <button onClick={this.lessvoted}>Less voted</button>
            </article>
        )
    }
    /*
    morevoted(){
      store.dispatch({
        type: 'MORE_VOTED'
      });
    }

    lessvoted(){
      store.dispatch({
        type: 'LESS_VOTED'
      });
    }*/
}

export default OrderPosts;