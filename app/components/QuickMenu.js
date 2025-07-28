const menu = [
  { label: "Hakkımızda", href: "/about" },
  { label: "Hizmetler", href: "/services" },
  { label: "Güvence", href: "/assurance" },
  { label: "Duyurular", href: "/announcements" },
  { label: "İletişim", href: "/contact" },
];

export default function QuickMenu() {
  return (
    <nav className="w-full flex justify-center py-8 primary-lighter-bg">
      <ul className="flex flex-wrap gap-6 justify-center">
        {menu.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="px-6 py-3 rounded-full bg-white shadow-lg primary-text font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              style={{
                textDecoration: "none",
                border: "2px solid var(--primary-color)",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
