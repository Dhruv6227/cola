import React, { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/20 border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          {/* Custom SVG Coca-Cola swirl icon */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center shadow-lg transform hover:rotate-180 transition-transform duration-700">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            Coca-Cola Experience
          </span>
        </div>

        {/* Right CTA */}
        <div>
          <button className="relative group overflow-hidden px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ease-out">
            <span className="relative z-10 font-bold uppercase tracking-wider text-sm">
              Order Now
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
