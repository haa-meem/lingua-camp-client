import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    };

    const handleGoogleSignIn = () => {
        // Implement your Google Sign-in logic here
    };

    return (
        <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body p-8">
                    <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                {...register('password', { required: true })}
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mt-3">
                                <FaGoogle className="me-1" />
                                Google Sign-in
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center">
                        Don`t have an Account? <Link className="text-blue-500" to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;