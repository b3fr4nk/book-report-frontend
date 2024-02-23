import { useState } from "react";
import { useQuery } from "react-query";

function Upload() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [book, setBook] = useState();

  const uploadRes = useQuery([title, author, book], () => {});

  return (
    <div className="px-80">
      <form className="flex flex-col justify-content-center content-center m-8 px-4 border rounded-md">
        <input
          className="border mx-8 my-2 rounded-md text-center"
          id="title"
          type="text"
          placeholder="Book Title"
        ></input>
        <input
          className="border mx-8 my-2 rounded-md text-center"
          id="author"
          type="text"
          placeholder="Author"
        ></input>
        <input className="mx-8 self-center" id="book" type="file"></input>

        <button
          className="mx-30 self-center border rounded-md bg-slate-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Upload;
