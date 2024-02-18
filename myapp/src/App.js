// App.js
import React, { useState } from 'react';
import './App.css';
import Posts from "./component/Posts";
import Modal from "./component/Modal"; // Assuming you create a Modal component

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <Posts openModal={openModal} />
      {modalOpen && <Modal post={selectedPost} closeModal={closeModal} />}
    </div>
  );
}

export default App;
