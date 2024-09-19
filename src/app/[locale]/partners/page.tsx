import { partners } from './data';

export default function Partners() {
  return (
    <div className="mx-auto px-4 py-10 sm:px-6 md:max-w-4xl lg:max-w-screen-xl lg:px-8 lg:py-14">
      <div className="py-8 lg:py-16">
        <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="text-theme mb-4 text-4xl font-bold tracking-tight">
            Powering innovation at <span className="font-extrabold">200,000+</span> companies worldwide
          </h2>
          <p className="mb-4 font-light">
            Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from
            other software development tools, so your IT support and operations teams have richer contextual information to
            rapidly respond to requests, incidents, and changes.
          </p>
          <p className="mb-4 font-medium">
            Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical
            development work, eliminate toil, and deploy changes with ease.
          </p>
        </div>
      </div>

      <div className="mb-20 rounded-xl bg-gray-100 p-4 py-10 dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 lg:p-8">
        <div className="grid grid-cols-3 items-center gap-x-12 gap-y-20 sm:grid-cols-3">
          <div className="relative text-center">
            <svg
              className="mx-auto size-6 shrink-0 text-brand-600 sm:size-8"
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
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-theme text-lg font-semibold sm:text-3xl">2,000+</h3>
              <p className="mt-1 text-sm text-gray-400 sm:text-base">Preline partners</p>
            </div>
          </div>

          <div className="relative text-center">
            <div className="flex items-center justify-center -space-x-5">
              <img
                className="relative z-[2] size-8 shrink-0 rounded-full border-[3px] border-gray-800"
                src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <img
                className="relative z-[1] -mt-7 size-8 shrink-0 rounded-full border-[3px] border-gray-800"
                src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <img
                className="relative size-8 shrink-0 rounded-full border-[3px] border-gray-800"
                src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Avatar"
              />
            </div>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-theme text-lg font-semibold sm:text-3xl">85%</h3>
              <p className="mt-1 text-sm text-gray-400 sm:text-base">Happy customers</p>
            </div>
          </div>

          <div className="relative text-center">
            <svg
              className="mx-auto size-6 shrink-0 text-brand-600 sm:size-8"
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
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 16 6 6" />
              <circle cx="16" cy="9" r="2.9" />
              <circle cx="6" cy="5" r="3" />
            </svg>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-theme text-lg font-semibold sm:text-3xl">$55M+</h3>
              <p className="mt-1 text-sm text-gray-400 sm:text-base">Ads managed yearly</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-6 text-center sm:w-1/2 md:mb-12">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl md:leading-tight">
          Trusted by Open Source, enterprise, and more than 99,000 of you
        </h2>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:gap-6">
        {partners.map((item) => {
          return (
            <div
              key={item.key}
              className="flex h-24 items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-300 md:p-7"
            >
              <img src={item.icon} alt={item.key} className="h-full max-h-8 w-32 object-contain dark:grayscale" />
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <a className="btn-link btn-small mb-12 gap-x-2 px-4 py-2" href="#">
          Become a Partner
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
