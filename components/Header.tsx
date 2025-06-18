import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          YourCompany
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
            Services
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
            Team
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
            Contact
          </Link>
        </nav>
        {/* Mobile navigation toggle would go here */}
      </div>
    </header>
  );
}
