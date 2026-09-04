
const UserBadge = ({user}) => {





  return (
    <div className=' p-10'>

      <div className=' mt-2.5  flex-1  '>


  <button key={user.id} className='  bg-zinc-900 cursor-pointer rounded-md  flex gap-2 px-2.5 text-white border-dashed'>
  <h2 className='font-author'>{user.name}</h2> -
      <p>{user.roles.join(", ")}</p>
  </button>

      </div>

    </div>
  )
}

export default UserBadge
