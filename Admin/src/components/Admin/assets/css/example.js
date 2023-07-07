Sidebar{
  <div>
      <div className={`${Astyle.sidebar} ${Astyle.font}`} style={{ width: "300px" }} >

        <div className={`${Astyle.sidebar_wrapper}`}>
          <div className="logo">
            <Link to="#" className={`${Astyle.simple_text} ${Astyle.logo_mini}`}>
              OM
            </Link>
            <Link to="#" className={`${Astyle.simple_text} ${Astyle.logo_normal}`}>
              Ecommerce System
            </Link>
          </div>
          <ul className={`${Astyle.nav}`} >
            <li>
              <Link to="#">
                <i className={`${Astyle.tim_icons} icon-chart-pie-36`} ></i>
                <p className="font">Dashboard</p>
              </Link>
            </li>
            <li className=" ">
              <Link to="/category">
                <i className={`${Astyle.tim_icons} icon-atom`}></i>
                <p className="font">Category</p>
              </Link>
            </li>
            <li>
              <Link to="/addcategory">
                <i className={`${Astyle.tim_icons} icon-pin`}></i>
                <p className="font">Add Category</p>
              </Link>
            </li>
            <li>
              <Link to="/product">
                <i className={`${Astyle.tim_icons} icon-bell-55`}></i>
                <p className="font">Product</p>
              </Link>
            </li>
            <li>
              <Link to="/addproduct">
                <i className={`${Astyle.tim_icons} icon-single-02`}></i>
                <p className="font">Add Product</p>
              </Link>
            </li>
            <li>
              <Link to="/order">
                <i className={`${Astyle.tim_icons} icon-puzzle-10`}></i>
                <p className="font">Order</p>
              </Link>
            </li>
            <li>
              <Link to="/review">
                <i className={`${Astyle.tim_icons} icon-align-center`}></i>
                <p className="font">Review</p>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <i className={`${Astyle.tim_icons} icon-single-02`}></i>
                <p className="font">User</p>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
}

Footer{
  <>
      <footer id="footer" className={`${Astyle.footer} ${Astyle.mx_5}`}>
            <div className={`${Astyle.container_fluid}`}>
              <ul className={`${Astyle.nav}`}>
                <li className={`${Astyle.nav_item}`} >
                  <Link to="#" className={`${Astyle.nav_link}`}>
                    Creative Tim
                  </Link>
                </li>
                <li className={`${Astyle.nav_item}`}>
                  <Link to="#" className={`${Astyle.nav_link}`}>
                    About Us
                  </Link>
                </li>
                <li className={`${Astyle.nav_item}`}>
                  <Link to="#" className={`${Astyle.nav_link}`}>
                    Blog
                  </Link>
                </li>
              </ul>
              <div className={`${Astyle.copyright}`}>
                ©
                <script>
                  document.write(new Date().getFullYear())
                </script>2018 made with <i className={`${Astyle.tim_icons} icon-heart-2`}></i> by
                <Link to="#" target="_blank">Creative Tim</Link> for a better web.
              </div>
            </div>
          </footer>
    </>
}

Adminlayout{
  <>
  <Sidebar />
 
  <div className={`${Astyle.wrapper}`}>
    <div className={`${Astyle.main_panel}`}>

      <div className={`${Astyle.content}`}>
        <div className={`${Astyle.row} ${Astyle.mx_5}`}>
          <div className={`${Astyle.col_md_12}`}>
            <main className={`${Astyle.main}`}> {children} </main>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
}

black.module.css{
  <div>
  /*!

=========================================================
* Black Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)


* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*     brand Colors              */
/* navbar color */
:root {
  --blue: #5e72e4;
  --indigo: #5603ad;
  --purple: #8965e0;
  --pink: #f3a4b5;
  --red: #f5365c;
  --orange: #fb6340;
  --yellow: #ffd600;
  --green: #2dce89;
  --teal: #11cdef;
  --cyan: #2bffc6;
  --white: #ffffff;
  --gray: #6c757d;
  --gray-dark: #32325d;
  --light: #ced4da;
  --lighter: #e9ecef;
  --primary: #e14eca;
  --secondary: #f4f5f7;
  --success: #00f2c3;
  --info: #1d8cf8;
  --warning: #ff8d72;
  --danger: #fd5d93;
  --light: #adb5bd;
  --dark: #212529;
  --default: #344675;
  --white: #ffffff;
  --neutral: #ffffff;
  --darker: black;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(34, 42, 66, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #525f7f;
  text-align: left;
  background-color: #1e1e2f;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 600;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #e14eca;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #c221a9;
  text-decoration: none;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

select {
  word-wrap: normal;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.2;
  color: #32325d;
}

h1,
.h1 {
  font-size: 2.0625rem;
}

h2,
.h2 {
  font-size: 1.6875rem;
}

h3,
.h3 {
  font-size: 1.4375rem;
}

h4,
.h4 {
  font-size: 1.0625rem;
}

h5,
.h5 {
  font-size: 0.8125rem;
}

h6,
.h6 {
  font-size: 0.75rem;
}

.lead {
  font-size: 0.78125rem;
  font-weight: 300;
}

.display-1 {
  font-size: 3.3rem;
  font-weight: 600;
  line-height: 1.2;
}

.display-2 {
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 1.2;
}

.display-3 {
  font-size: 2.1875rem;
  font-weight: 600;
  line-height: 1.2;
}

.display-4 {
  font-size: 1.6275rem;
  font-weight: 600;
  line-height: 1.2;
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 0;
  border-top: 0.0625rem solid rgba(34, 42, 66, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 0.9625rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {
  content: "\2014\00A0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #1e1e2f;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(34, 42, 66, 0.075);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #f3a4b5;
  word-break: break-word;
}

a>code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #ffffff;
  background-color: #212529;
  border-radius: 0.2857rem;
  box-shadow: inset 0 -0.1rem 0 rgba(34, 42, 66, 0.25);
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 600;
  box-shadow: none;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container_fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col_md_12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.333333%;
  }

  .offset-sm-2 {
    margin-left: 16.666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.333333%;
  }

  .offset-sm-5 {
    margin-left: 41.666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.333333%;
  }

  .offset-sm-8 {
    margin-left: 66.666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.333333%;
  }

  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col_md_12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .offset-md-2 {
    margin-left: 16.666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.333333%;
  }

  .offset-md-5 {
    margin-left: 41.666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.333333%;
  }

  .offset-md-8 {
    margin-left: 66.666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.333333%;
  }

  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .offset-lg-2 {
    margin-left: 16.666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.333333%;
  }

  .offset-lg-5 {
    margin-left: 41.666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.333333%;
  }

  .offset-lg-8 {
    margin-left: 66.666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.333333%;
  }

  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.333333%;
  }

  .offset-xl-2 {
    margin-left: 16.666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.333333%;
  }

  .offset-xl-5 {
    margin-left: 41.666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.333333%;
  }

  .offset-xl-8 {
    margin-left: 66.666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.333333%;
  }

  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #525f7f;
  background-color: transparent;
}

.table th,
.table td {
  padding: 1rem;
  vertical-align: top;
  border-top: 0.0625rem solid #e3e3e3;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 0.125rem solid #e3e3e3;
}

.table tbody+tbody {
  border-top: 0.125rem solid #e3e3e3;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table_bordered {
  border: 0.0625rem solid #e3e3e3;
}

.table_bordered th,
.table_bordered td {
  border: 0.0625rem solid #e3e3e3;
}

.table_bordered thead th,
.table_bordered thead td {
  border-bottom-width: 0.125rem;
}

.table_borderless th,
.table_borderless td,
.table_borderless thead th,
.table_borderless tbody+tbody {
  border: 0;
}

.table_striped tbody tr:nth-of-type(odd) {
  background-color: rgba(34, 42, 66, 0.05);
}

.table-hover tbody tr:hover {
  color: #525f7f;
  background-color: rgba(34, 42, 66, 0.075);
}

.table-primary,
.table-primary>th,
.table-primary>td {
  background-color: #f7cdf0;
}

.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody+tbody {
  border-color: #efa3e3;
}

.table-hover .table-primary:hover {
  background-color: #f3b7e9;
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
  background-color: #f3b7e9;
}

.table-secondary,
.table-secondary>th,
.table-secondary>td {
  background-color: #fcfcfd;
}

.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody+tbody {
  border-color: #f9fafb;
}

.table-hover .table-secondary:hover {
  background-color: #ededf3;
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
  background-color: #ededf3;
}

.table-success,
.table-success>th,
.table-success>td {
  background-color: #b8fbee;
}

.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody+tbody {
  border-color: #7af8e0;
}

.table-hover .table-success:hover {
  background-color: #a0fae8;
}

.table-hover .table-success:hover>td,
.table-hover .table-success:hover>th {
  background-color: #a0fae8;
}

.table-info,
.table-info>th,
.table-info>td {
  background-color: #c0dffd;
}

.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody+tbody {
  border-color: #89c3fb;
}

.table-hover .table-info:hover {
  background-color: #a7d2fc;
}

.table-hover .table-info:hover>td,
.table-hover .table-info:hover>th {
  background-color: #a7d2fc;
}

.table-warning,
.table-warning>th,
.table-warning>td {
  background-color: #ffdfd8;
}

.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody+tbody {
  border-color: #ffc4b6;
}

.table-hover .table-warning:hover {
  background-color: #ffcabf;
}

.table-hover .table-warning:hover>td,
.table-hover .table-warning:hover>th {
  background-color: #ffcabf;
}

.table-danger,
.table-danger>th,
.table-danger>td {
  background-color: #fed2e1;
}

.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody+tbody {
  border-color: #feabc7;
}

.table-hover .table-danger:hover {
  background-color: #fdb9d0;
}

.table-hover .table-danger:hover>td,
.table-hover .table-danger:hover>th {
  background-color: #fdb9d0;
}

.table-light,
.table-light>th,
.table-light>td {
  background-color: #e8eaed;
}

.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody+tbody {
  border-color: #d4d9dd;
}

.table-hover .table-light:hover {
  background-color: #dadde2;
}

.table-hover .table-light:hover>td,
.table-hover .table-light:hover>th {
  background-color: #dadde2;
}

.table-dark,
.table-dark>th,
.table-dark>td {
  background-color: #c1c2c3;
}

.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody+tbody {
  border-color: #8c8e90;
}

.table-hover .table-dark:hover {
  background-color: #b4b5b6;
}

.table-hover .table-dark:hover>td,
.table-hover .table-dark:hover>th {
  background-color: #b4b5b6;
}

.table-default,
.table-default>th,
.table-default>td {
  background-color: #c6cbd8;
}

.table-default th,
.table-default td,
.table-default thead th,
.table-default tbody+tbody {
  border-color: #959fb7;
}

.table-hover .table-default:hover {
  background-color: #b7bdce;
}

.table-hover .table-default:hover>td,
.table-hover .table-default:hover>th {
  background-color: #b7bdce;
}

.table-white,
.table-white>th,
.table-white>td {
  background-color: white;
}

.table-white th,
.table-white td,
.table-white thead th,
.table-white tbody+tbody {
  border-color: white;
}

.table-hover .table-white:hover {
  background-color: #f2f2f2;
}

.table-hover .table-white:hover>td,
.table-hover .table-white:hover>th {
  background-color: #f2f2f2;
}

.table-neutral,
.table-neutral>th,
.table-neutral>td {
  background-color: white;
}

.table-neutral th,
.table-neutral td,
.table-neutral thead th,
.table-neutral tbody+tbody {
  border-color: white;
}

.table-hover .table-neutral:hover {
  background-color: #f2f2f2;
}

.table-hover .table-neutral:hover>td,
.table-hover .table-neutral:hover>th {
  background-color: #f2f2f2;
}

.table-darker,
.table-darker>th,
.table-darker>td {
  background-color: #b8b8b8;
}

.table-darker th,
.table-darker td,
.table-darker thead th,
.table-darker tbody+tbody {
  border-color: #7a7a7a;
}

.table-hover .table-darker:hover {
  background-color: #ababab;
}

.table-hover .table-darker:hover>td,
.table-hover .table-darker:hover>th {
  background-color: #ababab;
}

.table-active,
.table-active>th,
.table-active>td {
  background-color: rgba(34, 42, 66, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(25, 31, 49, 0.075);
}

.table-hover .table-active:hover>td,
.table-hover .table-active:hover>th {
  background-color: rgba(25, 31, 49, 0.075);
}

.table .thead-dark th {
  color: #1e1e2f;
  background-color: #212529;
  border-color: #32383e;
}

.table .thead-light th {
  color: #525f7f;
  background-color: #e9ecef;
  border-color: #e3e3e3;
}

.table-dark {
  color: #1e1e2f;
  background-color: #212529;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #32383e;
}

.table-dark.table_bordered {
  border: 0;
}

.table-dark.table_striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #1e1e2f;
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-sm>.table_bordered {
    border: 0;
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-md>.table_bordered {
    border: 0;
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-lg>.table_bordered {
    border: 0;
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-xl>.table_bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive>.table_bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.5rem 0.7rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.428571;
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #cad1d7;
  border-radius: 0.25rem;
  box-shadow: none;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: rgba(255, 255, 255, 0.8);
  background-color: #ffffff;
  border-color: rgba(50, 151, 211, 0.25);
  outline: 0;
  box-shadow: none, none;
}

.form-control::placeholder {
  color: #adb5bd;
  opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:focus::-ms-value {
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.428571;
}

.col-form-label-lg {
  padding-top: calc(0.875rem + 1px);
  padding-bottom: calc(0.875rem + 1px);
  font-size: 0.875rem;
  line-height: 1.35;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.75rem;
  line-height: 1.35;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
  line-height: 1.428571;
  color: #525f7f;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm,
.form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.35em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.35;
  border-radius: 0.2857rem;
}

.form-control-lg {
  height: calc(1.35em + 1.75rem + 2px);
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  line-height: 1.35;
  border-radius: 0.4285rem;
}

select.form-control[size],
select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row>.col,
.form-row>[class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input:disabled~.form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #00f2c3;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #ffffff;
  background-color: rgba(0, 242, 195, 0.9);
  border-radius: 0.25rem;
}

.was-validated .form-control:valid,
.form-control.is-valid {
  border-color: #00f2c3;
  padding-right: 2.25rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2300f2c3' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center right calc(0.357143em + 0.25rem);
  background-size: calc(0.714286em + 0.5rem) calc(0.714286em + 0.5rem);
}

.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
  border-color: #00f2c3;
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);
}

.was-validated .form-control:valid~.valid-feedback,
.was-validated .form-control:valid~.valid-tooltip,
.form-control.is-valid~.valid-feedback,
.form-control.is-valid~.valid-tooltip {
  display: block;
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
  padding-right: 2.25rem;
  background-position: top calc(0.357143em + 0.25rem) right calc(0.357143em + 0.25rem);
}

.was-validated .custom-select:valid,
.custom-select.is-valid {
  border-color: #00f2c3;
  padding-right: calc((1em + 1rem) * 3 / 4 + 1.7rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.7rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2300f2c3' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") transparent no-repeat center right 1.7rem/calc(0.714286em + 0.5rem) calc(0.714286em + 0.5rem);
}

.was-validated .custom-select:valid:focus,
.custom-select.is-valid:focus {
  border-color: #00f2c3;
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);
}

.was-validated .custom-select:valid~.valid-feedback,
.was-validated .custom-select:valid~.valid-tooltip,
.custom-select.is-valid~.valid-feedback,
.custom-select.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .form-control-file:valid~.valid-feedback,
.was-validated .form-control-file:valid~.valid-tooltip,
.form-control-file.is-valid~.valid-feedback,
.form-control-file.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .form-check-input:valid~.form-check-label,
.form-check-input.is-valid~.form-check-label {
  color: #00f2c3;
}

.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip,
.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid~.custom-control-label,
.custom-control-input.is-valid~.custom-control-label {
  color: #00f2c3;
}

.was-validated .custom-control-input:valid~.custom-control-label::before,
.custom-control-input.is-valid~.custom-control-label::before {
  border-color: #00f2c3;
}

.was-validated .custom-control-input:valid~.valid-feedback,
.was-validated .custom-control-input:valid~.valid-tooltip,
.custom-control-input.is-valid~.valid-feedback,
.custom-control-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid:checked~.custom-control-label::before,
.custom-control-input.is-valid:checked~.custom-control-label::before {
  border-color: #26ffd5;
  background-color: #26ffd5;
}

.was-validated .custom-control-input:valid:focus~.custom-control-label::before,
.custom-control-input.is-valid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);
}

.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before {
  border-color: #00f2c3;
}

.was-validated .custom-file-input:valid~.custom-file-label,
.custom-file-input.is-valid~.custom-file-label {
  border-color: #00f2c3;
}

.was-validated .custom-file-input:valid~.valid-feedback,
.was-validated .custom-file-input:valid~.valid-tooltip,
.custom-file-input.is-valid~.valid-feedback,
.custom-file-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-file-input:valid:focus~.custom-file-label,
.custom-file-input.is-valid:focus~.custom-file-label {
  border-color: #00f2c3;
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #ff8d72;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #ffffff;
  background-color: rgba(255, 141, 114, 0.9);
  border-radius: 0.25rem;
}

.was-validated .form-control:invalid,
.form-control.is-invalid {
  border-color: #ff8d72;
  padding-right: 2.25rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff8d72' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23ff8d72' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(0.357143em + 0.25rem);
  background-size: calc(0.714286em + 0.5rem) calc(0.714286em + 0.5rem);
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus {
  border-color: #ff8d72;
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);
}

.was-validated .form-control:invalid~.invalid-feedback,
.was-validated .form-control:invalid~.invalid-tooltip,
.form-control.is-invalid~.invalid-feedback,
.form-control.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
  padding-right: 2.25rem;
  background-position: top calc(0.357143em + 0.25rem) right calc(0.357143em + 0.25rem);
}

.was-validated .custom-select:invalid,
.custom-select.is-invalid {
  border-color: #ff8d72;
  padding-right: calc((1em + 1rem) * 3 / 4 + 1.7rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.7rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff8d72' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23ff8d72' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") transparent no-repeat center right 1.7rem/calc(0.714286em + 0.5rem) calc(0.714286em + 0.5rem);
}

.was-validated .custom-select:invalid:focus,
.custom-select.is-invalid:focus {
  border-color: #ff8d72;
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);
}

.was-validated .custom-select:invalid~.invalid-feedback,
.was-validated .custom-select:invalid~.invalid-tooltip,
.custom-select.is-invalid~.invalid-feedback,
.custom-select.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .form-control-file:invalid~.invalid-feedback,
.was-validated .form-control-file:invalid~.invalid-tooltip,
.form-control-file.is-invalid~.invalid-feedback,
.form-control-file.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .form-check-input:invalid~.form-check-label,
.form-check-input.is-invalid~.form-check-label {
  color: #ff8d72;
}

.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip,
.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid~.custom-control-label,
.custom-control-input.is-invalid~.custom-control-label {
  color: #ff8d72;
}

.was-validated .custom-control-input:invalid~.custom-control-label::before,
.custom-control-input.is-invalid~.custom-control-label::before {
  border-color: #ff8d72;
}

.was-validated .custom-control-input:invalid~.invalid-feedback,
.was-validated .custom-control-input:invalid~.invalid-tooltip,
.custom-control-input.is-invalid~.invalid-feedback,
.custom-control-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,
.custom-control-input.is-invalid:checked~.custom-control-label::before {
  border-color: #ffb6a5;
  background-color: #ffb6a5;
}

.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,
.custom-control-input.is-invalid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);
}

.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before {
  border-color: #ff8d72;
}

.was-validated .custom-file-input:invalid~.custom-file-label,
.custom-file-input.is-invalid~.custom-file-label {
  border-color: #ff8d72;
}

.was-validated .custom-file-input:invalid~.invalid-feedback,
.was-validated .custom-file-input:invalid~.invalid-tooltip,
.custom-file-input.is-invalid~.invalid-feedback,
.custom-file-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-file-input:invalid:focus~.custom-file-label,
.custom-file-input.is-invalid:focus~.custom-file-label {
  border-color: #ff8d72;
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-plaintext {
    display: inline-block;
  }

  .form-inline .input-group,
  .form-inline .custom-select {
    width: auto;
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }

  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 600;
  color: #525f7f;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 11px 40px;
  font-size: 0.875rem;
  line-height: 1.35em;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #525f7f;
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled):active:focus,
.btn:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn_primary {
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn_primary:hover {
  color: #ffffff;
  background-color: #db2dc0;
  border-color: #d725bb;
}

.btn_primary:focus,
.btn_primary.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(230, 105, 210, 0.5);
}

.btn_primary.disabled,
.btn_primary:disabled {
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
}

.btn_primary:not(:disabled):not(.disabled):active,
.btn_primary:not(:disabled):not(.disabled).active,
.show>.btn_primary.dropdown-toggle {
  color: #ffffff;
  background-color: #d725bb;
  border-color: #cd23b2;
}

.btn_primary:not(:disabled):not(.disabled):active:focus,
.btn_primary:not(:disabled):not(.disabled).active:focus,
.show>.btn_primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(230, 105, 210, 0.5);
}

.btn-secondary {
  color: #212529;
  background-color: #f4f5f7;
  border-color: #f4f5f7;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-secondary:hover {
  color: #212529;
  background-color: #dee1e7;
  border-color: #d6dae2;
}

.btn-secondary:focus,
.btn-secondary.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(212, 214, 216, 0.5);
}

.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #212529;
  background-color: #f4f5f7;
  border-color: #f4f5f7;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show>.btn-secondary.dropdown-toggle {
  color: #212529;
  background-color: #d6dae2;
  border-color: #cfd3dc;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(212, 214, 216, 0.5);
}

.btn-success {
  color: #ffffff;
  background-color: #00f2c3;
  border-color: #00f2c3;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-success:hover {
  color: #ffffff;
  background-color: #00cca4;
  border-color: #00bf9a;
}

.btn-success:focus,
.btn-success.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(38, 244, 204, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
  color: #ffffff;
  background-color: #00f2c3;
  border-color: #00f2c3;
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show>.btn-success.dropdown-toggle {
  color: #ffffff;
  background-color: #00bf9a;
  border-color: #00b290;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(38, 244, 204, 0.5);
}

.btn-info {
  color: #ffffff;
  background-color: #1d8cf8;
  border-color: #1d8cf8;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-info:hover {
  color: #ffffff;
  background-color: #0779e8;
  border-color: #0772db;
}

.btn-info:focus,
.btn-info.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(63, 157, 249, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
  color: #ffffff;
  background-color: #1d8cf8;
  border-color: #1d8cf8;
}

.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show>.btn-info.dropdown-toggle {
  color: #ffffff;
  background-color: #0772db;
  border-color: #066ccf;
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(63, 157, 249, 0.5);
}

.btn-warning {
  color: #ffffff;
  background-color: #ff8d72;
  border-color: #ff8d72;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-warning:hover {
  color: #ffffff;
  background-color: #ff6e4c;
  border-color: #ff643f;
}

.btn-warning:focus,
.btn-warning.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 158, 135, 0.5);
}

.btn-warning.disabled,
.btn-warning:disabled {
  color: #ffffff;
  background-color: #ff8d72;
  border-color: #ff8d72;
}

.btn-warning:not(:disabled):not(.disabled):active,
.btn-warning:not(:disabled):not(.disabled).active,
.show>.btn-warning.dropdown-toggle {
  color: #ffffff;
  background-color: #ff643f;
  border-color: #ff5932;
}

.btn-warning:not(:disabled):not(.disabled):active:focus,
.btn-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 158, 135, 0.5);
}

.btn_danger {
  color: #ffffff;
  background-color: #fd5d93;
  border-color: #fd5d93;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn_danger:hover {
  color: #ffffff;
  background-color: #fd377a;
  border-color: #fc2b71;
}

.btn_danger:focus,
.btn_danger.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(253, 117, 163, 0.5);
}

.btn_danger.disabled,
.btn_danger:disabled {
  color: #ffffff;
  background-color: #fd5d93;
  border-color: #fd5d93;
}

.btn_danger:not(:disabled):not(.disabled):active,
.btn_danger:not(:disabled):not(.disabled).active,
.show>.btn_danger.dropdown-toggle {
  color: #ffffff;
  background-color: #fc2b71;
  border-color: #fc1e69;
}

.btn_danger:not(:disabled):not(.disabled):active:focus,
.btn_danger:not(:disabled):not(.disabled).active:focus,
.show>.btn_danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(253, 117, 163, 0.5);
}

.btn-light {
  color: #ffffff;
  background-color: #adb5bd;
  border-color: #adb5bd;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-light:hover {
  color: #ffffff;
  background-color: #98a2ac;
  border-color: #919ca6;
}

.btn-light:focus,
.btn-light.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(185, 192, 199, 0.5);
}

.btn-light.disabled,
.btn-light:disabled {
  color: #ffffff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-light:not(:disabled):not(.disabled):active,
.btn-light:not(:disabled):not(.disabled).active,
.show>.btn-light.dropdown-toggle {
  color: #ffffff;
  background-color: #919ca6;
  border-color: #8a95a1;
}

.btn-light:not(:disabled):not(.disabled):active:focus,
.btn-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(185, 192, 199, 0.5);
}

.btn-dark {
  color: #ffffff;
  background-color: #212529;
  border-color: #212529;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-dark:hover {
  color: #ffffff;
  background-color: #101214;
  border-color: #0a0c0d;
}

.btn-dark:focus,
.btn-dark.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(66, 70, 73, 0.5);
}

.btn-dark.disabled,
.btn-dark:disabled {
  color: #ffffff;
  background-color: #212529;
  border-color: #212529;
}

.btn-dark:not(:disabled):not(.disabled):active,
.btn-dark:not(:disabled):not(.disabled).active,
.show>.btn-dark.dropdown-toggle {
  color: #ffffff;
  background-color: #0a0c0d;
  border-color: #050506;
}

.btn-dark:not(:disabled):not(.disabled):active:focus,
.btn-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(66, 70, 73, 0.5);
}

.btn-default {
  color: #ffffff;
  background-color: #344675;
  border-color: #344675;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-default:hover {
  color: #ffffff;
  background-color: #28365b;
  border-color: #243152;
}

.btn-default:focus,
.btn-default.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(82, 98, 138, 0.5);
}

.btn-default.disabled,
.btn-default:disabled {
  color: #ffffff;
  background-color: #344675;
  border-color: #344675;
}

.btn-default:not(:disabled):not(.disabled):active,
.btn-default:not(:disabled):not(.disabled).active,
.show>.btn-default.dropdown-toggle {
  color: #ffffff;
  background-color: #243152;
  border-color: #202c49;
}

.btn-default:not(:disabled):not(.disabled):active:focus,
.btn-default:not(:disabled):not(.disabled).active:focus,
.show>.btn-default.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(82, 98, 138, 0.5);
}

.btn-white {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-white:hover {
  color: #212529;
  background-color: #ececec;
  border-color: #e6e6e6;
}

.btn-white:focus,
.btn-white.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(222, 222, 223, 0.5);
}

.btn-white.disabled,
.btn-white:disabled {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-white:not(:disabled):not(.disabled):active,
.btn-white:not(:disabled):not(.disabled).active,
.show>.btn-white.dropdown-toggle {
  color: #212529;
  background-color: #e6e6e6;
  border-color: #dfdfdf;
}

.btn-white:not(:disabled):not(.disabled):active:focus,
.btn-white:not(:disabled):not(.disabled).active:focus,
.show>.btn-white.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(222, 222, 223, 0.5);
}

.btn-neutral {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-neutral:hover {
  color: #212529;
  background-color: #ececec;
  border-color: #e6e6e6;
}

.btn-neutral:focus,
.btn-neutral.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(222, 222, 223, 0.5);
}

.btn-neutral.disabled,
.btn-neutral:disabled {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-neutral:not(:disabled):not(.disabled):active,
.btn-neutral:not(:disabled):not(.disabled).active,
.show>.btn-neutral.dropdown-toggle {
  color: #212529;
  background-color: #e6e6e6;
  border-color: #dfdfdf;
}

.btn-neutral:not(:disabled):not(.disabled):active:focus,
.btn-neutral:not(:disabled):not(.disabled).active:focus,
.show>.btn-neutral.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(222, 222, 223, 0.5);
}

.btn-darker {
  color: #ffffff;
  background-color: black;
  border-color: black;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-darker:hover {
  color: #ffffff;
  background-color: black;
  border-color: black;
}

.btn-darker:focus,
.btn-darker.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(38, 38, 38, 0.5);
}

.btn-darker.disabled,
.btn-darker:disabled {
  color: #ffffff;
  background-color: black;
  border-color: black;
}

.btn-darker:not(:disabled):not(.disabled):active,
.btn-darker:not(:disabled):not(.disabled).active,
.show>.btn-darker.dropdown-toggle {
  color: #ffffff;
  background-color: black;
  border-color: black;
}

.btn-darker:not(:disabled):not(.disabled):active:focus,
.btn-darker:not(:disabled):not(.disabled).active:focus,
.show>.btn-darker.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(38, 38, 38, 0.5);
}

.btn-outline-primary {
  color: #e14eca;
  border-color: #e14eca;
}

.btn-outline-primary:hover {
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
}

.btn-outline-primary:focus,
.btn-outline-primary.focus {
  box-shadow: 0 0 0 0 rgba(225, 78, 202, 0.5);
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #e14eca;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show>.btn-outline-primary.dropdown-toggle {
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(225, 78, 202, 0.5);
}

.btn-outline-secondary {
  color: #f4f5f7;
  border-color: #f4f5f7;
}

.btn-outline-secondary:hover {
  color: #212529;
  background-color: #f4f5f7;
  border-color: #f4f5f7;
}

