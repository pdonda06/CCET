import { useEffect, useState, useRef } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState({
    serviceId: '',
    date: '',
  });

  const comboPlansRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleGoToPlans = () => {
    comboPlansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookNow = async (serviceId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${serviceId}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceId, date: booking.date }),
      });
      if (!response.ok) {
        throw new Error('Failed to book service');
      }
      alert('Booking successful!');
      setBooking({ serviceId: '', date: '' });
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <button
              onClick={handleGoToPlans}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg mb-6"
            >
              Go to Plans
            </button>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <video
                className="w-full rounded-lg"
                src="/path/to/video.mp4"
                controls
              ></video>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Guiding You Towards Your Dream College & Career
            </h1>
            <p className="mt-6 text-gray-600">
              Our counseling and mentorship services are designed to help you
              navigate the challenges of college admissions and chart a
              successful career path.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Here is all you need to know about our Counseling Services
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-full shadow-lg text-center">
              <h3 className="text-xl font-bold">{service.name}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Combo Plans Section */}
      <section ref={comboPlansRef} className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Combo Plans</h2>
          <p className="text-gray-600">
            Choose the plan that suits your needs and start your journey toward success today!
          </p>
        </div>
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="text-2xl font-bold text-indigo-600 mt-4">{service.price}</div>
              <button
                onClick={() => handleBookNow(service._id)}
                className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
