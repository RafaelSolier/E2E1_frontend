import Api from "@services/api";
import { RideByUserResponse } from "@interfaces/ride/RideByUserResponse";

export async function getRidesByUser(
  page: number,
  size: number,
): Promise<RideByUserResponse[]> {
  const Apis = await Api.getInstance();
  const response = await Apis.get<null, RideByUserResponse[]>({
    url: `/ride/user?page=${page}&size=${size}`,
  });
  return response.data;
}