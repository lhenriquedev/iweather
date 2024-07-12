import type { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

const newCity: CityProps = {
  id: '1',
  latitude: 123,
  longitude: 456,
  name: 'São Paulo'
}

describe("Storage: cityStorage", () => {
  it("should be return null when doesnt has a city storaged", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it("should be return city storaged", async () => {
    await saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it("should be removed city from storage", async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})