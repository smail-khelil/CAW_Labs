import "./App.css";

import Modal from "./ui/Modal";
import TaskList from "./ui/TaskList";
// import { CopyPlus } from "lucide-react";
import Button from "./ui/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { ListForm, statusList } from "./data";
import MessageError from "./ui/MessageError";
import { ITask } from "./assets/interface/ITask";
import { v4 as uuidv4 } from "uuid";
import DropList from "./ui/drpoList";
import { taskvalidation } from "./validation";

function App() {
  const [selected, setSelected] = useState(statusList[0]);
  const [selected2, setSelected2] = useState(statusList[0]);

  const [errorSpan, setError] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [formTask, setFormTask] = useState<ITask>({
    id: uuidv4(),
    title: "",
    description: "",
    subtasks: [],

    status: {
      id: 0,
      nameS: "",
      statusImg: "",
    },
  });

  const subModal = () => {
    setIsOpen(true);
  };

  const subModal2 = () => {
    // add subtask to task
    setIsOpen2(true);
    setSubTask([...subTask, formTask]);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormTask({ title: "", description: "", status: statusList[0] });
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  const [listTasks, setListTasks] = useState<ITask[]>([]);
  const [subTask, setSubTask] = useState<ITask[]>([]);

  const onChangeHand = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormTask({
      ...formTask,
      [name]: value,
      status: selected,
    });

    setError({ ...errorSpan, [name]: "" });
  };

  const renderData = listTasks.map((task) => {
    return (
      <TaskList
        onDoubleClick={() => {
          subModal2();
        }}
        key={task.id}
        task={task}
        deletetask={(id: string) => {
          const newList = listTasks.filter((task) => task.id !== id);
          setListTasks(newList);
        }}
        listTasks={listTasks}
      />
    );
  });

  const renderForm = ListForm.map((form) => {
    return (
      <div key={form.id} className="flex flex-col m-1">
        <label className="mb-2" htmlFor={form.id}>
          {form.label.toUpperCase()}
        </label>
        <input
          // onChange={onChange}
          type={form.type}
          name={form.name}
          id={form.id}
          placeholder={form.placeholder}
          value={formTask[form.name]}
          onChange={onChangeHand}
          className="border border-gray-300 rounded-md p-2 focus:outline-none
           focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        <MessageError msg={errorSpan[form.name]} />
      </div>
    );
  });

  const renderForm2 = ListForm.map((form) => {
    return (
      <div key={form.id} className="flex flex-col m-1">
        <label className="mb-2" htmlFor={form.id}>
          {form.label.toUpperCase()}
        </label>
        <input
          // onChange={onChange}
          type={form.type}
          name={form.name}
          id={form.id}
          placeholder={form.placeholder}
          value={formTask[form.name]}
          onChange={onChangeHand}
          className="border border-gray-300 rounded-md p-2 focus:outline-none
           focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        <MessageError msg={errorSpan[form.name]} />
      </div>
    );
  });

  function handelonSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const error: ITask = taskvalidation(formTask);
    const haserrorMsg =
      Object.values(error).some((err) => err == "") &&
      Object.values(error).every((err) => err == "");

    if (haserrorMsg) {
      // submit the form to the server

      setListTasks([...listTasks, formTask]);
      console.log("is valid");
      console.log("formTask", formTask);
      closeModal();
    } else {
      // show error
      setError(error);
      console.log("errors detected :", errorSpan);

      return;
    }
  }

  // function handelonSubmit2(event: FormEvent<HTMLFormElement>): void {
  //   event.preventDefault();

  //   const error: ITask = taskvalidation(formTask);
  //   const haserrorMsg =
  //     Object.values(error).some((err) => err == "") &&
  //     Object.values(error).every((err) => err == "");

  //   if (haserrorMsg) {
  //     // submit the form to the server

  //     console.log("is valid");
  //     console.log("formTask", formTask);
  //     // add subtask to task
  //     setSubTask([...subTask, formTask]);
  //     closeModal();
  //   } else {
  //     // show error
  //     setError(error);
  //     console.log("errors detected :", errorSpan);

  //     return;
  //   }
  // }

  function handelonSubmit2(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const error: ITask = taskvalidation(formTask);
    const haserrorMsg =
      Object.values(error).some((err) => err === "") &&
      Object.values(error).every((err) => err === "");

    if (haserrorMsg) {
      // Add the new subtask to the subTask array
      const newSubTask = {
        id: uuidv4().toString(),
        title: formTask.title,
        description: formTask.description,
        subtasks: [],
        status: selected2,
      };

      setSubTask([...subTask, newSubTask]);

      console.log("newSubTask", newSubTask);
      // add subtask to task

      closeModal2();
    } else {
      setError({
        title: error.title,
        description: error.description,
        status: error.status?.nameS ?? "",
      });
      console.log("errors detected :", errorSpan);

      return;
    }
  }

  // console.log("success");}

  return (
    <main className="container">
      <h1 className="text-center text-4xl font-bold">Todo List</h1>
      <div className="flex flex-row items-center justify-between mt-5cd">
        <h1 className="text-2xl font-bold text-gray-700">Task</h1>

        <Button
          onClick={subModal}
          // minims the width of the button to the content
          className=" border-transparent  bg-blue-900 text-white hover:bg-blue-400 hover:text-gray-600 w-52"
        >
          Add Task
        </Button>
      </div>

      <div
        className="flex flex-row mx-2 flex-wrap w-full
      "
      >
        {renderData}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Task">
        <form className="flex flex-col" onSubmit={handelonSubmit}>
          {renderForm}
          <DropList
            selected={selected}
            setSelected={setSelected}
            status={statusList}
          />
          <div className="flex flex-row justify-center items-center ">
            <Button
              onClick={subModal}
              className="bg-sky-500 border-transparent"
            >
              Add New Task
            </Button>
            <Button
              onClick={closeModal}
              className="bg-sky-500 border-transparent"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isOpen2} closeModal={closeModal} title="Add Sub Task">
        <form className="flex flex-col" onSubmit={handelonSubmit2}>
          {renderForm2}
          <DropList
            selected={selected2}
            setSelected={setSelected2}
            status={statusList}
          />
          <div className="flex flex-row justify-center items-center ">
            <Button
              onClick={closeModal2}
              className="bg-sky-500 border-transparent"
            >
              Add Sub Task
            </Button>
            <Button
              onClick={closeModal2}
              className="bg-sky-500 border-transparent"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
