import { v4 } from "uuid";

export class Id {
    public generate():string{
        return v4()
    }
}