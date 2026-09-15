import { Container } from "../Container";
import Cart from "./Cart";
import Controlledinput from "./Controlledinput";
import Counter from "./Counter";
import Form from "./Form";
import LikeButton from "./LikeButton";
import Productfilter from "./Productfilter";
import TodoManger from "./TodoManger";
import TodoStart from "./TodoStart";
import Toggle from "./Toggle";
import { UserProfileEditor } from "./UserProfileEditor";
import { UsersSelected } from "./UsersSelected";

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

      <UserProfileEditor />

      <TodoStart />

      <UsersSelected />

      <TodoManger />
    </Container>
  );
};

export default Tri2Page;
