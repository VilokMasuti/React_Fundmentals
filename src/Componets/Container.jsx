export const Container = ({ className = "", children }) => {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 text-white">

      <div className={`max-w-7xl mx-auto  px-6 ${className}`}>
        {children}
      </div>
    </div>
  );
};
