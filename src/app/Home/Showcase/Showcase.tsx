import SHOWCASE_IMG from '../../../assets/images/2.jpg';
import { Bubbles, Button, Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import RESUME_FILE from '../../../assets/CCA Chenie.docx';

export default function Showcase() {
  return (
    <Container
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center md:flex-row bg-white"
    >
      <div className="w-full md:w-1/2 flex scale-up">
        <img
          src={SHOWCASE_IMG}
          alt="chennie"
          className="w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"
        />
      </div>
      <div className="px-0 flex flex-col justify-center md:px-10 lg:px-24">
        <Heading heading={HeadingPattern.H1} className="font-times mt-10 md:mt-0 from-left">
          Hi! I am Chenie Bontilao
        </Heading>
        <p className="mt-5 from-bottom">
          I am seeking a position as a Virtual Assistant, Chat Support, and Call Center in a
          reputable organization.
        </p>
        <a href={RESUME_FILE} target="_blank" rel="noreferrer">
          <Button className="mt-10 from-left">download my resume</Button>
        </a>
      </div>
      <Bubbles />
    </Container>
  );
}
