import "./Concepts.css";
import Concept from "./Concept";

function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept concept={props.concepts[0]} />
      <Concept concept={props.concepts[1]} />
      <Concept concept={props.concepts[2]} />
    </ul>
  );
}

export default Concepts;
