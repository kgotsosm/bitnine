import logo from "../assets/b_logo.png";

export default function Navbar({ session }) {

    return (
        <div className="flex flex-cols justify-center w-screen shadow-md mt-0 z-99999 bg-blue-gray-200">
            <div className="flex-1 m-2 p-1">
                <img src={logo} className="h-10"/>
            </div>
            <div className="m-4 mx-10 bg-white rounded-lg">
                <p className="p-1 w-24"></p>
            </div>
        </div>
    );
  }
  