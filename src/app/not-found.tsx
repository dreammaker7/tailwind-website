import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex size-full min-h-screen max-w-[50rem] flex-col justify-center">
      {/* <header className="z-50 mb-auto flex w-full justify-center py-4">
        <nav className="px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <img src="/assets/logo/android-192x192.webp" className="h-6" alt="Flowbite Logo" />
            <span className="text-md self-center whitespace-nowrap font-semibold dark:text-white">Humming</span>
          </Link>
        </nav>
      </header> */}

      <main id="content">
        <div className="flex flex-col items-center px-4 py-10 text-center sm:px-6 lg:px-8">
          <img
            src="/assets/svg/404-computer.svg"
            alt="not-found"
            className="mx-auto mb-4 object-cover"
            width="360"
            height="340"
          />
          <h1 className="mb-4 text-2xl font-extrabold text-brand-600">404 Not Found</h1>
          <p className="mb-10 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Whoops! That page doesn’t exist.
          </p>
          <p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              href="/"
            >
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-5 text-center">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Humming Communications LLC™. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
