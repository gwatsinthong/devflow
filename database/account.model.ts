import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
    userID: Types.ObjectId;
    name: string;
    image?: string;
    password?: string;
    provider: string;
    providerAccountID: string;
}

const AccountSchema = new Schema<IAccount>({
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true }, 
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountID: { type: String, required: true },
}, {
    timestamps: true,
})

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;