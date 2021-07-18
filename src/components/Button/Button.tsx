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
      <Container className="px-10 py-4 uppercase rounded-md transition-all shadow-lg text-gray-800 hover:shadow-xl text-sm font-bokka bg-gradient-to-r via-primary from-tertiary to-secondary hover:bg-primary hover:text-black">
        {children}
      </Container>
    </div>
  );
}
