import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const Users2 = () => {

    const {isPending, isError, error, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/users");
            return res.json();
        }
    })
        const handleDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/users/${id}`,{
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after delete', data);
                        if(data.deletedCount){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                            // const remainingUsers = users.filter(user => user._id !== id);
                            // setUsers(remainingUsers);
                        }
                    })
                
                }
              });
        }
        if(isPending){
            return <span className='loading loading-spinner text-primary'></span>
        }
        if(isError){
            return <p>{error.message}</p>
        }

    return (
        <div className='container mx-auto p-10'>
        {/* <h2 className='text-3xl mb-5'>Users: {users.length}</h2> */}

        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>
    <th>No</th>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Email</th>
    <th></th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
    users?.map((user,index) => <tr key={user._id}>
        <th>
            {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
          {user.phone}
        </td>
        <td>{user.email}</td>
        <th className='flex gap-2'>
          <button className="btn btn-error">View</button>
          <button className="btn btn-success">Edit</button>
          <button onClick={() => handleDelete(user._id)} className="btn btn-warning">Delete</button>
        </th>
      </tr>)
  }
  </tbody>
</table>
</div>
    </div>
    );
};

export default Users2;