import React from 'react'
import { addUser } from '../../Service/UserService.js'; // Adjust the import path as necessary
import toast from 'react-hot-toast';

const UserForm = ({setUsers}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    role: 'ROLE_USER'
  });

  const onChangehandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((data) => ({
      ...data,
      [name]: value
    }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addUser(data);
      console.log("User data submitted:", data);
      // Reset form after submission
      setUsers(prevUsers => [...prevUsers, response.data]);
      toast.success("User added successfully!");
      setData({
        name: '',
        email: '',
        password: '',
        role: 'ROLE_USER'
      });
    } catch (error) {
      console.error("Error submitting user user:", error);
      toast.error("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
        <div className="mx-2 mt-2">
      <div className="card width-full form-container">
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            {/* <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <img src="https://placehold.co/48x48" alt="" width={48}/>
              </label>
              <input type="file" name="image" id="image" className='form-control' hidden/>
            </div> */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" id="name" className='form-control'
              placeholder='John Doe'
              onChange={onChangehandler}
              value={data.name}
              required/>
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
               <input type="email" name="email" id="email" className='form-control'
              placeholder='yourname@example.com'
              onChange={onChangehandler}
              value={data.email}
              required/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
               <input type="password" name="password" id="password" className='form-control'
              placeholder='*******'
              onChange={onChangehandler}
              value={data.password}
              required/>
            </div>
            <button type="submit" className='btn btn-warning w-100' disabled={loading}>
              {loading? "Loading....":"Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserForm
