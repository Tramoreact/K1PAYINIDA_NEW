export type CategoryProps = {
  _id: string;
  category_name: string;
  sub_category: {
    sub_category_name: string;
    _id: string;
  };
  __v: number;
};

export type ProductProps = {
  tramoOperatorId: string;
  _id: string;
  productStatus: string;
  category: string;
  subcategoryName: string;
  subcategory: string;
  productName: string;
  rechargeCircle: string;
  totalVendors: any[];
  activeVendors: string;
  commissionChangeValue: string;
  MaxRechargeLimit: string;
  productLogoUrl: string;
  transactionType: string;
  commissionStructure: string;
  commSurchMax: string;
  productFor: string;
  productDescription: string;
  planProvider: string;
  product_logo: string;
  actionWallet: string;
  directAgentVendor: string;
  neoNetworkVendor: string;
  apiUserVendor: string;
  isGST: true;
  isTDS: true;
  ekoOperatorId: number;
  highCommissionChannel: number;
  location: string;
  bbpsParams: any[];
  bbpsBillFetchResponse: number;
  maxMoneyTransferLimit: number;
  operatorid: string;
  __v: number;
};
