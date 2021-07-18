import { faList, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import { experienceData } from './ExperienceData';
import styled from 'styled-components';

const ExperienceItem = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    :not(:first-child) {
      margin-top: 2.5rem;
    }
  }
`;

export default function Experience() {
  const experienceItems = experienceData.map(({ title, accomplishments }, idx) => (
    <ExperienceItem key={idx}>
      <Heading heading={HeadingPattern.H5} className="italic underline">
        {title}
      </Heading>
      <ul className="mt-5">
        {accomplishments.map((item, i) => (
          <li key={i} className="mt-2 ml-10 lg:ml-16 relative">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="mr-2 absolute top-2 -left-5 text-xs"
            />
            {item}
          </li>
        ))}
      </ul>
    </ExperienceItem>
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
        <div className="mt-16">{experienceItems}</div>
      </div>
    </Container>
  );
}
