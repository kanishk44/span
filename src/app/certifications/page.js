import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Certifications - Span Industries | Government Registrations & Approvals",
  description:
    "Span Industries is registered with major defence establishments including MoD, DRDO, VRDE, R&DE (E), HEMRL, ARDE, AFK and other defence organizations.",
};

export default function CertificationsPage() {
  const certifications = [
    {
      name: "Ministry of Defence (MoD)",
      description:
        "Official registration with the Ministry of Defence for defence manufacturing",
      details:
        "Approved vendor for defence equipment and components manufacturing",
      icon: "🏛️",
    },
    {
      name: "Defence Research and Development Organisation (DRDO)",
      description: "Registered with DRDO for research and development projects",
      details:
        "Authorized to undertake DRDO projects and collaborate on defence research",
      icon: "🔬",
    },
    {
      name: "Vehicle Research and Development Establishment (VRDE)",
      description:
        "Approved vendor for vehicle research and development projects",
      details: "Specialized in military vehicle components and systems",
      icon: "🚗",
    },
    {
      name: "Research & Development Establishment Engineers (R&DE E)",
      description:
        "Registered for engineering research and development projects",
      details:
        "Collaboration on advanced engineering solutions for defence applications",
      icon: "⚙️",
    },
    {
      name: "High Energy Materials Research Laboratory (HEMRL)",
      description:
        "Approved for high energy materials research and manufacturing",
      details:
        "Specialized in materials research and related defence applications",
      icon: "🧪",
    },
    {
      name: "Armament Research and Development Establishment (ARDE)",
      description: "Registered for armament research and development",
      details: "Authorized for armament systems and components manufacturing",
      icon: "🎯",
    },
    {
      name: "AFK",
      description: "Approved vendor for AFK defence projects",
      details:
        "Specialized defence manufacturing capabilities for AFK requirements",
      icon: "🛡️",
    },
    {
      name: "Other Defence Establishments",
      description:
        "Additional registrations with various defence organizations",
      details: "Comprehensive network of approvals across the defence sector",
      icon: "🏢",
    },
  ];

  const qualityStandards = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      details:
        "Certified quality management system ensuring consistent product quality",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      details:
        "Environmental responsibility and sustainable manufacturing practices",
    },
    {
      title: "OHSAS 18001:2007",
      description: "Occupational Health & Safety",
      details: "Commitment to workplace safety and employee well-being",
    },
    {
      title: "Defence Quality Assurance",
      description: "Military Standards Compliance",
      details: "Adherence to stringent defence quality assurance standards",
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
              Certifications & Registrations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Government Approved Defence Manufacturing
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              Span Industries is officially registered with major defence
              establishments and maintains the highest standards of quality and
              compliance in defence manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Government Approvals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to excellence and reliability has earned us
                official recognition from major defence establishments across
                India. These registrations demonstrate our capability to meet
                the stringent requirements of the defence sector.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Being registered with these organizations allows us to
                participate in defence tenders, collaborate on research
                projects, and contribute to India's defence modernization
                efforts with the highest standards of quality and compliance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">
                    Major Registrations
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">Years of Trust</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-lg">Government Approved</p>
                <p className="text-sm">Defence Manufacturing</p>
                <p className="text-sm">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Defence Establishments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Official registrations with major defence organizations and
              research establishments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{cert.description}</p>
                    <p className="text-sm text-gray-500">{cert.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is demonstrated through various
              international and defence-specific certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {standard.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {standard.description}
                  </p>
                  <p className="text-gray-600 text-sm">{standard.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our government registrations and certifications provide
              significant advantages for defence projects and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tender Eligibility
              </h3>
              <p className="text-gray-600">
                Qualified to participate in government defence tenders and
                procurement processes
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Research Collaboration
              </h3>
              <p className="text-gray-600">
                Authorized to collaborate on research and development projects
                with defence establishments
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Recognized quality standards ensuring reliable and compliant
                defence manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We maintain strict compliance with all defence manufacturing
                standards and regulations. Our quality management system ensures
                that every product meets the exacting requirements of the
                defence sector.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Regular audits and assessments by defence establishments ensure
                that our processes and products continue to meet the highest
                standards of quality, safety, and reliability required for
                defence applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Discuss Requirements
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-lg">Compliance</p>
                <p className="text-sm">Defence Standards</p>
                <p className="text-sm">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Defence Establishments
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our certifications demonstrate our commitment to excellence in
            defence manufacturing.
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
