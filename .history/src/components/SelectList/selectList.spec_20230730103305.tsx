import { render, screen } from "@testing-library/react-native"
import { SelectList } from "."

describe("Component: SelectList", () =>{
  it('should return the city details selected', () => {
    const data = [
      { id: '1', name: 'Cabo Frio', latitude: 3423, longitude:4546},
      { id: '2', name: 'Rio das Ostras', latitude: 333, longitude:46},
    ]
        render(
        <SelectList 
          data={data}
          onChange={() =>{}}
          onPress={() => {}}
        />
      )

      const selectedCity = screen.getByText(/cabo/i)
      console.log(selectedCity)
  })
})