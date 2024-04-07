import { Encryption } from "../../infrastructure/services/cifrado";
import bycript from 'bcrypt';

export class EncryptionService implements Encryption{

    Encryption(password: string): string {
        const encryptionPassword = bycript.hashSync(password, 10);
        return encryptionPassword;
    }

}