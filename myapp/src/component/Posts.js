// Posts.js
import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = ({ openModal }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    const handlePostClick = (post) => {
      openModal(post);
    };
  
  
    return (
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card" onClick={() => openModal(post)}>
            <h2 className="post-title"onClick={() => handlePostClick(post)}>{post.title}</h2>
            {post.thumbnail && (
              <img
                src={post.thumbnail.large} // Assuming "large" size thumbnail
                alt={post.title}
                className="post-thumbnail"
                
              />
            )}
            
            <p className="post-content">{post.content}</p>
            {post.author && ( // Check if author information is available
            <div className="author-info">
              <img
                src={post.author.avatar} // Display author avatar
                alt={post.author.name}
                className="author-avatar"
              />
              <div className="author-details">
                <p className="author-name">{post.author.name}</p>
                <p className="author-role">{post.author.role}</p>
              </div>
            </div>
            
          )}

            <button className="learn-more-btn"onClick={() => handlePostClick(post)}>Learn More</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Posts;