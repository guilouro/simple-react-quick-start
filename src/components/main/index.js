import React, { useState } from 'react';
import * as S from './styles';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      operation: 0,
      second: 0,
      value: 0,
    }
  }

  handleClick = (item) => {
    const { first, operation } = this.state;

    if (!first) {
      this.setState({ first: item });
      return;
    }

    if (!operation) {
      this.setState({ operation: item });
      return;
    }

    this.setState({ second: item });
    return;
   }

  doCalculate = () => {
    const { first, operation, second } = this.state;

    const operations = {
      '+': this.sum,
      '*': this.multiply,
      '/': this.division,
      '-': this.subtract,
    }

    console.log(operation)

    const value = operations[operation](first, second);
    this.setState({ value });
  }

  sum = (first, second) => first + second

  division = (first, second) => first / second

  multiply = (first, second) => first * second

  subtract = (first, second) => first - second

  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ['-', '*', '/', '+'];

    const { first, operation, second, value } = this.state;
    return (
      <section>
        <div className="display">
          {first || ''} {operation || ''} {second || ''} {value ? ` = ${value}` : ''}
        </div>
        <div className="operartions">
          {operations.map(operation => (
            <S.Button
              key={operation}
              onClick={() => this.handleClick(operation)}
            >
              {operation}
            </S.Button>
          ))}
        </div>
        <div className="numbers">
          {numbers.map(number => (
            <S.Button
              key={number}
              onClick={() => this.handleClick(number)}
            >
              {number}
            </S.Button>
          ))}
        </div>

        <S.Button onClick={this.doCalculate}>
          =
        </S.Button>

      </section>
    )
  }
}


export default Main;
