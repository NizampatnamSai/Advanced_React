import React, { useState } from 'react'
import axios from 'axios'


function PostForm() {

    let [userid,setuserId]=useState('')
    let [title,settitle]=useState('')
    let [body,setbody]=useState('')


    let handleChangeUser=(e)=>{
        e.preventDefault()
        setuserId(e.target.value)
       
        }
    let handleChangeTitle=(e)=>{
            e.preventDefault()    
            settitle(e.target.value)     
      }

    let handleChangeBody=(e)=>{
     e.preventDefault()
setbody(e.target.value)
     }


let handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(userid)
    axios.post('https://jsonplaceholder.typicode.com/posts', {userid,title,body})

    .then(res=>{ console.log(res)
 


})
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div> <label>User ID</label>
            <input type='text' value={userid} name={userid} onChange={handleChangeUser}>
            </input>
        </div>
        <div> <label>Title</label>
            <input placeholder='title' value={title} name={title} type='text'  onChange={handleChangeTitle}>
            </input>
        </div>
        <div> <label>body</label>
            <input type='text' value={body} name={body} onChange={handleChangeBody}>
            </input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        </form>  
    </div>
  )
}

export default PostForm
