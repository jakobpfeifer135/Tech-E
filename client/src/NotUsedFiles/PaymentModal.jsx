// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import PaymentForm from './PaymentForm';

// // Modal styles (customize as needed)
// const modalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// const PaymentModal = () => {
//   const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
//   const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

//   const openPaymentModal = () => setPaymentModalOpen(true);
//   const closePaymentModal = () => setPaymentModalOpen(false);

//   const openConfirmationModal = () => setConfirmationModalOpen(true);
//   const closeConfirmationModal = () => setConfirmationModalOpen(false);

//   const handlePayNow = () => {
//     openPaymentModal();
//   };

//   const handleConfirmOrder = () => {
//     // Perform any additional actions you need when the user confirms the order
//     // This could include sending the order to the server, updating state, etc.
//     closeConfirmationModal();
//     closePaymentModal();
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         {/* Your existing content */}

//         <div>
//           <button
//             onClick={handlePayNow}
//             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>

//       {/* Payment Modal */}
//       <Modal
//         isOpen={isPaymentModalOpen}
//         onRequestClose={closePaymentModal}
//         style={modalStyles}
//         contentLabel="Payment Modal"
//       >
//         <PaymentForm closeModal={closePaymentModal} openConfirmationModal={openConfirmationModal} />
//       </Modal>

//       {/* Confirmation Modal */}
//       <Modal
//         isOpen={isConfirmationModalOpen}
//         onRequestClose={closeConfirmationModal}
//         style={modalStyles}
//         contentLabel="Confirmation Modal"
//       >
//         <div className="text-center">
//           <p>Are you sure you are ready to checkout?</p>
//           <button
//             onClick={handleConfirmOrder}
//             className="bg-indigo-600 text-white py-2 px-4 rounded-md mt-4"
//           >
//             Confirm Order
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default PaymentModal;