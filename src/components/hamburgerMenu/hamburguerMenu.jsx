import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48">
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 hover:bg-gray-200">Home</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-200">Sobre</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-200">Contato</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
