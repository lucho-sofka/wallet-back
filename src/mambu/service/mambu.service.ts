import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserInfo } from "../dto/UserInfo";
import { AccountInfo } from "../dto/AccountInfo";

@Injectable()
export class MambuService {
  constructor(private configService: ConfigService) {}

  // Obtenemos un cliente por ID
  async getClientById(clientId: string): Promise<UserInfo> {
    const urlMambu =
      this.configService.get<string>("URL_MAMBU") + "/clients/" + clientId;
    return await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.mambu.v2+json",
        Authorization:
          "Basic " +
          Buffer.from(
            this.configService.get<string>("USER_MAMBU") +
              ":" +
              this.configService.get<string>("PWD_MAMBU"),
            "utf8"
          ).toString("base64"),
      },
    }).then((res) => res.json());
  }

  // Obtenemos la cuenta de un cliente
  async getAccountById(accountId: string): Promise<AccountInfo> {
    const urlMambu =
      this.configService.get<string>("URL_MAMBU") + "/deposits/" + accountId;
    return await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.mambu.v2+json",
        Authorization:
          "Basic " +
          Buffer.from(
            this.configService.get<string>("USER_MAMBU") +
              ":" +
              this.configService.get<string>("PWD_MAMBU"),
            "utf8"
          ).toString("base64"),
      },
    }).then((res) => res.json());
  }

  // Obtenemos las transacciones de un cliente (historial movimientos)
  //{{urlmambu}}/deposits/:depositAccountId/transactions

  async getClientTransactions(accountId: string): Promise<AccountInfo> {
    const urlMambu =
      this.configService.get<string>("URL_MAMBU") +
      "/deposits/" +
      accountId +
      "/transactions";
    return await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.mambu.v2+json",
        Authorization:
          "Basic " +
          Buffer.from(
            this.configService.get<string>("USER_MAMBU") +
              ":" +
              this.configService.get<string>("PWD_MAMBU"),
            "utf8"
          ).toString("base64"),
      },
    }).then((res) => res.json());
  }
}
