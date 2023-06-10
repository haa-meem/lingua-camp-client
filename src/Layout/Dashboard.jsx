import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useEnroll from "../Hooks/useEnroll";

const Dashboard = () => {
    const [enroll] = useEnroll();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/myselectedclasses"><FaShoppingCart></FaShoppingCart> My Classes
                        <span className="badge badge-secondary">+{enroll?.length || 0}</span>
                    </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;