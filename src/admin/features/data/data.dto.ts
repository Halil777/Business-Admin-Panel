export interface DataModel {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  parentId: number;
  created_at: Date;
  updated_at: Date;
  asset: Asset;
}

export interface Asset {
  id: number;
  url: string;
  type: string;
  blurhash: string;
}

export interface AddData {
  id?: string;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId?: number | undefined;
  parentId?: number | undefined;
}
