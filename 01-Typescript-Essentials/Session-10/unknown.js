"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function process(value) {
    if (typeof value === "object" && !!value && "log" in value && typeof value.log === "function") {
        value.log();
    }
}
//# sourceMappingURL=unknown.js.map