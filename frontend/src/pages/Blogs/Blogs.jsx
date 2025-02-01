import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articlesRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const scrollToArticles = () => {
    articlesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">BLOGS</h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Blog!</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with regularly published blogs featuring tips, advice, and the latest news on college admissions and entrance exams.
          </p>
          <button
            onClick={scrollToArticles}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg"
          >
            See Articles
          </button>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2">
                  {blog.content.substring(0, 200)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Unlock Your Full Potential with Expert Counseling</h2>
          <p className="text-gray-600 mt-4">
            Our expert counseling services are here to guide you every step of the way.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
