import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, photo, name, price, quantity, supplier,taste, details } = useLoaderData();
    // console.log(coffee)

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        // send updated coffee to the db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-middle",
                    icon: "success",
                    title: "Coffee Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div className='px-28 py-18'>
            <div className='space-y-8 text-center mb-8'>
                <h1 className='text-6xl'>Update Coffee</h1>
                
            </div>


            <section className="p-6 bg-gray-100">
	<form className="" onSubmit={handleUpdateCoffee}>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50">

				<div className="">
					<label htmlFor="name" className="text-sm">Name</label>
					<input id="name" name='name' defaultValue={name} type="text" placeholder="Enter coffee name" className="w-full border p-2 rounded-md border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="quantity" className="text-sm">Quantity</label>
					<input type="text" name='quantity' defaultValue={quantity} placeholder="Enter coffee quantity" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="Supplier" className="text-sm">Supplier</label>
					<input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="adTastedress" className="text-sm">Taste</label>
					<input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="price" className="text-sm">Price</label>
					<input type="text" name='price' defaultValue={price} placeholder="Enter coffee price" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="Details" className="text-sm">Details</label>
					<input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

                <div className="col-span-2">
					<label htmlFor="Photo" className="text-sm">Photo</label>
					<input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

                <div className='col-span-2'>
                    <button className='btn font-bold bg-[#D2B48C] p-2 w-full'>Update Coffee</button>
                </div>
		</div>
	</form>
</section>
        </div>
    );
};

export default UpdateCoffee;