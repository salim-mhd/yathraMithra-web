import React from 'react'
import AdminNavbar from '../../../components/admin/AdminNavbar'
import { Table } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

export default function PackageManagment() {
  return (
    <div>
      <AdminNavbar option={"package"}/>
      <div>
      <div className='m-5 fw-bold fs-3 text-center'>PackageManagment</div>
      <div className='text-end me-5 mb-3'><button className='btn btn-primary'>Add Package</button></div>
      <div className='px-5'>
      <Table bordered className='text-center'>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Package Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td><FaEdit className='fs-4'/></td>
          <td><MdDeleteForever className='fs-3 text-danger'/></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
      </div>
      </div>
    </div>
  )
}
