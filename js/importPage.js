async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target, path, distinguished) {
    document.querySelector(`#${distinguished||target}`).innerHTML = await fetchHtmlAsText(path?`${path?path:''}${target}.html`:`${target}.html`);
}