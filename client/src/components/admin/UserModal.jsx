import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const UpdateUser = ({ userId, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { token, url } = useAuth(); // Get the token from the useAuth hook

  // Fetch user data by ID
  const getUserById = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(`${url}/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setFormData(response.data);
      }
    } catch (error) {
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    getUserById();
  }, [userId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${url}/api/admin/users/update/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("User updated successfully");
        onClose();
      }
    } catch (error) {
      toast.error("Error updating user");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="username"
            className="block text-lg font-medium text-gray-900 dark:text-white"
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2.5 bg-gray-200 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Type username here"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2.5 bg-gray-200 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Type email here"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-900 dark:text-white"
          >
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2.5 bg-gray-200 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Type phone number here"
            required
          />
        </div>
        <div className="flex justify-between mt-4 space-x-2">
          <button
            type="submit"
            className="inline-flex items-center bg-blue-600 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center bg-gray-500 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
