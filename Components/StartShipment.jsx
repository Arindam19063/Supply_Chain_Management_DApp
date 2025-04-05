// import { useState } from "react";
// import { Str1 } from "../Components/index";

// export default ({ startModal, setStartModal, startShipment }) => {
//   const [getProduct, setGetProduct] = useState({
//     reveiver: "",
//     index: "",
//   });

//   const startShipping = () => {
//     startShipment(getProduct);
//   };
//   return startModal ? (
//     <div className="fixed inset-0 z-10 overflow-y-auto">
//       <div
//         className="fixed inset-0 w-full h-full bg-black opacity-40"
//         onClick={() => setStartModal(false)}
//       ></div>
//       <div className="flex items-center min-h-screen px-4 py-8">
//         <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//           <div className="flex justify-end">
//             <button
//               className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
//               onClick={() => setStartModal(false)}
//             >
//               <Str1 />
//             </button>
//           </div>
//           <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
//             <h4 className="text-lg font-medium text-gray-800">
//               Start The Shipping
//             </h4>

//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="relative mt-3">
//                 <input
//                   type="text"
//                   placeholder="receiver"
//                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                   onChange={(e) =>
//                     setGetProduct({
//                       ...getProduct,
//                       reveiver: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="relative mt-3">
//                 <input
//                   type="text"
//                   placeholder="Id"
//                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                   onChange={(e) =>
//                     setGetProduct({
//                       ...getProduct,
//                       index: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               <button
//                 onClick={() => startShipping()}
//                 className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
//               >
//                 Start Shipment
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
import { Str1 } from "../Components/index";

export default function StartShipmentModal({ startModal, setStartModal, startShipment }) {
  const [getProduct, setGetProduct] = useState({
    reveiver: "",
    index: "",
  });

  const startShipping = () => {
    startShipment(getProduct);
  };

  if (!startModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-400 bg-opacity-90 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl border border-indigo-100">
        {/* Close Button */}
        <div className="absolute top-3 right-3">
          <button
            className="text-indigo-500 hover:text-indigo-700 transition"
            onClick={() => setStartModal(false)}
          >
            <Str1 />
          </button>
        </div>

        <div className="text-center space-y-5">
          <h2 className="text-2xl font-bold text-indigo-700">
            📦 Start The Shipping
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
                  setGetProduct({ ...getProduct, reveiver: e.target.value })
                }
              />
            </div>

            {/* ID Input */}
            <div>
              <label className="block text-sm font-medium text-indigo-600 mb-1">
                Product ID
              </label>
              <input
                type="text"
                placeholder="Enter ID"
                className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                onChange={(e) =>
                  setGetProduct({ ...getProduct, index: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={startShipping}
              className="w-full py-2 font-semibold bg-teal-500 text-white rounded-lg hover:bg-teal-600 active:bg-teal-700 transition"
            >
              Start Shipment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
