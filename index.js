function CalculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    const area = 0.5 * base * height;
    showResult('Triangle', area)
    // console.log(area, typeof area)
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