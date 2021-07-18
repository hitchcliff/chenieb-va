import SHOWCASE_IMG from '../../../assets/images/showcase.jpg';
import { Button } from '../../../components';
import Heading, { HeadingPattern } from '../../../components/Heading/Heading';

export default function Showcase() {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <img src={SHOWCASE_IMG} alt="chennie" className="w-full object-cover" />
      </div>
      <div>
        <Heading heading={HeadingPattern.H1}>Chennie Narra Bontilao</Heading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et rerum aut velit
          exercitationem repellat facilis ipsum iure adipisci, sapiente nihil.
        </p>
        <Button>view resume</Button>
      </div>
    </div>
  );
}
