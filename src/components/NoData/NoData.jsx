import Lottie from "lottie-react";
import noData from '../../assets/lottie/jobseker.json'

const NoData = () => {
    return (
        <div className="text-center">
            <Lottie animationData={noData} className="w-[200px] h-[200px] mx-auto"></Lottie>
            <h2 className="text-xl mt-3">No Job Found. ;(</h2>
        </div>
    );
};

export default NoData;