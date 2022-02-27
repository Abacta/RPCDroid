# RPCDroid
Display any Play Store app as your discord rpc!

### Packages used:
- `discord-rich-presence`
- `google-play-scraper`
- `nodemon`

### How to use:
Edit the `config.json` where:
- `app_id`: required, it searches the app you want to set.
- `app_custom_details`: allows you to insert a custom text (the "state" of the presence), don't worry, you can set it as empty if you don't want.

### Installation
 If you have node installed:
```sh
git clone https://github.com/Abacta/RPCDroid.git
cd RPCDroid
npm i
npm run dev
```

##### For the packages with node included (releases page):
Windows:
```sh
cd RPCDroid
.\start.bat
```
Linux: 
```sh
cd RPCDroid
.\start.sh
```
