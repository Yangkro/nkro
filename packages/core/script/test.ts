import path from "path";
import walkSync from "walk-sync";

const basePath = path.resolve(__dirname, "../");
const srcPath = path.resolve(basePath, "src");
const testPath = path.resolve(basePath, "test");

const srcFiles = walkSync(srcPath, { globs: ["**/*.ts"] });
const testFiles = walkSync(testPath, { globs: ["**/*.ts"] });

export default function(cb:()=>void){
    (async function () {
        try {
            for(let p of srcFiles){
                await import(`../src/${p}`)
            }
            for(let p of testFiles){
                await import(`../test/${p}`)
            }
        } catch (err) {
            console.error(err);
        }
        cb()
    })()
}