import { todos, users } from '../../../lib/Json'
import { Container } from '../../../src/Componets/Container'
import Error from '../Tri1/Error'
import Priority from '../Tri1/Priority'
import ProductSeaction2 from '../Tri1/ProductSeaction2'
import ProductSection from '../Tri1/ProductSection'
import StatCard from '../Tri1/StatCard'
import UserBadge from '../Tri1/UserBadge'
import UserBadgeProp from '../Tri1/UserBadgeProp'

const TriPage = () => {
  const allRoles = users.flatMap(r => r.roles)


    const clenr = [...new Set(allRoles)]

    const tags = todos.flatMap(t => t.priority)



    const Tags = [...new Set(tags)]

    const value = users.filter((u) => u.isActive === true).length
  return (
    <div className=' min-h-dvh'>

<Container>

<ProductSection/>

<ProductSeaction2/>


<div className='  flex flex-col  md:flex-row md:flex-wrap '>

{users.map((user) => (
  <UserBadge
key={user.id}
    user={user}
/>

))}


</div>




<UserBadgeProp
role={ clenr}
/>




<Error
message={'Error Came Bro'}
show={false}
/>

{/* <Tabs/> */}

<Priority
tag = {Tags}
/>

{users.map((t) => (
<StatCard
label={t.age}
value={value}

/>

))}


    </Container>
    </div>
  )
}

export default TriPage
