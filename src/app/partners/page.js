import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Partners - Span Industries | International Defence Partnerships",
  description:
    "Span Industries is the authorized sole representative for leading international defence companies including Palfinger Co. AG, Automated Car Parking, Under Vehicle Scanner, and more.",
};

export default function PartnersPage() {
  const internationalPartners = [
    {
      name: "M/s Palfinger Co. AG",
      country: "Austria",
      description:
        "Leading manufacturer of hydraulic lifting, loading, and handling systems",
      products:
        "Hydraulic systems, lifting equipment, specialized handling solutions",
      icon: "🇦🇹",
    },
    {
      name: "Automated Car Parking",
      country: "Korea",
      description: "Advanced automated parking solutions and systems",
      products:
        "Automated parking systems, smart parking technology, parking management solutions",
      icon: "🇰🇷",
    },
    {
      name: "Under Vehicle Scanner",
      country: "Singapore",
      description: "Specialized security scanning and inspection equipment",
      products:
        "Under vehicle scanning systems, security inspection equipment, surveillance technology",
      icon: "🇸🇬",
    },
    {
      name: "Radar System",
      country: "Israel",
      description:
        "Advanced radar and detection systems for defence applications",
      products: "Radar systems, detection equipment, surveillance technology",
      icon: "🇮🇱",
    },
    {
      name: "M/s SOPOT",
      country: "Russia",
      description: "Fire fighting equipment and safety systems",
      products:
        "Fire fighting equipment, safety systems, emergency response solutions",
      icon: "🇷🇺",
    },
    {
      name: "M/s CHTZ",
      country: "Russia",
      description: "Heavy machinery and construction equipment",
      products: "Dozers, heavy construction equipment, industrial machinery",
      icon: "🇷🇺",
    },
    {
      name: "M/s SOPOL",
      country: "Russia",
      description: "Perimeter security and surveillance systems",
      products:
        "Surveillance systems, perimeter security, defence force equipment",
      icon: "🇷🇺",
    },
  ];

  const partnershipBenefits = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Access to international defence technology and expertise",
    },
    {
      icon: "🤝",
      title: "Sole Representation",
      description: "Exclusive rights to represent these companies in India",
    },
    {
      icon: "💡",
      title: "Technology Transfer",
      description: "Latest defence technologies and manufacturing processes",
    },
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "International standards and quality certifications",
    },
  ];

  const collaborationAreas = [
    "Defence Equipment Supply",
    "Technology Transfer",
    "Joint Manufacturing",
    "Research & Development",
    "Training & Support",
    "After-Sales Service",
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
              International Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Global Defence Technology Partnerships
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              Span Industries is the authorized sole representative for leading
              international defence companies, bringing world-class technology
              and expertise to India's defence sector.
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
                Global Partnerships
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our strategic partnerships with leading international defence
                companies enable us to provide cutting-edge technology and
                solutions to the Indian Defence Industry. As authorized sole
                representatives, we bring world-class expertise and products to
                support India's defence modernization efforts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                These partnerships span multiple countries including Austria,
                Korea, Singapore, Israel, and Russia, covering diverse areas
                from hydraulic systems to security equipment and heavy
                machinery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">7+</div>
                  <div className="text-sm text-gray-600">
                    International Partners
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-lg">Global Partnerships</p>
                <p className="text-sm">International Technology</p>
                <p className="text-sm">Defence Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our International Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Authorized sole representatives for leading defence technology
              companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{partner.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {partner.country}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{partner.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Products & Services:
                  </p>
                  <p className="text-sm text-gray-600">{partner.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our international partnerships provide significant advantages for
              defence projects and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas of Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive partnership services covering the entire spectrum of
              defence manufacturing and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-2xl mb-2">🔗</div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Transfer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technology Transfer & Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our partnerships facilitate technology transfer and knowledge
                sharing, enabling us to manufacture and support advanced defence
                systems in India. This includes training, technical support, and
                ongoing collaboration for product development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We work closely with our international partners to ensure that
                the latest technologies and manufacturing processes are
                available to support India's defence requirements while
                maintaining the highest standards of quality and reliability.
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
                  Discuss Partnership
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🔧</div>
                <p className="text-lg">Technology Transfer</p>
                <p className="text-sm">Knowledge Sharing</p>
                <p className="text-sm">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our international partnerships span multiple continents, bringing
              diverse expertise and technologies to serve India's defence
              sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { country: "Austria", icon: "🇦🇹" },
              { country: "Korea", icon: "🇰🇷" },
              { country: "Singapore", icon: "🇸🇬" },
              { country: "Israel", icon: "🇮🇱" },
              { country: "Russia", icon: "🇷🇺" },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm"
              >
                <div className="text-3xl mb-2">{location.icon}</div>
                <p className="font-semibold text-gray-900">
                  {location.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Access world-class defence technology through our international
            partnerships.
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
