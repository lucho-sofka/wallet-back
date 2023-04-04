export interface TransferBodyRequest {
  headerRQ: HeaderRQ;
  securityRQ: SecurityRQ;
  messageRQ: MessageRQ;
}

export interface HeaderRQ {
  msgId: string;
  timestamp: string;
}

export interface MessageRQ {
  digitalService: string;
  general: General;
  orderer: Orderer;
  beneficiaries: Beneficiary[];
}

export interface Beneficiary {
  beneficiaryType: string;
  beneficiaryId: string;
  account: Account;
  transactionReference: string;
  beneficiaryCustomerName: string;
  beneficiaryCustomerPhone: string;
  beneficiaryCustomerAddress: string;
  beneficiaryCustomerCity: string;
  additionals: Additionals;
}

export interface Account {
  legacyId: LegacyID;
  othersId: OthersID;
}

export interface LegacyID {
  branchId: string;
  accountType: string;
  accountNumber: string;
  tokenizedAccount: string;
}

export interface OthersID {
  identificationType: string;
  identificationId: string;
  tokenizedAccount: string;
}

export interface Additionals {
  ADD01: string;
}

export interface General {
  transactionDetails: string;
  transactionId: string;
  transactionDescription: string;
  chargesType: string;
  transactionAmount: string;
  channellReference: string;
  transactionCurrency: string;
}

export interface Orderer {
  additionals: Additionals;
}

export interface SecurityRQ {
  channelId: string;
  profile: string;
  hostId: string;
  userId: string;
}
