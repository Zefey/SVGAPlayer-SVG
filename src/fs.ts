import { Parser } from "./parser";
import { Generator } from "./generator";
import * as fs from "fs"

export const transformFile = async (fsPath: string): Promise<string> => {
    const source = await Parser.load(fsPath)
    const generator = new Generator(source, {
        backgroundColor: "transparent",
        // loopCount: 2,
        // fillMode: "clear",
    })
    await generator.process()
    return generator.toString()
}

transformFile("samples/gift2.svga").then((result) => {
    fs.writeFileSync("samples/gift2.svg", result)
})
