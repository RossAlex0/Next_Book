export type ApiResponse = {
  statusCode: number;
  nbItems: number;
  data: ApiData[];
};

export type ApiData = {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
};

export type VolumeInfo = {
  title: string;
  authors: string[];
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  pageCount: number;
  publishedDate: number;
  description?: string;
  categories?: string[];
};

export type SaleInfo = {
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
};
