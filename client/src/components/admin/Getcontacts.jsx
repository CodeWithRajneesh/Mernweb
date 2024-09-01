import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const GetContacts = () => {
  const [contacts, setContacts] = useState([]);

  const { token } = useAuth();

  const fetchAllContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/contacts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Error fetching contacts");
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, [token]);

  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        toast.success("Contact deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Error deleting contact");
    }
  };

  return (
    <div className="w-full p-4 ">
      <div className="flex flex-wrap gap-5 justify-center">
        {contacts.length ? (
          contacts.map((contact) => (
            <div
              key={contact._id}
              className="w-full sm:w-80 md:w-96 lg:w-[22rem] h-auto p-4 bg-gray-900  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col"
            >
              <div className="text-gray-300 ">
              <h6 className="text-extrabold text-lg font-mono">
                      <b className="text-yellow-400" >Username:</b> {contact.username}
                    </h6>
                  <h6 className="text-extrabold text-lg font-mono">
                  <b className="  text-yellow-400  ">Email:</b> {contact.email}
                </h6>
                <h6 className="text-extrabold text-lg font-mono">
                  <b className="  text-yellow-400  ">Email:</b> {contact.message}
                </h6>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => deleteContact(contact._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">
            No contacts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetContacts;
