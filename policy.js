/*
 * The privacy policy, written once for both places it is read: the app's
 * Settings › Privacy & about screen (js/screens/settings.js) and privacy.html,
 * the copy hosted for the App Store's privacy-policy link. Plain data —
 * sections of paragraphs — so the two can never say different things.
 *
 * It describes what the code does, and it has to change *before* the code
 * does. Anything that would send data off the phone — sync, accounts,
 * analytics, crash reports — or Apple Health needs a new version here first,
 * and a new answer to the App Store's privacy questions ("Data Not Collected"
 * today).
 */
window.GT = window.GT || {};

(function (GT) {
  'use strict';

  GT.policy = {
    updated: '16 September 2026',
    publisher: 'Byrdworks',
    email: 'support.byrdworks@gmail.com',
    sections: [
      {
        title: 'The short version',
        paragraphs: [
          'Everything you log in Gym Scribe stays on your iPhone. There are no accounts, servers, ' +
          'analytics, advertising or tracking, so we never receive your workouts, your body weight or ' +
          'anything else you enter.'
        ]
      },
      {
        title: 'What the app keeps, and where',
        paragraphs: [
          'The app stores what you give it — workouts, sets, reps and weights, notes, your exercise list ' +
          'and cycle settings, body-weight readings, and your preferences — in its own storage on your ' +
          'iPhone. Nobody else can read it, including us.',
          'Your iPhone includes the app’s data in its own backups (iCloud or your computer). Those ' +
          'backups are made and kept by Apple under your Apple account, not by us.'
        ]
      },
      {
        title: 'What we collect',
        paragraphs: [
          'Nothing. The app doesn’t connect to the internet, doesn’t use third-party analytics or ' +
          'crash-reporting services, and doesn’t show ads.'
        ]
      },
      {
        title: 'Notifications',
        paragraphs: [
          'The rest timer’s notification is scheduled on your iPhone and names the exercise you’re ' +
          'resting from. It can appear on your lock screen; the Notifications section of the iPhone ' +
          'Settings app lets you hide previews.'
        ]
      },
      {
        title: 'Apple Health',
        paragraphs: [
          'Apple Health is off unless you switch it on in Settings › Preferences. Then Gym Scribe saves ' +
          'each finished workout to the Health app on your iPhone — its type, when it started and ended, ' +
          'and, unless you turn it off, an estimate of the calories burned, worked out from your latest ' +
          'body weight. It never reads anything from Health.',
          'What is saved to Health is kept by Apple under your Apple account, like the rest of your Health ' +
          'data, and you can delete it in the Health app at any time. Deleting a workout in Gym Scribe ' +
          'deletes its copy in Health too.'
        ]
      },
      {
        title: 'Exports and restores',
        paragraphs: [
          'If you export a backup, the file contains all of your data, including body weight and notes. ' +
          'Where it goes is up to you — we don’t receive a copy.'
        ]
      },
      {
        title: 'Deleting your data',
        paragraphs: [
          'Settings › Data › Erase all data removes all of your data from the app, including its backup ' +
          'copies on your iPhone. Deleting the app does the same. Backups you exported, and your ' +
          'iPhone’s own backups, are not affected. Workouts you saved to Apple Health stay there until you ' +
          'delete them in the Health app.'
        ]
      },
      {
        title: 'Health information',
        paragraphs: [
          'Body weight and training history are personal. They’re never sold, shared, or used for ' +
          'advertising — they never leave your phone to begin with. Gym Scribe is not a medical device, ' +
          'and its next-weight suggestions and calorie estimates are not medical advice.'
        ]
      },
      {
        title: 'Children',
        paragraphs: [
          'Gym Scribe isn’t directed at children under 13, and it doesn’t collect personal ' +
          'information from anyone.'
        ]
      },
      {
        title: 'Changes',
        paragraphs: [
          'If this policy changes, the new version will be posted here and in the app before the change ' +
          'takes effect. If Gym Scribe ever starts collecting anything — crash reports, for example — ' +
          'this policy will say so first.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: [
          'Questions about this policy or the app: support.byrdworks@gmail.com. Gym Scribe is published ' +
          'by Byrdworks.'
        ]
      }
    ]
  };
})(window.GT);
