import React from 'react';

const ConformationModal = ({closeModal, handleDeleteProduct, modalData}) => {

  // console.log(modalData);
  return (
    <div>
      <div>
 
 <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
 <div className="modal">
   <div className="modal-box">
     <h3 className="font-bold text-lg"> Are you sure you want to delete?  </h3>
     <p className="py-4   "> If you delete <span className=' font-bold'>{modalData.productName}</span>. You Can't undone!! </p>
     <div className="modal-action">
       <label onClick={() => handleDeleteProduct(modalData)}   htmlFor="confirmation-modal" className="btn btn-primary btn-sm">Delete</label>
       <button onClick={closeModal}  className='btn btn-sm btn-outline '>Cancel</button>
     </div>
 
   </div>
 </div>
     </div>
    </div>
  );
};

export default ConformationModal;