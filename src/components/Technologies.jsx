import { RiReactjsLine } from "react-icons/ri";
import { SiPytorch, SiTensorflow, SiPython, SiMysql, SiLatex,} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 text-6xl">
        <div className="text-cyan-400">
          <RiReactjsLine />
        </div>
        <div className="text-orange-500">
          <SiPytorch />
        </div>
        <div className="text-yellow-500">
          <SiTensorflow />
        </div>
        <div className="text-blue-500">
          <SiPython />
        </div>
        <div className="text-indigo-500">
          <SiMysql />
        </div>
        <div className="text-green-500">
          <SiLatex />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
