import Logo from "@/assets/metaLogo.svg"; // Asegúrate de tener el logo de Meta en tu carpeta de assets.

const Footer = () => {
    return (
        <>
             <style>
        {`
          .icon-white {
            filter: brightness(0) invert(1);
          }
        `}
      </style>
            <footer className="bg-[#16181d] text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-5 gap-10">
                <div>
                    <img src={Logo} alt="Meta Logo" className="w-full icon-white" />
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3">Learn React</h2>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Quick Start</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Installation</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Describing the UI</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Adding Interactivity</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Managing State</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Escape Hatches</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3">Learn React</h2>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Quick Start</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Installation</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Describing the UI</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Adding Interactivity</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Managing State</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Escape Hatches</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3">Learn React</h2>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Quick Start</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Installation</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Describing the UI</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Adding Interactivity</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Managing State</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Escape Hatches</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3">Learn React</h2>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Quick Start</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Installation</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Describing the UI</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Adding Interactivity</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Managing State</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Escape Hatches</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
