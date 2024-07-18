import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../../FireBaseAuth/FireBaseAuth";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {
  const navigateLogin = useNavigate();

  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleContact = (e) => {
    // console.log(e.target.value)
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
    // console.log(userSignup)
  };
  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (!userContact.username || !userContact.email || !userContact.message) {
      // alert("Enter All fields")
      return toast.error("All fields must be completed");
    } else {
      try {
        addDoc(collection(db, "contactUser"), {
          // contactUser can be anything it is name of collection
          user: userContact.username,
          email: userContact.email,
          msg: userContact.message,
        }).then(() => {
          toast.success(`Thank you for contacting us ${userContact.username}`);
          setUserContact({ username: "", email: "", message: "" }); // after form submit make everything empty
        });
      } catch (err) {
        toast.error(err.message);
      }

      //   .catch((err)=>toast.error(err.message))
    }
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.69905815634!2d85.52425149999999!3d27.63342315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f33b1a23b53%3A0xe8ec0b92bdf38a54!2sBanepa!5e0!3m2!1sen!2snp!4v1721277236072!5m2!1sen!2snp"
              ></iframe>
              <div className="bg-white relative   flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Santinagar-8 Banepa,Nepal</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    e.pasal@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+977 9848077880</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="name"
                  name="username"
                  value={userContact.username}
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  value={userContact.email}
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  autoComplete="off"
                  id="message"
                  name="message"
                  value={userContact.message}
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                onClick={handleSubmitContact}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
