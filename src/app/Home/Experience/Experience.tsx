import { Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import { experienceData } from './ExperienceData';

export default function Experience() {
  const experienceItems = experienceData.map(({ title, accomplishments }, idx) => (
    <div key={idx}>
      <h4>{title}</h4>
    </div>
  ));

  return (
    <Container className="py-24">
      <div className="w-full">
        <Heading
          heading={HeadingPattern.H2}
          className="text-center flex justify-center items-center w-full"
        >
          work experience
        </Heading>
        <div>{experienceItems}</div>
      </div>
    </Container>
  );
}
