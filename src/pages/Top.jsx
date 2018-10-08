import React from "react";
import ReactDOM from 'react-dom';

class Top extends React.Component {

  state = {
    num: 0
  }

  clickHandler = () => {
    console.log("click")
    this.setState({ num: this.state.num + 1})
  }

  render() {
    return (
      <div>
        <p>トップページ</p>
        <button onClick={() => this.clickHandler()}>ボタン</button>
        <p>カウント：{this.state.num}</p>
        <p><a href="about">about</a></p>
        <img src="assets/img/react.png" alt=""/>
      </div>
    )
  }
}


ReactDOM.render(
  <Top />, document.getElementById('app')
);

if (module.hot) {
  console.log('===== Top module update =====');
  module.hot.accept(Top, () => {
    ReactDOM.render(<Top />, document.getElementById('app'))
  })
}
