# RPCDroid
Display any Play Store app as your discord rpc!

### Packages used:
- `discord-rich-presence`
- `app-store-scraper`
- `nodemon`

Due to problems with the `google-play-scraper`, the library got replaced in favor of `app-store-scraper`

### How to use:
Edit the `config.json` where:
- `app_name`: required, it searches the app you want to set.
- `app_custom_details`: allows you to insert a custom text (the "state" of the presence), don't worry, you can set it as empty if you don't want.
- `set_alt_name`: changes the "playing x" with either RPCDroid or Android.

### Installation
```sh
git clone https://github.com/Abacta/RPCDroid.git
cd RPCDroid
npm i
npm run dev
```
