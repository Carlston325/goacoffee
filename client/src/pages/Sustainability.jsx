import { useParams } from "react-router-dom";
import SustainMain from "../components/SustainMain";
import SustainCoffee from "../components/SustainCoffee";
import SustainCupAndPackage from "../components/SustainCupAndPackage";
import SustainClimate from "../components/SustainClimate";
import SustainCommunities from "../components/SustainCommunities";

function Sustainability(props) {
  const { id } = useParams();
  props.passParams(id);

  return (
    <>
      {id === undefined && <SustainMain />}
      {id === "coffee" && <SustainCoffee />}
      {id === "cups-and-packaging" && <SustainCupAndPackage />}
      {id === "climate" && <SustainClimate />}
      {id === "communities" && <SustainCommunities />}
    </>
  );
}

export default Sustainability;
