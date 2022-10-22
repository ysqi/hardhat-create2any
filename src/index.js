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
        while (_) try {
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
exports.__esModule = true;
var task_names_1 = require("hardhat/builtin-tasks/task-names");
var config_1 = require("hardhat/config");
var CREATE2ANY_ADDRESS = "0x49088917Be000E083963312b50866fDf52798A8b";
var CREATE2ANY_DEPLOYER = "0x34B70737b715CDda9aE627E39080459b89858e44";
var CREATE2ANY_PAYLOAD = "0xf9077a80850684ee18008367a30a8080b90727608060405234801561001057600080fd5b50610707806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806385bb39231461004657806385cf97ab1461008d578063fb3f63ee1461012d575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166101f6565b604080519115158252519081900360200190f35b610104600480360360408110156100a357600080fd5b813591908101906040810160208201356401000000008111156100c557600080fd5b8201836020820111156100d757600080fd5b803590602001918460018302840111640100000000831117156100f957600080fd5b50909250905061020b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101046004803603606081101561014357600080fd5b8135919081019060408101602082013564010000000081111561016557600080fd5b82018360208201111561017757600080fd5b8035906020019184600183028401116401000000008311171561019957600080fd5b9193909290916020810190356401000000008111156101b757600080fd5b8201836020820111156101c957600080fd5b803590602001918460018302840111640100000000831117156101eb57600080fd5b509092509050610282565b60006020819052908152604090205460ff1681565b600061024684848460405160200180838380828437808301925050509250505060405160208183030381529060405280519060200120610673565b73ffffffffffffffffffffffffffffffffffffffff811660009081526020819052604090205490915060ff161561027b575060005b9392505050565b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000861615806102b65750606086901c33145b61032157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4531000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061035c87878760405160200180838380828437808301925050509250505060405160208183030381529060405280519060200120610673565b73ffffffffffffffffffffffffffffffffffffffff811660009081526020819052604090205490915060ff16156103f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4532000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b606086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505082519293508a929150506020830134f59250823b61044757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146104e157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4533000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905583156106175760008373ffffffffffffffffffffffffffffffffffffffff168686604051808383808284376040519201945060009350909150508083038183865af19150503d80600081146105a0576040519150601f19603f3d011682016040523d82523d6000602084013e6105a5565b606091505b505090508061061557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4534000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b505b6040805173ffffffffffffffffffffffffffffffffffffffff85168152602081018a905281517f94bfd9af14ef450884c8a7ddb5734e2e1e14e70a1c84f0801cc5a29e34d26428929181900390910190a1505095945050505050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091523060601b6021830152603582019490945260558082019390935281518082039093018352607501905280519101209056fea265627a7a72315820daceebb60b80dca77cc18d9120921ff6fab5e3cb54a009370727c6d8e23caafb64736f6c634300050c00321ba01820182018201820182018201820182018201820182018201820182018201828a01820182018201820182018201820182018201820182018201820182018201828";
function ensureCreate2any(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var code, from;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.send("eth_getCode", [
                        CREATE2ANY_ADDRESS,
                        "latest",
                    ])];
                case 1:
                    code = _a.sent();
                    if (!(code === "0x")) return [3 /*break*/, 5];
                    return [4 /*yield*/, provider.send("eth_accounts")];
                case 2:
                    from = (_a.sent())[0];
                    return [4 /*yield*/, provider.send("eth_sendTransaction", [
                            {
                                from: from,
                                to: CREATE2ANY_DEPLOYER,
                                value: "0x2a3a2b07294f000"
                            },
                        ])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, provider.send("eth_sendRawTransaction", [CREATE2ANY_PAYLOAD])];
                case 4:
                    _a.sent();
                    console.log("create2any creator successfully deployed");
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
(0, config_1.subtask)(task_names_1.TASK_NODE_GET_PROVIDER).setAction(function (args, hre, runSuper) { return __awaiter(void 0, void 0, void 0, function () {
    var provider;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, runSuper(args)];
            case 1:
                provider = _a.sent();
                return [4 /*yield*/, ensureCreate2any(provider)];
            case 2:
                _a.sent();
                return [2 /*return*/, provider];
        }
    });
}); });
(0, config_1.subtask)(task_names_1.TASK_TEST_SETUP_TEST_ENVIRONMENT).setAction(function (args, hre, runSuper) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, runSuper(args)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ensureCreate2any(hre.network.provider)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
