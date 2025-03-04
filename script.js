const amount = document.getElementById("amount");

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, ""); //recebendo o input e tirando as letras
  amount.value = value; // recebendo so numeros
};
