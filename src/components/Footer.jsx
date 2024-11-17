import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f9bc4b] flex flex-col md:flex-row justify-between p-6">
      {/* Quick Links Section */}
      <div className="flex-1 mb-4 md:mb-0">
        <p className="font-bold text-lg">Quick Links</p>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">FAQ's</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="flex-1 mb-4 md:mb-0">
        <p className="font-bold text-lg">Contact Us</p>
        <p className="mt-2">
          44, Olufikayo hostel, Yoaco phase 2, Ogbomosho, Oyo State, Nigeria.
        </p>
        <p className="mt-1">+234 806 2587 958</p>
        <p className="mt-1">thekitchen@gmail.com</p>
      </div>

      {/* Additional Section (if needed) */}
      <div className="flex-1 mb-4 md:mb-0">
        <p className="font-bold text-lg">Follow Us</p>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
