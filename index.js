const user = require("./config");
const store = require("app-store-scraper");

var application_id;
var application_name;

function check() {
  let discord_app_id = user.set_alt_name;
  let to_search_name = user.app_name;

  switch (discord_app_id) {
    case true:
      application_id = "957767689072422933";
    case false:
      application_id = "944685665243762728";
  }

  switch ((to_search_name.length == 0)) {
    case true:
      application_name = "";
    case false:
      application_name = user.app_name;
  }
}

check();

const client = require("discord-rich-presence")(application_id);

store
  .search({ term: application_name, num: 1 })
  .then((result) => {
    const app_name = result[0].title;
    const app_icon = result[0].icon;

    if (user.app_custom_details.length < 2) {
      client.updatePresence({
        details: app_name,
        startTimestamp: Date.now(),
        largeImageKey: app_icon,
        instance: true,
      });
    } else if (user.app_custom_details.length < 128) {
      client.updatePresence({
        details: app_name,
        state: user.app_custom_details,
        startTimestamp: Date.now(),
        largeImageKey: app_icon,
        instance: true,
      });
    }
  })
  .catch((error) => {
    console.log("\n[ERROR] " + error.stack);
    console.log(
      '\n[INFO] If the error is "term is required", make sure app_name have something inserted\n[INFO] If the error is "rpc connection timeout", restart your discord client via ctrl + r'
    );
  });
