import { Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';

export default function Introduction() {
  return (
    <Container className="py-24">
      <Heading heading={HeadingPattern.H2} className="text-primary">
        Introduction
      </Heading>
      <p className="px-10 lg:pl-24">
        I am seeking a position as a Call Center agent in a reputable organization. Throughout my
        career and school, I was able to gain a tremendous amount of achievements to augment my lack
        of experience in this field. My interest is to gain experience to enhance my communication
        skills and to lend my strength to the company I’m working with.
      </p>
    </Container>
  );
}
