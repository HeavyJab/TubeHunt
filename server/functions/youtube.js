const cheerio = require('cheerio');
const axio = require('axio')

async function fetchHTML(url) {
    const { data } = await axios.get(url)
    return cheerio.load(data);
}

export default fetchHTML();