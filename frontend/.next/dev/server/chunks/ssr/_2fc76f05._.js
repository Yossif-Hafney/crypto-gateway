module.exports = [
"[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401f63a766abf9cd7c6374cd9ad27eaad0e55a2b4a":"contactAction"},"",""] */ __turbopack_context__.s([
    "contactAction",
    ()=>contactAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
// Validation schema for server-side
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name must be at least 2 characters"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message must be at least 10 characters"),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Security token is required")
});
async function contactAction(formData) {
    try {
        // Extract and validate form data
        const values = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            token: formData.get("token")
        };
        const parsed = schema.safeParse(values);
        if (!parsed.success) {
            return {
                ok: false,
                error: "Invalid form data. Please check your input and try again."
            };
        }
        const { token } = parsed.data;
        // Verify reCAPTCHA token with Google
        if (!process.env.RECAPTCHA_SECRET_KEY) {
            console.error("RECAPTCHA_SECRET_KEY is not configured");
            return {
                ok: false,
                error: "Server configuration error. Please contact support."
            };
        }
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
        const verifyBody = new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token
        });
        const res = await fetch(verifyUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: verifyBody.toString()
        });
        if (!res.ok) {
            console.error("reCAPTCHA verification request failed:", res.status);
            return {
                ok: false,
                error: "Security verification failed. Please try again."
            };
        }
        const data = await res.json();
        // Check reCAPTCHA v3 score (0.0 - 1.0, lower = more likely bot)
        if (!data.success || data.score && data.score < 0.5) {
            console.warn("reCAPTCHA verification failed or low score:", data);
            return {
                ok: false,
                error: "Security verification failed. Please try again or contact support."
            };
        }
        return {
            ok: true
        };
    } catch (error) {
        console.error("Error processing contact form:", error);
        return {
            ok: false,
            error: "An unexpected error occurred. Please try again later."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    contactAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(contactAction, "401f63a766abf9cd7c6374cd9ad27eaad0e55a2b4a", null);
}),
"[project]/.next-internal/server/app/(main)/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$contact$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(main)/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401f63a766abf9cd7c6374cd9ad27eaad0e55a2b4a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$contact$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$main$292f$contact$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$contact$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/contact/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_2fc76f05._.js.map