
// It works in browser only
// in nodeJs Error 'fetch is not define'

async function loadJson(url) {
    const data = await fetch(url);
    if (data.status == 200) {
        const json = await data.json();
        return json
    } else {
        throw new Error(data.status);
    }
}
loadJson('fakeurl.json')
    .catch((e) => console.log('error', e))