import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      date: 'August 17, 2025',
      title: 'Safe and Secure: The Importance of Choosing the Right Storage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...',
    },
    {
      date: 'July 12, 2025',
      title: 'Storage Trends 2024: What\'s New in the World of Storage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...',
    },
    {
      date: 'April 8, 2025',
      title: 'Free Up Your Space, Free Up Your Life: The Power of Decluttering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...',
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-header-left">
            <p className="blog-label">Latest Blog and News</p>
            <h2>Check Out Our Latest Blog and News Update</h2>
          </div>
          <div className="blog-header-right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sad dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
          </div>
        </div>

        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <p className="blog-date">📅 {post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href="#" className="read-more">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;