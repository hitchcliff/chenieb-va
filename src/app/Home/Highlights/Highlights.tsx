import { Container } from '../../../components';
import { HighlightsData } from './HighlightsData';
import styled from 'styled-components';

const HighlightItem = styled.div`
  @media (min-width: 768px) {
    :not(:last-child) {
      margin-right: 2.5rem;
    }
  }
`;

export default function Highlights() {
  const highlightItems = HighlightsData.map(({ img, title }, idx) => (
    <HighlightItem key={idx}>
      <div className="overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>{title}</div>
    </HighlightItem>
  ));
  return (
    <Container className="py-24 primary-gradient">
      <div className="flex flex-col md:flex-row">{highlightItems}</div>
    </Container>
  );
}
