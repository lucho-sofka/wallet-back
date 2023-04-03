import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { UserInfo } from '../dto/UserInfo';
import { AccountInfo } from '../dto/AccountInfo';
@Injectable()
export class MambuService {
  constructor(private configService: ConfigService) {}

  // Obtenemos un cliente por ID
  async getClientById(clientId: string) : Promise<UserInfo> {
    clientId = '445345901'
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/clients/" + clientId;
    return await fetch(urlMambu).then((res) => res.json());
  }

  // Obtenemos la cuenta de un cliente
  async getAccountById(accountId: string) : Promise<AccountInfo>{
    accountId = '99887766'
    const urlMambu = this.configService.get<string>("URL_MAMBU") + "/deposits/" + accountId
    return await fetch(urlMambu).then((res) => res.json());
  }

}
