export function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">Our Information</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Address</h3>
          <p className="text-gray-600 dark:text-gray-300">123 Business Rd, Suite 456</p>
          <p className="text-gray-600 dark:text-gray-300">City, State 12345</p>
          <p className="text-gray-600 dark:text-gray-300">Country</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-300"><a href="mailto:info@yourcompany.com" className="text-blue-600 hover:underline dark:text-blue-400">info@yourcompany.com</a></p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Business Hours</h3>
          <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-gray-600 dark:text-gray-300">Saturday, Sunday: Closed</p>
        }
      </div>
    </div>
  );
}
