import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { UserInfo } from '../dto/UserInfo';
import { AccountInfo } from '../dto/AccountInfo';

@Injectable()
export class MambuService {
  constructor(private configService: ConfigService) { }

  // Obtenemos un cliente por ID
  async getClientById(clientId: string): Promise<UserInfo> {
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/clients/" + clientId;
    return await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/vnd.mambu.v2+json',
        Authorization:
          'Basic ' + window.btoa(this.configService.get<string>("USER_MAMBU") + ':' + this.configService.get<string>("PWD_MAMBU")),
      },
    }).then((res) => res.json());
  }

  // Obtenemos la cuenta de un cliente
  async getAccountById(accountId: string): Promise<AccountInfo> {
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/deposits/" + accountId
    return await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/vnd.mambu.v2+json',
        Authorization:
          'Basic ' + window.btoa(this.configService.get<string>("USER_MAMBU") + ':' + this.configService.get<string>("PWD_MAMBU")),
      }
    }).then((res) => res.json());
  }

  //Obtener todos los datos del usuario a partir de su ID.
  async getAllClientData(clientId: string){
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/clients/" + clientId + "/savings"
    const userData = await fetch(urlMambu, {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/vnd.mambu.v2+json',
        Authorization:
          'Basic ' + window.btoa(this.configService.get<string>("USER_MAMBU") + ':' + this.configService.get<string>("PWD_MAMBU")),
      }
    }).then((res) => res.json());
  return userData;
  }
}
