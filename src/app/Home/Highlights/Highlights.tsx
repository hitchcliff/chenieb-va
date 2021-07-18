import { Container } from '../../../components';
import { HighlightsData } from './HighlightsData';
import styled from 'styled-components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HighlightItem = styled.div`
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export default function Highlights() {
  const highlightItems = HighlightsData.map(({ icon, title }, idx) => (
    <HighlightItem key={idx} className="flex justify-center items-center flex-col">
      <div className="overflow-hidden h-24 w-24 rounded-full bg-white shadow-lg text-primary flex justify-center items-center text-5xl hover:text-gray-700 transition-all duration-700">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <Heading heading={HeadingPattern.H4} className="mt-5">
          {title}
        </Heading>
      </div>
    </HighlightItem>
  ));
  return (
    <Container className="py-24 primary-gradient rounded-tl-full ml-auto w-3/4">
      <div className="mx-auto">
        <div className="flex flex-col mt-16 md:flex-row">{highlightItems}</div>
      </div>
    </Container>
  );
}
