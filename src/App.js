import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Card,
  CardBody,
  Table
} from 'reactstrap'

class SystemSettings extends Component {

  componentDidMount() {
    document.body.style.background = 'linear-gradient(#e66465, #9198e5) fixed'
  }

  render = () => {
    const students = [
      {
        name: 'Ang',
        age: '18',
        gender: 'Female'
      },
      {
        name: 'Tan',
        age: '18',
        gender: 'Male'
      },
      {
        name: 'Yeoh',
        age: '17',
        gender: 'Female'
      }
    ]
    return (
      <>
        <h1>Student list</h1>
        <div className='m-4'>
          <Table striped className='p-4'>
            <thead>
              <tr>
                <th>Name 1</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map( student => {
                  return(
                  
                    
                        <tr>
                          <td>{ student.name }</td>
                          <td>{ student.age }</td>
                          <td>{ student.gender }</td>
                        </tr>
                    
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default SystemSettings