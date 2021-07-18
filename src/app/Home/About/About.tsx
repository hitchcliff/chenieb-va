import SHOWCASE_IMG from '../../../assets/images/1.jpg';
import { Button, Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import Socials from '../../../components/Socials/Socials';

export default function About() {
  return (
    <Container className="py-24 bg-gray-50 rounded-t-3xl">
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex">
          <img
            src={SHOWCASE_IMG}
            alt="chennie"
            className="w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"
          />
        </div>
        <div className="px-10 w-full flex flex-col justify-center lg:pl-24 lg:pr-0">
          <Heading heading={HeadingPattern.H5} className="font-times text-black text-left">
            A little about me
          </Heading>
          <p className="mt-5 text-black">
            Throughout my career and school, I was able to gain a tremendous amount of achievements
            to augment my lack of experience in this field.
          </p>
          <p className="mt-5 text-black">
            My interest is to gain experience to enhance my communication skills and to lend my
            strength to the company I’m working with.
          </p>
          <a href="!#" className="mt-10 font-bokka uppercase underline font-bold">
            view resume
          </a>
          <Socials className="py-3 mt-5" />
        </div>
      </div>
    </Container>
  );
}
