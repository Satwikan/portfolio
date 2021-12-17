import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const router = useRouter();
  const path = router.asPath;
  const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          {/* Mobile options and whole large screen */}
          <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-20">
            <div className="relative flex items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute top-0 left-0 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <Link href="/">
                    <a>
                      <h1 className="px-10 py-4 font-normal text-2xl dark:text-gray-100">
                        {userData.name}
                      </h1>
                      <p className="px-10 hidden sm:block text-base font-light text-gray-500 dark:text-gray-300">
                        {userData.designation}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block px-8 py-8">
                  {/* large screen options*/}
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 rounded-md text-lg font-medium hover:underline"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                        {item.href === path && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center mr-6 justify-between">
                  <a
                    href={userData.socialLinks.github}
                    className="px-4 text-base font-normal text-gray-600 dark:text-gray-300"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="30px"
                      height="30px"
                      // className="bi bi-github h-5 w-5"
                    >
                      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                    </svg>
                  </a>
                  <a
                    href={userData.socialLinks.twitter}
                    className="text-base font-normal text-gray-600 dark:text-gray-300"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-twitter h-5 w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href={userData.socialLinks.linkedin}
                    className="px-4 text-base font-normal text-gray-600 dark:text-gray-300"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-linkedin h-5 w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 p-3 rounded focus:outline-none"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="yellow"
                    stroke="yellow"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>  
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#34455d"
                    stroke="#34455d"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* small screen */}
            <div className="px-10 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.href === path ? "page" : undefined}
                >
                  {item.name}
                  {item.href === path && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down inline-block h-3 w-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    // <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
    //   <div className="flex  md:flex-row justify-between items-center">
    //     {/* Logo / Home / Text */}

    //     <div className="flex flex-col">
    //       <Link href="/">
    //         <a>
    //           <h1 className="font-semibold text-xl dark:text-gray-100">
    //             {userData.name}
    //           </h1>
    //           <p className="text-base font-light text-gray-500 dark:text-gray-300">
    //             {userData.designation}
    //           </p>
    //         </a>
    //       </Link>
    //     </div>

    //     <div className="space-x-8 hidden md:block">
    //       <Link href="/about">
    //         <a
    //           className={`text-base  ${
    //             router.asPath === "/about"
    //               ? "text-gray-800 font-bold dark:text-gray-400"
    //               : "text-gray-600 dark:text-gray-300 font-normal "
    //           }`}
    //         >
    //           About{" "}
    //           {router.asPath === "/about" && (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-down inline-block h-3 w-3"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    //               />
    //             </svg>
    //           )}
    //         </a>
    //       </Link>
    //       <Link href="/projects">
    //         <a
    //           className={`text-base  ${
    //             router.asPath === "/projects"
    //               ? "text-gray-800 font-bold dark:text-gray-400"
    //               : "text-gray-600 dark:text-gray-300 font-normal "
    //           }`}
    //         >
    //           Projects
    //           {router.asPath === "/projects" && (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-down inline-block h-3 w-3"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    //               />
    //             </svg>
    //           )}
    //         </a>
    //       </Link>
    //       <Link href="/experience">
    //         <a
    //           className={`text-base  ${
    //             router.asPath === "/experience"
    //               ? "text-gray-800 font-bold dark:text-gray-400"
    //               : "text-gray-600 dark:text-gray-300 font-normal "
    //           }`}
    //         >
    //           Experience{" "}
    //           {router.asPath === "/experience" && (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-down inline-block h-3 w-3"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    //               />
    //             </svg>
    //           )}
    //         </a>
    //       </Link>
    //       <Link href="/contact">
    //         <a
    //           className={`text-base  ${
    //             router.asPath === "/contact"
    //               ? "text-gray-800 font-bold dark:text-gray-400"
    //               : "text-gray-600 dark:text-gray-300 font-normal "
    //           }`}
    //         >
    //           Contact
    //           {router.asPath === "/contact" && (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-down inline-block h-3 w-3"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    //               />
    //             </svg>
    //           )}
    //         </a>
    //       </Link>
    //     </div>

    //     <div className="space-x-4 flex flex-row items-center">
    //       <a
    //         href={userData.socialLinks.github}
    //         className="text-base font-normal text-gray-600 dark:text-gray-300"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           width="30px"
    //           height="30px"
    //           // className="bi bi-github h-5 w-5"
    //         >
    //           <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
    //         </svg>
    //       </a>
    //       <a
    //         href={userData.socialLinks.twitter}
    //         className="text-base font-normal text-gray-600 dark:text-gray-300"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           className="bi bi-twitter h-5 w-5"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    //         </svg>
    //       </a>
    //       <a
    //         href={userData.socialLinks.linkedin}
    //         className="text-base font-normal text-gray-600 dark:text-gray-300"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           className="bi bi-linkedin h-5 w-5"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    //         </svg>
    //       </a>
    //       <button
    //         aria-label="Toggle Dark Mode"
    //         type="button"
    //         className="w-10 h-10 p-3 rounded focus:outline-none"
    //         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    //       >
    //         {mounted && (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             stroke="currentColor"
    //             className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
    //           >
    //             {theme === "dark" ? (
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    //               />
    //             ) : (
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    //               />
    //             )}
    //           </svg>
    //         )}
    //       </button>
    //     </div>
    //   </div>
    //   <div className="space-x-8 block md:hidden mt-4">
    //     <Link href="/about">
    //       <a className="text-base font-normal text-gray-600 dark:text-gray-300">
    //         About
    //       </a>
    //     </Link>
    //     <Link href="/projects">
    //       <a className="text-base font-normal text-gray-600 dark:text-gray-300">
    //         Projects
    //       </a>
    //     </Link>
    //     <Link href="/experience">
    //       <a className="text-base font-normal text-gray-600 dark:text-gray-300">
    //         Experience
    //       </a>
    //     </Link>
    //     <Link href="/contact">
    //       <a className="text-base font-normal text-gray-600 dark:text-gray-300">
    //         Contact
    //       </a>
    //     </Link>
    //   </div>
    // </div>
  );
}
