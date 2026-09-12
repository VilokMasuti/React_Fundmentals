import { useState } from "react";

export const Star = ({ maxRating }) => {
  const [rateing, setRateing] = useState(0);
  const [hover, setHover] = useState(0);
  const handleStar = (star) => {
    setRateing((r) => (r === star ? 0 : star));
  };

  const diredState = rateing || hover;
  const star = Array.from({ length: maxRating }, (_, index) => index + 1);
  return (
    <section className=" p-10">
      <div className=" flex flex-col gap-10">
        <h1 className="title">Star Rateing</h1>

        <div className=" flex gap-5" onMouseLeave={() => setHover(0)}>
          {star.map((star) => (
            <button
              onMouseEnter={() => setHover(star)}
              onClick={() => handleStar(star)}
              key={star}
              className={`cursor-pointer duration-300 ${star <= diredState ? "text-yellow-500" : "text-gray-50"}`}
            >
              {" "}
              ★
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
