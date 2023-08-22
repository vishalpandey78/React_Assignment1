import React, { useState } from 'react'
import '../assets/AddPage.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddPage() {
    const [name, setname] = useState("")
    const [file, setfile] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate("")

    const handleAdd = (e) => {
        e.preventDefault()
        if (name && file)
            dispatch({
                type: "ADD", payload: {
                    name: name, image: file
                }
            })

        if (name && file)
            navigate("/")
        else
            alert("Fill the details completely")
    }

    return (
        <div id="addBody">
            <h1>Add Post</h1>
            <form>
                <label>Title</label>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />

                <label>Photo</label>
                {file && <img src={file} />}
                <input type="file" id="avatar" name="avatar" onChange={(e) => setfile(URL.createObjectURL(e.target.files[0]))} />

                <div className='btn'>
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        navigate("/")
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddPage