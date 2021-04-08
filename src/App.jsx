import React from 'react';
import './assets/styles/style.scss';
import defaultDataset from "./dataset"
import {AnswersList} from "./components"
import {Chats} from "./components"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const initAnswer = initDataset.answers

    this.setState( {
      answers: initAnswer
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const chat = {
      text: initDataset.question,
      type: 'question'
    }

    const chats = this.state.chats
    chats.push(chat)

    this.setState( {
      chats: chats
    })
  }

  componentDidMount() {
    this.initChats()
    this.initAnswer()
  }

  render() {
    return (
      <section className="l-section c-center">
        <div className="p-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