.btn-outline-secondary:focus,
.btn-outline-secondary.focus {
  box-shadow: 0 0 0 0 rgba(244, 245, 247, 0.5);
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #f4f5f7;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active,
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.show>.btn-outline-secondary.dropdown-toggle {
  color: #212529;
  background-color: #f4f5f7;
  border-color: #f4f5f7;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(244, 245, 247, 0.5);
}

.btn-outline-success {
  color: #00f2c3;
  border-color: #00f2c3;
}

.btn-outline-success:hover {
  color: #ffffff;
  background-color: #00f2c3;
  border-color: #00f2c3;
}

.btn-outline-success:focus,
.btn-outline-success.focus {
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.5);
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #00f2c3;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active,
.btn-outline-success:not(:disabled):not(.disabled).active,
.show>.btn-outline-success.dropdown-toggle {
  color: #ffffff;
  background-color: #00f2c3;
  border-color: #00f2c3;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.5);
}

.btn-outline-info {
  color: #1d8cf8;
  border-color: #1d8cf8;
}

.btn-outline-info:hover {
  color: #ffffff;
  background-color: #1d8cf8;
  border-color: #1d8cf8;
}

.btn-outline-info:focus,
.btn-outline-info.focus {
  box-shadow: 0 0 0 0 rgba(29, 140, 248, 0.5);
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
  color: #1d8cf8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active,
.btn-outline-info:not(:disabled):not(.disabled).active,
.show>.btn-outline-info.dropdown-toggle {
  color: #ffffff;
  background-color: #1d8cf8;
  border-color: #1d8cf8;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(29, 140, 248, 0.5);
}

.btn-outline-warning {
  color: #ff8d72;
  border-color: #ff8d72;
}

.btn-outline-warning:hover {
  color: #ffffff;
  background-color: #ff8d72;
  border-color: #ff8d72;
}

.btn-outline-warning:focus,
.btn-outline-warning.focus {
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.5);
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  color: #ff8d72;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show>.btn-outline-warning.dropdown-toggle {
  color: #ffffff;
  background-color: #ff8d72;
  border-color: #ff8d72;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.5);
}

.btn-outline-danger {
  color: #fd5d93;
  border-color: #fd5d93;
}

.btn-outline-danger:hover {
  color: #ffffff;
  background-color: #fd5d93;
  border-color: #fd5d93;
}

.btn-outline-danger:focus,
.btn-outline-danger.focus {
  box-shadow: 0 0 0 0 rgba(253, 93, 147, 0.5);
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  color: #fd5d93;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active,
.btn-outline-danger:not(:disabled):not(.disabled).active,
.show>.btn-outline-danger.dropdown-toggle {
  color: #ffffff;
  background-color: #fd5d93;
  border-color: #fd5d93;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(253, 93, 147, 0.5);
}

.btn-outline-light {
  color: #adb5bd;
  border-color: #adb5bd;
}

.btn-outline-light:hover {
  color: #ffffff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-outline-light:focus,
.btn-outline-light.focus {
  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #adb5bd;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active,
.btn-outline-light:not(:disabled):not(.disabled).active,
.show>.btn-outline-light.dropdown-toggle {
  color: #ffffff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}

.btn-outline-dark:hover {
  color: #ffffff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-dark:focus,
.btn-outline-dark.focus {
  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  color: #212529;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active,
.btn-outline-dark:not(:disabled):not(.disabled).active,
.show>.btn-outline-dark.dropdown-toggle {
  color: #ffffff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-outline-default {
  color: #344675;
  border-color: #344675;
}

.btn-outline-default:hover {
  color: #ffffff;
  background-color: #344675;
  border-color: #344675;
}

.btn-outline-default:focus,
.btn-outline-default.focus {
  box-shadow: 0 0 0 0 rgba(52, 70, 117, 0.5);
}

.btn-outline-default.disabled,
.btn-outline-default:disabled {
  color: #344675;
  background-color: transparent;
}

.btn-outline-default:not(:disabled):not(.disabled):active,
.btn-outline-default:not(:disabled):not(.disabled).active,
.show>.btn-outline-default.dropdown-toggle {
  color: #ffffff;
  background-color: #344675;
  border-color: #344675;
}

.btn-outline-default:not(:disabled):not(.disabled):active:focus,
.btn-outline-default:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-default.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(52, 70, 117, 0.5);
}

.btn-outline-white {
  color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-white:hover {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-white:focus,
.btn-outline-white.focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-white.disabled,
.btn-outline-white:disabled {
  color: #ffffff;
  background-color: transparent;
}

.btn-outline-white:not(:disabled):not(.disabled):active,
.btn-outline-white:not(:disabled):not(.disabled).active,
.show>.btn-outline-white.dropdown-toggle {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-white:not(:disabled):not(.disabled):active:focus,
.btn-outline-white:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-white.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-neutral {
  color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-neutral:hover {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-neutral:focus,
.btn-outline-neutral.focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-neutral.disabled,
.btn-outline-neutral:disabled {
  color: #ffffff;
  background-color: transparent;
}

.btn-outline-neutral:not(:disabled):not(.disabled):active,
.btn-outline-neutral:not(:disabled):not(.disabled).active,
.show>.btn-outline-neutral.dropdown-toggle {
  color: #212529;
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-neutral:not(:disabled):not(.disabled):active:focus,
.btn-outline-neutral:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-neutral.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-darker {
  color: black;
  border-color: black;
}

.btn-outline-darker:hover {
  color: #ffffff;
  background-color: black;
  border-color: black;
}

.btn-outline-darker:focus,
.btn-outline-darker.focus {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-outline-darker.disabled,
.btn-outline-darker:disabled {
  color: black;
  background-color: transparent;
}

.btn-outline-darker:not(:disabled):not(.disabled):active,
.btn-outline-darker:not(:disabled):not(.disabled).active,
.show>.btn-outline-darker.dropdown-toggle {
  color: #ffffff;
  background-color: black;
  border-color: black;
}

.btn-outline-darker:not(:disabled):not(.disabled):active:focus,
.btn-outline-darker:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-darker.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #e14eca;
  text-decoration: none;
}

.btn-link:hover {
  color: #c221a9;
  text-decoration: none;
}

.btn-link:focus,
.btn-link.focus {
  text-decoration: none;
  box-shadow: none;
}

.btn-link:disabled,
.btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg,
.btn-group-lg>.btn {
  padding: 15px 48px;
  font-size: 1em;
  line-height: 1.35;
  border-radius: 0.4285rem;
}

.btn-sm,
.btn-group-sm>.btn {
  padding: 5px 15px;
  font-size: 0.75rem;
  line-height: 1.35;
  border-radius: 0.25rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 0.875rem;
  color: #525f7f;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0 solid rgba(34, 42, 66, 0.15);
  border-radius: 0.1428rem;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f6f9fc;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #ffffff;
  text-decoration: none;
  background-color: #e14eca;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.75rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group>.btn,
.btn-group-vertical>.btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group>.btn:hover,
.btn-group-vertical>.btn:hover {
  z-index: 1;
}

.btn-group>.btn:focus,
.btn-group>.btn:active,
.btn-group>.btn.active,
.btn-group-vertical>.btn:focus,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group>.btn:not(:first-child),
.btn-group>.btn-group:not(:first-child) {
  margin-left: -1px;
}

.btn-group>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group>.btn-group:not(:last-child)>.btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn:not(:first-child),
.btn-group>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 30px;
  padding-left: 30px;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm+.dropdown-toggle-split,
.btn-group-sm>.btn+.dropdown-toggle-split {
  padding-right: 11.25px;
  padding-left: 11.25px;
}

.btn-lg+.dropdown-toggle-split,
.btn-group-lg>.btn+.dropdown-toggle-split {
  padding-right: 36px;
  padding-left: 36px;
}

.btn-group.show .dropdown-toggle {
  box-shadow: none;
}

.btn-group.show .dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group {
  width: 100%;
}

.btn-group-vertical>.btn:not(:first-child),
.btn-group-vertical>.btn-group:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical>.btn-group:not(:last-child)>.btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn:not(:first-child),
.btn-group-vertical>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
  margin-bottom: 0;
}

.btn-group-toggle>.btn input[type="radio"],
.btn-group-toggle>.btn input[type="checkbox"],
.btn-group-toggle>.btn-group>.btn input[type="radio"],
.btn-group-toggle>.btn-group>.btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.form-control,
.input-group>.form-control-plaintext,
.input-group>.custom-select,
.input-group>.custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group>.form-control+.form-control,
.input-group>.form-control+.custom-select,
.input-group>.form-control+.custom-file,
.input-group>.form-control-plaintext+.form-control,
.input-group>.form-control-plaintext+.custom-select,
.input-group>.form-control-plaintext+.custom-file,
.input-group>.custom-select+.form-control,
.input-group>.custom-select+.custom-select,
.input-group>.custom-select+.custom-file,
.input-group>.custom-file+.form-control,
.input-group>.custom-file+.custom-select,
.input-group>.custom-file+.custom-file {
  margin-left: -1px;
}

.input-group>.form-control:focus,
.input-group>.custom-select:focus,
.input-group>.custom-file .custom-file-input:focus~.custom-file-label {
  z-index: 3;
}

.input-group>.custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group>.form-control:not(:last-child),
.input-group>.custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.form-control:not(:first-child),
.input-group>.custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group>.custom-file {
  display: flex;
  align-items: center;
}

.input-group>.custom-file:not(:last-child) .custom-file-label,
.input-group>.custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}

.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.input-group-text,
.input-group-append .input-group-text+.btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.428571;
  color: #adb5bd;
  text-align: center;
  white-space: nowrap;
  background-color: transparent;
  border: 1px solid #cad1d7;
  border-radius: 0.25rem;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group-lg>.form-control:not(textarea),
.input-group-lg>.custom-select {
  height: calc(1.35em + 1.75rem + 2px);
}

.input-group-lg>.form-control,
.input-group-lg>.custom-select,
.input-group-lg>.input-group-prepend>.input-group-text,
.input-group-lg>.input-group-append>.input-group-text,
.input-group-lg>.input-group-prepend>.btn,
.input-group-lg>.input-group-append>.btn {
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  line-height: 1.35;
  border-radius: 0.4285rem;
}

.input-group-sm>.form-control:not(textarea),
.input-group-sm>.custom-select {
  height: calc(1.35em + 0.5rem + 2px);
}

.input-group-sm>.form-control,
.input-group-sm>.custom-select,
.input-group-sm>.input-group-prepend>.input-group-text,
.input-group-sm>.input-group-append>.input-group-text,
.input-group-sm>.input-group-prepend>.btn,
.input-group-sm>.input-group-append>.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.35;
  border-radius: 0.2857rem;
}

.input-group-lg>.custom-select,
.input-group-sm>.custom-select {
  padding-right: 1.7rem;
}

.input-group>.input-group-prepend>.btn,
.input-group>.input-group-prepend>.input-group-text,
.input-group>.input-group-append:not(:last-child)>.btn,
.input-group>.input-group-append:not(:last-child)>.input-group-text,
.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group>.input-group-append:last-child>.input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.3125rem;
  padding-left: 3rem;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #ffffff;
  border-color: #e14eca;
  background-color: #e14eca;
  box-shadow: none;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: none, none;
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
  border-color: rgba(50, 151, 211, 0.25);
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
  box-shadow: none;
}

.custom-control-input:disabled~.custom-control-label {
  color: #6c757d;
}

.custom-control-input:disabled~.custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: 0.03125rem;
  left: -3rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: none;
  content: "";
  background-color: transparent;
  border: #cad1d7 solid 1px;
  box-shadow: none;
}

.custom-control-label::after {
  position: absolute;
  top: 0.03125rem;
  left: -3rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  content: "";
  background: no-repeat 50% / 50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.2857rem;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
  border-color: #e14eca;
  background-color: #e14eca;
  box-shadow: none;
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23ffffff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(225, 78, 202, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
  background-color: rgba(225, 78, 202, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(225, 78, 202, 0.5);
}

.custom-switch {
  padding-left: 3.9375rem;
}

.custom-switch .custom-control-label::before {
  left: -3.9375rem;
  width: 2.1875rem;
  pointer-events: all;
  border-radius: 0.625rem;
}

.custom-switch .custom-control-label::after {
  top: calc(0.03125rem + 2px);
  left: calc(-3.9375rem + 2px);
  width: calc(1.25rem - 4px);
  height: calc(1.25rem - 4px);
  background-color: #cad1d7;
  border-radius: 0.625rem;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
    transition: none;
  }
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background-color: transparent;
  transform: translateX(0.9375rem);
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(225, 78, 202, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.5rem 1.7rem 0.5rem 0.7rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.428571;
  color: rgba(255, 255, 255, 0.8);
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.7rem center/8px 10px;
  background-color: transparent;
  border: 1px solid #cad1d7;
  border-radius: 0.25rem;
  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075);
  appearance: none;
}

.custom-select:focus {
  border-color: rgba(50, 151, 211, 0.25);
  outline: 0;
  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075), 0 0 0 0 #e14eca;
}

.custom-select:focus::-ms-value {
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
}

.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.7rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select-sm {
  height: calc(1.35em + 0.5rem + 2px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.75rem;
}

.custom-select-lg {
  height: calc(1.35em + 1.75rem + 2px);
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: rgba(50, 151, 211, 0.25);
  box-shadow: none;
}

.custom-file-input:disabled~.custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

.custom-file-input~.custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.25rem + 2px);
  padding: 0.5rem 0.7rem;
  font-weight: 400;
  line-height: 1.428571;
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  border: 1px solid #cad1d7;
  border-radius: 0.25rem;
  box-shadow: none;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: 2.25rem;
  padding: 0.5rem 0.7rem;
  line-height: 1.428571;
  color: rgba(255, 255, 255, 0.8);
  content: "Browse";
  background-color: transparent;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  height: calc(1rem + 0);
  padding: 0;
  background-color: transparent;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #1e1e2f, none;
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #1e1e2f, none;
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #1e1e2f, none;
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #e14eca;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #fbe7f8;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e3e3e3;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #e14eca;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #fbe7f8;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e3e3e3;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  background-color: #e14eca;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #fbe7f8;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);
}

.custom-range::-ms-fill-lower {
  background-color: #e3e3e3;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #e3e3e3;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {

  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav_link {
  display: block;
  padding: 0.5rem 1rem;
}

.nav_link:hover,
.nav_link:focus {
  text-decoration: none;
}

.nav_link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 0.0625rem solid #e3e3e3;
}

.nav-tabs .nav_item {
  margin-bottom: -0.0625rem;
}

.nav-tabs .nav_link {
  border: 0.0625rem solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs .nav_link:hover,
.nav-tabs .nav_link:focus {
  border-color: #e9ecef #e9ecef #e3e3e3;
}

.nav-tabs .nav_link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav_link.active,
.nav-tabs .nav_item.show .nav_link {
  color: #525f7f;
  background-color: #1e1e2f;
  border-color: #e3e3e3 #e3e3e3 #1e1e2f;
}

.nav-tabs .dropdown-menu {
  margin-top: -0.0625rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav_link {
  border-radius: 0.25rem;
}

.nav-pills .nav_link.active,
.nav-pills .show>.nav_link {
  color: #ffffff;
  background-color: #e14eca;
}

.nav-fill .nav_item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav_item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.9375rem;
}

.navbar>.container,
.navbar>.container_fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.406813rem;
  padding-bottom: 0.406813rem;
  margin-right: 0.9375rem;
  font-size: 0.99925rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav_link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 0.99925rem;
  line-height: 1;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {

  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container_fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav_link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container_fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767.98px) {

  .navbar-expand-md>.container,
  .navbar-expand-md>.container_fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav_link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-md>.container,
  .navbar-expand-md>.container_fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991.98px) {

  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container_fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav_link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container_fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width: 1199.98px) {

  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container_fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav_link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container_fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand>.container,
.navbar-expand>.container_fluid {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav_link {
  padding-right: 1rem;
  padding-left: 1rem;
}

.navbar-expand>.container,
.navbar-expand>.container_fluid {
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(34, 42, 66, 0.9);
}

.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: rgba(34, 42, 66, 0.9);
}

.navbar-light .navbar-nav .nav_link {
  color: rgba(34, 42, 66, 0.5);
}

.navbar-light .navbar-nav .nav_link:hover,
.navbar-light .navbar-nav .nav_link:focus {
  color: rgba(34, 42, 66, 0.7);
}

.navbar-light .navbar-nav .nav_link.disabled {
  color: rgba(34, 42, 66, 0.3);
}

.navbar-light .navbar-nav .show>.nav_link,
.navbar-light .navbar-nav .active>.nav_link,
.navbar-light .navbar-nav .nav_link.show,
.navbar-light .navbar-nav .nav_link.active {
  color: rgba(34, 42, 66, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(34, 42, 66, 0.5);
  border-color: transparent;
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml !default;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(34, 42, 66, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
  color: rgba(34, 42, 66, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(34, 42, 66, 0.9);
}

.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(34, 42, 66, 0.9);
}

.navbar-dark .navbar-brand {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-nav .nav_link {
  color: rgba(255, 255, 255, 0.95);
}

.navbar-dark .navbar-nav .nav_link:hover,
.navbar-dark .navbar-nav .nav_link:focus {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-nav .nav_link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show>.nav_link,
.navbar-dark .navbar-nav .active>.nav_link,
.navbar-dark .navbar-nav .nav_link.show,
.navbar-dark .navbar-nav .nav_link.active {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.95);
  border-color: transparent;
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.95);
}

.navbar-dark .navbar-text a {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: rgba(255, 255, 255, 0.65);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 0.0625rem solid rgba(34, 42, 66, 0.05);
  border-radius: 0.2857rem;
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.2857rem;
  border-top-right-radius: 0.2857rem;
}

.card>.list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.2857rem;
  border-bottom-left-radius: 0.2857rem;
}

.card_body {
  flex: 1 1 auto;
  padding: 1.5rem;
}

.card-title {
  margin-bottom: 1.25rem;
}

.card-subtitle {
  margin-top: -0.625rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.5rem;
}

.card_header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #f6f9fc;
  border-bottom: 0.0625rem solid rgba(34, 42, 66, 0.05);
}

.card_header:first-child {
  border-radius: calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem) 0 0;
}

.card_header+.list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: 1.25rem 1.5rem;
  background-color: #f6f9fc;
  border-top: 0.0625rem solid rgba(34, 42, 66, 0.05);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem);
}

.card_header-tabs {
  margin-right: -0.75rem;
  margin-bottom: -1.25rem;
  margin-left: -0.75rem;
  border-bottom: 0;
}

.card_header-pills {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img {
  width: 100%;
  border-radius: calc(0.2857rem - 0.0625rem);
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.2857rem - 0.0625rem);
  border-top-right-radius: calc(0.2857rem - 0.0625rem);
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.2857rem - 0.0625rem);
  border-bottom-left-radius: calc(0.2857rem - 0.0625rem);
}

.card-deck {
  display: flex;
  flex-direction: column;
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-deck {
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card-deck .card {
    display: flex;
    flex: 1 0 0%;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group {
  display: flex;
  flex-direction: column;
}

.card-group>.card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-group {
    flex-flow: row wrap;
  }

  .card-group>.card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }

  .card-group>.card+.card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group>.card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-img-top,
  .card-group>.card:not(:last-child) .card_header {
    border-top-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-img-bottom,
  .card-group>.card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-img-top,
  .card-group>.card:not(:first-child) .card_header {
    border-top-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-img-bottom,
  .card-group>.card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 1.25rem;
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.accordion>.card {
  overflow: hidden;
}

.accordion>.card:not(:first-of-type) .card_header:first-child {
  border-radius: 0;
}

.accordion>.card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0;
}

.accordion>.card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion>.card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion>.card .card_header {
  margin-bottom: -0.0625rem;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #1d253b;
  border-radius: 0.25rem;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #ffffff;
  content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #ffffff;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0 0.6875rem;
  margin-left: -0.0625rem;
  line-height: 1.25;
  color: #ffffff;
  background-color: transparent;
  border: 0.0625rem solid #e3e3e3;
}

.page-link:hover {
  z-index: 2;
  color: #6c757d;
  text-decoration: none;
  background-color: #e3e3e3;
  border-color: #e3e3e3;
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: none;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.page-item.active .page-link {
  z-index: 1;
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: transparent;
  border-color: #e3e3e3;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 0.99925rem;
  line-height: 1.625rem;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.4285rem;
  border-bottom-left-radius: 0.4285rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.4285rem;
  border-bottom-right-radius: 0.4285rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2857rem;
  border-bottom-left-radius: 0.2857rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2857rem;
  border-bottom-right-radius: 0.2857rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.62475rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}

a.badge:hover,
a.badge:focus {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.875em;
  padding-left: 0.875em;
  border-radius: 0.875rem;
}

.badge-primary {
  color: #ffffff;
  background-color: #e14eca;
}

a.badge-primary:hover,
a.badge-primary:focus {
  color: #ffffff;
  background-color: #d725bb;
}

a.badge-primary:focus,
a.badge-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(225, 78, 202, 0.5);
}

.badge-secondary {
  color: #212529;
  background-color: #f4f5f7;
}

a.badge-secondary:hover,
a.badge-secondary:focus {
  color: #212529;
  background-color: #d6dae2;
}

a.badge-secondary:focus,
a.badge-secondary.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(244, 245, 247, 0.5);
}

.badge-success {
  color: #ffffff;
  background-color: #00f2c3;
}

a.badge-success:hover,
a.badge-success:focus {
  color: #ffffff;
  background-color: #00bf9a;
}

a.badge-success:focus,
a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.5);
}

.badge-info {
  color: #ffffff;
  background-color: #1d8cf8;
}

a.badge-info:hover,
a.badge-info:focus {
  color: #ffffff;
  background-color: #0772db;
}

a.badge-info:focus,
a.badge-info.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(29, 140, 248, 0.5);
}

.badge-warning {
  color: #ffffff;
  background-color: #ff8d72;
}

a.badge-warning:hover,
a.badge-warning:focus {
  color: #ffffff;
  background-color: #ff643f;
}

a.badge-warning:focus,
a.badge-warning.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.5);
}

.badge-danger {
  color: #ffffff;
  background-color: #fd5d93;
}

a.badge-danger:hover,
a.badge-danger:focus {
  color: #ffffff;
  background-color: #fc2b71;
}

a.badge-danger:focus,
a.badge-danger.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(253, 93, 147, 0.5);
}

.badge-light {
  color: #ffffff;
  background-color: #adb5bd;
}

a.badge-light:hover,
a.badge-light:focus {
  color: #ffffff;
  background-color: #919ca6;
}

a.badge-light:focus,
a.badge-light.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.badge-dark {
  color: #ffffff;
  background-color: #212529;
}

a.badge-dark:hover,
a.badge-dark:focus {
  color: #ffffff;
  background-color: #0a0c0d;
}

a.badge-dark:focus,
a.badge-dark.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.badge-default {
  color: #ffffff;
  background-color: #344675;
}

a.badge-default:hover,
a.badge-default:focus {
  color: #ffffff;
  background-color: #243152;
}

a.badge-default:focus,
a.badge-default.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(52, 70, 117, 0.5);
}

.badge-white {
  color: #212529;
  background-color: #ffffff;
}

a.badge-white:hover,
a.badge-white:focus {
  color: #212529;
  background-color: #e6e6e6;
}

a.badge-white:focus,
a.badge-white.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.badge-neutral {
  color: #212529;
  background-color: #ffffff;
}

a.badge-neutral:hover,
a.badge-neutral:focus {
  color: #212529;
  background-color: #e6e6e6;
}

a.badge-neutral:focus,
a.badge-neutral.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.badge-darker {
  color: #ffffff;
  background-color: black;
}

a.badge-darker:hover,
a.badge-darker:focus {
  color: #ffffff;
  background-color: black;
}

a.badge-darker:focus,
a.badge-darker.focus {
  outline: 0;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.4285rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.9rem 1.25rem;
  margin-bottom: 1rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.2857rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 600;
}

.alert-dismissible {
  padding-right: 3.8125rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.9rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #e14eca;
  background-color: #e66ad2;
  border-color: #e66ad2;
}

.alert-primary hr {
  border-top-color: #e254cb;
}

.alert-primary .alert-link {
  color: #d725bb;
}

.alert-secondary {
  color: #f4f5f7;
  background-color: #f6f7f8;
  border-color: #f6f7f8;
}

.alert-secondary hr {
  border-top-color: #e8eaed;
}

.alert-secondary .alert-link {
  color: #d6dae2;
}

.alert-success {
  color: #00f2c3;
  background-color: #29f4cd;
  border-color: #29f4cd;
}

.alert-success hr {
  border-top-color: #11f3c7;
}

.alert-success .alert-link {
  color: #00bf9a;
}

.alert-info {
  color: #1d8cf8;
  background-color: #419ef9;
  border-color: #419ef9;
}

.alert-info hr {
  border-top-color: #2891f8;
}

.alert-info .alert-link {
  color: #0772db;
}

.alert-warning {
  color: #ff8d72;
  background-color: #ff9f89;
  border-color: #ff9f89;
}

.alert-warning hr {
  border-top-color: #ff8a70;
}

.alert-warning .alert-link {
  color: #ff643f;
}

.alert-danger {
  color: #fd5d93;
  background-color: #fd77a4;
  border-color: #fd77a4;
}

.alert-danger hr {
  border-top-color: #fd5e93;
}

.alert-danger .alert-link {
  color: #fc2b71;
}

.alert-light {
  color: #adb5bd;
  background-color: #bac1c8;
  border-color: #bac1c8;
}

.alert-light hr {
  border-top-color: #acb4bd;
}

.alert-light .alert-link {
  color: #919ca6;
}

.alert-dark {
  color: #212529;
  background-color: #45484b;
  border-color: #45484b;
}

.alert-dark hr {
  border-top-color: #393b3e;
}

.alert-dark .alert-link {
  color: #0a0c0d;
}

.alert-default {
  color: #344675;
  background-color: #54648b;
  border-color: #54648b;
}

.alert-default hr {
  border-top-color: #4a597b;
}

.alert-default .alert-link {
  color: #243152;
}

.alert-white {
  color: white;
  background-color: white;
  border-color: white;
}

.alert-white hr {
  border-top-color: #f2f2f2;
}

.alert-white .alert-link {
  color: #e6e6e6;
}

.alert-neutral {
  color: white;
  background-color: white;
  border-color: white;
}

.alert-neutral hr {
  border-top-color: #f2f2f2;
}

.alert-neutral .alert-link {
  color: #e6e6e6;
}

.alert-darker {
  color: black;
  background-color: #292929;
  border-color: #292929;
}

.alert-darker hr {
  border-top-color: #1c1c1c;
}

.alert-darker .alert-link {
  color: black;
}

@keyframes progress-bar-stripes {
  from {
    background-position: 0.5rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  display: flex;
  height: 0.5rem;
  overflow: hidden;
  font-size: 0.65625rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.875rem;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.3);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  background-color: #e14eca;
  transition: width 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 0.5rem 0.5rem;
}

.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item-action {
  width: 100%;
  color: #525f7f;
  text-align: inherit;
}

.list-group-item-action:hover,
.list-group-item-action:focus {
  z-index: 1;
  color: #525f7f;
  text-decoration: none;
  background-color: #f6f9fc;
}

.list-group-item-action:active {
  color: #525f7f;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 1rem 1rem;
  margin-bottom: -0.0625rem;
  background-color: #ffffff;
  border: 0.0625rem solid #e9ecef;
}

.list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.list-group-item.disabled,
.list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #ffffff;
}

.list-group-item.active {
  z-index: 2;
  color: #ffffff;
  background-color: #e14eca;
  border-color: #e14eca;
}

.list-group-horizontal {
  flex-direction: row;
}

.list-group-horizontal .list-group-item {
  margin-right: -0.0625rem;
  margin-bottom: 0;
}

.list-group-horizontal .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}

.list-group-horizontal .list-group-item:last-child {
  margin-right: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }

  .list-group-horizontal-sm .list-group-item {
    margin-right: -0.0625rem;
    margin-bottom: 0;
  }

  .list-group-horizontal-sm .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-sm .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }

  .list-group-horizontal-md .list-group-item {
    margin-right: -0.0625rem;
    margin-bottom: 0;
  }

  .list-group-horizontal-md .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-md .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }

  .list-group-horizontal-lg .list-group-item {
    margin-right: -0.0625rem;
    margin-bottom: 0;
  }

  .list-group-horizontal-lg .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-lg .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }

  .list-group-horizontal-xl .list-group-item {
    margin-right: -0.0625rem;
    margin-bottom: 0;
  }

  .list-group-horizontal-xl .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-xl .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group-flush .list-group-item:last-child {
  margin-bottom: -0.0625rem;
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}

.list-group-item-primary {
  color: #853d89;
  background-color: #f7cdf0;
}

.list-group-item-primary.list-group-item-action:hover,
.list-group-item-primary.list-group-item-action:focus {
  color: #853d89;
  background-color: #f3b7e9;
}

.list-group-item-primary.list-group-item-action.active {
  color: #ffffff;
  background-color: #853d89;
  border-color: #853d89;
}

.list-group-item-secondary {
  color: #8f94a0;
  background-color: #fcfcfd;
}

.list-group-item-secondary.list-group-item-action:hover,
.list-group-item-secondary.list-group-item-action:focus {
  color: #8f94a0;
  background-color: #ededf3;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #ffffff;
  background-color: #8f94a0;
  border-color: #8f94a0;
}

.list-group-item-success {
  color: #109285;
  background-color: #b8fbee;
}

.list-group-item-success.list-group-item-action:hover,
.list-group-item-success.list-group-item-action:focus {
  color: #109285;
  background-color: #a0fae8;
}

.list-group-item-success.list-group-item-action.active {
  color: #ffffff;
  background-color: #109285;
  border-color: #109285;
}

.list-group-item-info {
  color: #1f5da1;
  background-color: #c0dffd;
}

.list-group-item-info.list-group-item-action:hover,
.list-group-item-info.list-group-item-action:focus {
  color: #1f5da1;
  background-color: #a7d2fc;
}

.list-group-item-info.list-group-item-action.active {
  color: #ffffff;
  background-color: #1f5da1;
  border-color: #1f5da1;
}

.list-group-item-warning {
  color: #955d5b;
  background-color: #ffdfd8;
}

.list-group-item-warning.list-group-item-action:hover,
.list-group-item-warning.list-group-item-action:focus {
  color: #955d5b;
  background-color: #ffcabf;
}

.list-group-item-warning.list-group-item-action.active {
  color: #ffffff;
  background-color: #955d5b;
  border-color: #955d5b;
}

.list-group-item-danger {
  color: #94456c;
  background-color: #fed2e1;
}

.list-group-item-danger.list-group-item-action:hover,
.list-group-item-danger.list-group-item-action:focus {
  color: #94456c;
  background-color: #fdb9d0;
}

.list-group-item-danger.list-group-item-action.active {
  color: #ffffff;
  background-color: #94456c;
  border-color: #94456c;
}

.list-group-item-light {
  color: #6a7282;
  background-color: #e8eaed;
}

.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #6a7282;
  background-color: #dadde2;
}

.list-group-item-light.list-group-item-action.active {
  color: #ffffff;
  background-color: #6a7282;
  border-color: #6a7282;
}

.list-group-item-dark {
  color: #212735;
  background-color: #c1c2c3;
}

.list-group-item-dark.list-group-item-action:hover,
.list-group-item-dark.list-group-item-action:focus {
  color: #212735;
  background-color: #b4b5b6;
}

.list-group-item-dark.list-group-item-action.active {
  color: #ffffff;
  background-color: #212735;
  border-color: #212735;
}

.list-group-item-default {
  color: #2b395d;
  background-color: #c6cbd8;
}

.list-group-item-default.list-group-item-action:hover,
.list-group-item-default.list-group-item-action:focus {
  color: #2b395d;
  background-color: #b7bdce;
}

.list-group-item-default.list-group-item-action.active {
  color: #ffffff;
  background-color: #2b395d;
  border-color: #2b395d;
}

.list-group-item-white {
  color: #9599a4;
  background-color: white;
}

.list-group-item-white.list-group-item-action:hover,
.list-group-item-white.list-group-item-action:focus {
  color: #9599a4;
  background-color: #f2f2f2;
}

.list-group-item-white.list-group-item-action.active {
  color: #ffffff;
  background-color: #9599a4;
  border-color: #9599a4;
}

.list-group-item-neutral {
  color: #9599a4;
  background-color: white;
}

.list-group-item-neutral.list-group-item-action:hover,
.list-group-item-neutral.list-group-item-action:focus {
  color: #9599a4;
  background-color: #f2f2f2;
}

.list-group-item-neutral.list-group-item-action.active {
  color: #ffffff;
  background-color: #9599a4;
  border-color: #9599a4;
}

.list-group-item-darker {
  color: #101420;
  background-color: #b8b8b8;
}

.list-group-item-darker.list-group-item-action:hover,
.list-group-item-darker.list-group-item-action:focus {
  color: #101420;
  background-color: #ababab;
}

.list-group-item-darker.list-group-item-action.active {
  color: #ffffff;
  background-color: #101420;
  border-color: #101420;
}

