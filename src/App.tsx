import React from 'react';
    import { Globe, GraduationCap, Book, Award, Mail, Phone } from 'lucide-react';

    function App() {
      return (
        <div className="bg-white">
          {/* Header */}
          <header className="bg-blue-700 text-white py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
              <a href="/" className="flex items-center text-lg font-semibold">
                <GraduationCap className="mr-2" size={32} />
                MJ College of Engineering &amp; Technology
              </a>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <a href="#about" className="hover:text-blue-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#academics" className="hover:text-blue-200">
                      Academics
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" className="hover:text-blue-200">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative">
            <img
              src="https://res.cloudinary.com/did9ru4ij/image/upload/v1750225042/ql9iaogiilgqxo78wtiy.png"
              alt="MJ College Main"
              className="w-full h-96 object-cover brightness-50"
              crossOrigin="anonymous"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to MJ College of Engineering &amp; Technology
              </h1>
              <p className="text-lg">
                A premier institution dedicated to excellence in engineering education and innovation.
              </p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-700 leading-7 mb-4">
                Muffakham Jah College of Engineering and Technology (MJCET) was established in 1980 by Sultan-ul-Uloom
                Education Society. It is a self-financing institution, approved by AICTE and affiliated to Osmania
                University. MJCET is one of the top engineering colleges in Hyderabad, offering a wide range of
                undergraduate and postgraduate programs.
              </p>
              <p className="text-gray-700 leading-7">
                Our mission is to provide quality education that prepares students for leadership roles in a global
                economy. We strive to create a learning environment that fosters innovation, critical thinking, and
                ethical practices.
              </p>
            </div>
          </section>

          {/* Academics Section */}
          <section id="academics" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Academics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Course Card */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Computer Science &amp; Engineering</h3>
                  <p className="text-gray-600">
                    Explore the world of algorithms, data structures, and software development.
                  </p>
                </div>
                {/* Add more course cards here */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Electrical Engineering</h3>
                  <p className="text-gray-600">
                    Power systems, control systems, and electronic circuits are explored.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Civil Engineering</h3>
                  <p className="text-gray-600">
                    Infrastructure design, construction management, and environmental engineering.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Achievements</h2>
              <img
                src="https://res.cloudinary.com/did9ru4ij/image/upload/v1750225025/bs4pn5xyqzqtgef83mef.jpg"
                alt="MJCET Achievements"
                className="w-full rounded-lg shadow-md mb-6"
                crossOrigin="anonymous"
              />
              <p className="text-gray-700 leading-7">
                MJCET students and faculty have consistently achieved excellence in academics, research, and
                extracurricular activities. Our achievements include national and international awards, prestigious
                publications, and successful startups.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-7 mb-4">
                    You can reach us through the following channels:
                  </p>
                  <ul className="text-gray-700">
                    <li className="flex items-center mb-2">
                      <Mail className="mr-2" />
                      <a href="mailto:info@mjcet.ac.in">info@mjcet.ac.in</a>
                    </li>
                    <li className="flex items-center mb-2">
                      <Phone className="mr-2" />
                      +91-40-23314013, 23318356
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2" />
                      <a href="https://www.mjcet.ac.in" target="_blank" rel="noopener noreferrer">
                        www.mjcet.ac.in
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your Message"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              &copy; {new Date().getFullYear()} Muffakham Jah College of Engineering &amp; Technology. All rights
              reserved.
            </div>
          </footer>
        </div>
      );
    }

    export default App;