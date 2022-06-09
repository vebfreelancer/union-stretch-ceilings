# Union stretch ceilings
[vebfreelancer.github.io/union-stretch-ceilings](https://vebfreelancer.github.io/union-stretch-ceilings/union/index.html)
```
Commercial development of the company's multi-page project for the installation of stretch ceilings.  
Rich and accessible interface. The functionality of the project is developed on vanilla JavaScript.

Implemented calculator for calculating the cost of installation in JavaScript, the calculator unit  
is made in the form of a form of sending data so that the user can place an order by sending the  
specified calculation data from the form to the server or email. Optimized page load speed with  
lazy image and map loading. Responsive interface for mobile devices.

In blocks of cards from video on click on the play button the video from YouTube is loaded and opens  
in  a modal window. This video does not load or slow down the loading of pages. Ability to edit video,  
insert  or replace by adding video id to date attributes.

Working with images - compression and conversion to the modern format of webp, using JavaScript is  
checked for support by the browser of this format, if supported, the loaded webp, for others, standard  
formats are loaded such as jpg, png. Upload images with 2x pixel density for retina displays.

In blocks of images in the form of a gallery, the ability to view slides in the lightgallery library is  
configured. Scroll navigation pages reviews and faq applied smooth-scroll plugin.
```
### Pages
1. [Home](https://vebfreelancer.github.io/union-stretch-ceilings/union/index.html)
2. [Catalog](https://vebfreelancer.github.io/union-stretch-ceilings/union/catalog.html)
3. [Product page](https://vebfreelancer.github.io/union-stretch-ceilings/union/product.html)
4. [Prices](https://vebfreelancer.github.io/union-stretch-ceilings/union/price.html)
5. [Gallery](https://vebfreelancer.github.io/union-stretch-ceilings/union/gallery.html)
6. [Stock](https://vebfreelancer.github.io/union-stretch-ceilings/union/stock.html)
7. [Lighting](https://vebfreelancer.github.io/union-stretch-ceilings/union/lighting.html)
8. [About company](https://vebfreelancer.github.io/union-stretch-ceilings/union/about.html)
9. [Vacancies](https://vebfreelancer.github.io/union-stretch-ceilings/union/vacancies.html)
10. [Vacancy page](https://vebfreelancer.github.io/union-stretch-ceilings/union/vacancy_page.html)
11. [Rewiews](https://vebfreelancer.github.io/union-stretch-ceilings/union/reviews.html)
12. [Faq](https://vebfreelancer.github.io/union-stretch-ceilings/union/faq.html)
13. [Contacts](https://vebfreelancer.github.io/union-stretch-ceilings/union/contacts.html)
14. [404](https://vebfreelancer.github.io/union-stretch-ceilings/union/404.html)
### Calculator algorithm
The result is derived based on the cost of the material, the number of corners in the room, lamps and tubes.  
This data is specified in the attributes.
- Canvas type:
  - MSD - 8$
  - Pongs - 9$
  - Fabric - 15$
- One corner - 8$
- One lamp - 3$
- One pipe - 8$

The cost of installation is calculated according to the following formula: the type of canvas is multiplied by  
the number of square meters plus the number of angles multiplied by the price of one corner plus the number of  
lamps multiplied by the price of that lamp plus the number of pipes multiplied by the price of one pipe.  
By default, the type of canvas is selected MSD 1 square meter and 4 corners from here just calculate the result

MSD 8<span>$</span> * 1 sq m + (4 corners * 8<span>$</span>) = 40<span>$</span> **or** 8 * 1 + (4 * 8) = 40<span>$</span>.

The final result is derived from the data entered by the user of the site, for example the user chose the type of  
canvas Pongs, 125 square meters, 6 corners, 4 lamps, 3 pipes, the result will be

9 * 125 + (6 * 8) + (4 * 3) + (3 * 8) = 1209<span>$</span>
### Implemented functionality:
- Calculator
- Image gallery[^1]
- YouTube video
- Google map
- Modal windows
- Sliders[^2]
- Scroll navigation[^3]
- Validation of input fields[^4]
- Responsive adaptive
- Retina graphics
- Semantics
- Cross - browser
- Lazy loading
  - Images[^5]
  - Video
  - Map
- Site menu
  - Catalog
  - Accordion
  - Tabs
  - Mobile devices
    - Burger menu
    - Drop-down 
### Applied technologies:
- Gulp
- SCSS
- JavaScript
- HTML5
- CSS3
- GRID
- FlexBox
- BEM
### Tests
- HTML validity - the result of the test for all pages of the site there are no errors or warnings according to the service Markup Validation Service W3C, validator checks the [markup validity](https://validator.w3.org/#validate_by_uri).
- CSS validity - no errors according to Markup Validation Service W3C, [css - validator](https://jigsaw.w3.org/css-validator/).
#### Plugins used:
[^1]: [lightgallery](https://sachinchoolur.github.io/lightgallery.js/)
[^2]: [swiper](https://swiperjs.com/)
[^3]: [smooth-scroll](https://github.com/cferdinandi/smooth-scroll)
[^4]: [inputmask](https://github.com/RobinHerbots/Inputmask)
[^5]: [lozad](https://apoorv.pro/lozad.js/)