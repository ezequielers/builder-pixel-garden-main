import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";

interface HeaderProps {
  showGradient?: boolean;
}

export default function Header({ showGradient }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Mostrar gradiente apenas na home ou quando explicitamente definido
  const shouldShowGradient =
    showGradient !== undefined ? showGradient : location.pathname === "/";

  return (
    <header className="w-full relative z-50">
      {/* Gradient Background - apenas na home */}
      {shouldShowGradient && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:"#e1dff8",
          }}
        />
      )}

      {/* Main Header Container */}
      <div
        className="max-w-7xl mx-auto
                      h-16 sm:h-18 md:h-20 lg:h-24 xl:h-[107px]
                      flex justify-between items-center
                      px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16
                      relative z-10"
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <Navigation />
        </nav>

        {/* Desktop Actions - Login/Phone Section */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          {/* Login Button */}
          <a
            href="/login"
            className="flex items-center gap-2 px-3 py-2 rounded-lg
                     hover:bg-black/5 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50
                     group"
            aria-label="Fazer login"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-200
                       group-hover:stroke-blue-600"
              aria-hidden="true"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-gray-900 font-gantari text-sm lg:text-base font-medium
                           group-hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </span>
          </a>

          {/* Phone Contact */}
          <a
            href="tel:+5511999999999"
            className="flex items-center gap-2 px-3 py-2 rounded-lg
                     hover:bg-black/5 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50
                     group"
            aria-label="Ligar para (11) 9999-9999"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-200
                       group-hover:stroke-blue-600"
              aria-hidden="true"
            >
              <path
                d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.271 2.12 4.18C2.09543 3.90347 2.12825 3.62476 2.21692 3.36162C2.30559 3.09849 2.44701 2.85669 2.63348 2.65162C2.81996 2.44655 3.04712 2.28271 3.30849 2.17052C3.56986 2.05833 3.84577 2.00026 4.125 2H7.125C7.60445 1.99574 8.06826 2.16736 8.43204 2.48298C8.79583 2.7986 9.03555 3.23426 9.105 3.71C9.23661 4.66 9.47145 5.59353 9.805 6.49C9.94601 6.84857 9.97529 7.2395 9.88951 7.61244C9.80372 7.98537 9.60689 8.32305 9.325 8.58L8.055 9.85C9.4785 12.3533 11.5467 14.4215 14.05 15.845L15.32 14.575C15.5769 14.2931 15.9146 14.0963 16.2876 14.0105C16.6605 13.9247 17.0514 13.954 17.41 14.095C18.3065 14.4286 19.24 14.6634 20.19 14.795C20.6698 14.8651 21.1088 15.1063 21.4248 15.4723C21.7408 15.8383 21.9105 16.3041 21.905 16.785L22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-gray-900 font-gantari text-sm lg:text-base font-medium
                           group-hover:text-blue-600 transition-colors duration-200"
            >
              (11) 9999-9999
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden relative p-2 rounded-lg
                   hover:bg-black/10 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[90vw]
                    bg-white shadow-2xl border-l border-gray-200 z-50
                    transform transition-transform duration-300 ease-out
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="text-lg font-gantari font-bold text-gray-900">
            Menu
          </div>
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Fechar menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
            <Navigation className="flex flex-col space-y-2" />
          </nav>

          {/* Mobile Actions */}
          <div className="px-4 py-6 border-t border-gray-200 space-y-3">
            <a
              href="/login"
              className="flex items-center gap-3 px-4 py-3 rounded-xl
                       bg-gray-50 hover:bg-gray-100 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Fazer login"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                aria-hidden="true"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-900 font-gantari text-base font-medium">
                Fazer Login
              </span>
            </a>

            <a
              href="tel:+5511999999999"
              className="flex items-center gap-3 px-4 py-3 rounded-xl
                       bg-blue-50 hover:bg-blue-100 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Ligar para (11) 9999-9999"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.271 2.12 4.18C2.09543 3.90347 2.12825 3.62476 2.21692 3.36162C2.30559 3.09849 2.44701 2.85669 2.63348 2.65162C2.81996 2.44655 3.04712 2.28271 3.30849 2.17052C3.56986 2.05833 3.84577 2.00026 4.125 2H7.125C7.60445 1.99574 8.06826 2.16736 8.43204 2.48298C8.79583 2.7986 9.03555 3.23426 9.105 3.71C9.23661 4.66 9.47145 5.59353 9.805 6.49C9.94601 6.84857 9.97529 7.2395 9.88951 7.61244C9.80372 7.98537 9.60689 8.32305 9.325 8.58L8.055 9.85C9.4785 12.3533 11.5467 14.4215 14.05 15.845L15.32 14.575C15.5769 14.2931 15.9146 14.0963 16.2876 14.0105C16.6605 13.9247 17.0514 13.954 17.41 14.095C18.3065 14.4286 19.24 14.6634 20.19 14.795C20.6698 14.8651 21.1088 15.1063 21.4248 15.4723C21.7408 15.8383 21.9105 16.3041 21.905 16.785L22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-900 font-gantari text-base font-medium">
                (11) 9999-9999
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