.close {
  float: right;
  font-size: 1.3125rem;
  font-weight: 600;
  line-height: 1;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: none;
  opacity: .5;
}

.close:hover {
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):hover,
.close:not(:disabled):not(.disabled):focus {
  opacity: .75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
}

a.close.disabled {
  pointer-events: none;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(34, 42, 66, 0.2);
  border-radius: 0.2857rem;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.5);
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #222a42;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.16;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.2857rem;
  border-top-right-radius: 0.2857rem;
}

.modal-header .close {
  padding: 24px 24px 0 24px;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.1;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 24px 24px 16px 24px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 24px 16px 24px;
  border-top: 1px solid #e9ecef;
  border-bottom-right-radius: 0.2857rem;
  border-bottom-left-radius: 0.2857rem;
}

.modal-footer> :not(:first-child) {
  margin-left: .25rem;
}

.modal-footer> :not(:last-child) {
  margin-right: .25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
  }

  .modal-content {
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
  }

  .modal-sm {
    max-width: 380px;
  }
}

@media (min-width: 992px) {

  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.75rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top,
.bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0;
}

.bs-tooltip-top .arrow,
.bs-tooltip-auto[x-placement^="top"] .arrow {
  bottom: 0;
}

.bs-tooltip-top .arrow::before,
.bs-tooltip-auto[x-placement^="top"] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #ffffff;
}

.bs-tooltip-right,
.bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem;
}

.bs-tooltip-right .arrow,
.bs-tooltip-auto[x-placement^="right"] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-right .arrow::before,
.bs-tooltip-auto[x-placement^="right"] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #ffffff;
}

.bs-tooltip-bottom,
.bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow,
.bs-tooltip-auto[x-placement^="bottom"] .arrow {
  top: 0;
}

.bs-tooltip-bottom .arrow::before,
.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #ffffff;
}

.bs-tooltip-left,
.bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem;
}

.bs-tooltip-left .arrow,
.bs-tooltip-auto[x-placement^="left"] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-left .arrow::before,
.bs-tooltip-auto[x-placement^="left"] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #ffffff;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #222a42;
  text-align: center;
  background-color: #ffffff;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.75rem;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(34, 42, 66, 0.05);
  border-radius: 0.4285rem;
  box-shadow: 0px 0.5rem 2rem 0px rgba(34, 42, 66, 0.2);
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1.5rem;
  height: 0.75rem;
  margin: 0 0.4285rem;
}

.popover .arrow::before,
.popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top,
.bs-popover-auto[x-placement^="top"] {
  margin-bottom: 0.75rem;
}

.bs-popover-top>.arrow,
.bs-popover-auto[x-placement^="top"]>.arrow {
  bottom: calc((0.75rem + 1px) * -1);
}

.bs-popover-top>.arrow::before,
.bs-popover-auto[x-placement^="top"]>.arrow::before {
  bottom: 0;
  border-width: 0.75rem 0.75rem 0;
  border-top-color: transparent;
}

.bs-popover-top>.arrow::after,
.bs-popover-auto[x-placement^="top"]>.arrow::after {
  bottom: 1px;
  border-width: 0.75rem 0.75rem 0;
  border-top-color: #ffffff;
}

.bs-popover-right,
.bs-popover-auto[x-placement^="right"] {
  margin-left: 0.75rem;
}

.bs-popover-right>.arrow,
.bs-popover-auto[x-placement^="right"]>.arrow {
  left: calc((0.75rem + 1px) * -1);
  width: 0.75rem;
  height: 1.5rem;
  margin: 0.4285rem 0;
}

.bs-popover-right>.arrow::before,
.bs-popover-auto[x-placement^="right"]>.arrow::before {
  left: 0;
  border-width: 0.75rem 0.75rem 0.75rem 0;
  border-right-color: transparent;
}

.bs-popover-right>.arrow::after,
.bs-popover-auto[x-placement^="right"]>.arrow::after {
  left: 1px;
  border-width: 0.75rem 0.75rem 0.75rem 0;
  border-right-color: #ffffff;
}

.bs-popover-bottom,
.bs-popover-auto[x-placement^="bottom"] {
  margin-top: 0.75rem;
}

.bs-popover-bottom>.arrow,
.bs-popover-auto[x-placement^="bottom"]>.arrow {
  top: calc((0.75rem + 1px) * -1);
}

.bs-popover-bottom>.arrow::before,
.bs-popover-auto[x-placement^="bottom"]>.arrow::before {
  top: 0;
  border-width: 0 0.75rem 0.75rem 0.75rem;
  border-bottom-color: transparent;
}

.bs-popover-bottom>.arrow::after,
.bs-popover-auto[x-placement^="bottom"]>.arrow::after {
  top: 1px;
  border-width: 0 0.75rem 0.75rem 0.75rem;
  border-bottom-color: #ffffff;
}

.bs-popover-bottom .popover-header::before,
.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1.5rem;
  margin-left: -0.75rem;
  content: "";
  border-bottom: 1px solid #ffffff;
}

.bs-popover-left,
.bs-popover-auto[x-placement^="left"] {
  margin-right: 0.75rem;
}

.bs-popover-left>.arrow,
.bs-popover-auto[x-placement^="left"]>.arrow {
  right: calc((0.75rem + 1px) * -1);
  width: 0.75rem;
  height: 1.5rem;
  margin: 0.4285rem 0;
}

.bs-popover-left>.arrow::before,
.bs-popover-auto[x-placement^="left"]>.arrow::before {
  right: 0;
  border-width: 0.75rem 0 0.75rem 0.75rem;
  border-left-color: transparent;
}

.bs-popover-left>.arrow::after,
.bs-popover-auto[x-placement^="left"]>.arrow::after {
  right: 1px;
  border-width: 0.75rem 0 0.75rem 0.75rem;
  border-left-color: #ffffff;
}

.popover-header {
  padding: 0.75rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #32325d;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  border-top-left-radius: calc(0.4285rem - 1px);
  border-top-right-radius: calc(0.4285rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.75rem 0.75rem;
  color: #525f7f;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: 0s 0.6s opacity;
}

@media (prefers-reduced-motion: reduce) {

  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #ffffff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {

  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}

.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50% / 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #ffffff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg_primary {
  background-color: #e14eca !important;
}

a.bg_primary:hover,
a.bg_primary:focus,
button.bg_primary:hover,
button.bg_primary:focus {
  background-color: #d725bb !important;
}

.bg-secondary {
  background-color: #f4f5f7 !important;
}

a.bg-secondary:hover,
a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #d6dae2 !important;
}

.bg-success {
  background-color: #00f2c3 !important;
}

a.bg-success:hover,
a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #00bf9a !important;
}

.bg-info {
  background-color: #1d8cf8 !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0772db !important;
}

.bg-warning {
  background-color: #ff8d72 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #ff643f !important;
}

.bg-danger {
  background-color: #fd5d93 !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #fc2b71 !important;
}

.bg-light {
  background-color: #adb5bd !important;
}

a.bg-light:hover,
a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #919ca6 !important;
}

.bg-dark {
  background-color: #212529 !important;
}

a.bg-dark:hover,
a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #0a0c0d !important;
}

.bg-default {
  background-color: #344675 !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #243152 !important;
}

.bg-white {
  background-color: #ffffff !important;
}

a.bg-white:hover,
a.bg-white:focus,
button.bg-white:hover,
button.bg-white:focus {
  background-color: #e6e6e6 !important;
}

.bg-neutral {
  background-color: #ffffff !important;
}

a.bg-neutral:hover,
a.bg-neutral:focus,
button.bg-neutral:hover,
button.bg-neutral:focus {
  background-color: #e6e6e6 !important;
}

.bg-darker {
  background-color: black !important;
}

a.bg-darker:hover,
a.bg-darker:focus,
button.bg-darker:hover,
button.bg-darker:focus {
  background-color: black !important;
}

.bg-white {
  background-color: #ffffff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 0.0625rem solid #e9ecef !important;
}

.border-top {
  border-top: 0.0625rem solid #e9ecef !important;
}

.border-right {
  border-right: 0.0625rem solid #e9ecef !important;
}

.border-bottom {
  border-bottom: 0.0625rem solid #e9ecef !important;
}

.border-left {
  border-left: 0.0625rem solid #e9ecef !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #e14eca !important;
}

.border-secondary {
  border-color: #f4f5f7 !important;
}

.border-success {
  border-color: #00f2c3 !important;
}

.border-info {
  border-color: #1d8cf8 !important;
}

.border-warning {
  border-color: #ff8d72 !important;
}

.border-danger {
  border-color: #fd5d93 !important;
}

.border-light {
  border-color: #adb5bd !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-default {
  border-color: #344675 !important;
}

.border-white {
  border-color: #ffffff !important;
}

.border-neutral {
  border-color: #ffffff !important;
}

.border-darker {
  border-color: black !important;
}

.border-white {
  border-color: #ffffff !important;
}

.rounded-sm {
  border-radius: 0.2857rem !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-lg {
  border-radius: 0.4285rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }

  .float-sm-right {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }

  .float-md-right {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }

  .float-lg-right {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }

  .float-xl-right {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(34, 42, 66, 0.075) !important;
}

.shadow {
  box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(34, 42, 66, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml_3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx_5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx_5 {
  margin-left: 3rem !important;
}

.m-sm {
  margin: 2rem !important;
}

.mt-sm,
.my-sm {
  margin-top: 2rem !important;
}

.mr-sm,
.mx-sm {
  margin-right: 2rem !important;
}

.mb-sm,
.my-sm {
  margin-bottom: 2rem !important;
}

.ml-sm,
.mx-sm {
  margin-left: 2rem !important;
}

.m-md {
  margin: 4rem !important;
}

.mt-md,
.my-md {
  margin-top: 4rem !important;
}

.mr-md,
.mx-md {
  margin-right: 4rem !important;
}

.mb-md,
.my-md {
  margin-bottom: 4rem !important;
}

.ml-md,
.mx-md {
  margin-left: 4rem !important;
}

.m-lg {
  margin: 6rem !important;
}

.mt-lg,
.my-lg {
  margin-top: 6rem !important;
}

.mr-lg,
.mx-lg {
  margin-right: 6rem !important;
}

.mb-lg,
.my-lg {
  margin-bottom: 6rem !important;
}

.ml-lg,
.mx-lg {
  margin-left: 6rem !important;
}

.m-xl {
  margin: 8rem !important;
}

.mt-xl,
.my-xl {
  margin-top: 8rem !important;
}

.mr-xl,
.mx-xl {
  margin-right: 8rem !important;
}

.mb-xl,
.my-xl {
  margin-bottom: 8rem !important;
}

.ml-xl,
.mx-xl {
  margin-left: 8rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.p-sm {
  padding: 2rem !important;
}

.pt-sm,
.py-sm {
  padding-top: 2rem !important;
}

.pr-sm,
.px-sm {
  padding-right: 2rem !important;
}

.pb-sm,
.py-sm {
  padding-bottom: 2rem !important;
}

.pl-sm,
.px-sm {
  padding-left: 2rem !important;
}

.p-md {
  padding: 4rem !important;
}

.pt-md,
.py-md {
  padding-top: 4rem !important;
}

.pr-md,
.px-md {
  padding-right: 4rem !important;
}

.pb-md,
.py-md {
  padding-bottom: 4rem !important;
}

.pl-md,
.px-md {
  padding-left: 4rem !important;
}

.p-lg {
  padding: 6rem !important;
}

.pt-lg,
.py-lg {
  padding-top: 6rem !important;
}

.pr-lg,
.px-lg {
  padding-right: 6rem !important;
}

.pb-lg,
.py-lg {
  padding-bottom: 6rem !important;
}

.pl-lg,
.px-lg {
  padding-left: 6rem !important;
}

.p-xl {
  padding: 8rem !important;
}

.pt-xl,
.py-xl {
  padding-top: 8rem !important;
}

.pr-xl,
.px-xl {
  padding-right: 8rem !important;
}

.pb-xl,
.py-xl {
  padding-bottom: 8rem !important;
}

.pl-xl,
.px-xl {
  padding-left: 8rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-nsm {
  margin: -2rem !important;
}

.mt-nsm,
.my-nsm {
  margin-top: -2rem !important;
}

.mr-nsm,
.mx-nsm {
  margin-right: -2rem !important;
}

.mb-nsm,
.my-nsm {
  margin-bottom: -2rem !important;
}

.ml-nsm,
.mx-nsm {
  margin-left: -2rem !important;
}

.m-nmd {
  margin: -4rem !important;
}

.mt-nmd,
.my-nmd {
  margin-top: -4rem !important;
}

.mr-nmd,
.mx-nmd {
  margin-right: -4rem !important;
}

.mb-nmd,
.my-nmd {
  margin-bottom: -4rem !important;
}

.ml-nmd,
.mx-nmd {
  margin-left: -4rem !important;
}

.m-nlg {
  margin: -6rem !important;
}

.mt-nlg,
.my-nlg {
  margin-top: -6rem !important;
}

.mr-nlg,
.mx-nlg {
  margin-right: -6rem !important;
}

.mb-nlg,
.my-nlg {
  margin-bottom: -6rem !important;
}

.ml-nlg,
.mx-nlg {
  margin-left: -6rem !important;
}

.m-nxl {
  margin: -8rem !important;
}

.mt-nxl,
.my-nxl {
  margin-top: -8rem !important;
}

.mr-nxl,
.mx-nxl {
  margin-right: -8rem !important;
}

.mb-nxl,
.my-nxl {
  margin-bottom: -8rem !important;
}

.ml-nxl,
.mx-nxl {
  margin-left: -8rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }

  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }

  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }

  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }

  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }

  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }

  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }

  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }

  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }

  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }

  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }

  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }

  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }

  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }

  .m-sm-sm {
    margin: 2rem !important;
  }

  .mt-sm-sm,
  .my-sm-sm {
    margin-top: 2rem !important;
  }

  .mr-sm-sm,
  .mx-sm-sm {
    margin-right: 2rem !important;
  }

  .mb-sm-sm,
  .my-sm-sm {
    margin-bottom: 2rem !important;
  }

  .ml-sm-sm,
  .mx-sm-sm {
    margin-left: 2rem !important;
  }

  .m-sm-md {
    margin: 4rem !important;
  }

  .mt-sm-md,
  .my-sm-md {
    margin-top: 4rem !important;
  }

  .mr-sm-md,
  .mx-sm-md {
    margin-right: 4rem !important;
  }

  .mb-sm-md,
  .my-sm-md {
    margin-bottom: 4rem !important;
  }

  .ml-sm-md,
  .mx-sm-md {
    margin-left: 4rem !important;
  }

  .m-sm-lg {
    margin: 6rem !important;
  }

  .mt-sm-lg,
  .my-sm-lg {
    margin-top: 6rem !important;
  }

  .mr-sm-lg,
  .mx-sm-lg {
    margin-right: 6rem !important;
  }

  .mb-sm-lg,
  .my-sm-lg {
    margin-bottom: 6rem !important;
  }

  .ml-sm-lg,
  .mx-sm-lg {
    margin-left: 6rem !important;
  }

  .m-sm-xl {
    margin: 8rem !important;
  }

  .mt-sm-xl,
  .my-sm-xl {
    margin-top: 8rem !important;
  }

  .mr-sm-xl,
  .mx-sm-xl {
    margin-right: 8rem !important;
  }

  .mb-sm-xl,
  .my-sm-xl {
    margin-bottom: 8rem !important;
  }

  .ml-sm-xl,
  .mx-sm-xl {
    margin-left: 8rem !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }

  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }

  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }

  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }

  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }

  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }

  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }

  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }

  .p-sm-sm {
    padding: 2rem !important;
  }

  .pt-sm-sm,
  .py-sm-sm {
    padding-top: 2rem !important;
  }

  .pr-sm-sm,
  .px-sm-sm {
    padding-right: 2rem !important;
  }

  .pb-sm-sm,
  .py-sm-sm {
    padding-bottom: 2rem !important;
  }

  .pl-sm-sm,
  .px-sm-sm {
    padding-left: 2rem !important;
  }

  .p-sm-md {
    padding: 4rem !important;
  }

  .pt-sm-md,
  .py-sm-md {
    padding-top: 4rem !important;
  }

  .pr-sm-md,
  .px-sm-md {
    padding-right: 4rem !important;
  }

  .pb-sm-md,
  .py-sm-md {
    padding-bottom: 4rem !important;
  }

  .pl-sm-md,
  .px-sm-md {
    padding-left: 4rem !important;
  }

  .p-sm-lg {
    padding: 6rem !important;
  }

  .pt-sm-lg,
  .py-sm-lg {
    padding-top: 6rem !important;
  }

  .pr-sm-lg,
  .px-sm-lg {
    padding-right: 6rem !important;
  }

  .pb-sm-lg,
  .py-sm-lg {
    padding-bottom: 6rem !important;
  }

  .pl-sm-lg,
  .px-sm-lg {
    padding-left: 6rem !important;
  }

  .p-sm-xl {
    padding: 8rem !important;
  }

  .pt-sm-xl,
  .py-sm-xl {
    padding-top: 8rem !important;
  }

  .pr-sm-xl,
  .px-sm-xl {
    padding-right: 8rem !important;
  }

  .pb-sm-xl,
  .py-sm-xl {
    padding-bottom: 8rem !important;
  }

  .pl-sm-xl,
  .px-sm-xl {
    padding-left: 8rem !important;
  }

  .m-sm-n1 {
    margin: -0.25rem !important;
  }

  .mt-sm-n1,
  .my-sm-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-sm-n1,
  .mx-sm-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-sm-n1,
  .my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-sm-n1,
  .mx-sm-n1 {
    margin-left: -0.25rem !important;
  }

  .m-sm-n2 {
    margin: -0.5rem !important;
  }

  .mt-sm-n2,
  .my-sm-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-sm-n2,
  .mx-sm-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-sm-n2,
  .my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-sm-n2,
  .mx-sm-n2 {
    margin-left: -0.5rem !important;
  }

  .m-sm-n3 {
    margin: -1rem !important;
  }

  .mt-sm-n3,
  .my-sm-n3 {
    margin-top: -1rem !important;
  }

  .mr-sm-n3,
  .mx-sm-n3 {
    margin-right: -1rem !important;
  }

  .mb-sm-n3,
  .my-sm-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-sm-n3,
  .mx-sm-n3 {
    margin-left: -1rem !important;
  }

  .m-sm-n4 {
    margin: -1.5rem !important;
  }

  .mt-sm-n4,
  .my-sm-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-sm-n4,
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-sm-n4,
  .my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-sm-n4,
  .mx-sm-n4 {
    margin-left: -1.5rem !important;
  }

  .m-sm-n5 {
    margin: -3rem !important;
  }

  .mt-sm-n5,
  .my-sm-n5 {
    margin-top: -3rem !important;
  }

  .mr-sm-n5,
  .mx-sm-n5 {
    margin-right: -3rem !important;
  }

  .mb-sm-n5,
  .my-sm-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-sm-n5,
  .mx-sm-n5 {
    margin-left: -3rem !important;
  }

  .m-sm-nsm {
    margin: -2rem !important;
  }

  .mt-sm-nsm,
  .my-sm-nsm {
    margin-top: -2rem !important;
  }

  .mr-sm-nsm,
  .mx-sm-nsm {
    margin-right: -2rem !important;
  }

  .mb-sm-nsm,
  .my-sm-nsm {
    margin-bottom: -2rem !important;
  }

  .ml-sm-nsm,
  .mx-sm-nsm {
    margin-left: -2rem !important;
  }

  .m-sm-nmd {
    margin: -4rem !important;
  }

  .mt-sm-nmd,
  .my-sm-nmd {
    margin-top: -4rem !important;
  }

  .mr-sm-nmd,
  .mx-sm-nmd {
    margin-right: -4rem !important;
  }

  .mb-sm-nmd,
  .my-sm-nmd {
    margin-bottom: -4rem !important;
  }

  .ml-sm-nmd,
  .mx-sm-nmd {
    margin-left: -4rem !important;
  }

  .m-sm-nlg {
    margin: -6rem !important;
  }

  .mt-sm-nlg,
  .my-sm-nlg {
    margin-top: -6rem !important;
  }

  .mr-sm-nlg,
  .mx-sm-nlg {
    margin-right: -6rem !important;
  }

  .mb-sm-nlg,
  .my-sm-nlg {
    margin-bottom: -6rem !important;
  }

  .ml-sm-nlg,
  .mx-sm-nlg {
    margin-left: -6rem !important;
  }

  .m-sm-nxl {
    margin: -8rem !important;
  }

  .mt-sm-nxl,
  .my-sm-nxl {
    margin-top: -8rem !important;
  }

  .mr-sm-nxl,
  .mx-sm-nxl {
    margin-right: -8rem !important;
  }

  .mb-sm-nxl,
  .my-sm-nxl {
    margin-bottom: -8rem !important;
  }

  .ml-sm-nxl,
  .mx-sm-nxl {
    margin-left: -8rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }

  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }

  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }

  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }

  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }

  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }

  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }

  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }

  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }

  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }

  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }

  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }

  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }

  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }

  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }

  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }

  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }

  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }

  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }

  .m-md-sm {
    margin: 2rem !important;
  }

  .mt-md-sm,
  .my-md-sm {
    margin-top: 2rem !important;
  }

  .mr-md-sm,
  .mx-md-sm {
    margin-right: 2rem !important;
  }

  .mb-md-sm,
  .my-md-sm {
    margin-bottom: 2rem !important;
  }

  .ml-md-sm,
  .mx-md-sm {
    margin-left: 2rem !important;
  }

  .m-md-md {
    margin: 4rem !important;
  }

  .mt-md-md,
  .my-md-md {
    margin-top: 4rem !important;
  }

  .mr-md-md,
  .mx-md-md {
    margin-right: 4rem !important;
  }

  .mb-md-md,
  .my-md-md {
    margin-bottom: 4rem !important;
  }

  .ml-md-md,
  .mx-md-md {
    margin-left: 4rem !important;
  }

  .m-md-lg {
    margin: 6rem !important;
  }

  .mt-md-lg,
  .my-md-lg {
    margin-top: 6rem !important;
  }

  .mr-md-lg,
  .mx-md-lg {
    margin-right: 6rem !important;
  }

  .mb-md-lg,
  .my-md-lg {
    margin-bottom: 6rem !important;
  }

  .ml-md-lg,
  .mx-md-lg {
    margin-left: 6rem !important;
  }

  .m-md-xl {
    margin: 8rem !important;
  }

  .mt-md-xl,
  .my-md-xl {
    margin-top: 8rem !important;
  }

  .mr-md-xl,
  .mx-md-xl {
    margin-right: 8rem !important;
  }

  .mb-md-xl,
  .my-md-xl {
    margin-bottom: 8rem !important;
  }

  .ml-md-xl,
  .mx-md-xl {
    margin-left: 8rem !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }

  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }

  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }

  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }

  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }

  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }

  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }

  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }

  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }

  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }

  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }

  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }

  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }

  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }

  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }

  .p-md-sm {
    padding: 2rem !important;
  }

  .pt-md-sm,
  .py-md-sm {
    padding-top: 2rem !important;
  }

  .pr-md-sm,
  .px-md-sm {
    padding-right: 2rem !important;
  }

  .pb-md-sm,
  .py-md-sm {
    padding-bottom: 2rem !important;
  }

  .pl-md-sm,
  .px-md-sm {
    padding-left: 2rem !important;
  }

  .p-md-md {
    padding: 4rem !important;
  }

  .pt-md-md,
  .py-md-md {
    padding-top: 4rem !important;
  }

  .pr-md-md,
  .px-md-md {
    padding-right: 4rem !important;
  }

  .pb-md-md,
  .py-md-md {
    padding-bottom: 4rem !important;
  }

  .pl-md-md,
  .px-md-md {
    padding-left: 4rem !important;
  }

  .p-md-lg {
    padding: 6rem !important;
  }

  .pt-md-lg,
  .py-md-lg {
    padding-top: 6rem !important;
  }

  .pr-md-lg,
  .px-md-lg {
    padding-right: 6rem !important;
  }

  .pb-md-lg,
  .py-md-lg {
    padding-bottom: 6rem !important;
  }

  .pl-md-lg,
  .px-md-lg {
    padding-left: 6rem !important;
  }

  .p-md-xl {
    padding: 8rem !important;
  }

  .pt-md-xl,
  .py-md-xl {
    padding-top: 8rem !important;
  }

  .pr-md-xl,
  .px-md-xl {
    padding-right: 8rem !important;
  }

  .pb-md-xl,
  .py-md-xl {
    padding-bottom: 8rem !important;
  }

  .pl-md-xl,
  .px-md-xl {
    padding-left: 8rem !important;
  }

  .m-md-n1 {
    margin: -0.25rem !important;
  }

  .mt-md-n1,
  .my-md-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-md-n1,
  .mx-md-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-md-n1,
  .my-md-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-md-n1,
  .mx-md-n1 {
    margin-left: -0.25rem !important;
  }

  .m-md-n2 {
    margin: -0.5rem !important;
  }

  .mt-md-n2,
  .my-md-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-md-n2,
  .mx-md-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-md-n2,
  .my-md-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-md-n2,
  .mx-md-n2 {
    margin-left: -0.5rem !important;
  }

  .m-md-n3 {
    margin: -1rem !important;
  }

  .mt-md-n3,
  .my-md-n3 {
    margin-top: -1rem !important;
  }

  .mr-md-n3,
  .mx-md-n3 {
    margin-right: -1rem !important;
  }

  .mb-md-n3,
  .my-md-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-md-n3,
  .mx-md-n3 {
    margin-left: -1rem !important;
  }

  .m-md-n4 {
    margin: -1.5rem !important;
  }

  .mt-md-n4,
  .my-md-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-md-n4,
  .mx-md-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-md-n4,
  .my-md-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-md-n4,
  .mx-md-n4 {
    margin-left: -1.5rem !important;
  }

  .m-md-n5 {
    margin: -3rem !important;
  }

  .mt-md-n5,
  .my-md-n5 {
    margin-top: -3rem !important;
  }

  .mr-md-n5,
  .mx-md-n5 {
    margin-right: -3rem !important;
  }

  .mb-md-n5,
  .my-md-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-md-n5,
  .mx-md-n5 {
    margin-left: -3rem !important;
  }

  .m-md-nsm {
    margin: -2rem !important;
  }

  .mt-md-nsm,
  .my-md-nsm {
    margin-top: -2rem !important;
  }

  .mr-md-nsm,
  .mx-md-nsm {
    margin-right: -2rem !important;
  }

  .mb-md-nsm,
  .my-md-nsm {
    margin-bottom: -2rem !important;
  }

  .ml-md-nsm,
  .mx-md-nsm {
    margin-left: -2rem !important;
  }

  .m-md-nmd {
    margin: -4rem !important;
  }

  .mt-md-nmd,
  .my-md-nmd {
    margin-top: -4rem !important;
  }

  .mr-md-nmd,
  .mx-md-nmd {
    margin-right: -4rem !important;
  }

  .mb-md-nmd,
  .my-md-nmd {
    margin-bottom: -4rem !important;
  }

  .ml-md-nmd,
  .mx-md-nmd {
    margin-left: -4rem !important;
  }

  .m-md-nlg {
    margin: -6rem !important;
  }

  .mt-md-nlg,
  .my-md-nlg {
    margin-top: -6rem !important;
  }

  .mr-md-nlg,
  .mx-md-nlg {
    margin-right: -6rem !important;
  }

  .mb-md-nlg,
  .my-md-nlg {
    margin-bottom: -6rem !important;
  }

  .ml-md-nlg,
  .mx-md-nlg {
    margin-left: -6rem !important;
  }

  .m-md-nxl {
    margin: -8rem !important;
  }

  .mt-md-nxl,
  .my-md-nxl {
    margin-top: -8rem !important;
  }

  .mr-md-nxl,
  .mx-md-nxl {
    margin-right: -8rem !important;
  }

  .mb-md-nxl,
  .my-md-nxl {
    margin-bottom: -8rem !important;
  }

  .ml-md-nxl,
  .mx-md-nxl {
    margin-left: -8rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }

  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }

  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }

  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }

  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }

  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }

  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }

  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }

  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }

  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }

  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }

  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }

  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }

  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }

  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }

  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }

  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }

  .m-lg-sm {
    margin: 2rem !important;
  }

  .mt-lg-sm,
  .my-lg-sm {
    margin-top: 2rem !important;
  }

  .mr-lg-sm,
  .mx-lg-sm {
    margin-right: 2rem !important;
  }

  .mb-lg-sm,
  .my-lg-sm {
    margin-bottom: 2rem !important;
  }

  .ml-lg-sm,
  .mx-lg-sm {
    margin-left: 2rem !important;
  }

  .m-lg-md {
    margin: 4rem !important;
  }

  .mt-lg-md,
  .my-lg-md {
    margin-top: 4rem !important;
  }

  .mr-lg-md,
  .mx-lg-md {
    margin-right: 4rem !important;
  }

  .mb-lg-md,
  .my-lg-md {
    margin-bottom: 4rem !important;
  }

  .ml-lg-md,
  .mx-lg-md {
    margin-left: 4rem !important;
  }

  .m-lg-lg {
    margin: 6rem !important;
  }

  .mt-lg-lg,
  .my-lg-lg {
    margin-top: 6rem !important;
  }

  .mr-lg-lg,
  .mx-lg-lg {
    margin-right: 6rem !important;
  }

  .mb-lg-lg,
  .my-lg-lg {
    margin-bottom: 6rem !important;
  }

  .ml-lg-lg,
  .mx-lg-lg {
    margin-left: 6rem !important;
  }

  .m-lg-xl {
    margin: 8rem !important;
  }

  .mt-lg-xl,
  .my-lg-xl {
    margin-top: 8rem !important;
  }

  .mr-lg-xl,
  .mx-lg-xl {
    margin-right: 8rem !important;
  }

  .mb-lg-xl,
  .my-lg-xl {
    margin-bottom: 8rem !important;
  }

  .ml-lg-xl,
  .mx-lg-xl {
    margin-left: 8rem !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }

  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }

  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }

  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }

  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }

  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }

  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }

  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }

  .p-lg-sm {
    padding: 2rem !important;
  }

  .pt-lg-sm,
  .py-lg-sm {
    padding-top: 2rem !important;
  }

  .pr-lg-sm,
  .px-lg-sm {
    padding-right: 2rem !important;
  }

  .pb-lg-sm,
  .py-lg-sm {
    padding-bottom: 2rem !important;
  }

  .pl-lg-sm,
  .px-lg-sm {
    padding-left: 2rem !important;
  }

  .p-lg-md {
    padding: 4rem !important;
  }

  .pt-lg-md,
  .py-lg-md {
    padding-top: 4rem !important;
  }

  .pr-lg-md,
  .px-lg-md {
    padding-right: 4rem !important;
  }

  .pb-lg-md,
  .py-lg-md {
    padding-bottom: 4rem !important;
  }

  .pl-lg-md,
  .px-lg-md {
    padding-left: 4rem !important;
  }

  .p-lg-lg {
    padding: 6rem !important;
  }

  .pt-lg-lg,
  .py-lg-lg {
    padding-top: 6rem !important;
  }

  .pr-lg-lg,
  .px-lg-lg {
    padding-right: 6rem !important;
  }

  .pb-lg-lg,
  .py-lg-lg {
    padding-bottom: 6rem !important;
  }

  .pl-lg-lg,
  .px-lg-lg {
    padding-left: 6rem !important;
  }

  .p-lg-xl {
    padding: 8rem !important;
  }

  .pt-lg-xl,
  .py-lg-xl {
    padding-top: 8rem !important;
  }

  .pr-lg-xl,
  .px-lg-xl {
    padding-right: 8rem !important;
  }

  .pb-lg-xl,
  .py-lg-xl {
    padding-bottom: 8rem !important;
  }

  .pl-lg-xl,
  .px-lg-xl {
    padding-left: 8rem !important;
  }

  .m-lg-n1 {
    margin: -0.25rem !important;
  }

  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.25rem !important;
  }

  .m-lg-n2 {
    margin: -0.5rem !important;
  }

  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }

  .m-lg-n3 {
    margin: -1rem !important;
  }

  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -1rem !important;
  }

  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -1rem !important;
  }

  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -1rem !important;
  }

  .m-lg-n4 {
    margin: -1.5rem !important;
  }

  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }

  .m-lg-n5 {
    margin: -3rem !important;
  }

  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -3rem !important;
  }

  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -3rem !important;
  }

  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -3rem !important;
  }

  .m-lg-nsm {
    margin: -2rem !important;
  }

  .mt-lg-nsm,
  .my-lg-nsm {
    margin-top: -2rem !important;
  }

  .mr-lg-nsm,
  .mx-lg-nsm {
    margin-right: -2rem !important;
  }

  .mb-lg-nsm,
  .my-lg-nsm {
    margin-bottom: -2rem !important;
  }

  .ml-lg-nsm,
  .mx-lg-nsm {
    margin-left: -2rem !important;
  }

  .m-lg-nmd {
    margin: -4rem !important;
  }

  .mt-lg-nmd,
  .my-lg-nmd {
    margin-top: -4rem !important;
  }

  .mr-lg-nmd,
  .mx-lg-nmd {
    margin-right: -4rem !important;
  }

  .mb-lg-nmd,
  .my-lg-nmd {
    margin-bottom: -4rem !important;
  }

  .ml-lg-nmd,
  .mx-lg-nmd {
    margin-left: -4rem !important;
  }

  .m-lg-nlg {
    margin: -6rem !important;
  }

  .mt-lg-nlg,
  .my-lg-nlg {
    margin-top: -6rem !important;
  }

  .mr-lg-nlg,
  .mx-lg-nlg {
    margin-right: -6rem !important;
  }

  .mb-lg-nlg,
  .my-lg-nlg {
    margin-bottom: -6rem !important;
  }

  .ml-lg-nlg,
  .mx-lg-nlg {
    margin-left: -6rem !important;
  }

  .m-lg-nxl {
    margin: -8rem !important;
  }

  .mt-lg-nxl,
  .my-lg-nxl {
    margin-top: -8rem !important;
  }

  .mr-lg-nxl,
  .mx-lg-nxl {
    margin-right: -8rem !important;
  }

  .mb-lg-nxl,
  .my-lg-nxl {
    margin-bottom: -8rem !important;
  }

  .ml-lg-nxl,
  .mx-lg-nxl {
    margin-left: -8rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }

  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }

  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }

  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }

  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }

  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }

  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }

  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }

  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }

  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }

  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }

  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }

  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }

  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }

  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }

  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }

  .m-xl-sm {
    margin: 2rem !important;
  }

  .mt-xl-sm,
  .my-xl-sm {
    margin-top: 2rem !important;
  }

  .mr-xl-sm,
  .mx-xl-sm {
    margin-right: 2rem !important;
  }

  .mb-xl-sm,
  .my-xl-sm {
    margin-bottom: 2rem !important;
  }

  .ml-xl-sm,
  .mx-xl-sm {
    margin-left: 2rem !important;
  }

  .m-xl-md {
    margin: 4rem !important;
  }

  .mt-xl-md,
  .my-xl-md {
    margin-top: 4rem !important;
  }

  .mr-xl-md,
  .mx-xl-md {
    margin-right: 4rem !important;
  }

  .mb-xl-md,
  .my-xl-md {
    margin-bottom: 4rem !important;
  }

  .ml-xl-md,
  .mx-xl-md {
    margin-left: 4rem !important;
  }

  .m-xl-lg {
    margin: 6rem !important;
  }

  .mt-xl-lg,
  .my-xl-lg {
    margin-top: 6rem !important;
  }

  .mr-xl-lg,
  .mx-xl-lg {
    margin-right: 6rem !important;
  }

  .mb-xl-lg,
  .my-xl-lg {
    margin-bottom: 6rem !important;
  }

  .ml-xl-lg,
  .mx-xl-lg {
    margin-left: 6rem !important;
  }

  .m-xl-xl {
    margin: 8rem !important;
  }

  .mt-xl-xl,
  .my-xl-xl {
    margin-top: 8rem !important;
  }

  .mr-xl-xl,
  .mx-xl-xl {
    margin-right: 8rem !important;
  }

  .mb-xl-xl,
  .my-xl-xl {
    margin-bottom: 8rem !important;
  }

  .ml-xl-xl,
  .mx-xl-xl {
    margin-left: 8rem !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }

  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }

  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }

  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }

  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }

  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }

  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }

  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }

  .p-xl-sm {
    padding: 2rem !important;
  }

  .pt-xl-sm,
  .py-xl-sm {
    padding-top: 2rem !important;
  }

  .pr-xl-sm,
  .px-xl-sm {
    padding-right: 2rem !important;
  }

  .pb-xl-sm,
  .py-xl-sm {
    padding-bottom: 2rem !important;
  }

  .pl-xl-sm,
  .px-xl-sm {
    padding-left: 2rem !important;
  }

  .p-xl-md {
    padding: 4rem !important;
  }

  .pt-xl-md,
  .py-xl-md {
    padding-top: 4rem !important;
  }

  .pr-xl-md,
  .px-xl-md {
    padding-right: 4rem !important;
  }

  .pb-xl-md,
  .py-xl-md {
    padding-bottom: 4rem !important;
  }

  .pl-xl-md,
  .px-xl-md {
    padding-left: 4rem !important;
  }

  .p-xl-lg {
    padding: 6rem !important;
  }

  .pt-xl-lg,
  .py-xl-lg {
    padding-top: 6rem !important;
  }

  .pr-xl-lg,
  .px-xl-lg {
    padding-right: 6rem !important;
  }

  .pb-xl-lg,
  .py-xl-lg {
    padding-bottom: 6rem !important;
  }

  .pl-xl-lg,
  .px-xl-lg {
    padding-left: 6rem !important;
  }

  .p-xl-xl {
    padding: 8rem !important;
  }

  .pt-xl-xl,
  .py-xl-xl {
    padding-top: 8rem !important;
  }

  .pr-xl-xl,
  .px-xl-xl {
    padding-right: 8rem !important;
  }

  .pb-xl-xl,
  .py-xl-xl {
    padding-bottom: 8rem !important;
  }

  .pl-xl-xl,
  .px-xl-xl {
    padding-left: 8rem !important;
  }

  .m-xl-n1 {
    margin: -0.25rem !important;
  }

  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.25rem !important;
  }

  .m-xl-n2 {
    margin: -0.5rem !important;
  }

  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }

  .m-xl-n3 {
    margin: -1rem !important;
  }

  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -1rem !important;
  }

  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -1rem !important;
  }

  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -1rem !important;
  }

  .m-xl-n4 {
    margin: -1.5rem !important;
  }

  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }

  .m-xl-n5 {
    margin: -3rem !important;
  }

  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -3rem !important;
  }

  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -3rem !important;
  }

  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -3rem !important;
  }

  .m-xl-nsm {
    margin: -2rem !important;
  }

  .mt-xl-nsm,
  .my-xl-nsm {
    margin-top: -2rem !important;
  }

  .mr-xl-nsm,
  .mx-xl-nsm {
    margin-right: -2rem !important;
  }

  .mb-xl-nsm,
  .my-xl-nsm {
    margin-bottom: -2rem !important;
  }

  .ml-xl-nsm,
  .mx-xl-nsm {
    margin-left: -2rem !important;
  }

  .m-xl-nmd {
    margin: -4rem !important;
  }

  .mt-xl-nmd,
  .my-xl-nmd {
    margin-top: -4rem !important;
  }

  .mr-xl-nmd,
  .mx-xl-nmd {
    margin-right: -4rem !important;
  }

  .mb-xl-nmd,
  .my-xl-nmd {
    margin-bottom: -4rem !important;
  }

  .ml-xl-nmd,
  .mx-xl-nmd {
    margin-left: -4rem !important;
  }

  .m-xl-nlg {
    margin: -6rem !important;
  }

  .mt-xl-nlg,
  .my-xl-nlg {
    margin-top: -6rem !important;
  }

  .mr-xl-nlg,
  .mx-xl-nlg {
    margin-right: -6rem !important;
  }

  .mb-xl-nlg,
  .my-xl-nlg {
    margin-bottom: -6rem !important;
  }

  .ml-xl-nlg,
  .mx-xl-nlg {
    margin-left: -6rem !important;
  }

  .m-xl-nxl {
    margin: -8rem !important;
  }

  .mt-xl-nxl,
  .my-xl-nxl {
    margin-top: -8rem !important;
  }

  .mr-xl-nxl,
  .mx-xl-nxl {
    margin-right: -8rem !important;
  }

  .mb-xl-nxl,
  .my-xl-nxl {
    margin-bottom: -8rem !important;
  }

  .ml-xl-nxl,
  .mx-xl-nxl {
    margin-left: -8rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }

  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }

  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 600 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text_white {
  color: #ffffff !important;
}

