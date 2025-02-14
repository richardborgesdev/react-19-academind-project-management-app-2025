export default function Input({ label, isTextarea, ...props }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {isTextarea ? (
        <textarea {...props}></textarea>
      ) : (
        <input type="text" {...props} />
      )}
    </p>
  );
}
