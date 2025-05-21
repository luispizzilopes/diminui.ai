import DefaultPage from "../../components/DefaultPage";

export default function Contact() {
    return (
        <DefaultPage>
            <div className="max-w-3xl w-full mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 sm:p-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4">
                    Entre em Contato
                </h2>
                <p className="text-gray-400 text-center mb-8 sm:mb-10 text-base sm:text-lg">
                    Tem alguma dúvida, sugestão ou deseja enviar um feedback? <br className="hidden sm:block" />
                    Entre em contato conosco.
                </p>

                <div className="space-y-6 text-gray-300 text-sm sm:text-base">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <i className="fas fa-envelope text-blue-400 w-5 text-lg"></i>
                        <span className="font-medium text-blue-400">Email:</span>
                        <span className="text-gray-300 break-all">sistema.extendfile@gmail.com</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <i className="fab fa-github text-blue-400 w-5 text-lg"></i>
                        <span className="font-medium text-blue-400">GitHub:</span>
                        <a
                            href="https://github.com/luispizzilopes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline break-all"
                        >
                            github.com/luispizzilopes
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <i className="fab fa-linkedin text-blue-400 w-5 text-lg"></i>
                        <span className="font-medium text-blue-400">LinkedIn:</span>
                        <a
                            href="https://www.linkedin.com/in/luis-felipe-pizzi-lopes-04b531204/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline break-all"
                        >
                            linkedin.com/in/luis-felipe-pizzi-lopes
                        </a>
                    </div>
                </div>
            </div>
        </DefaultPage>
    );
}
