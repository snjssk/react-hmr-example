import React from "react";
import ReactDOM from 'react-dom';
import FormContainer from "../../components/container/FormContainer";

class Profile extends React.Component {

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
        <p>Profile</p>
        <button onClick={() => this.clickHandler()}>ボタン</button>
        <p>カウント：{this.state.num}</p>
        <p><a href="./">Home</a></p>
      </div>
    )
  }
}


ReactDOM.render(
  <Profile />, document.getElementById('app')
);

if (module.hot) {
  console.log('===== Profile module update =====');
  module.hot.accept(Profile, () => {
    ReactDOM.render(<FormContainer />, document.getElementById('app'))
  })
}


