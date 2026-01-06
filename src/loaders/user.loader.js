export const userLoader = async ({ params }) => {
    return getUserById(params.id);
};
