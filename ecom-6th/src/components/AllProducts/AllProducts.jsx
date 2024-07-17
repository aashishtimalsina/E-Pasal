import { useEffect, useState } from "react";
import axios from "axios";
import jeans from "../../assets/jeans.jpg";
import { FaSearch } from "react-icons/fa"
import toast from "react-hot-toast";
import { Link } from "react-router-dom"


const AllProducts = ({ AddToCart }) => {

  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [searchItem, setSearchItem] = useState("");


  //    for all product  categories
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await axios("http://127.0.0.1:8000/api/products/categories/");
        setAllCategory(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  //for selecting a category and showing data on page
  useEffect(() => {
    const getAllProductsCategories = async () => {
      try {
        if (selectCategory) {
          const result = await axios(
            `http://127.0.0.1:8000/api/products/category/${selectCategory}/`
          );
          // console.log(result.data.products);
          setProducts(result.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllProductsCategories();
  }, [selectCategory]);

  //   for showing allproducts on allproducts page
  useEffect(() => {
    const allproductsonhome = async () => {
      const res = await axios("http://127.0.0.1:8000/api/products/");
      setAllProducts(res.data.products);
      //   console.log(allProducts);
    };
    allproductsonhome();
  }, []);

  const filterCategory = (category) => {
    setSelectCategory(category);
    // allProducts.filter()
    setShowProduct(true);
  };

  const handleSearchByIcon = () => {

    const searchProduct = allProducts.filter((searchFilterItem) => (
      searchFilterItem.title.toLowerCase().includes(searchItem)
    ))
    if (searchProduct.length === 0) {
      return toast.error("Items do not match your search");

    } else {
      setAllProducts(searchProduct);
    }


  }

  return (
    <>
      <>
        <div className="relative">
          <img
            src={jeans}
            alt=""
            className="object-cover w-full obbject-center h-[200px]"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl  md:text-5xl">
            All Products
          </h2>
        </div>

        {/* Showing all the categories from api  */}

        <div className=" flex gap-3 justify-center block mb-2 text-xl font-medium text-gray-900 dark:text-Black mt-4 mb-5 flex-wrap">
          <select onChange={(e) => filterCategory(e.target.value)}>
            <option>Filter By Category</option>

            {allCategory
              .filter(
                (filterItem) =>
                  ![
                    "lighting",
                    "motorcycle",
                    "automotive",
                    "furniture",
                    "smartphones",
                    "laptops",
                    "groceries",
                    "home-decoration",
                  ].includes(filterItem)
              )
              .map((category, index) => (
                <option className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" key={index} value={category.slug}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>


        <div className="text-center text-2xl flex items-center justify-center  mb-3 mt-3">
          <input onChange={((e) => setSearchItem(e.target.value))} value={searchItem} placeholder="search-item" className="border-4 w-2/3 md:w-auto text-black px-4 py-2 " />
          <FaSearch className="ml-4 cursor-pointer " size={30} onClick={handleSearchByIcon} />
        </div>

        {/* products section showing  products from single categories */}
        {showProduct ? (
          <div className=" flex flex-wrap justify-center mx-4  gap-5 mt-5 mb-5">
            {products.map((product, index) => (
              <div key={index} className="  lg:w-1/4 md:w-1/2 p-4 w-full border rounded-xl bg-black">
                <Link className="block relative h-48 rounded overflow-hidden" to={`/singleproduct/${product.id}`}>
                  <img
                    alt="ecommerce"
                    className="object-contain object-center  block"
                    src={product.thumbnail}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs text-white tracking-widest title-font mb-1">
                    Brand: {product.brand}
                  </h3>
                  <h2 className="text-gray-900 text-white title-font text-lg font-medium">
                    Name: {product.title}
                  </h2>
                  <p className="mt-1 text-white">price: Rs.{product.price}</p>
                </div>
                <button className="  mt-6 bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ringblue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 text-white" onClick={() => AddToCart(product)}>Add to cart</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-wrap  flex gap-4 justify-center  ">
            {allProducts.map((AllItems, index) => (
              <div
                key={AllItems.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-xl mx-4 bg-black "
              >
                <Link className="block relative h-48 rounded overflow-hidden" to={`/singleproduct/${AllItems.id}`}>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={AllItems.thumbnail}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest text-white title-font mb-1">
                    Brand: {AllItems.brand}
                  </h3>
                  <h2 className="text-gray-900 title-font text-white text-lg font-medium">
                    Name: {AllItems.title}
                  </h2>
                  <p className="mt-1 text-white">price: Rs.{AllItems.price}</p>
                </div>
                <button className="  mt-6 bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ringblue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 text-white" onClick={() => AddToCart(AllItems)}>Add to cart</button>
              </div>
            ))}
          </div>
        )}


        {/* showing all  the products in all products page */}
      </>
    </>
  );
};
export default AllProducts;
