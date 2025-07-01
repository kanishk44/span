import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Facilities - Span Industries | State-of-the-Art Manufacturing Infrastructure",
  description:
    "Explore Span Industries' 100,000 sq ft manufacturing facility in Pune with capacity up to 100 tons, equipped with advanced machinery and skilled workforce.",
};

export default function FacilitiesPage() {
  const facilityFeatures = [
    {
      icon: "🏭",
      title: "Manufacturing Facility",
      description:
        "100,000 sq ft state-of-the-art manufacturing complex in Pune",
      details:
        "Spacious facility designed for heavy equipment manufacturing and assembly",
    },
    {
      icon: "⚡",
      title: "Power Infrastructure",
      description: "Fully equipped with necessary power systems and backup",
      details:
        "Ensures uninterrupted production capabilities for critical defence projects",
    },
    {
      icon: "🔧",
      title: "Advanced Machinery",
      description: "Modern equipment and tools for precision manufacturing",
      details:
        "State-of-the-art machinery for handling complex defence components",
    },
    {
      icon: "👥",
      title: "Skilled Workforce",
      description: "Experienced and trained professionals",
      details:
        "Dedicated team with expertise in defence manufacturing processes",
    },
  ];

  const capabilities = [
    {
      title: "Heavy Equipment Manufacturing",
      description: "Capability to handle projects up to 100 tons single job",
      icon: "🏗️",
    },
    {
      title: "Turnkey Projects",
      description: "End-to-end project execution from design to delivery",
      icon: "🎯",
    },
    {
      title: "Assembly & Integration",
      description: "Complete assembly and integration of complex systems",
      icon: "🔧",
    },
    {
      title: "Quality Control",
      description: "Rigorous quality assurance and testing procedures",
      icon: "✅",
    },
    {
      title: "Custom Fabrication",
      description: "Specialized fabrication for unique defence requirements",
      icon: "⚙️",
    },
    {
      title: "Logistics Support",
      description: "Comprehensive logistics and transportation solutions",
      icon: "🚚",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health & Safety",
    "Defence Quality Assurance Standards",
    "Government Approved Vendor Status",
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
              Our Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              State-of-the-Art Manufacturing Infrastructure
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              Our 100,000 sq ft manufacturing facility in Pune is equipped with
              advanced machinery, skilled workforce, and power infrastructure to
              handle turnkey projects up to 100 tons.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in Pune, our manufacturing facility spans 100,000 sq ft
                and is specifically designed for heavy equipment manufacturing
                and assembly. The facility is equipped with all necessary
                machines, skilled manpower, and power infrastructure to ensure
                uninterrupted production capabilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our facility can handle turnkey projects with capacity up to 100
                tons single job, making us capable of manufacturing and
                assembling large-scale defence equipment and components with
                precision and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    100,000
                  </div>
                  <div className="text-sm text-gray-600">Square Feet</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100</div>
                  <div className="text-sm text-gray-600">Tons Capacity</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-lg">Manufacturing Facility</p>
                <p className="text-sm">Pune, Maharashtra</p>
                <p className="text-sm">100,000 sq ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Facility Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our facility is equipped with everything needed to deliver
              high-quality defence manufacturing solutions efficiently and
              reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <p className="text-sm text-gray-500">{feature.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions tailored for defence
              industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Address */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Manufacturing Facility
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Plot no 2421A, Gat no 255 A,
                    <br />
                    Talawade, Pune – 412109
                    <br />
                    Maharashtra, India
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    <a
                      href="mailto:dalvi.jitendra@gmail.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      dalvi.jitendra@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Facility Size:</strong> 100,000 sq ft
                  </p>
                  <p>
                    <strong>Capacity:</strong> Up to 100 tons single job
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-lg">Pune, Maharashtra</p>
                <p className="text-sm">Strategic Location</p>
                <p className="text-sm">Easy Access to Major Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is recognized through various
              certifications and approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">🏆</div>
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Visit Our Facility?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a visit to see our manufacturing capabilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Visit
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
