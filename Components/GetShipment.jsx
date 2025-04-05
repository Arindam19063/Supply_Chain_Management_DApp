// import { useState } from "react";

// export default ({ getModel, setGetModel, getShipment }) => {
//   const [index, setIndex] = useState(0);
//   const [singleShipmentData, setSingleShipmentData] = useState();

//   const getshipmentData = async (index) => {
//     const getData = await getShipment(index);
//     setSingleShipmentData(getData);
//     console.log(getData);
//   };

//   const converTime = (time) => {
//     const newTime = new Date(time);
//     const dataTime = new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(newTime);

//     return dataTime;
//   };

//   return getModel ? (
//     <div className="fixed inset-0 z-10 overflow-y-auto">
//       <div
//         className="fixed inset-0 w-full h-full bg-black opacity-40"
//         onClick={() => setGetModel(false)}
//       ></div>
//       <div className="flex items-center min-h-screen px-4 py-8">
//         <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//           <div className="flex justify-end">
//             <button
//               className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
//               onClick={() => setGetModel(false)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5 mx-auto"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
//             <h4 className="text-lg font-medium text-gray-800">
//               Product Tracting Details
//             </h4>

//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="relative mt-3">
//                 <input
//                   type="number"
//                   placeholder="Id"
//                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                   onChange={(e) => setIndex(e.target.value)}
//                 />
//               </div>

//               <button
//                 onClick={() => getshipmentData(index)}
//                 className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
//               >
//                 Get details
//               </button>
//             </form>

//             {singleShipmentData == undefined ? (
//               ""
//             ) : (
//               <div className="text-left">
//                 <p>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
//                 <p>Recevier: {singleShipmentData.receiver.slice(0, 25)}...</p>
//                 <p>PickupTime: {converTime(singleShipmentData.pickupTime)}</p>
//                 <p>
//                   DeliveryTime: {converTime(singleShipmentData.deliveryTime)}
//                 </p>
//                 <p>Distance: {singleShipmentData.distance}</p>
//                 <p>Price: {singleShipmentData.price}</p>
//                 <p>Status: {singleShipmentData.status}</p>
//                 <p>
//                   Paid:{" "}
//                   {singleShipmentData.isPaid ? "Complete" : "Not Complete"}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// };


import { useState } from "react";

export default function ShipmentModal({ getModel, setGetModel, getShipment }) {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getshipmentData = async (index) => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };

  const converTime = (time) => {
    const newTime = new Date(time);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
  };

  if (!getModel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-400 bg-opacity-90 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl border border-indigo-100">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-indigo-500 hover:text-indigo-700 transition"
          onClick={() => setGetModel(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-indigo-700">
            🚚 Shipment Tracking
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3 text-left"
          >
            <input
              type="number"
              placeholder="Enter Shipment ID"
              className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
              onChange={(e) => setIndex(e.target.value)}
            />
            <button
              onClick={() => getshipmentData(index)}
              className="w-full py-2 font-semibold bg-teal-500 text-white rounded-lg hover:bg-teal-600 active:bg-teal-700 transition"
            >
              Get Details
            </button>
          </form>

          {singleShipmentData && (
            <div className="text-left mt-4 space-y-1 text-sm text-gray-800">
              <p>
                <span className="font-semibold text-indigo-600">Sender:</span>{" "}
                {singleShipmentData.sender.slice(0, 25)}...
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Receiver:</span>{" "}
                {singleShipmentData.receiver.slice(0, 25)}...
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Pickup Time:</span>{" "}
                {converTime(singleShipmentData.pickupTime)}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Delivery Time:</span>{" "}
                {converTime(singleShipmentData.deliveryTime)}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Distance:</span>{" "}
                {singleShipmentData.distance}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Price:</span>{" "}
                ${singleShipmentData.price}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Status:</span>{" "}
                {singleShipmentData.status}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Paid:</span>{" "}
                {singleShipmentData.isPaid ? (
                  <span className="text-green-600 font-semibold">✅ Complete</span>
                ) : (
                  <span className="text-red-500 font-semibold">❌ Not Complete</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
