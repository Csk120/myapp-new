// Modal.js

import React from 'react';
import './Modal.css';

const Modal = ({ post, closeModal }) => {
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <img
          src={post.thumbnail.large}
          alt={post.title}
          className="modal-image"
          width="400" // Set the width of the image
          height="300" // Set the height of the image
        />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
