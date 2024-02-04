async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target, path, distinguished) {
    document.querySelector(`#${distinguished || target}`).innerHTML = await fetchHtmlAsText(
        path ? `${path ? path : ''}${target}.html` : `${target}.html`
    );
}

function importComponentCategories() {
    const componentCategories = {
        pupil: ['left_pupil', 'right_pupil'],
        eye: ['left_eye', 'right_eye'],
        smileEye: ['left_smile_eye', 'right_smile_eye'],
        tears: ['left_tears', 'right_tears'],
        closeEye: ['left_close_eye', 'right_close_eye'],
        wing: ['left_wing', 'right_wing'],
        shoes: ['left_shoes', 'right_shoes'],
        topButton,
        band,
        hat,
        leftLeg,
        rightLeg,
    };

    Object.keys(componentCategories).forEach((category_key) => {
        if (!componentCategories[category_key].length) importPage(category_key, 'components/');
        else {
            componentCategories[category_key].forEach((componentType) => {
                importPage(category_key, 'components/', componentType);
            });
        }
    });
}
