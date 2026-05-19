// work page
// acts as landing

export default function Work() {
    return (
        <div>
            <h1>Work</h1>

            <div>
                <h2>Illustrations</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Grid system for illustrations */}
                    <div className="flex flex-row gap-4">
                        {/* Grid item for each illustration */}
                        <img className="w-40 h-40 bg-olive-500"></img>
                        <div> {/* hidden until image is clicked on */}
                            <h3>Title</h3>
                            <p>Summary</p>
                            <p>Process</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}