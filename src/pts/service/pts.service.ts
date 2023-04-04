import { Injectable } from '@nestjs/common';
import { TransferBodyRequest } from '../dto/TransferBodyRequest';
@Injectable()
export class PtsService {
  // Enviar datos de la transferencia a PTS
  async sendInfoTransfer(identificationId: string, transactionAmount: string) {
    //construimos la petición
    const urlBase = `https://api-parnters-sandbox.2innovateit.com/RSAdaptorFE/api/v2/own-channels/debit-transfer/internal/online/single-currency/third-account/account/AK-MAMBU-99887766/transfer`;

    const transferBodyRequest: TransferBodyRequest = {
      headerRQ: {
        msgId: 'MSG27548',
        timestamp: '2023-02-20T14:13:11.499Z',
      },
      securityRQ: {
        channelId: 'T3_APPMOBIL_IN',
        profile: 'TEST',
        hostId: 'IP',
        userId: 'steveen.rodriguez',
      },
      messageRQ: {
        digitalService: 'T3_transferenciaentrecuentas',
        general: {
          transactionDetails: '',
          transactionId: 'E39227B5CE1B4850BC5328A9A52C3118',
          transactionDescription: 'Transferencia prueba uno',
          chargesType: '',
          transactionAmount: transactionAmount,
          channellReference: 'T3_APPMOBIL_IN',
          transactionCurrency: 'COP',
        },
        orderer: {
          additionals: {
            ADD01: 'prueba de adicionales ordenante',
          },
        },
        beneficiaries: [
          {
            beneficiaryType: '',
            beneficiaryId: '',
            account: {
              legacyId: {
                branchId: '',
                accountType: '',
                accountNumber: '',
                tokenizedAccount: '',
              },
              othersId: {
                identificationType: 'MAMBU',
                identificationId: identificationId,
                tokenizedAccount: '',
              },
            },
            transactionReference: '',
            beneficiaryCustomerName: 'Juan Jose Perez',
            beneficiaryCustomerPhone: '087467231',
            beneficiaryCustomerAddress: '',
            beneficiaryCustomerCity: '',
            additionals: {
              ADD01: 'prueba de adicionales beneficiario',
            },
          },
        ],
      },
    };

    const response = await fetch(urlBase, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/pts-m1005v1+json",
        pCHANNEL: transferBodyRequest.securityRQ.channelId,
        Authorization: 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJwdHlpZCI6IkRBMzQxMEEzOThDNDRFQTdFMDUzMDEwMDAwN0YxRTc0IiwiYXVkIjoiT1dOIiwic3ViIjoiREEzNDEwQTM5OEM1NEVBN0UwNTMwMTAwMDA3RjFFNzQiLCJuYmYiOjE2NzE4MDQ3MDEsInNjb3BlIjoiW1wiQURNSU5cIixcIkJBQ0tfT0ZGSUNFXCIsXCJGVUxMX0FQSV9FWEVDVVRPUl9QVFNcIixcIkZVTkNUSU9OQUxfQ09OU1VMVEFOVFwiLFwiTU9OSVRPUlwiLFwiU0VDVVJJVFlcIixcIlRFQ0hOSUNBTF9DT05TVUxUQU5UXCJdIiwiaXNzIjoiYWRhcHRvck9BUyIsIm5hbWUiOiJhY29udHJlcmFzIiwiZXhwIjoxNjg3ODA0NzYwLCJpYXQiOjE2NzE4MDQ3NjEsImp0aSI6IjkzMWNjM2JjLWI2MzItNDE2YS04MGUzLWVhODNlY2VlYmEzNCJ9.eGGdbb3vPDdfG3rWjmZfMKsvU8PC2a_l5yySN--ghGU5ZBpDFCx9gGkudDjIqDORDnICvf3NxoOHVAdIZL5sQuBTnlhshBXOeThgVYhmTPB7bFd8YcSwAXrCg1dfvJ5urOawzwWz6ni2tHJkSYvQnDU87JlJFiMMeIs0-7AAc9mqgOUvV18ySn-wdqSVSCf5X34Dc9cNXfuiF8zeqZH-ggIWo3_NTSdsSeccsTZBUD5IP_jzEr7duGnInVgEHYNxnFxUS6iSXf-V-c2UyexJf13Doav3srlbvZyEQT-lJZ_OUZJqCFUECDul8Rk0uVfHAhzCAeKJQQa7cguWMUqYKQ', 
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(transferBodyRequest), // body data type must match "Content-Type" header
    });
    
    return response.json();

  }
}
