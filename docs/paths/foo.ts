export const fooPaths = {
    '/foo': {
        post: {
            summary: "Create a foo",
            description: "Create a foo",
            produces: ["application/json"],
            responses: {
                200: {
                    description: "successful operation",
                },
                400: {
                    description: "Empty foo",
                }
            }
        }
    },
}
