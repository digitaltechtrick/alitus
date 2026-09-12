# Content & Editing Checklist

Personal content and placeholder notes for the AlitUs site. Use this checklist while replacing the templated copy with final text, images, links and business information.

## How placeholders work

- `<!-- CONTENT: KEY --> ... <!-- /CONTENT: KEY -->` marks a replaceable block on a page.
- `<!-- EDIT: KEY -->` marks a smaller single value to personalize (title, description, contact line).
- `CONTENT ASSET` comments describe where an image should live.
- `<!-- FUTURE LINK: KEY -->` / `<!-- FUTURE SOCIAL: ... -->` are reserved slots for links that are not ready yet.
- `<!-- PRODUCT SLOT n: ... -->` marks a product card you can update or extend.
- `data-content-key="..."` on a few large blocks makes content easy to locate for replacement.

Do not add visible "Coming soon" / "TODO" text — that styling is left to this checklist and HTML comments only.

## Global brand

- [x] Brand name: AlitUs
- [x] Tagline: "Smart Systems. Local Support."
- [x] Brand color: AlitUs Teal `#0F766E`
- [x] Brand assets folder: `assets/images/brand/` (folder ready, `.gitkeep`)

### Brand & logo assets (expected paths)

| Asset | Path | Use |
| --- | --- | --- |
| Horizontal logo | `assets/images/brand/alitus-logo.svg` | Header `.navbar-brand` and footer `.site-footer-logo` (replaces the current text wordmark). Inert sizing CSS is already in `assets/css/style.css`. |
| Icon / logo mark | `assets/images/brand/alitus-logo-mark.svg` | Offcanvas panel title (and favicon source). |
| Classic favicon | `assets/images/brand/favicon.ico` | `<link rel="icon">` in every page `<head>` (not added yet — would be a broken reference). |
| 32px favicon | `assets/images/brand/favicon-32x32.png` | `<link rel="icon" type="image/png">` in every page `<head>`. |
| Apple touch icon | `assets/images/brand/apple-touch-icon.png` | `<link rel="apple-touch-icon">` in every page `<head>`. |
| Social preview | `assets/images/brand/alitus-social-preview.jpg` | Open Graph / Twitter card `<meta>` images in every page `<head>`. |

### Recommended logo constraints

- Horizontal logo lockup (suits the single-line header/footer).
- Separate icon / logo mark.
- Works on dark and light surfaces (navigation and footer are dark; light page sections exist).
- Transparent background for the SVG exports.
- Official AlitUs Teal `#0F766E` as the primary brand color.
- Neutral black/white variants where necessary (e.g. monochrome favicon).

### Integration notes

- [ ] Drop the 6 files above into `assets/images/brand/` (folder now exists).
- [ ] Logo SVG: swap the text wordmark for `<img src="assets/images/brand/alitus-logo.svg" alt="AlitUs">` in the header/footer slots marked in the HTML.
- [ ] Logo mark: swap the offcanvas title text for `<img src="assets/images/brand/alitus-logo-mark.svg" alt="AlitUs">`.
- [ ] Add favicon + apple-touch-icon `<link>` tags to all 5 pages once the files exist (not added yet — avoid broken references).
- [ ] Add Open Graph / Twitter card `<meta>` tags on all 5 pages once `alitus-social-preview.jpg` exists.
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL (note: `https://github.com/digitaltechtrick/alitus` is the site repository, not the personal profile)
- [ ] Facebook / X / other social URLs

## Home (index.html)

- [x] Hero slide 1 — AlitUs introduction
- [x] Hero slide 2 — SunTrack featured product
- [x] Hero slide 3 — Custom solutions / services
- [ ] Hero copy confirmation (headlines and descriptions) — currently drafted
- [ ] Profile photograph for hero slide 1 (`assets/images/profile/patrick-alituha.jpg`) — currently a neutral "PA" placeholder
- [ ] Real SunTrack dashboard screenshot (`assets/images/products/suntrack/`) — currently an illustration (`suntrack.svg`)
- [ ] Product slots 2 (Business Systems) and 3 (Mobile Solutions) — update when new products are released
- [ ] About preview text confirmation
- [ ] Featured work: SunTrack case-study link (projects page section used for now)
- [x] Services preview list (4 services)

## About (about.html)

- [x] Role line: "Software Developer | Technology Builder | Entrepreneur"
- [x] Intro: Computer Science graduate building practical software
- [x] Background: ~5 years sales experience + CS degree
- [ ] Portfolio/everyday photo (`assets/images/profile/patrick-alituha.jpg`) — currently a "PA" monogram placeholder
- [ ] University, degree emphasis and graduation year (education detail)
- [ ] Refine the exact wording of the background quote
- [x] What I do cards (3)
- [x] Approach statement
- [x] Technology list (10 items)
- [x] Direction cards (6)

## Projects (projects.html)

### SunTrack
- [x] Description, problem and solution copy
- [x] Stack list (Flutter, Dart, Laravel, REST API, relational database)
- [x] Status: "In Development"
- [ ] Live demo link (SUNTRACK_LIVE_DEMO) — currently "Discuss This Project" → contact page
- [ ] GitHub / code repository link (SUNTRACK_GITHUB)
- [ ] Full case-study page (SUNTRACK_CASE_STUDY) — homepage links to the projects section for now
- [ ] Real screenshots (`assets/images/projects/suntrack/`) — currently an illustration (`suntrack-project.svg`)

### PatroniQ Store
- [x] Card copy (e-commerce + delivery)
- [ ] Screenshot (`assets/images/projects/patroniq-store/`) — currently "PQ" placeholder
- [ ] GitHub link (PATRONIQ_GITHUB)
- [ ] Live demo link (PATRONIQ_LIVE_DEMO)

### Rent Management System
- [x] Card copy (multi-tenant property management)
- [ ] Screenshot (`assets/images/projects/rent-management/`) — currently "RM" placeholder
- [ ] GitHub link (RENT_MANAGEMENT_GITHUB)
- [ ] Live demo link (RENT_MANAGEMENT_LIVE_DEMO)

### Accident Detection System
- [x] Card copy (IoT / embedded prototype) + prototype disclaimer
- [ ] Photo/diagram (`assets/images/projects/accident-detection/`) — currently "AD" placeholder
- [ ] GitHub link (ACCIDENT_DETECTION_GITHUB)
- [ ] Case-study / write-up link (ACCIDENT_DETECTION_CASE_STUDY)

## Services (services.html)

- [x] Service 1: Website Development
- [x] Service 2: Mobile App Development
- [x] Service 3: Business Management Systems
- [x] Service 4: Backend & API Development
- [x] Service 5: Smart Systems & Technical Prototyping
- [ ] New services — add as SERVICE 6+ when offered
- [x] Process steps (Understand / Plan / Build / Improve)
- [x] "Why AlitUs" cards (3)
- [x] Technology strip (12 items)

## Contact (contact.html)

- [x] Call: +256 772 918 718
- [x] WhatsApp: +256 772 918 718
- [x] Email: digitaltechtrick@gmail.com
- [ ] Location and business hours (CONTACT_LOCATION)
- [ ] Social links (LinkedIn, GitHub, etc.)
- [x] Formspree backend — V1 active
- [x] Formspree endpoint — https://formspree.io/f/mdeojqgj