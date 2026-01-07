import { Form, useNavigation, useActionData } from "react-router-dom";

const CreateUser = () => {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div>
            <h2>Create user</h2>

            <Form method="post">
                <div>
                    <input name="name" placeholder="Name" />
                    {actionData?.errors?.name && (
                        <p>{actionData.errors.name}</p>
                    )}
                </div>

                <div>
                    <input name="email" placeholder="Email" />
                    {actionData?.errors?.email && (
                        <p>{actionData.errors.email}</p>
                    )}
                </div>

                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create"}
                </button>
            </Form>
        </div>
    );
};

export default CreateUser;
