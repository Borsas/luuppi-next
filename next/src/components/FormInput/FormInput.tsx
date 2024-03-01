interface FormInputProps {
  title: string;
  id: string;
  type?: HTMLInputElement['type'];
  required?: boolean;
  placeholder?: string;
  value?: string;
  loading?: boolean;
  error?: string;
  marginTop?: boolean;
  marginBottom?: boolean;
  labelTopRight?: React.ReactNode;
  onChange?: () => void;
}

export default function FormInput({
  title,
  error,
  placeholder,
  id,
  required = true,
  labelTopRight,
  value,
  type,
  loading,
  marginTop = true,
  marginBottom = true,
  onChange,
}: FormInputProps) {
  return (
    <label
      className={`form-control ${marginTop && 'mt-4'} ${marginBottom && 'mb-4'}`}
    >
      <div className={`label ${!marginTop && 'pt-0'}`}>
        <span className="label-text">
          {title} {required && '*'}
        </span>
        {labelTopRight && (
          <span className="label-text-alt">{labelTopRight}</span>
        )}
      </div>
      {loading ? (
        <div className="skeleton h-12" />
      ) : (
        <input
          className={`input input-bordered ${Boolean(error) && 'input-error'}`}
          defaultValue={value ?? ''}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type ?? 'text'}
          onChange={onChange}
        />
      )}
      {Boolean(error) && (
        <div className="label">
          <span className="label-text text-xs text-red-400">{error}</span>
        </div>
      )}
    </label>
  );
}
