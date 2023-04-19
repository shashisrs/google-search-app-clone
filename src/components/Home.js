import React from "react";
import logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
      <div className="flex h-[100vh]  flex-col">
      <Helmet>
        <title>Google</title>
      </Helmet>
        <HomeHeader />
        <main className="flex justify-center grow">
          <div className="w-full px-5 gap-6 flex flex-col items-center mt-44">
            <img src={logo} alt="" className="w-[172px] md:w-[272px]" />
            <SearchInput/>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
export default Home;
