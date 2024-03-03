import React from "react";
import logo from "../pageimg/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-700 md:w-full w-[500px] ml-[-40px]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 mx-auto max-w-7xl sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-5">
            <img className="h-24 w-fit " src={logo} alt="Company name"/>
            <p className="font-semibold leading-6 text-gray-400 font-Inter">
              Making football look better to the world and a more respecful
              game.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="url(#paint0_linear_87_7208)"
                  />
                  <path
                    d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_87_7208"
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="29.917"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18ACFE" />
                      <stop offset="1" stop-color="#0163E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-yellow-500 hover:text-gray-500"
              >
                <span className="sr-only">instagram</span>
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  />
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      <stop stop-color="#B13589" />
                      <stop offset="0.79309" stop-color="#C62F94" />
                      <stop offset="1" stop-color="#8A3AC8" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      <stop stop-color="#E0E8B7" />
                      <stop offset="0.444662" stop-color="#FB8A2E" />
                      <stop offset="0.71474" stop-color="#E2425C" />
                      <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      <stop offset="0.156701" stop-color="#406ADC" />
                      <stop offset="0.467799" stop-color="#6A45BE" />
                      <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-yellow-500 hover:text-gray-500"
              >
                <span className="sr-only">Linked in</span>
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#0077B5"
                    fill-rule="evenodd"
                    d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-yellow-500 hover:text-gray-500"
              >
                <span className="sr-only">You tube</span>
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="red"
                    d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"
                  />
                  <path
                    fill="#ffffff"
                    d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"
                  />
                </svg>
              </a>
              {/* Add other social media links similarly */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-7 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-gray-400 font-Poppins">
                  Solutions
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-7 tracking-wide text-white font-Inter hover:text-gray-400"
                    >
                      Startup management
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-7 tracking-wide text-white font-Inter hover:text-gray-400"
                    >
                      Idea pitching
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-7 tracking-wide text-white font-Inter hover:text-gray-400"
                    >
                      Booster programs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-400 font-Poppins">
                  Features
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-6 text-white font-Inter hover:text-gray-400"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-7 tracking-wide text-white font-Inter hover:text-gray-400"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      className="text-sm font-semibold leading-7 tracking-wide text-white font-Inter hover:text-gray-400"
                    >
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Add other sections similarly */}
          </div>
        </div>
        <div className="flex justify-center border-t py-7 border-gray-900/10 ">
          <p className="text-sm font-semibold leading-5 text-gray-400 font-Inter">
            &copy; 2024 Altruisty, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
