import React from "react";
function Main({ id, name, hr }) {
  return (
    <>
      <h1>
        Hello {name} your id is {id}
      </h1>
      <br />
      <hr />
    </>
  );
}
class My extends React.Component {
  constructor({ name }) {
    super();
    this.name = name;
  }
  render() {
    return <>Hello {this.name}</>;
  }
}
let comp=[Main,My]
export default comp;
// export {My};
