import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Learn React",
    completed: true,
  },
  {
    id: 2,
    text: "Build Todo",
    completed: false,
  },
  {
    id: 3,
    text: "Practice JavaScript",
    completed: false,
  },
];
const TodoManger = () => {
  const [todo, setTodo] = useState(initialTodos);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const Toggle = (id) => {
    setTodo((pev) =>
      pev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const Delete = (id) => {
    setTodo((pev) => pev.filter((u) => u.id !== id));
  };

  const FilterdTodo = todo.filter((t) => {
    if (filter === "active") {
      return !t.completed;
    }
    if (filter === " completed ") {
      return t.completed;
    }

    return true;
  });

  const handleAdd = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      completed: false,
      text: text,
    };
    setTodo([...todo, newTodo]);
    setText("");
  };

  const Complted = () => {
    setTodo((pev) => pev.filter((t) => !t.completed));
  };

  const items = todo.filter((t) => !t.completed).length;
  return (
    <section className=" p-10">
      <h1 className=" title">TodoManger </h1>
      <div className=" flex flex-col gap-10 mt-10">
        <div className=" flex flex-col gap-10">
          <div>
            <select
              className="rounded-sm bg-neutral-800"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed ">Completed </option>
            </select>
          </div>
          <div>
            <label htmlFor="text" className=" flex flex-col gap-5">
              <p className="text-sm font-light font-sans">AddTodo* </p>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Todos"
                className="input ml-5"
              />{" "}
            </label>
            <button
              onClick={handleAdd}
              className=" w-fit text-center ml-5 mt-2 cursor-pointer bg-gray-100 px-2.5 rounded-sm text-black"
            >
              Todo
            </button>
          </div>

          {FilterdTodo.map((todos) => (
            <section key={todos.id} className=" flex gap-10">
              <input
                type="checkbox"
                checked={todos.completed}
                onChange={() => Toggle(todos.id)}
              />

              <h1
                className={`${todos.completed === true ? " text-red-500" : " text-gray-50"} shadow`}
              >
                {todos.text}
              </h1>
              <button
                onClick={() => Delete(todos.id)}
                className=" w-fit bg-red-500 text-white font-author px-2.5  rounded-sm shadow-2xl"
              >
                {" "}
                Delete
              </button>
            </section>
          ))}
          <div className=" flex gap-10">
            <p className=" font-author font-bold "> {items} - items left</p>

            <button
              onClick={Complted}
              className=" cursor-pointer w-fit bg-zinc-500 text-white font-author px-2.5  rounded-sm shadow-2xl"
            >
              ClearTodos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoManger;
