import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleAdd = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      done: false,
      text: text,
    };
    setTodo([...todo, newTodo]);
    setText("");
  };

  const handlToggle = (id) => {
    setTodo((cu) =>
      cu.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    );
  };

  const DelelTodo = (id) => {
    setTodo((cu) => cu.filter((todo) => todo.id !== id));
  };

  const filteredTodo = todo.filter((item) => {
    if (filter === "done") {
      return item.done === true;
    }

    if (filter === "undone") {
      return item.done === false;
    }

    return true;
  });

  return (
    <section className=" p-10">
      <div className="  flex flex-col gap-5">
        <h1 className="title">TodoToggle</h1>
        <h1 className=" text-xs border w-fit border-dotted p-1">
          TodosList - {todo.length}
        </h1>
        <select
          className="text-white bg-indigo-950 w-fit"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
        s
        <div className=" mt-5 flex">
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
        </div>
        <button
          onClick={handleAdd}
          className=" w-fit text-center ml-5 cursor-pointer bg-gray-100 px-2.5 rounded-sm text-black"
        >
          Todo
        </button>
        <div className="flex flex-col gap-8">
          {filteredTodo.map((todos) => (
            <ul className="flex gap-4" key={todos.id}>
              <input
                type="checkbox"
                checked={todos.done}
                onChange={() => handlToggle(todos.id)}
              />

              <li className={todos.done ? "text-red-500" : "text-white"}>
                {todos.text}
              </li>

              <button
                onClick={() => DelelTodo(todos.id)}
                className="w-fit text-center ml-5 cursor-pointer bg-gray-100 px-2.5 rounded-sm text-black"
              >
                Delete
              </button>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todo;
