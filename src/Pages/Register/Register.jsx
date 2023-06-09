import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleRegister = (data) => {
        console.log(data);
    };

    const password = watch('password');

    const handleGoogleSignIn = () => {

    };

    return (
        <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
                <div className="card-body p-8">
                    <h1 className="text-3xl font-bold text-center mb-3">Register</h1>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span className="text-error">Name is required</span>}
                        </div>
                        <div className="form-control mb-2">
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
                            {errors.email && <span className="text-error">Email is required</span>}
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()]).*$/,
                                        message: 'Password must contain at least 6 characters, one capital letter, and one special character',
                                    },
                                })}
                            />
                            {errors.password && <span className="text-error">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === password || 'Passwords do not match',
                                })}
                            />
                            {errors.confirmPassword && <span className="text-error">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                {...register('photo', { required: true })}
                            />
                            {errors.photo && <span className="text-error">Photo URL is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn btn-primary w-full">
                                Register
                            </button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mt-3">
                                <FaGoogle className="me-1" />
                                Google Sign-in
                            </button>
                        </div>
                    </form>
                    <p className="mt-2 text-center">
                        Already have an Account? <Link className="text-blue-500" to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
