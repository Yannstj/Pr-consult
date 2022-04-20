const addMedecin = document.getElementById('medecin'),

arrMedecin = [
  'Medecin A',
  'Medecin B',
  'Medecin C'
];

for (let i = 0; i < arrMedecin.length; i++){
    const option = document.createElement("OPTION"),
    txt = document.createTextNode(arrMedecin[i]);

    option.appendChild(txt);
    option.setAttribute("value", arrMedecin[i]);
    medecin.insertBefore(option, medecin.lastChild)
  }




const addMotif = document.getElementById('motif'),

arrMotif = ['Douleur',
       'Renouvellement / réévaluation de traitement',
       'Trouble digestif', 'Infection (rhume, bouton, pus, cystite...)',
       "Trouble de l'humeur (fatigue, insomnie,irritabilité, dépression, moment difficile dans une vie, fatigue inexpliquée, etc.)",
       "Aide à l'arrêt d'une dépendance (alcool, tabac, drogue, comportement)",
       'Procédure administrative'
      ];

for (let i = 0; i < arrMotif.length; i++){
    const option = document.createElement("OPTION"),
    txt = document.createTextNode(arrMotif[i]);

    option.appendChild(txt);
    option.setAttribute("value", arrMotif[i]);
    motif.insertBefore(option, motif.lastChild);
}

