
const Loading = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-white">
            <span className="w-12 h-12 rounded-full inline-block relative border-2 border-green-0x animate-spin after:absolute after:left-1 after:top-1 after:border-2 after:border-gray-500 after:w-4 after:h-4 after:rounded-full"></span>
        </div>
    );
};

export default Loading;
