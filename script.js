const newDiv = document.createElement('div');
const newPara = document.createElement('p');

newPara.textContent = "Ceci est une paragraphe";

newDiv.appendChild(newPara);
document.body.appendChild(newDiv);

newPara.textContent = "Le texte a ete modifie";

newPara.style.backgroundColor = "lightblue";
newPara.style.textAlign = "center";
newPara.style.padding = "20px";

newDiv.addEventListener('click', () => {
    newPara.textContent = "Une clic a ete detecte";
});