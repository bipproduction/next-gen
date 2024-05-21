"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPage = void 0;
var path_1 = __importDefault(require("path"));
var readdirp_1 = __importDefault(require("readdirp"));
var fs_1 = __importDefault(require("fs"));
var lodash_1 = __importDefault(require("lodash"));
function genPage(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var list, _c, _d, _e, entry, e_1_1;
        var _f, e_1, _g, _h;
        var name = _b.name;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    name = name || "gen_page";
                    list = [];
                    _j.label = 1;
                case 1:
                    _j.trys.push([1, 6, 7, 12]);
                    _c = true, _d = __asyncValues((0, readdirp_1.default)(path_1.default.join(process.cwd(), '/src/app'), { fileFilter: ['*.tsx', '!layout.tsx'] }));
                    _j.label = 2;
                case 2: return [4 /*yield*/, _d.next()];
                case 3:
                    if (!(_e = _j.sent(), _f = _e.done, !_f)) return [3 /*break*/, 5];
                    _h = _e.value;
                    _c = false;
                    entry = _h;
                    list.push(generateFunctionCode(entry.fullPath, entry.path));
                    _j.label = 4;
                case 4:
                    _c = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _j.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _j.trys.push([7, , 10, 11]);
                    if (!(!_c && !_f && (_g = _d.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _g.call(_d)];
                case 8:
                    _j.sent();
                    _j.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    fs_1.default.writeFileSync(path_1.default.join(process.cwd(), "".concat(name, ".tsx")), "export const ".concat(name, " = {\n").concat(list.join(',\n'), " \n};"), { encoding: 'utf8' });
                    console.log("\u2728\u2728\u2728 ".concat(name, ".ts DONE \u2728\u2728\u2728"));
                    return [2 /*return*/];
            }
        });
    });
}
exports.genPage = genPage;
function generateFunctionName(filePath) {
    var baseFunctionName = filePath
        .replace('/page.tsx', '')
        .replace('.tsx', '')
        .replace(/[^\w\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map(function (word, index) {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
        .join('');
    // Tambahkan "By" untuk setiap parameter
    var params = extractParams(filePath);
    if (params.length > 0) {
        var paramPart = params.map(function (param) { return 'By' + param.charAt(0).toUpperCase() + param.slice(1); }).join('');
        baseFunctionName += paramPart;
    }
    return baseFunctionName;
}
function extractParams(filePath) {
    var matches = filePath.match(/\[([^\]]+)\]/g);
    return matches ? matches.map(function (param) { return param.replace(/[\[\]]/g, ''); }) : [];
}
function generateFunctionCode(fullPath, filePath) {
    var functionName = generateFunctionName(filePath).replace("page", "home");
    var params = extractParams(filePath);
    var paramString = params.map(function (param) { return "".concat(param, ": string"); }).join(', ');
    var paramObjString = params.join(', ');
    var apiPath = filePath.replace(/\[([^\]]+)\]/g, '${$1}').replace(/\\/g, '/').replace("/page.tsx", "").replace("page.tsx", "");
    var content = fs_1.default.readFileSync(fullPath, 'utf8');
    return "\n    /**\n     *  [".concat(fullPath, "](file://").concat(fullPath, ")\n     */\n    ").concat(functionName, " : (").concat(lodash_1.default.isEmpty(params) ? "" : "{" + paramObjString + "}").concat(lodash_1.default.isEmpty(params) ? "" : ":{" + paramString + "}", ") => {\n    return `/").concat(apiPath, "`;\n}");
}
