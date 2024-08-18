import { useParams } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";
import Delivery from "../components/Delivery";
import ClickAndCollect from "../components/ClickAndCollect";

function OrderOnline(props) {
  const { id } = useParams();
  props.passParams(id);

  return (
    <>
      {id === undefined && <ErrorPage />}
      {id === "delivery" && <Delivery />}
      {id === "click-and-collect" && <ClickAndCollect />}
    </>
  );
}

export default OrderOnline;
