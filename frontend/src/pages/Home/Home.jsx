// import React, { useState } from "react";

// function App() {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   return (
//     <div className="font-sans relative">
//       {/* Homepage */}
//       <section className="py-16 px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-gray-800">
//             GET GUIDANCE. Guiding Your Path to Success!
//           </h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Empower your future with personalized career counseling and expert guidance.
//           </p>
//           <div className="mt-8 flex justify-center space-x-4">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg">
//               Explore Services
//             </button>
//             <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-lg">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 px-8 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-indigo-100 p-6 rounded-lg text-center">
//             <h3 className="text-xl font-bold">Online Chat Sessions</h3>
//             <p className="text-gray-600 mt-2">Connect with experts instantly.</p>
//           </div>
//           <div className="bg-indigo-100 p-6 rounded-lg text-center">
//             <h3 className="text-xl font-bold">Video and Voice Calls</h3>
//             <p className="text-gray-600 mt-2">One-on-one personalized guidance.</p>
//           </div>
//           <div className="bg-indigo-100 p-6 rounded-lg text-center">
//             <h3 className="text-xl font-bold">Expert Mentorships</h3>
//             <p className="text-gray-600 mt-2">Learn from top professionals.</p>
//           </div>
//         </div>
//       </section>

//       {/* Chat Icon */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={toggleChat}
//           className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
//         >
//           💬
//         </button>
//       </div>

//       {/* Chat Window */}
//       {isChatOpen && (
//         <div className="fixed bottom-16 right-6 w-96 bg-white shadow-lg rounded-lg">
//           <div className="bg-indigo-600 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
//             <h3 className="font-bold">Chat Section</h3>
//             <button onClick={toggleChat} className="text-white font-bold">✖</button>
//           </div>
//           <div className="p-4 h-64 overflow-y-auto">
//             <div className="mb-4">
//               <div className="bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2">Hey there! How can we assist you today?</div>
//             </div>
//             <div className="mb-4 text-right">
//               <div className="bg-indigo-500 text-white p-2 rounded-lg mb-2">I’m looking for guidance on preparing for the IIT JEE exam. Can you help with that?</div>
//             </div>
//             <div className="mb-4">
//               <div className="bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2">Absolutely! We can help with personalized study plans, tips, and strategies to improve your performance. Would you like to book a counseling session or get some resources to get started?</div>
//             </div>
//             <div className="mb-4 text-right">
//               <div className="bg-indigo-500 text-white p-2 rounded-lg mb-2">Yes, I would like to book a counseling session to discuss my preparation strategy.</div>
//             </div>
//           </div>
//           <div className="p-4 border-t border-gray-200">
//             <input
//               type="text"
//               placeholder="Type Message"
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const serviceHighlightsRef = useRef(null);
  const navigate = useNavigate();

  const scrollToServices = () => {
    serviceHighlightsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null); // To track which FAQ is open

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the answer visibility
  };
  return (
    <div className="font-sans bg-gray-50">
      

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold">GET GUIDANCE.</h2>
          <p className="mt-4 text-lg">
            Guiding Your Path to Success! Empower your future with personalized
            career counseling and expert guidance.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <button
              onClick={scrollToServices}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/services")}
              className="bg-purple-700 px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Boost Your Career Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold">Boost Your Career</h2>
            <p className="mt-4">
              Feeling uncertain about your career path? Don’t worry! Get expert
              guidance on skill improvement, career exploration, and building a
              bright future.
            </p>
            <div className="flex justify-around mt-6">
              {[
                { text: "Online Chat Sessions", color: "bg-blue-500" },
                { text: "Video and Voice Calls", color: "bg-indigo-500" },
                { text: "Expert Mentorships", color: "bg-pink-500" },
              ].map((item) => (
                <button
                  key={item.text}
                  className={`text-white ${item.color} px-4 py-2 rounded-lg`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">ABOUT US</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="text-center md:text-left">
              <p>
                This is your trusted partner in navigating the complex world of
                entrance exams and career choices. Our mission is to empower
                students to achieve their academic goals and help parents guide
                their children toward a bright and successful future.
              </p>
            </div>
            <img
              src="/about-us-image.png"
              alt="About Us"
              className="w-1/2 mt-8 md:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      {/* <section className="py-16 bg-white"> */}
      <section ref={serviceHighlightsRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">
            SERVICE HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Personalized Career Guidance",
              "College Admission Support",
              "Entrance Exam Counseling",
              "Test Prep Resources",
            ].map((item) => (
              <div
                key={item}
                className="p-6 border-2 rounded-lg border-purple-500 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-8">
            {[
              {
                question: "What is this platform about?",
                answer: "This platform provides counseling services, academic resources, and guidance for students and parents, helping you with entrance exams, career planning, and more.",
              },
              {
                question: "What services do you offer?",
                answer: "We offer personalized counseling plans, exam preparation tips, and access to a variety of free resources such as guides, checklists, and e-books.",
              },
              {
                question: "How can I book a counseling plan?",
                answer: "You can book a counseling plan by visiting our services page and choosing the plan that best suits your needs. Simply follow the instructions to schedule a session.",
              },
              {
                question: "Are the counselors certified?",
                answer: "Yes, all of our counselors are certified professionals with extensive experience in academic and career counseling.",
              },
              {
                question: "What entrance exams do you cover?",
                answer: "We provide counseling and resources for a wide range of entrance exams, including engineering, medical, law, and other competitive exams.",
              },
              {
                question: "Are there any free resources available?",
                answer: "Yes, we offer a variety of free resources such as PDF guides, checklists, and e-books to help you with exam preparation and academic planning.",
              },
            ].map((item, idx) => (
              <div key={idx} className="mb-6">
                <button
                  className="w-full text-left bg-white p-4 rounded-lg shadow-md text-gray-800 font-medium hover:shadow-lg"
                  onClick={() => handleToggle(idx)} // Toggle answer visibility
                >
                  <h3 className="text-xl">{item.question}</h3>
                </button>
                {/* Toggle the answer visibility with smooth effect */}
                <div
                  className={`mt-2 text-gray-600 transition-all duration-500 ease-in-out ${
                    activeIndex === idx ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-6 w-96 bg-white shadow-lg rounded-lg">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Chat Section</h3>
            <button onClick={toggleChat} className="text-white font-bold">✖</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-purple-100 text-gray-800 p-2 rounded-lg mb-2">Hey there! How can we assist you today?</div>
            </div>
            <div className="mb-4 text-right">
              <div className="bg-purple-500 text-white p-2 rounded-lg mb-2">I’m looking for guidance on preparing for the IIT JEE exam. Can you help with that?</div>
            </div>
            <div className="mb-4">
              <div className="bg-purple-100 text-gray-800 p-2 rounded-lg mb-2">Absolutely! We can help with personalized study plans, tips, and strategies to improve your performance. Would you like to book a counseling session or get some resources to get started?</div>
            </div>
            <div className="mb-4 text-right">
              <div className="bg-purple-500 text-white p-2 rounded-lg mb-2">Yes, I would like to book a counseling session to discuss my preparation strategy.</div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type Message"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      )}

      
    </div>
  );
}

export default App;
