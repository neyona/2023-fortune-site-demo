import { useEffect } from 'react';
import {
  Link,
  useLoaderData,
} from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaUniversalAccess, FaExternalLinkAlt } from 'react-icons/fa';

import { getAllMerch, getMerch } from '../datacalls/getMerch';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import MerchCard from '../components/MerchCard';

// merchId is set to merch.slug pretty directly here.
export default function Merch(props) {
  const { isLoading, isError, data, error } = useQuery(['merchs'], getAllMerch);
  if (isLoading) {
    return <div align="center"><Spinner /></div>;
  }
  if (isError) {
    return <p>Error from the All Merch page: {error.message}</p>;
  }
  let merchs = data;

  return (
    <>
      <Title
        title="Fortunate Cuttlefish | Merch"
        description="The Merchandise"
        keywords="redbubble, etsy, amazon, seamless patterns, little cthulhu, print on demand"
      />
        <h1 align="center">The Merchandise</h1>
        <p>
          Did you enjoy this site? I hope you did!
        </p>
        <>
          {merchs.map((merch) => {
            const merchId = merch.slug;
              return (
                <Row key={merch.pkid} className="extra-space">
                  <MerchCard merch={merch} />
                </Row>
              );
          })}
        </>
    </>
  );
}
