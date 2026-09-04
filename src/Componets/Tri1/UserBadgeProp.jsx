const UserBadgeProp = ({ role }) => {

const roleStyles = {
  admin: "bg-red-500",
  manager: "bg-blue-500",
  developer: "bg-green-500",
};


  return (
    <div className="p-10">
      <div className="mt-2.5 flex  flex-col gap-5 sm:flex-row  ">
        {role.map((r) => (
          <button
            key={r}
            className={`${roleStyles[r]} cursor-pointer rounded-md flex  px-2.5 text-white`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserBadgeProp;
