import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div
            className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
        bg-no-repeat bg-contain"
        >
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className=" fill-red-400"/>
                    </button>
                </div>

                <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex items-center gap-4 mt-8">
                    <span className=" rounded-full inline-block h-5 w-5 border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className=" container mx-auto px-4 mt-8">
                <div className=" bg-white rounded-md">
                    <article className=" flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className=" rounded-full inline-block h-5 w-5 border-2 flex-none"></button>
                        <p className=" text-gray-600 grow ">
                            Complete online js curse in bluuweb
                        </p>
                        <button className=" flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className=" flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className=" rounded-full inline-block h-5 w-5 border-2 flex-none"></button>
                        <p className=" text-gray-600 grow ">
                            Complete online js curse in bluuweb
                        </p>
                        <button className=" flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className=" flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className=" rounded-full inline-block h-5 w-5 border-2 flex-none"></button>
                        <p className=" text-gray-600 grow ">
                            Complete online js curse in bluuweb
                        </p>
                        <button className=" flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className=" py-4 px-4 flex justify-between">
                        <span className=" text-gray-400">5 items left</span>
                        <button className=" text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>

            <section className=" container mx-auto px-4 mt-8">
                <div className=" flex justify-center gap-4 rounded-md bg-white p-4">
                    <button className=" text-blue-600 ">All</button>
                    <button className=" hover:text-blue-600">Active</button>
                    <button className=" hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center">Drag and drop to reorder list</p>
        </div>
    );
};

export default App;
