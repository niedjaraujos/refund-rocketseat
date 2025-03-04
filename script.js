const amount = document.getElementById("amount");

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, ""); //recebendo o input e tirando as letras

  //convertendo em numero e transformar em centavos
  value = Number(value) / 100;
  amount.value = formatCurrencyBRL(value); // recebendo so numeros
};

// formata o valor para moeda Real
function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return value;
}
