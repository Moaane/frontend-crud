import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [users, setUser] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://192.168.18.213:4011/api/user/')
    setUser(response.data)
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => (
                    <tr key={item.id}>
                      <td>{(index + 1)}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>
                        <Link className='btn btn-warning'>Edit</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList