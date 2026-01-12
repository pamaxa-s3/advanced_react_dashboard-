import { useActionState, useId } from "react";
import { useRevalidator } from "react-router-dom";

import { addUserAction } from "@app/router/actions";

import styles from "./AddUserForm.module.css";

const initialState = {
    success: false,
    errors: null,
    error: null
};

const AddUserForm = () => {
    const revalidator = useRevalidator();
    const formId = useId();

    const [state, formAction, isPending] = useActionState(
        async (prev, formData) => {
            const result = await addUserAction(prev, formData);

            if (result.success) {
                revalidator.revalidate();
            }

            return result;
        },
        initialState
    );

    return (
        <section className={styles.wrapper}>
            <h3>Add User</h3>

            <form action={formAction} aria-describedby={formId}>
                <input name="name" placeholder="Name" />
                {state.errors?.name && <span>{state.errors.name}</span>}

                <input name="email" placeholder="Email" />
                {state.errors?.email && <span>{state.errors.email}</span>}

                <select name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button disabled={isPending}>
                    {isPending ? "Creating…" : "Add User"}
                </button>
            </form>

            {state.success && (
                <p className={styles.success}>User created successfully</p>
            )}

            {state.error && (
                <p id={formId} className={styles.error}>
                    {state.error}
                </p>
            )}
        </section>
    );
};

export default AddUserForm;
