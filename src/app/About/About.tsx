import { motion } from 'framer-motion';
import SHOWCASE_IMG from '../../assets/images/1.jpg';
import { Container } from '../../components';
import { SlideLeftSlideRight } from '../../components/FramerMotion/Slide';
import Heading, { HeadingPattern } from '../../components/Heading/Heading';
import Socials from '../../components/Socials/Socials';

export default function About() {
  return (
    <Container id="about" className="py-24 bg-gray-50 rounded-t-3xl">
      <motion.div {...SlideLeftSlideRight} className="flex flex-col md:flex-row">
        <div className="w-3/4 flex scale-up">
          <img
            src={SHOWCASE_IMG}
            alt="chennie"
            className="w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"
          />
        </div>
        <div className="w-full flex flex-col justify-center md:px-5  lg:pl-24 lg:pr-0">
          <Heading
            heading={HeadingPattern.H5}
            className="font-times text-black text-left mt-10 md:mt-0 from-top"
          >
            A little about me
          </Heading>
          <p className="mt-5 text-black from-left">
            Throughout my career and school, I was able to gain a tremendous amount of achievements
            to augment my lack of experience in this field.
          </p>
          <p className="mt-5 text-black from-left">
            My interest is to gain experience to enhance my communication skills and to lend my
            strength to the company I’m working with.
          </p>
          <a href="#" className="mt-10 font-times uppercase underline font-bold from-right">
            download my resume
          </a>
          <Socials className="py-3 mt-5 from-bottom" />
        </div>
      </motion.div>
    </Container>
  );
}
