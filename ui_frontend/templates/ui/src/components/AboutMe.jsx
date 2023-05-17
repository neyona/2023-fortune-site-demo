import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { getContents, getContent } from '../datacalls/getContent';
import Spinner from './Spinner';


export default function AboutMe(props) {
  const queryClient = useQueryClient();
  const [selectedContent, setSelectedContent] = useState();
  // from the model ABOUT_THE_SITE = 'about-me'
  const { isLoading, isError, data, error } = useQuery(['about-me', selectedContent], () =>
    getContent('about-me'), // using the api slug here
  );
  if (isLoading) {
    return <div align="center"><Spinner /></div>;
  }
  if (isError) {
    return <p>Error from the AboutMe section: {error.message}</p>;
  }
  let aboutme = data;

  return (
    <>
      <ReactMarkdown>{aboutme.description}</ReactMarkdown>
    </>
  );
}
