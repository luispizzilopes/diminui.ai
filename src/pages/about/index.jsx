import DefaultPage from "../../components/DefaultPage";

export default function About() {
    return (
        <DefaultPage>
            <div className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-10 mx-auto mt-10">
                <h2 className="text-4xl font-extrabold text-center text-white mb-6">
                    Sobre o Projeto
                </h2>

                <p className="text-gray-300 text-center text-lg mb-10 leading-relaxed">
                    Este projeto foi desenvolvido com o objetivo de permitir que usuários possam reduzir a qualidade de suas imagens de forma simples, rápida e eficaz, diretamente do navegador.
                </p>

                <div className="bg-gray-950 p-6 rounded-xl shadow-inner border border-gray-800">
                    <ul className="space-y-6 text-gray-400 text-sm list-disc list-inside">
                        <li>
                            A ferramenta utiliza o poder do <strong>HTML5 Canvas</strong> para processar imagens no lado do cliente, garantindo rapidez e privacidade, já que nenhum dado é enviado para servidores.
                        </li>
                        <li>
                            Ao ajustar a qualidade da imagem, você pode diminuir significativamente o tamanho do arquivo — ideal para <strong>uploads mais rápidos</strong>, <strong>economia de espaço</strong> e <strong>compartilhamento em redes sociais</strong>.
                        </li>
                        <li>
                            Nenhuma instalação é necessária: você pode usar diretamente pelo navegador, seja no computador ou no celular, sem baixar nada.
                        </li>
                    </ul>
                </div>
            </div>
        </DefaultPage>
    );
}
