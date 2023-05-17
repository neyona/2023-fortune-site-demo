import axios from 'axios';


async function setupNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

export async function getContents() {
    const apiUrl = process.env.BACK_TEST_URL
    const { data } = await axios.get(`${apiUrl}/<content-api>/`);
    let contents = data;
    return contents;
}

export async function getContent(selectedContent) {
    const apiUrl = process.env.BACK_TEST_URL
    console.log("Api url is as follows", apiUrl);
    const { data } = await axios.get(`${apiUrl}/<content-api>/${selectedContent}`);
    let content = data;
    return content;
}
