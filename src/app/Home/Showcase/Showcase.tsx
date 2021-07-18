import SHOWCASE_IMG from '../../../assets/images/showcase.jpg';
import { Button } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';

export default function Showcase() {
  return (
    <div className="relative flex flex-col justify-center items-center py-10 px-10 lg:px-24 2xl:px-56 md:flex-row">
      <div className="w-1/2 border-8 border-white shadow-xl">
        <img src={SHOWCASE_IMG} alt="chennie" className="w-full object-cover" />
      </div>
      <div className="px-10 flex flex-col justify-center lg:px-24">
        <Heading heading={HeadingPattern.H1} className="text-gray-800">
          Hi! I am Chenie Bontilao
        </Heading>
        <p className="mt-5 text-gray-700">
          I am seeking a position as a Virtual Assistant in a reputable organization.
        </p>
        <Button className="mt-10">view resume</Button>
      </div>
      <div className="primary-gradient h-2/3 w-full absolute top-0 left-0 -z-10" />
    </div>
  );
}
