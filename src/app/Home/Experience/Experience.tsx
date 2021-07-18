import { faList, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import { experienceData } from './ExperienceData';

export default function Experience() {
  const experienceItems = experienceData.map(({ title, accomplishments }, idx) => (
    <div key={idx} className="mt-10">
      <Heading heading={HeadingPattern.H5} className="italic underline">
        {title}
      </Heading>
      <ul className="mt-5">
        {accomplishments.map((item, i) => (
          <li key={i} className="mt-2 ml-10 lg:ml-16 relative">
            <FontAwesomeIcon icon={faLocationArrow} className="mr-2 absolute -left-5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <Container className="py-52">
      <div className="w-full">
        <Heading
          heading={HeadingPattern.H2}
          className="text-center flex justify-center items-center w-full"
        >
          work experience
        </Heading>
        <div className="mt-10">{experienceItems}</div>
      </div>
    </Container>
  );
}
