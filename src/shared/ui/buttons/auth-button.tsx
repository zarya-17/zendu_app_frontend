import React from 'react';

interface AuthButtonProps {
  text: string;
}

export const AuthButton = React.memo((props: AuthButtonProps) => {
  const { text } = props;

  return (
    <button
      type="button"
      className="px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {text}
    </button>
  );
});
