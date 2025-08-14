

1. Le navigateur envoie une requête HTTP POST vers /new_note avec le contenu de la note.

2. Le serveur reçoit la requête, enregistre la note et répond avec un code 302 pour rediriger le navigateur vers /notes.

3. Le navigateur suit la redirection et envoie une nouvelle requête GET pour /notes.

4. Le serveur renvoie le fichier HTML correspondant.

5. Le navigateur lit le HTML et lance les requêtes pour main.css et main.js.

6. Après avoir chargé main.js, le JavaScript envoie une requête GET vers /data.json.

7. Le serveur répond avec la liste des notes en format JSON.

8. Le navigateur utilise ces données pour afficher toutes les notes à l’écran.



