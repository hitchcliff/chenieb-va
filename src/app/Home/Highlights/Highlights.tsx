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
    <HighlightItem key={idx} className="flex items-center flex-col">
      <div className="overflow-hidden h-16 w-16 rounded-full bg-white shadow-lg text-primary flex justify-center items-center text-2xl hover:text-gray-700 transition-all duration-700 scale-up">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="text-center px-5 from-bottom">
        <h4 className="mt-2 capitalize text-sm md:text-md">{title}</h4>
      </div>
    </HighlightItem>
  ));
  return (
    <Container
      id="objective"
      className="py-24 primary-gradient rounded-tl-full ml-auto w-full md:w-3/4 from-right"
    >
      <div className="mx-auto">
        <div className="flex mt-16 flex-row">{highlightItems}</div>
      </div>
    </Container>
  );
}
