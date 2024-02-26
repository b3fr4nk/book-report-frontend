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
        className="border-2 border-black bg-white rounded-md shadow-md my-4 absolute"
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
        <motion.h1 className="text-xl">{report.title}</motion.h1>
        <motion.p
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
        className="border-2 border-black m-2 rounded-lg text-center flex flex-col justify-center"
        transition={{ duration: 0.00001 }}
      >
        <motion.img className="items-center" src={book_logo}></motion.img>
        <motion.h1>{report.title}</motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default Report;
