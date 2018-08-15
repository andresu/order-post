import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseVotesById } from '../actions';
import { decreaseVotesById } from '../actions';

class Postslist extends Component{
  constructor(props){
    super(props);
    this.increaseVotesById = this.increaseVotesById.bind(this);
    this.decreaseVotesById = this.decreaseVotesById.bind(this);
  }
  render(){
    console.log('this.props', this.props);
    return ( 
      <div>
        {
          this.props.posts.map((post) => (     
            <article key={post.id} id={post.id}>
              <img src={post.post_image_url} alt={post.title}/>
              <div>
                <div>
                <button onClick={()=>this.props.increaseVotesById(post)}>Subir</button>
                <p>{post.votes}</p>
                <button onClick={()=>this.props.decreaseVotesById(post)}>Bajar</button>
              </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div>
                  <p>Escrito por:</p>
                  <img src={post.writer_avatar_url} alt={post.writer_avatar_url}/> 
                </div>
              </div>
            </article>
            )
          )
        }
      </div>
    )
  }
  increaseVotesById(post){
    this.props.dispatch(increaseVotesById(post));
  }
  decreaseVotesById(post){
    this.props.dispatch(decreaseVotesById(post));
  }  
}
const mapStateToProps = state => {
  return {
    posts : state
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ increaseVotesById, decreaseVotesById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postslist);