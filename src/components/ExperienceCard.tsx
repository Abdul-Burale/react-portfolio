const ExperienceCard = () => {
return (
    <div className="relative w-full max-w-2xl h-full max-h-[200px]">
        {/* Card-Box */}
        <div className="bg-white shadow-2xl rounded-2xl border border-stone-200 p-6 flex flex-col justify-start h-full overflow-hidden">
            {/* Card-Header */}
            <div className="mb-2">
                <h1 className="text-lg font-semibold"> Project Card</h1>
            </div>

            {/* Card-Body */}
            <div className="flex-1 text-gray-600-">
                <p className="text-gray-600">
                    This card has a max height of 200px. Extra content will be clipped
                    because of the <code>overflow-hidden</code> class. Later you can remove the max-h and overflow to let it expand with content.
                </p>
            </div>
        </div>
    </div>

);
};

export default ExperienceCard;