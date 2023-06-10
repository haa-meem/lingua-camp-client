import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };

    const password = watch('password');

    // Google Login
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

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
                                name="photoURL"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                {...register('photoURL', { required: true })}
                            />
                            {errors.photoURL && <span className="text-error">Photo URL is required</span>}
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
