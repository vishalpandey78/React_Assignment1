import React from 'react'
import '../assets/EditPage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function EditPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const id = useSelector(state => state.pos)
    const Arr = useSelector(state => state.items)

    console.log(id)
    const [name, setname] = useState(Arr[id].name)
    const [file, setfile] = useState(Arr[id].image)

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch({
            type: "EDIT", payload: {
                name: name, image: file
        }})
        navigate("/")
    }


    return (
        <div id="editBody">
            <h1>Edit Post</h1>
            <form>
                <label>Title</label>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />

                <label>Photo</label>
                {file && <img src={file} />}
                <input type="file" id="avatar" name="avatar" onChange={(e) => setfile(URL.createObjectURL(e.target.files[0]))} />

                <div className='btn'>
                    <button onClick={handleEdit}>Edit Post</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        navigate("/")
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPage