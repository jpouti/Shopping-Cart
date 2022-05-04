import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Home = () => {

    return (
        <div id="container-home" className="flex flex-col justify-between">
            <NavHeader/>
            <div className="flex flex-col justify-center gap-4 pb-60 lg:pb-80 pl-32 lg:pl-60 text-rose-800 font-bold ">
                <h1 className="font-bold text-3xl lg:text-4xl">WELCOME TO GET HOOKED</h1>
                <h3 className="font-bold text-xl lg:text-2xl">Catch the most recent deals from our shop page</h3>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;