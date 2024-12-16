import React from "react";

const confirmRidePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => props.setVehiclePanelOpen(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex gap-5 items-center p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                First Floor, 623-A, Block-C
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Indirapuram, Noida</p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                First Floor, 623-A, Block-C
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Indirapuram, Noida</p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
              ₹193.20
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
          <div></div>
          
        </div>
        <button onClick={() =>{ props.setVehicleFoundOpen(true); props.setConfirmRidePanelOpen(false)}} className="w-full mt-5 bg-green-600 text-white rounded-lg font-semibold p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default confirmRidePanel;
