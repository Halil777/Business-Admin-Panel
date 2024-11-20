import { Api, ApiFormData } from "../../core/api.instance";
import { AddAssets, AssetModel } from "./assets.dto";

export class AssetsService {
  static async getAssets(): Promise<AssetModel[]> {
    try {
      const result = await Api.get<AssetModel[]>("/assets");
      return result.data;
    } catch (err) {
      throw new Error();
    }
  }

  static async addAssets(body: AddAssets): Promise<boolean> {
    try {
      const formData = new FormData();
      formData.append("file", body.file!);
      const result = await ApiFormData.post("/assets", formData);
      return result.status >= 200 && result.status < 300;
    } catch (err) {
      return false;
    }
  }

  static async deleteAssets(id: string): Promise<boolean> {
    try {
      const result = await Api.delete(`/assets/${id}`);
      return result.status >= 200 && result.status < 300;
    } catch (err) {
      return false;
    }
  }
}