.text-primary {
  color: #e14eca !important;
}

a.text-primary:hover,
a.text-primary:focus {
  color: #c221a9 !important;
}

.text-secondary {
  color: #f4f5f7 !important;
}

a.text-secondary:hover,
a.text-secondary:focus {
  color: #c8cdd7 !important;
}

.text-success {
  color: #00f2c3 !important;
}

a.text-success:hover,
a.text-success:focus {
  color: #00a685 !important;
}

.text-info {
  color: #1d8cf8 !important;
}

a.text-info:hover,
a.text-info:focus {
  color: #0666c2 !important;
}

.text-warning {
  color: #ff8d72 !important;
}

a.text-warning:hover,
a.text-warning:focus {
  color: #ff4f26 !important;
}

.text-danger {
  color: #fd5d93 !important;
}

a.text-danger:hover,
a.text-danger:focus {
  color: #fc1161 !important;
}

.text-light {
  color: #adb5bd !important;
}

a.text-light:hover,
a.text-light:focus {
  color: #838f9b !important;
}

.text-dark {
  color: #212529 !important;
}

a.text-dark:hover,
a.text-dark:focus {
  color: black !important;
}

.text-default {
  color: #344675 !important;
}

a.text-default:hover,
a.text-default:focus {
  color: #1c2640 !important;
}

.text_white {
  color: #ffffff !important;
}

a.text_white:hover,
a.text_white:focus {
  color: #d9d9d9 !important;
}

.text-neutral {
  color: #ffffff !important;
}

a.text-neutral:hover,
a.text-neutral:focus {
  color: #d9d9d9 !important;
}

.text-darker {
  color: black !important;
}

a.text-darker:hover,
a.text-darker:focus {
  color: black !important;
}

.text-body {
  color: #525f7f !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(34, 42, 66, 0.5) !important;
}

.text_white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {

  *,
  *::before,
  *::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " ("attr(title) ")";
  }

  pre {
    white-space: pre-wrap !important;
  }

  pre,
  blockquote {
    border: 0.0625rem solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }

  @page {
    size: a3;
  }

  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .navbar {
    display: none;
  }

  .badge {
    border: 0.0625rem solid #222a42;
  }

  .table {
    border-collapse: collapse !important;
  }

  .table td,
  .table th {
    background-color: #ffffff !important;
  }

  .table_bordered th,
  .table_bordered td {
    border: 1px solid #e3e3e3 !important;
  }

  .table-dark {
    color: inherit;
  }

  .table-dark th,
  .table-dark td,
  .table-dark thead th,
  .table-dark tbody+tbody {
    border-color: #e3e3e3;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #e3e3e3;
  }
}

.alert {
  border: 0;
  color: #ffffff;
}

.alert .alert-link {
  color: #ffffff;
}

.alert.alert-success {
  background-color: #00bf9a;
}

.alert i.fa,
.alert i.tim_icons {
  font-size: 1rem;
}

.alert .close {
  color: #ffffff;
  opacity: .9;
  text-shadow: none;
  line-height: 0;
  outline: 0;
}

.alert span[data-notify="icon"] {
  font-size: 22px;
  display: block;
  left: 19px;
  position: absolute;
  top: 50%;
  margin-top: -11px;
}

.alert button.close {
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -13px;
  width: 25px;
  height: 25px;
  padding: 3px;
}

.alert .close~span {
  display: block;
  max-width: 89%;
}

.alert.alert-with-icon {
  padding-left: 65px;
}

.alert-dismissible .close {
  top: 50%;
  right: 1.25rem;
  padding: 0;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  opacity: 1;
}

.alert-dismissible .close:hover,
.alert-dismissible .close:focus {
  color: rgba(255, 255, 255, 0.9);
  opacity: 1 !important;
}

@media (max-width: 575.98px) {
  .alert-dismissible .close {
    top: 1rem;
    right: .5rem;
  }
}

.alert-dismissible .close>span:not(.sr-only) {
  font-size: 1.5rem;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
}

.alert-dismissible .close:hover>span:not(.sr-only),
.alert-dismissible .close:focus>span:not(.sr-only) {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
}

.btn,
.navbar .navbar-nav>a.btn {
  border-width: 2px;
  border: none;
  position: relative;
  overflow: hidden;
  margin: 4px 1px;
  border-radius: 0.4285rem;
  cursor: pointer;
  background: #344675;
  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675);
  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675);
  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675);
  background-image: linear-gradient(to bottom left, #344675, #263148, #344675);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #344675;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn.animation-on-hover:hover,
.navbar .navbar-nav>a.btn.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.btn:active:focus,
.btn:active:hover,
.btn.active:focus,
.btn.active:hover,
.navbar .navbar-nav>a.btn:hover,
.navbar .navbar-nav>a.btn:focus,
.navbar .navbar-nav>a.btn:active,
.navbar .navbar-nav>a.btn.active,
.navbar .navbar-nav>a.btn:active:focus,
.navbar .navbar-nav>a.btn:active:hover,
.navbar .navbar-nav>a.btn.active:focus,
.navbar .navbar-nav>a.btn.active:hover {
  background-color: #263148 !important;
  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn:active,
.navbar .navbar-nav>a.btn:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn:not([data-action]):hover,
.navbar .navbar-nav>a.btn:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn.disabled,
.btn.disabled:hover,
.btn.disabled:focus,
.btn.disabled.focus,
.btn.disabled:active,
.btn.disabled.active,
.btn:disabled,
.btn:disabled:hover,
.btn:disabled:focus,
.btn:disabled.focus,
.btn:disabled:active,
.btn:disabled.active,
.btn[disabled],
.btn[disabled]:hover,
.btn[disabled]:focus,
.btn[disabled].focus,
.btn[disabled]:active,
.btn[disabled].active,
fieldset[disabled] .btn,
fieldset[disabled] .btn:hover,
fieldset[disabled] .btn:focus,
fieldset[disabled] .btn.focus,
fieldset[disabled] .btn:active,
fieldset[disabled] .btn.active,
.navbar .navbar-nav>a.btn.disabled,
.navbar .navbar-nav>a.btn.disabled:hover,
.navbar .navbar-nav>a.btn.disabled:focus,
.navbar .navbar-nav>a.btn.disabled.focus,
.navbar .navbar-nav>a.btn.disabled:active,
.navbar .navbar-nav>a.btn.disabled.active,
.navbar .navbar-nav>a.btn:disabled,
.navbar .navbar-nav>a.btn:disabled:hover,
.navbar .navbar-nav>a.btn:disabled:focus,
.navbar .navbar-nav>a.btn:disabled.focus,
.navbar .navbar-nav>a.btn:disabled:active,
.navbar .navbar-nav>a.btn:disabled.active,
.navbar .navbar-nav>a.btn[disabled],
.navbar .navbar-nav>a.btn[disabled]:hover,
.navbar .navbar-nav>a.btn[disabled]:focus,
.navbar .navbar-nav>a.btn[disabled].focus,
.navbar .navbar-nav>a.btn[disabled]:active,
.navbar .navbar-nav>a.btn[disabled].active,
fieldset[disabled] .navbar .navbar-nav>a.btn,
fieldset[disabled] .navbar .navbar-nav>a.btn:hover,
fieldset[disabled] .navbar .navbar-nav>a.btn:focus,
fieldset[disabled] .navbar .navbar-nav>a.btn.focus,
fieldset[disabled] .navbar .navbar-nav>a.btn:active,
fieldset[disabled] .navbar .navbar-nav>a.btn.active {
  background-color: #344675;
  border-color: #344675;
}

.btn.btn-simple,
.navbar .navbar-nav>a.btn.btn-simple {
  color: #344675;
  border-color: #344675;
  background: transparent;
}

.btn.btn-simple:hover,
.btn.btn-simple:focus,
.btn.btn-simple:active,
.btn.btn-simple:not(:disabled):not(.disabled):active,
.navbar .navbar-nav>a.btn.btn-simple:hover,
.navbar .navbar-nav>a.btn.btn-simple:focus,
.navbar .navbar-nav>a.btn.btn-simple:active,
.navbar .navbar-nav>a.btn.btn-simple:not(:disabled):not(.disabled):active {
  color: #344675;
  border-color: #344675;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn.btn-simple.active,
.navbar .navbar-nav>a.btn.btn-simple.active {
  border-color: #344675 !important;
}

.btn.btn-simple.active:hover,
.btn.btn-simple.active:focus,
.btn.btn-simple.active:active,
.btn.btn-simple.active:not(:disabled):not(.disabled):active,
.navbar .navbar-nav>a.btn.btn-simple.active:hover,
.navbar .navbar-nav>a.btn.btn-simple.active:focus,
.navbar .navbar-nav>a.btn.btn-simple.active:active,
.navbar .navbar-nav>a.btn.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #344675;
  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;
  background-color: #263148 !important;
  box-shadow: none;
}

.btn.btn-link,
.navbar .navbar-nav>a.btn.btn-link {
  color: #344675;
}

.btn.btn-link:hover,
.btn.btn-link:focus,
.btn.btn-link:active,
.navbar .navbar-nav>a.btn.btn-link:hover,
.navbar .navbar-nav>a.btn.btn-link:focus,
.navbar .navbar-nav>a.btn.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn:hover,
.btn:focus,
.navbar .navbar-nav>a.btn:hover,
.navbar .navbar-nav>a.btn:focus {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 0 !important;
}

.btn:active,
.btn.active,
.open>.btn.dropdown-toggle,
.navbar .navbar-nav>a.btn:active,
.navbar .navbar-nav>a.btn.active,
.open>.navbar .navbar-nav>a.btn.dropdown-toggle {
  box-shadow: none;
  outline: 0 !important;
}

.btn .badge,
.navbar .navbar-nav>a.btn .badge {
  margin: 0;
}

.btn.btn-icon,
.navbar .navbar-nav>a.btn.btn-icon {
  height: 2.375rem;
  min-width: 2.375rem;
  width: 2.375rem;
  padding: 0;
  font-size: 0.9375rem;
  overflow: hidden;
  position: relative;
  line-height: normal;
}

.btn.btn-icon.btn-simple,
.navbar .navbar-nav>a.btn.btn-icon.btn-simple {
  padding: 0;
}

.btn.btn-icon.btn-sm,
.btn-group-sm>.btn.btn-icon,
.navbar .navbar-nav>a.btn.btn-icon.btn-sm,
.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon {
  height: 1.875rem;
  min-width: 1.875rem;
  width: 1.875rem;
}

.btn.btn-icon.btn-sm .fa,
.btn-group-sm>.btn.btn-icon .fa,
.btn.btn-icon.btn-sm .far,
.btn-group-sm>.btn.btn-icon .far,
.btn.btn-icon.btn-sm .fas,
.btn-group-sm>.btn.btn-icon .fas,
.btn.btn-icon.btn-sm .tim_icons,
.btn-group-sm>.btn.btn-icon .tim_icons,
.navbar .navbar-nav>a.btn.btn-icon.btn-sm .fa,
.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon .fa,
.navbar .navbar-nav>a.btn.btn-icon.btn-sm .far,
.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon .far,
.navbar .navbar-nav>a.btn.btn-icon.btn-sm .fas,
.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon .fas,
.navbar .navbar-nav>a.btn.btn-icon.btn-sm .tim_icons,
.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon .tim_icons {
  font-size: 0.6875rem;
}

.btn.btn-icon.btn-lg,
.btn-group-lg>.btn.btn-icon,
.navbar .navbar-nav>a.btn.btn-icon.btn-lg,
.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon {
  height: 3.6rem;
  min-width: 3.6rem;
  width: 3.6rem;
}

.btn.btn-icon.btn-lg .fa,
.btn-group-lg>.btn.btn-icon .fa,
.btn.btn-icon.btn-lg .far,
.btn-group-lg>.btn.btn-icon .far,
.btn.btn-icon.btn-lg .fas,
.btn-group-lg>.btn.btn-icon .fas,
.btn.btn-icon.btn-lg .tim_icons,
.btn-group-lg>.btn.btn-icon .tim_icons,
.navbar .navbar-nav>a.btn.btn-icon.btn-lg .fa,
.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon .fa,
.navbar .navbar-nav>a.btn.btn-icon.btn-lg .far,
.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon .far,
.navbar .navbar-nav>a.btn.btn-icon.btn-lg .fas,
.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon .fas,
.navbar .navbar-nav>a.btn.btn-icon.btn-lg .tim_icons,
.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon .tim_icons {
  font-size: 1.325rem;
}

.btn.btn-icon:not(.btn-footer) .tim_icons,
.btn.btn-icon:not(.btn-footer) .fa,
.btn.btn-icon:not(.btn-footer) .far,
.btn.btn-icon:not(.btn-footer) .fas,
.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .tim_icons,
.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .fa,
.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .far,
.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .fas {
  position: absolute;
  font-size: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-12px, -12px);
  line-height: 1.5626rem;
  width: 24px;
}

.btn:not(.btn-icon) .tim_icons,
.navbar .navbar-nav>a.btn:not(.btn-icon) .tim_icons {
  position: relative;
  top: 1px;
}

.btn span,
.navbar .navbar-nav>a.btn span {
  position: relative;
  display: block;
}

.btn.btn-link.dropdown-toggle,
.navbar .navbar-nav>a.btn.btn-link.dropdown-toggle {
  color: #9A9A9A;
}

.btn.dropdown-toggle:after,
.navbar .navbar-nav>a.btn.dropdown-toggle:after {
  margin-left: 30px !important;
}

.btn_primary {
  background: #e14eca;
  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #e14eca;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn_primary.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn_primary:hover,
.btn_primary:focus,
.btn_primary:active,
.btn_primary.active,
.btn_primary:active:focus,
.btn_primary:active:hover,
.btn_primary.active:focus,
.btn_primary.active:hover {
  background-color: #ba54f5 !important;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn_primary:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn_primary:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn_primary.disabled,
.btn_primary.disabled:hover,
.btn_primary.disabled:focus,
.btn_primary.disabled.focus,
.btn_primary.disabled:active,
.btn_primary.disabled.active,
.btn_primary:disabled,
.btn_primary:disabled:hover,
.btn_primary:disabled:focus,
.btn_primary:disabled.focus,
.btn_primary:disabled:active,
.btn_primary:disabled.active,
.btn_primary[disabled],
.btn_primary[disabled]:hover,
.btn_primary[disabled]:focus,
.btn_primary[disabled].focus,
.btn_primary[disabled]:active,
.btn_primary[disabled].active,
fieldset[disabled] .btn_primary,
fieldset[disabled] .btn_primary:hover,
fieldset[disabled] .btn_primary:focus,
fieldset[disabled] .btn_primary.focus,
fieldset[disabled] .btn_primary:active,
fieldset[disabled] .btn_primary.active {
  background-color: #e14eca;
  border-color: #e14eca;
}

.btn_primary.btn-simple {
  color: #e14eca;
  border-color: #e14eca;
  background: transparent;
}

.btn_primary.btn-simple:hover,
.btn_primary.btn-simple:focus,
.btn_primary.btn-simple:active,
.btn_primary.btn-simple:not(:disabled):not(.disabled):active {
  color: #e14eca;
  border-color: #e14eca;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn_primary.btn-simple.active {
  border-color: #e14eca !important;
}

.btn_primary.btn-simple.active:hover,
.btn_primary.btn-simple.active:focus,
.btn_primary.btn-simple.active:active,
.btn_primary.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #e14eca;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;
  background-color: #ba54f5 !important;
  box-shadow: none;
}

.btn_primary.btn-link {
  color: #e14eca;
}

.btn_primary.btn-link:hover,
.btn_primary.btn-link:focus,
.btn_primary.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn-success {
  background: #00f2c3;
  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #00f2c3;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn-success.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:focus,
.btn-success.active:hover {
  background-color: #0098f0 !important;
  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn-success:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn-success:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-success.disabled,
.btn-success.disabled:hover,
.btn-success.disabled:focus,
.btn-success.disabled.focus,
.btn-success.disabled:active,
.btn-success.disabled.active,
.btn-success:disabled,
.btn-success:disabled:hover,
.btn-success:disabled:focus,
.btn-success:disabled.focus,
.btn-success:disabled:active,
.btn-success:disabled.active,
.btn-success[disabled],
.btn-success[disabled]:hover,
.btn-success[disabled]:focus,
.btn-success[disabled].focus,
.btn-success[disabled]:active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success,
fieldset[disabled] .btn-success:hover,
fieldset[disabled] .btn-success:focus,
fieldset[disabled] .btn-success.focus,
fieldset[disabled] .btn-success:active,
fieldset[disabled] .btn-success.active {
  background-color: #00f2c3;
  border-color: #00f2c3;
}

.btn-success.btn-simple {
  color: #00f2c3;
  border-color: #00f2c3;
  background: transparent;
}

.btn-success.btn-simple:hover,
.btn-success.btn-simple:focus,
.btn-success.btn-simple:active,
.btn-success.btn-simple:not(:disabled):not(.disabled):active {
  color: #00f2c3;
  border-color: #00f2c3;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn-success.btn-simple.active {
  border-color: #00f2c3 !important;
}

.btn-success.btn-simple.active:hover,
.btn-success.btn-simple.active:focus,
.btn-success.btn-simple.active:active,
.btn-success.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #00f2c3;
  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;
  background-color: #0098f0 !important;
  box-shadow: none;
}

.btn-success.btn-link {
  color: #00f2c3;
}

.btn-success.btn-link:hover,
.btn-success.btn-link:focus,
.btn-success.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn-info {
  background: #1d8cf8;
  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);
  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);
  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);
  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #1d8cf8;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn-info.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.btn-info:active:focus,
.btn-info:active:hover,
.btn-info.active:focus,
.btn-info.active:hover {
  background-color: #3358f4 !important;
  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn-info:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn-info:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-info.disabled,
.btn-info.disabled:hover,
.btn-info.disabled:focus,
.btn-info.disabled.focus,
.btn-info.disabled:active,
.btn-info.disabled.active,
.btn-info:disabled,
.btn-info:disabled:hover,
.btn-info:disabled:focus,
.btn-info:disabled.focus,
.btn-info:disabled:active,
.btn-info:disabled.active,
.btn-info[disabled],
.btn-info[disabled]:hover,
.btn-info[disabled]:focus,
.btn-info[disabled].focus,
.btn-info[disabled]:active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info,
fieldset[disabled] .btn-info:hover,
fieldset[disabled] .btn-info:focus,
fieldset[disabled] .btn-info.focus,
fieldset[disabled] .btn-info:active,
fieldset[disabled] .btn-info.active {
  background-color: #1d8cf8;
  border-color: #1d8cf8;
}

.btn-info.btn-simple {
  color: #1d8cf8;
  border-color: #1d8cf8;
  background: transparent;
}

.btn-info.btn-simple:hover,
.btn-info.btn-simple:focus,
.btn-info.btn-simple:active,
.btn-info.btn-simple:not(:disabled):not(.disabled):active {
  color: #1d8cf8;
  border-color: #1d8cf8;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn-info.btn-simple.active {
  border-color: #1d8cf8 !important;
}

.btn-info.btn-simple.active:hover,
.btn-info.btn-simple.active:focus,
.btn-info.btn-simple.active:active,
.btn-info.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #1d8cf8;
  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;
  background-color: #3358f4 !important;
  box-shadow: none;
}

.btn-info.btn-link {
  color: #1d8cf8;
}

.btn-info.btn-link:hover,
.btn-info.btn-link:focus,
.btn-info.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn-warning {
  background: #ff8d72;
  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);
  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);
  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);
  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #ff8d72;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn-warning.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.btn-warning:active:focus,
.btn-warning:active:hover,
.btn-warning.active:focus,
.btn-warning.active:hover {
  background-color: #ff6491 !important;
  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn-warning:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn-warning:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-warning.disabled,
.btn-warning.disabled:hover,
.btn-warning.disabled:focus,
.btn-warning.disabled.focus,
.btn-warning.disabled:active,
.btn-warning.disabled.active,
.btn-warning:disabled,
.btn-warning:disabled:hover,
.btn-warning:disabled:focus,
.btn-warning:disabled.focus,
.btn-warning:disabled:active,
.btn-warning:disabled.active,
.btn-warning[disabled],
.btn-warning[disabled]:hover,
.btn-warning[disabled]:focus,
.btn-warning[disabled].focus,
.btn-warning[disabled]:active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning,
fieldset[disabled] .btn-warning:hover,
fieldset[disabled] .btn-warning:focus,
fieldset[disabled] .btn-warning.focus,
fieldset[disabled] .btn-warning:active,
fieldset[disabled] .btn-warning.active {
  background-color: #ff8d72;
  border-color: #ff8d72;
}

.btn-warning.btn-simple {
  color: #ff8d72;
  border-color: #ff8d72;
  background: transparent;
}

.btn-warning.btn-simple:hover,
.btn-warning.btn-simple:focus,
.btn-warning.btn-simple:active,
.btn-warning.btn-simple:not(:disabled):not(.disabled):active {
  color: #ff8d72;
  border-color: #ff8d72;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn-warning.btn-simple.active {
  border-color: #ff8d72 !important;
}

.btn-warning.btn-simple.active:hover,
.btn-warning.btn-simple.active:focus,
.btn-warning.btn-simple.active:active,
.btn-warning.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #ff8d72;
  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;
  background-color: #ff6491 !important;
  box-shadow: none;
}

.btn-warning.btn-link {
  color: #ff8d72;
}

.btn-warning.btn-link:hover,
.btn-warning.btn-link:focus,
.btn-warning.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn-warning:not(:disabled):not(.disabled):active {
  color: #ffffff;
}

.btn_danger {
  background: #fd5d93;
  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);
  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);
  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);
  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #fd5d93;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #ffffff;
}

