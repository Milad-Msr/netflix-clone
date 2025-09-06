import Navbar from "../components/Navbar"
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from "../components/TitleCards"

function Home() {
  
  return (
    <div>
      <Navbar />
      <div className="hero relative">

        <img src={hero_banner} alt="" className="w-full banner-img" />

        <div className="hero-caption absolute w-[100%] pl-[6%] bottom-0">

          <img src={hero_title} alt="" className="w-[90%] max-w-[600px] mb-7"  />

          <p className="max-w-[700px] text-[20px] mb-5">
            Discovering his ties to a sectet ancient order, 
            a youn man living in modern Istanbul embarks on a 
            quest to save the city from an immortal enemy
          </p>

          <div className="hero-btns flex gap-2.5 mb-12">
            
            <button className="btn"><img src={play_icon} alt="" className="w-[25px]" />Play</button>

            <button className="btn text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]">
              <img src={info_icon} alt="" className="w-[25px]" />More Info
            </button>

          </div>

          <TitleCards />
        </div>

      </div>
    </div>
  ) 
}

export default Home