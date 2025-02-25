import React, { useState } from 'react'
import { FaGlobe, FaBuilding, FaShoppingCart, FaCogs, FaEye, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { BiServer } from 'react-icons/bi'
import { MdSupportAgent } from 'react-icons/md'
import { useTheme } from './ThemeContext'

function Modal({ isOpen, onClose, title, details }) {
  const { isDark } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div 
        className={`${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 to-black' 
            : 'bg-gradient-to-br from-white to-gray-100'
        } p-5 sm:p-6 md:p-8 rounded-xl w-full max-w-sm sm:max-w-lg md:max-w-2xl mx-4 relative border ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        } shadow-2xl`}
        style={{ maxHeight: '85vh', overflowY: 'auto' }}
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

  
        {/* Title */}
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
  
        {/* Modal Content */}
        <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-3 sm:space-y-4 md:space-y-6`}>
          {details.map((section, index) => (
            <div key={index} className={`${
              isDark 
                ? 'bg-white/5 border-white/10 hover:border-white/20' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            } rounded-lg p-4 sm:p-5 md:p-6 backdrop-blur-sm border transition-colors`}>
              <h4 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 flex items-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></span>
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 sm:mr-3 mt-1.5"></span>
                    <span className={`${
                      isDark 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors text-sm sm:text-base md:text-lg`}>
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
    basic: {
      title: "Basic Website Details",
      details: [
        {
          title: "Included Features",
          items: [
            "3-5 pages (Home, About, Services, Contact)",
            "Mobile responsive design",
            "Basic SEO optimization",
            "Contact form integration",
            "Social media links",
            "Google Maps integration",
            "Basic analytics setup"
          ]
        },
        {
          title: "Development Process",
          items: [
            "Pre-built template customization",
            "2-3 weeks development time",
            "1 round of revisions",
            "Basic content upload",
            "Browser testing"
          ]
        }
      ]
    },
    business: {
      title: "Small Business Website Details",
      details: [
        {
          title: "Advanced Features",
          items: [
            "5-15 custom pages",
            "Custom design elements",
            "Advanced contact forms",
            "Newsletter integration",
            "Blog functionality",
            "Advanced SEO setup",
            "Social media integration"
          ]
        },
        {
          title: "Business Solutions",
          items: [
            "Booking system integration",
            "Custom CMS setup",
            "Lead capture forms",
            "Analytics dashboard",
            "Speed optimization"
          ]
        }
      ]
    },
    ecommerce: {
      title: "E-commerce Website Details",
      details: [
        {
          title: "Store Features",
          items: [
            "Unlimited product listings",
            "Secure payment gateway",
            "Order management system",
            "Customer accounts",
            "Inventory tracking",
            "Multiple payment options",
            "Shipping integration"
          ]
        },
        {
          title: "Marketing Tools",
          items: [
            "Discount system",
            "Product reviews",
            "Wishlist functionality",
            "Abandoned cart recovery",
            "Email marketing integration"
          ]
        }
      ]
    },
    custom: {
      title: "Custom Website Details",
      details: [
        {
          title: "Enterprise Features",
          items: [
            "Custom UI/UX design",
            "Advanced security features",
            "Complex database integration",
            "Custom API development",
            "Third-party integrations",
            "Scalable architecture"
          ]
        },
        {
          title: "Additional Services",
          items: [
            "Performance optimization",
            "Load balancing setup",
            "Continuous monitoring",
            "24/7 support",
            "Regular security audits"
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

        <div className="text-center mb-10 animate-float">
          <h2 className={`text-4xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Website Development Pricing
          </h2>
          <p className={isDark ? 'text-xl text-gray-300' : 'text-xl text-gray-600'}>
            Choose the perfect package for your website needs
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Basic Website */}
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
              }`}>Basic Website</h3>
              <p className="text-3xl font-bold mb-6 text-center text-blue-500">₹10,000-25,000</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Simple Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Basic Features</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Contact Form</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Mobile Responsive</span>
                </li>
              </ul>
            </div>
            <button
                onClick={() => setSelectedModal('basic')}
                className="absolute bottom-4 right-4 p-2 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaEye size={20} />
              </button>
          </div>

          {/* Small Business Website */}
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
              }`}>Small Business Website</h3>
              <p className="text-3xl font-bold mb-6 text-center text-green-500">₹25,000-1,25,000</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Advanced Features</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>CMS Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>SEO Optimization</span>
                </li>
              </ul>
            </div>
            <button
                onClick={() => setSelectedModal('business')}
                className="absolute bottom-4 right-4 p-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <FaEye size={20} />
              </button>
          </div>

          {/* Ecommerce Website */}
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
                <FaShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Ecommerce Website</h3>
              <p className="text-3xl font-bold mb-6 text-center text-orange-500">₹40,000-2,50,000</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Product Management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Payment Gateway</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Inventory System</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Order Management</span>
                </li>
              </ul>
            </div>
            <button
                onClick={() => setSelectedModal('ecommerce')}
                className="absolute bottom-4 right-4 p-2 text-orange-500 hover:text-orange-400 transition-colors"
              >
                <FaEye size={20} />
              </button>
          </div>

          {/* Custom Website */}
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
              }`}>Custom Website</h3>
              <p className="text-3xl font-bold mb-6 text-center text-purple-500">₹1,75,000-8,50,000</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Unique Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom Features</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Advanced Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Full Customization</span>
                </li>
              </ul>
            </div>
            <button
                onClick={() => setSelectedModal('custom')}
                className="absolute bottom-4 right-4 p-2 text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaEye size={20} />
              </button>
          </div>
        </div>

        {/* Additional Costs */}
        <div className="mt-20">
          <h3 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Additional Costs</h3>
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
                }`}>Domain and Hosting</h4>
                <p className="text-3xl font-bold mb-4 text-center text-cyan-500">₹1,500-10,000</p>
                <p className={`text-lg text-center ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Annually</p>
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
                }`}>Website Maintenance</h4>
                <p className="text-3xl font-bold mb-4 text-center text-teal-500">₹7,500-65,000</p>
                <p className={`text-lg text-center ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Per Month</p>
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