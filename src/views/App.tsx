import React, { ErrorInfo } from 'react';
import './App.css';

export interface AppProperty {
  message?: string;
  name?: string;
  changeUserName?: (name: string) => void;
  fetchAdvice?: () => void;
}

interface AppState {
  count: number;
  name: string;
}

export default class App extends React.Component<AppProperty, AppState> {
  constructor(props: AppProperty) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  public render() {
    return (
      <div className="App">
        <h3>「{this.props.message}」</h3>
        <button className="adviceButton" onClick={this.props.fetchAdvice}>
          FETCH ADVICE
        </button>
        <input type="text" value={this.state.name} onChange={e => this.onChangeName(e)} />
        <button className="changeNameButton" onClick={this.onClickChangeName}>
          CHANGE NAME
        </button>
        <h3>「{this.props.name}」</h3>
        <div>{this.state.count}</div>
        <button className="countUpButton" onClick={this.onClickCountUp}>
          COUNT UP
        </button>
      </div>
    );
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    //
  }

  private onClickCountUp = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  private onClickChangeName = () => {
    console.log('onClickChangeName name: ' + this.state.name);
    this.props.changeUserName && this.props.changeUserName(this.state.name);
  };

  private onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('onChangeName name: ' + e.target.value);
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };
}
