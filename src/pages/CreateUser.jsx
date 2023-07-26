import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate()
    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://192.168.18.213:4011/api/user/', {
                name: name,
                address: address
            })
            navigate('/userlist')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    })

    return (

        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="card ">
                    <div className="card-body">
                        <form onSubmit={handlerSubmit}>
                            <div classNameName="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" placeholder='Insert Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Adress</label>
                                <input type="text" className="form-control" placeholder='Insert Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateUser