import React from "react";

//import data
import data from "../data/NikeProducts.json";
import { Link } from "react-router-dom";

const NikeProducts = () => {
  //destructure data
  const { shoes} = data;

  return (
    <div className="container max-w-[100%] mt-[200px]">
      <div className="relative ">
        <div>
          <div className="h-[100vh] overflow-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-9 mt-[150px] transition-all">
              {/* map first data */}
              {shoes.map((products) => {
                //destructure product shoes data
                const { id, name, price, gender, img } = products;

                return (
                  <div
                    key={id}
                    className="relative flex flex-col items-center text-center "
                  >
                    {/* <h1 className="font-medium text-[3rem] absolute left-2">{id}</h1> */}
                    <h1 className="font-medium text-[1.5rem] lg:text-[1.7rem] xl:text-[1.9rem] absolute -top-5">
                      {name}
                    </h1>
                    <div>
                      <Link to={`/shoedescription/${id}`}>
                        <img className=" rounded-xl" src={img} alt="" />
                      </Link>
                    </div>
                    <p className="font-light text-[1rem] absolute bottom-0 left-4">
                      {gender}
                    </p>
                    <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                      $ {price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikeProducts;
