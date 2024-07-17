import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FireBaseAuth/FireBaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import homeimg from "../../assets/Home.png";
import toast from "react-hot-toast"

const Login = () => {
  const navigateLogin = useNavigate();

  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
    // console.log(userSignup)
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if (!userSignup.email || !userSignup.password) {
      // alert("Enter All fields")
      return toast.error("All fields must be completed");
    } else {
      signInWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      )
        .then((res) => {
          navigateLogin("/");
          window.location.reload();
        })
        .catch((err) => toast.error(err.message)); // Abdul.Muneer@dpworld.com
    }
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={homeimg}
            alt=""
            className="object-cover w-full obbject-center h-[100px]  sm:h-[200px]"
          />

          <div className="w-full h-[100px]  sm:h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl  md:text-5xl">
            Login
          </h2>
        </div>

        <div className="container px-5 py-14 mx-auto  flex">
          <div className="  bg-rose-100 rounded-lg p-8 flex flex-col  mx-auto mt-10 md:mt-0  shadow-md">
            <h2 className="text-gray-900 text-lg md:text-3xl mb-1 font-medium title-font">
              LogIn
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Already Signed Up? Please LogIn..
            </p>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                autoComplete="off"
                onChange={handleChange}
                value={userSignup.email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                autoComplete="off"
                onChange={handleChange}
                value={userSignup.password}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={handleSignup} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              LogIn
            </button>
            <p className="text-xs items-center text-gray-500 mt-3">
              {" "}
              New Here?
              <Link to="/signup">
                <button className="cursor-pointer hover:text-blue-600">
                  {" "}
                  SignUp{" "}
                </button>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
