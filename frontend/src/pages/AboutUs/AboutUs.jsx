// this is our main page (Desktop 6)

function AboutUs() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800">FREE RESOURCES</h1>
        <p className="text-gray-600 mt-4">
          Explore a collection of free tools, guides, and tips to help you on
          your academic and career journey. Whether you're a student or parent,
          you'll find a lot to love in our carefully curated resources.
        </p>
        <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg">
          GET STARTED
        </button>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => scrollToSection("pdf-guides")}
          >
            PDF Guides
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => scrollToSection("checklists")}
          >
            Checklists
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => scrollToSection("e-books")}
          >
            E-Books
          </button>
        </div>
      </section>

      {/* PDF Guides Section */}
      <section id="pdf-guides" className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">PDF Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Prepare for Competitive Exams",
                description: "Exam-specific preparation guides",
              },
              {
                title: "College Planning Tips",
                description: "Admission timelines and steps",
              },
              {
                title: "College Interview Strategies",
                description: "Tips for cracking interviews",
              },
            ].map((guide, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mt-2">{guide.description}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists Section */}
      <section id="checklists" className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Checklists</h2>
          <p className="text-gray-600 mt-4">
            Ready to streamline? Get your free checklists here!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Application Checklist",
                description: "A detailed checklist for documents, deadlines, and forms",
              },
              {
                title: "Exam Day Checklist",
                description: "What to carry and how to prepare for the big day",
              },
              {
                title: "Study Schedule Planner",
                description: "Weekly study planner template",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Books Section */}
      <section id="e-books" className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">E-Books</h2>
          <p className="text-gray-600 mt-4">
            Check out our latest exclusive collection!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
            {["Physics", "Mathematics", "Algorithms to Live By", "Chemistry", "Study Tips"].map(
              (book, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-lg font-bold text-gray-800">{book}</h3>
                  <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    Download
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Bonus Features Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Bonus Features</h2>
        <div className="mt-8 flex justify-center space-x-6">
          {[
            "Sample Test Papers",
            "Parent Guide",
            "FAQs Handbook",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-gray-800">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
