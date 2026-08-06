# dhwaniparekh.com

Source for my portfolio — UX research and product design work.

**Live:** [dhwaniparekh.com](https://dhwaniparekh.com)

## About

A hand-built static site. No framework, no build step, no dependencies — just
HTML, CSS, and a little vanilla JavaScript, served from GitHub Pages.

Three case studies, written long-form:

| Case study | Focus |
| --- | --- |
| [Start Simple with MyPlate](case-studies/myplate.html) | Redesigning goal-setting and food logging for a federal nutrition app |
| [CeraVe](case-studies/cerave.html) | Information architecture and tree testing across a large product catalog |
| [Tandem](case-studies/tandem.html) | An AI-assisted communication tool for special-education teams |

## Structure

```
index.html                 Homepage — hero, selected work, about, contact
styles.css                 Base tokens and shared layout
styles-creative.css        Homepage styling
nav.js                     Navigation behavior
copy-email.js              Click-to-copy on the contact address

case-studies/
  *.html                   One file per case study
  case-study.css           Shared case-study layout
  case-study-creative.css  Case-study styling
  zoom.js                  Click-to-zoom for figures
  assets/                  Images and video

resume/
  Resume.html              Print-ready resume (paged, exports to PDF)
  doc-page.js              Pagination component

uploads/                   Portrait
CNAME                      Custom domain
```

## Running locally

No tooling required. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Notes

- Type, color, and spacing are driven by CSS custom properties in `styles.css`.
- The resume paginates to a single sheet and prints without extra styling.
- Case-study imagery is my own work; please don't reuse it.

## Contact

[dparekh2@depaul.edu](mailto:dparekh2@depaul.edu) · [LinkedIn](https://www.linkedin.com/in/dhwani-parekh-8b126821/)
