export async function addWidget(prevState, formData) {
    const title = formData.get("title");

    if (!title) {
        return { error: "Назва обовʼязкова" };
    }

    await new Promise(res => setTimeout(res, 1000));

    return {
        success: true,
        widget: { id: Date.now(), title }
    };
}
