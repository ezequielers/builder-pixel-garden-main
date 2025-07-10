interface SearchTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function SearchTabs({
  activeTab = "alugar",
  onTabChange,
}: SearchTabsProps) {
  const tabs = [
    {
      id: "alugar",
      label: "Alugar",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4917 12.4416C14.775 14.1499 12.3167 14.6749 10.1584 13.9999L6.23337 17.9166C5.95004 18.2083 5.39171 18.3833 4.99171 18.3249L3.17504 18.0749C2.57504 17.9916 2.01671 17.4249 1.92504 16.8249L1.67504 15.0083C1.61671 14.6083 1.80837 14.0499 2.08337 13.7666L6.00004 9.84994C5.33337 7.68327 5.85004 5.22494 7.56671 3.5166C10.025 1.05827 14.0167 1.05827 16.4834 3.5166C18.95 5.97494 18.95 9.98327 16.4917 12.4416Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "comprar",
      label: "Comprar",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3772 17.0834H6.04386C3.54386 17.0834 1.8772 15.8334 1.8772 12.9167V7.08341C1.8772 4.16675 3.54386 2.91675 6.04386 2.91675H14.3772C16.8772 2.91675 18.5439 4.16675 18.5439 7.08341V12.9167C18.5439 15.8334 16.8772 17.0834 14.3772 17.0834Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "vender",
      label: "Vender",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0083 6.56848L12.4531 2.25163C11.9656 1.87272 11.3655 1.66699 10.7479 1.66699C10.1302 1.66699 9.53019 1.87272 9.04268 2.25163L3.48643 6.56848"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange?.(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-[#F8F7FF] border border-[#E0DEF7] text-homeflip-purple"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
