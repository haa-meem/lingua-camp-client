import { motion } from "framer-motion";

const DashboardHome = () => {
    return (
        <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-screen flex items-center justify-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="bg-white rounded-full p-10"
            >
                <h2 className="font-semibold text-5xl uppercase">Welcome to Dashboard</h2>
            </motion.div>
        </div>
    );
};

export default DashboardHome;
