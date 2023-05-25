// Fungsi untuk menghitung luas
function hitungLuas() {
  var sisi = parseFloat(document.getElementById('sisi-luas').value);
  var luas = sisi * sisi;
  document.getElementById('output-luas').textContent = " Luas : (S x S) = " + sisi + " x " + sisi + " = " + luas;
  document.getElementById('output-keliling').textContent = "";
}

// Fungsi untuk menghitung keliling
function hitungKeliling() {
  var sisi = parseFloat(document.getElementById('sisi-keliling').value);
  var keliling = 4 * sisi;
  document.getElementById('output-keliling').textContent = " Keliling : (4 x S) = " + " 4 x " + sisi + " = " + keliling;
  document.getElementById('output-luas').textContent = "";
}

// Fungsi untuk mereset formulir
function resetForm() {
  document.getElementById('calculate-form').reset();
  document.getElementById('output-luas').textContent = "";
  document.getElementById('output-keliling').textContent = "";
}
