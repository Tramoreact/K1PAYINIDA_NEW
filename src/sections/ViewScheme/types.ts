export type AadhaarPayeRowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  chargeType: string;
  agentCharge: string;
  commissionType: string;
  distributorCommission: string;
  masterDistributorCommission: string;
};

export type AepsRowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  agentCommission: string;
  distributorCommission: string;
  masterDistributorCommission: string;
};

export type Dmt1RowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  ccfType: string;
  ccf: string;
  agentCommissionType: string;
  agentCommission: string;
  distributorCommissionType: string;
  distributorCommission: string;
  masterDistributorCommissionType: string;
  masterDistributorCommission: string;
};

export type Dmt2RowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  ccfType: string;
  ccf: string;
  agentCommissionType: string;
  agentCommission: string;
  distributorCommissionType: string;
  distributorCommission: string;
  masterDistributorCommissionType: string;
  masterDistributorCommission: string;
};

export type MatmRowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  agentCommission: string;
  distributorCommission: string;
  masterDistributorCommission: string;
};

export type MoneyTransferRowProps = {
  _id: string;
  minSlab: string;
  maxSlab: string;
  chargeType: string;
  agentCharge: string;
  commissionType: string;
  distributorCommission: string;
  masterDistributorCommission: string;
};

export type RechargeRowProps = {
  _id: string;
  productName: string;
  chargeType: string;
  masterDistributorCommission: string;
  distributorCommission: string;
  agentCommission: string;
};
