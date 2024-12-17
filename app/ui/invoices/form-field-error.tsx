export default function FormFieldError({ id, errors }: { id: string, errors: string[] }) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {
        errors.map((errorMessage) => (
          <p className="mt-2 text-sm text-red-500" key={errorMessage}>
            {errorMessage}
          </p>
        ))
      }
    </div>
  );
}