import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from "."

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 124 },
      { id: '2', name: 'Butia', latitude: 765, longitude: 123 },
    ]

    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => { }} onPress={onPress} />)

    const selectedCity = screen.getByText(/Butia/i)
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it("should not be show options when data props is empty", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => { }}
        onPress={() => { }}
      />
    )

    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0);
  })
})