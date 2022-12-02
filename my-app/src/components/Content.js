import React, { Component } from 'react';
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false,
       posts: [],
    }
  }
  
  componentDidMount() {
    setTimeout(()=>{
        this.setState({
            isLoaded: true,
            posts: savedPosts,
        })
    }, 2000)
}


//Render via PostItem.js    
  render() {
    return (
      <div className={css.Content}>
         
        <div className={css.TitleBar} >
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchinput'>Search</label>
              <input 
              type='search' 
              id='searchinput' 
              placeholder='By Author'
              onChange={(e) => this.handleChange(e)}
              />
              <h4>posts found {this.state.posts.length}</h4>
             </form>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ? <PostItem savedPosts={savedPosts}/>
            : <Loader />
          }

        </div>
       
      </div>
    )
  }

//Render within the function  
//   render() {
//     return (
//       <div>
//         <div className={css.Content}>
//             <h1>My Photos</h1>
//         </div>
//         <div className={css.SearchResults}>
//         {savedPosts.map( post => {
//             return <div className={css.SearchItem}>
//                 <p>{post.title}</p>
//                 <p>{post.name}</p>
//                 <img src={post.image} alt="" />
//                 <p>{post.description}</p>
//             </div>
//     })}
//         </div>
//       </div>
//     )
//   }
}

export default Content