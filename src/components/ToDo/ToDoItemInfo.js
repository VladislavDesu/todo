import { useParams } from "react-router-dom";

const ToDoItemInfo = () => {
   let { topicId } = useParams();
   return (
      <>
         <p>ToDo: {topicId}</p>
      </>
   );
};

export default ToDoItemInfo;
