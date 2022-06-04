import React, { useState } from 'react'

function PostForm() {

    let [userid,setuserId]=useState('')
    let [title,settitle]=useState('')
    let [body,setbody]=useState('')


    let handleChangeUser=(e)=>{
        e.preventDefault()
        setuserId(e.target.value)
       
        }
    let handleChangeBody=(e)=>{
            e.preventDefault()    
            settitle(e.target.value)     
      }

    let handleChangeTitle=(e)=>{
     e.preventDefault()
setbody(e.target.value)
     }


let handleSubmit=(e)=>{
    console.log(e.target)
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div> <label>User ID</label>
            <input type='text' name='userId' value={userid} onChange={handleChangeUser}>
            </input>
        </div>
        <div> <label>Title</label>
            <input type='text' name='userId' value={title} onChange={handleChangeTitle}>
            </input>
        </div>
        <div> <label>body</label>
            <input type='text' name='body' value={body} onChange={handleChangeBody}>
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
