// lets get started 
function calculateResult() {

    //   product;Qte...
    const selectedProducts = [];
    const quantities = [];
    const unitPrices = [];
    for (let i = 1; i <= 3; i++) {
      const productSelect = document.getElementById(`Product${i}`);
      const quantityInput = document.getElementById(`number${i}`);
      selectedProducts.push(productSelect.options[productSelect.selectedIndex].text.split("/")[0]);
      quantities.push(parseFloat(quantityInput.value));
      unitPrices.push(parseFloat(productSelect.value));
    }
  
    
    for (let i = 1; i <= 3; i++) {
      const productCell = document.getElementById(`Product${i}`).parentElement;
      const quantityCell = document.getElementById(`number${i}`).parentElement;
      productCell.textContent = selectedProducts[i - 1];
      quantityCell.textContent = quantities[i - 1];
    }
  
    // Calc unitP;amounts...ect
    const productRows = document.querySelector("#resultat-table tbody");
    let netAmount = 0;
    
    for (let i = 0; i < unitPrices.length; i++) {
      const productName = selectedProducts[i];
      const unitPrice = unitPrices[i];
      const quantity = quantities[i];
      const amount = unitPrice * quantity;
    
      // tr for new product
      const newRow = document.createElement("tr");
    
      // td for les four
      const productNameCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const unitPriceCell = document.createElement("td");
      const amountCell = document.createElement("td");
    
      // td container
      productNameCell.textContent = productName;
      quantityCell.textContent = quantity;
      unitPriceCell.textContent = unitPrice.toFixed(2) + " DA";
      amountCell.textContent = amount.toFixed(2) + " DA";
    
      // Append cells to the new row
      newRow.appendChild(productNameCell);
      newRow.appendChild(quantityCell);
      newRow.appendChild(unitPriceCell);
      newRow.appendChild(amountCell);
    
      // Append the new row to the tbody of the result table
      productRows.appendChild(newRow);
    
      // Update netAmount boucle
      netAmount += amount;
    }
    
    let TaxAmount = 0;

    // Get the checkbox element
    const taxExemptionCheckbox = document.getElementById("taxExemptionCheckbox");

    // Check if the checkbox is checked
    if (taxExemptionCheckbox.checked) {
        TaxAmount = netAmount * 0.19;
    }

    const TaxRow = document.createElement("tr");
    TaxRow.innerHTML = `<td colspan="4">Tax Amount(19%)</td><td colspan="2">${TaxAmount} DA</td>`;
    
    const reductionPercentage = parseFloat(document.querySelector('input[name="reduction_option"]:checked').value);
    const reductionAmount = netAmount * (reductionPercentage / 100);
    const grossAmount = netAmount - reductionAmount + TaxAmount ;
    
    const netAmountRow = document.createElement("tr");
    netAmountRow.innerHTML = `<td colspan="4">Net Amount</td><td colspan="2">${netAmount.toFixed(2)} DA</td>`;
    
    const reductionAmountRow = document.createElement("tr");
    reductionAmountRow.innerHTML = `<td colspan="4">Reduction Amount</td><td colspan="2">${reductionAmount.toFixed(2)} DA</td>`;
  
    const grossAmountRow = document.createElement("tr");
    grossAmountRow.innerHTML = `<td colspan="4">Gross Amount</td><td colspan="2">${grossAmount.toFixed(2)} DA</td>`;
  
    // Append rows to the table
    const tbody = document.querySelector("#resultat-table tbody");

    tbody.appendChild(TaxRow);
    tbody.appendChild(netAmountRow);
    tbody.appendChild(reductionAmountRow);
    tbody.appendChild(grossAmountRow);
    
    // Get the element  scroll 
const resultSection = document.getElementById("resultat");

   // Check if the element exists
if (resultSection) {
    // Scroll to the result section
    resultSection.scrollIntoView({
        behavior:"smooth",
        block: "start"    
    });
}
  }
  
  