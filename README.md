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

### Supported Apps:
The file `applications.json` has some special applications where it sets automatically the app name (the app_id in `config.json`) to their respective Play Store ID, if you want to add more apps, feel free to edit the file.

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
./start.sh
```
