import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/Auth";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateUser from "./UserModal";

const Getusers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  // Fetch all users
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Getting users error:", error);
      toast.error("Error fetching users");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.status === 200) {
        setUsers(users.filter((user) => user._id !== id));
        toast.success("User deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [authorizationToken]);

  // Open the update modal
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close the update modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className=" p-4">
        <div className="flex flex-wrap gap-5 justify-center">
          {users.map((curUser) => {
            const { _id, username, email, phone } = curUser;
            return (
              <div
                key={_id}
                className="w-full max-w-sm p-4 bg-gray-900 rounded-lg shadow-md dark:bg-gray-800"
              >
                <div className="text-gray-300 mb-4">
                  <h6 className="text-extrabold text-lg font-mono">
                    <b className="text-yellow-400">Username:</b>{" "}
                    {username}
                  </h6>
                  <h6
                 className="text-extrabold text-lg font-mono">
                    <b className="text-yellow-400">Email:</b> {email}
                  </h6>
                  <h6 className="text-extrabold text-lg font-mono">
                    <b className="text-yellow-400">Phone:</b> {phone}
                  </h6>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300"
                    onClick={() => deleteUser(_id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300"
                    onClick={() => handleOpenModal(curUser)}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && selectedUser && (
        <UpdateUser userId={selectedUser._id} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Getusers;
