import express, { Request, Response } from 'express';
import { ParserService } from './service/parserService';

const app = express();

//Enable url encoded body
app.use(express.urlencoded({ extended: true }));
app.post('/upload', async (req:Request, res: Response) => {
	//replace with actual storage object from firebase or any other storage service
	const storage:Storage = new Storage(); 
	try {
		const parserRepo = new ParserService(storage);
		const success = await parserRepo.uploadProfilePicture(req, res);
		if (success) res.status(200).json({ message: "image successfully uploaded" });

	} catch (error) {
		res.status(500).json({ message: "internal server error" });
		throw new Error("Error uploading image");
	}
});


export { app as api }