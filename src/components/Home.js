import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Home = () => {

    return (
        <div id="container-home" className="flex flex-col justify-between">
            <NavHeader/>
            <div className="flex items-center pb-60 lg:pb-80 pl-32 lg:pl-80 text-red-600 font-bold text-3xl lg:text-4xl">
                <h1 className="font-bold">WELCOME TO GET HOOKED</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;