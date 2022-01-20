### Koraki za preizkus aplikacije
1. premaknite se v mapo /backend, poženite ukaz `.\bitcoind.exe -datadir="./data"`
2. ko se izvrši ukaz poženite še `node server.js`  
3. pojdite nazaj na `root` aplikacije in poženite `npm start`

### Uporaba
Na `localhost:3005` bo tekel server, ki bo sprejemal `POST` ukaze. Na `localhost:3000` se bo odprla aplikacija. 
Pojdite na domačo stran, kjer vpišete kaj želite zapisati na verigo. Nazaj dobite hash, ki ga vrne blockhain in ga lahko preverite na isti strani. (Preverite konzolo brskalnika, če ne izpisuje pravilno.)
