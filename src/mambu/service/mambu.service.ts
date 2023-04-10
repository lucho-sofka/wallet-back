import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserInfo } from "../dto/UserInfo";
import { AccountInfo } from "../dto/AccountInfo";
import { UserData } from "../dto/UserData";
import cli from "@angular/cli";

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

  //Obtener todos los datos del usuario a partir de su ID.
  async getAllClientData(clientId: string){
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/clients/" + clientId + "/savings"
    //Obtengo las cuentas del cliente
    const clientAccounts = await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/vnd.mambu.v2+json',
        Authorization:
          'Basic ' + window.btoa(this.configService.get<string>("USER_MAMBU") + ':' + this.configService.get<string>("PWD_MAMBU")),
      }
    }).then((res) => res.json());

    //Obtengo cliente
    const client = await this.getClientById(clientId);

    //Filtro las cuentas del cliente por el nombre (también puede ser por id) así este filtro no se hace desde el front
    const requiredAccount = clientAccounts.filter((account) => account.name === "CTE_Sofka")[0];
    
    //Creo el objeto solamente con los datos que se precisan desde el front.
    const userData: UserData = {
      fullName: client.firstName + client.lastName,
      userAccount: {
        balance: requiredAccount.balance,
        availableBalance: requiredAccount.availableBalance
      }
    } 

    return userData;
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
