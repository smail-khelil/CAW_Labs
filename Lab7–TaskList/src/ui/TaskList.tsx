import { useState } from "react";
import { ITask } from "../assets/interface/ITask";

import { statusList } from "../data";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  listTasks: ITask[];
  deletetask: (id: string) => void;
  onDoubleClick: () => void;
  task: ITask;
}

const TaskList = ({ task, onDoubleClick, deletetask }: IProps) => {
  const [selected, setSelected] = useState(task.status);
  const [styleL, setStyleL] = useState(false);
  return (
    <div className="flex flex-col bg-transparent rounded-lg shadow-lg overflow-hidden m-1 border border-1 border-gray-300 w-96 px-5 space-y-2 ">
      <div className=" flex justify-between items-center row">
        <h1 className={`text-xl font-bold ${styleL ? "line-through" : ""}`}>
          {task.title}
        </h1>
        <div className="flex row items-end " key={task.id}>
          {selected?.nameS}
          <div className="flex flex-row justify-between items-start pb-1 ">
            <img
              src={selected?.statusImg}
              alt=""
              className="h-5 w-5 flex-shrink-0 rounded-full ml-2 "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start pb-1 ">
        <p className="text-sm ml-5 mt-3">- {task.description}</p>
        <div className="flex flex-row justify-between items-start pb-1 ">
          <button
            className="bg-green-400 hover:bg-green-700 text-white font-bold p-2 rounded mb-1"
            onClick={onDoubleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </button>
          <button
            className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold p-2 rounded mb-1 ml-1 "
            onClick={() => {
              // changeStatus and update make him complete
              setStyleL(styleL ? false : true);
              styleL ? setSelected(statusList[0]) : setSelected(statusList[2]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
              />
            </svg>
          </button>

          <button
            className="bg-red-400 hover:bg-red-700 text-white font-bold p-2 rounded mb-1 ml-1 "
            onClick={() => {
              deletetask(task.id ?? "");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start pb-1 ">
        {task.subtasks?.map((subtask) => {
          return (
            <div
              key={subtask.id}
              className="flex flex-row justify-between items-start pb-1 "
            >
              <p className="text-sm ml-5 mt-3">- {subtask.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
