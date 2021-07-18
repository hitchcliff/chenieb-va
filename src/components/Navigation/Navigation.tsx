import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import styled from 'styled-components';

const Container = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12312313;
`;

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <Container className="w-full py-2 text-center z-50 fixed top-0 left-0">
      <MobileNavigation />
    </Container>
  );
}
