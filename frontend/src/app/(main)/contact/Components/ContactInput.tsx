import React from "react";

export interface ContactInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  error?: string;
}

export function ContactInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  disabled,
  error,
}: ContactInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-primary mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={`mt-1 block w-full rounded-lg border ${
          error ? "border-red-500" : "border-primary/30"
        } bg-background-light/80 text-white px-4 py-2 focus:ring-2 focus:ring-primary/40 disabled:opacity-50`}
      />
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </div>
  );
}

export interface ContactTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  error?: string;
}

export function ContactTextarea({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  disabled,
  error,
}: ContactTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-primary mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={`mt-1 block w-full rounded-lg border ${
          error ? "border-red-500" : "border-primary/30"
        } bg-background-light/80 text-white px-4 py-2 focus:ring-2 focus:ring-primary/40 resize-none disabled:opacity-50`}
      ></textarea>
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </div>
  );
}
