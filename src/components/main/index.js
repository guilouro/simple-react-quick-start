import React, { useState } from 'react'
import * as S from './styles'

const Main = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const operations = ['-', 'x', '/', '+']
  const [values, setValue] = useState([])

  const clear = () => setValue([])

  const calc = (first, operation, second) => {
    const operations = {
      '+': first + second,
      '-': first - second,
      'x': first * second,
      '/': first / second
    }

    return operations[operation]
  }

  const doCalculate = () => {
    const string = values.join('')
    const nums = string.match(/\d+/g)
    const signals = string.match(/[\W-x]/g)

    const result = signals.reduce((value, signal, idx) => (
      calc(Number(value), signal, Number(nums[idx + 1]))
    ), nums[0])

    setValue([result])
  }

  const handleClick = (item) => {
    setValue([...values, item])
  }

  return (
    <section>
      <S.Display>{values.length ? values : 0}</S.Display>

      <S.Operations>
        {operations.map(operation => (
          <S.Button
            key={operation}
            onClick={() => handleClick(operation)}
          >
            {operation}
          </S.Button>
        ))}
      </S.Operations>

      <S.Numbers>
        {numbers.map(number => (
          <S.Button
            key={number}
            onClick={() => handleClick(number)}
          >
            {number}
          </S.Button>
        ))}
        <S.Button onClick={doCalculate}>=</S.Button>
        <S.Button onClick={clear}>C</S.Button>
      </S.Numbers>
    </section>
  )
}

export default Main
