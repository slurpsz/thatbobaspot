import React from 'react'
import { FaRegStar } from "react-icons/fa"

const Menu = () => {
  return (
    <div>
      <div>
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
      <div className="grid sm:grid-cols-2">
        <div>

          <img
            src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-50669000000000000/menu/items/6/item-500000002472784706_1588185006.png?size=medium"
            alt="taro smoothie"
            className="w-60 ml-48 "
          />
          
        </div>
        <div className="mt-5">
          <h2 className="text-2xl pb-10">Blended Goodness</h2>
          <ul>
            <li>Strawberry Smoothie</li>
            <li>Mango Smoothie</li>
            <div className="flex flex-row">
              <li>Taro Smoothie</li>
              <div className="mt-0.5 ml-1">
                <FaRegStar />
              </div>
            </div>
            <li>Strawberry Banana Smoothie</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img
            src="https://i.pinimg.com/564x/d8/ac/ad/d8acad0a8dfecfb1b9cce096c2aa4bb5.jpg"
            alt="peach white tea"
            className="w-60 py-5 ml-48"
          />
        </div>
        <div>
          <h2 className="text-2xl pb-10 pt-10">Fruit Teas</h2>
          <ul>
            <li>Peach Strawberry GT/BT</li>
            <div className="flex flex-row">
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
      <div className="grid grid-cols-2">
        <div>
          <img
            src="https://i.pinimg.com/736x/3b/89/2c/3b892c45b35c1c056c786bb960525511.jpg"
            alt="milk tea with boba on top"
            className="w-60 ml-48"
          />
        </div>
        <div>
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
            <div className="flex flex-row">
              <li>Strawberry Milk Tea</li>
              <div className="mt-0.5 ml-1">
                <FaRegStar />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu