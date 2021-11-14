
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { clearTheCart } from '../../utilities/fakedb';

const AddUser = () => {
    const { reset } = useForm();
    const nameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    // const orderUpdateRef = useRef();
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        // const orderUpdate = orderUpdateRef.current.value;
        // , orderUpdate 
        const newUser = { city, phone, name, email, address };

        fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.insertedId) {
                //     alert('Successfully added the user.')
                //     e.target.reset();
                // }
                if (data.insertedId) {
                    alert('Order Processed Successfully');
                    clearTheCart()
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="text-center">
            <h2>Cutomer Details</h2>
            <form onSubmit={handleAddUser}>
                Name:<input type="text" placeholder="Name" ref={nameRef} name="" id="" /> <br /><br />
                Email:  <input type="email" placeholder="email" ref={emailRef} name="" id="" /> <br /><br />
                City: <input placeholder="City" type="text" ref={cityRef} name="" id="" />  <br /><br />
                Phone:<input placeholder="phone number" type="tel" ref={phoneRef} name="" id="" /> <br /><br />
                Address:<input type="text" placeholder="Address" ref={addressRef} name="" id="" /> <br /><br />

                {/* orderUpdate:<input type="text" placeholder="Address" ref={orderUpdateRef} value="pending" name="" id="" /> <br /><br /> */}
                <input type="submit" value="Submit" />
            </form>
        </div>

        /*
        
        <div>
                   <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
       
                       <input defaultValue={user.displayName} {...register("name")} />
       
                       <input defaultValue={user.email} {...register("email", { required: true })} />
                       {errors.email && <span className="error">This field is required</span>}
                       <input placeholder="Address" defaultValue="" {...register("address")} />
                       <input placeholder="City" defaultValue="" {...register("city")} />
                       <input placeholder="phone number" defaultValue="" {...register("phone")} />
       
                       <input type="submit" />
                   </form>
               </div>
        
        */


    );
};

export default AddUser;