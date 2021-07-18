import styled from 'styled-components';

const Container = styled.button`
  transition: 0.3s ease;

  :hover {
    transition: 0.3s ease;
  }
`;

interface ButtonProps {
  children: any;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <div className={className}>
      <Container className="px-10 py-4 uppercase rounded-md transition-all text-white text-sm font-times tracking-widest bg-gradient-to-r from-primary to-secondary hover:bg-primary">
        {children}
      </Container>
    </div>
  );
}
