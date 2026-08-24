# Reef site template

Template interne utilisé par l'automatisation Reef. Il contient uniquement le
shell Nuxt nécessaire pour installer la couche `reef`, recevoir les événements
du dépôt Subject et publier le résultat sur GitHub Pages.

Ce dépôt n'est pas le template destiné aux étudiants. Les dépôts générés à
partir de celui-ci sont des artefacts : leur contenu est remplacé par les
workflows centralisés de `MEA-RUN/actions`.

## Configuration de l'organisation

Les secrets `REEF_APP_CLIENT_ID` et `REEF_APP_PRIVATE_KEY` doivent être
disponibles dans les dépôts générés. L'application GitHub doit disposer de
`Contents: write`, `Administration: write`, `Pages: write` et `Metadata: read`.
Machine-facing Nuxt template used to build and deploy Reef subject sites
