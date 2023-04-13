import React, { useEffect } from "react";

function Card({ data, onCardClick}) {
  let init = false;
  // useEffect(() => {
  //   if (!init) {
  //     init = true;
  //     const elem = document.createElement("p");
  //     elem.innerHTML = data?.data?.cuisines;
  //     document.getElementById("cuisineElem").appendChild(elem);
  //   }
  // }, []);
  return (
    <div
      data-testid="cards_test"
      onClick={() => onCardClick(data)}
      className="card_wrapper"
     
    >
      <div className="container">
        <div className="image_container">
          {data?.data?.ribbon?.map((elem,index) => {
            return elem.type === "PROMOTED" ? (
              <div key={index} className="ribbon">PROMOTED</div>
            ) : (
              ""
            );
          })}
          <div className="image">
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data?.data?.cloudinaryImageId}`}
              alt="Restraunt image"
              loading="lazy"
              width={"297px"}
              height={"187px"}
            />
          </div>
        </div>
        <div className="address_container">
          <div className="name">{data?.data?.name}</div>
          <div className="address">{data?.data?.address}</div>
        </div>
        <div className="utils_container">
          <div
            className={`rating ${
              data.data.avgRating < 3.5 ? "bad_rating" : "good_rating"
            }`}
          >
            &#9734;{data?.data?.avgRating}
          </div>
          <div>•</div>
          <div className="time">{data?.data?.sla?.deliveryTime} MINS</div>
          <div>•</div>
          <div className="cost">{`${data.data.costForTwoString}`} </div>
        </div>
        <div className="discount_container"></div>
      </div>
    </div>
  );
}

export default Card;
