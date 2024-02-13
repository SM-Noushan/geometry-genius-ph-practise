function showResult(name, result) {
    const table = document.getElementById('calculation-history');
    const sl = document.getElementsByClassName('result-items').length + 1;
    table.innerHTML += `<div        class="result-items grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
        <p class="text-left">${sl}. ${name}</p>
        <p id="${sl}">${result}cm<sup>2</sup> </p>
        <button
        onclick="convertToMeter(${sl})" class="col-span-2 sm:col-span-1 xl:col-span-2 2xl:col-span-1 btn-sm rounded bg-blue-500 hover:bg-blue-700 text-white text-sm leading-normal font-medium">Convert
            to m<sup>2</sup>
        </button>
        <button
        onclick="convertToCM(${sl})" class="col-span-2 sm:col-span-1 xl:col-span-2 2xl:col-span-1 btn-sm rounded bg-blue-500 hover:bg-blue-700 text-white text-sm leading-normal font-medium hidden">Convert
            to cm<sup>2</sup>
        </button>
    </div>`;
}

function getValue(targetName) {
    return document.getElementById(targetName).value;
}

function convertValue(type, id) {
    const data = document.getElementById(id);
    const btnConvertMeter = data.nextElementSibling;
    const btnConvertCM = btnConvertMeter.nextElementSibling;
    let value = parseFloat(data.innerText);
    if (type === 'm') {
        value = value / 10000;
        if (!Number.isInteger(value))
            value = value.toFixed(4);
        data.innerHTML = `${value}m<sup>2</sup>`;
        btnConvertMeter.classList.add('hidden');
        btnConvertCM.classList.remove('hidden');
    }
    else {
        value = value * 10000;
        if (!Number.isInteger(value))
            value = value.toFixed(2);
        data.innerHTML = `${value}cm<sup>2</sup>`;
        btnConvertMeter.classList.remove('hidden');
        btnConvertCM.classList.add('hidden');
    }
}

function convertToMeter(id) {
    convertValue('m', id);
}

function convertToCM(id) {
    convertValue('cm', id);
}

function CalculateTriangleArea() {
    const base = parseFloat(getValue('triangle-base'));
    const height = parseFloat(getValue('triangle-height'));
    let area = 0.5 * base * height;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Triangle', area);
}

function CalculateRectangleArea() {
    const width = parseFloat(getValue('rectangle-width'));
    const length = parseFloat(getValue('rectangle-length'));
    let area = width * length;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Rectangle', area);
}

function CalculateParallelogramArea() {
    const base = parseFloat(getValue('parallelogram-base'));
    const height = parseFloat(getValue('parallelogram-height'));
    let area = base * height;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Parallelogram', area);
}

function CalculateRhombusArea() {
    const diagonal1 = parseFloat(getValue('rhombus-diagonal-1'));
    const diagonal2 = parseFloat(getValue('rhombus-diagonal-2'));
    let area = 0.5 * diagonal1 * diagonal2;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Rhombus', area);
}

function CalculatePentagonArea() {
    const perimeter = parseFloat(getValue('pentagon-perimeter'));
    const apothem = parseFloat(getValue('pentagon-apothem'));
    let area = 0.5 * perimeter * apothem;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Pentagon', area);
}

function CalculateEllipseArea() {
    const radius1 = parseFloat(getValue('ellipse-radius-1'));
    const radius2 = parseFloat(getValue('ellipse-radius-2'));
    let area = Math.PI * radius1 * radius2;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Ellipse', area);
}