import * as yup from "yup";

export const userSchema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 letters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email format")
});
