import { FaRandom } from 'react-icons/fa';
import { selectRandomProblem } from '../utils/problemSelector';

const RandomButton = () => {
  return (
    <div className="extension-random-button" onClick={selectRandomProblem}>
      <FaRandom size={19} color="black" />
    </div>
  );
};

export default RandomButton;
