import styled from 'styled-components';

const Container = styled.button`
  transition: 0.3s ease;

  :hover {
    transition: 0.3s ease;
  }
`;

interface ButtonProps {
  children: any;
}

export default function Button({ children }: ButtonProps) {
  return (
    <Container className="px-10 py-4 uppercase rounded-full transition-all shadow-lg hover:shadow-xl text-sm font-bokka bg-gradient-to-r via-primary from-tertiary to-secondary text-white hover:bg-primary hover:text-tertiary">
      {children}
    </Container>
  );
}
