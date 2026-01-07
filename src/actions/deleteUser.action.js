import { removeUser } from "@helpers";

export const deleteUserAction = async ({ params }) => {
    await new Promise(res => setTimeout(res, 800));
    removeUser(params.id);
    return null;
};
