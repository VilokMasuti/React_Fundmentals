import { Link } from 'react-router-dom'
import { Container } from '../Componets/Container'

const DashBoard = () => {
  return (
    <Container >
<div className=' mx-auto flex items-center justify-center h-dvh gap-10'>
 <Link
 to={'/Pratice'}
 >
<button className='  bg-zinc-800  text-white px-2.5 rounded-sm border  border-dotted cursor-pointer'>Practice</button>

 </Link>
 <Link to={'/Test'}>
 <button

          className='bg-zinc-800  text-white px-2.5 rounded-sm border  border-dotted cursor-pointer'>Test</button>
 </Link>

</div>

    </Container>
  )
}

export default DashBoard
