import { IExporter } from "./exporter.interface";
import { Entry } from "../scrappers/scrapper.interface";

export class ExcelExporter implements IExporter {
    export(entries: Entry[]): void {
        console.log(entries);
    }

}