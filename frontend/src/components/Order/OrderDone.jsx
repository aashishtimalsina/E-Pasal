import React, { useEffect } from 'react';
import axios from 'axios';

const OrderDone = ({ cart }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://khalti.com/static/khalti-checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const getTotal = () => {
    return cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
  };

  const handleEsewaPayment = async () => {
    const url = "http://127.0.0.1:8000/api/createOrder/";
    const data = {
      amount: getTotal() + 10,
      products: [
        {
          product_name: "test",
          product_price: getTotal() + 10,
          quantity: 1,
        },
      ],
    };

    try {
      const response = await axios.post(url, data);

      if (response?.status === 200) {
        esewaCall(response?.data?.formData);
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const esewaCall = (formData) => {
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  const handleKhaltiPayment = async () => {
    const url = 'http://localhost:8000/api/khalti/initiate/';
    const amount = Math.round(getTotal() + 10); // Calculate and round the total amount

    const data = {
      "return_url": "http://localhost:5173/cart",
      "website_url": "http://localhost:5173",
      "amount": amount, // Format the amount to two decimal places and convert to string
      "purchase_order_id": "1",
      "purchase_order_name": "test",
    };
    const headers = {
      'Authorization': 'Key test_secret_key_d54d8bb4b0fa4314832ae5f33353fb10',  // Replace with your Khalti secret key
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log(response.data);

      if (response?.data?.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        console.error("Payment URL not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        className="bg-[#60bb46] font-semibold py-3 text-sm text-white uppercase w-full flex justify-center items-center"
        onClick={handleEsewaPayment}
      >
        PAY WITH{" "}
        <img
          className="w-5 h-5 mx-1"
          src="https://th.bing.com/th/id/OIP.ntWij_8IZKqCcXwHeegmaQAAAA?rs=1&pid=ImgDetMain"
          alt=""
        />{" "}
        SEWA
      </button>
      <button
        className="bg-[#4c8bf5] font-semibold py-3 text-sm text-white uppercase w-full flex justify-center items-center mt-4"
        onClick={handleKhaltiPayment}
      >
        PAY WITH{" "}
        <img
          className="w-5 h-5 mx-1"
          src="https://cdn.nayathegana.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg"
          alt=""
        />{" "}
        KHALTI
      </button>
    </div>
  );
};

export default OrderDone;
