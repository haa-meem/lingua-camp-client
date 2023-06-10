import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

const Login = () => {
    const { register } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body p-8">
                    <h1 className="text-3xl font-bold text-center mb-3">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control mb-3">
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
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered pr-10"
                                    {...register('password', { required: true })}
                                />
                                <span
                                    className={`absolute top-1/2 right-2 transform -translate-y-1/2 ${showPassword ? 'text-primary' : 'text-gray-400'
                                        } cursor-pointer`}
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mt-3">
                                <FaGoogle className="me-1" />
                                Google Sign-in
                            </button>
                        </div>
                    </form>
                    <p className="mt-3 text-center">
                        Don`t have an Account? <Link className="text-blue-500" to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
