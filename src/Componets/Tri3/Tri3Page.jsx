import { Container } from "../Container";
import FetachUsers from "./FetachUsers";
import Searchinput from "./Searchinput";
const Tri3Page = () => {
  return (
    <Container>
      <div className=" border-b "></div>
      <h1 className="  border-b border-dashed w-fit mt-7 text-3xl font-author antialiased capitalize ">
        API useeffect management
      </h1>
      <article className=" flex flex-col items-center justify-center mt-10 gap-10">
        <FetachUsers />
        <Searchinput />
      </article>
    </Container>
  );
};

export default Tri3Page;
