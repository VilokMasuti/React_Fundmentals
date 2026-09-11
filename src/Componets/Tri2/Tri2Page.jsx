import { Container } from "../Container";
import Cart from "./Cart";
import Controlledinput from "./Controlledinput";
import Counter from "./Counter";
import Form from "./Form";
import LikeButton from "./LikeButton";
import Productfilter from "./Productfilter";
import Toggle from "./Toggle";

const Tri2Page = () => {
  return (
    <Container>
      <div className=" border-b "></div>
      <h1 className="  border-b border-dashed w-fit mt-7 text-3xl font-author antialiased">
        State Management
      </h1>
      <Counter />

      <Toggle />
      <Controlledinput />

      <Form />

      <LikeButton />
      <Productfilter />

      <Cart />
    </Container>
  );
};

export default Tri2Page;
