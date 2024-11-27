export function fetchData(url: any): Promise<Uint8Array>;
export class NodeCanvasFactory extends BaseCanvasFactory {
    /**
     * @ignore
     */
    _createCanvas(width: any, height: any): import("@napi-rs/canvas").Canvas;
}
export class NodeCMapReaderFactory extends BaseCMapReaderFactory {
}
export class NodeFilterFactory extends BaseFilterFactory {
}
export class NodeStandardFontDataFactory extends BaseStandardFontDataFactory {
}
import { BaseCanvasFactory } from "./canvas_factory.js";
import { BaseCMapReaderFactory } from "./cmap_reader_factory.js";
import { BaseFilterFactory } from "./filter_factory.js";
import { BaseStandardFontDataFactory } from "./standard_fontdata_factory.js";
