export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p className="text-sm mt-2">Built with Next.js, Shadcn UI, and TailwindCSS.</p>
      </div>
    </footer>
  );
}
