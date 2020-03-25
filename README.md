


## HY / Fullstack MOOC / Phonebook v2

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


2.15: puhelinluettelo step7  
Uusi nimi ja numero tallennetaan db.json  

2.16: puhelinluettelo step8  - git branch par2-16step8  
personServices (kommunikointi db.json) moduli omana  

2.17: puhelinluettelo step9  - git branch par2-17step9  
Nimen poisto luettelosta  

2.18*: puhelinluettelo step10 - git branch par2-18step10  
Nimen päivitys uudella numerolla  
Notification komponentti poistettu käytästä  

2.19: puhelinluettelo step11 - git branch par2-19step11   
Notification komponentti otettu käyttöön ja lisätty ilmoituksia käyttäjälle.  

2.20*: puhelinluettelo step12 - git branch par2-20step12  
Virheenkäsittely lisäys/päivitys käsittelijään jos nimeä ei löydy db'stä  
Nimet näytetään aakkosjärjestyksessä.  

Puhelinluettelo on valmis. Kaikki tehtävät on tehty.   




