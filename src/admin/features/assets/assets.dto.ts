export interface AssetModel {
  id: number;
  url: string;
  type: string;
  blurhash: string;
}

export interface AddAssets {
  file?: Blob;
}
