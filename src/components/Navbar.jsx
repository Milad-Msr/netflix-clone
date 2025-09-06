import logo from '../assets/logo.png'
import searchIcon from '../assets/search_icon.svg'
import bellIcon from '../assets/bell_icon.svg'
import profileIcon from '../assets/profile_img.png'
import dropDownIcon from '../assets/caret_icon.svg'

function Navbar() {
  return (
    <div className='navbar flex justify-between fixed w-full py-5 px-[6%] text-[14px] text-[#E5E5E5] z-1'>

      <div className="nav-left flex items-center gap-12">
        <img src={logo} alt="Netflix Logo" className='w-[90px]'/>

        <ul className='flex gap-5'>
          <li><a href="">Home</a></li>
          <li><a href="">TV Shows</a></li>
          <li><a href="">Movies</a></li>
          <li><a href="">New & Popular</a></li>
          <li><a href="">My List</a></li>
          <li><a href="">Browse by Languages</a></li>
        </ul>
      </div>

      <div className="nav-right flex items-center gap-5">
        <img src={searchIcon} alt="Search Icon" className='icons' />
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" className='icons' />

        <div className="nav-profile flex items-center gap-2.5 cursor-pointer relative">
          <img src={profileIcon} alt="Profile Icon" className='w-9 rounded-[4px]' />
          <img src={dropDownIcon} alt="DropDown Icon"/>
        
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Navbar