
import { Md5 } from "md5-typescript";

export class GetHasMD5 {

    public static hashMd5(ts: any, publickey: any, privatekey: any) {
        const stringToHash = ts + privatekey + publickey;
        return Md5.init(stringToHash);
    }
}