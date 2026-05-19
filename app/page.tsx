// work page
// acts as landing

export default function Work() {
    return (
        <div>
            <div className="h-120 bg-white"></div>

            <div className="flex flex-col p-6 md:p-12">
                <h2>Illustrations</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Grid system for illustrations */}
                    <div className="flex flex-col m-auto gap-4">
                        {/* Grid item for each illustration */}
                        <img className="w-80 h-80 bg-olive-500"></img>
                    </div>

                    <div className="flex flex-col m-auto gap-4">
                        {/* Grid item for each illustration */}
                        <img className="w-80 h-80 bg-olive-500"></img>
                    </div>

                    <div className="flex flex-col m-auto gap-4">
                        {/* Grid item for each illustration */}
                        <img className="w-80 h-80 bg-olive-500"></img>
                    </div>
                </div>
                
                <div className="bg-white text-black"> {/* hidden until image is clicked on */}
                    <h3>Title</h3>
                    <p>Summary</p>
                    <p>Process</p>                            
                </div>
            </div>
        </div>
    );
}