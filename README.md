# Vektoritiilet: näin pääset alkuun!

This guide is in Finnish, because it is part of an article written in Finnish. Documentation in English can be found from ![OpenMapTiles](https://openmaptiles.org/docs/) and ![Mapbox](https://www.mapbox.com/help/tutorials/) websites.
Tämä ohje on suomeksi, koska sen on tarkoitus olla osa suomenkielistä artikkelissa Skrolli-lehdessä. Englanninkielisiä ohjeita löytyy mm. ![OpenMapTilesin](https://openmaptiles.org/docs/) ja ![Mapboxin](https://www.mapbox.com/help/tutorials/) sivuilta.


Tämän ohjeen avulla teet pohjakartan ja haet OpenStreetMapista aineistoa, joista luot vektoritiiliaineiston ja teet mieleisesi tyylin.

## 1 OSM dataa vektoritiiliksi
Ensimmäisenä tarvitsemme paikkatietoa. OpenStreetMapista löytyy todella paljon aineistoa, jota ei löydy esim Googlen kartoista. Esimerkiksi OSM:stä löytyy tieto siitä missä on pyöräparkkeja. Haetaan siis ![overpassin](http://overpass-turbo.eu/) avulla kaikki Helsingin pyöräparkit. 

### 1.1 Hae ![overpass-turbo työkalulla](http://overpass-turbo.eu/) dataa GeoJSONina

 - Zoomaa sille alueelle josta haluat dataa
 - Valitse ylävalikosta wizard ja kirjoita kenttään `amenity=bicycle_parking` ja klikkaa build and run query.
 - Valitse ylävalikosta export ja download as GeoJSON
 - Voit ladata myös muita tasoja karttaasi, esimerkiksi baarit: `amenity=bar` tai leikkipaikat `leisure=playground`. Voit myös itse tutkia OpenSreetMapia ja keksiä mitä aineistoa haluaisit käyttää.
 
 ### 1.2 Luo vektoritiiliä GeoJSONista
Helpoin tapa esittää GeoJSONia selaimessa on käyttää kartanpiirtokirjastoa, kuten Leafletia tai Openlayersia. Nyt haluamme kuitenkin tehdä nimenomaan vektoritiiliä. Tähän on olemassa Mapboxin työkaluja. Mapbox tarjoaa kirjaston, ![geojson-vt](https://github.com/mapbox/geojson-vt), joka pilkkoo GeoJSONia vektoritiiliksi lennossa ilman tarvetta erilliselle tiilipalvelimelle.

`npm install geojson-vt`



## 1. Taustakartta OpenMapTilesin vektoritiilillä
Voit hakea tietyltä alueelta aineistot PostgreSQL-tietokantaan ja Mapboxin työkaluilla luoda niistä vektoritiiliä, jonka jälkeen sinun pitää asentaa ja käynnistää vektoritiilipalvelin, josta tiilet haetaan. Jos et halua itse ylläpitää palvelinta, voit käyttää Mapboxin tai OpenMapTilesin tarjoilemia valmiita vektoritiilisettejä OpenStreetMap-aineistoille.

Tässä ohjeessa käytän MapTileria, joka on OpenMapTilesin vektoritiilihostauspalvelu.

