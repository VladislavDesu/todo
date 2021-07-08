import { useHistory } from "react-router-dom";
import "./Modal.scss";
const ModalItem = () => {
   let history = useHistory();
   let back = (e) => {
      e.stopPropagation();
      history.goBack();
   };
   console.log(back);

   return (
      <div className="modal">
         <div className="modal-overlay" onClick={back}></div>
         <div className="modal-content">
            <div className="modal-head">
               <h2 className="modal-title">Modal 1</h2>
               <button className="modal-btn-close" onClick={back}>
                  close
               </button>
            </div>
            <div className="modal-body">I`m Modal window</div>
            <div className="modal-footer">
               <button>Save</button>
            </div>
         </div>
      </div>
   );
};

export default ModalItem;
