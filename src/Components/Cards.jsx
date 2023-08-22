import React from 'react'
import '../assets/Cards.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Cards({ id, name, image }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEdit = () => {
        // dipsatch to the redux store....
        dispatch({type: "POS", payload : id})
        // navigate to the edit page....
        navigate("/edit") 
    }

    return (
        <div className="Edit">
            <div id="left">
                <h4>Title</h4>
                <p>{name}</p>
                <hr />
                <div id="buttons">
                    <button>id:{id}</button>
                    <button style={{ backgroundColor: "yellow" }} onClick={handleEdit}>Edit</button>
                    <button style={{ backgroundColor: "red" }} onClick={() => dispatch({type: "DEL", payload: id})}>Delete</button>
                </div>
            </div>
            <div id="right">
                <img src={image} />
            </div>
        </div>
    )
}

export default Cards