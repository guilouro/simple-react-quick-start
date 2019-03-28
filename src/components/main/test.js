import React from 'react'
import Main from '.'
import { render, fireEvent, cleanup } from 'react-testing-library'

describe('Main', () => {
  afterEach(cleanup)

  it('Should sum correctly', () => {
    const { container, getByText } = render(<Main />)
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('='))

    // 2 + 7
    expect(container.firstChild.firstChild.textContent).toBe('9')

  })

  it('Should multiply correctly', () => {
    const { container, getByText } = render(<Main />)
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('x'))
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('='))

    // 2 x 7
    expect(container.firstChild.firstChild.textContent).toBe('14')

  })

  it('Should calculate with more than one decimal number', () => {
    const { container, getByText } = render(<Main />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('0'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))

    // 10 / 2
    expect(container.firstChild.firstChild.textContent).toBe('5')

  })

  it('Should calculate with more than one operation', () => {
    const { container, getByText } = render(<Main />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('='))

    // 12 - 7
    expect(container.firstChild.firstChild.textContent).toBe('5')

    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    // 5 + 5
    expect(container.firstChild.firstChild.textContent).toBe('10')

  })
})
