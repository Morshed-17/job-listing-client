

const SectionTitle = ({children, text}) => {
    return (
        <div className="text-center lg:text-left ">
            <p className="border-b-2 pb-2  max-w-fit mx-auto lg:mx-0 ">{text}</p>
            <h3 className="text-4xl font-semibold mt-4 border-b pb-5 border-gray-600 max-w-fit mx-auto lg:mx-0">{children}</h3>
        </div>
    );
};

export default SectionTitle;