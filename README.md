# Alexandre C. Orthey Jr. — personal website

A complete, static website prepared for GitHub Pages from [orthey.weebly.com](https://orthey.weebly.com/) on September 11, 2026.

The website includes Home, Research, Group, CV, and Contact. It uses ordinary HTML and CSS, with local copies of the existing images, twelve paper PDFs, and the Ph.D. thesis. There is no installation, subscription, or build step.

## Preview on your computer

Extract the ZIP, open the `orthey-github-site` folder, and double-click `index.html`. The other pages and local PDFs work directly from that folder. Keep `assets` and `papers` alongside the HTML files.

## Publish on GitHub Pages

1. Sign in to [GitHub](https://github.com/), or create a free account if needed.
2. Create a **public** repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your actual GitHub username. If that repository already exists, preserve it and use a new repository called `academic-website` for this trial instead.
3. In the repository, choose **Add file → Upload files** (or the upload link shown for an empty repository). Upload the **contents** of the extracted `orthey-github-site` folder. `index.html`, the other HTML files, `assets`, and `papers` must be at the repository's top level. Do not upload the ZIP itself or put the whole site inside an extra folder. Commit the upload to `main`.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.
5. Wait for publication to finish. Use the website link displayed in **Settings → Pages**. For the username repository, the address is `https://YOUR-USERNAME.github.io/`; a repository called `academic-website` uses `https://YOUR-USERNAME.github.io/academic-website/`.

All internal paths are relative, so either repository choice works without changing the website. The included `.nojekyll` file tells GitHub to serve the static files directly. No custom domain or paid GitHub plan is required for a public repository.

Official instructions: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Update the website

Open a file in GitHub, select the pencil icon, make your edit, and commit it. GitHub Pages republishes after changes to the selected branch.

| File | Content to edit |
| --- | --- |
| `index.html` | Introduction, fellowship announcements, preprints, publications |
| `research.html` | Research descriptions and selected papers |
| `group.html` | Group description, members, and open positions |
| `cv.html` | Appointments, education, and thesis link |
| `contact.html` | Email, office, telephone, map, and academic profiles |
| `assets/style.css` | Colors, spacing, typography, and mobile layout |
| `assets/images/` | Photographs and research illustrations |
| `papers/` | Paper PDFs and doctoral thesis |

Comments such as `<!-- INTRODUCTION -->`, `<!-- PUBLICATION 15 -->`, and `<!-- GROUP MEMBER -->` mark the main editing areas. Change the words between HTML tags while keeping the tags in place. An ordinary link looks like:

```html
<a href="https://example.org/">Link label</a>
```

To add a publication, copy one complete `<li class="publication"> ... </li>` block in `index.html` and edit its number, title, authors, journal, and links. Upload any new PDF into `papers` and link it as `papers/filename.pdf`. To move a preprint into the publication list, move its entire block between the two lists. Update its citation and link when needed.

The same paper may also be listed on `research.html`; update that entry when appropriate. Fellowship announcements appear on Home and Group. Navigation and footer markup are repeated in all five files to keep the website functional without JavaScript; update all five if changing those shared elements.

Before publishing edits, preview the changed HTML file locally if you want to review its layout. After publication, check the page and any new links in your browser.

## Migration notes

- The current live Weebly pages were used, including the June 2026 appointment and later CV entries.
- Paper titles, author lists, and journal references on Research were aligned with the corresponding entries on Home where the old Research wording differed.
- The CV's Lattes link keeps the actual destination from the original page, whose displayed URL had omitted its last digit.
- The map link uses the coordinates in the original contact-page map. It opens Google Maps without the Weebly map wrapper.
- Research figures and member photos are retained. Institutional logos and the original vacancy image are included among the assets for reuse; the new CV uses a text timeline.
- Dates, contact details, and open positions reflect the source site on the migration date. Review the fellowship announcements when their deadlines pass.
- All five HTML entrypoints, local asset links, internal anchors, and PDF signatures were checked. Desktop and mobile layout rules are included; the site has not yet been tested in a browser.
- Publishing on GitHub Pages remains a separate step. This package does not create a repository, alter Weebly, redirect its visitors, or change your account settings.

Content and source images remain subject to their existing ownership and usage terms.
