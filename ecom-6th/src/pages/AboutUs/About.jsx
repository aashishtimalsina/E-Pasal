import React from "react";
import loginimg from "../../assets/Home.jpg";

const About = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={loginimg}
            alt=""
            className="object-cover w-full obbject-center h-[100px]  sm:h-[200px]"
          />

          <div className="w-full h-[100px]  sm:h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl  md:text-5xl">
            About Us
          </h2>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?size=626&ext=jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {" "}
                Your Favorite Shopping Marketplace{" "}
              </h1>
              <p className="hidden text md:text-5xl text-[black] text-3xl mb-6 lg:inline-block">
                {" "}
                E-<span className="text-red-500">Shop</span>{" "}
              </p>

              <p className="mb-8 leading-relaxed">
                The E- Shop is one of the Nepals's leading digital
                ecommerce entity that provides wide ranges of product at
                reasonable and affordable prices.
              </p>
              <div className="flex justify-center"></div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {" "}
                OUR MISSION
              </h1>
              <p className="mb-8 leading-relaxed">
                we believe that shopping should be a seamless and enjoyable
                experience. That's why we handpick each item in our collection,
                ensuring that it meets our high standards for quality, style,
                and affordability.
                <p className="mt-4">
                  What sets us apart is our commitment to customer satisfaction.
                  We strive to provide exceptional service at every step of your
                  shopping journey, from browsing our website to receiving your
                  order. Our friendly and knowledgeable team is here to assist
                  you with any questions or concerns you may have.
                </p>
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://th.bing.com/th/id/R.4b2bd2e9f7b949a66f583cc19ebbd0f7?rik=X9AHdyMtaN86KQ&riu=http%3a%2f%2fwww.sunriseglobalschool.com%2fimages%2four-mission.gif&ehk=5avAOCUGVM91vPg4dOGLk48YWfybYslSEMV4TmelTYs%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
