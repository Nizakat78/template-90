import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";




const Footer = () => {
  return (
          <footer className="bg-black text-white py-8">
                  <div className="text-white py-8 px-2 border-b-2 border-yellow-600 bg-origin-padding flex justify-center items-center gap-10">
                 
                  <div>
                    <h2 className="text-2xl mb-2 font-bold">
                      <span className="text-orange-500">St</span>ill You Need Our Support?
                    </h2>
                    <p className="text-gray-400">
                      Dont wait, make a smart & logical choice here. Its pretty easy.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="p-3 text-black bg-orange-500 border border-orange-500 rounded-l-md focus:outline-none focus:ring focus:ring-orange-300 w-64"
                    />
                    <button className="p-3 bg-purple-600 text-white hover:bg-purple-700 rounded-r-md">
                      Subscribe Now
                    </button>
                  </div>
                </div>

              <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Us Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">About Us.</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-500 text-black p-2 rounded-full">
                    🕒
                  </div>
                  <div>
                    <p className="text-sm">Opening Hours:</p>
                    <p className="text-sm">Mon - Sat: 8.00 - 6.00</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
      
              {/* Useful Links Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">Useful Links</h2>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-yellow-500">About</a></li>
                  <li><a href="#" className="hover:text-yellow-500">News</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Partners</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Team</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Contacts</a></li>
                </ul>
              </div>
      
              {/* Help Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">Help?</h2>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Term & Conditions</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Reporting</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Documentation</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Support Policy</a></li>
                  <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
                </ul>
              </div>
      
              {/* Recent Posts Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">Recent Post</h2>
                <ul className="text-sm text-gray-400 space-y-4">
                  <li className="flex gap-2 items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                    <div>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business</p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                    <div>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business</p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                    <div>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
              <p>Copyright © 2024 by Nizakat Ali. All Rights Reserved.</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
                <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
                <a href="#" className="hover:text-yellow-500"><CiInstagram /></a>
                <a href="#" className="hover:text-yellow-500"><CiYoutube /></a>
                <a href="#" className="hover:text-yellow-500"><FaPinterestP />
                </a>
              </div>
            </div>
          </footer>
      
  )
}

export default Footer
