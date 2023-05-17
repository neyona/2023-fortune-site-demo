import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
  useNavigate,
  useParams,
  useLoaderData } from 'react-router-dom';


export async function getAllMerch() {
    const apiUrl = process.env.BACK_TEST_URL
    const { data } = await axios.get(`${apiUrl}/<separate-api>`);
    let merchs = data;
    return merchs;
}

export async function getMerch(selectedMerch) {
    const apiUrl = process.env.BACK_TEST_URL;
    const { data } = await axios.get(`${apiUrl}/<separate-api>/${selectedMerch}`);
    let merch = data;
    if (!selectedMerch) {
      return null;
    } else {
    return merch;
  }
}
