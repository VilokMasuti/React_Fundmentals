import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Vilok" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
  { id: 4, name: "John" },
  { id: 5, name: "David" },
];

const UsersSelected = () => {
  const [user, setUser] = useState(initialUsers);
  const [selected, setSelected] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const AllSelected =
    user.length > 0 && user.every((u) => selected.includes(u.id));

  const handleSelected = (id) => {
    setSelected((pev) => {
      if (pev.includes(id)) {
        return pev.filter((u) => u !== id);
      }
      return [...pev, id];
    });
  };

  const handleALLselected = () => {
    if (AllSelected) {
      setSelected([]);
    } else {
      setSelected(user.map((u) => u.id));
    }
  };

  const handleDeleteClick = () => {
    if (selected.length === 0) return;
    setIsDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setSelected([]);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setUser((pev) => pev.filter((u) => !selected.includes(u.id)));
    setSelected([]);
    setIsDeleteModalOpen(false);
  };
  return (
    <section className="p-10">
      <h1 className=" title">User selected </h1>

      <div className=" flex flex-col gap-2">
        <label htmlFor="Selected" className="mt-4">
          <input
            type="checkbox"
            checked={AllSelected}
            onChange={handleALLselected}
          />
          <p>ALL SELECTED</p>
        </label>

        {user.map((user) => (
          <div key={user.id} className="mt-10">
            <label className=" flex gap-6" key={user.id}>
              <input
                type="checkbox"
                checked={selected.includes(user.id)}
                onChange={() => handleSelected(user.id)}
              />

              {user.name}
            </label>
          </div>
        ))}
        <button
          disabled={selected.length === 0}
          className={`w-fit disabled:opacity-40 bg-red-500 rounded-sm mt-2 text-white px-2.5 cursor-pointer `}
          onClick={handleDeleteClick}
        >
          Delete Selected
        </button>
        {isDeleteModalOpen && (
          <div className=" fixed inset-0 flex items-center justify-center  bg-black/50 px-4 ">
            <div className=" bg-neutral-50 shadow-xl text-black rounded-sm max-w-sm p-2 w-full">
              <h2 className="text-xl font-bold text-slate-900">
                {" "}
                Confirm Delete{" "}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {" "}
                Are you sure you want to delete{" "}
                <span className="font-semibold text-slate-900">
                  {" "}
                  {selected.length} user {selected.length > 1 ? "s" : ""}{" "}
                </span>{" "}
                ?{" "}
              </p>
              <div className="mt-6 flex gap-3">
                {" "}
                <button
                  onClick={handleCancelDelete}
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {" "}
                  No{" "}
                </button>{" "}
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600"
                >
                  {" "}
                  Yes, Delete{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersSelected;
