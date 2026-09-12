import { useState } from "react";

const TodoStart = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const TodoChange = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodo([...todo, newTodo]);
  };

  const Togelee = (id) => {
    setTodo((c) => c.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  return (
    <section className="p-10">
      <div className=" flex flex-col">
        <h1 className="title">Todo</h1>
        <div
          className="   flex mt-10 gap-30 items-start
         "
        >
          <label htmlFor="Todo" className="">
            <p className=" text-sm font-author  ">AddTodo*</p>
            <input
              type="text"
              aria-valuetext="Todo"
              placeholder="Text.."
              className="input   m-3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <button
          className="bg-neutral-900 text-white px-2.5 rounded-sm  w-fit ml-2 mt-3  cursor-pointer "
          onClick={TodoChange}
        >
          AddTodos
        </button>
        <div className="flex-col flex mt-10 ml-4 gap-4 ">
          {todo.map((t) => (
            <ul className=" flex gap-10">
              <input onClick={() => Togelee(t.id)} type="checkbox" />
              <li
                key={t.id}
                className={`${t.done === true ? "text-red-500" : "text-white"}`}
              >
                {t.text}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoStart;
