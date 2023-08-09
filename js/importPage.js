async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target, path) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(path?`${path}${target}.html`:`${target}.html`);
}