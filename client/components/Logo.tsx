import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-1 ${className}`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4161c9a234fc834919094abd1901070510092a8a?width=314"
        alt="HomeFlip Logo"
        className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[60px] w-auto hover:opacity-80 transition-opacity"
      />
    </Link>
  );
}
