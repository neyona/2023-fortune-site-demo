import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import FortuneCard from '../components/FortuneCard';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import { getFortunes } from '../datacalls/getFortunes';

export default function Fortune(props) {

  return (
    <>
      <Title
        title="Fortunate Cuttlefish | Fortune"
        description="The fortune page for the Fortunate Cuttlefish"
        keywords="fortunate cuttlefish, Django, React, SASS, little cthulhu"
      />
      <FortuneCard />
    </>
  );
}
