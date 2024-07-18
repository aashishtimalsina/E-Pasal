import g1 from "../../assets/galleryimg/img1.jpg";
import g2 from "../../assets/galleryimg/img2.jpg";
import g3 from "../../assets/galleryimg/img3.jpg";
import g4 from "../../assets/galleryimg/img4.jpg";
import g5 from "../../assets/galleryimg/img5.jpg";
import g6 from "../../assets/galleryimg/img6.jpg";

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Choose What You Like
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed uppercase text-base">
              Our authentic products handcrafted with love for you.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-full">
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center blockhover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g2}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3 max-h-96">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 hover:transition-duration-500"
                  src={g6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
