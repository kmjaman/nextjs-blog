'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreatePost() {

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [postData, setPostData] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/categories/'
      );
      setCategories(res.data);
    };
    fetchCategories();
  }, []);


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPostData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className="App">
      <h1>Create Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </label>
          </div>


          <div>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content: </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Image: </label>
            <input
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Create Product</button>
        </form>
        
      {postData && (
        <div>
          <h2>Product Created Successfully</h2>
          <p>Title: {postData.title}</p>
          <p>Content: {postData.content}</p>
          <p>Category: {postData.category}</p>
          <img src={postData.image} alt='Image' />
        </div>
      )}
    </div>
  );
}

export default CreatePost;
