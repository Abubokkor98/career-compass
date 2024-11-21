import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#25434D] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Career Compass</h4>
          <p className="text-sm leading-relaxed">
            Career Compass helps you navigate your career path with personalized
            guidance and expert advice.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            Email: support@careercompass.com <br />
            Phone: +880-123-4567890 <br />
            Address: Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-600 pt-4 mt-4 text-sm">
        &copy; 2024 Career Compass. All rights reserved.
      </div>
    </footer>
  );
}
