


## HY / MOOC / Phonebook front v2

luotu - npx create-react-app phonebook-front
bootstrap tyylit

### Käynnistys  
front - npm start >> localhost:3000
tehtävästä 2.11 eteenpäin myös  
json server - npm run server  

### Edistyminen

2.6: puhelinluettelo step1 - tallennettu git branch par2-6step1  
Luetteloon lisätään vain nimiä.

2.7: puhelinluettelo step2 - tallennettu git branch par2-7step2  
Jos lisättävä nimi on jo sovelluksen tiedossa, estä lisäys.   
Tiedonanto erillisellä Notification komponentilla.  

2.8: puhelinluettelo step3 - tallennettu git branch par2-8step3  
Sovellus mahdollistaa numeron tallentamisen.  

2.9*: puhelinluettelo step4  
Nimien filteröinti  

2.10: puhelinluettelo step5 - git branch par2-10step5  
Sovelluksen refaktorointi  
If -lause poistettu DisplayNamesNumbers komponentista  

2.11: puhelinluettelo step6 - git branch par2-11step6   
Datan alkutila haetaan Axios-kirjaston avulla json-palvelimelta (portti 3001)  
Asennettu Axios -kirjasto selaimen ja palvelimen väliseen tiedonsiirtoon  
npm install axios --save  
Asennettu json-server sovelluskehityksen aikaiseksi riippuvuudeksi  
npm install json-server --save-dev  
Muokattu package.json  
"server": "json-server -p3001 --watch db.json"  

