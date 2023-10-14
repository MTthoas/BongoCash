import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full bg-base-100 py-6 mt-20">
      <div className="container mx-auto px-9 flex flex-col md:flex-row justify-between items-center">
        
        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link className="text-neutral hover:underline text-sm" to="/">Home</Link>
          <Link className="text-neutral hover:underline text-sm" to="/">Payments status</Link>
          <Link className="text-neutral hover:underline text-sm" to="/">Contact us</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-neutral">© 2023 Bongo. All rights reserved.</p>
        
      </div>
    </div>
  );
}
