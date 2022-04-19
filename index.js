
const addFields = document.getElementById('motif'),
arr = ['Douleur',
  'Renouvellement / réévaluation de traitement',
   'Trouble digestif', 'Infection (rhume, bouton, pus, cystite...)',
    "Trouble de l'humeur (fatigue, insomnie,irritabilité, dépression, moment difficile dans une vie, fatigue inexpliquée, etc.)",
     "Aide à l'arrêt d'une dépendance (alcool, tabac, drogue, comportement)",
     'Procédure administrative'];
for (let i = 0; i < arr.length; i++){
    const option = document.createElement("OPTION"),
    txt = document.createTextNode(arr[i]);

    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    motif.insertBefore(option,motif.lastChild);
}

