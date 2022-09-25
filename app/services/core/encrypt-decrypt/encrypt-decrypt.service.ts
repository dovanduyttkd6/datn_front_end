import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class EncryptDecryptService {
  CryptoTS;
  constructor() {
    // this.CryptoTS = require('crypto-ts');
  }
  key = environment.cryptoKey;
  // The set method is use for encrypt the value.
  encrypt(value) {
    if (typeof value !== undefined && value !== undefined && value !== null && value !== '')
      return this.CryptoTS.AES.encrypt(value.toString(), this.key);
    return '';
  }

  // The get method is use for decrypt the value.
  decrypt(value) {
    if (typeof value !== undefined && value !== undefined && value !== null && value !== '') {
      const bytes = this.CryptoTS.AES.decrypt(value.toString(), this.key);
      const plaintext = bytes.toString(this.CryptoTS.enc.Utf8);

      return plaintext;
    }
    return '';
  }
}
