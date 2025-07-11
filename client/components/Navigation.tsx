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
  const baseClasses = className.includes("flex-col")
    ? `flex items-start ${className}`
    : `hidden md:flex items-center gap-6 ${className}`;

  return (
    <nav className={baseClasses}>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-black font-gantari text-base font-normal hover:text-gray-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
