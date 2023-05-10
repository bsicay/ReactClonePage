import NewsIcon from "@/assets/newsIcon.svg";
import ArrowIcon from "@/assets/arrowIcon.svg";
import DownArrowIcon from "@/assets/downArrowIcon.svg";

const Upgrade = () => {
    return (
        <div className="bg-gradient-to-br from-[#2a2f39] via-[#282d37] to-[#1a1d23] p-10 grid grid-cols-2 gap-10">
             <style>
                {`
                .icon-white {
                    filter: brightness(0) invert(1);
                }
                `}
            </style>
            {/* Columna izquierda */}
            <div>
            <h1 className="text-5xl font-bold mb-2 text-left w-3/4 md:w-1/2 mx-auto ml-20 py-6">Upgrade when the future is ready</h1>
                <p className="text-xl mb-2 text-left w-3/4 md:w-3/4 mx-auto ml-20 py-6">
                    React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
                    <br/><br/>
                    The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
                </p>
                <button className="flex items-center px-3 py-2 ml-20 border border-gray-300 rounded-3xl hover:translate-x-1 transition-all duration-200">
                    <img className="mr-2 w-5 icon-white" src={NewsIcon} alt="News Icon" />
                    Read more React news
                    <img className="ml-2 w-4 icon-white" src={ArrowIcon} alt="Arrow Icon" />
                </button>
            </div>

            {/* Columna derecha */}
            <div className="pt-10   ">
                <div className="flex items-center mb-5">
                    <img className="mr-2 w-10 icon-white" src={DownArrowIcon} alt="Down Arrow Icon" />
                    <h3 className="font-bold text-base text-[#99a1b3]">LATEST REACT NEWS</h3>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {/* Puedes iterar sobre estos cuadros si tienes múltiples noticias */}
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border-2 border-gray-300 p-3 rounded-2xl">
                            <h4 className="font-bold mb-2 text-2xl cursor-pointer no-underline hover:underline ">
                            <a href="#">React Canaries: Incremental Feature Rollout
                            </a></h4>
                            <div className="flex items-center">
                                <img className="mr-2 w-5 icon-white" src={NewsIcon} alt="News Icon" />
                                <span>May 3, 2023</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Upgrade;
