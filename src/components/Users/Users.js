import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://stark-plains-49197.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    //DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            const url = `https://stark-plains-49197.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Users Available:{users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >Name:{user.name} <br /> Email:{user.email} <br /> Address:{user.address} <br /> City:{user.city}<br />  Phone:{user.phone}<br />
                        {/* <br />Order Status:{user.orderUpdate}<br /> */}
                        {/* orderStatus:<input type="text" placeholder="Address" value="pending" name="" id="" /> <br /><br /> */}
                        <Link to={`/users/update/${user._id}`}> <button>Update</button></Link>

                        <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default Users;