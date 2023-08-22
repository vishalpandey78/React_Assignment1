import React from 'react'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom'
import '../assets/home.css'
import { useSelector } from 'react-redux'

function DashBoard() {
    const navigate = useNavigate() 
    const arr = useSelector(state => state.items)

    console.log(arr)

    const handleAdd = () => {
        navigate("/add")
    }
 
    return (
        <div id="Home">
            <div className='HomeHead'>
                <h3>Posts</h3>
                <button className='add' onClick={handleAdd}>Add Post</button>
            </div>
            {arr && arr.map((obj, idx) => <Cards key={idx} id={idx} name={obj.name} image={obj.image} />)}
            {!arr && <code style={{fontSize: "30px", margin: "10px", color: "tomato"}}>Add Tasks</code>}
        </div>
    )
}

export default DashBoard;