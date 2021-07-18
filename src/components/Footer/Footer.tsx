import styled from 'styled-components';
import Socials from '../Socials/Socials';

const Container = styled.div``;

export default function Footer() {
  return (
    <Container
      id="footer-section"
      className="text-center text-white pt-10 mt-auto bottom-0 left-1/2 transform -translate-x-1/2"
    >
      <Socials />
      <span className="whitespace-nowrap text-xs sm:text-sm md:text-xl">
        &copy; {new Date().getFullYear()} Chenie Narra Bontilao
      </span>
    </Container>
  );
}
