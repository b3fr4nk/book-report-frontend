import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateReports } from "./features/reports/reportsSlice";
import { setSelected } from "./features/selectedSlice/selectedSlice";
import Report from "./Report";

function ReportsList() {
  const dispatch = useDispatch();
  const [reports, setReports] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const page = useSelector((state) => state.page.value);
  const { isLoading, error, data } = useQuery("reports", () => {
    return fetch("/api/reports").then((res) => res.json());
  });

  useEffect(() => {
    if (data) {
      setReports(data.items);
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
      <motion.ul className="grid-cols-4 px-32" style={{ display: "grid" }}>
        {reports.map((report) => {
          return (
            <motion.li
              key={report._id}
              onClick={() => {
                dispatch(setSelected(report._id));
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
    );
  }
}

export default ReportsList;
