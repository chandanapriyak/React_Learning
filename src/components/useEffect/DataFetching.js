import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    //const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () =>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res =>{
                console.log("Response",res)
                setPost(res.data)
            })
            .catch(err =>{
                console.log("Error",err)
            })
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e =>setId(e.target.value)}></input>
            <button type="button" onClick={handleClick}>Fetch Post</button>
              <div>{post.title}</div>
            {/* This is for list of posts */}
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */} 
        </div>
    )
}

export default DataFetching
