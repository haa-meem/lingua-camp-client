import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchClasses();
    }, []);

    const handleApprove = (classId) => {
        sendFeedback(classId, "approved");
    };

    const handleDeny = (classId) => {
        sendFeedback(classId, "denied");
    };

    const sendFeedback = (classId, status) => {
        fetch(`https://lingua-camp-server.vercel.app/addClass/${classId}`, {
            method: "PATCH",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    title: "Success!",
                    text: "Feedback sent successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    fetchClasses();
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send feedback",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    const fetchClasses = () => {
        fetch("https://lingua-camp-server.vercel.app/addClass")
            .then((res) => res.json())
            .then((data) => setClasses(data))
            .catch((error) => console.error(error));
    };

    return (
        <div className="p-4 w-full">
            <h2 className="text-3xl font-extrabold text-center mb-6">Manage Classes</h2>
            {classes.length === 0 ? (
                <p className="text-center">No classes found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-6 text-left">Class Image</th>
                                <th className="py-3 px-6 text-left">Class Name</th>
                                <th className="py-3 px-6 text-left">Instructor Name</th>
                                <th className="py-3 px-6 text-left">Instructor Email</th>
                                <th className="py-3 px-6 text-left">Available Seats</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {classes.map((classItem) => (
                                <tr key={classItem._id}>
                                    <td className="py-4 px-6">
                                        <img src={classItem.classImage} alt={classItem.className} className="h-16 w-16 object-cover" />
                                    </td>
                                    <td className="py-4 px-6">{classItem.className}</td>
                                    <td className="py-4 px-6">{classItem.instructorName}</td>
                                    <td className="py-4 px-6">{classItem.instructorEmail}</td>
                                    <td className="py-4 px-6">{classItem.availableSeats}</td>
                                    <td className="py-4 px-6">{classItem.price}</td>
                                    <td className="py-4 px-6">{classItem.status}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex space-x-2">
                                            {classItem.status === "pending" && (
                                                <>
                                                    <button className="btn btn-sm btn-primary" onClick={() => handleApprove(classItem._id)}>
                                                        Approve
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDeny(classItem._id)}>
                                                        Deny
                                                    </button>
                                                </>
                                            )}
                                            <button className="btn btn-sm btn-secondary" onClick={() => sendFeedback(classItem._id, "feedback")}>
                                                Send Feedback
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;
