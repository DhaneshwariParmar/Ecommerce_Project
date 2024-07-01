/* eslint-disable react/no-unescaped-entities */
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user" // Default role as user
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (userSignup.email === "" || userSignup.password === "" || userSignup.name === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
            const user = userCredential.user;
            await addDoc(collection(fireDB, "users"), {
                uid: user.uid,
                name: userSignup.name,
                email: userSignup.email,
                role: userSignup.role,
                date: new Date().toLocaleDateString()
            });
            setLoading(false);
            toast.success("Account created successfully");
            navigate("/login");
        } catch (error) {
            setLoading(false);
            console.error("Error signing up: ", error);
            toast.error("Failed to create account");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="signup_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                <div className="mb-3">
                    <select
                        name="role"
                        value={userSignup.role}
                        onChange={(e) => setUserSignup({ ...userSignup, role: e.target.value })}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none'
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="mb-5">
                    <button
                        type='button'
                        onClick={handleSignup}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Already have an account? <Link className='text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
