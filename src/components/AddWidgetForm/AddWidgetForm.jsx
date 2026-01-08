import { useActionState } from 'react';

const AddWidgetForm = () => {
  const [state, submitAction, isPending] = useActionState(
    addWidget,
    { error: null, success: false }
  );

  return (
    <form action={submitAction}>
      <input
        name="title"
        placeholder="Назва віджета"
      />

      <button disabled={isPending}>
        {isPending ? 'Додаємо...' : 'Додати'}
      </button>

      {state?.error && <p>{state.error}</p>}
      {state?.success && <p>Віджет додано</p>}
    </form>
  );
};

export default AddWidgetForm