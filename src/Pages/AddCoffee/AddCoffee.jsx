import React from 'react';
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        // send coffee data to the db
        fetch("http://localhost:3000/coffees", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                console.log("added successfully");
                Swal.fire({
                    title: "Coffee added successfully!",
                    icon: "success",
                    draggable: true,
                });
                // form.reset();
            }
        })
    }
    return (
        <div className='px-28 py-18'>
            <div className='space-y-8 text-center mb-8'>
                <h1 className='text-6xl'>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>


            <section className="p-6 bg-gray-100">
	<form className="" onSubmit={handleAddCoffee}>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50">

				<div className="">
					<label htmlFor="name" className="text-sm">Name</label>
					<input id="name" name='name' type="text" placeholder="Enter coffee name" className="w-full border p-2 rounded-md border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="quantity" className="text-sm">Quantity</label>
					<input type="text" name='quantity' placeholder="Enter coffee quantity" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="Supplier" className="text-sm">Supplier</label>
					<input type="text" name='supplier' placeholder="Enter coffee supplier" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="adTastedress" className="text-sm">Taste</label>
					<input type="text" name='taste' placeholder="Enter coffee taste" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="price" className="text-sm">Price</label>
					<input type="text" name='price' placeholder="Enter coffee price" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

				<div className="">
					<label htmlFor="Details" className="text-sm">Details</label>
					<input type="text" name='details' placeholder="Enter coffee details" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

                <div className="col-span-2">
					<label htmlFor="Photo" className="text-sm">Photo</label>
					<input type="text" name='photo' placeholder="Enter photo URL" className="w-full border p-2 rounded-md focus:ring border-gray-300" />
				</div>

                <div className='col-span-2'>
                    <button className='btn font-bold bg-[#D2B48C] p-2 w-full'>Add Coffee</button>
                </div>
		</div>
	</form>
</section>
        </div>
    );
};

export default AddCoffee;