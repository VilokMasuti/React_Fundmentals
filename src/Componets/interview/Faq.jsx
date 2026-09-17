import { useState } from "react";

const FAQS = [
  { q: "What is React?", a: "A library for building user interfaces." },
  {
    q: "What is a hook?",
    a: "A function that lets you use state and lifecycle in function components.",
  },
  { q: "What is JSX?", a: "A syntax extension that looks like HTML." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full max-w-lg p-6">
      <h1 className="text-2xl font-bold uppercase tracking-wider text-center">
        FAQ
      </h1>
      <div className="mt-8 flex flex-col gap-4">
        {FAQS.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={i}
              className="rounded-lg bg-neutral-900 px-5 py-4 text-white shadow-sm transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
              >
                <span className="font-medium text-base">{f.q}</span>
                <span
                  aria-hidden="true"
                  className={`text-lg transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
