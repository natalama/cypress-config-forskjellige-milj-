# Velkommen 

Skal du bruke cypress-testene i forskjellige miljø? \
Da har du kommet til riktig sted.

Dette er et "skjelett" som viser hvordan man kan kjøre cypress-testene i forskjellige miljø. 

Du kan åpne cypress ved å bruke `npm run cy:open:{miljø}`. \
For å kjøre testene kan du bruke `npm run cy:run:{miljø}`

`{miljø}` kan være en av følgende: 
- stm
- atm
- prod

Logikken bak hvordan man henter riktig fil basert på konfig ligger i `cypress.config.js`

Kjører du programmet for første gang er det lurt å kjøre `npm install`.\

Det viktigste å kopiere her er følgende: 
- hele `config` mappe
- cypress.config.js
- package.json

Kos deg med testautomatisering.

Hilsen fra natalama
