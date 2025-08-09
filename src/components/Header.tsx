export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white text-white p-4 flex justify-between border-2 mb-2">
      <h1 className="text-2xl font-bold">
        <a href="#" className="text-blue-500">My Application</a>
      </h1>
      <nav className="pt-1">
        <ul className="flex space-x-2">
            <li><a href="#home" className="text-gray-700 hover:text-cyan-300 hover:cursor-pointer">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-cyan-300 hover:cursor-pointer">Services</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-cyan-300 hover:cursor-pointer">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-cyan-300 hover:cursor-pointer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}