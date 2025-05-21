import { useNavigate } from "react-router-dom";
import DefaultPage from "../../components/DefaultPage";
import "./style.css";

export default function Error() {
    const navigate = useNavigate(); 
    
    return (
        <DefaultPage>
            <main class="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div class="relative mb-8 astronaut-container">
                    <div class="floating">
                        <svg class="astronaut-svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">

                            <path d="M104.4,16.2C86.5,1.2,61.8-0.3,42.6,10.5c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c-5.4,3.1-10.4,7.2-14.7,12.3   c-9.5,11.3-13.5,26-12,43.9c1.7,20.9,8,36.5,11.6,43.9c2,4.1,5.8,6.9,10.2,7.7c0,0,0,0,0,0c0.7,0.1,1.5,0.2,2.2,0.2   c2.4,0,4.8-0.6,6.9-1.8L81.1,97c1.2-0.7,2.5-1,3.9-1h14c1.1,0,2.1-0.6,2.6-1.5c0.3-0.4,6.2-10.8,10-21.3   C126.2,33.2,106.4,17.7,104.4,16.2z M24.7,69.1c-0.1,0-0.2,0-0.3,0c-1.5,0-2.9-1.2-3-2.8c-0.2-2.4-0.3-4.7-0.3-7c0-1.6,1.4-3,3-3   c0,0,0,0,0,0c1.7,0,3,1.4,3,3c0,2.1,0.1,4.3,0.3,6.5C27.6,67.5,26.4,68.9,24.7,69.1z M26.1,47.8c-0.3,0-0.5,0-0.8-0.1   c-1.6-0.4-2.5-2.1-2.1-3.7c1.8-6.5,4.8-12.3,8.9-17.2c1.1-1.3,3-1.4,4.2-0.4c1.3,1.1,1.4,3,0.4,4.2c-3.6,4.3-6.2,9.3-7.7,14.9   C28.7,47,27.5,47.8,26.1,47.8z M106,71.1c-2.8,7.7-7,15.6-8.7,18.9H85c-2.4,0-4.8,0.6-6.9,1.8l-34.7,19.8c-1.6,0.9-3.4,1.2-5.2,0.9   c-2.5-0.4-4.7-2-5.8-4.3c-1.2-2.4-2.6-5.7-4.1-9.8l48.4-37.4c3-2.3,4.8-5.8,5-9.6c0.2-3.8-1.3-7.5-4-10.1L49.1,13.9   c16.5-7.6,36.7-5.5,51.5,6.9c0.1,0.1,0.2,0.1,0.2,0.2C101,21.1,119.4,34.2,106,71.1z" fill="#1E40AF" />
                            <path d="M99,108.2c-0.8-1.4-2.7-1.9-4.1-1.1c-1.4,0.8-1.9,2.7-1.1,4.1l8.2,14.3c0.6,1,1.6,1.5,2.6,1.5c0.5,0,1-0.1,1.5-0.4   c1.4-0.8,1.9-2.7,1.1-4.1L99,108.2z" fill="#3B82F6" />

                            <circle cx="60" cy="45" r="20" fill="#3B82F6" fill-opacity="0.2" />
                            <circle cx="60" cy="30" r="5" fill="#3B82F6" fill-opacity="0.5" />
                        </svg>
                    </div>
                    <div class="astronaut-shadow"></div>
                </div>

                <h2 class="text-5xl font-bold mb-4 gradient-text">404</h2>
                <h3 class="text-2xl font-semibold mb-6 text-gray-200">Página não encontrada</h3>
                <p class="text-gray-400 max-w-md mb-8">Parece que você se perdeu no espaço. O conteúdo que você está procurando não existe ou foi movido.</p>
                <a onClick={()=> navigate("/")} class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition">
                    Voltar para a página inicial
                </a>
            </main>

        </DefaultPage>
    );
}