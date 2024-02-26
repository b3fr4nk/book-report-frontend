import { useDispatch } from "react-redux";
import { setPage } from "./features/page/pageSlice";

function Navbar() {
  const dispatch = useDispatch();

  const buttonCSS =
    "py-2 px-3 my-3 text-gray-700 hover:text-gray-900 border-2 rounded-xl border-black bg-gray-200 hover:bg-white";

  return (
    <nav className="bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between flex-row">
          <div class="flex space-x-8 items-center">
            <h1 className="text-lg text-gray-600 text-center align-middle">
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
