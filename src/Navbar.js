import { useDispatch } from "react-redux";
import { setPage } from "./features/page/pageSlice";

function Navbar() {
  const dispatch = useDispatch();

  const buttonCSS =
    "py-2 px-3 my-3 text-gray-700 hover:text-gray-900 border rounded-xl border-gray-300 bg-gray-200 hover:bg-white hover:border-white";

  return (
    <nav className="bg-purple-500 py-2 rounded-b-xl shadow-purple-300 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between flex-row">
          <div class="flex space-x-8 items-center">
            <h1 className="text-xl text-gray-600 text-center align-middle text-black">
              AI Book Reports
            </h1>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => {
                  console.log("clicked");
                  dispatch(setPage("browse"));
                }}
                className={buttonCSS}
              >
                Browse
              </button>
              <button
                onClick={() => {
                  console.log("clicked");
                  dispatch(setPage("upload"));
                }}
                className={buttonCSS}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
