import { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
  })
  const [data,setData] = useState(null)


  const handleSumbit = (e) => {
    e.preventDefault()
   if (!form.name.trim() || !form.email.trim()) {
      alert('Fill the form')
      return
    }
       setData(form)
 setForm({
      name: '',
      email: '',
    })
  }

  console.log(data);

  return (
    <div className=' p-10'>

      <h1 className='title'>Form Management</h1>

      <div className=' flex flex-col gap-10'>

<form onSubmit={handleSumbit} className=' p-10 flex  gap-5 flex-row'>
<input type='text'
 value={form.name}
placeholder='Name'
onChange={(e) => setForm({...form,name:e.target.value})}
className=' w-[12rem] cursor-pointer   text-white border-0 border-b outline-none focus:border-b focus:outline-none'
/>

<input type="email"
placeholder='Email'
onChange={(e) => setForm({...form ,email:e.target.value})}
    value={form.email}
className=' w-[12rem] cursor-pointer   text-white border-0 border-b outline-none focus:border-b focus:outline-none'
/>

<button type='submit' className=' px-3 bg-green-600 w-fit rounded-sm  cursor-pointer'> submit</button>
</form>

      </div>
    </div>
  )
}

export default Form
