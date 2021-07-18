import styled from 'styled-components';
import Socials from '../Socials/Socials';

const Container = styled.div``;

export default function Footer() {
  return (
    <Container
      id="footer-section"
      className="text-center py-2 mt-auto primary-gradient flex justify-center items-center flex-col md:flex-row"
    >
      <span className="whitespace-nowrap text-md text-black md:mr-5">
        &copy; 2021 Chenie Narra Bontilao
      </span>
      <Socials className="flex justify-center items-center mt-2" />
    </Container>
  );
}
