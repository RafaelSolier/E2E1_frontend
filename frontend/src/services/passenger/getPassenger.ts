import Api from "@services/api";
import { PassengerResponseSelf } from "@interfaces/passenger/PassengerResponseSelf";

export async function getPassenger(): Promise<PassengerResponseSelf> {
  const Apis = await Api.getInstance();
  const response = await Apis.get<null, PassengerResponseSelf>({
    url: "/passenger/me",
  });
  return response.data;
}