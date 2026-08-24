# Reef site base

Base Nuxt interne utilisée pendant le build des sujets Reef. Le workflow
central `MEA-RUN/actions/.github/workflows/reef-deploy.yml` récupère ce dépôt,
y copie les sujets, assets et outils du dépôt étudiant, puis publie le résultat
sur la branche `gh-pages` du dépôt étudiant.

Ce dépôt n'est pas un template destiné aux étudiants et ne publie rien par
lui-même. Il ne requiert ni GitHub App, ni secret, ni dépôt généré.
Machine-facing Nuxt template used to build and deploy Reef subject sites
