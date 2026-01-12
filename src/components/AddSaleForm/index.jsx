import { useActionState } from "react";
import { useRevalidator } from "react-router-dom";

import { addSaleAction } from "@app/router/actions";

import styles from "./AddSaleForm.module.css";

const initialState = {
    success: false,
    errors: null,
    error: null
};

const AddSaleForm = () => {
    const revalidator = useRevalidator();

    const [state, formAction, isPending] = useActionState(
        async (prevState, formData) => {
            const result = await addSaleAction(prevState, formData);

            if (result.success) {
                revalidator.revalidate();
            }

            return result;
        },
        initialState
    );

    return (
        <section className={styles.wrapper}>
            <h3>Add Sale</h3>

            <form action={formAction}>
                <input name="client" placeholder="Client" />
                {state.errors?.client && <span>{state.errors.client}</span>}

                <input name="product" placeholder="Product" />
                {state.errors?.product && <span>{state.errors.product}</span>}

                <input name="quantity" type="number" placeholder="Quantity" />
                {state.errors?.quantity && <span>{state.errors.quantity}</span>}

                <input name="price" type="number" placeholder="Price" />
                {state.errors?.price && <span>{state.errors.price}</span>}

                <button disabled={isPending}>
                    {isPending ? "Adding…" : "Add Sale"}
                </button>
            </form>

            {state.success && (
                <p className={styles.success}>Sale added successfully</p>
            )}

            {state.error && <p className={styles.error}>{state.error}</p>}
        </section>
    );
};

export default AddSaleForm;
