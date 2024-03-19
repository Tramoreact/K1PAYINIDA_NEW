export type TransactionProps = {
  clientRefId: string;
  transactionType: string;
  productName: string;
  categoryName: string;
  agentDetails: {
    id: {
      _id: string;
      userCode: string;
      role: string;
      firstName: string;
      lastName: string;
      selfie: [string];
    };
    oldMainWalletBalance: number;
    newMainWalletBalance: number;
    oldAEPSWalletBalance: number;
    newAEPSWalletBalance: number;
    commissionAmount: number;
    creditedAmount: number;
    TDSAmount: number;
    GST: number;
  };
  distributorDetails: {
    id: {
      _id: string;
      userCode: string;
      role: string;
      firstName: string;
      lastName: string;
      selfie: [string];
    };
    oldMainWalletBalance: number;
    newMainWalletBalance: number;
    oldAEPSWalletBalance: number;
    newAEPSWalletBalance: number;
    commissionAmount: number;
    creditedAmount: number;
    TDSAmount: number;
  };
  masterDistributorDetails: {
    id: {
      _id: string;
      userCode: string;
      role: string;
      firstName: string;
      lastName: string;
      selfie: [string];
    };
    oldMainWalletBalance: number;
    newMainWalletBalance: number;
    oldAEPSWalletBalance: number;
    newAEPSWalletBalance: number;
    commissionAmount: number;
    creditedAmount: number;
    TDSAmount: number;
  };
  amount: number;
  credit: number;
  debit: number;
  TDS: number;
  GST: number;
  three_way_recoon: string;
  status: string;
  vendorUtrNumber: string;
  providerBank: string;
  moneyTransferSenderId: {
    remitterEmail: string;
    remitterFN: string;
    remitterLN: string;
    remitterMobile: string;
    remitterOccupation: string;
    _id: string;
  };
  moneyTransferBeneficiaryDetails: {
    bankName: string;
    accountNumber: string;
    mobileNumber: string;
    beneName: string;
    ifsc: string;
    beneEmail: string;
    relationship: string;
  };
  operator: {
    key1: string;
    key2: string;
    key3: string;
  };
  mobileNumber: string;
  createdAt: string;
  modeOfPayment: string;
  _id: string;
};
