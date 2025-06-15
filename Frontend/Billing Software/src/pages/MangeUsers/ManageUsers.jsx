import React, { useEffect } from 'react'
import './ManageUsers.css' // Assuming you have a CSS file for styles
import UserForm from '../../components/UserForm/UserForm'
import UserList from '../../components/UserList/UserList'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchUsers } from '../../Service/UserService'; // Adjust the import path as necessary

const ManageUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="user-container text-light">
      <div className="left-column">
        <UserForm setUsers={setUsers}/>
      </div>
      <div className="right-column">
        <UserList users={users} setUsers={setUsers}/>
      </div>
    </div>
    </div>
  )
}

export default ManageUsers
