function validarCNPJ() {
    const cnpjInput = document.getElementById('cnpjInput');
    const resultado = document.getElementById('resultado');
  
    // Remova os caracteres especiais
    let cnpj = cnpjInput.value.replace(/[^\d]+/g, '');
  
    // Verifique o tamanho do CNPJ
    if (cnpj.length !== 14) {
      resultado.textContent = 'CNPJ inválido!';
      return;
    }
  
    // Calcule os dígitos verificadores
    const digitos = cnpj.split('');
    let sum = 0;
    let factor = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(digitos[i]) * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }
    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (parseInt(digitos[12]) !== digit) {
      resultado.textContent = 'CNPJ inválido!';
      return;
    }
  
    sum = 0;
    factor = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(digitos[i]) * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }
    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (parseInt(digitos[13]) !== digit) {
      resultado.textContent = 'CNPJ inválido!';
      return;
    }
  
    resultado.textContent = 'CNPJ válido!';
  }