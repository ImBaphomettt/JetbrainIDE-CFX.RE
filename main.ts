import * as request from 'request';
import {FilesBuilder} from "./src/files-builder";
import {ContentGenerate} from "./src/content-generate";
import * as figlet from 'figlet';
import {GamesType} from "./src/enum/GamesType";
import {terminal as term} from "terminal-kit";

var progressBar, progress = 0;


/**
 * The [[Main]] class that groups together all the logical execution processes of the system.
 */
export class Main {

    /**
     * @param gametype
     */
    private static getNativeLink = (gametype: GamesType): string => {
        switch (gametype) {
            case GamesType.GTA:
                return "https://runtime.fivem.net/doc/natives.json";
            case GamesType.RDR3:
                return "https://raw.githubusercontent.com/alloc8or/rdr3-nativedb-data/master/natives.json";
            case  GamesType.Cfx:
                return "https://runtime.fivem.net/doc/natives_cfx.json"
            default:
                return "https://runtime.fivem.net/doc/natives.json";
        }
    };
    /**
     * Startup logicNom de la native fivem
     *
     * @param dir Location of the file where the project will be built
     *
     * @param gametype
     * @return void
     */
    public static onEnable = (dir: string, gametype: GamesType): void => {
        let json = Main.getNativeLink(gametype);
        if (json !== undefined) {
            figlet('JetBrainIDE-CitizenFX', (err, data) => {
                term.blue(data);
            });
            request.get(json, (error, response, content) => {
                const files = new FilesBuilder(dir);
                const json = JSON.parse(content);
                files.init().then(async () => {
                    files.category(json);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    const builder = new ContentGenerate(files);
                    builder.generateTemplate(json);
                });
            });
        } else {
            process.exit();
        }
    };

    /**
     * Folder generate logic
     *
     * @param response
     *
     * @return void
     */
    public static onFolderGenerate = (response: void) => {
        term.cyan("Create build directory successfully : " + response);
    };

    /**
     * File update logic
     *
     * @param stats
     * @param filename Name of the updated file
     * @param nativename Name of the native fivem
     *
     * @return void
     */
    public static onFileUpdate = (stats: { native: { total: number; current: number } }, filename: String, nativename: String): void => {
        stats.native.current++;
        term.green("[File : " + filename + " ] [Native : " + nativename + " ]\n");
        if (stats.native.current == stats.native.total)
            process.exit();
    };

}


term.cyan('Welcome to the native completion generator tool for Jetbrain IDEs for cfx.re projects.\n');
term.cyan('Please select the game concerned.\n');

let items = [
    '1. (FiveM) GTA V',
    '2. (RedM) Red Dead Redemption 2',
    '3. CFX (Is Available for RedM && FiveM)',
];

term.singleColumnMenu(items, function (error, response) {
    switch (response.selectedIndex) {
        case 0:
            new Main.onEnable("build/cfx/GTAV", GamesType.GTA);
            break;
        case 1:
            new Main.onEnable("build/cfx/RDR3", GamesType.RDR3);
            break;
        default:
            new Main.onEnable("build/cfx/CFX-NATIVE", GamesType.Cfx);
            break;
    }
    //process.exit();
});

//new Main.onEnable("build/cfx/fivem", GamesType.FiveM);
