import { redirect } from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { getAllMerch, getMerch } from './getMerch';

// The following is used on the single merchandise item page to show either the
// merchandise page or the 404 page. It is one page, it just makes it a this or
// that choice.

export function isUrl(checkId) {
  const { isLoading, isError, data, error } = useQuery(['merchs'], getAllMerch);
  if (isLoading) {
    return <p>isUrl is checking merch url names</p>;
  }
  if (isError) {
    return <p>Error from the isUrl: {error.message}</p>;
  }
  let allmerch = data;
  const merchIDList = allmerch.map((merch) => (merch.slug));
  const checkMerch = merchIDList.includes(checkId);
  return checkMerch;
}
