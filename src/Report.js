import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { setSelected } from "./features/selectedSlice/selectedSlice";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="border-2 border-black bg-white rounded-md shadow-md py-4 px-6 my-4 absolute"
        layoutId={report._id}
        onClick={() => {
          dispatch(setSelected(null));
        }}
        animate={{
          x: "50vw",
          boxShadow: "20px 20px 0, rgba(255, 255, 255, 0.2)",
        }}
      >
        <motion.h1 className="text-xl">{report.title}</motion.h1>
        <motion.p>{report.report}</motion.p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        layoutId={report._id}
        className="border-2 border-black m-2 rounded-lg text-center"
      >
        <motion.h1>{report.title}</motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default Report;
