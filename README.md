##React Flickr API Test

Small test app to display photos from Flickr API using ReactJS and Webpack2


###Tech stack

- `React.js` *'Modern' Framework*
- `axios` *For the API call*
- `ES6` *Latest Javascript standard*
- `SASS` *CSS pre-compiler*
- `Babel` *Javascript compiler*
- `Webpack 2.0` *Bundler*
- `npm` *Build tool*
- `git` *VCS*


###Installation

	npm install

###Build
	
	npm run build

###CSS Structure

####style.css
In the global css file, you can find all of the CSS that is shared across the application. Due to time constraints I couldn't modularise the CSS. Please see my views on modularization in the "Componetization" section.

- BEM Naming convention - <http://getbem.com/naming/>
- CSS Reset
- Global layout styles
- Component styles


##TODO:

As this is a FE test (and I only had a few hours to learn and setup Webpack 2.0 and React) additional tooling will be required to speed up development and increase the quality of output:

###Template engine

- `EJS` or
- `Handlebars`

In order to enable modularity, a template engine is necessary in any modern web application. I personally like the simplicity of `Handlebars` for low-complex apps, however for more complex applications `EJS` might be better suited.

###Code quality tools

- `ES Lint` and
- `SASS Lint`

In addition to an end-to-end development cycle that involves peer code reviews and and E2E automated testing tool, we would need to implement `ES Lint` and `SASS lint` to ensure code stability. This tooling will also enable the team to monitor file sizes and the overall health of the application.

###DevOps

- Continuos integration
- Test environments set up
- Automated releases (if applicable)
- Docker integration


###Unit test framework

In certain critical components, unit tests will ensure their stability.
The application should have an Unit test framework ready for use. I would personally go with a combination of `mocha`/`chai` for its simplicity and speed.

###Production build

- Bundling (JS and CSS)
- Uglify (JS and CSS)
- Minification (JS, CSS and Image assets)
- CDN integration (Akamai)

The output files are expected to be left in their original format in the development build, in order to speed up development and debugging. For a production build however, we expect all possible code bundling and minification. For that, we need to create a "production build".

In addition to bundling and minifying files (including images), caching (Akamai)

###Better error handling

- API call fallbacks
- Error messages
- etc


###"Componetization"

Ideally, all component-related files should be grouped under the component's folder, the same way npm packages are organised. This way there is a clear separation of concerns related to components/core framework/app.

The ideal architecture would be something like this:

	/components
		/MediaGallery
			/assets
				MediaGallery1.svg
				MediaGallery2.svg
			MediaGallery.js
			MediaGallery.scss
			MediaGallery.hbs
			MediaGallery.json
			MediaGallery.html
			README.md
			
