import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Rizky" />
        <FunctionalComponent nama="Rizko" />
      </div>
    );
  }
}

export default Komponen;
