import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from '@components/SelectList'

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: "1", name: "Cabo Frio", latitude: 3423, longitude: 4546 },
      { id: "2", name: "Rio das Ostras", latitude: 333, longitude: 46 },
    ]

    const onPress = jest.fn();

    render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/cabo/i)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[0])
  });

  it('should not be able do show data when data is empty', () => {
    render(
      <SelectList 
        data={[]}
        onPress={() => {}}
        onChange={() => {}}      
      />
    )

    const options = screen.getByTestId('options')

    expect(options.children).toHaveLength(0)
  })
})

