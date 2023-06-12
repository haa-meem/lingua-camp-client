import { motion } from "framer-motion";
import { FaHistory, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useEnroll from "../Hooks/useEnroll";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
    const [enroll] = useEnroll();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const menuVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary btn-outline drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side right-0 bg-gradient-to-b from-[#ba3d27] via-[#ba3d27] to-red-500">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {isAdmin ? (
                        <>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                <NavLink to="/dashboard/manageclasses">
                                    <SiGoogleclassroom /> Manage Classes
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            >
                                <NavLink to="/dashboard/users">
                                    <FaUsers /> Manage Users
                                </NavLink>
                            </motion.li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Instructor Home
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                <NavLink to="/dashboard/addaclass">
                                    <SiGoogleclassroom /> Add a Class
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            >
                                <NavLink to="/dashboard/myclasses">
                                    <FaUsers /> My Classes
                                </NavLink>
                            </motion.li>
                        </>
                    ) : (
                        <>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Student Home
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                <NavLink to="/dashboard/myselectedclasses">
                                    <FaShoppingCart /> My Selected Classes
                                    <span className="badge badge-secondary">+{enroll?.length || 0}</span>
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            >
                                <NavLink to="/dashboard/myenrolledclasses">
                                    <FaWallet /> My Enrolled Classes
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.8 }}
                            >
                                <NavLink to="/dashboard/paymenthistory">
                                    <FaHistory /> Payment History
                                </NavLink>
                            </motion.li>
                        </>
                    )}

                    <div className="divider"></div>
                    <motion.li
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >
                        <NavLink to="/">
                            <FaHome></FaHome>Home
                        </NavLink>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
