import Logo from '@/assets/react.svg';

function Main() {
  return (
    <main className="bg-[#23272f] min-h-[90%] flex flex-col items-center justify-center text-white">
      <img src={Logo} alt="React Logo" className="w-32 mb-4" />
      <h1 className="text-6xl font-bold mb-2">React</h1>
      <h2 className="text-3xl mb-6 text-center">The library for web and native user interfaces</h2>
      <div className="flex gap-4">
        <button className="bg-[#087EA4] hover:bg-[#0d6d8c] px-6 py-2 text-lg rounded-3xl font-bold">Learn React</button>
        <button className="bg-[#252932] px-6 py-2 rounded-3xl font-bold text-lg border border-[#0d6d8c]">API Reference</button>
      </div>
    </main>
  );
}

export default Main;
