import React from "react";

const LocationSearchPanel = (props) => {
  // Sample array of location

  const locations = [
    "First Floor,623-A, Block-C, Indirapuram, Noida",
    "Second CrossStreet,32-C, KrishnaNagar , Mathura",
    "NIET, Plot-19, knowledge Park-3, Greater Noida",
    "23-A, Second Floor, Block-E, Beta-1, Greater Noida",
  ];
  return (
    <div>
      {/* This is just a sample data */}

      {locations.map(function (elem,idx) {
        return (
          <div key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl  my-2 justify-start gap-4"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex justify-center items-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
