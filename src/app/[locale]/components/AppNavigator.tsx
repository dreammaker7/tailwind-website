import Link from 'next/link';

import { type DictionarieEntries } from '@/utils/get-dictionary';
import { useCallback } from 'react';

type Menu = {
  key: string;
  icon?: JSX.Element;
  title: string;
  description?: string;
  extra?: string;
  path?: string;
  className?: string;
  children?: Menu[];
  group?: Array<{ key: string; title: string; children?: Menu[] }>;
};

export function AppNavigator(props: { dictionary: DictionarieEntries }) {
  const { dictionary } = props;
  const navigator = dictionary.navigator;

  const menus: Menu[] = [
    {
      key: 'product',
      // icon: (
      //   <svg
      //     className="me-3 size-4 text-gray-800 dark:text-white"
      //     aria-hidden="true"
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="24"
      //     height="24"
      //     fill="none"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       stroke="currentColor"
      //       stroke-linecap="round"
      //       stroke-linejoin="round"
      //       stroke-width="1.8"
      //       d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
      //     />
      //   </svg>
      // ),
      title: navigator['product'],
      children: [
        {
          key: 'platform',
          icon: (
            <div className="mr-4 inline-flex size-[44px] items-center justify-center rounded-lg border-2 border-brand-50 bg-brand-100 dark:border-brand-400 dark:bg-brand-600">
              <svg
                className="size-5 shrink-0 text-brand-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ),
          title: navigator['product.menu1'],
          description: navigator['product.menu1.desc'],
          path: '/platform',
          className: '[--placement:bottom-left]'
        },
        // {
        //   icon: <div />,
        //   title: navigator['product.menu2'],
        //   description: navigator['product.menu2.desc'],
        //   path: '/sdk'
        // },
        // {
        //   icon: <div />,
        //   title: navigator['product.menu3'],
        //   description: navigator['product.menu3.desc'],
        //   path: '/enrich-call'
        // },
        {
          key: 'business-message',
          icon: (
            <div className="mr-4 inline-flex size-[44px] items-center justify-center rounded-lg border-2 border-brand-50 bg-brand-100 dark:border-brand-400 dark:bg-brand-600">
              <svg
                className="size-5 shrink-0 text-brand-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ),
          title: navigator['product.menu4'],
          description: navigator['product.menu4.desc'],
          path: '/business-message'
        }
      ]
    },
    {
      key: 'solution',
      title: navigator['solution'],
      children: [
        {
          key: 'solution-1',
          title: navigator['solution.menu1'],
          path: '/solution'
        }
      ],
      className: '[--placement:bottom-left]'
    },
    {
      key: 'showcase',
      title: navigator['case'],
      path: '/showcase'
    },
    {
      key: 'about',
      title: navigator['aboutUs'],
      group: [
        {
          key: 'about-us',
          title: navigator['aboutUs.sub.about'],
          children: [
            {
              key: 'about',
              icon: (
                <svg
                  className="me-3 size-4 text-gray-800 dark:text-white"
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
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              ),
              title: navigator['aboutUs.menu1'],
              path: '/about'
            },
            {
              key: 'events',
              icon: (
                <svg
                  className="me-3 size-4 text-gray-800 dark:text-white"
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
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              ),
              title: navigator['aboutUs.menu2'],
              path: '/events'
            },
            {
              key: 'partners',
              icon: (
                <svg
                  className="me-3 size-4 text-gray-800 dark:text-white"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              title: navigator['aboutUs.menu3'],
              path: '/partners'
            }
          ]
        },
        {
          key: 'support',
          title: navigator['aboutUs.sub.support'],
          children: [
            {
              key: 'contactus',
              icon: (
                <svg
                  className="me-3 size-4 text-gray-800 dark:text-white"
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
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                  <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                </svg>
              ),
              title: navigator['aboutUs.menu4'],
              path: '/contactus'
            },
            {
              key: 'hiring',
              icon: (
                <svg
                  className="me-3 size-4 text-gray-800 dark:text-white"
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
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </svg>
              ),
              title: navigator['aboutUs.menu5'],
              path: '/hiring'
            }
          ]
        }
      ],
      className: '[--placement:bottom]'
    }
  ];

  const renderDropdown = useCallback((children: Menu[]) => {
    return children.map((item) => {
      return (
        item.path && (
          <Link
            key={item.key}
            className="ring-default flex items-center rounded-lg p-3 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            href={item.path}
          >
            {item?.icon}
            <div className="flex grow flex-col gap-1">
              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
              {item?.description && <p className="text-sm text-gray-500 dark:text-gray-500">{item?.description}</p>}
            </div>
          </Link>
        )
      );
    });
  }, []);

  const renderMegaDropdown = useCallback((children: Menu[]) => {
    return children.map((item) => {
      return (
        item.path && (
          <Link
            key={item.key}
            className="ring-default flex items-center rounded-lg px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            href={item.path}
          >
            {item?.icon}
            <div className="flex grow flex-col gap-1">
              <span className="block text-sm text-gray-800 dark:text-gray-200">
                {item.title}
                {item.extra && (
                  <span className="ms-1 inline rounded-full bg-brand-600 px-2 py-1 text-xs font-medium text-white">
                    We're hiring
                  </span>
                )}
              </span>
              {item?.description && <p className="text-sm text-gray-500 dark:text-gray-500">{item?.description}</p>}
            </div>
          </Link>
        )
      );
    });
  }, []);

  return (
    <header className="z-50 flex w-full flex-wrap overflow-hidden border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 md:flex-nowrap md:justify-start">
      <nav className="relative mx-auto w-full px-4 py-2 sm:px-6 md:flex md:max-w-4xl md:items-center md:justify-between md:gap-3 lg:max-w-screen-xl lg:px-8">
        <div className="flex items-center justify-between gap-x-1">
          <Link href="/" className="text-theme flex items-center space-x-2 rtl:space-x-reverse">
            {/* <img src="/assets/logo/android-192x192.webp" className="h-8" alt="Flowbite Logo" /> */}
            <svg
              className="size-7"
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
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>
            <span className="self-center whitespace-nowrap text-xl font-semibold">{dictionary.common.name}</span>
          </Link>

          {/* Collapse Button */}
          <button
            type="button"
            className="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg border border-gray-200 text-[12px] font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 md:hidden"
            id="hs-header-base-collapse"
            aria-expanded="false"
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-header-base"
          >
            <svg
              className="size-4 hs-collapse-open:hidden"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hidden size-4 shrink-0 hs-collapse-open:block"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          {/* End Collapse Button */}
        </div>

        {/* Collapse */}
        <div
          id="hs-header-base"
          className="hs-collapse hidden grow basis-full transition-all duration-300 md:block"
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="max-h-[75vh] py-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
              <div className="grow">
                <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:justify-end md:gap-2">
                  {menus.map((menu) => {
                    if (!menu?.children && !menu?.group) {
                      return (
                        menu.path && (
                          <Link key={menu.key} className="btn-small btn-text" href={menu.path}>
                            <div className="flex w-full px-2.5 py-2 text-left">
                              {menu?.icon}
                              {menu.title}
                            </div>
                          </Link>
                        )
                      );
                    } else {
                      return (
                        <div
                          key={menu.key}
                          className={`${menu.className} hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] [--trigger:hover] md:[--is-collapse:false] md:[--strategy:fixed]`}
                        >
                          <button
                            id={'hs-header-base-mega-menu-small'}
                            type="button"
                            className="hs-dropdown-toggle btn-text btn-small w-full px-2.5 py-2"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Mega Menu"
                          >
                            {menu?.icon}
                            {menu.title}
                            <svg
                              className="ms-auto size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 md:ms-1 md:hs-dropdown-open:rotate-0"
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
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu relative top-full z-10 mt-2 hidden opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-4 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 md:w-max md:min-w-48 md:rounded-lg md:bg-white md:shadow-md md:duration-[150ms] dark:md:bg-gray-800"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={'hs-header-base-mega-menu-small'}
                          >
                            {menu?.children && <div className="space-y-0.5 py-2 md:px-2">{renderDropdown(menu.children)}</div>}
                            {menu.group && (
                              <div className="grid grid-cols-1 gap-3 pt-2 md:w-[500px] md:grid-cols-12 md:gap-0 md:divide-x md:divide-gray-200 md:pt-0 dark:md:divide-gray-700 lg:w-[500px]">
                                <div className="col-span-5 md:p-3">
                                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 sm:gap-1">
                                    {menu.group?.map((groupItem) => {
                                      return (
                                        <div className="flex flex-col" key={groupItem.key}>
                                          <div className="space-y-0.5">
                                            <div className="my-2 ms-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-500">
                                              {groupItem.title}
                                            </div>
                                            {groupItem?.children && renderMegaDropdown(groupItem.children)}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className="md:col-span-7">
                                  <div className="flex flex-col p-2 md:h-full md:flex-1 md:rounded-br-lg md:bg-gray-50 md:p-4 dark:md:bg-gray-800">
                                    <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                                      Customer stories
                                    </span>

                                    <a
                                      className="group flex flex-row items-center gap-4 focus:outline-none md:flex-col md:items-start md:gap-2"
                                      href="#"
                                    >
                                      <img
                                        className="size-28 shrink-0 rounded-lg object-cover md:w-full"
                                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                        alt="Customer Story Image"
                                      />
                                      <div className="grow">
                                        <p className="text-sm text-gray-800 dark:text-gray-200">
                                          Preline Projects has proved to be most efficient cloud based project tracking and bug
                                          tracking tool.
                                        </p>
                                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-400 dark:hover:text-blue-500">
                                          Learn more
                                          <svg
                                            className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="my-2 md:mx-2 md:my-0">
                <div className="h-px w-full bg-gray-100 dark:bg-gray-700 md:h-4 md:w-px md:bg-gray-300"></div>
              </div>

              {/* Button Group */}
              <div className="flex flex-wrap items-center justify-end gap-x-2 md:ml-2">
                <Link className="btn-secondary btn-small px-2.5 py-[7px]" href="#">
                  Sign in
                </Link>
                <Link className="btn-primary btn-small px-2.5 py-2" href="#">
                  Get started
                </Link>
              </div>
              {/* End Button Group */}
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
}
