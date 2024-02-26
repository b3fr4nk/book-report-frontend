import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateReports } from "./features/reports/reportsSlice";
import { setSelected } from "./features/selectedSlice/selectedSlice";
import Report from "./Report";
import { setPage } from "./features/page/pageSlice";

function range(start, stop, step) {
  if (typeof stop == "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
}

function ReportsList() {
  const dispatch = useDispatch();
  const [reports, setReports] = useState([]);
  const [contentPage, setContentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const page = useSelector((state) => state.page.value);
  const selected = useSelector((state) => state.selected.value);

  const { isLoading, error, data } = useQuery([contentPage], () => {
    return fetch(`/api/reports?page=${contentPage}`).then((res) => res.json());
  });

  useEffect(() => {
    if (data) {
      setReports(data.items);
      setTotalPages(data.totalPages);
      dispatch(updateReports(data.items));
    }
  }, [data]);

  if (isLoading) {
    return <div> ...loading </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }
  console.log(page);
  if (page === "browse") {
    return (
      <AnimatePresence>
        <motion.ul
          key={contentPage}
          className="grid-cols-4 grid-rows-2 px-32"
          style={{ display: "grid" }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.2 }}
        >
          {reports.map((report) => {
            return (
              <motion.li
                key={report._id}
                onClick={() => {
                  if (selected !== report._id) {
                    dispatch(setSelected(report._id));
                  }
                }}
              >
                <Report id={report._id} />
              </motion.li>
            );
          })}
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.ul>
        <div className="flex flex-row justify-center align-center">
          {range(totalPages).map((pageNum) => {
            if (contentPage !== pageNum + 1) {
              return (
                <span
                  className="mx-4"
                  onClick={() => {
                    setContentPage(pageNum + 1);
                    console.log(contentPage);
                  }}
                >
                  <button>{pageNum + 1} </button>
                </span>
              );
            }
            return (
              <span
                className="mx-4"
                onClick={() => {
                  setContentPage(pageNum + 1);
                  console.log(contentPage);
                }}
              >
                <button className="text-blue-500 underline">
                  {pageNum + 1}{" "}
                </button>
              </span>
            );
          })}
        </div>
      </AnimatePresence>
    );
  }
}

export default ReportsList;
