import { useState, useRef } from "react";
import DefaultPage from "../../components/DefaultPage";
import "./style.css";

export default function Home() {
    const [arquivo, setArquivo] = useState(null);
    const [imagemOriginal, setImagemOriginal] = useState(null);
    const [infoOriginal, setInfoOriginal] = useState("");
    const [qualidade, setQualidade] = useState(70);
    const [imagemProcessada, setImagemProcessada] = useState(null);
    const [infoResultado, setInfoResultado] = useState("");

    const fileInputRef = useRef(null);
    const dropAreaRef = useRef(null);

    const handleSelecionarArquivo = () => {
        fileInputRef.current.click();
    };

    const handleArquivoSelecionado = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.match("image.*")) {
            alert("Por favor, selecione um arquivo de imagem válido.");
            return;
        }

        setArquivo(file);

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                setImagemOriginal(e.target.result);
                setInfoOriginal(`Dimensões: ${img.width}×${img.height}px | Tamanho: ${formatarTamanho(file.size)}`);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            handleArquivoSelecionado({ target: { files: [file] } });
        }
    };

    const formatarTamanho = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const tamanhos = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + tamanhos[i];
    };

    const processarImagem = () => {
        if (!arquivo) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);

                const qualidadeFinal = qualidade / 100;
                const dataUrl = canvas.toDataURL("image/jpeg", qualidadeFinal);

                setImagemProcessada(dataUrl);

                const tamanho = Math.round((dataUrl.length * 3) / 4);
                setInfoResultado(`Dimensões: ${img.width}×${img.height}px | Tamanho: ${formatarTamanho(tamanho)}`);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(arquivo);
    };

    const baixarImagem = () => {
        if (!imagemProcessada) return;

        const link = document.createElement("a");
        link.href = imagemProcessada;
        const nome = arquivo.name.replace(/\.[^/.]+$/, "");
        link.download = `${nome}_reduced.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <DefaultPage>
            <div className="max-w-3xl w-full bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-center mb-2">Reduza a qualidade de suas imagens</h2>
                    <p className="text-gray-400 text-center mb-8">Simples, rápido e intuitivo. Escolha a porcentagem e obtenha o resultado.</p>

                    <div className="space-y-8">
                        {
                            arquivo == null && <div
                                ref={dropAreaRef}
                                className="file-upload border-2 border-dashed border-gray-700 rounded-lg p-12 text-center transition cursor-pointer hover:border-blue-500"
                                onClick={handleSelecionarArquivo}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleArquivoSelecionado}
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <i className="fas fa-cloud-upload-alt text-4xl text-blue-500 mb-4"></i>
                                    <p className="text-lg font-medium mb-1">Arraste e solte sua imagem aqui</p>
                                    <p className="text-sm text-gray-400 mb-4">ou clique para selecionar</p>
                                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition">
                                        Selecionar arquivo
                                    </button>
                                </div>
                            </div>
                        }

                        {imagemProcessada == null && arquivo && (
                            <div className="space-y-4">

                                <div className="flex justify-end">
                                    <button
                                        className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition flex items-center"
                                        onClick={() => {
                                            setArquivo(null);
                                            setQualidade(70);
                                        }}
                                    >
                                        <i className="fas fa-arrow-left mr-2"></i> Voltar
                                    </button>
                                </div>


                                <div className="mb-4">
                                    <label htmlFor="qualitySlider" className="block text-sm font-medium text-gray-300 mb-2">
                                        Qualidade: <span className="text-blue-400">{qualidade}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={qualidade}
                                        onChange={(e) => setQualidade(parseInt(e.target.value))}
                                        className="slider w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                        id="qualitySlider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>Baixa</span>
                                        <span className="mr-3">Média</span>
                                        <span>Alta</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-center">
                                    <small className="text-sm text-gray-400">
                                        {arquivo.name} ({formatarTamanho(arquivo.size)})
                                    </small>

                                    <button
                                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition flex items-center mt-2 sm:mt-0"
                                        onClick={processarImagem}
                                    >
                                        <i className="fas fa-magic mr-2"></i> Processar
                                    </button>
                                </div>
                            </div>
                        )}


                        {imagemOriginal && imagemProcessada && (
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <h3 className="text-center font-medium text-gray-300 mb-3">Original</h3>
                                        <div className="flex justify-center">
                                            <img className="max-h-64 rounded" src={imagemOriginal} alt="Original" />
                                        </div>
                                        <div className="mt-3 text-center text-sm text-gray-400">{infoOriginal}</div>
                                    </div>

                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <h3 className="text-center font-medium text-gray-300 mb-3">Resultado</h3>
                                        <div className="flex justify-center">
                                            <img className="max-h-64 rounded" src={imagemProcessada} alt="Resultado" />
                                        </div>
                                        <div className="mt-3 text-center text-sm text-gray-400">{infoResultado}</div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
                                    <button
                                        className="w-full sm:w-auto cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full transition flex items-center justify-center mb-2 sm:mb-0"
                                        onClick={() => {
                                            setImagemProcessada(null);
                                            setInfoResultado(null);
                                        }}
                                    >
                                        <i className="fas fa-trash-alt mr-2"></i> Limpar
                                    </button>
                                    <button
                                        className="w-full sm:w-auto cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition flex items-center justify-center"
                                        onClick={baixarImagem}
                                    >
                                        <i className="fas fa-download mr-2"></i> Baixar imagem
                                    </button>

                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DefaultPage>
    );
}