.btn_danger.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn_danger:hover,
.btn_danger:focus,
.btn_danger:active,
.btn_danger.active,
.btn_danger:active:focus,
.btn_danger:active:hover,
.btn_danger.active:focus,
.btn_danger.active:hover {
  background-color: #ec250d !important;
  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn_danger:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn_danger:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn_danger.disabled,
.btn_danger.disabled:hover,
.btn_danger.disabled:focus,
.btn_danger.disabled.focus,
.btn_danger.disabled:active,
.btn_danger.disabled.active,
.btn_danger:disabled,
.btn_danger:disabled:hover,
.btn_danger:disabled:focus,
.btn_danger:disabled.focus,
.btn_danger:disabled:active,
.btn_danger:disabled.active,
.btn_danger[disabled],
.btn_danger[disabled]:hover,
.btn_danger[disabled]:focus,
.btn_danger[disabled].focus,
.btn_danger[disabled]:active,
.btn_danger[disabled].active,
fieldset[disabled] .btn_danger,
fieldset[disabled] .btn_danger:hover,
fieldset[disabled] .btn_danger:focus,
fieldset[disabled] .btn_danger.focus,
fieldset[disabled] .btn_danger:active,
fieldset[disabled] .btn_danger.active {
  background-color: #fd5d93;
  border-color: #fd5d93;
}

.btn_danger.btn-simple {
  color: #fd5d93;
  border-color: #fd5d93;
  background: transparent;
}

.btn_danger.btn-simple:hover,
.btn_danger.btn-simple:focus,
.btn_danger.btn-simple:active,
.btn_danger.btn-simple:not(:disabled):not(.disabled):active {
  color: #fd5d93;
  border-color: #fd5d93;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn_danger.btn-simple.active {
  border-color: #fd5d93 !important;
}

.btn_danger.btn-simple.active:hover,
.btn_danger.btn-simple.active:focus,
.btn_danger.btn-simple.active:active,
.btn_danger.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #fd5d93;
  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;
  background-color: #ec250d !important;
  box-shadow: none;
}

.btn_danger.btn-link {
  color: #fd5d93;
}

.btn_danger.btn-link:hover,
.btn_danger.btn-link:focus,
.btn_danger.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn-neutral {
  background: #ffffff;
  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);
  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);
  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);
  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);
  background-size: 210% 210%;
  background-position: top right;
  background-color: #ffffff;
  transition: all 0.15s ease;
  box-shadow: none;
  color: #e14eca;
}

.btn-neutral.animation-on-hover:hover {
  background-position: bottom left;
  transition: 0.3s ease-in-out;
}

.btn-neutral:hover,
.btn-neutral:focus,
.btn-neutral:active,
.btn-neutral.active,
.btn-neutral:active:focus,
.btn-neutral:active:hover,
.btn-neutral.active:focus,
.btn-neutral.active:hover {
  background-color: #ffffff !important;
  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  color: #ffffff;
  box-shadow: none;
}

.btn-neutral:active {
  box-shadow: none !important;
  transform: translateY(1px) !important;
  transition: all .15s ease;
}

