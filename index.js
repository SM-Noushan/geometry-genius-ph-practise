function CalculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    let area = 0.5 * base * height;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Triangle', area);
}

function CalculateRectangleArea() {
    const width = parseFloat(document.getElementById('rectangle-width').value);
    const length = parseFloat(document.getElementById('rectangle-length').value);
    let area = width * length;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Rectangle', area);
}

function CalculateParallelogramArea() {
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);
    let area = base * height;
    if (!Number.isInteger(area))
        area = area.toFixed(2);
    showResult('Parallelogram', area);
}

function showResult(name, result) {
    const table = document.getElementById('calculation-history');
    const sl = document.getElementsByClassName('result-items').length + 1;
    table.innerHTML += `<div        class="result-items grid grid-cols-3">
        <p class="text-left">${sl}. ${name}</p>
        <p>${result} cm <sup>2</sup> </p>
        <button
            class="btn-sm rounded bg-blue-500 hover:bg-blue-700 text-white text-sm leading-normal font-medium">Convert
            to m<sup>2</sup>
        </button>
    </div>`;
}