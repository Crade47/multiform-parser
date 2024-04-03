import Busboy from "busboy"
import { Request, Response } from "express";
import internal from "stream";

export class ParserService {
	public readonly _storage: Storage;

	constructor(storage: Storage) {
		this._storage = storage;
	}

    async uploadProfilePicture(req: Request, res: Response): Promise<boolean> {
        const targetFolder:string = "profile_pictures"; 
        const metaData: any = {};
        const fields : { [key:string]: string} = {};
        const uploads: { [key:string]: internal.Readable } = {};
        const busboy = Busboy({ headers: req.headers });

        busboy.on('field', (fieldname, val) => {

            fields[fieldname]  = val;
        })
        

        busboy.on('file', (fieldname, file, info: Busboy.Info) => {
            const { mimeType, encoding } = info;
            metaData.contentType = mimeType;
            metaData.metadata = {
                encoding
            }
            uploads[fieldname] = file;
       })

        busboy.on('finish', async () => {
        })


        // @ts-ignore
        busboy.end(req.rawBody);

        try {
			//replace storage with the actual storage object. This example uses firebase storage
            const blob = this._storage.file(`${targetFolder}/${fields['uid']}`);
            
            await uploads['profileImage'].pipe(blob.createWriteStream({
                metadata: metaData
            }))

            return true;
        } catch (error) {
            throw new Error("Error uploading image");
        }

    }


    async getProfilePictureUrl(uid: string): Promise<string> {
        const filePath = `profile_pictures/${uid}`;
        const ref = this._storage.file(filePath);
        let url: string = "";

		//TO:DO: Implement logic to upload image to storage

		return url;
    }
}