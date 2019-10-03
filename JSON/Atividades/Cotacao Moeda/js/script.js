const $value = document.querySelector('#txt_convert');
const $converted = document.querySelector('#txt_converted');

const from = document.querySelector('#convert').value;
const to = document.querySelector('#converted').value;

const convert = (to, value) => {
    const url = 'https://api.hgbrasil.com/finance?key=development';
    const proxy = "https://cors-anywhere.herokuapp.com/";

    fetch(proxy + url)
        .then(res => res.json())
        .then(json => {
            $converted.value = (value / json.results.currencies[to].buy).toFixed(2);
        });
}

$value.addEventListener('blur', () => {
    let to = document.querySelector('#converted').value;
    convert(to, $value.value, $converted)
});
