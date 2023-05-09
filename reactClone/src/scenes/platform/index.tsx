import React from 'react';
import ChromeIcon from '@/assets/ChromeIcon.svg';
import FirefoxIcon from '@/assets/FirefoxIcon.svg';
import SafariIcon from '@/assets/SafariIcon.svg';
import AppleIcon from '@/assets/AppleIcon.svg';
import AndroidIcon from '@/assets/AndroidIcon.svg';
import { ComputerDesktopIcon, ArrowRightIcon } from "@heroicons/react/24/solid";


const Platform = () => {
  return (
    <div className="bg-[#23272f] min-h-screen flex flex-col items-center justify-center text-white py-16">
      <h1 className="text-5xl font-bold mb-2 text-center w-3/4 md:w-1/2 mx-auto py-6">
        Use the best from every platform
      </h1>
      <h2 className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto mb-14">
        People love web and native apps for different reasons. React lets you
        build both web apps and native apps using the same skills. It leans upon
        each platform’s unique strengths to let your interfaces feel just right
        on every platform.
      </h2>
      <div className="w-4/5 h-3/5 flex gap-4">
        {/* Cuadro izquierdo */}
        <div className="bg-white w-1/2 h-full relative p-6 rounded-3xl">
        <div className="bg-[#ebecf0] rounded-3xl px-3 py-2 text-black text-center mb-4 w-full">
              example.com
        </div>
          <div className="bg-[#f6f7f8] p-4 rounded w-full border-t-[3px]">
            <h1 className="text-black mb-2 font-bold text-4xl">Stay true to the web</h1>
            <p className="text-black mb-4 text-xl">
              People expect web app pages to load fast. On the server, React
              lets you start streaming HTML while you’re still fetching data,
              progressively filling in the remaining content before any
              JavaScript code loads. On the client, React can use standard web
              APIs to keep your UI responsive even in the middle of rendering.
            </p>
                 <div className="absolute bottom-[-6.25%] left-1/4 w-1/2 flex gap-4 justify-center">
                 <div className="bg-white rounded-2xl p-2">
                    <img src={ChromeIcon} alt="Chrome Icon" className="w-10 h-10" />
                 </div>
                 <div className="bg-white rounded-2xl p-2">
                    <img src={FirefoxIcon} alt="Firefox Icon" className="w-10 h-10" />
                 </div>
                 <div className="bg-white rounded-2xl p-2">
                    <img src={SafariIcon} alt="Safari Icon" className="w-10 h-10" />
                 </div>
                </div>
          </div>
        </div>
        {/* Cuadro derecho */}
        <div className="bg-gradient-to-br from-[#2a2f3a] via-[#252932] to-[#1b1d23] w-1/2 h-full relative p-6 rounded-3xl border-8 border-black">
        <div className="bg-[#ebecf0] rounded-3xl px-3 py-2 text-black text-center mb-4 w-full">
              example.com
        </div>
          <div className="bg-gradient-to-br from-[#2a2f3a] via-[#252932] to-[#1b1d23] p-4 rounded-3xl w-full">
            <h3 className="text-white mb-2 text-4xl font-bold">Go truly native</h3>
            <p className="text-white mb-4 text-xl">
              People expect native apps to look and feel like their platform.
              React Native and Expo let you build apps in React for Android,
              iOS, and more. They look and feel native because their UIs are
              truly native. It’s not a web view—your React components render
              real Android and iOS views provided by the platform.
            </p>
            <div className="absolute bottom-[-6.25%] left-1/4 w-1/2 flex gap-4 justify-center">
                <div className="bg-white rounded-2xl p-2">
                    <img src={AppleIcon} alt="Apple Icon" className="w-10 h-10" />
                 </div>
                 <div className="bg-white rounded-2xl p-2">
                    <img src={AndroidIcon} alt="Android Icon" className="w-10 h-10" />
                 </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto py-16">
      With React, you can be a web and a native developer. Your team can ship to many 
      platforms without sacrificing the user experience. Your organization can bridge
      the platform silos, and form teams that own entire features end-to-end.
      </h2>

      <button className="flex items-center gap-2 p-3 hover:gap-4 transition-all duration-200 ease-in-out rounded-3xl border border-[#FFFF]">
        <ComputerDesktopIcon className="w-6 h-6" />
        <span>Build for native platforms</span>
        <ArrowRightIcon className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:translate-x-2 " />
      </button>
    </div>
  );
};

export default Platform;
