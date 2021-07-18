import { Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';

export default function Introduction() {
  return (
    <Container className="py-24 flex flex-col md:flex-row">
      <Heading heading={HeadingPattern.H2}>Objective</Heading>
      <p className="px-10 lg:pl-24">
        To happily provide the exact needs of my customers as part of my obligation. To do the best
        of my ability to provide quality service in order to give inspiration to the customer. To
        pursue customer satisfaction to sustain and contribute to the wellness of the company.
      </p>
    </Container>
  );
}
