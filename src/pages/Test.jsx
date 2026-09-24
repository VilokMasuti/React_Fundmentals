import { Link } from "react-router-dom";
import { Container } from "../Componets/Container";
import Faq from "../Componets/interview/Faq";
import Search from "../Componets/interview/Search";
import { Star } from "../Componets/interview/Star";
import Tabs from "../Componets/interview/Tabs";
import Todo from "../Componets/interview/Todo";

const Test = () => {
  return (
    <Container>
      <Link to={"/"}>
        <button className=" bg-zinc-800  text-white px-2.5 rounded-sm border  border-dotted cursor-pointer mt-20">
          BACK
        </button>
      </Link>

      <Tabs />

      <Star maxRating={5} />

      <Todo />

      <Faq />

      <Search />
    </Container>
  );
};

export default Test;
