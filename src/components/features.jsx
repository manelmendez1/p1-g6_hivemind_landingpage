import { FaGamepad, FaUsers, FaRocket, FaClipboardList } from 'react-icons/fa';

export default function FeaturesSection() {
    return (
        <section id="features" className="bg-green-600 p-4 rounded-3xl mt-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-4xl font-bold text-white font-bold leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                            Desbloqueja el teu potencial amb HiveMind Nexus
                        </h2>
                    </div>
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <p className="text-lg font-normal text-gray-50 mb-5">
                            Connecta, col·labora i juga amb una comunitat de jugadors dins d'un ecosistema digital pensat per a tu.
                        </p>
                        <a href="/products"
                           className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-700 lg:justify-start hover:text-indigo-700">
                            Descobreix més <FaRocket size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-stretch gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {/* Targeta 1 */}
                    <div className="group relative w-full bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:w-1/4 hover:bg-[#a91079] flex flex-col justify-between flex-1 min-h-[20rem]">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                            <FaGamepad size={30} color="#4F46E5" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize group-hover:text-white">Comunicació en temps real</h4>
                        <p className="text-sm font-normal text-gray-900 leading-5 group-hover:text-white mb-5">
                            Mantingues la connexió amb els teus amics i altres jugadors mitjançant missatges i trucades de vídeo dins de la plataforma.
                        </p>
                    </div>

                    {/* Targeta 2 */}
                    <div className="group relative w-full bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:w-1/4 hover:bg-[#4F46E5] flex flex-col justify-between flex-1 min-h-[20rem]">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                            <FaUsers size={30} color="#4F46E5" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize group-hover:text-white">Perfils personalitzables</h4>
                        <p className="text-sm font-normal text-gray-900 leading-5 group-hover:text-white mb-5">
                            Guanya crèdits jugant i interactuant per desbloquejar recompenses exclusives i personalitzar el teu perfil amb contingut únic.
                        </p>
                    </div>

                    {/* Targeta 3 */}
                    <div className="group relative w-full bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:w-1/4 hover:bg-[#34D399] flex flex-col justify-between flex-1 min-h-[20rem]">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                            <FaRocket size={30} color="#4F46E5" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize group-hover:text-white">Esdeveniments en temps real</h4>
                        <p className="text-sm font-normal text-gray-900 leading-5 group-hover:text-white mb-5">
                            Uneix-te a esdeveniments en directe, transmissions i events interactius amb altres usuaris i guanya recompenses per participar.
                        </p>
                    </div>

                    {/* Targeta 4 */}
                    <div className="group relative w-full bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:w-1/4 hover:bg-[#F59E0B] flex flex-col justify-between flex-1 min-h-[20rem]">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                            <FaClipboardList size={30} color="#4F46E5" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize group-hover:text-white">Comunitats de joc</h4>
                        <p className="text-sm font-normal text-gray-900 leading-5 group-hover:text-white mb-5">
                            Connecta amb altres jugadors amb els mateixos interessos, uneix-te a grups i comparteix experiències dins d'un entorn comunitari ric.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
