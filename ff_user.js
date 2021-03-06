/* user.js
 * Description:
 *   Privacy/personal config for Firefox that aims to not break good sites.
 *   This file does NOT control Firefox add-ons in any way. I use this config with the following add-ons:
 *      * uBlock Origin
 *      * HTTPS Everywhere (w/ 'Block all unencrypted requests' checked)
 *      * Privacy Badger
 *      * Decentraleyes
 *      * Cookie AutoDelete (w/ 'Autoclean' enabled)
 * Usage:
 *   1. Rename this file to 'user.js'.
 *   2. Go to about:support, next to 'Profile Folder' click Open Folder.
 *   3. Copy this file into the Profile folder.
 *   4. Completely close and restart Firefox browser.
 * How to undo these changes:
 *   1. Go to about:support, next to 'Profile Folder' click Open Folder.
 *   2. Delete this file, 'user.js'.
 *   3. Completely close and restart Firefox browser.
 * All sources:
 *   https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
 *   https://www.privacytools.io/#about_config
 *   https://www.reddit.com/r/firefox/comments/7kvk0b/configuring_firefox_for_better_security_privacy/
 *   https://www.reddit.com/r/firefox/comments/91hbkw/youtube_page_load_is_5x_slower_in_firefox_and/
 *   https://www.reddit.com/r/firefox/comments/91kebu/psa_newest_chrome_marks_all_http_not_secure_learn/
 *   https://www.reddit.com/r/firefox/comments/91t66x/whats_the_best_aboutconfig_settings_that_you/
 * Template:
 *   user_pref("", );
 */

// Personal preferences
//   * Disable page thumbnails capturing
user_pref("browser.pagethumbnails.capturing_disabled", true);
//   * Disable new tab activity stream
user_pref("browser.newtabpage.activity-stream.enabled", false);
//   * Pressing backspace goes back one page
user_pref("browser.backspace_action", 0);
//   * Disable studies & experiments
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
//   * Disable Pocket
user_pref("extensions.pocket.enabled", false);
//   * Display "Insecure Connection" when visiting a site over http
user_pref("security.insecure_connection_text.enabled", true);
//   * Disable browser animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
//   * Prevent YouTube from loading slowly in Firefox
user_pref("general.useragent.override.youtube.com", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0");

// Privacy settings
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true); // changes your user agent, which may affect downloading add-ons. check about:support
user_pref("privacy.trackingprotection.enabled", true); // this may or may not matter if you're using uBlock Origin
user_pref("browser.cache.offline.enable", false);
user_pref("browser.safebrowsing.malware.enabled", true); // I would rather go w/ the sec benefit here
user_pref("browser.safebrowsing.phishing.enabled", true); // I would rather go w/ the sec benefit here
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("media.eme.enabled", false); // disables DRM playback, but does not apply to Flash or Silverlight if you have those installed (TN: don't install them)
user_pref("media.gmp-widevinecdm.enabled", false); // disables more DRM content
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
user_pref("signon.rememberSignons", false);
user_pref("browser.sessionstore.privacy_level", 2); // never store extra session data
user_pref("network.IDN_show_punycode", true); // prevent phishing attacks that use punycode chars
