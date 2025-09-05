import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Alert({ className = "", ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={`rounded border px-4 py-3 text-sm shadow-sm ${className}`}
      {...props}
    />
  );
}

export function AlertDescription({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`m-0 ${className}`} {...props} />;
}
