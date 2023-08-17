import logo from "../assets/b_logo.png";
import { supabase } from "../supabaseClient";
export default function TopNav({ session }) {
  return (
    <div className="flex flex-cols justify-center w-screen shadow-md mt-0 z-99999 bg-blue-gray-200">
      <div className="flex-1 m-2 p-1">
        <img src={logo} className="h-10" />
      </div>

      <button
        className="m-4 mx-10 bg-white rounded-lg"
        onClick={() => supabase.auth.signOut()}
      >
        Logout
      </button>
    </div>
  );
}
