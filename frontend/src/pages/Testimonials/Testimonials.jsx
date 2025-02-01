import { useEffect, useState } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    content: '',
    rating: '',
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/testimonials');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      });
      if (!response.ok) {
        throw new Error('Failed to create testimonial');
      }
      const createdTestimonial = await response.json();
      setTestimonials((prev) => [createdTestimonial, ...prev]);
      setNewTestimonial({
        name: '',
        content: '',
        rating: '',
        title: '',
        description: '',
      });
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">TESTIMONIALS</h1>
        </div>
      </section>

      {/* Top Reviews */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">TOP REVIEWS</h2>
          <p className="text-gray-500 mt-2">Take a look at reviews from our users.</p>
        </div>
        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500 mt-2">{testimonial.content}</p>
              <div className="mt-4 text-indigo-500 font-bold">{testimonial.rating}/5</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey to Success */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">JOURNEY TO SUCCESS</h2>
          <p className="text-gray-500 mt-2">
            Take a look at some of the success stories from our past learners!
          </p>
        </div>
        <div className="mt-12 max-w-6xl mx-auto flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="mt-2 font-semibold">{testimonial.title}</p>
              <p className="mt-4">{testimonial.description}</p>
              <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg">
                See More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Create Review */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">CREATE REVIEW</h2>
          <p className="text-gray-500 mt-2">Share your experience with us.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 max-w-6xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newTestimonial.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Review
            </label>
            <textarea
              id="content"
              name="content"
              value={newTestimonial.content}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={newTestimonial.rating}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTestimonial.title}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newTestimonial.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
}

export default Testimonials;