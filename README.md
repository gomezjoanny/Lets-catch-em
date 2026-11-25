# Let’s Catch ’em: installable app (PWA)

A demo transaction monitoring, KYC and SAR workflow with training. All customers, counterparties and transactions are fictional. Do not enter real customer data.

## What is in this folder
- `index.html` the whole app
- `manifest.webmanifest` name, icons and colours for installing
- `sw.js` makes it work offline after the first visit
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` app icons (keep them in the same folder as index.html)

## 1. Put it online (HTTPS is required)
Pick one. All are free for a small demo.
- **Netlify:** go to app.netlify.com/drop and drag this whole folder in. You get a link in seconds.
- **Cloudflare Pages:** create a project, choose "Direct upload", upload the folder.
- **GitHub Pages:** upload the files to a repository, then Settings > Pages > deploy from the main branch.

Open the link once while online. The app then caches itself.

## 2. Install on a phone
- **iPhone (Safari):** Share > Add to Home Screen.
- **Android (Chrome):** menu > Install app (or Add to Home screen).

It opens full screen with its own icon.

## 3. Your data (and keeping it safe)
- Work is saved on the device only (browser storage). Nothing is sent anywhere.
- The app keeps the previous saved copy as well. If something looks wrong, go to Tools > Settings > Restore previous copy.
- It asks the phone to keep its storage permanently, and shows a Back up reminder on Today if you have not backed up for a week.
- Back up from Tools > Settings > Back up (download), and save the file in Files or iCloud Drive. Restore from the same screen.
- Deleting is always a two-tap action: Delete data and Reset all ask you to tap again to confirm.
- Removing the home-screen icon alone does not erase data, but clearing Safari website data does. Back up first.
- PDFs open the phone's share sheet where available (choose WhatsApp, Mail and so on). Otherwise they download.

## 4. Updating
Change any file, then change `VERSION` in `sw.js` (for example `aml-monitor-v7`) and upload again. Users get the new version on their next visit.

## 5. Offline notes
The PDF library loads from cdnjs on the first visit and is then cached. If a device never opened the app online, PDF export will not work until it does.

## 6. Before real use (not included here)
This is a pilot package. Real use needs: sign-in, a database with role-based access, tamper-proof audit logs, live transaction feeds, licensed sanctions and PEP screening, encryption and backups, hosting in the right country, and a security and compliance review. SAR material is confidential by law, so decide with your compliance team how it may be stored and shared.
