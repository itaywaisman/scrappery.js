import mongoose from 'mongoose';
import { Logger } from 'winston';
import { Entry } from '../interfaces/entry';
import { IStep } from '../interfaces/step.interface';
import { EntryModel } from '../interfaces/EntryModel';

export class MongoExporter implements IStep {

    private connectionString: string = "";

    constructor(private _logger : Logger) {
    }

    init(options?: any): void {
        this.connectionString = options.connectionString
        mongoose.connect(this.connectionString, {useNewUrlParser: true});
    }
    async execute(data: Entry[]): Promise<void> {
        try {
            await EntryModel.insertMany(data);   
        } catch (error) {
            this._logger.error("Error exporting to mongodb", error);
        }
    }
}