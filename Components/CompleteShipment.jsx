// import { useState } from "react";

// export default ({ completeModal, setCompleteModal, completeShipment }) => {
//   const [completeShip, setCompleteShip] = useState({
//     recevier: "",
//     index: "",
//   });

//   const changeStatus = async () => {
//     completeShipment(completeShip);
//   };
//   return completeModal ? (
//     <div className="fixed inset-0 z-10 overflow-y-auto">
//       <div
//         className="fixed inset-0 w-full h-full bg-black opacity-40"
//         onClick={() => setCompleteModal(false)}
//       ></div>
//       <div className="flex items-center min-h-screen px-4 py-8">
//         <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//           <div className="flex justify-end">
//             <button
//               className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
//               onClick={() => setCompleteModal(false)}
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
//               Complete Shipment
//             </h4>

//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="relative mt-3">
//                 <input
//                   type="text"
//                   placeholder="recevier"
//                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                   onChange={(e) =>
//                     setCompleteShip({
//                       ...completeShip,
//                       recevier: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="relative mt-3">
//                 <input
//                   type="number"
//                   placeholder="ID"
//                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                   onChange={(e) =>
//                     setCompleteShip({
//                       ...completeShip,
//                       index: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               <button
//                 onClick={() => changeStatus()}
//                 className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
//               >
//                 Complete Shipment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// };


import { useState } from "react";

export default function CompleteShipmentModal({ completeModal, setCompleteModal, completeShipment }) {
  const [completeShip, setCompleteShip] = useState({
    recevier: "",
    index: "",
  });

  const changeStatus = async () => {
    completeShipment(completeShip);
  };

  if (!completeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-400 bg-opacity-90 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl border border-indigo-100">
        {/* Close Button */}
        <div className="absolute top-3 right-3">
          <button
            className="text-indigo-500 hover:text-indigo-700 transition"
            onClick={() => setCompleteModal(false)}
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
        </div>

        {/* Modal Content */}
        <div className="text-center space-y-5">
          <h2 className="text-2xl font-bold text-indigo-700">
            ✅ Complete Shipment
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 text-left"
          >
            {/* Receiver Input */}
            <div>
              <label className="block text-sm font-medium text-indigo-600 mb-1">
                Receiver Address
              </label>
              <input
                type="text"
                placeholder="Receiver address"
                className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                onChange={(e) =>
                  setCompleteShip({ ...completeShip, recevier: e.target.value })
                }
              />
            </div>

            {/* ID Input */}
            <div>
              <label className="block text-sm font-medium text-indigo-600 mb-1">
                Product ID
              </label>
              <input
                type="number"
                placeholder="Enter ID"
                className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                onChange={(e) =>
                  setCompleteShip({ ...completeShip, index: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={changeStatus}
              className="w-full py-2 font-semibold bg-teal-500 text-white rounded-lg hover:bg-teal-600 active:bg-teal-700 transition"
            >
              Complete Shipment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
