import { api } from "./api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("Service: getWeatherByCityService", () => {
  it("should be return weathear api data formatted", async () => {
    jest.spyOn(api, "get",).mockResolvedValue({ data: mockWeatherAPIResponse })

    const response = await getWeatherByCityService({ latitude: 0, longitude: 0 })
    expect(response).toHaveProperty('today')
  })
})