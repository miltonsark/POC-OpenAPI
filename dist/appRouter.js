"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
// src/appRouter.ts
const zod_1 = require("zod");
const trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    // Define procedimientos equivalentes a las rutas de Express
    newUser: trpc_1.procedure
        .input(zod_1.z.object({ name: zod_1.z.string(), email: zod_1.z.string().email() }))
        .mutation(({ input }) => {
        return `Nuevo usuario creado: ${input.name}`;
    }),
    changeUser: trpc_1.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string(), newName: zod_1.z.string() }))
        .mutation(({ input }) => {
        return `Usuario ${input.userId} cambiado a ${input.newName}`;
    }),
    deleteUser: trpc_1.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string() }))
        .mutation(({ input }) => {
        return `Usuario ${input.userId} eliminado`;
    }),
    hello: trpc_1.procedure.query(() => {
        return 'hola desde tRPC';
    }),
});
