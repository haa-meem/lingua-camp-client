import { FaHistory, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useEnroll from "../Hooks/useEnroll";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
    const [enroll] = useEnroll();

    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/home">
                                        <FaHome /> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageclasses">
                                        <SiGoogleclassroom /> Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers /> Manage Users
                                    </NavLink>
                                </li>
                            </>
                        ) : isInstructor ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/home">
                                        <FaHome /> Instructor Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addaclass">
                                        <SiGoogleclassroom /> Add a Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myclasses">
                                        <FaUsers /> My Classes
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/dashboard/home">
                                        <FaHome /> Student Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myselectedclasses">
                                        <FaShoppingCart /> My Selected Classes
                                        <span className="badge badge-secondary">+{enroll?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myenrolledclasses">
                                        <FaWallet /> My Enrolled Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymenthistory">
                                        <FaHistory /> Payment History
                                    </NavLink>
                                </li>
                            </>
                        )
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;