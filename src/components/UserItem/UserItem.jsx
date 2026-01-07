import { useFetcher } from "react-router-dom";

const UserItem = ({ user }) => {
    const fetcher = useFetcher();

    const isDeleting =
        fetcher.state === "submitting" &&
        fetcher.formData?.get("userId") === String(user.id);

    if (isDeleting) {
        return <li>Deleting {user.name}...</li>;
    }

    return (
        <li>
            {user.name}

            <fetcher.Form method="post" action={`/users/${user.id}/delete`}>
                <input type="hidden" name="userId" value={user.id} />

                <button disabled={fetcher.state !== "idle"}>Delete</button>
            </fetcher.Form>
        </li>
    );
};

export default UserItem;
