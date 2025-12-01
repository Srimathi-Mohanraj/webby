import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-12 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold">LOGO</div>
          <p className="mt-3 text-sm text-blue-200">© 2025 Local action company. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Sell</h4>
          <ul className="text-sm text-blue-200 space-y-2">
            <li>How to sell</li>
            <li>Seller Dashboard</li>
            <li>Seller Now</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Buy</h4>
          <ul className="text-sm text-blue-200 space-y-2">
            <li>Browse</li>
            <li>How to buy</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm text-blue-200 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
