import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from  "@/assets/react.svg"
import firstIcon from  "@/assets/firstIconNav.svg"
import secondIcon from  "@/assets/secondIconNav.svg"

type Props = {}

function SearchBar() {
    return (
      <div className="relative w-10/12">
        <input
          type="text"
          className="bg-gray-300 rounded-3xl pl-10 pr-3 py-2 focus:outline-none w-full"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-200" />
        {/* CTRL AND K LABELS */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-200">
            <span className="text-xs bg-black-100 text-white px-1 py-0.5 rounded">Ctrl</span>
            <span className="text-xs bg-black-100 text-white px-1 py-0.5 rounded">K</span>
        </div>
      </div>
    );
  }

function Navbar({}: Props) {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTopOfPage(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBackground = isTopOfPage ? '' : 'bg-gray-300 drop-shadow';

    return <nav className={`fixed top-0 left-0 right-0 z-50 ${navbarBackground}`}>
        <style>
        {`
          .icon-white {
            filter: brightness(0) invert(1);
          }
        `}
      </style>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-11/12`}>
                <div className={`${flexBetween} w-full gap-4`}>
                    {/* LEFT SIDE */}
                    <a href="#" className="cursor-pointer">
                        <img className="w-14" alt="logo" src={Logo} />
                    </a>
                    
                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                        <>
                            <SearchBar />
                            <div className={`${flexBetween} w-1/3`}>
                                <div className={`${flexBetween} gap-2 text-base`}>
                                <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                                    <p>Learn</p>
                                </a>
                                <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                                    <p>Reference</p>
                                </a>
                                <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                                    <p>Community</p>
                                </a>
                                <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                                    <p>Blog</p>
                                </a>
                                <img className="cursor-pointer hover:bg-[#2d323b] px-2 py-1 rounded-3xl icon-white" alt="firstIcon" src={firstIcon} />
                                <img className="cursor-pointer hover:bg-[#2d323b] px-2 py-1 rounded-3xl icon-white" alt="secondIcon" src={secondIcon} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <button
                            className="rounded-full p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                        )}
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-20 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                <p>Learn</p>
            </a>
            <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                <p>Reference</p>
            </a>
            <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                <p>Community</p>
            </a>
            <a href="#" className="cursor-pointer hover:bg-[#2d323b] hover:text-white px-2 py-1 rounded-3xl">
                <p>Blog</p>
            </a>
          </div>
        </div>
      )}
    </nav>
}

export default Navbar