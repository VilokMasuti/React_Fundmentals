import { Container } from '../Container'
import Controlledinput from './Controlledinput'
import Counter from './Counter'
import Form from './Form'
import LikeButton from './LikeButton'
import Toggle from './Toggle'

const Tri2Page = () => {
  return (
    <Container>
      <div className=' border-b '>


      </div>
      <h1 className='  border-b border-dashed w-fit mt-7 text-3xl font-author antialiased'>
  State Management
</h1>
      <Counter/>

      <Toggle/>
      <Controlledinput/>

      <Form/>

      <LikeButton/>
    </Container>
  )
}

export default Tri2Page
