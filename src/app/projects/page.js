import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Projects - Span Industries | Major Defence Manufacturing Achievements",
  description:
    "Explore Span Industries' major projects including AGNI missile programmes, bridging systems, special trailers, and defence components for the Indian Defence Industry.",
};

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Missile Programmes",
      icon: "🚀",
      description:
        "Critical components and systems for India's missile defence programmes",
      projects: [
        "AGNI 1 Missile System",
        "AGNI 2 Missile System",
        "AGNI 3 Missile System",
        "AGNI 5 Missile System",
        "Prithvi 1 Missile",
        "Prithvi 2 Missile",
        "Canister for Submarines",
      ],
    },
    {
      title: "Bridging Systems",
      icon: "🌉",
      description: "Specialized bridging solutions for military applications",
      projects: [
        "Modular Bridge Systems",
        "Short Span Bridge",
        "Mountain Foot Bridge (Special Aluminium Alloy)",
        "Mountain Foot Bridge (Steel)",
        "Military Grade Bridge Components",
      ],
    },
    {
      title: "Special Trailers",
      icon: "🚛",
      description: "Custom trailers for defence equipment transportation",
      projects: [
        "MRSAM Trailers",
        "BO5 Trailers",
        "SIDDHI Trailers",
        "Defence Equipment Transport Trailers",
        "Specialized Military Trailers",
      ],
    },
    {
      title: "Defence Components",
      icon: "⚙️",
      description:
        "Precision components and sub-assemblies for defence systems",
      projects: [
        "Jet Deflectors (AGNI Project)",
        "Launcher Beams",
        "Launch Platform Sub-assemblies",
        "Special Covering Hoods",
        "ET FUZE for Ammunition Factories",
      ],
    },
  ];

  const keyAchievements = [
    {
      number: "30+",
      label: "Years of Experience",
      description: "Serving the Indian Defence Industry since 1994",
    },
    {
      number: "100+",
      label: "Major Projects",
      description: "Successfully completed defence manufacturing projects",
    },
    {
      number: "8+",
      label: "Government Registrations",
      description: "Registered with major defence establishments",
    },
    {
      number: "100",
      label: "Tons Capacity",
      description: "Single job manufacturing capacity",
    },
  ];

  const projectHighlights = [
    {
      title: "AGNI Missile Programme",
      description:
        "Critical components and systems for India's strategic missile defence programme",
      details:
        "Manufactured precision components for AGNI 1, 2, 3, and 5 missile systems, including jet deflectors and launch platform sub-assemblies.",
    },
    {
      title: "Bridging Systems",
      description:
        "Specialized military bridging solutions for various terrains",
      details:
        "Developed modular bridge systems, short span bridges, and mountain foot bridges using special aluminium alloys and steel for military applications.",
    },
    {
      title: "Special Trailers",
      description:
        "Custom transportation solutions for sensitive defence equipment",
      details:
        "Manufactured specialized trailers for MRSAM, BO5, SIDDHI, and other defence systems with special covering hoods for secure transport.",
    },
    {
      title: "Defence Components",
      description: "Precision engineering for critical defence applications",
      details:
        "Produced ET FUZE for ammunition factories, launcher beams, and various sub-assemblies for launch platforms and defence systems.",
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Major Defence Manufacturing Achievements
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              Over three decades of delivering critical components and systems
              for India&apos;s defence programmes, from missile systems to
              bridging solutions and specialized equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself - decades of excellence in
              defence manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyAchievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive defence manufacturing solutions across multiple
              domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.projects.map((project, projectIndex) => (
                    <li
                      key={projectIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our major project categories and
              achievements.
            </p>
          </div>

          <div className="space-y-8">
            {projectHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {highlight.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-gray-700">{highlight.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Registrations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Government Registrations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our projects are backed by official registrations with major
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
            ].map((registration, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-900">{registration}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every project we undertake follows rigorous quality control
                procedures to ensure the highest standards of precision and
                reliability required for defence applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our manufacturing processes are certified and approved by major
                defence establishments, ensuring that all components and systems
                meet the stringent requirements of the Indian Defence Industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/facilities"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  View Facilities
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Discuss Project
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-lg">Quality Assured</p>
                <p className="text-sm">Defence Standards</p>
                <p className="text-sm">Government Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s discuss how we can support your defence manufacturing
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Quote
            </Link>
            <Link
              href="/facilities"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Visit Facility
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
