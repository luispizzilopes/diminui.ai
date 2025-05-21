import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefaultPage({ children }) {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div onClick={() => navigate("/")} className="cursor-pointer flex items-center space-x-2">
                        <i className="fas fa-image text-blue-500 text-2xl"></i>
                        <h1 className="text-2xl font-bold gradient-text">diminui.ai</h1>
                    </div>

                    {/* Ícone de menu para mobile */}
                    <div className="lg:hidden">
                        <button onClick={() => setMenuAberto(!menuAberto)} className="text-gray-400 hover:text-blue-400 focus:outline-none">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>

                    {/* Menu em telas grandes */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-6">
                            <li><a onClick={() => navigate("/")} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Início</a></li>
                            <li><a onClick={() => navigate("/about")} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Sobre</a></li>
                            <li><a onClick={() => navigate("/contact")} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Contato</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Menu mobile */}
                {menuAberto && (
                    <nav className="lg:hidden mt-4">
                        <ul className="flex flex-col space-y-2 text-center">
                            <li><a onClick={() => { navigate("/"); setMenuAberto(false); }} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Início</a></li>
                            <li><a onClick={() => { navigate("/about"); setMenuAberto(false); }} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Sobre</a></li>
                            <li><a onClick={() => { navigate("/contact"); setMenuAberto(false); }} className="cursor-pointer text-gray-400 hover:text-blue-400 transition">Contato</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {children}
            </main>

            <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} eXtend File - Todos os direitos reservados</p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/luispizzilopes" className="text-gray-400 hover:text-blue-400 transition"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/luis-felipe-pizzi-lopes-04b531204/" className="text-gray-400 hover:text-blue-400 transition"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
