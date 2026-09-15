import { useState } from "react";

const users = [
  { id: 1, name: "Vilok" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
  { id: 4, name: "pooja" },
  { id: 5, name: "vish" },
  { id: 6, name: "Alok" },
];
export const UsersSelected = () => {
  const [user, setUser] = useState(users);
  const [selectedId, setSelectedId] = useState([]);
  const [dialogopen, setDialogopen] = useState(false);

  const AllSelected =
    user.length > 0 && user.every((u) => selectedId.includes(u.id));

  const handleAllSelected = () => {
    if (AllSelected) {
      setSelectedId([]);
    } else {
      setSelectedId(user.map((u) => u.id));
    }
  };

  const handleSelected = (id) => {
    setSelectedId((pev) => {
      if (pev.includes(id)) {
        return pev.filter((u) => u !== id);
      }

      return [...pev, id];
    });
  };

  const handleDelete = () => {
    if (selectedId === 0) return;
    setDialogopen(true);
  };

  const handleCancelDelete = () => {
    setSelectedId([]);
    setDialogopen(false);
  };

  const handleDeleteConf = () => {
    setUser((pev) => pev.filter((u) => !selectedId.includes(u.id)));
    setSelectedId([]);
    setDialogopen(false);
  };
  return (
    <section className=" p-10">
      <h1 className="title">UsersSelected</h1>
      <div className=" flex flex-col gap-5 mt-10">
        <label htmlFor="AllSelected">
          <input
            type="checkbox"
            checked={AllSelected}
            onChange={handleAllSelected}
          />

          <p className=" text-sm font-author font-medium"> All Selected</p>
        </label>
        {user.map((u) => (
          <section key={u.id} className=" flex gap-5">
            <label htmlFor="">
              <input
                type="checkbox"
                checked={selectedId.includes(u.id)}
                onChange={() => handleSelected(u.id)}
              />
            </label>
            <p>{u.name}</p>
          </section>
        ))}

        <button
          onClick={handleDelete}
          disabled={selectedId.length === 0}
          className="bg-red-600 disabled:opacity-50 text-white px-2.5 rounded-sm cursor-pointer w-fit"
        >
          Delete
        </button>
        {dialogopen && (
          <div className=" fixed inset-0 bg-black/50 flex items-center justify-center  ">
            <div className="  bg-neutral-50 shadow-2xl rounded-sm  text-black flex flex-col items-center gap-5 p-3">
              <p>Are you sure you wanna Delete</p>
              <div className=" flex gap-10">
                <button
                  onClick={handleDeleteConf}
                  className="bg-red-600  text-white px-2.5 rounded-sm cursor-pointer w-fit"
                >
                  {" "}
                  Yes
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="bg-green-600  text-white px-2.5 rounded-sm cursor-pointer w-fit"
                >
                  {" "}
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
