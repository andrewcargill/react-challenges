import React, { Component } from 'react';
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';

export class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false
    }
  }
  

//Render via PostItem.js    
  render() {
    return (
      <div>
        <div className={css.Content}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
        <PostItem savedPosts={savedPosts}/>
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