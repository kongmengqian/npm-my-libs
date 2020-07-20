import React from "react";
import ReactDOM from "react-dom";
import { Button, message } from "antd";
import A from "@/a";

interface Props {}

class App extends React.Component<Props, any, any> {
  public constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    message.success("你点了点我光秃秃的脑门");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>hello world!</h1>
        <A />
        <div>
          <Button type="primary" onClick={this.handleClick}>
            按钮
          </Button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
