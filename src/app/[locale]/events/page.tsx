export default function Events() {
  return (
    <div className="mx-auto px-4 py-10 sm:px-6 md:max-w-4xl lg:max-w-screen-xl lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">Recent Events</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from industry experts.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a className="group flex flex-col focus:outline-none" href="#">
          <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
            <img
              className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
              src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
            <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-neutral-900">
              Sponsored
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              Studio by Preline
            </h3>
            <p className="mt-3 text-gray-800 dark:text-neutral-200">
              Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline dark:text-blue-500">
              Read more
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a className="group flex flex-col focus:outline-none" href="#">
          <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
            <img
              className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
              src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800 dark:text-neutral-200">
              Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline dark:text-blue-500">
              Read more
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a
          className="group relative flex min-h-60 w-full flex-col rounded-xl bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-cover bg-center transition hover:shadow-lg focus:shadow-lg focus:outline-none"
          href="#"
        >
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/90 group-hover:text-white">
              <span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.
            </h3>
          </div>
          <div className="p-4 pt-0 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
              Visit the site
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className="mx-auto mb-10 mt-32 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">Read our latest news</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-y-16">
        <a className="ring-default group block overflow-hidden rounded-xl" href="#">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
              <img
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Studio by Preline
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <div className="btn-small btn-link mt-4 gap-x-1">
                Read more
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        <a className="ring-default group block overflow-hidden rounded-xl" href="#">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
              <img
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Onsite
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
              </p>
              <div className="btn-small btn-link mt-4 gap-x-1">
                Read more
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        <a className="ring-default group block overflow-hidden rounded-xl" href="#">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
              <img
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                The complete guide to OKRs
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                How to make objectives and key results work for your company
              </p>
              <div className="btn-small btn-link mt-4 gap-x-1">
                Read more
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        <a className="ring-default group block overflow-hidden rounded-xl" href="#">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
              <img
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                People program models
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">Six approaches to bringing your People strategy to life</p>
              <div className="btn-small btn-link mt-4 gap-x-1">
                Read more
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="text-center">
        <a className="btn-link btn-small my-20 gap-x-2 px-4 py-2" href="#">
          Learn more
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
