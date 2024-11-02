export function RegistrationFormUncontrolled() {
  function handleSubmit(e: any) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const formJson = Object.fromEntries(formData);
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input name="username" type="text" />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
      </div>
      <button>Submit form</button>
    </form>
  );
}
