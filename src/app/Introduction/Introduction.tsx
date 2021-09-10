import { Container } from '../../components';
import Heading, { HeadingPattern } from '../../components/Heading/Heading';

export default function Introduction() {
  return (
    <Container className="py-24 flex flex-col md:flex-row">
      <Heading heading={HeadingPattern.H2} className="from-left text-center md:text-left">
        Objective
      </Heading>
      <p className="mt-10 md:mt-0 lg:pl-24 from-bottom">
        To happily provide the exact needs of my customers as part of my obligation. To do the best
        of my ability to provide quality service in order to give inspiration to the customer. To
        pursue customer satisfaction to sustain and contribute to the wellness of the company.
      </p>
    </Container>
  );
}
