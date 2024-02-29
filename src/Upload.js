import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "./features/page/pageSlice";
import axios from "axios";

function Upload() {
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post("http://localhost:3000/api/books/new", formData);
    },
    onSuccess: (data, variables, context) => {
      dispatch(setPage("browse"));
    },
  });
  const onSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(new FormData(event.target));
  };

  if (page === "upload") {
    return (
      <div className="px-80">
        <form
          className="flex flex-col justify-content-center content-center m-8 px-4 pb-16 border rounded-md shadow-lg shadow-gray"
          onSubmit={onSubmit}
        >
          <input
            className="border mx-8 my-2 rounded-md text-center"
            id="title"
            type="text"
            placeholder="Book Title"
            name="title"
          ></input>
          <input
            className="border mx-8 my-2 rounded-md text-center"
            id="author"
            type="text"
            placeholder="Author"
            name="author"
          ></input>
          <input
            className="mx-8 my-4 self-center"
            type="file"
            name="book"
          ></input>

          <button
            className="mx-30 mt-8 p-4 self-center border border-gray-300 rounded-md bg-gray-100 hover:bg-white"
            type="submit"
            value="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
