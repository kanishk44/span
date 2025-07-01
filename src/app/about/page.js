import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us - Span Industries | Defence Manufacturing Excellence",
  description:
    "Learn about Span Industries' journey since 1994, our founder Mr. Jitendra J Dalvi, and our commitment to defence manufacturing excellence in India.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "1994",
      title: "Company Founded",
      description:
        "Span Industries established by Mr. Jitendra J Dalvi as a first-generation entrepreneur",
    },
    {
      year: "1995-2000",
      title: "Early Growth",
      description:
        "Established manufacturing facility and began serving defence establishments",
    },
    {
      year: "2000-2010",
      title: "Expansion Phase",
      description:
        "Expanded to 100,000 sq ft facility and secured major defence contracts",
    },
    {
      year: "2010-2020",
      title: "International Partnerships",
      description:
        "Became authorized representative for leading international defence companies",
    },
    {
      year: "2020-Present",
      title: "Industry Leadership",
      description:
        "Recognized as a trusted partner in India's defence manufacturing sector",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description:
        "Commitment to delivering the highest quality defence manufacturing solutions",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Building long-term relationships with government and defence establishments",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Continuously improving processes and technologies for better outcomes",
    },
    {
      icon: "🛡️",
      title: "Reliability",
      description:
        "Ensuring consistent performance and dependability in all our products",
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
              About Span Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Three Decades of Defence Manufacturing Excellence
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              From humble beginnings in 1994 to becoming a trusted partner in
              India&apos;s defence sector, our journey reflects our commitment
              to quality, innovation, and national security.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Span Industries was founded and promoted by Mr. Jitendra J
                Dalvi, a first-generation entrepreneur with a strong Mechanical
                Engineering background. His vision was to create a company that
                would contribute significantly to India&apos;s defence
                manufacturing capabilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with a small facility in Pune, we have grown into a
                100,000 sq ft manufacturing complex equipped with
                state-of-the-art machinery and skilled workforce. Our journey
                from 1994 to today has been marked by continuous innovation,
                quality improvement, and strategic partnerships with leading
                defence establishments.
              </p>
              <p className="text-lg text-gray-600">
                Today, we are proud to be registered with major defence
                organizations including MoD, DRDO, VRDE, and others, serving as
                a reliable partner in India&apos;s defence modernization
                efforts.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">👨‍💼</div>
                <p className="text-lg">Mr. Jitendra J Dalvi</p>
                <p className="text-sm">Founder & Promoter</p>
                <p className="text-sm">Mechanical Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Founder
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mr. Jitendra J Dalvi&apos;s leadership and vision have been the
              driving force behind Span Industries&apos; success in the defence
              manufacturing sector.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Education
                </h3>
                <p className="text-gray-600">
                  Mechanical Engineering Background
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Entrepreneurship
                </h3>
                <p className="text-gray-600">First-Generation Entrepreneur</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Leadership
                </h3>
                <p className="text-gray-600">
                  30+ Years of Industry Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three decades of growth, innovation, and commitment to defence
              manufacturing excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                      <div className="text-sm font-semibold text-blue-100">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every decision and action in serving
              the defence sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Legacy</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of our continued commitment to defence manufacturing
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
