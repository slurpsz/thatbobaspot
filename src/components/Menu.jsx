import React from 'react'
import { FaRegStar } from "react-icons/fa"

const Menu = () => {
  return (
    <div>
      <div>
        {/* favorites and popular icons */}
        <div className="flex flex-row justify-center">
          <div className="mt-0.5">
            <FaRegStar />
          </div>
          <div className="ml-1">
            <p>- Popular</p>
          </div>
        </div>
        <div className="flex flex-row justify-center ml-12 pb-5">
          <div>
            <p>
              <b>
                <i>D</i>
              </b>{" "}
              - Contains Dairy
            </p>
          </div>
        </div>
      </div>
      {/* menu items */}
      <div className="grid lg:grid-cols-3 w-full">
        <div>
          <div>
            <img
              src="https://i.pinimg.com/564x/f4/22/0f/f4220fbb9cca26df0e605a3b0275c6dd.jpg"
              alt="mango smoothie"
              className="ml-48 w-60"
            />
          </div>
          <div className="mt-5 mr-14 text-center">
            <h2 className="text-2xl pb-10">Blended Goodness</h2>
            <ul>
              <li>Strawberry Smoothie</li>
              <li>Mango Smoothie</li>
              <div className="flex flex-row justify-center">
                <li>Taro Smoothie</li>
                <div className="mt-0.5 ml-1">
                  <FaRegStar />
                </div>
              </div>
              <li>Strawberry Banana Smoothie</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/564x/d8/ac/ad/d8acad0a8dfecfb1b9cce096c2aa4bb5.jpg"
              alt="peach white tea"
              className="w-60 ml-48"
            />
          </div>
          <div className="mt-5 mr-14 text-center">
            <h2 className="text-2xl pb-10">Fruit Teas</h2>
            <ul>
              <li>Peach Strawberry GT/BT</li>
              <div className="flex flex-row justify-center">
                <li>Peach White Tea</li>
                <div className="mt-0.5 ml-1">
                  <FaRegStar />
                </div>
              </div>
              <li>Lychee GT/BT</li>
              <li>Passionfruit GT/BT</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/564x/b6/4f/ed/b64fed217523388e647a838db03b283f.jpg"
              alt="milk tea with boba"
              className="w-60 ml-48"
            />
          </div>
          <div className="mt-5 mr-14 text-center">
            <h2 className="text-2xl pb-10">Milk Teas</h2>
            <ul>
              <li>
                Signature Milk Tea{" "}
                <b>
                  <i>D</i>
                </b>
              </li>
              <li>Jasmine Milk Tea</li>
              <li>Mango Milk Tea</li>
              <div className="flex flex-row justify-center">
                <li>Strawberry Milk Tea</li>
                <div className="mt-0.5 ml-1">
                  <FaRegStar />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* topping items */}
      <div>
        <h1 className='text-2xl text-center mt-20'>Toppings</h1>
        <ul className='text-center mt-10'>
          <li>Boba</li>
          <li>Lychee Jelly</li>
          <li>Crystal Boba</li>
          <li>Grass Jelly</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu