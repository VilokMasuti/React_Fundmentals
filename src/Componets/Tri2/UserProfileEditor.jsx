import { useState } from "react";

export const UserProfileEditor = () => {
  const [formData, setformData] = useState({
    name: "Vilok",
    age: 25,
    city: "Bagalkot",
  });
  const [profile, setProfile] = useState({
    name: "Vilok",
    age: 25,
    city: "Bagalkot",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setProfile(formData);
  };

  return (
    <section className=" p-10 mt-8">
      <div className=" flex  gap-5">
        <label htmlFor="name" className=" flex flex-col gap-1">
          <p>Name*</p>
          <input
            type="text"
            value={formData.name}
            placeholder="Name.."
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            className=" ml-3 border w-fit rounded-sm  outline-none focus:outline-0 border-0    border-b-2 mt-3"
          />
        </label>{" "}
        <label htmlFor="name" className=" flex flex-col gap-1">
          <p>Age*</p>
          <input
            type="number"
            placeholder="Age.."
            value={formData.age}
            onChange={(e) => setformData({ ...formData, age: e.target.value })}
            className=" ml-3 border w-fit rounded-sm  outline-none focus:outline-0 border-0    border-b-2 mt-3"
          />
        </label>{" "}
        <label htmlFor="name" className=" flex flex-col gap-1">
          <p>City*</p>
          <input
            type="text"
            placeholder="City.."
            value={formData.city}
            onChange={(e) => setformData({ ...formData, city: e.target.value })}
            className=" ml-3 border w-fit rounded-sm  outline-none focus:outline-0 border-0    border-b-2 mt-3"
          />
        </label>{" "}
      </div>
      <button
        onClick={handleChange}
        className="bg-neutral-900 text-white font-author cursor-pointer px-2.5 rounded-sm mt-9"
      >
        Save
      </button>
      <div className=" flex flex-col gap-2 mt-10">
        <h1 className="font-author text-2xl">Name - {profile.name}</h1>
        <h1 className="font-author text-2xl">Age - {profile.age}</h1>
        <h1 className="font-author text-2xl">City - {profile.city}</h1>
      </div>
    </section>
  );
};
