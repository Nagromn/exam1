[1.1.0] - 2025-12-02
Améliorations majeures

Ajout d’une variable d’environnement API_URL afin d’éviter l’utilisation d’URL brutes dans les services d’authentification (login & register).

Refonte du microservice auth-gateway :

Configuration complète ajoutée.

L’authentification est désormais déportée proprement vers un microservice dédié.

Connexion directe au service d’authentification existant dans le backend.

Sécurité

Suppression de l’affichage du mot de passe dans la console (connexion & inscription).
(Le champ password n’est plus loggué ni retourné dans les erreurs.)

Uniformisation des messages d’erreur d’authentification :

Ne précise plus si l’email ou le mot de passe est incorrect.

Message générique pour éviter toute fuite d’information.

Validation renforcée des inputs lors de l’inscription

Email obligatoire

Mot de passe conforme (longueur minimale / caractères)

Vérification du format email

Dépendances / Maintenance

Mise à jour des dépendances MongoDB (packages obsolètes remplacés).

Correction de warnings liés à mongoose, mise à jour des drivers recommandés.

Corrections de bugs

Correction du bug empêchant l’inscription à cause de l’utilisation de routes statiques hardcodées.

Correction des erreurs réseau dues à l’absence de configuration du microservice d’authentification.