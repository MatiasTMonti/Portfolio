import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:ptt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1">
              Hello i'm <br/> <span className="text-accent">Matias Monti</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/CV.pdf" download="Monti_Matias_CV.pdf" className="uppercase flex items-center gap-2 bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary px-8 h-[56px] text-sm tracking-[2px] rounded-full">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;