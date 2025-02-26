import React, { useState } from 'react'
import { 
  FaGlobe, FaBuilding, FaShoppingCart, FaCogs, FaEye, FaTimes, 
  FaSun, FaMoon, FaMobile, FaGraduationCap, FaHospital, FaUsers 
} from 'react-icons/fa'
import { BiServer } from 'react-icons/bi'
import { MdSupportAgent, MdDashboard } from 'react-icons/md'
import { useTheme } from './ThemeContext'

function Modal({ isOpen, onClose, title, details }) {
  const { isDark } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ overflow: 'hidden' }}>
      <div 
        className={`${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 to-black' 
            : 'bg-gradient-to-br from-white to-gray-100'
        } px-4 py-8 rounded-xl max-w-2xl w-full mx-4 relative border ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        } shadow-2xl`}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
{/* Close Button */}
<button
  onClick={onClose}
  className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full ${
    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
  } transition-colors`}
>
  <FaTimes size={15} />
</button>
        <h3 className={`text-3xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-6`}>
          {details.map((section, index) => (
            <div key={index} className={`${
              isDark 
                ? 'bg-white/5 border-white/10 hover:border-white/20' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            } rounded-lg p-6 backdrop-blur-sm border transition-colors`}>
              <h4 className={`text-xl font-semibold mb-4 flex items-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2"></span>
                    <span className={`${
                      isDark 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedModal, setSelectedModal] = useState(null);
  const { isDark, setIsDark } = useTheme();

  const websiteDetails = {
    portfolio: {
      title: "Custom Portfolio Website",
      details: [
        {
          title: "Core Features",
          items: [
            "Single-page or multi-page portfolio",
            "Image gallery with lightbox",
            "Contact form integration",
            "Custom animations",
            "Blog integration",
            "Mobile responsive design"
          ]
        },
        {
          title: "Cost Breakdown",
          items: [
            "Base Cost: ₹5,000 - ₹12,000",
            "Domain: ₹249 - ₹1,500 per year",
            "Hosting: ₹1,500 - ₹5,000 per year",
            "SSL Certificate: ₹2,500 per year"
          ]
        }
      ]
    },
    corporate: {
      title: "Enterprise Corporate Website",
      details: [
        {
          title: "Advanced Features",
          items: [
            "20+ custom designed pages",
            "Custom UI/UX design",
            "Admin dashboard",
            "API integration capabilities",
            "Multilingual support",
            "Live chat integration",
            "Advanced analytics"
          ]
        },
        {
          title: "Cost Structure",
          items: [
            "Base Cost: ₹50,000 - ₹2,00,000",
            "Monthly Maintenance: ₹5,000 - ₹10,000",
            "Security & Performance: ₹10,000 - ₹30,000 (one-time)",
            "Additional customization available"
          ]
        }
      ]
    },
    saas: {
      title: "SaaS Web Application",
      details: [
        {
          title: "Platform Features",
          items: [
            "Subscription management system",
            "Multiple user roles & permissions",
            "Cloud infrastructure integration",
            "Advanced analytics dashboard",
            "Automated billing system",
            "API endpoints for integration"
          ]
        },
        {
          title: "Investment Breakdown",
          items: [
            "Development: ₹2,00,000 - ₹10,00,000",
            "Cloud Hosting: ₹10,000 - ₹50,000 per year",
            "Security & Maintenance: ₹15,000 - ₹50,000 per year",
            "Custom feature development available"
          ]
        }
      ]
    },
    crm: {
      title: "Custom CRM/ERP System",
      details: [
        {
          title: "System Features",
          items: [
            "Role-based access control",
            "Workflow automation",
            "Invoicing system",
            "Employee management",
            "Client management",
            "Custom reporting"
          ]
        },
        {
          title: "Cost Structure",
          items: [
            "Base Development: ₹5,00,000 - ₹15,00,000",
            "API Integration: ₹25,000 - ₹1,00,000",
            "Data Migration: ₹10,000 - ₹50,000 per year",
            "Customization available on request"
          ]
        }
      ]
    },
    ecommerce: {
      title: "E-Commerce Mobile App",
      details: [
        {
          title: "App Features",
          items: [
            "User authentication system",
            "Product catalog management",
            "Shopping cart & checkout",
            "Payment gateway integration",
            "Push notifications",
            "Order tracking"
          ]
        },
        {
          title: "Cost Breakdown",
          items: [
            "Development: ₹2,00,000 - ₹8,00,000",
            "Payment Integration: ₹10,000 - ₹50,000",
            "Store Publishing: ₹5,000 - ₹10,000",
            "Maintenance packages available"
          ]
        }
      ]
    },
    ondemand: {
      title: "On-Demand Service App",
      details: [
        {
          title: "Core Features",
          items: [
            "Customer & provider dashboards",
            "Real-time GPS tracking",
            "Payment processing",
            "Rating & review system",
            "Service scheduling",
            "Push notifications"
          ]
        },
        {
          title: "Investment Details",
          items: [
            "Development: ₹3,00,000 - ₹12,00,000",
            "Maps Integration: ₹5,000 - ₹25,000",
            "Cloud Services: ₹10,000 - ₹50,000 per year",
            "Custom features available"
          ]
        }
      ]
    },
    healthcare: {
      title: "Healthcare & Fitness App",
      details: [
        {
          title: "App Features",
          items: [
            "User health profiles",
            "Health metrics tracking",
            "Video consultation system",
            "Appointment scheduling",
            "Medication reminders",
            "Health data analytics"
          ]
        },
        {
          title: "Cost Structure",
          items: [
            "Development: ₹4,00,000 - ₹15,00,000",
            "Compliance: ₹50,000 - ₹2,00,000",
            "AI Integration: ₹50,000 - ₹2,50,000",
            "Maintenance packages available"
          ]
        }
      ]
    },
    education: {
      title: "Educational & E-Learning App",
      details: [
        {
          title: "Platform Features",
          items: [
            "Course management system",
            "Video content streaming",
            "Interactive quizzes",
            "Gamification elements",
            "Certificate generation",
            "Progress tracking"
          ]
        },
        {
          title: "Cost Breakdown",
          items: [
            "Development: ₹2,50,000 - ₹10,00,000",
            "Cloud Storage: ₹10,000 - ₹1,00,000 per year",
            "AI Learning: ₹50,000 - ₹3,00,000",
            "Custom features available"
          ]
        }
      ]
    }
  };

  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-gray-100'
    } py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-float">
          <h2 className={`text-4xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Development Services
          </h2>
          <p className={isDark ? 'text-xl text-gray-300' : 'text-xl text-gray-600'}>
            Comprehensive solutions for web and mobile development
          </p>
        </div>
        <div className='flex justify-end mb-5'>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
        >
          {isDark ? <FaSun className="w-6 h-6 text-yellow-400" /> : <FaMoon className="w-6 h-6 text-gray-600" />}
        </button>
        </div>

        {/* Web Development Section */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Web Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Portfolio Website */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                  <FaGlobe className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Portfolio Website</h3>
                <p className="text-3xl font-bold mb-2 text-center text-blue-500">₹5,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Starting Price</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Image Gallery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Contact Form</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Blog Integration</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('portfolio')}
                  className="absolute bottom-4 right-4 p-2 text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* Corporate Website */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10' 
                  : 'bg-gradient-to-br from-green-50 to-teal-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 mx-auto">
                  <FaBuilding className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Corporate Website</h3>
                <p className="text-3xl font-bold mb-2 text-center text-green-500">₹50,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Enterprise Grade</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>20+ Pages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom UI/UX</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Admin Panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Multilingual</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('corporate')}
                  className="absolute bottom-4 right-4 p-2 text-green-500 hover:text-green-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* SaaS Application */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10' 
                  : 'bg-gradient-to-br from-orange-50 to-red-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6 mx-auto">
                  <MdDashboard className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>SaaS Application</h3>
                <p className="text-3xl font-bold mb-2 text-center text-orange-500">₹2,00,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Custom Platform</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Subscription System</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>User Roles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>API Access</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('saas')}
                  className="absolute bottom-4 right-4 p-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* CRM/ERP System */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
                  : 'bg-gradient-to-br from-purple-50 to-pink-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-6 mx-auto">
                  <FaCogs className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>CRM/ERP System</h3>
                <p className="text-3xl font-bold mb-2 text-center text-purple-500">₹5,00,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Enterprise Solution</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Workflow Automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Role Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Invoicing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom Reports</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('crm')}
                  className="absolute bottom-4 right-4 p-2 text-purple-500 hover:text-purple-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Development Section */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Mobile App Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* E-commerce App */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-pink-500/10 to-red-500/10' 
                  : 'bg-gradient-to-br from-pink-50 to-red-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-6 mx-auto">
                  <FaShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>E-commerce App</h3>
                <p className="text-3xl font-bold mb-2 text-center text-pink-500">₹2,00,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Full Featured</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Product Catalog</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Cart & Checkout</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Payment Gateway</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Push Notifications</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('ecommerce')}
                  className="absolute bottom-4 right-4 p-2 text-pink-500 hover:text-pink-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* On-Demand Service App */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-6 mx-auto">
                  <FaMobile className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>On-Demand App</h3>
                <p className="text-3xl font-bold mb-2 text-center text-cyan-500">₹3,00,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">Service Platform</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>GPS Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Service Booking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Provider Panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Reviews System</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('ondemand')}
                  className="absolute bottom-4 right-4 p-2 text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* Healthcare App */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}> 

              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-teal-500/10 to-green-500/10' 
                  : 'bg-gradient-to-br from-teal-50 to-green-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mb-6 mx-auto">
                  <FaHospital className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Healthcare App</h3>
                <p className="text-3xl font-bold mb-2 text-center text-teal-500">₹4,00,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">HIPAA Compliant</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Health Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Video Consults</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Appointments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Health Records</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('healthcare')}
                  className="absolute bottom-4 right-4 p-2 text-teal-500 hover:text-teal-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* Educational App */}
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10' 
                  : 'bg-gradient-to-br from-yellow-50 to-orange-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6 mx-auto">
                  <FaGraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Educational App</h3>
                <p className="text-3xl font-bold mb-2 text-center text-yellow-500">₹2,50,000+</p>
                <p className="text-sm text-center mb-6 text-gray-500">E-Learning Platform</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Course System</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Video Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Quiz System</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Certificates</span>
                  </li>
                </ul>
                <button
                  onClick={() => setSelectedModal('education')}
                  className="absolute bottom-4 right-4 p-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-6 mx-auto">
                  <BiServer className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Infrastructure</h4>
                <ul className="space-y-3 text-center mb-4">
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>Domain: ₹249 - ₹3,000/year</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>Hosting: ₹1,500 - ₹50,000/year</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>SSL: ₹2,500 - ₹15,000/year</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>API Integration: From ₹10,000</li>
                </ul>
              </div>
            </div>

            <div className={`card-hover rounded-xl p-8 relative overflow-hidden group ${
              isDark 
                ? 'bg-white/10 backdrop-blur-lg border-white/20' 
                : 'bg-white border-gray-200 shadow-lg'
            } border`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-teal-500/10 to-green-500/10' 
                  : 'bg-gradient-to-br from-teal-50 to-green-50'
              } transform scale-100 group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mb-6 mx-auto">
                  <MdSupportAgent className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Support & Marketing</h4>
                <ul className="space-y-3 text-center mb-4">
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>SEO: ₹5,000 - ₹50,000/month</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>Maintenance: ₹3,000 - ₹50,000/month</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>Content Updates: From ₹2,500/month</li>
                  <li className={isDark ? 'text-gray-300' : 'text-gray-600'}>24/7 Support: Custom Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={selectedModal !== null}
        onClose={() => setSelectedModal(null)}
        title={selectedModal ? websiteDetails[selectedModal].title : ''}
        details={selectedModal ? websiteDetails[selectedModal].details : []}
      />
    </div>
  )
}

export default App