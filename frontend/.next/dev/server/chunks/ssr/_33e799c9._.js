module.exports = [
"[project]/src/lib/socket.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/lib/socket.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/node_modules/@tanstack/form-devtools/dist/esm/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/7f18a_@tanstack_devtools-ui_dist_esm_index_31ed3c35.js",
  "server/chunks/ssr/node_modules_67ad45f7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@tanstack/form-devtools/dist/esm/index.js [app-ssr] (ecmascript)");
    });
});
}),
];