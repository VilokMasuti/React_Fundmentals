import { useState } from "react";

const Star = ({ maxRating }) => {
  const [rateing, setRateing] = useState(0);
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  const handleCount = (star) => {
    setRateing((c) => (c === star ? 0 : star));
  };

  return (
    <div className=" p-10">
      <h1 className=" font-author text-2xl">Star</h1>
      <div className="flex gap-10 mt-10">
        {stars.map((star) => (
          <button
            className={`${star <= rateing ? "text-yellow-500" : ""} cursor-pointer`}
            onClick={() => handleCount(star)}
            key={star}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default Star;
