import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      icon: "🏭",
      title: "Manufacturing Excellence",
      description:
        "100,000 sq ft facility with capacity up to 100 tons single job",
    },
    {
      icon: "🎯",
      title: "Defence Specialists",
      description: "30+ years serving the Indian Defence Industry",
    },
    {
      icon: "🏆",
      title: "Government Approved",
      description:
        "Registered with MoD, DRDO, VRDE, and other defence establishments",
    },
    {
      icon: "🌍",
      title: "Global Partnerships",
      description:
        "Authorized representative for international defence companies",
    },
  ];

  const projectCategories = [
    {
      title: "Missile Programmes",
      description: "AGNI 1, 2, 3, 5 and Prithvi Missile systems",
      image: "/missile.jpg",
    },
    {
      title: "Bridging Systems",
      description: "Modular Bridge, Short Span Bridge, Mountain Foot Bridge",
      image: "/bridge.jpg",
    },
    {
      title: "Special Trailers",
      description: "MRSAM, BO5, SIDDHI and other defence trailers",
      image: "/trailer.jpg",
    },
    {
      title: "Defence Components",
      description: "Jet Deflectors, Launcher Beams, Special Covering Hoods",
      image: "/components.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Span Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading Defence Manufacturing Solutions Since 1994
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-200">
              Founded by Mr. Jitendra J Dalvi, we specialize in providing
              high-quality solutions to the Indian Defence Industry with
              state-of-the-art manufacturing facilities and international
              partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                View Our Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Span Industries?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over three decades of experience in defence manufacturing, we
              deliver excellence through innovation, quality, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Span Industries
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded and promoted by Mr. Jitendra J Dalvi, a first-generation
                entrepreneur with a Mechanical Engineering background, Span
                Industries has been at the forefront of defence manufacturing
                since 1994.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our manufacturing facility in Pune spans 100,000 sq ft and is
                equipped with state-of-the-art machinery, skilled manpower, and
                power infrastructure to handle turnkey projects with capacity up
                to 100 tons single job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/facilities"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Our Facilities
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-lg">Manufacturing Facility</p>
                <p className="text-sm">100,000 sq ft • Pune, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Major Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have successfully delivered critical components and systems for
              various defence programmes across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">
                      {index === 0
                        ? "🚀"
                        : index === 1
                        ? "🌉"
                        : index === 2
                        ? "🚛"
                        : "⚙️"}
                    </div>
                    <p className="text-sm">{category.title}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Government Registrations & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and reliability is recognized by leading
              defence establishments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "MoD",
              "DRDO",
              "VRDE",
              "R&DE (E)",
              "HEMRL",
              "ARDE",
              "AFK",
              "Other Defence Establishments",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can support your defence manufacturing
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/partners"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Partners
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
