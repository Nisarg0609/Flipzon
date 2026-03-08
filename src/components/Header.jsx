import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-[#2d3a4a] sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center gap-4">
        <button className="text-white p-1.5 hover:bg-white/10 rounded transition-colors">
          <RxHamburgerMenu className="text-xl" />
        </button>

        <span className="text-white font-bold text-lg hidden sm:block">Flipzon</span>

        <form className="flex-1 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center bg-white rounded-lg px-3 py-1.5 gap-2">
            <CiSearch className="text-gray-400 text-lg shrink-0" />
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
        </form>

        <div className="flex items-center gap-2 text-white">
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <IoCartOutline className="text-xl" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <FaUser className="text-lg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
