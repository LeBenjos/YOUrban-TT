# TT FullStack YOUrban React & Express
By Benjamin SCHINKEL.

## Back-End
**Outil Back-End :**
- Express

### Exercice N°1 :
---
L’objectif de ce premier exercice est de charger un document JSON
téléchargeable en annexe et de réaliser un CRUD sur les données inscrites.
Le rendu doit être sous forme d’API avec la possibilité de :

- Créer un nouvel élément en vérifiant la validité des valeurs
- Supprimer un élément à l’aide de son ID
- Modifier un élément à l’aide de son ID
- Obtenir un élément à l’aide de son nom

### Exercice N°2 :
---
Pour travailler sur des notions autres, merci d’essayer de réaliser les routes
API suivantes :

- Obtenir tous les commerces d’un secteur d’activité donné
- Obtenir tous les commerces d’une ville donnée
- Obtenir tous les commerces d’un secteur d’activité dans une ville donnée

### Exercice BONUS :
---
Pour travailler sur des notions plus complexes, merci d’essayer de réaliser les
routes API suivantes :

- Obtenir tous les établissements en fonction d’une ville donnée
- Obtenir tous les établissements en fonctions du secteur et de la ville
- Supprimer tous les établissements d’une ville
- Supprimer tous les établissements d’un secteur d’activité

## Front-End
**Outils Front-End :**
- React
- ChakraUI

### Execice N°1 :
---
L’objectif de cet exercice est de créer un atome contenant une Simple Table de
Chakra UI permettant d’afficher les données traitées par les exercices BackEnd.

### Exercice N°2 :
---
- Gestion de donnée :
    - Utilisez axios ou fetch pour récupérer les données de votre API et remplissez votre table Chakra UI avec la donnée fraîchement acquise.
- Exercice de création :
    - Sur votre atome de table, vous rajouterez un boutons d’action en forme de crayon et un bouton d’action en forme de poubelle pour chaque ligne du tableau

### Exercice N°3 :
Maintenant que nous avons une molécule complète :
- Liez le bouton Poubelle du tableaux à l’API pour supprimer la donnée sur votre BackEnd
- Rafraichissez la donnée à votre disposition avec un nouveau call API sur la route GET