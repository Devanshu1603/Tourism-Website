import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TourismBlog.css';
import Footer from '../footer/Footer';
import Article from '../Article/Article';

const TourismBlog = () => {
  const [blogs, setBlogs] = useState([]);
  

  // Fetch blogs from the backend when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://tourism-backend-omega.vercel.app/api/blogs');
        setBlogs(response.data); // Set the blogs state with the fetched data
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className='blog_title'>
        <h1>Welcome to Our Blog</h1>
        <h2>Explore, Dream, Discover</h2>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs">
        <div className="Blog-Title">
          <h2>Popular</h2>
          <h2 style={{ color: '#f59e0b' }}>Blogs</h2>
        </div>
        <div className="blog-grid">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className="blog-card" key={blog._id}>
                <img src={`https://tourism-backend-omega.vercel.app
                // +/uploads/${blog.image}`} alt={blog.title} />
                <div className="content">
                  <h3>{blog.title}</h3>
                  <p>{blog.content.substring(0, 100)}...</p>
                  <p className="author-details" style={{ fontSize: '13px', position: 'relative', bottom: '10px' }}>
                    Author: {blog.author}
                    <p style={{ position: 'relative', bottom: '15px', fontSize: '13px' }}>
                      Posted On: {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available at the moment.</p>
          )}
        </div>
      </section>

      {/* New Blog Section */}
      {/* <section className="new-blog">
        <h4>Post a New Blog</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blogData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            rows="5"
            name="content"
            placeholder="Write your blog here..."
            value={blogData.content}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={blogData.author}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
          <button type="submit">Post Blog</button>
        </form>
      </section> */}

 <div className="Article">
            <Article />
          </div>

      
      <div className="tourism-Footer">
        <Footer />
      </div>
    </>
  );
};

export default TourismBlog;
