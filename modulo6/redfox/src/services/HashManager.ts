import * as bcrypt from "bcryptjs";


export class HashManager {

    public generateHash = async (text: string): Promise<any> => {
        const rounds = 12;
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(text, salt);
        return result;
    }

    public compareHash = async(text: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(text, hash);
    }

}
export default new HashManager()