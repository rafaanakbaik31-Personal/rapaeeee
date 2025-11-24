const addItem = document.getElementById('addItem');
const stockTable = document.getElementById('stockTable');

let stockData = [];

function renderTable() {
    stockTable.innerHTML = "";

    stockData.forEach((item, index) => {
        stockTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>
                    <button class="edit-btn" onclick="editItem(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteItem(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

addItem.addEventListener('click', () => {
    const name = document.getElementById('itemName').value;
    const qty = parseInt(document.getElementById('itemQty').value);

    if (!name || qty <= 0) {
        alert("Isi data dengan benar!");
        return;
    }

    stockData.push({ name, qty });

    document.getElementById('itemName').value = "";
    document.getElementById('itemQty').value = "";

    renderTable();
});

function editItem(index) {
    const newQty = prompt("Masukkan jumlah baru:", stockData[index].qty);
    if (newQty !== null && newQty >= 0) {
        stockData[index].qty = parseInt(newQty);
        renderTable();
    }
}

function deleteItem(index) {
    if (confirm("Yakin ingin menghapus barang ini?")) {
        stockData.splice(index, 1);
        renderTable();
    }
}

// Render awal
renderTable();
