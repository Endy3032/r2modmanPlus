import { Ref, ref } from "vue";

export default class PathResolver {

    private static _APPDATA_DIR: Ref<string> = ref('');

    // Legacy path
    private static _CONFIG_DIR: Ref<string> = ref('');

    private static _ROOT: Ref<string> = ref('');
    private static _MOD_ROOT: Ref<string> = ref('');

    static set APPDATA_DIR(appDataDir: string) {
        PathResolver._APPDATA_DIR.value = appDataDir;
    }

    static get ROOT(): string {
        return PathResolver._ROOT.value;
    }

    static set ROOT(value: string) {
        this._ROOT.value = value;
    }

    static get MOD_ROOT(): string {
        return PathResolver._MOD_ROOT.value;
    }

    static set MOD_ROOT(path: string) {
        this._MOD_ROOT.value = path;
    }

    static get APPDATA_DIR(): string {
        return PathResolver._APPDATA_DIR.value;
    }

    static get CONFIG_DIR(): string {
        return PathResolver._CONFIG_DIR.value;
    }

    static set CONFIG_DIR(path: string) {
        PathResolver._CONFIG_DIR.value = path;
    }
}
