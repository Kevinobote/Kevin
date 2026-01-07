import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
    return (
        <div className={`${className} max-w-3xl mx-auto mb-12 lg:mb-20 md:text-center`}>
            {tag && (
                <TagLine className="mb-4 md:justify-center transition-colors duration-300">
                    {tag}
                </TagLine>
            )}

            {title && (
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                    {title}
                </h2>
            )}

            {text && (
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {text}
                </p>
            )}
        </div>
    );
};

export default Heading;