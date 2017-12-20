/* user.js
 * Description:
 *   Privacy/personal config for Firefox that aims to not break good sites.
 * Usage:
 *   1. Rename this file to 'user.js'
 *   2. Go to about:support, next to 'Profile Folder' click Open Folder
 *   3. Close Firefox
 *   4. Copy this file into the Profile folder
 * Sources:
 *   https://www.privacytools.io/#about_config
 *   https://www.reddit.com/r/firefox/comments/7kvk0b/configuring_firefox_for_better_security_privacy/
 * Template:
 *   user_pref("", );
 */

user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.max_tabs_undo", 3);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("webgl.disabled", true);
// Disable Pocket add-on
user_pref("extensions.pocket.enabled", false);
// Disable studies & experiments
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);