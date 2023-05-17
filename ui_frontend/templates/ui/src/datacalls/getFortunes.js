import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';


async function setupNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

export async function getFortunes() {
    const apiUrl = process.env.BACK_TEST_URL
    const { data } = await axios.get(`${apiUrl}/<fortune-separate-api>`);
    let fortunes = data;
    return fortunes;
}
