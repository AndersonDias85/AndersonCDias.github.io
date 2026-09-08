function abrirDocumento(event, url) {

  event.preventDefault();

  const modal = document.getElementById("documentModal");
  const frame = document.getElementById("documentFrame");

  frame.src = url;

  modal.classList.add("active");
}


function fecharDocumento() {

  const modal = document.getElementById("documentModal");
  const frame = document.getElementById("documentFrame");

  frame.src = "";

  modal.classList.remove("active");
}