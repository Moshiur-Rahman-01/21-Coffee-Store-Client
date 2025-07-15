import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, photo, name, price, quantity} = coffee;

    const handleDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });

                        // remove the coffee from the state
                        const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remainingCoffees);
                    }
                })
            
            
            }
        });
    }
    return (
        <div>
            <div className="flex items-center justify-between gap-6 bg-base-100 p-4 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Album" />
  </figure>
  <div className="space-y-2">
    <h2 className="font-semibold mb-4 text-xl">{name}</h2>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    
  </div>
  <div className="flex flex-col gap-2">
      <Link to={`/coffeedetails/${_id}`} className="btn btn-error">View</Link>
      <Link to={`/updatecoffee/${_id}`} className="btn btn-success">Edit</Link>
      <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
    </div>
</div>
        </div>
    );
};

export default CoffeeCard;