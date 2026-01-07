import { redirect } from "react-router-dom";
import { userSchema } from "@validation";

export const createUserAction = async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    try {
        await userSchema.validate(data, { abortEarly: false });
    } catch (validationError) {
        return {
            errors: validationError.inner.reduce((acc, err) => {
                acc[err.path] = err.message;
                return acc;
            }, {}),
        };
    }

    // імітація API
    await new Promise(res => setTimeout(res, 1000));

    console.log("Created user:", data);

    return redirect("/users");
};