.btn-neutral:not([data-action]):hover {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-neutral.disabled,
.btn-neutral.disabled:hover,
.btn-neutral.disabled:focus,
.btn-neutral.disabled.focus,
.btn-neutral.disabled:active,
.btn-neutral.disabled.active,
.btn-neutral:disabled,
.btn-neutral:disabled:hover,
.btn-neutral:disabled:focus,
.btn-neutral:disabled.focus,
.btn-neutral:disabled:active,
.btn-neutral:disabled.active,
.btn-neutral[disabled],
.btn-neutral[disabled]:hover,
.btn-neutral[disabled]:focus,
.btn-neutral[disabled].focus,
.btn-neutral[disabled]:active,
.btn-neutral[disabled].active,
fieldset[disabled] .btn-neutral,
fieldset[disabled] .btn-neutral:hover,
fieldset[disabled] .btn-neutral:focus,
fieldset[disabled] .btn-neutral.focus,
fieldset[disabled] .btn-neutral:active,
fieldset[disabled] .btn-neutral.active {
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn-neutral.btn_danger {
  color: #fd5d93;
}

.btn-neutral.btn_danger:hover,
.btn-neutral.btn_danger:focus,
.btn-neutral.btn_danger:active,
.btn-neutral.btn_danger:active:focus {
  color: #ec250d;
}

.btn-neutral.btn-info {
  color: #1d8cf8;
}

.btn-neutral.btn-info:hover,
.btn-neutral.btn-info:focus,
.btn-neutral.btn-info:active,
.btn-neutral.btn-info:active:focus {
  color: #3358f4;
}

.btn-neutral.btn-warning {
  color: #ff8d72;
}

.btn-neutral.btn-warning:hover,
.btn-neutral.btn-warning:focus,
.btn-neutral.btn-warning:active,
.btn-neutral.btn-warning:active:focus {
  color: #ff6491;
}

.btn-neutral.btn-success {
  color: #00f2c3;
}

.btn-neutral.btn-success:hover,
.btn-neutral.btn-success:focus,
.btn-neutral.btn-success:active,
.btn-neutral.btn-success:active:focus {
  color: #0098f0;
}

.btn-neutral.btn-default {
  color: #344675;
}

.btn-neutral.btn-default:hover,
.btn-neutral.btn-default:focus,
.btn-neutral.btn-default:active,
.btn-neutral.btn-default:active:focus {
  color: #263148;
}

.btn-neutral.active,
.btn-neutral:active,
.btn-neutral:active:focus,
.btn-neutral:active:hover,
.btn-neutral.active:focus,
.btn-neutral.active:hover,
.show>.btn-neutral.dropdown-toggle,
.show>.btn-neutral.dropdown-toggle:focus,
.show>.btn-neutral.dropdown-toggle:hover {
  background-color: #ffffff;
  color: #ba54f5;
  box-shadow: none;
}

.btn-neutral:hover,
.btn-neutral:focus {
  color: #ba54f5;
}

.btn-neutral:hover:not(.nav_link),
.btn-neutral:focus:not(.nav_link) {
  box-shadow: none;
}

.btn-neutral.btn-simple {
  color: #ffffff;
  border-color: #ffffff;
  background: transparent;
}

.btn-neutral.btn-simple:hover,
.btn-neutral.btn-simple:focus,
.btn-neutral.btn-simple:active,
.btn-neutral.btn-simple:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #ffffff;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none;
}

.btn-neutral.btn-simple.active {
  border-color: #ffffff !important;
}

.btn-neutral.btn-simple.active:hover,
.btn-neutral.btn-simple.active:focus,
.btn-neutral.btn-simple.active:active,
.btn-neutral.btn-simple.active:not(:disabled):not(.disabled):active {
  color: #ffffff;
  border-color: #ffffff;
  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;
  background-color: #ffffff !important;
  box-shadow: none;
}

.btn-neutral.btn-link {
  color: #ffffff;
}

.btn-neutral.btn-link:hover,
.btn-neutral.btn-link:focus,
.btn-neutral.btn-link:active {
  background-color: transparent !important;
  background-image: none !important;
  color: #ffffff !important;
  text-decoration: none;
  box-shadow: none;
}

.btn:disabled,
.btn[disabled],
.btn.disabled {
  opacity: 0.5;
  filter: alpha(opacity=50);
  pointer-events: none;
}

.btn-simple {
  border: 1px solid;
  border-color: #344675;
  box-shadow: none;
  padding: 10px 22px;
  background-color: transparent;
}

.btn-simple.disabled,
.btn-simple.disabled:hover,
.btn-simple.disabled:focus,
.btn-simple.disabled.focus,
.btn-simple.disabled:active,
.btn-simple.disabled.active,
.btn-simple:disabled,
.btn-simple:disabled:hover,
.btn-simple:disabled:focus,
.btn-simple:disabled.focus,
.btn-simple:disabled:active,
.btn-simple:disabled.active,
.btn-simple[disabled],
.btn-simple[disabled]:hover,
.btn-simple[disabled]:focus,
.btn-simple[disabled].focus,
.btn-simple[disabled]:active,
.btn-simple[disabled].active,
fieldset[disabled] .btn-simple,
fieldset[disabled] .btn-simple:hover,
fieldset[disabled] .btn-simple:focus,
fieldset[disabled] .btn-simple.focus,
fieldset[disabled] .btn-simple:active,
fieldset[disabled] .btn-simple.active,
.btn-link.disabled,
.btn-link.disabled:hover,
.btn-link.disabled:focus,
.btn-link.disabled.focus,
.btn-link.disabled:active,
.btn-link.disabled.active,
.btn-link:disabled,
.btn-link:disabled:hover,
.btn-link:disabled:focus,
.btn-link:disabled.focus,
.btn-link:disabled:active,
.btn-link:disabled.active,
.btn-link[disabled],
.btn-link[disabled]:hover,
.btn-link[disabled]:focus,
.btn-link[disabled].focus,
.btn-link[disabled]:active,
.btn-link[disabled].active,
fieldset[disabled] .btn-link,
fieldset[disabled] .btn-link:hover,
fieldset[disabled] .btn-link:focus,
fieldset[disabled] .btn-link.focus,
fieldset[disabled] .btn-link:active,
fieldset[disabled] .btn-link.active {
  background: transparent;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.btn-link {
  border: 0;
  box-shadow: none;
  padding: 0.5rem 0.7rem;
  background: transparent;
  color: #e3e3e3;
  font-weight: 600;
}

.btn-link:hover {
  box-shadow: none !important;
  transform: none !important;
}

.btn-lg,
.btn-group-lg>.btn {
  font-size: 0.875rem;
  border-radius: 0.4285rem;
  padding: 15px 48px;
}

.btn-lg.btn-simple,
.btn-group-lg>.btn-simple.btn {
  padding: 14px 47px;
}

.btn-sm,
.btn-group-sm>.btn {
  font-size: 0.875rem;
  border-radius: 0.2857rem;
  padding: 5px 15px;
}

.btn-sm.btn-simple,
.btn-group-sm>.btn-simple.btn {
  padding: 4px 14px;
}

.btn-wd {
  min-width: 140px;
}

.btn-group.select {
  width: 100%;
}

.btn-group .btn.active {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-group.select .btn {
  text-align: left;
}

.btn-group.select .caret {
  position: absolute;
  top: 50%;
  margin-top: -1px;
  right: 8px;
}

.btn-group .btn.active {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
  -webkit-transform: translateY(-1px);
}

.btn-round {
  border-width: 1px;
  border-radius: 30px;
}

.btn-round.btn-simple {
  padding: 10px 22px;
}

.no-caret.dropdown-toggle::after {
  display: none;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show>.btn-secondary.dropdown-toggle {
  color: #ffffff;
}

.btn-group label.btn.active {
  transform: translateY(0);
  -webkit-transform: translateY(0);
}

.dropdown-menu {
  border: 0;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.1428rem;
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
}

.dropdown-menu.dropdown-menu-right:before,
.dropdown-menu.dropdown-menu-right:after {
  left: auto;
  right: 10px;
}

.dropdown-menu.dropdown-black {
  background: linear-gradient(to bottom, #222a42 0%, #1d253b 100%);
  border: 1px solid #344675;
}

.dropdown-menu.dropdown-black .dropdown-item {
  color: rgba(255, 255, 255, 0.7);
}

.dropdown-menu.dropdown-black .dropdown-divider {
  border-color: #344675;
}

.dropdown-menu.dropdown-black:before {
  color: #222a42;
  z-index: 2;
}

.dropdown-menu.dropdown-black:after {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  z-index: 1;
  vertical-align: middle;
  content: "";
  top: -6px;
  left: 10px;
  right: auto;
  color: #344675;
  border-bottom: .4em solid;
  border-right: .4em solid transparent;
  border-left: .4em solid transparent;
}

.dropdown-menu.dropdown-black.dropdown-menu-right:after {
  left: auto;
  right: 10px;
}

.dropup .dropdown-menu.dropdown-black:after {
  color: #1d253b;
  z-index: 2;
}

.dropup .dropdown-menu.dropdown-black:before {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: auto;
  bottom: -6px;
  right: auto;
  left: 10px;
  color: #555555;
  border-top: .4em solid;
  border-right: .4em solid transparent;
  border-left: .4em solid transparent;
  border-bottom: none;
  z-index: 1;
}

.dropdown-menu i {
  margin-right: 5px;
  position: relative;
  top: 1px;
}

.dropdown-menu .tim_icons {
  margin-right: 10px;
  position: relative;
  top: 4px;
  font-size: 18px;
  margin-top: -5px;
  opacity: .5;
}

.dropdown-menu .dropdown-item.active,
.dropdown-menu .dropdown-item:active {
  color: inherit;
}

.dropup .dropdown-menu:before {
  display: none;
}

.dropup .dropdown-menu:after {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: auto;
  bottom: -5px;
  right: auto;
  left: 10px;
  color: #ffffff;
  border-top: .4em solid;
  border-right: .4em solid transparent;
  border-left: .4em solid transparent;
  border-bottom: none;
}

.dropup .dropdown-menu.dropdown-menu-right:after,
.dropup .dropdown-menu.dropdown-menu-right:before {
  right: 10px;
  left: auto;
}

.dropdown-menu:before {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: -5px;
  left: 10px;
  right: auto;
  color: #ffffff;
  border-bottom: .4em solid;
  border-right: .4em solid transparent;
  border-left: .4em solid transparent;
}

.dropdown-menu.dropdown-menu-right {
  right: 0 !important;
  left: auto !important;
}

.dropdown-menu .dropdown-item,
.bootstrap-select .dropdown-menu.inner li a {
  font-size: 0.75rem;
  padding-top: .6rem;
  padding-bottom: .6rem;
  margin-top: 5px;
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus,
.bootstrap-select .dropdown-menu.inner li a:hover,
.bootstrap-select .dropdown-menu.inner li a:focus {
  background-color: rgba(222, 222, 222, 0.3);
}

.dropdown-menu .dropdown-item.disabled,
.dropdown-menu .dropdown-item:disabled,
.bootstrap-select .dropdown-menu.inner li a.disabled,
.bootstrap-select .dropdown-menu.inner li a:disabled {
  color: rgba(182, 182, 182, 0.6);
}

.dropdown-menu .dropdown-item.disabled:hover,
.dropdown-menu .dropdown-item.disabled:focus,
.dropdown-menu .dropdown-item:disabled:hover,
.dropdown-menu .dropdown-item:disabled:focus,
.bootstrap-select .dropdown-menu.inner li a.disabled:hover,
.bootstrap-select .dropdown-menu.inner li a.disabled:focus,
.bootstrap-select .dropdown-menu.inner li a:disabled:hover,
.bootstrap-select .dropdown-menu.inner li a:disabled:focus {
  background-color: transparent;
  box-shadow: none;
}

.dropdown-menu .dropdown-divider {
  background-color: rgba(222, 222, 222, 0.5);
}

.dropdown-menu .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(182, 182, 182, 0.6);
  font-size: 0.62475rem;
  text-transform: uppercase;
  font-weight: 600;
}

.dropdown-menu.dropdown-primary {
  background-color: #df41c6;
}

.dropdown-menu.dropdown-primary:before {
  color: #df41c6;
}

.dropdown-menu.dropdown-primary .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu.dropdown-primary .dropdown-item {
  color: #ffffff;
}

.dropdown-menu.dropdown-primary .dropdown-item:hover,
.dropdown-menu.dropdown-primary .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-primary .dropdown-divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-info {
  background-color: #0e84f8;
}

.dropdown-menu.dropdown-info:before {
  color: #0e84f8;
}

.dropdown-menu.dropdown-info .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu.dropdown-info .dropdown-item {
  color: #ffffff;
}

.dropdown-menu.dropdown-info .dropdown-item:hover,
.dropdown-menu.dropdown-info .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-info .dropdown-divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-danger {
  background-color: #fd4e89;
}

.dropdown-menu.dropdown-danger:before {
  color: #fd4e89;
}

.dropdown-menu.dropdown-danger .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu.dropdown-danger .dropdown-item {
  color: #ffffff;
}

.dropdown-menu.dropdown-danger .dropdown-item:hover,
.dropdown-menu.dropdown-danger .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-danger .dropdown-divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-success {
  background-color: #00e3b7;
}

.dropdown-menu.dropdown-success:before {
  color: #00e3b7;
}

.dropdown-menu.dropdown-success .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu.dropdown-success .dropdown-item {
  color: #ffffff;
}

.dropdown-menu.dropdown-success .dropdown-item:hover,
.dropdown-menu.dropdown-success .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-success .dropdown-divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-warning {
  background-color: #ff8163;
}

.dropdown-menu.dropdown-warning:before {
  color: #ff8163;
}

.dropdown-menu.dropdown-warning .dropdown-header:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu.dropdown-warning .dropdown-item {
  color: #ffffff;
}

.dropdown-menu.dropdown-warning .dropdown-item:hover,
.dropdown-menu.dropdown-warning .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu.dropdown-warning .dropdown-divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown .dropdown-menu,
.dropup:not(.bootstrap-select) .dropdown-menu,
.bootstrap-select .dropdown-menu:not(.inner),
.dropdown-menu.bootstrap-datetimepicker-widget.bottom {
  -webkit-transform: translate3d(0, -20px, 0) !important;
  -moz-transform: translate3d(0, -20px, 0) !important;
  -o-transform: translate3d(0, -20px, 0) !important;
  -ms-transform: translate3d(0, -20px, 0) !important;
  transform: translate3d(0, -20px, 0) !important;
  visibility: hidden;
  display: block;
  opacity: 0;
  filter: alpha(opacity=0);
  top: 100% !important;
}

.dropdown-menu.bootstrap-datetimepicker-widget.top {
  -webkit-transform: translate3d(0, -20px, 0) !important;
  -moz-transform: translate3d(0, -20px, 0) !important;
  -o-transform: translate3d(0, -20px, 0) !important;
  -ms-transform: translate3d(0, -20px, 0) !important;
  transform: translate3d(0, -20px, 0) !important;
  visibility: hidden;
  display: block;
  opacity: 0;
  filter: alpha(opacity=0);
}

.dropdown-menu.bootstrap-datetimepicker-widget.top,
.dropdown-menu.bootstrap-datetimepicker-widget.bottom {
  -webkit-transform: translate3d(0, -20px, 0) !important;
  -moz-transform: translate3d(0, -20px, 0) !important;
  -o-transform: translate3d(0, -20px, 0) !important;
  -ms-transform: translate3d(0, -20px, 0) !important;
  transform: translate3d(0, -20px, 0) !important;
}

.bootstrap-select.dropup .dropdown-menu:not(.inner) {
  -webkit-transform: translate3d(0, 25px, 0) !important;
  -moz-transform: translate3d(0, 25px, 0) !important;
  -o-transform: translate3d(0, 25px, 0) !important;
  -ms-transform: translate3d(0, 25px, 0) !important;
  transform: translate3d(0, 25px, 0) !important;
}

.dropup:not(.bootstrap-select) .dropdown-menu {
  -webkit-transform: translate3d(0, 20px, 0) !important;
  -moz-transform: translate3d(0, 20px, 0) !important;
  -o-transform: translate3d(0, 20px, 0) !important;
  -ms-transform: translate3d(0, 20px, 0) !important;
  transform: translate3d(0, 20px, 0) !important;
  top: auto !important;
  bottom: 100%;
}

.dropdown.show .dropdown-menu,
.bootstrap-select.show .dropdown-menu:not(.inner),
.dropdown-menu.bootstrap-datetimepicker-widget.top.open,
.dropdown-menu.bootstrap-datetimepicker-widget.bottom.open,
.dropup.show:not(.bootstrap-select) .dropdown-menu,
.navbar .dropdown.show .dropdown-menu {
  opacity: 1;
  filter: alpha(opacity=100);
  visibility: visible;
  -webkit-transform: translate3d(0, 1px, 0) !important;
  -moz-transform: translate3d(0, 1px, 0) !important;
  -o-transform: translate3d(0, 1px, 0) !important;
  -ms-transform: translate3d(0, 1px, 0) !important;
  transform: translate3d(0, 1px, 0) !important;
}

.dropdown-menu.bootstrap-datetimepicker-widget.top.open,
.dropdown-menu.bootstrap-datetimepicker-widget.bottom.open {
  -webkit-transform: translate3d(0, 0px, 0) !important;
  -moz-transform: translate3d(0, 0px, 0) !important;
  -o-transform: translate3d(0, 0px, 0) !important;
  -ms-transform: translate3d(0, 0px, 0) !important;
  transform: translate3d(0, 0px, 0) !important;
}

.dropup.show:not(.bootstrap-select) .dropdown-menu {
  -webkit-transform: translate3d(0, -2px, 0) !important;
  -moz-transform: translate3d(0, -2px, 0) !important;
  -o-transform: translate3d(0, -2px, 0) !important;
  -ms-transform: translate3d(0, -2px, 0) !important;
  transform: translate3d(0, -2px, 0) !important;
}

.dropdown-menu.dropdown-navbar {
  left: -80px;
}

.dropdown-menu.dropdown-navbar:before,
.dropdown-menu.dropdown-navbar:after {
  left: auto;
  right: 17px;
}

.btn {
  cursor: pointer;
}

.btn.dropdown-toggle[data-toggle="dropdown"] {
  padding: 10px;
  margin: 0;
  margin-bottom: 5px;
}

.btn.dropdown-toggle[data-toggle="dropdown"]:after {
  content: "";
  margin-left: 5px;
}

.btn span.bs-caret {
  display: none;
}

.btn.btn-link.dropdown-toggle {
  height: 22px;
  padding: 0;
  margin-right: 5px;
}

.dropdown-toggle:after {
  content: unset;
}

.btn:not(:disabled):not(.disabled).active:focus,
.btn:not(:disabled):not(.disabled):active:focus,
.show>.btn.dropdown-toggle:focus {
  box-shadow: none;
}

.dropdown-menu-sm {
  min-width: 100px;
  border: 0.4285rem;
}

.dropdown-menu-lg {
  min-width: 260px;
  border-radius: 0.4285rem;
}

.dropdown-menu-xl {
  min-width: 450px;
  border-radius: 0.4285rem;
}

@media screen and (max-width: 991px) {
  .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }
}

@media screen and (min-width: 992px) {
  .dropdown-menu .dropdown-item {
    color: #9A9A9A;
  }
}

.footer {
  padding: 24px 0 24px 250px;
}

.footer [class*="container-"] {
  padding: 0;
}

.footer .nav {
  display: inline-block;
  float: left;
  margin-bottom: 0;
  padding-left: 30px;
  list-style: none;
}

.footer .nav_item {
  display: inline-block;
}

.footer .nav_item:first-child a {
  padding-left: 0;
}

.footer .nav_link {
  color: #ffffff;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
}

.footer .nav_link:hover {
  text-decoration: none;
}

.footer .copyright {
  font-size: 0.75rem;
  line-height: 1.8;
  color: #ffffff;
}

.footer:after {
  display: table;
  clear: both;
  content: " ";
}

@media screen and (max-width: 991px) {
  .footer {
    padding-left: 0px;
  }

  .footer .copyright {
    text-align: right;
    margin-right: 15px;
  }
}

@media screen and (min-width: 992px) {
  .footer .copyright {
    float: right;
    padding-right: 30px;
  }
}

@media screen and (max-width: 768px) {
  .footer nav {
    display: block;
    margin-bottom: 5px;
    float: none;
  }
}

@media screen and (max-width: 576px) {
  .footer {
    text-align: center;
  }

  .footer .copyright {
    text-align: center;
  }

  .footer .nav {
    float: none;
    padding-left: 0;
  }
}

/* Form controls */
.form-control::-moz-placeholder {
  color: #6c757c;
  opacity: 1;
  filter: alpha(opacity=100);
}

.form-control:-moz-placeholder {
  color: #6c757c;
  opacity: 1;
  filter: alpha(opacity=100);
}

.form-control::-webkit-input-placeholder {
  color: #6c757c;
  opacity: 1;
  filter: alpha(opacity=100);
}

.form-control:-ms-input-placeholder {
  color: #6c757c;
  opacity: 1;
  filter: alpha(opacity=100);
}

.form-control {
  border-color: #2b3553;
  border-radius: 0.4285rem;
  font-size: 0.75rem;
  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.form-control:focus {
  border-color: #e14eca;
  background-color: transparent;
  box-shadow: none;
}

.form-control:focus+.input-group-append .input-group-text,
.form-control:focus~.input-group-append .input-group-text,
.form-control:focus+.input-group-prepend .input-group-text,
.form-control:focus~.input-group-prepend .input-group-text {
  border: 1px solid #e14eca;
  border-left: none;
  background-color: transparent;
}

.has-success .form-control,
.has-error .form-control,
.has-success .form-control:focus,
.has-error .form-control:focus {
  box-shadow: none;
}

.has-danger .form-control.form-control-success,
.has-danger .form-control.form-control-danger,
.has-success .form-control.form-control-success,
.has-success .form-control.form-control-danger {
  background-image: none;
}

.form-control+.form-control-feedback {
  border-radius: 0.4285rem;
  margin-top: -7px;
  position: absolute;
  right: 10px;
  top: 50%;
  vertical-align: middle;
}

.open .form-control {
  border-radius: 0.4285rem 0.4285rem 0 0;
  border-bottom-color: transparent;
}

.form-control+.input-group-append .input-group-text,
.form-control+.input-group-prepend .input-group-text {
  background-color: #ffffff;
}

.has-success .input-group-append .input-group-text,
.has-success .input-group-prepend .input-group-text,
.has-success .form-control {
  border-color: #2b3553;
}

.has-success .form-control:focus,
.has-success.input-group-focus .input-group-append .input-group-text,
.has-success.input-group-focus .input-group-prepend .input-group-text {
  border-color: #00bf9a;
}

.has-danger .form-control,
.has-danger .input-group-append .input-group-text,
.has-danger .input-group-prepend .input-group-text,
.has-danger.input-group-focus .input-group-prepend .input-group-text,
.has-danger.input-group-focus .input-group-append .input-group-text {
  border-color: #f33620;
  color: #ec250d;
  background-color: rgba(222, 222, 222, 0.1);
}

.has-danger .form-control:focus,
.has-danger .input-group-append .input-group-text:focus,
.has-danger .input-group-prepend .input-group-text:focus,
.has-danger.input-group-focus .input-group-prepend .input-group-text:focus,
.has-danger.input-group-focus .input-group-append .input-group-text:focus {
  background-color: transparent;
}

.has-success:after,
.has-danger:after {
  font-family: 'nucleo';
  content: "\ea1b";
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 13px;
  color: #00f2c3;
  font-size: 11px;
}

.has-success.form-control-lg:after,
.has-danger.form-control-lg:after {
  font-size: 13px;
  top: 24px;
}

.has-success.has-label:after,
.has-danger.has-label:after {
  top: 37px;
}

.has-success.form-check:after,
.has-danger.form-check:after {
  display: none !important;
}

.has-success.form-check .form-check-label,
.has-danger.form-check .form-check-label {
  color: #00f2c3;
}

.has-danger:after {
  content: "\ea48";
  color: #ec250d;
}

.has-danger.form-check .form-check-label {
  color: #ec250d;
}

img {
  max-width: 100%;
  border-radius: 0.2857rem;
}

.img-raised {
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
}

.modal-content {
  border: 0;
}

.modal-content .modal-header {
  border-bottom: none;
}

.modal-content .modal-header button {
  position: absolute;
  right: 27px;
  top: 24px;
  outline: 0;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-content .modal-header .title {
  color: #222a42;
  margin-top: 5px;
  margin-bottom: 0;
}

.modal-content .modal-header .modal-title {
  color: #222a42;
}

.modal-content .modal-header i.tim_icons {
  font-size: 16px;
}

.modal-content .modal-body {
  line-height: 1.9;
}

.modal-content .modal-body p {
  color: #222a42;
}

.modal-content .modal-footer {
  border-top: 0;
  -webkit-justify-content: space-between;
  /* Safari 6.1+ */
  justify-content: space-between;
}

.modal-content .modal-footer button {
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: auto;
}

.modal-content .modal-footer button.pull-left {
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  left: -5px;
}

.modal-content .modal-body+.modal-footer {
  padding-top: 0;
}

.modal-backdrop {
  background: rgba(0, 0, 0, 0.3);
}

.modal.modal-default .modal-content {
  background-color: #ffffff;
  color: #222a42;
}

.modal.modal-default .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-default .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-default .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-default .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-default .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-default .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-default .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-default .has-success:after,
.modal.modal-default .has-danger:after {
  color: #ffffff;
}

.modal.modal-default .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-default .input-group-prepend {
  margin-right: 0;
}

.modal.modal-default .input-group-prepend .input-group-text,
.modal.modal-default .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-default .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-default .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-default .form-group.no-border .form-control,
.modal.modal-default .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-default .form-group.no-border .form-control:focus,
.modal.modal-default .form-group.no-border .form-control:active,
.modal.modal-default .form-group.no-border .form-control:active,
.modal.modal-default .input-group.no-border .form-control:focus,
.modal.modal-default .input-group.no-border .form-control:active,
.modal.modal-default .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-default .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-default .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-default .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-default .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-default .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-default .form-group.no-border .input-group-append .input-group-text,
.modal.modal-default .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-default .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-default .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-default .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-default .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-default .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-primary .modal-content {
  background-color: #e14eca;
  color: #ffffff;
}

.modal.modal-primary .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-primary .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-primary .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-primary .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-primary .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-primary .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-primary .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-primary .has-success:after,
.modal.modal-primary .has-danger:after {
  color: #ffffff;
}

.modal.modal-primary .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-primary .input-group-prepend {
  margin-right: 0;
}

.modal.modal-primary .input-group-prepend .input-group-text,
.modal.modal-primary .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-primary .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-primary .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border .form-control,
.modal.modal-primary .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border .form-control:focus,
.modal.modal-primary .form-group.no-border .form-control:active,
.modal.modal-primary .form-group.no-border .form-control:active,
.modal.modal-primary .input-group.no-border .form-control:focus,
.modal.modal-primary .input-group.no-border .form-control:active,
.modal.modal-primary .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-primary .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-primary .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-primary .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-primary .form-group.no-border .input-group-append .input-group-text,
.modal.modal-primary .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-primary .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-primary .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-primary .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-primary .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-primary .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-danger .modal-content {
  background-color: #fd5d93;
  color: #ffffff;
}

.modal.modal-danger .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-danger .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-danger .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-danger .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-danger .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-danger .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-danger .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-danger .has-success:after,
.modal.modal-danger .has-danger:after {
  color: #ffffff;
}

.modal.modal-danger .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-danger .input-group-prepend {
  margin-right: 0;
}

.modal.modal-danger .input-group-prepend .input-group-text,
.modal.modal-danger .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-danger .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-danger .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border .form-control,
.modal.modal-danger .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border .form-control:focus,
.modal.modal-danger .form-group.no-border .form-control:active,
.modal.modal-danger .form-group.no-border .form-control:active,
.modal.modal-danger .input-group.no-border .form-control:focus,
.modal.modal-danger .input-group.no-border .form-control:active,
.modal.modal-danger .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-danger .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-danger .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-danger .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-danger .form-group.no-border .input-group-append .input-group-text,
.modal.modal-danger .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-danger .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-danger .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-danger .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-danger .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-danger .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-warning .modal-content {
  background-color: #ff8d72;
  color: #ffffff;
}

.modal.modal-warning .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-warning .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-warning .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-warning .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-warning .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-warning .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-warning .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-warning .has-success:after,
.modal.modal-warning .has-danger:after {
  color: #ffffff;
}

.modal.modal-warning .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-warning .input-group-prepend {
  margin-right: 0;
}

.modal.modal-warning .input-group-prepend .input-group-text,
.modal.modal-warning .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-warning .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-warning .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border .form-control,
.modal.modal-warning .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border .form-control:focus,
.modal.modal-warning .form-group.no-border .form-control:active,
.modal.modal-warning .form-group.no-border .form-control:active,
.modal.modal-warning .input-group.no-border .form-control:focus,
.modal.modal-warning .input-group.no-border .form-control:active,
.modal.modal-warning .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-warning .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-warning .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-warning .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-warning .form-group.no-border .input-group-append .input-group-text,
.modal.modal-warning .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-warning .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-warning .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-warning .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-warning .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-warning .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-success .modal-content {
  background-color: #00f2c3;
  color: #ffffff;
}

.modal.modal-success .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-success .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-success .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-success .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-success .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-success .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-success .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-success .has-success:after,
.modal.modal-success .has-danger:after {
  color: #ffffff;
}

.modal.modal-success .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-success .input-group-prepend {
  margin-right: 0;
}

.modal.modal-success .input-group-prepend .input-group-text,
.modal.modal-success .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-success .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-success .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-success .form-group.no-border .form-control,
.modal.modal-success .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-success .form-group.no-border .form-control:focus,
.modal.modal-success .form-group.no-border .form-control:active,
.modal.modal-success .form-group.no-border .form-control:active,
.modal.modal-success .input-group.no-border .form-control:focus,
.modal.modal-success .input-group.no-border .form-control:active,
.modal.modal-success .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-success .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-success .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-success .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-success .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-success .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-success .form-group.no-border .input-group-append .input-group-text,
.modal.modal-success .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-success .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-success .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-success .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-success .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-success .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-info .modal-content {
  background-color: #1d8cf8;
  color: #ffffff;
}

.modal.modal-info .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-info .form-control::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-info .form-control:-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-info .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-info .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.modal.modal-info .form-control {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-info .form-control:focus {
  border-color: #ffffff;
  background-color: transparent;
  color: #ffffff;
}

.modal.modal-info .has-success:after,
.modal.modal-info .has-danger:after {
  color: #ffffff;
}

.modal.modal-info .has-danger .form-control {
  background-color: transparent;
}

.modal.modal-info .input-group-prepend {
  margin-right: 0;
}

.modal.modal-info .input-group-prepend .input-group-text,
.modal.modal-info .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.modal.modal-info .input-group-focus .input-group-prepend .input-group-text,
.modal.modal-info .input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.modal.modal-info .form-group.no-border .form-control,
.modal.modal-info .input-group.no-border .form-control {
  background-color: rgba(30, 30, 47, 0.2);
  color: #ffffff;
}

.modal.modal-info .form-group.no-border .form-control:focus,
.modal.modal-info .form-group.no-border .form-control:active,
.modal.modal-info .form-group.no-border .form-control:active,
.modal.modal-info .input-group.no-border .form-control:focus,
.modal.modal-info .input-group.no-border .form-control:active,
.modal.modal-info .input-group.no-border .form-control:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text,
.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
}

.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text:active {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-info .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-info .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.modal.modal-info .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.modal.modal-info .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal.modal-info .form-group.no-border .input-group-prepend .input-group-text,
.modal.modal-info .form-group.no-border .input-group-append .input-group-text,
.modal.modal-info .input-group.no-border .input-group-prepend .input-group-text,
.modal.modal-info .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.2);
  border: none;
  color: #ffffff;
}

.modal.modal-info .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-info .form-group.no-border.input-group-focus .input-group-append .input-group-text,
.modal.modal-info .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,
.modal.modal-info .input-group.no-border.input-group-focus .input-group-append .input-group-text {
  background-color: rgba(30, 30, 47, 0.3);
  color: #ffffff;
}

.modal .modal-header .close {
  color: #fd5d93;
  text-shadow: none;
}

.modal .modal-header .close:hover,
.modal .modal-header .close:focus {
  opacity: 1;
}

.modal.modal-black .modal-content {
  background: linear-gradient(to bottom, #222a42 0%, #1d253b 100%);
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-black .modal-content .modal-header .modal-title,
.modal.modal-black .modal-content .modal-header .title {
  color: rgba(255, 255, 255, 0.9);
}

.modal.modal-black .modal-content .modal-body p {
  color: rgba(255, 255, 255, 0.8);
}

.modal.modal-black h1,
.modal.modal-black h2,
.modal.modal-black h3,
.modal.modal-black h4,
.modal.modal-black h5,
.modal.modal-black h6,
.modal.modal-black p {
  color: #ffffff;
}

.modal-search .modal-dialog {
  margin: 20px auto;
  max-width: 650px;
}

.modal-search .modal-dialog input {
  border: none;
  font-size: 17px;
  font-weight: 100;
}

.modal-search .modal-dialog span {
  font-size: 35px;
  color: #b7b7b7;
}

.modal-search .modal-content .modal-header {
  padding: 24px;
}

.modal-search .modal-header .close {
  color: #555555;
  top: 30px !important;
}

.modal-search .modal-footer {
  border-top: 2px solid #f9f9f9;
  margin: 0px 25px 20px;
}

.navbar {
  padding: 10px 30px 10px 15px;
  width: 100%;
  z-index: 1050;
  background: #1a1e34;
}

.navbar .photo {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  vertical-align: middle;
  overflow: hidden;
}

.navbar .photo img {
  width: 100%;
}

.navbar .navbar-wrapper {
  display: flex;
  align-items: center;
}

.navbar .navbar-text {
  color: #ffffff;
}

.navbar .btn {
  margin: 0 5px 0 10px;
}

.navbar.navbar-absolute {
  position: absolute;
  z-index: 1050;
}

.navbar.navbar-transparent {
  background: transparent !important;
}

.navbar.bg-white .navbar-nav .search-bar.input-group i {
  color: #222a42;
}

.navbar.bg-white .navbar-nav .search-bar.input-group .form-control {
  background: rgba(34, 42, 66, 0.1);
  border-radius: 4px;
}

.navbar.bg-white .navbar-nav a.nav_link {
  color: #222a42 !important;
}

.navbar.bg-white .navbar-nav a.nav_link p {
  color: #222a42;
}

.navbar.bg-white .navbar-text,
.navbar.bg-white .navbar-brand {
  color: #222a42;
}

.navbar.bg-white .form-control {
  color: #222a42 !important;
}

.navbar.bg-white .form-control::placeholder {
  color: #9A9A9A !important;
}

.navbar.bg-dark {
  background: #222a42 !important;
}

.navbar.bg_primary {
  background-color: #e14eca !important;
}

.navbar.bg-warning {
  background-color: #ff8d72 !important;
}

.navbar.bg-info {
  background-color: #1d8cf8 !important;
}

.navbar.bg-success {
  background-color: #00bf9a !important;
}

.navbar.bg-danger {
  background-color: #fd5d93 !important;
}

.navbar .navbar-brand {
  position: fixed;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  color: #ffffff;
  margin-left: 17px;
  margin-top: 3px;
  text-transform: uppercase;
  font-size: 1rem;
}

.navbar .navbar-toggle button:focus,
.navbar .navbar-toggler {
  outline: none;
}

.navbar-minimize-fixed {
  position: fixed;
  margin-left: 40px;
  margin-top: 14px;
  transition: 0.3s ease;
  color: white;
  z-index: 20;
  opacity: 0;
  transition: 0.2s ease;
}

.navbar-minimize-fixed button i {
  font-size: 20px;
}

.notification {
  background: #fd5d93;
  color: #ffffff;
  border-radius: 0.875rem;
  height: 6px;
  width: 6px;
  position: absolute;
  text-align: center;
  font-size: 12px;
  font-weight: 800;
  top: 10px;
  right: 10px;
  border: 1px solid #fd5d93;
}

.navbar-nav li {
  padding: 0 10px;
}

.navbar-nav li a {
  color: #ffffff;
}

.navbar-nav li i {
  vertical-align: middle;
  font-size: 20px;
}

@media screen and (max-width: 991px) {
  .navbar .container_fluid {
    padding-right: 15px;
    padding-left: 15px;
  }

  .navbar .navbar-collapse .input-group {
    margin: 0;
    margin-top: 5px;
  }

  .navbar .navbar-nav .btn {
    margin-left: -3px;
    display: flex;
  }

  .navbar .navbar-nav .btn i {
    margin-right: 12px;
  }

  .navbar .navbar-nav .btn span {
    margin: 0;
    text-transform: uppercase;
    font-weight: 300;
  }

  .navbar .navbar-nav .btn span,
  .navbar .navbar-nav .btn span:hover,
  .navbar .navbar-nav .btn span:focus,
  .navbar .navbar-nav .btn span:active,
  .navbar .navbar-nav .btn span:active:focus {
    color: #222a42 !important;
  }

  .navbar .navbar-nav a.nav_link i {
    opacity: 1;
    margin-left: 4px;
    margin-right: 5px;
  }

  .navbar .navbar-nav a.nav_link p {
    display: inline-block;
    text-transform: uppercase;
    margin-left: 7px;
  }

  .navbar .navbar-nav .modal-search .modal-dialog {
    padding: 0 40px;
  }

  .navbar .navbar-nav .dropdown {
    margin: 5px 0;
  }

  .navbar .navbar-nav .dropdown .nav_link {
    padding-bottom: 0;
  }

  .navbar .navbar-nav .dropdown .dropdown-menu .dropdown-item {
    margin-top: 0;
    padding-left: 24px;
  }

  .navbar .dropdown.show .dropdown-menu {
    display: block;
  }

  .navbar .dropdown .dropdown-menu {
    display: none;
  }

  .navbar .dropdown .dropdown-menu li a {
    color: #222a42;
  }

  .navbar .dropdown.show .dropdown-menu,
  .navbar .dropdown .dropdown-menu {
    background-color: transparent;
    border: 0;
    transition: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: auto;
    margin: 0px 1rem;
    margin-top: 0px;
  }

  .navbar .dropdown.show .dropdown-menu:before,
  .navbar .dropdown .dropdown-menu:before {
    display: none;
  }

  .navbar .dropdown-menu .dropdown-item:focus,
  .navbar .dropdown-menu .dropdown-item:hover {
    color: #ffffff;
  }

  .navbar.bg-white .dropdown-menu .dropdown-item:focus,
  .navbar.bg-white .dropdown-menu .dropdown-item:hover {
    color: #344675;
  }

  .navbar button.navbar-toggler[data-target="#navigation"] {
    padding-top: 0;
  }

  .navbar .navbar-toggler-bar {
    display: block;
    position: relative;
    width: 22px;
    height: 1px;
    border-radius: 1px;
    background: #ffffff;
  }

  .navbar .navbar-toggler-bar.navbar-kebab {
    height: 4px;
    width: 4px;
    margin-bottom: 3px;
    border-radius: 50%;
  }

  .navbar .navbar-toggler-bar+.navbar-toggler-bar {
    margin-top: 7px;
  }

  .navbar .navbar-toggler-bar+.navbar-toggler-bar.navbar-kebab {
    margin-top: 0px;
  }

  .navbar .navbar-toggler-bar.bar2 {
    width: 17px;
    transition: width .2s linear;
  }

  .navbar.bg-white:not(.navbar-transparent) .navbar-toggler-bar {
    background-color: #344675;
  }

  .navbar .toggled .navbar-toggler-bar {
    width: 24px;
  }

  .navbar .toggled .navbar-toggler-bar+.navbar-toggler-bar {
    margin-top: 5px;
  }

  .navbar .navbar-brand {
    margin-left: 20px;
    position: relative;
  }

  .navbar-nav .nav_link i.fa,
  .navbar-nav .nav_link i.tim_icons {
    opacity: .5;
  }

  .bar1,
  .bar2,
  .bar3 {
    outline: 1px solid transparent;
  }

  .bar1 {
    top: 0px;
    -webkit-animation: topbar-back 500ms linear 0s;
    -moz-animation: topbar-back 500ms linear 0s;
    animation: topbar-back 500ms 0s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .bar2 {
    opacity: 1;
  }

  .bar3 {
    bottom: 0px;
    -webkit-animation: bottombar-back 500ms linear 0s;
    -moz-animation: bottombar-back 500ms linear 0s;
    animation: bottombar-back 500ms 0s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .toggled .bar1 {
    top: 6px;
    -webkit-animation: topbar-x 500ms linear 0s;
    -moz-animation: topbar-x 500ms linear 0s;
    animation: topbar-x 500ms 0s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .toggled .bar2 {
    opacity: 0;
  }

  .toggled .bar3 {
    bottom: 6px;
    -webkit-animation: bottombar-x 500ms linear 0s;
    -moz-animation: bottombar-x 500ms linear 0s;
    animation: bottombar-x 500ms 0s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @keyframes topbar-x {
    0% {
      top: 0px;
      transform: rotate(0deg);
    }

    45% {
      top: 6px;
      transform: rotate(145deg);
    }

    75% {
      transform: rotate(130deg);
    }

    100% {
      transform: rotate(135deg);
    }
  }

  @-webkit-keyframes topbar-x {
    0% {
      top: 0px;
      -webkit-transform: rotate(0deg);
    }

    45% {
      top: 6px;
      -webkit-transform: rotate(145deg);
    }

    75% {
      -webkit-transform: rotate(130deg);
    }

    100% {
      -webkit-transform: rotate(135deg);
    }
  }

  @-moz-keyframes topbar-x {
    0% {
      top: 0px;
      -moz-transform: rotate(0deg);
    }

    45% {
      top: 6px;
      -moz-transform: rotate(145deg);
    }

    75% {
      -moz-transform: rotate(130deg);
    }

    100% {
      -moz-transform: rotate(135deg);
    }
  }

  @keyframes topbar-back {
    0% {
      top: 6px;
      transform: rotate(135deg);
    }

    45% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(5deg);
    }

    100% {
      top: 0px;
      transform: rotate(0);
    }
  }

  @-webkit-keyframes topbar-back {
    0% {
      top: 6px;
      -webkit-transform: rotate(135deg);
    }

    45% {
      -webkit-transform: rotate(-10deg);
    }

    75% {
      -webkit-transform: rotate(5deg);
    }

    100% {
      top: 0px;
      -webkit-transform: rotate(0);
    }
  }

  @-moz-keyframes topbar-back {
    0% {
      top: 6px;
      -moz-transform: rotate(135deg);
    }

    45% {
      -moz-transform: rotate(-10deg);
    }

    75% {
      -moz-transform: rotate(5deg);
    }

    100% {
      top: 0px;
      -moz-transform: rotate(0);
    }
  }

  @keyframes bottombar-x {
    0% {
      bottom: 0px;
      transform: rotate(0deg);
    }

    45% {
      bottom: 6px;
      transform: rotate(-145deg);
    }

    75% {
      transform: rotate(-130deg);
    }

    100% {
      transform: rotate(-135deg);
    }
  }

  @-webkit-keyframes bottombar-x {
    0% {
      bottom: 0px;
      -webkit-transform: rotate(0deg);
    }

    45% {
      bottom: 6px;
      -webkit-transform: rotate(-145deg);
    }

    75% {
      -webkit-transform: rotate(-130deg);
    }

    100% {
      -webkit-transform: rotate(-135deg);
    }
  }

  @-moz-keyframes bottombar-x {
    0% {
      bottom: 0px;
      -moz-transform: rotate(0deg);
    }

    45% {
      bottom: 6px;
      -moz-transform: rotate(-145deg);
    }

    75% {
      -moz-transform: rotate(-130deg);
    }

    100% {
      -moz-transform: rotate(-135deg);
    }
  }

  @keyframes bottombar-back {
    0% {
      bottom: 6px;
      transform: rotate(-135deg);
    }

    45% {
      transform: rotate(10deg);
    }

    75% {
      transform: rotate(-5deg);
    }

    100% {
      bottom: 0px;
      transform: rotate(0);
    }
  }

  @-webkit-keyframes bottombar-back {
    0% {
      bottom: 6px;
      -webkit-transform: rotate(-135deg);
    }

    45% {
      -webkit-transform: rotate(10deg);
    }

    75% {
      -webkit-transform: rotate(-5deg);
    }

    100% {
      bottom: 0px;
      -webkit-transform: rotate(0);
    }
  }

  @-moz-keyframes bottombar-back {
    0% {
      bottom: 6px;
      -moz-transform: rotate(-135deg);
    }

    45% {
      -moz-transform: rotate(10deg);
    }

    75% {
      -moz-transform: rotate(-5deg);
    }

    100% {
      bottom: 0px;
      -moz-transform: rotate(0);
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@media screen and (min-width: 992px) {
  .navbar-collapse {
    background: none !important;
  }

  .navbar .navbar-toggle {
    display: none;
  }

  .navbar-nav .nav_link.profile-photo {
    padding: 0;
    margin: 7px 0.7rem;
  }

  .navbar .caret {
    position: absolute;
    left: 80%;
    top: 55%;
    margin-left: 0;
  }

  .navbar-expand-lg .navbar-nav .nav_link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
}

@media screen and (max-width: 576px) {
  .navbar[class*='navbar-toggleable-'] .container {
    margin-left: 0;
    margin-right: 0;
  }
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  line-height: 1.2;
}

p {
  font-weight: 300;
}

button,
input,
optgroup,
select,
textarea {
  font-family: "Poppins", sans-serif;
}

.card h1,
.card h2,
.card h3,
.card h4,
.card h5,
.card h6,
.card p {
  color: rgba(255, 255, 255, 0.8);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
}

a {
  color: #ba54f5;
  font-weight: 300;
}

a:hover,
a:focus {
  color: #e14eca;
}

h1,
.h1 {
  line-height: 1.05;
  margin-bottom: 30px;
}

h1 small,
.h1 small {
  font-weight: 600;
  text-transform: uppercase;
  opacity: .8;
}

h2,
.h2 {
  margin-bottom: 30px;
  line-height: 1.2;
}

h3,
.h3 {
  margin-bottom: 30px;
  line-height: 1.4em;
}

h4,
.h4 {
  line-height: 1.45em;
  margin-bottom: 15px;
}

h4+.category,
h4.title+.category,
.h4+.category,
.h4.title+.category {
  margin-top: -10px;
}

h5,
.h5 {
  line-height: 1.4em;
  margin-bottom: 15px;
}

h6,
.h6 {
  text-transform: uppercase;
  font-weight: 600;
}

p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
}

p.description {
  font-size: 1.14em;
}

.title {
  font-weight: 600;
}

.title.title-up {
  text-transform: uppercase;
}

.title.title-up a {
  color: #222a42;
  text-decoration: none;
}

.title+.category {
  margin-top: -10px;
}

.description,
.card-description,
.footer-big p,
.card .footer .stats {
  color: #9A9A9A;
  font-weight: 300;
}

.category,
.card-category {
  text-transform: capitalize;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
}

.card-category {
  font-size: 0.75rem;
}

.blockquote {
  border-left: none;
  border: 1px solid #344675;
  padding: 20px;
  font-size: 0.9625rem;
  line-height: 1.8;
}

.blockquote small {
  color: #344675;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.blockquote.blockquote-primary {
  border-color: #e14eca;
  color: #e14eca;
}

.blockquote.blockquote-primary small {
  color: #e14eca;
}

.blockquote.blockquote-danger {
  border-color: #fd5d93;
  color: #fd5d93;
}

.blockquote.blockquote-danger small {
  color: #fd5d93;
}

.blockquote.blockquote-white {
  border-color: rgba(255, 255, 255, 0.8);
  color: #ffffff;
}

.blockquote.blockquote-white small {
  color: rgba(255, 255, 255, 0.8);
}

ul li,
ol li {
  color: #ffffff;
}

pre {
  color: rgba(255, 255, 255, 0.8);
}

hr {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.table>tbody>tr>td {
  color: rgba(255, 255, 255, 0.7) !important;
}

.table>tbody>tr>td .photo {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.table>tbody>tr>td .photo img {
  width: 100%;
}

.table>tbody>tr.table-success>td {
  background-color: #00bf9a;
}

.table>tbody>tr.table-info>td {
  background-color: #1d8cf8;
}

.table>tbody>tr.table-primary>td {
  background-color: #e14eca;
}

.table>tbody>tr.table-warning>td {
  background-color: #ff8d72;
}

.table>tbody>tr.table-danger>td {
  background-color: #fd5d93;
}

.table .img-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.table .img-row {
  max-width: 60px;
  width: 60px;
}

.table .form-check {
  margin: 0;
  margin-top: 5px;
}

.table .form-check label .form-check-sign::before,
.table .form-check label .form-check-sign::after {
  top: -17px;
  left: 4px;
}

.table .btn {
  margin: 0;
}

.table small,
.table .small {
  font-weight: 300;
}

.card-tasks .card_body .table {
  margin-bottom: 0;
}

.card-tasks .card_body .table>thead>tr>th,
.card-tasks .card_body .table>tbody>tr>th,
.card-tasks .card_body .table>tfoot>tr>th,
.card-tasks .card_body .table>thead>tr>td,
.card-tasks .card_body .table>tbody>tr>td,
.card-tasks .card_body .table>tfoot>tr>td {
  padding-top: 5px;
  padding-bottom: 5px;
}

.table>thead>tr>th {
  border-bottom-width: 1px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  border: 0;
  color: rgba(255, 255, 255, 0.7);
}

.table .radio,
.table .checkbox {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  width: 15px;
}

.table .radio .icons,
.table .checkbox .icons {
  position: relative;
}

.table .radio label:after,
.table .radio label:before,
.table .checkbox label:after,
.table .checkbox label:before {
  top: -17px;
  left: -3px;
}

.table>thead>tr>th,
.table>tbody>tr>th,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>tbody>tr>td,
.table>tfoot>tr>td {
  border-color: rgba(255, 255, 255, 0.1);
  padding: 12px 7px;
  vertical-align: middle;
}

.table.table-shopping tbody tr:last-child td {
  border: none;
}

.table .th-description {
  max-width: 150px;
}

.table .td-price {
  font-size: 26px;
  font-weight: 300;
  margin-top: 5px;
  position: relative;
  top: 4px;
  text-align: right;
}

.table .td-total {
  font-weight: 600;
  font-size: 0.8125rem;
  padding-top: 20px;
  text-align: right;
}

.table .td-actions .btn {
  margin: 0px;
}

.table>tbody>tr {
  position: relative;
}

.table>tfoot>tr {
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

.table-responsive {
  overflow: scroll;
  padding-bottom: 10px;
}

#tables .table-responsive {
  margin-bottom: 30px;
}

table.tablesorter thead tr .header {
  /* background-image: url("../img/bg.gif"); */
  background-repeat: no-repeat;
  background-position: center right;
  cursor: pointer;
}

table.tablesorter thead tr .headerSortUp {
  /* background-image: url("../img/asc.gif"); */
}

table.tablesorter thead tr .headerSortDown {
  /* background-image: url("../img/desc.gif"); */
}

.dataTables_wrapper .table_striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.dataTables_wrapper .form-control-sm {
  font-size: 10px;
}

.form-check {
  margin-top: .5rem;
  padding-left: 0;
}

.form-check .form-check-label {
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-left: 25px;
  line-height: 18px;
  margin-bottom: 0;
  -webkit-transition: color 0.3s linear;
  -moz-transition: color 0.3s linear;
  -o-transition: color 0.3s linear;
  -ms-transition: color 0.3s linear;
  transition: color 0.3s linear;
}

.radio .form-check-sign {
  padding-left: 28px;
}

.form-check-radio.form-check-inline .form-check-label {
  padding-left: 5px;
  margin-right: 10px;
}

.form-check .form-check-sign::before,
.form-check .form-check-sign::after {
  content: " ";
  display: inline-block;
  position: absolute;
  width: 17px;
  height: 17px;
  left: 0;
  cursor: pointer;
  border-radius: 3px;
  top: 0;
  border: 1px solid #818181;
  -webkit-transition: opacity 0.3s linear;
  -moz-transition: opacity 0.3s linear;
  -o-transition: opacity 0.3s linear;
  -ms-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
}

.form-check input[type="checkbox"]:checked+.form-check-sign::before,
.form-check input[type="checkbox"]:checked+.form-check-sign::before {
  border: none;
  background-color: #e14eca;
}

.form-check .form-check-sign::after {
  font-family: 'nucleo';
  content: "\ea1b";
  top: 0px;
  text-align: center;
  font-size: 14px;
  opacity: 0;
  color: #ffffff;
  font-weight: 600;
  border: 0;
  background-color: inherit;
}

.form-check.disabled .form-check-label,
.form-check.disabled .form-check-label {
  color: #9A9A9A;
  opacity: .5;
  cursor: not-allowed;
}

.form-check input[type="checkbox"],
.radio input[type="radio"] {
  opacity: 0;
  position: absolute;
  visibility: hidden;
}

.form-check input[type="checkbox"]:checked+.form-check-sign::after {
  opacity: 1;
  font-size: 10px;
  margin-top: 0;
}

.form-check input[type="checkbox"]+.form-check-sign::after {
  opacity: 0;
  font-size: 10px;
  margin-top: 0;
}

.form-control input[type="checkbox"]:disabled+.form-check-sign::before,
.checkbox input[type="checkbox"]:disabled+.form-check-sign::after {
  cursor: not-allowed;
}

.form-check input[type="checkbox"]:disabled+.form-check-sign,
.form-check input[type="radio"]:disabled+.form-check-sign {
  pointer-events: none;
}

.form-check-radio .form-check-label {
  padding-top: 3px;
}

.form-check-radio .form-check-sign::before,
.form-check-radio .form-check-sign::after {
  content: " ";
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #818181;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 3px;
  padding: 1px;
  -webkit-transition: opacity 0.3s linear;
  -moz-transition: opacity 0.3s linear;
  -o-transition: opacity 0.3s linear;
  -ms-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
}

.form-check-radio input[type="radio"]+.form-check-sign:after,
.form-check-radio input[type="radio"] {
  opacity: 0;
}

.form-check-radio input[type="radio"]:checked+.form-check-sign::after {
  width: 6px;
  height: 6px;
  background-color: #e14eca;
  border-color: #e14eca;
  top: 9px;
  left: 6px;
  opacity: 1;
}

.form-check-radio input[type="radio"]:checked+.form-check-sign::before {
  border-color: #e14eca;
}

.form-check-radio input[type="radio"]:checked+.form-check-sign::after {
  opacity: 1;
}

.form-check-radio input[type="radio"]:disabled+.form-check-sign {
  color: #9A9A9A;
}

.form-check-radio input[type="radio"]:disabled+.form-check-sign::before,
.form-check-radio input[type="radio"]:disabled+.form-check-sign::after {
  color: #9A9A9A;
}

.fixed-plugin {
  position: fixed;
  right: 0;
  width: 64px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1031;
  border-radius: 8px 0 0 8px;
  text-align: center;
  top: 130px;
}

.fixed-plugin li>a,
.fixed-plugin .badge {
  transition: all .34s;
  -webkit-transition: all .34s;
  -moz-transition: all .34s;
}

.fixed-plugin .fa-cog {
  color: #ffffff;
  padding: 10px;
  border-radius: 0 0 6px 6px;
  width: auto;
}

.fixed-plugin .dropdown-menu {
  right: 80px;
  left: auto !important;
  top: -52px !important;
  width: 290px;
  border-radius: 0.1875rem;
  padding: 0 10px;
  background: linear-gradient(#222a42, #1d253b);
}

.fixed-plugin .dropdown .dropdown-menu .tim_icons {
  top: 5px;
}

.fixed-plugin .dropdown-menu:after,
.fixed-plugin .dropdown-menu:before {
  right: 10px;
  margin-left: auto;
  left: auto;
}

.fixed-plugin .fa-circle-thin {
  color: #ffffff;
}

.fixed-plugin .active .fa-circle-thin {
  color: #00bbff;
}

.fixed-plugin .dropdown-menu>.active>a,
.fixed-plugin .dropdown-menu>.active>a:hover,
.fixed-plugin .dropdown-menu>.active>a:focus {
  color: #777777;
  text-align: center;
}

.fixed-plugin img {
  border-radius: 0;
  width: 100%;
  height: 100px;
  margin: 0 auto;
}

.fixed-plugin .dropdown-menu li>a:hover,
.fixed-plugin .dropdown-menu li>a:focus {
  box-shadow: none;
}

.fixed-plugin .badge {
  border: 2px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 23px;
  margin-right: 5px;
  position: relative;
  width: 23px;
}

.fixed-plugin .badge.active,
.fixed-plugin .badge:hover {
  border-color: #1d253b;
}

.fixed-plugin .light-badge,
.fixed-plugin .dark-badge {
  margin: 0;
  border: 1px solid #1d8cf8;
}

.fixed-plugin .light-badge:hover,
.fixed-plugin .dark-badge:hover {
  border: 1px solid #1d8cf8;
}

.fixed-plugin .light-badge {
  background: #ffffff;
}

.fixed-plugin .light-badge:hover {
  background: #ffffff;
}

.fixed-plugin .dark-badge {
  background: #222a42;
}

.fixed-plugin .dark-badge:hover {
  background: #222a42;
}

.fixed-plugin h5 {
  margin: 10px;
}

.fixed-plugin .dropdown-menu li {
  display: block;
  padding: 18px 2px;
  width: 25%;
  float: left;
}

.fixed-plugin li.adjustments-line,
.fixed-plugin li.header-title,
.fixed-plugin li.button-container {
  width: 100%;
  height: 50px;
  min-height: inherit;
}

.fixed-plugin li.button-container {
  height: auto;
}

.fixed-plugin li.button-container div {
  margin-bottom: 5px;
}

.fixed-plugin #sharrreTitle {
  text-align: center;
  padding: 10px 0;
  height: 50px;
}

.fixed-plugin li.header-title {
  color: #ffffff;
  height: 30px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.fixed-plugin .adjustments-line a {
  color: transparent;
}

.fixed-plugin .adjustments-line a .badge-colors {
  position: relative;
  top: -2px;
}

.fixed-plugin .adjustments-line a a:hover,
.fixed-plugin .adjustments-line a a:focus {
  color: transparent;
}

.fixed-plugin .adjustments-line .togglebutton {
  text-align: center;
}

.fixed-plugin .adjustments-line .togglebutton .label-switch {
  position: relative;
  left: -10px;
  font-size: 0.62475rem;
  color: #ffffff;
}

.fixed-plugin .adjustments-line .togglebutton .label-switch.label-right {
  left: 10px;
}

.fixed-plugin .adjustments-line .togglebutton .toggle {
  margin-right: 0;
}

.fixed-plugin .adjustments-line .color-label {
  position: relative;
  top: -7px;
  font-size: 0.62475rem;
  color: #ffffff;
}

.fixed-plugin .adjustments-line .dropdown-menu>li.adjustments-line>a {
  padding-right: 0;
  padding-left: 0;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  margin: 0;
}

.fixed-plugin .dropdown-menu>li>a.img-holder {
  font-size: 1rem;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  border: 3px solid #ffffff;
  padding-left: 0;
  padding-right: 0;
  opacity: 1;
  cursor: pointer;
  display: block;
  max-height: 100px;
  overflow: hidden;
  padding: 0;
}

.fixed-plugin .dropdown-menu>li>a.img-holder img {
  margin-top: auto;
}

.fixed-plugin .dropdown-menu>li a.switch-trigger:hover,
.fixed-plugin .dropdown-menu>li>a.switch-trigger:focus {
  background-color: transparent;
}

.fixed-plugin .dropdown-menu>li:hover>a.img-holder,
.fixed-plugin .dropdown-menu>li:focus>a.img-holder {
  border-color: rgba(0, 187, 255, 0.53);
}

.fixed-plugin .dropdown-menu>.active>a.img-holder,
.fixed-plugin .dropdown-menu>.active>a.img-holder {
  border-color: #00bbff;
  background-color: #ffffff;
}

.fixed-plugin .btn-social {
  width: 50%;
  display: block;
  width: 48%;
  float: left;
  font-weight: 600;
}

.fixed-plugin .btn-social i {
  margin-right: 5px;
}

.fixed-plugin .btn-social:first-child {
  margin-right: 2%;
}

.fixed-plugin .dropdown .dropdown-menu {
  -webkit-transform: translateY(-15%);
  -moz-transform: translateY(-15%);
  -o-transform: translateY(-15%);
  -ms-transform: translateY(-15%);
  transform: translateY(-15%);
  top: 27px;
  opacity: 0;
  transform-origin: 0 0;
}

.fixed-plugin .dropdown .dropdown-menu:before {
  border-bottom: 0.4em solid rgba(0, 0, 0, 0);
  border-left: 0.4em solid rgba(0, 0, 0, 0.2);
  border-top: 0.4em solid rgba(0, 0, 0, 0);
  right: -16px;
  top: 46px;
}

.fixed-plugin .dropdown .dropdown-menu:after {
  border-bottom: 0.4em solid rgba(0, 0, 0, 0);
  border-left: 0.4em solid #222a42;
  border-top: 0.4em solid rgba(0, 0, 0, 0);
  right: -16px;
}

.fixed-plugin .dropdown .dropdown-menu:before,
.fixed-plugin .dropdown .dropdown-menu:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 74px;
  width: 16px;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
}

.fixed-plugin .dropdown.show .dropdown-menu {
  opacity: 1;
  -webkit-transform: translateY(-13%);
  -moz-transform: translateY(-13%);
  -o-transform: translateY(-13%);
  -ms-transform: translateY(-13%);
  transform: translateY(-13%);
  transform-origin: 0 0;
}

.fixed-plugin .bootstrap-switch {
  margin: 0;
}

.wrapper {
  position: relative;
  top: 0;
  height: 100vh;
}

.wrapper.wrapper-full-page {
  min-height: 100vh;
  height: auto;
}

.sidebar_wrapper ul li div.collapse ul li div.collapse ul li a,
.sidebar_wrapper ul li div.collapse ul li div.collapsing ul li a,
.sidebar_wrapper ul li div.collapsing ul li div.collapse ul li a {
  margin-left: 25px;
}

.sidebar,
.off-canvas-sidebar {
  background: #ba54f5;
  background: -webkit-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
  background: -o-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
  background: -moz-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
  background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
  height: calc(100vh - 90px);
  width: 230px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  display: block;
  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.6);
  margin-top: 80px;
  margin-left: 20px;
  border-radius: 5px;
  transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}

.sidebar .sidebar_wrapper,
.off-canvas-sidebar .sidebar_wrapper {
  width: 100%;
  min-height: 100%;
  max-height: calc(100vh - 705px);
  z-index: 4;
  position: relative;
  overflow: auto;
}

.sidebar .sidebar_wrapper .dropdown .dropdown-backdrop,
.off-canvas-sidebar .sidebar_wrapper .dropdown .dropdown-backdrop {
  display: none !important;
}

.sidebar .sidebar_wrapper .navbar-form,
.off-canvas-sidebar .sidebar_wrapper .navbar-form {
  border: none;
}

.sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a span,
.sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a span,
.off-canvas-sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a span,
.off-canvas-sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a span {
  display: inline-block;
}

.sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.off-canvas-sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.off-canvas-sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal {
  margin: 0;
  position: relative;
  transform: translateX(0px);
  opacity: 1;
  white-space: nowrap;
  display: block;
  line-height: 23px;
  z-index: 1;
  color: rgba(255, 255, 255, 0.8);
}

.sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.off-canvas-sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.off-canvas-sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon {
  text-transform: uppercase;
  width: 34px;
  margin-right: 10px;
  margin-left: 0px;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  position: relative;
  float: left;
  z-index: 1;
  display: inherit;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
}

.sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a i,
.sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a i,
.off-canvas-sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a i,
.off-canvas-sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a i {
  font-size: 17px;
  line-height: 20px;
  width: 26px;
}

.sidebar .sidebar_wrapper [data-toggle="collapse"]~div>ul>li:hover>a .sidebar-mini-icon,
.sidebar .sidebar_wrapper [data-toggle="collapse"]~div>ul>li:hover>a .sidebar-normal,
.off-canvas-sidebar .sidebar_wrapper [data-toggle="collapse"]~div>ul>li:hover>a .sidebar-mini-icon,
.off-canvas-sidebar .sidebar_wrapper [data-toggle="collapse"]~div>ul>li:hover>a .sidebar-normal {
  color: #ffffff;
}

.sidebar .sidebar_wrapper .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.off-canvas-sidebar .sidebar_wrapper .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon {
  opacity: 0;
}

.sidebar .navbar-minimize,
.off-canvas-sidebar .navbar-minimize {
  position: absolute;
  right: 20px;
  top: 2px;
  opacity: 1;
}

.sidebar .logo-tim,
.off-canvas-sidebar .logo-tim {
  border-radius: 50%;
  border: 1px solid #333;
  display: block;
  height: 61px;
  width: 61px;
  float: left;
  overflow: hidden;
}

.sidebar .logo-tim img,
.off-canvas-sidebar .logo-tim img {
  width: 60px;
  height: 60px;
}

.sidebar .nav,
.off-canvas-sidebar .nav {
  margin-top: 20px;
  display: block;
}

.sidebar .nav .caret,
.off-canvas-sidebar .nav .caret {
  top: 14px;
  position: absolute;
  right: 10px;
}

.sidebar .nav li>a+div .nav,
.off-canvas-sidebar .nav li>a+div .nav {
  margin-top: 5px;
}

.sidebar .nav li>a+div .nav li>a,
.off-canvas-sidebar .nav li>a+div .nav li>a {
  margin-top: 0px;
  padding: 8px 8px;
}

.sidebar .nav li>a,
.off-canvas-sidebar .nav li>a {
  margin: 10px 15px 0;
  border-radius: 30px;
  color: #ffffff;
  display: block;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.62475rem;
  padding: 10px 8px;
  line-height: 1.625rem;
}

.sidebar .nav li:first-child>a,
.off-canvas-sidebar .nav li:first-child>a {
  margin: 0 15px;
}

.sidebar .nav li:hover:not(.active)>a p,
.sidebar .nav li:hover:not(.active)>a i,
.sidebar .nav li:focus:not(.active)>a p,
.sidebar .nav li:focus:not(.active)>a i,
.off-canvas-sidebar .nav li:hover:not(.active)>a p,
.off-canvas-sidebar .nav li:hover:not(.active)>a i,
.off-canvas-sidebar .nav li:focus:not(.active)>a p,
.off-canvas-sidebar .nav li:focus:not(.active)>a i {
  color: #ffffff;
}

.sidebar .nav li:hover:not(.active)>a i,
.sidebar .nav li:focus:not(.active)>a i,
.off-canvas-sidebar .nav li:hover:not(.active)>a i,
.off-canvas-sidebar .nav li:focus:not(.active)>a i {
  color: #ffffff;
}

.sidebar .nav li.active>a:not([data-toggle="collapse"]),
.off-canvas-sidebar .nav li.active>a:not([data-toggle="collapse"]) {
  background: transparent;
}

.sidebar .nav li.active>a:not([data-toggle="collapse"]) i,
.sidebar .nav li.active>a:not([data-toggle="collapse"]) p,
.off-canvas-sidebar .nav li.active>a:not([data-toggle="collapse"]) i,
.off-canvas-sidebar .nav li.active>a:not([data-toggle="collapse"]) p {
  color: white;
}

.sidebar .nav li.active>a:not([data-toggle="collapse"]):before,
.off-canvas-sidebar .nav li.active>a:not([data-toggle="collapse"]):before {
  content: " ";
  position: absolute;
  height: 6px;
  width: 6px;
  top: 22px;
  left: -4px;
  background: #ffffff;
  border-radius: 50%;
}

.sidebar .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"] {
  background: transparent;
  box-shadow: none;
  color: #ffffff;
}

.sidebar .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"] i {
  color: #ffffff;
}

.sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a {
  box-shadow: none;
}

.sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a .sidebar-mini-icon,
.sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a .sidebar-normal,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a .sidebar-mini-icon,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a .sidebar-normal {
  color: #ffffff;
  font-weight: 400;
}

.sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a:before,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"]+div .nav .active a:before {
  content: " ";
  position: absolute;
  height: 6px;
  width: 6px;
  top: 17px;
  left: -4px;
  background: #ffffff;
  border-radius: 50%;
}

.sidebar .nav li.active>a[data-toggle="collapse"]:before,
.off-canvas-sidebar .nav li.active>a[data-toggle="collapse"]:before {
  content: " ";
  position: absolute;
  height: 6px;
  width: 6px;
  top: 22px;
  left: -4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.sidebar .nav p,
.off-canvas-sidebar .nav p {
  margin: 0;
  line-height: 30px;
  position: relative;
  display: block;
  height: auto;
  white-space: nowrap;
}

.sidebar .nav i,
.off-canvas-sidebar .nav i {
  font-size: 20px;
  float: left;
  margin-right: 12px;
  line-height: 30px;
  width: 34px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
}

.sidebar .logo,
.off-canvas-sidebar .logo {
  position: relative;
  padding: 0.5rem 0.7rem;
  z-index: 4;
}

.sidebar .logo a.logo_mini,
.off-canvas-sidebar .logo a.logo_mini {
  opacity: 1;
  float: left;
  width: 34px;
  text-align: center;
  margin-left: 10px;
  margin-right: 12px;
}

.sidebar .logo a.logo_normal,
.off-canvas-sidebar .logo a.logo_normal {
  display: block;
  opacity: 1;
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  -o-transform: translate3d(0px, 0, 0);
  -ms-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
}

.sidebar .logo:after,
.off-canvas-sidebar .logo:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 1px;
  width: calc(100% - 30px);
  background: rgba(255, 255, 255, 0.5);
}

.sidebar .logo p,
.off-canvas-sidebar .logo p {
  float: left;
  font-size: 20px;
  margin: 10px 10px;
  color: #ffffff;
  line-height: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.sidebar .logo .simple_text,
.off-canvas-sidebar .logo .simple_text {
  text-transform: uppercase;
  padding: 0.5rem 0;
  display: block;
  white-space: nowrap;
  color: #ffffff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
}

.sidebar .logo-tim,
.off-canvas-sidebar .logo-tim {
  border-radius: 50%;
  border: 1px solid #333;
  display: block;
  height: 61px;
  width: 61px;
  float: left;
  overflow: hidden;
}

.sidebar .logo-tim img,
.off-canvas-sidebar .logo-tim img {
  width: 60px;
  height: 60px;
}

.sidebar[data="blue"],
.off-canvas-sidebar[data="blue"] {
  background: #3358f4;
  background: -webkit-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);
  background: -o-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);
  background: -moz-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);
  background: linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);
}

.sidebar[data="green"],
.off-canvas-sidebar[data="green"] {
  background: #0098f0;
  background: -webkit-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);
  background: -o-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);
  background: -moz-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);
  background: linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);
}

.sidebar .user,
.off-canvas-sidebar .user {
  padding-bottom: 20px;
  margin: 20px auto 0;
  position: relative;
}

.sidebar .user:after,
.off-canvas-sidebar .user:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 1px;
  width: calc(100% - 30px);
  background: rgba(255, 255, 255, 0.5);
}

.sidebar .user .photo,
.off-canvas-sidebar .user .photo {
  width: 34px;
  height: 34px;
  overflow: hidden;
  float: left;
  z-index: 5;
  margin-right: 10px;
  border-radius: 50%;
  margin-left: 23px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
}

.sidebar .user .photo img,
.off-canvas-sidebar .user .photo img {
  width: 100%;
}

.sidebar .user a,
.off-canvas-sidebar .user a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 15px;
  white-space: nowrap;
}

.sidebar .user .info>a,
.off-canvas-sidebar .user .info>a {
  display: block;
  line-height: 18px;
}

.sidebar .user .info>a>span,
.off-canvas-sidebar .user .info>a>span {
  display: block;
  position: relative;
  opacity: 1;
}

.sidebar .user .info .caret,
.off-canvas-sidebar .user .info .caret {
  position: absolute;
  top: 8px;
  right: 18px;
}

.visible-on-sidebar-regular {
  display: inline-block !important;
}

.visible-on-sidebar-mini {
  display: none !important;
}

.off-canvas-sidebar .nav>li>a,
.off-canvas-sidebar .nav>li>a:hover {
  color: #ffffff;
}

.off-canvas-sidebar .nav>li>a:focus {
  background: rgba(200, 200, 200, 0.2);
}

.main_panel {
  position: relative;
  float: right;
  width: 100%;
  min-height: 100vh;
  border-top: 2px solid #e14eca;
  background: linear-gradient(#1e1e2f, #1e1e24);
  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}

.main_panel[data="blue"] {
  border-top: 2px solid #1d8cf8;
}

.main_panel[data="green"] {
  border-top: 2px solid #00f2c3;
}

.main_panel[data="primary"] {
  border-top: 2px solid #e14eca;
}

.main_panel>.content {
  padding: 78px 30px 30px 280px;
  min-height: calc(100vh - 70px);
}

.main_panel>.navbar {
  margin-bottom: 0;
}

.main_panel .header {
  margin-bottom: 50px;
}

.perfect-scrollbar-on .sidebar,
.perfect-scrollbar-on .main_panel {
  height: 100%;
  max-height: 100%;
}

@media (min-width: 991px) {

  .sidebar,
  .main_panel,
  .sidebar_wrapper {
    -webkit-transition-property: top, bottom, width;
    transition-property: top, bottom, width;
    -webkit-transition-duration: .2s, .2s, .35s;
    transition-duration: .2s, .2s, .35s;
    -webkit-transition-timing-function: linear, linear, ease;
    transition-timing-function: linear, linear, ease;
    -webkit-overflow-scrolling: touch;
  }

  .sidebar-mini .visible-on-sidebar-regular {
    display: none !important;
  }

  .sidebar-mini .visible-on-sidebar-mini {
    display: inline-block !important;
  }

  .sidebar-mini .sidebar {
    width: 80px;
  }

  .sidebar-mini .sidebar .sidebar_wrapper {
    width: 100% !important;
  }

  .sidebar-mini .sidebar {
    display: block;
    z-index: 1030;
    box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.2), 0px 2px 30px 0 rgba(0, 0, 0, 0.35);
  }

  .sidebar-mini .sidebar .logo a.logo_normal {
    opacity: 0;
    -webkit-transform: translate3d(-25px, 0, 0);
    -moz-transform: translate3d(-25px, 0, 0);
    -o-transform: translate3d(-25px, 0, 0);
    -ms-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  .sidebar-mini .sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
  .sidebar-mini .sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
  .sidebar-mini .sidebar .sidebar_wrapper .user .info>a>span,
  .sidebar-mini .sidebar .sidebar_wrapper>.nav li>a p {
    -webkit-transform: translate3d(-25px, 0, 0);
    -moz-transform: translate3d(-25px, 0, 0);
    -o-transform: translate3d(-25px, 0, 0);
    -ms-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
    opacity: 0;
  }

  .sidebar-mini .sidebar .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon {
    opacity: 1;
  }

  .sidebar-mini .sidebar:hover {
    width: 260px;
  }

  .sidebar-mini .sidebar:hover .logo a.logo_normal {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .sidebar-mini .sidebar:hover .navbar-minimize {
    opacity: 1;
  }

  .sidebar-mini .sidebar:hover .sidebar_wrapper {
    width: 260px;
  }

  .sidebar-mini .sidebar:hover .sidebar_wrapper>.nav li>a p,
  .sidebar-mini .sidebar:hover .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
  .sidebar-mini .sidebar:hover .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
  .sidebar-mini .sidebar:hover .sidebar_wrapper .user .info>a>span {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
    opacity: 1;
  }

  .sidebar-mini .sidebar:hover .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon {
    opacity: 0;
  }

  .sidebar-mini .main_panel>.content {
    padding-left: 130px;
  }

  .sidebar-mini footer {
    padding-left: 130px;
  }

  .navbar-minimize button {
    margin-left: 10px;
  }

  .navbar-minimize button i {
    color: #ffffff;
    font-size: 20px;
  }
}

.panel-header {
  height: 260px;
  padding-top: 80px;
  padding-bottom: 45px;
  background: #141E30;
  /* fallback for old browsers */
  background: -webkit-gradient(linear, left top, right top, from(#0c2646), color-stop(60%, #204065), to(#2a5788));
  background: linear-gradient(to right, #0c2646 0%, #204065 60%, #2a5788 100%);
  position: relative;
  overflow: hidden;
}

.panel-header .header .title {
  color: #ffffff;
}

.panel-header .header .category {
  max-width: 600px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;
  font-size: 13px;
}

.panel-header .header .category a {
  color: #ffffff;
}

.panel-header-sm {
  height: 135px;
}

.panel-header-lg {
  height: 380px;
}

@media screen and (max-width: 991px) {
  .sidebar {
    position: fixed;
    display: block;
    top: 0;
    height: 100%;
    width: 260px;
    right: auto;
    left: 0;
    margin: 0;
    border-radius: 0;
    z-index: 1032;
    visibility: visible;
    overflow-y: visible;
    padding: 0;
    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -webkit-transform: translate3d(-260px, 0, 0);
    -moz-transform: translate3d(-260px, 0, 0);
    -o-transform: translate3d(-260px, 0, 0);
    -ms-transform: translate3d(-260px, 0, 0);
    transform: translate3d(-260px, 0, 0);
  }
}

@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {
  .sidebar {
    transition: none;
  }
}

@media screen and (max-width: 991px) {
  .wrapper {
    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
}

@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {
  .wrapper {
    transition: none;
  }
}

@media screen and (max-width: 991px) {
  .main_panel {
    width: 100%;
  }

  .main_panel .content {
    padding-left: 30px;
  }

  .nav-open .main_panel {
    right: 0;
    -webkit-transform: translate3d(260px, 0, 0);
    -moz-transform: translate3d(260px, 0, 0);
    -o-transform: translate3d(260px, 0, 0);
    -ms-transform: translate3d(260px, 0, 0);
    transform: translate3d(260px, 0, 0);
  }

  .nav-open .sidebar {
    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
}

@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {
  .nav-open .sidebar {
    transition: none;
  }
}

@media screen and (max-width: 991px) {
  .nav-open .sidebar:before {
    content: unset;
  }

  .nav-open body {
    position: relative;
    overflow-x: hidden;
  }

  .nav-open .menu-on-right .main_panel {
    -webkit-transform: translate3d(-260px, 0, 0);
    -moz-transform: translate3d(-260px, 0, 0);
    -o-transform: translate3d(-260px, 0, 0);
    -ms-transform: translate3d(-260px, 0, 0);
    transform: translate3d(-260px, 0, 0);
  }

  .nav-open .menu-on-right .navbar-collapse,
  .nav-open .menu-on-right .sidebar {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }

  .nav-open .menu-on-right #bodyClick {
    right: 260px;
    left: auto;
  }

  .menu-on-right .sidebar {
    left: auto;
    right: 0;
    -webkit-transform: translate3d(260px, 0, 0);
    -moz-transform: translate3d(260px, 0, 0);
    -o-transform: translate3d(260px, 0, 0);
    -ms-transform: translate3d(260px, 0, 0);
    transform: translate3d(260px, 0, 0);
  }

  #bodyClick {
    height: 100%;
    width: 100%;
    position: fixed;
    opacity: 1;
    top: 0;
    right: 0;
    left: 260px;
    content: "";
    z-index: 9999;
    overflow-x: hidden;
    background-color: transparent;
    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
}

@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {
  #bodyClick {
    transition: none;
  }
}

@media screen and (max-width: 768px) {
  .main_panel .content {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.color-swatch {
  margin: 1rem 0;
  border-radius: .25rem;
  background-color: #F4F5F7;
  width: 100% !important;
  height: auto !important;
  margin-bottom: 20px;
}

.color-swatch:after {
  content: " ";
  display: table;
  clear: both;
}

.color-swatch-header {
  position: relative;
  height: 0;
  padding-bottom: 50%;
  border-radius: .25rem .25rem 0 0;
  border: 1px solid transparent;
}

.color-swatch-header.is-light {
  border-color: #C1C7D0;
}

.color-swatch-header .pass-fail {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.color-swatch-header .pass-fail-item-wrap {
  position: relative;
  float: left;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.color-swatch-header .pass-fail-item-group {
  display: inline-block;
  padding: 0 5px;
}

.color-swatch-header .pass-fail-item {
  float: left;
  display: inline-block;
  text-align: center;
  padding: 2px;
}

.color-swatch-header .pass-fail-item.white .example {
  color: #fff;
}

.color-swatch-header .pass-fail-item.small .example {
  font-size: 10px;
}

.color-swatch-header .pass-fail-item .lozenge {
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
  background: #000;
  color: #fff;
  padding: 2px 4px;
  line-height: 10px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.color-swatch-body {
  position: relative;
  left: 50%;
  float: left;
  padding: 10px 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.color-swatch-body .prop-item-wrap {
  float: left;
  padding: 0 15px;
  min-width: 65px;
}

.color-swatch-body .prop-item {
  padding: 15px 0;
}

.color-swatch-body .prop-item .label {
  font-size: 11px;
  color: #62748C;
  text-transform: uppercase;
  line-height: 16px;
}

.color-swatch-body .prop-item .value {
  font-size: 14px;
}

.table-colors .swatch {
  display: inline-block;
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.table-colors td:nth-child(1),
.table-colors:first-child td:nth-child(1) {
  line-height: 40px;
}

.table-colors .lozenge {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  display: inline-block;
  float: left;
  margin: 5px 10px 0 0;
  padding: 2px 4px;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: #042a53;
  border-radius: 4px;
  background: #97a0af;
}

.bd-example .row>.col span,
.bd-example .row>[class^=col-] span {
  font-size: 0.75rem;
  display: block;
  margin: 1rem 0;
  padding: .75rem;
  color: #393f49;
  background-color: #ffffff;
  border-radius: 0.2857rem;
}

.bd-docs .navbar .navbar-brand {
  position: relative;
}

/* Animations */
.nav-pills .nav_link,
.navbar,
.nav-tabs .nav_link,
.sidebar .nav a,
.sidebar .nav a i,
.sidebar .nav p,
.navbar-collapse .navbar-nav .nav_link,
.animation-transition-general,
.sidebar .nav p,
.off-canvas-sidebar .nav p,
.sidebar .logo a.logo_mini,
.sidebar .logo a.logo_normal,
.off-canvas-sidebar .logo a.logo_mini,
.off-canvas-sidebar .logo a.logo_normal,
.sidebar .user .photo,
.off-canvas-sidebar .user .photo,
.sidebar .user a,
.off-canvas-sidebar .user a,
.sidebar .user .info>a>span,
.off-canvas-sidebar .user .info>a>span,
.tag,
.tag [data-role="remove"],
.animation-transition-general,
.sidebar .nav p,
.off-canvas-sidebar .nav p,
.sidebar .logo a.logo_mini,
.sidebar .logo a.logo_normal,
.off-canvas-sidebar .logo a.logo_mini,
.off-canvas-sidebar .logo a.logo_normal,
.sidebar .user .photo,
.off-canvas-sidebar .user .photo,
.sidebar .user a,
.off-canvas-sidebar .user a,
.sidebar .user .info>a>span,
.off-canvas-sidebar .user .info>a>span {
  -webkit-transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s;
  transition: all 300ms ease 0s;
}

.bootstrap-switch-label:before,
.caret {
  -webkit-transition: all 150ms ease 0s;
  -moz-transition: all 150ms ease 0s;
  -o-transition: all 150ms ease 0s;
  -ms-transition: all 150ms ease 0s;
  transition: all 150ms ease 0s;
}

.dropdown-toggle[aria-expanded="true"]:after,
a[data-toggle="collapse"][aria-expanded="true"] .caret,
.card-collapse .card a[data-toggle="collapse"][aria-expanded="true"] i,
.card-collapse .card a[data-toggle="collapse"].expanded i {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.caret {
  width: 0;
  height: 0;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  margin-top: -5px;
  position: absolute;
  top: 30px;
  margin-left: 5px;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.card form label+.form-control {
  margin-bottom: 20px;
}

.card .map-title {
  color: #ffffff;
}

.card.card-chart .gmnoprint,
.card.card-chart .gm-style-cc {
  display: none !important;
}

.bd-docs h1,
.bd-docs h2,
.bd-docs h3,
.bd-docs h4,
.bd-docs h5,
.bd-docs h6,
.bd-docs p,
.bd-docs ul li,
.bd-docs ol li {
  color: #2c2c2c;
}

.bd-docs .bd-content>table>thead>tr>th {
  color: #222a42;
}

.bd-docs .blockquote,
.bd-docs .blockquote p,
.bd-docs .card p {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs .bd-example {
  background: linear-gradient(#1e1e2f, #1e1e24);
}

.bd-docs .navbar {
  border-top: none;
}

.bd-docs .navbar .navbar-nav .nav_link {
  color: rgba(255, 255, 255, 0.8) !important;
}

.bd-docs .bd-example .btn {
  margin: 4px 0;
}

.bd-docs .bd-example .btn .badge {
  display: inline-block;
}

.bd-docs .bd-example .tim_icons {
  color: #ffffff;
}

.bd-docs .bd-example .popover .popover-header {
  color: rgba(181, 181, 181, 0.6);
}

.bd-docs .bd-example .popover-body p {
  color: #212529;
}

.bd-docs .bd-example.tooltip-demo p {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs .card.card_body,
.bd-docs .card .card_body {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs label,
.bd-docs .form-check {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs .form-check+.btn {
  margin-top: 20px;
}

.bd-docs .bd-example thead th,
.bd-docs table thead th {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs .bd-example h1,
.bd-docs .bd-example h2,
.bd-docs .bd-example h3,
.bd-docs .bd-example h4,
.bd-docs .bd-example h5,
.bd-docs .bd-example h6,
.bd-docs .bd-example .h1,
.bd-docs .bd-example .h2,
.bd-docs .bd-example .h3,
.bd-docs .bd-example .h4,
.bd-docs .bd-example .h5,
.bd-docs .bd-example .h6,
.bd-docs table h1,
.bd-docs table h2,
.bd-docs table h3,
.bd-docs table h4,
.bd-docs table h5,
.bd-docs table h6,
.bd-docs table .h1,
.bd-docs table .h2,
.bd-docs table .h3,
.bd-docs table .h4,
.bd-docs table .h5,
.bd-docs table .h6 {
  color: rgba(255, 255, 255, 0.8);
}

.bd-docs .bd-example .datepicker thead th,
.bd-docs .bd-example .datepicker table thead th,
.bd-docs .bd-example .datepicker .tim_icons,
.bd-docs table .datepicker thead th,
.bd-docs table .datepicker table thead th,
.bd-docs table .datepicker .tim_icons {
  color: #e14eca;
}

.bd-docs .bd-example .picker-switch .tim_icons,
.bd-docs table .picker-switch .tim_icons {
  color: #e14eca;
}

.bd-docs .footer .container_fluid>nav {
  display: inline-block;
}

.modal.show .modal-dialog {
  -webkit-transform: translate(0, 30%);
  transform: translate(0, 30%);
}

code {
  color: #f3a4b5;
}

@media screen and (max-width: 991px) {
  .profile-photo .profile-photo-small {
    margin-left: -2px;
  }

  .button-dropdown {
    display: none;
  }

  #searchModal .modal-dialog {
    margin: 20px;
  }

  #minimizeSidebar {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .landing-page .section-story-overview .image-container:nth-child(2) {
    margin-left: 0;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 576px) {
  .page-header .container h6.category-absolute {
    width: 90%;
  }

  .form-horizontal .col-form-label,
  .form-horizontal .label-on-right {
    text-align: inherit;
    padding-top: 0;
  }

  .form-horizontal .col-form-label code,
  .form-horizontal .label-on-right code {
    padding: 0 10px;
  }
}

.rtl .sidebar,
.rtl .bootstrap-navbar {
  right: 0;
  left: auto;
  margin-right: 20px;
  margin-left: 0;
}

.rtl .sidebar .nav i,
.rtl .bootstrap-navbar .nav i {
  float: right;
  margin-left: 15px;
  margin-right: 0;
}

.rtl .sidebar .nav p,
.rtl .bootstrap-navbar .nav p {
  margin-right: 45px;
  text-align: right;
}

.rtl .sidebar .nav .caret,
.rtl .bootstrap-navbar .nav .caret {
  left: 11px;
  right: auto;
}

.rtl .sidebar .logo a.logo_mini,
.rtl .bootstrap-navbar .logo a.logo_mini {
  float: right;
  margin-right: 20px;
  margin-left: 10px;
}

.rtl .sidebar .logo .simple_text,
.rtl .bootstrap-navbar .logo .simple_text {
  text-align: right;
}

.rtl .sidebar .sidebar_wrapper .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.rtl .sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.rtl .bootstrap-navbar .sidebar_wrapper .nav [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon,
.rtl .bootstrap-navbar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-mini-icon {
  float: right;
  margin-left: 15px;
  margin-right: 0;
}

.rtl .sidebar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.rtl .sidebar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.rtl .bootstrap-navbar .sidebar_wrapper>.nav [data-toggle="collapse"]~div>ul>li>a .sidebar-normal,
.rtl .bootstrap-navbar .sidebar_wrapper .user .info [data-toggle="collapse"]~div>ul>li>a .sidebar-normal {
  text-align: right;
}

.rtl .sidebar:before,
.rtl .bootstrap-navbar:before {
  right: 30px;
  left: auto;
}

.rtl .main_panel .content {
  padding: 80px 280px 30px 30px;
}

.rtl .footer {
  padding: 24px 300px 24px 0;
}

.rtl .dropdown-toggle:after {
  margin-right: .255em;
  margin-left: 0;
}

.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar {
  right: -220px !important;
  left: auto;
}

.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar:before {
  right: auto;
  left: 35px;
}

.rtl .notification {
  left: 40px;
  right: auto;
}

.rtl .dropdown-menu {
  right: auto;
  left: 0;
}

.rtl .minimize-sidebar {
  float: right;
}

.rtl .alert {
  left: 0;
  margin-left: 0;
  margin-right: 0;
}

.rtl .alert button.close {
  left: 10px !important;
  right: auto !important;
}

.rtl .alert span[data-notify="icon"] {
  right: 15px;
  left: auto;
}

.rtl .alert.alert-with-icon {
  padding-right: 65px;
  padding-left: 15px;
}

.rtl .alert.alert-with-icon i[data-notify="icon"] {
  right: 15px;
  left: auto;
}

.rtl .search-bar {
  margin-left: 0;
}

.rtl .modal-search .modal-header .close {
  margin-right: auto;
  left: 10px;
}

@media (min-width: 991px) {
  .rtl.sidebar-mini .main_panel .content {
    padding-right: 130px;
    padding-left: 50px;
  }

  .rtl.sidebar-mini footer {
    padding-right: 130px;
    padding-left: 50px;
  }

  .rtl .navbar-minimize button {
    margin-right: -5px;
  }
}

@media screen and (max-width: 991px) {
  .rtl .sidebar {
    margin-right: 0;
  }

  .rtl .main_panel .content {
    padding-right: 50px;
  }

  .rtl #bodyClick {
    right: 260px;
    left: auto;
  }

  .rtl .footer {
    padding-right: 15px;
  }
}

.rtl .navbar .navbar-nav {
  padding-right: 0;
}

.rtl .navbar .navbar-nav a.nav_link {
  text-align: right;
}

.rtl .navbar .navbar-nav a.nav_link p {
  margin-right: 7px;
}

.rtl .navbar .navbar-nav .btn {
  margin-right: 0;
  padding: 0;
}

.rtl .navbar .navbar-nav .btn i {
  margin-left: 4px;
  margin-right: 5px;
}

.rtl .navbar .navbar-nav .search-bar span {
  margin-right: 10px;
}

.rtl .ps__rail-y {
  right: auto !important;
  left: 0;
}

.rtl .main_panel {
  position: fixed;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media screen and (max-width: 768px) {
  .rtl .main_panel .content {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.form-group.has-danger .error,
.input-group.has-danger .error {
  color: #ec250d;
}

.form-group.has-success .error,
.input-group.has-success .error {
  color: #00f2c3;
}

.form-group.no-border.form-control-lg .input-group-append .input-group-text,
.input-group.no-border.form-control-lg .input-group-append .input-group-text {
  padding: 15px 0 15px 19px;
}

.form-group.no-border.form-control-lg .form-control,
.input-group.no-border.form-control-lg .form-control {
  padding: 15px 19px;
}

.form-group.no-border.form-control-lg .form-control+.input-group-prepend .input-group-text,
.form-group.no-border.form-control-lg .form-control+.input-group-append .input-group-text,
.input-group.no-border.form-control-lg .form-control+.input-group-prepend .input-group-text,
.input-group.no-border.form-control-lg .form-control+.input-group-append .input-group-text {
  padding: 15px 19px 15px 0;
}

.form-group.form-control-lg .form-control,
.input-group.form-control-lg .form-control {
  padding: 14px 18px;
  height: 100%;
}

.form-group.form-control-lg .form-control+.input-group-prepend .input-group-text,
.form-group.form-control-lg .form-control+.input-group-append .input-group-text,
.input-group.form-control-lg .form-control+.input-group-prepend .input-group-text,
.input-group.form-control-lg .form-control+.input-group-append .input-group-text {
  padding: 14px 18px 14px 0;
}

.form-group.form-control-lg .input-group-prepend .input-group-text,
.form-group.form-control-lg .input-group-append .input-group-text,
.input-group.form-control-lg .input-group-prepend .input-group-text,
.input-group.form-control-lg .input-group-append .input-group-text {
  padding: 14px 0 15px 18px;
}

.form-group.form-control-lg .input-group-prepend .input-group-text+.form-control,
.form-group.form-control-lg .input-group-append .input-group-text+.form-control,
.input-group.form-control-lg .input-group-prepend .input-group-text+.form-control,
.input-group.form-control-lg .input-group-append .input-group-text+.form-control {
  padding: 15px 18px 15px 16px;
}

.form-group.no-border .form-control,
.input-group.no-border .form-control {
  padding: 11px 19px;
}

.form-group.no-border .form-control+.input-group-prepend .input-group-text,
.form-group.no-border .form-control+.input-group-append .input-group-text,
.input-group.no-border .form-control+.input-group-prepend .input-group-text,
.input-group.no-border .form-control+.input-group-append .input-group-text {
  padding: 11px 19px 11px 0;
}

.form-group.no-border .input-group-prepend .input-group-text,
.form-group.no-border .input-group-append .input-group-text,
.input-group.no-border .input-group-prepend .input-group-text,
.input-group.no-border .input-group-append .input-group-text {
  padding: 11px 0 11px 19px;
}

.form-group .form-control,
.input-group .form-control {
  padding: 10px 18px 10px 18px;
}

.form-group .form-control+.input-group-prepend .input-group-text,
.form-group .form-control+.input-group-append .input-group-text,
.input-group .form-control+.input-group-prepend .input-group-text,
.input-group .form-control+.input-group-append .input-group-text {
  padding: 10px 18px 10px 0;
}

.form-group .input-group-prepend .input-group-text,
.form-group .input-group-append .input-group-text,
.input-group .input-group-prepend .input-group-text,
.input-group .input-group-append .input-group-text {
  padding: 10px 0 10px 18px;
}

.form-group .input-group-prepend .input-group-text+.form-control,
.form-group .input-group-prepend .input-group-text~.form-control,
.form-group .input-group-append .input-group-text+.form-control,
.form-group .input-group-append .input-group-text~.form-control,
.input-group .input-group-prepend .input-group-text+.form-control,
.input-group .input-group-prepend .input-group-text~.form-control,
.input-group .input-group-append .input-group-text+.form-control,
.input-group .input-group-append .input-group-text~.form-control {
  padding: 10px 19px 11px 16px;
}

.form-group.no-border .form-control,
.form-group.no-border .form-control+.input-group-prepend .input-group-text,
.form-group.no-border .form-control+.input-group-append .input-group-text,
.input-group.no-border .form-control,
.input-group.no-border .form-control+.input-group-prepend .input-group-text,
.input-group.no-border .form-control+.input-group-append .input-group-text {
  background-color: #242c45;
  border: medium none;
}

.form-group.no-border .form-control:focus,
.form-group.no-border .form-control:active,
.form-group.no-border .form-control:active,
.form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.form-group.no-border .form-control+.input-group-append .input-group-text:active,
.form-group.no-border .form-control+.input-group-append .input-group-text:active,
.input-group.no-border .form-control:focus,
.input-group.no-border .form-control:active,
.input-group.no-border .form-control:active,
.input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.input-group.no-border .form-control+.input-group-append .input-group-text:active,
.input-group.no-border .form-control+.input-group-append .input-group-text:active {
  border: medium none;
  background-color: #252e49;
}

.form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: #252e49;
}

.form-group.no-border .input-group-prepend .input-group-text,
.form-group.no-border .input-group-append .input-group-text,
.input-group.no-border .input-group-prepend .input-group-text,
.input-group.no-border .input-group-append .input-group-text {
  background-color: #242c45;
  border: none;
}

.has-error .form-control-feedback,
.has-error .control-label {
  color: #ec250d;
}

.has-success .form-control-feedback,
.has-success .control-label {
  color: #00f2c3;
}

.input-group-append .input-group-text,
.input-group-prepend .input-group-text {
  background-color: transparent;
  border: 1px solid #2b3553;
  border-radius: 0.4285rem;
  color: #ffffff;
  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.input-group-append .input-group-text i,
.input-group-prepend .input-group-text i {
  opacity: .5;
}

.has-danger.input-group-focus .input-group-append .input-group-text,
.has-danger.input-group-focus .input-group-prepend .input-group-text {
  background-color: transparent;
}

.has-success .input-group-append .input-group-text,
.has-success .input-group-prepend .input-group-text {
  background-color: transparent;
}

.has-danger .form-control:focus+.input-group-append .input-group-text,
.has-danger .form-control:focus+.input-group-prepend .input-group-text {
  color: #ec250d;
}

.has-success .form-control:focus+.input-group-append .input-group-text,
.has-success .form-control:focus+.input-group-prepend .input-group-text {
  color: #00f2c3;
}

.input-group-append .input-group-text+.form-control,
.input-group-append .input-group-text~.form-control,
.input-group-prepend .input-group-text+.form-control,
.input-group-prepend .input-group-text~.form-control {
  padding: -0.5rem 0.7rem;
  padding-left: 18px;
}

.input-group-append .input-group-text i,
.input-group-prepend .input-group-text i {
  width: 17px;
}

.input-group-append,
.input-group-prepend .input-group-text,
.input-group-prepend .input-group-text {
  background-color: transparent;
  border: 1px solid #2b3553;
  border-radius: 0.4285rem;
  color: #ffffff;
  margin: 0;
}

.input-group-append .input-group-text {
  border-left: none;
}

.input-group-prepend .input-group-text {
  border-right: none;
}

.input-group-focus .input-group-prepend .input-group-text,
.input-group-focus .input-group-append .input-group-text {
  background-color: #ffffff;
  border-color: #e14eca;
  background-color: transparent;
  border-color: #e14eca;
}

.input-group-focus.no-border .input-group-prepend .input-group-text,
.input-group-focus.no-border .input-group-append .input-group-text {
  background-color: #252e49;
}

.input-group,
.form-group {
  margin-bottom: 10px;
  position: relative;
}

.input-group .form-control-static,
.form-group .form-control-static {
  margin-top: 9px;
}

.input-group[disabled] .input-group-prepend .input-group-text,
.input-group[disabled] .input-group-append .input-group-text {
  background-color: #E3E3E3;
}

.input-group .form-control:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child) {
  border-radius: 0.4285rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0 none;
}

.input-group .form-control:first-child,
.input-group-btn:first-child>.dropdown-toggle,
.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {
  border-right: 0 none;
}

.input-group .form-control:last-child,
.input-group-btn:last-child>.dropdown-toggle,
.input-group-btn:first-child>.btn:not(:first-child) {
  border-left: 0 none;
}

.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #1d253b;
  color: #344675;
  cursor: not-allowed;
}

.input-group-btn .btn {
  border-width: 1px;
  padding: 11px 0.7rem;
}

.input-group-btn .btn-default:not(.btn-fill) {
  border-color: #DDDDDD;
}

.input-group-btn:last-child>.btn {
  margin-left: 0;
}

textarea.form-control {
  max-width: 100%;
  max-height: 80px;
  padding: 10px 10px 0 0;
  resize: none;
  border: none;
  border-bottom: 1px solid #2b3553;
  border-radius: 0;
  line-height: 2;
}

textarea.form-control:focus,
textarea.form-control:active {
  border-left: none;
  border-top: none;
  border-right: none;
}

.has-success.form-group .form-control,
.has-success.form-group.no-border .form-control,
.has-danger.form-group .form-control,
.has-danger.form-group.no-border .form-control {
  padding-right: 40px;
}

.form.form-newsletter .form-group {
  float: left;
  width: 78%;
  margin-right: 2%;
  margin-top: 9px;
}

.input-group .input-group-btn {
  padding: 0 12px;
}

.form-group input[type=file] {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.form-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.form-control-lg {
  padding: 0;
  font-size: inherit;
  line-height: 0;
  border-radius: 0;
}

.form-control-lg .form-control {
  height: calc(2.875rem + 2px);
}

.form-horizontal .col-form-label,
.form-horizontal .label-on-right {
  padding: 10px 5px 0 15px;
  text-align: right;
  max-width: 180px;
}

.form-horizontal .checkbox-radios {
  margin-bottom: 15px;
}

.form-horizontal .checkbox-radios .form-check:first-child {
  margin-top: 8px;
}

.form-horizontal .label-on-right {
  text-align: left;
  padding: 10px 15px 0 5px;
}

.form-horizontal .form-check-inline {
  margin-top: 6px;
}

.form-horizontal .form-check-inline .form-check-label {
  margin-right: 1.5rem;
}

.search-bar {
  margin-left: 30px;
}

.search-bar .btn {
  margin: 0;
}

.search-bar.input-group {
  border-radius: 25px;
  z-index: 4;
  margin-bottom: 0;
  height: 43px;
  padding-right: 5px;
}

.search-bar.input-group .input-group-addon {
  padding: 10px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
}

.search-bar.input-group i {
  font-size: 20px;
  color: #ffffff;
  margin-top: 0 !important;
}

.search-bar.input-group input {
  background: transparent;
  border: none !important;
  border-radius: 0;
  padding: 12px !important;
  font-size: 12px;
  opacity: 0.5;
}

.search-bar.input-group input:focus {
  background: transparent;
}

.search-bar.input-group .form-control {
  opacity: 1;
  color: #ffffff;
}

.search-bar.input-group .form-control::placeholder {
  color: white;
}

.modal-search .modal-dialog {
  max-width: 1000px;
  margin: 20px auto;
}

.modal-search .modal-dialog .form-control {
  border: none;
  color: #222a42;
}

.modal-search .modal-dialog .form-control::placeholder {
  color: #222a42;
}

.input-group-prepend {
  margin-right: 0;
}

.input-group-prepend .tim_icons,
.input-group-append .tim_icons {
  font-size: 1rem;
}

/*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x>.ps__rail-x,
.ps--active-y>.ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover>.ps__rail-x,
.ps:hover>.ps__rail-y,
.ps--focus>.ps__rail-x,
.ps--focus>.ps__rail-y,
.ps--scrolling-x>.ps__rail-x,
.ps--scrolling-y>.ps__rail-y {
  opacity: 0.6;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #eee;
  opacity: 0.9;
}

/*
 * Scrollbar thumb styles
 */
.ps__thumb-x {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, height .2s ease-in-out;
  -webkit-transition: background-color .2s linear, height .2s ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__thumb-y {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-x:hover>.ps__thumb-x,
.ps__rail-x:focus>.ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #999;
  height: 11px;
}

.ps__rail-y:hover>.ps__thumb-y,
.ps__rail-y:focus>.ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #999;
  width: 11px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2015 Daniel Eden
*/
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

.animated.flipOutX,
.animated.flipOutY {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes shake {

  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {

  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

.white-content {
  background: #f5f6fa;
}

.white-content .navbar.navbar-transparent .navbar-brand {
  color: #1d253b;
}

.white-content .navbar.navbar-transparent .navbar-toggler-bar {
  background: #1d253b;
}

.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) {
  color: #1d253b;
}

.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) i {
  color: #1d253b;
}

.white-content .navbar.navbar-transparent .navbar-minimize button i {
  color: #1d253b;
}

.white-content .navbar.navbar-transparent .search-bar.input-group i {
  color: #1d253b;
}

.white-content .navbar.navbar-transparent .search-bar.input-group .form-control {
  color: #344675;
}

.white-content .navbar.navbar-transparent .search-bar.input-group .form-control::placeholder {
  color: #9A9A9A;
}

.white-content .sidebar {
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}

.white-content .sidebar p {
  color: rgba(255, 255, 255, 0.8);
}

.white-content .main_panel {
  background: #f5f6fa;
}

.white-content h1,
.white-content h2,
.white-content h3,
.white-content h4,
.white-content h5,
.white-content h6,
.white-content p,
.white-content ol li,
.white-content ul li,
.white-content pre {
  color: #1d253b;
}

.white-content .font-icon-detail i {
  color: #222a42;
}

.white-content .btn:not([data-action]):hover {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.white-content .btn-neutral.btn-link {
  color: rgba(34, 42, 66, 0.7);
}

.white-content .form-control::-moz-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.white-content .form-control:-moz-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.white-content .form-control::-webkit-input-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.white-content .form-control:-ms-input-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.white-content .has-danger .form-control,
.white-content .has-danger .input-group-prepend .input-group-text {
  border-color: #ec250d;
}

.white-content .input-group-prepend .input-group-text {
  border-color: rgba(29, 37, 59, 0.5);
  color: #1d253b;
}

.white-content .form-control {
  color: #222a42;
  border-color: rgba(29, 37, 59, 0.5);
}

.white-content .form-control:focus {
  border-color: #e14eca;
}

.white-content .form-group.no-border .form-control,
.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.white-content .form-group.no-border .form-control+.input-group-append .input-group-text,
.white-content .form-group.no-border .input-group-prepend .input-group-text,
.white-content .form-group.no-border .input-group-append .input-group-text,
.white-content .input-group.no-border .form-control,
.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.white-content .input-group.no-border .form-control+.input-group-append .input-group-text,
.white-content .input-group.no-border .input-group-prepend .input-group-text,
.white-content .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(222, 222, 222, 0.3);
}

.white-content .form-group.no-border .form-control:focus,
.white-content .form-group.no-border .form-control:active,
.white-content .form-group.no-border .form-control:active,
.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.white-content .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.white-content .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.white-content .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.white-content .form-group.no-border .input-group-prepend .input-group-text:focus,
.white-content .form-group.no-border .input-group-prepend .input-group-text:active,
.white-content .form-group.no-border .input-group-prepend .input-group-text:active,
.white-content .form-group.no-border .input-group-append .input-group-text:focus,
.white-content .form-group.no-border .input-group-append .input-group-text:active,
.white-content .form-group.no-border .input-group-append .input-group-text:active,
.white-content .input-group.no-border .form-control:focus,
.white-content .input-group.no-border .form-control:active,
.white-content .input-group.no-border .form-control:active,
.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.white-content .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.white-content .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.white-content .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.white-content .input-group.no-border .input-group-prepend .input-group-text:focus,
.white-content .input-group.no-border .input-group-prepend .input-group-text:active,
.white-content .input-group.no-border .input-group-prepend .input-group-text:active,
.white-content .input-group.no-border .input-group-append .input-group-text:focus,
.white-content .input-group.no-border .input-group-append .input-group-text:active,
.white-content .input-group.no-border .input-group-append .input-group-text:active {
  background-color: rgba(222, 222, 222, 0.5);
}

.white-content .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.white-content .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.white-content .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.white-content .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: transparent;
}

.white-content .input-group[disabled] .input-group-prepend .input-group-text,
.white-content .input-group[disabled] .input-group-append .input-group-text {
  background-color: #222a42;
}

.white-content .form-control[disabled],
.white-content .form-control[readonly],
.white-content fieldset[disabled] .form-control {
  background: #E3E3E3;
  border-color: rgba(29, 37, 59, 0.3);
}

.white-content .input-group-focus .input-group-prepend .input-group-text,
.white-content .input-group-focus .input-group-append .input-group-text,
.white-content .input-group-focus .form-control {
  border-color: #e14eca;
}

.white-content .input-group-focus.no-border .input-group-prepend .input-group-text,
.white-content .input-group-focus.no-border .input-group-append .input-group-text {
  background-color: rgba(222, 222, 222, 0.5);
}

.white-content .input-group-prepend .input-group-text {
  border-right: none;
}

.white-content .input-group-append .input-group-text {
  border-left: none;
}

.white-content .has-danger .form-control:focus,
.white-content .has-success.input-group-focus .input-group-append .input-group-text,
.white-content .has-success.input-group-focus .input-group-prepend .input-group-text {
  border-color: #ec250d;
}

.white-content .has-success .form-control:focus,
.white-content .has-success.input-group-focus .input-group-append .input-group-text,
.white-content .has-success.input-group-focus .input-group-prepend .input-group-text {
  border-color: #00bf9a;
}

.white-content .btn.btn-link:hover,
.white-content .btn.btn-link:active,
.white-content .btn.btn-link:focus {
  color: #9A9A9A !important;
}

.white-content .btn-group .btn.active {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.white-content .card:not(.card-white) {
  background: #ffffff;

}

.white-content .card:not(.card-white) .card_header {
  color: #222a42;
}

.white-content .card:not(.card-white) .card_header a[data-toggle="collapse"] {
  color: #222a42;
}

.white-content .card:not(.card-white) .card_header .card-title,
.white-content .card:not(.card-white) .card_body .card-title {
  color: #1d253b;
}

.white-content .card:not(.card-white) .card_body .card-category,
.white-content .card:not(.card-white) .card_body .card-description {
  color: #1d253b;
}

.white-content .card:not(.card-white) label:not(.btn) {
  color: #344675;
}

.white-content .card:not(.card-white).nav-pills .nav_item .nav_link {
  color: #444444;
  background-color: rgba(222, 222, 222, 0.3);
}

.white-content .card:not(.card-white).nav-pills .nav_item .nav_link:not(.active):hover {
  background: rgba(222, 222, 222, 0.5);
}

.white-content .card:not(.card-white).nav-pills .nav_item .nav_link.active {
  color: #ffffff;
}

.white-content .card:not(.card-white) .tab-content .tab-pane {
  color: #444444;
}

.white-content .card:not(.card-white) .card {
  box-shadow: none;
}

.white-content .card:not(.card-white).card-plain {
  background: transparent;
  box-shadow: none;
}

.white-content .card:not(.card-white).card-tasks .card_body i {
  color: rgba(34, 42, 66, 0.7);
}

.white-content .card:not(.card-white).card-tasks .card_body i:hover {
  color: #222a42;
}

.white-content .table>tbody>tr>td {
  color: rgba(34, 42, 66, 0.7) !important;
}

.white-content .table>thead>tr>th,
.white-content .table>tbody>tr>th,
.white-content .table>tfoot>tr>th,
.white-content .table>thead>tr>td,
.white-content .table>tbody>tr>td,
.white-content .table>tfoot>tr>td {
  border-color: rgba(34, 42, 66, 0.2);
  padding: 12px 7px;
  vertical-align: middle;
}

.white-content .table>thead>tr>th,
.white-content .table button.btn-neutral.btn-link {
  color: rgba(34, 42, 66, 0.7);
}

.white-content .footer ul li a {
  color: #1d253b;
}

.white-content .footer .copyright {
  color: #1d253b;
}

.white-content .progress-container .progress,
.white-content .progress-container.progress.sm .progress {
  background: rgba(34, 42, 66, 0.1);
  box-shadow: 0 0 0 3px rgba(34, 42, 66, 0.1);
}

.white-content .progress-container .progress .progress-value,
.white-content .progress-container.progress.sm .progress .progress-value {
  color: #344675;
}

.white-content .progress-container .progress-badge,
.white-content .progress-container.progress.sm .progress-badge {
  color: #1d253b;
}

.white-content .full-page {
  background: #f5f6fa;
}

.white-content .full-page h1,
.white-content .full-page h2,
.white-content .full-page h3,
.white-content .full-page h4,
.white-content .full-page h5,
.white-content .full-page h6,
.white-content .full-page p,
.white-content .full-page ol li,
.white-content .full-page ul li,
.white-content .full-page pre {
  color: #1d253b;
}

.white-content .full-page .description {
  color: #9A9A9A;
}

.white-content .full-page .footer ul li a {
  color: #1d253b;
}

.white-content .full-page .footer .copyright {
  color: #1d253b;
}

.white-content .nav-pills .nav_item .nav_link:not(.active) {
  background: #d3d7e9;
  color: #1d253b;
}

.white-content .nav-pills .nav_item .nav_link:not(.active):hover {
  background: #cccccc;
}

.card {
  background: #27293d;
  border: 0;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);
}

.card label {
  color: rgba(255, 255, 255, 0.6);
}

.card .card-title {
  margin-bottom: .75rem;
}

.card .card_body {
  padding: 15px;
}

.card .card_body.table-full-width {
  padding-left: 0;
  padding-right: 0;
}

.card .card_body .card-title {
  color: #ffffff;
  text-transform: inherit;
  font-weight: 300;
  margin-bottom: .75rem;
}

.card .card_body .card-description,
.card .card_body .card-category {
  color: rgba(255, 255, 255, 0.6);
}

.card .card_header {
  padding: 15px 15px 0;
  border: 0;
  color: rgba(255, 255, 255, 0.8);
}

.card .card_header:not([data-background-color]) {
  background-color: transparent;
}

.card .card_header .card-title {
  color: #ffffff;
  font-weight: 100;
}

.card .card_header .card-category {
  color: #9A9A9A;
  margin-bottom: 5px;
  font-weight: 300;
}

.card .map {
  border-radius: 0.2857rem;
}

.card .map.map-big {
  height: 420px;
}

.card.card-white {
  background: #ffffff;
}

.card.card-white .card-title {
  color: #222a42;
}

.card.card-white .card-category,
.card.card-white .stats {
  color: #808080;
}

.card.card-white .form-control::-moz-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.card.card-white .form-control:-moz-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.card.card-white .form-control::-webkit-input-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.card.card-white .form-control:-ms-input-placeholder {
  color: rgba(34, 42, 66, 0.4);
  opacity: 1;
  filter: alpha(opacity=100);
}

.card.card-white .has-danger .form-control,
.card.card-white .has-danger .input-group-prepend .input-group-text {
  border-color: #ec250d;
}

.card.card-white .input-group-prepend .input-group-text {
  border-color: rgba(29, 37, 59, 0.2);
  color: #1d253b;
}

.card.card-white .form-control {
  color: #222a42;
  border-color: rgba(29, 37, 59, 0.2);
}

.card.card-white .form-control:focus {
  border-color: #e14eca;
}

.card.card-white label:not(.btn) {
  color: #344675;
}

.card.card-white .form-group.no-border .form-control,
.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text,
.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text,
.card.card-white .form-group.no-border .input-group-prepend .input-group-text,
.card.card-white .form-group.no-border .input-group-append .input-group-text,
.card.card-white .input-group.no-border .form-control,
.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text,
.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text,
.card.card-white .input-group.no-border .input-group-prepend .input-group-text,
.card.card-white .input-group.no-border .input-group-append .input-group-text {
  background-color: rgba(222, 222, 222, 0.3);
}

.card.card-white .form-group.no-border .form-control:focus,
.card.card-white .form-group.no-border .form-control:active,
.card.card-white .form-group.no-border .form-control:active,
.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text:focus,
.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text:active,
.card.card-white .form-group.no-border .input-group-prepend .input-group-text:focus,
.card.card-white .form-group.no-border .input-group-prepend .input-group-text:active,
.card.card-white .form-group.no-border .input-group-prepend .input-group-text:active,
.card.card-white .form-group.no-border .input-group-append .input-group-text:focus,
.card.card-white .form-group.no-border .input-group-append .input-group-text:active,
.card.card-white .form-group.no-border .input-group-append .input-group-text:active,
.card.card-white .input-group.no-border .form-control:focus,
.card.card-white .input-group.no-border .form-control:active,
.card.card-white .input-group.no-border .form-control:active,
.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,
.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,
.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text:focus,
.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text:active,
.card.card-white .input-group.no-border .input-group-prepend .input-group-text:focus,
.card.card-white .input-group.no-border .input-group-prepend .input-group-text:active,
.card.card-white .input-group.no-border .input-group-prepend .input-group-text:active,
.card.card-white .input-group.no-border .input-group-append .input-group-text:focus,
.card.card-white .input-group.no-border .input-group-append .input-group-text:active,
.card.card-white .input-group.no-border .input-group-append .input-group-text:active {
  background-color: rgba(222, 222, 222, 0.5);
}

.card.card-white .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.card.card-white .form-group.no-border .form-control:focus+.input-group-append .input-group-text,
.card.card-white .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text,
.card.card-white .input-group.no-border .form-control:focus+.input-group-append .input-group-text {
  background-color: transparent;
}

.card.card-white .input-group[disabled] .input-group-prepend .input-group-text,
.card.card-white .input-group[disabled] .input-group-append .input-group-text {
  background-color: #222a42;
}

.card.card-white .form-control[disabled],
.card.card-white .form-control[readonly],
.card.card-white fieldset[disabled] .form-control {
  background: #E3E3E3;
  border-color: rgba(29, 37, 59, 0.3);
}

.card.card-white .input-group-focus .input-group-prepend .input-group-text,
.card.card-white .input-group-focus .input-group-append .input-group-text,
.card.card-white .input-group-focus .form-control {
  background-color: #ffffff;
  border-color: #e14eca;
}

.card.card-white .input-group-focus.no-border .input-group-prepend .input-group-text,
.card.card-white .input-group-focus.no-border .input-group-append .input-group-text {
  background-color: rgba(222, 222, 222, 0.5);
}

.card.card-white .input-group-prepend .input-group-text {
  border-right: none;
}

.card.card-white .input-group-append .input-group-text {
  border-left: none;
}

.card.card-white .has-danger .form-control:focus,
.card.card-white .has-success.input-group-focus .input-group-append .input-group-text,
.card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {
  border-color: #ec250d;
}

.card.card-white .has-success .form-control:focus,
.card.card-white .has-success.input-group-focus .input-group-append .input-group-text,
.card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {
  border-color: #00bf9a;
}

.card.card-plain {
  background: transparent;
  box-shadow: none;
}

.card .image {
  overflow: hidden;
  height: 200px;
  position: relative;
}

.card .avatar {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 15px;
}

.card label {
  font-size: 0.75rem;
  margin-bottom: 5px;
}

.card .card-footer {
  background-color: transparent;
  border: 0;
  padding: 15px;
}

.card .card-footer .stats i {
  margin-right: 5px;
  position: relative;
}

.card .card-footer h6 {
  margin-bottom: 0;
  padding: 7px 0;
}

.card_body {
  padding: 1.25rem;
}

@media (max-width: 767.98px) {
  .card.card-chart .card_header .btn-group-toggle .tim_icons {
    font-size: .875rem;
    top: -1px;
  }
}

.card-chart {
  overflow: hidden;
}

.card-chart .card_header .card-title i {
  font-size: 16px;
  margin-right: 5px;
  margin-bottom: 3px;
}

.card-chart .card_header .card-category {
  margin-bottom: 5px;
}

.card-chart .card_body {
  padding-left: 5px;
  padding-right: 5px;
}

.card-chart .card_body .tab-space {
  padding: 0;
}

.card-chart .table {
  margin-bottom: 0;
}

.card-chart .table td {
  border-top: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.card-chart .card-progress {
  margin-top: 30px;
  padding: 0 10px;
}

.card-chart .chart-area {
  height: 220px;
  width: 100%;
}

.card-chart .card-footer {
  margin-top: 15px;
}

.card-chart .card-footer .stats {
  color: #9A9A9A;
}

.card-chart .dropdown {
  position: absolute;
  right: 20px;
  top: 20px;
}

.card-chart .dropdown .btn {
  margin: 0;
}

.card-chart.card-chart-pie .chart-area {
  padding: 10px 0 25px;
  height: auto;
}

.card-chart.card-chart-pie .card-title {
  margin-bottom: 10px;
}

.card-chart.card-chart-pie .card-title i {
  font-size: 1rem;
}

.map {
  height: 500px;
}

.card-user {
  overflow: hidden;
}

.card-user .image {
  height: 120px;
}

.card-user .author {
  text-align: center;
  text-transform: none;
  margin-top: 25px;
}

.card-user .author a+p.description {
  margin-top: -7px;
}

.card-user .author .block {
  position: absolute;
  height: 100px;
  width: 250px;
}

.card-user .author .block.block-one {
  background: rgba(225, 78, 202, 0.6);
  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
  -webkit-transform: rotate(150deg);
  -moz-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  -o-transform: rotate(150deg);
  transform: rotate(150deg);
  margin-top: -90px;
  margin-left: -50px;
}

.card-user .author .block.block-two {
  background: rgba(225, 78, 202, 0.6);
  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
  margin-top: -40px;
  margin-left: -100px;
}

.card-user .author .block.block-three {
  background: rgba(225, 78, 202, 0.6);
  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -ms-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
  margin-top: -70px;
  right: -45px;
}

.card-user .author .block.block-four {
  background: rgba(225, 78, 202, 0.6);
  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
  -webkit-transform: rotate(150deg);
  -moz-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  -o-transform: rotate(150deg);
  transform: rotate(150deg);
  margin-top: -25px;
  right: -45px;
}

.card-user .avatar {
  width: 124px;
  height: 124px;
  border: 5px solid #2b3553;
  border-bottom-color: transparent;
  background-color: transparent;
  position: relative;
}

.card-user .card_body {
  min-height: 240px;
}

.card-user hr {
  margin: 5px 15px;
}

.card-user .button-container {
  margin-bottom: 6px;
  text-align: center;
}

.card-user .card-description {
  margin-top: 30px;
}

.card-tasks {
  height: 473px;
}

.card-tasks .table-full-width {
  max-height: 410px;
  position: relative;
}

.card-tasks .card_header .title {
  margin-right: 20px;
  font-weight: 400;
}

.card-tasks .card_header .dropdown {
  float: right;
  color: #cccccc;
}

.card-tasks .card_body i {
  color: #9A9A9A;
  font-size: 1.4em;
}

.card-tasks .card_body i:hover {
  color: #ffffff;
}

.card-plain {
  background: transparent;
  box-shadow: none;
}

.card-plain .card_header,
.card-plain .card-footer {
  margin-left: 0;
  margin-right: 0;
  background-color: transparent;
}

.card-plain:not(.card-subcategories).card_body {
  padding-left: 0;
  padding-right: 0;
}


</div>
}