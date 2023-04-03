export interface UserInfo {
  encodedKey: string;
  id: string;
  state: string;
  creationDate: Date;
  lastModifiedDate: Date;
  activationDate: Date;
  approvedDate: Date;
  firstName: string;
  lastName: string;
  homePhone: string;
  emailAddress: string;
  preferredLanguage: string;
  gender: string;
  clientRoleKey: string;
  loanCycle: number;
  groupLoanCycle: number;
}
