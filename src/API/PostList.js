import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PostList() {

    let [posts,setpost]=useState([])


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            setpost(res.data)
            // console.log(res.data)
        })

        
    },[])

    console.log(posts)
  return (
    <div>
      <h1>List of Posts</h1>
      
          {posts.map((data)=> { return( < > 
            
                 <p key={data.id}>{data.userId}{")"}<small key={data.id}> {data.id}</small> <b>{data.title}</b> </p>
              
              </>  )

          })}
      
    </div>
  )
}

export default PostList
