import { fireEvent, render, screen } from "@testing-library/react-native"
import { Search } from "."

describe("Screen: Search", () => {
  it('should be show city option', () => {
    render(<Search />)
    const searchInput = screen.getByTestId('search-input')
    fireEvent.changeText(searchInput, 'São Paulo')
  })
})