// @flow
import React from "react";
import Context from "../../context";

/**
 * Controlls scrolling, pass down current content and illustration
 * may generalize to any number of illustrations
 */

type ContainerProps = {
  // main thread decides scroll position
  main: Object,
  thread: Array<number>

  // may generalize to any number of illustrations
  illustration: Object,
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      currentMain: null,
      currentIllustration: null
    };
  }
  componentDidMount() {
    const { main, illustration } = this.props;
    const { currentId } = this.state;
    this.setState({
      main: main[currentId],
      illustration: illustration[currentId]
    });
  }
  render() {
    const { main, illustration, thread, className } = this.props;
    return (
      <Context.Provider value={this.state}>
        <div className={className}>{this.props.children}</div>
      </Context.Provider>
    );
  }
}

export default Container;
