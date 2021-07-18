import SHOWCASE_IMG from '../../../assets/images/2.jpg';
import { Button, Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';

export default function Showcase() {
  return (
    <Container className="min-h-screen">
      <div className="w-1/2 flex">
        <img
          src={SHOWCASE_IMG}
          alt="chennie"
          className="w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"
        />
      </div>
      <div className="px-10 flex flex-col justify-center lg:px-24">
        <Heading heading={HeadingPattern.H1} className="font-times text-primary">
          Hi! I am Chenie Bontilao
        </Heading>
        <p className="mt-5">
          I am seeking a position as a Virtual Assistant, Chat Support, and Call Center in a
          reputable organization.
        </p>
        <Button className="mt-10">view resume</Button>
      </div>
    </Container>
  );
}
