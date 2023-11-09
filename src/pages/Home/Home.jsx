import Banner from "./Banner";
import BlogSec from "./BlogSec/BlogSec";
import Features from "./Features/Features";
import ShuffleHero from "./Hero/SuffleHero";
import NewLetter from "./NewsLetter.jsx/NewLetter";

// import BrowseComp from "./TiltCard/BrowseComp";
import CategoryTab from "./categoryTab/CategoryTab";

const Home = () => {
    return (
        <div>
            <ShuffleHero/>
            <CategoryTab></CategoryTab>
            <Features/>
            
            <NewLetter/>
            <BlogSec/>
            
        </div>
    );
};

export default Home;