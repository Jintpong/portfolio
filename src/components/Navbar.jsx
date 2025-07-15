import React from 'react'
import { FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-6">
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <a href="https://www.linkedin.com/notifications/?filter=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
                  <FaLinkedin />
                  </a> 
          </div>
      </nav>
    )
  }

export default Navbar