import React from 'react';
import './assets/styles/style.css';
import defaultDataset from "./dataset"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currenrId: 'init',
      dataset: defaultDataset,
      open: false
    }
  }
  render() {
    return (
      <section className="section center">
        <div className="box">

        </div>
      </section>
    );
  }
}
