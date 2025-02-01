import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, subject }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      const data = await response.json();
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold">CONTACT US</h1>
          <p className="text-lg mt-4">
            Have questions or need personalized guidance? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Whether you have questions, need expert advice, or want to explore
              collaboration opportunities, we’d love to hear from you.
            </p>
            <div className="mt-6 space-y-4 text-gray-800 font-medium">
              <p>
                <strong>Email:</strong> support@careercounseling.com
              </p>
              <p>
                <strong>Phone:</strong> +123-456-7890
              </p>
              <p>
                <strong>Address:</strong> Sunrise Colony, West District, New
                Delhi, India
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              {success && <p className="text-green-500 mt-4">Thank you for your message!</p>}
              {error && <p className="text-red-500 mt-4">Error: {error}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Social Media & Office Hours */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl">
                Instagram
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                Facebook
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                Twitter
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
            <p className="text-gray-600 mt-4">
              Monday to Friday: 9:00 AM - 6:00 PM (Local Time)
            </p>
            <p className="text-gray-600 mt-2">Looking forward to assisting you!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;