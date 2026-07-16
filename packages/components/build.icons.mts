import { readFile, writeFile } from 'node:fs/promises';
import { getIconsCSS, svgToURL } from '@iconify/utils';
import { locate } from '@iconify/json';
import { fileURLToPath } from 'node:url'

/**
* List of icons. Key is icon set prefix, value is array of icons
*
* @type {Record<string, string[]>}
*/
const icons: Record<string, string[]> = {
   'ph': [
      'arrow-left',
      'arrow-left-bold',
      'arrow-right',
      'arrow-right-bold',
      'arrow-up',
      'arrow-up-bold',
      'arrow-down',
      'arrow-down-bold',
      'caret-down',
      'caret-down-bold',
      'caret-up',
      'caret-up-bold',
      'caret-left',
      'caret-left-bold',
      'caret-right',
      'caret-right-bold',
      'check-bold',
      'check-circle',
      'check-circle-bold',
      'circle-wavy-warning',
      'circle-wavy-warning-bold',
      'info',
      'info-bold',
      'warning',
      'warning-bold',
      'x',
      'x-bold',
      'lock-simple-bold',
      'lock-simple-open-bold',
   ]
};

const customIcons: Record<string, string[]> = []

// Parse each icon set
let code = '';
for (const prefix in icons) {
   // Find location of .json file
   const filename = locate(prefix);

   // Load file and parse it
   /** @type {import("@iconify/types").IconifyJSON} */
   const iconSet: any = JSON.parse(await readFile(filename, 'utf8'));
   
   // Get CSS
   const css = getIconsCSS(iconSet, icons[prefix] || [], {
      iconSelector: ".icon-{name}",
      commonSelector: ".icon"
   });

   // Add it to code
   code += css;
}

if (customIcons && customIcons.length > 0) {
   for (const icon of customIcons) {
      // Add custom icon CSS
      const iconPath = fileURLToPath(new URL(`../assets/icons/${icon}.svg`, import.meta.url))
      const iconContent = await readFile(iconPath, 'utf8');
      let iconUrl

      if (iconContent) {
         iconUrl = svgToURL(iconContent)

         code += `.icon-${icon} {\n \t--svg: ${iconUrl}; \n}`;
      }
   }
}

// Save CSS file
// await writeFile('app/assets/css/icons.css', code, 'utf8');
await writeFile(fileURLToPath(new URL(`./src/styles/icons.css`, import.meta.url)), code, 'utf8');
console.log(`Saved CSS (${code.length} bytes in ${fileURLToPath(new URL(`../assets/css/icons.css`, import.meta.url))}`);