import { Api } from "../../core/api.instance";
import { AddData, DataModel } from "./data.dto";

export class DataService {
  static async getData(): Promise<DataModel[]> {
    try {
      const result = await Api.get<DataModel[]>("/data");
      return result.data;
    } catch (err) {
      throw new Error();
    }
  }

  static async addData(body: AddData): Promise<boolean> {
    try {
      const result = await Api.post("/data", body);
      return result.status >= 200 && result.status < 300;
    } catch (err) {
      return false;
    }
  }

  static async updateData(id: string, body: AddData): Promise<boolean> {
    try {
      const result = await Api.patch("/data/" + id, body);
      return result.status >= 200 && result.status < 300;
    } catch (err) {
      return false;
    }
  }

  static async deleteData(id: string): Promise<boolean> {
    try {
      const result = await Api.delete(`/data/${id}`);
      return result.status >= 200 && result.status < 300;
    } catch (err) {
      return false;
    }
  }
}
