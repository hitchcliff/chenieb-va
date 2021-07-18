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
    <Container className="w-full top-0 h-full py-2 text-center bg-white shadow-sm z-50">
      <DesktopNavigation />
      <MobileNavigation />
    </Container>
  );
}
