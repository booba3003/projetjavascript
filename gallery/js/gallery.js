
function upDate(previewPic) {
    // Vérifiez si l'événement se déclenche
    console.log("Event triggered on:", previewPic);

    // Afficher les informations de l'élément survolé
    console.log("Image src:", previewPic.src);
    console.log("Image alt:", previewPic.alt);

    // Modifier le texte et l'image d'arrière-plan de l'élément avec l'id 'image'
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`; // Change l'arrière-plan
    imageDiv.innerHTML = previewPic.alt; // Change le texte
}

function unDo() {
    // Réinitialiser l'élément avec l'id 'image'
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = ""; // Supprime l'arrière-plan
    imageDiv.innerHTML = "Hover over an image below to display here."; // Réinitialise le texte
}
