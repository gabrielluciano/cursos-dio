import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      copo: "água",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        copo: "suco",
      });
    }, 2000);
  }

  alterarCopo = () => {
    this.setState({
      copo: "refrigerante",
    });
  };

  render() {
    const { clock, copo } = this.state;

    return (
      <div>
        <h2>{clock}</h2>
        <button onClick={this.alterarCopo}>{copo}</button>
      </div>
    );
  }
}

export default ClassComponent;
