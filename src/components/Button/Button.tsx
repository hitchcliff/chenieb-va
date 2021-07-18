interface ButtonProps {
  children: any;
}

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
