// Bunga Majemuk
function hitungBungaMajemuk(deposit, time, rate, ) {
    let total = deposit * Math.pow((1 + rate), time)
    let bunga = total - deposit
    return {
        bunga: bunga, 
        total: total
    }
}

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

const form = document.getElementById('bungaMajemukForm')
const resultsDiv = document.getElementById('resultDiv')
const resultText = document.getElementById('resultText')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const deposit = parseFloat(document.getElementById('deposit').value)
    const time = parseFloat(document.getElementById('time').value) 
    const rate = parseFloat(document.getElementById('rate').value) / 100
    const n = 12

    const hasil = hitungBungaMajemuk(deposit, time, rate, n)

    resultsDiv.innerHTML = `
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Hasil Perhitungan Bunga Majemuk</h2>
        <div class="space-y-2">
            <div class="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                <span class="text-gray-700">Deposit Awal:</span>
                <span class="font-semibold text-gray-900">${formatRupiah(deposit)}</span>
            </div>
            <div class="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                <span class="text-gray-700">Bunga yang Diperoleh:</span>
                <span class="font-semibold text-green-600">${formatRupiah(hasil.bunga)}</span>
            </div>
            <div class="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                <span class="text-gray-700">Total Akhir:</span>
                <span class="font-semibold text-blue-600">${formatRupiah(hasil.total)}</span>
            </div>
        </div>
    `
    resultsDiv.classList.remove('hidden')
})