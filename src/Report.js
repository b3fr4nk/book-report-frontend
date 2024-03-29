import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { setSelected } from "./features/selectedSlice/selectedSlice";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import book_logo from "./images/book.jpg";

function Report(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const [report, setReport] = useState({ title: "loading", report: "loading" });
  const selected = useSelector((state) => state.selected.value);
  const { isLoading, error, data } = useQuery([id], () => {
    return fetch(`/api/reports/${id}`).then((res) => res.json());
  });

  useEffect(() => {
    if (data) {
      setReport(data.report);
    }
  }, [data]);

  if (isLoading) {
    return <div> ...loading </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }

  console.log(selected);
  if (selected === id) {
    return (
      <motion.div
        layout
        className="border-2 border-purple-400 bg-gray-300 rounded-md shadow-xl absolute bg-gray-50 shadow-xl shadow-gray-800"
        layoutId={report._id}
        initial={{
          fontSize: "1em",
          scale: 0.5,
          padding: "16px",
        }}
        animate={{
          width: "50vw",
          height: "60vh",
          top: "7%",
          right: "25vw",
          margin: "0",
          scale: 1,
          padding: "16px",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="flex justify-end align-end mb-0">
          <motion.button
            className="border bg-gray-100 border-gray-200 rounded-xl px-2 hover:bg-white"
            onClick={() => {
              console.log("deselect");
              dispatch(setSelected(null));
            }}
          >
            X
          </motion.button>
        </motion.div>

        <motion.h1 className="text-xl my-4 px-2">{report.title}</motion.h1>
        <motion.p
          className="p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {report.report}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        layoutId={report._id}
        className="border-2 border-gray-300 m-2 rounded-xl text-center flex flex-col justify-center bg-gray-100 shadow-xl shadow-gray-300 p-2"
        transition={{ duration: 0.2 }}
      >
        <motion.img className="items-center" src={book_logo}></motion.img>
        <motion.h1>{report.title}</motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default Report;
