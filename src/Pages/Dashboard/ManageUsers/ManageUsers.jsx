import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaChalkboardTeacher } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        fetch(`https://lingua-camp-server.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`https://lingua-camp-server.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full">
                <h2 className="text-3xl font-semibold my-4 text-center">Manage Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === "admin" ? (
                                            "admin"
                                        ) : user.role === "instructor" ? (
                                            "instructor"
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleMakeInstructor(user)}
                                                    className="btn btn-ghost bg-green-600 text-white me-2"
                                                >
                                                    <FaChalkboardTeacher />
                                                </button>
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost bg-orange-600 text-white"
                                                >
                                                    <FaUserShield />
                                                </button>
                                            </>
                                        )}
                                    </td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
