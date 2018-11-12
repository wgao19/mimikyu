import React from "react";
import { Container, Side } from "side-by-side";
import s from "./App.module.css";

const main = {
  0: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?"
};

const illustration = {
  0: "I had fun"
};

class App extends React.Component {
  render() {
    return (
      <Container
        main={main}
        illustration={illustration}
        thread={[0]}
        className={s.container}
      >
        <Side
          className={s.illustration}
          renderSide={({ illustration }) => <div>{illustration}</div>}
        />
        <Side renderSide={({ main }) => <div>{main}</div>} />
      </Container>
    );
  }
}

export default App;
