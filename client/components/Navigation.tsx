import { Link } from "react-router-dom";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Como funciona", href: "/como-funciona" },
  { name: "Contato", href: "/contato" },
];

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const isMobileLayout = className.includes("flex-col");
  const baseClasses = isMobileLayout
    ? `flex items-start ${className}`
    : `hidden lg:flex items-center gap-4 md:gap-6 ${className}`;

  return (
    <nav className={baseClasses}>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`font-gantari font-normal hover:text-gray-600 transition-colors ${
            isMobileLayout
              ? "text-gray-900 text-lg py-3 px-4 rounded-lg hover:bg-gray-50 w-full block"
              : "text-black text-sm md:text-base"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
