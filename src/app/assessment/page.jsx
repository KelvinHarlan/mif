import dynamic from "next/dynamic";
import Assessment from "./components/Assessment";
import "./components/style/assessment.css";
const index = () => {
  return <Assessment />;
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
