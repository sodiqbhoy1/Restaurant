import React from 'react';
import App from "../assets/app.png";
import Rider from "../assets/rider.png";
import Merchant from "../assets/merchant.png";
import chicken from "../assets/chicken.png";
import hamburger from "../assets/hamburger.png";
import friedrice from "../assets/fried-rice.png";
import pizza from "../assets/pizza.png";
import young from "../assets/young.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="bg-gray-100 mt-28">
        {/* Hero Section */}
        <div className="bg-[#E7E9F6] flex flex-col md:flex-row justify-between p-10">
          <div className="flex flex-col justify-center">
            <p className="text-[40px] md:text-[50px]">Find Your</p>
            <p className="text-[40px] md:text-[50px] font-bold">
              Favorite <span className="text-[#E60023]">Food</span>
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Order food from the best restaurants, local favorites, and online
              vendors using the app or web.
            </p>
            <button className="bg-[#E60023] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#C3001B] transition">
              Order here
            </button>
          </div>
          <div className="w-full md:w-[60%] flex justify-center mt-8 md:mt-0">
            <img src={young} alt="Young Person Enjoying Food" className="max-w-full h-auto" />
           </div>
        </div>

        <hr />

        <main className="my-10 text-center">
          <p className="my-5 font-bold text-2xl">Want to become a member?</p>

          {/* Card section */}
          <div className="flex flex-wrap gap-8 justify-center p-5">
            {/* Card 1 */}
            <div className="w-full sm:w-[270px] border rounded-lg bg-white shadow p-4 hover:shadow-lg transition">
              <div className="w-[250px] h-[250px] mx-auto">
                <img src={App} alt="App" className="object-contain" />
              </div>
              <p className="font-bold text-2xl mt-4">Try the app</p>
              <p className="text-sm text-gray-500 my-3">
                Discover the best restaurants and vendors near you all in one place.
              </p>
              <button className="block mx-auto text-white bg-[#E60023] font-bold px-5 py-2 rounded-md hover:bg-[#C3001B] transition">
                Download Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[270px] border rounded-lg bg-[#fee1bc] shadow p-4 hover:shadow-lg transition">
              <div className="w-[250px] h-[250px] mx-auto">
                <img className="w-full h-full object-contain" src={Merchant} alt="Merchant" />
              </div>
              <p className="font-bold text-2xl mt-4">Become a Merchant</p>
              <p className="text-sm text-gray-500 my-3">
                Partner with us and reach a larger audience.
              </p>

              <Link className="block mx-auto text-white bg-[#E60023] font-bold px-5 py-2 rounded-md hover:bg-[#C3001B] transition" to="/signup" > Sign Up Now </Link>
             
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[270px] border rounded-lg bg-[#d1c3ff] shadow p-4 hover:shadow-lg transition">
              <div className="w-[250px] h-[250px] mx-auto">
                <img src={Rider} alt="Rider" className="object-contain" />
              </div>
              <p className="font-bold text-2xl mt-4">Become a Rider</p>
              <p className="text-sm text-gray-500 my-3">
                Join our delivery network and start earning.
              </p>
              <Link className="block mx-auto text-white bg-[#E60023] font-bold px-5 py-2 rounded-md hover:bg-[#C3001B] transition" to="/ridersignup" > Apply Now </Link>

                        </div>
          </div>

          <div className="my-10 w-[90%] sm:w-[40%] p-3 mx-auto">
            <p className="text-center text-gray-600">
              Join us today and unlock exclusive benefits with access to premium content and special offers.
            </p>
          </div>
        </main>

        {/* African Cuisine section */}
        <main className="py-5 my-5">
          <p className="font-bold text-xl text-center my-3">Our Best Sellers of the Week</p>

          <p className="font-bold text-lg text-center">African Cuisine</p>

          {/* Cards section */}
          <div className="flex flex-wrap gap-8 justify-center px-[5%] md:px-[10%]">
            {[
              { name: "Fried Chicken", price: "#10,000", image: chicken },
              { name: "Hamburger", price: "#3,000", image: hamburger },
              { name: "Pizza", price: "#9,000", image: pizza },
              { name: "Fried Rice", price: "#4,500", image: friedrice },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[220px] h-[250px] bg-white rounded-lg shadow p-3 hover:shadow-lg transition"
              >
                <div className="border h-[150px] w-[150px] rounded-full mx-auto overflow-hidden">
                  <img src={item.image} alt={item.name} className="object-cover h-full w-full" />
                </div>
                <div className="flex justify-between my-4">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="font-bold text-sm">{item.price}</p>
                </div>
                <p>⭐⭐⭐⭐</p>
              </div>
            ))}
          </div>

          <p className="text-center my-5 text-gray-600">
            We bring you the best sellers and highly rated African cuisine of the week in various categories.
          </p>
        </main>

        {/* Igbadun Extra section */}
        <main className="py-5">
          <p className="font-bold text-lg text-center">Igbadun Extra</p>

          <div className="flex flex-wrap gap-8 justify-center px-[5%] md:px-[10%]">
            {[
              { name: "Shawarma", price: "#2,800", image: chicken },
              { name: "Jollof Rice", price: "#3,000", image: hamburger },
              { name: "Chicken & Chips", price: "#6,000", image: pizza },
              { name: "Oven Chicken", price: "#15,000", image: friedrice },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[220px] h-[250px] bg-white rounded-lg shadow p-3 hover:shadow-lg transition"
              >
                <div className="border h-[150px] w-[150px] rounded-full mx-auto overflow-hidden">
                  <img src={item.image} alt={item.name} className="object-cover h-full w-full" />
                </div>
                <div className="flex justify-between my-4">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="font-bold text-sm">{item.price}</p>
                </div>
                <p>⭐⭐⭐⭐</p>
              </div>
            ))}
          </div>

          <p className="text-center my-5 text-gray-600">
            We bring you the best sellers and highly rated Igbadun Extra of the week in different categories.
          </p>
        </main>

        {/* Newsletter */}
        <div className="bg-[#FF4500] text-center w-[90%] sm:w-[750px] rounded-2xl my-4 mx-auto py-10">
          <p className="text-3xl text-white my-3">Subscribe to get the latest offers</p>
          <p className="text-white">Stay up to date with our latest updates and products.</p>

          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center my-3">
            <input
              className="placeholder-gray-400 rounded py-2 px-3 w-full sm:w-[40%] outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="text-white bg-black rounded py-2 px-3 hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
