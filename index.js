/*
    INITIAL SETUP => Get first variables from config.json
*/

const custom_app = require("./config");
const supported_app = require("./applications");
const mobile_app = require("google-play-scraper");

function toFilter() {
  const toSearch_name = supported_app.apps.filter(
    (item) => item.name == custom_app.app_id
  );
  try {
    if (toSearch_name.length == 0) {
      const toSearch_id = supported_app.apps.filter(
        (item) => item.id == custom_app.app_id
      );
      return toSearch_id[0].id;
    } else {
      return toSearch_name[0].id;
    }
  } catch {
    return custom_app.app_id;
  }
}

if (toFilter().length == 0) {
  console.log("[INFO] app_id needs a name!\n[EXIT] Press Ctrl + C, then run the script again!");
  return;
}

/*
    SEND THE DESIRED ID => Start RPC, this prevents unecessary starts and frequent RPC_CONNECTION_TIMEOUT
*/

const client = require("discord-rich-presence")("944685665243762728");
mobile_app
  .app({ appId: toFilter() })
  .then((result) => {
    if (custom_app.app_custom_details.length < 2) {
      client.updatePresence({
        details: result.title,
        startTimestamp: Date.now(),
        largeImageKey: result.icon,
        instance: true,
      });
    } else if (custom_app.app_custom_details.length < 128) {
      client.updatePresence({
        details: result.title,
        state: custom_app.app_custom_details,
        startTimestamp: Date.now(),
        largeImageKey: result.icon,
        instance: true,
      });
    } else {
      console.log(
        "[INFO] app_custom_details text must be less than 128 characters long!\n[EXIT] Press Ctrl + C, then run the script again!"
      );
      return;
    }
  })
  .catch((app_error) => {
    console.log("[ERROR] ", app_error + "\n[EXIT] Press Ctrl + C, then run the script again!");
  });

console.log(
  "[INFO] Application " + custom_app.app_id + " selected with success!\n[EXIT] Press Ctrl + C, then run the script again!"
);
