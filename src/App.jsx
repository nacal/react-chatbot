import React from 'react';
import './assets/styles/style.scss';
import defaultDataset from "./dataset"
import {AnswersList} from "./components"

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

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currenrId]
    const initAnswer = initDataset.answers

    this.setState( {
      answers: initAnswer
    })
  }

  componentDidMount() {
    this.initAnswer()
  }

  render() {
    return (
      <section className="section center">
        <div className="box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
