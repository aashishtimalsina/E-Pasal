import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-black   text-gray-300">
          <div className="container mx-auto py-4 px-4 flex flex-wrap justify-center">

            <div className="flex flex-wrap place-items-start">
              <div className="mr-10 ml-10 mb-4">
                <h2 className="text-4xl  font-semibold">
                  {" "}
                  E-<span className="text-[red]">Shop</span>
                </h2>
              </div>
              <div className="mr-8 ml-10 mb-4">
                <h2 className="text-lg font-semibold mb-2">Contact</h2>
                <p>Email: e.pasal@gmail.com</p>
                <p>Phone: +977 9848077880</p>
              </div>
              <div className="mr-8 ml-10 mb-4">
                <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    <span>
                      <FaFacebook size={22} />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    <span>
                      <FaLinkedin size={22} />
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    <span>
                      <FaInstagram size={22} />
                    </span>
                  </a>
                  <a
                    href="https://github.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    <span>
                      <FaGithub size={22} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="mr-8 ml-10 mb-4">
                <h2 className="text-lg font-semibold mb-2">Legal</h2>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white block">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white block">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-8" />
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 E-Pasal. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
