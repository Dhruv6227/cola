import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/70 py-16 px-6 md:px-12 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Coca-Cola</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            The world&apos;s most iconic refreshment experience. Enjoy the feeling and taste the magic.
          </p>
        </div>
        
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white mb-3">Drinks</h4>
          <a href="#" className="hover:text-white transition-colors">Coca-Cola Classic</a>
          <a href="#" className="hover:text-white transition-colors">Coca-Cola Zero Sugar</a>
          <a href="#" className="hover:text-white transition-colors">Cherry Coca-Cola</a>
        </div>
        
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white mb-3">Support</h4>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
          <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm text-white placeholder-white/40"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The Coca-Cola Company. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
