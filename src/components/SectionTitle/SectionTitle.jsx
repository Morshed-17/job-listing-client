

const SectionTitle = ({children, text}) => {
    return (
        <div className="text-center lg:text-left ">
            <p className="border-b-2 pb-2 text-xl max-w-fit ">{text}</p>
            
            <h3 className="text-4xl font-semibold mt-4">{children}</h3>
        </div>
    );
};

export default SectionTitle;