![Alt text](https://github.com/Ruberto/rubyfuza2/blob/master/source/images/rubyfuza_middleman.png?raw=true)

## Installation

[Middleman](https://middlemanapp.com/) is built on Ruby and uses the [RubyGems package manager] (https://rubygems.org/pages/download) for installation. These are usually pre-installed on Mac OS X and Linux. Windows users can install both using [RubyInstaller](http://rubyinstaller.org/).

```
gem install middleman
```

Pull down the repo and then install all the nessessary gems with [bundler](http://bundler.io/)

```
git clone git@gitlab.com:rubyfuza/rubyfuza.gitlab.io.git

cd into the repo

bundle 
```

## Middleman Server and Build

Change directories into your new project and start the preview server:

```
cd into the repo
middleman server
```

The preview server allows you to build your site, by modifying the contents of the `source` directory, and see your changes reflected in the browser at: `http://localhost:4567/`

Live-reload is enabled so you won't need to reload your browser or reset the serever for content / style changes. You will however if you have installed a new gem.

To get started, simply develop as you normally would by building HTML, CSS, and Javascript in the `source` directory.

Finally, you will want to build your project into a static site. From the project directory:

```
middleman build
```

Middleman has been configured to complie the site into the `public_html` folder, this folder will then be served through a Heroku / Rackapp / Puma setup.

## Directory Structure 

```
mymiddlemansite/
+-- .gitignore
+-- Gemfile
+-- Gemfile.lock
+-- config.ru                <-- Rack app config
+-- config.rb                <-- Middleman config
+-- Rakefile                 <-- For assets:precompile
+-- Procfile                 <-- For the Puma server
+-- source
    +-- images
    ¦   +-- rubyfuza.png
    ¦   +-- ...
    ¦   +-- logos
    ¦       +-- github.png
    ¦       +-- ...
    ¦   +-- speakers
    ¦       +-- kenneth_kalmer.png
    +-- js
    ¦   +-- plugins.js
    ¦   +-- scripts.js
    ¦   +-- libs
    ¦       +-- all the javascript/jquery libs
    +-- stylesheets
    ¦   +-- screen.sass
    ¦   +-- partals
    ¦       +-- _all.sass    <-- all partials are imported with compass
    +-- layouts
    ¦   +-- layout.haml      <-- Layouts is what wraps the content
    +-- partials
    ¦   +-- _header.haml     <-- top level partials are used within Index.haml
    ¦   +-- ...
    ¦   +-- 2013             <-- Year folders contain partials for that year.haml
    ¦       +-- _header.haml
    ¦       +-- ...
    +-- index.haml           <-- Current year page
    +-- 2013.haml            <-- Previous year pages
    +-- ____.haml            <-- Any page placed at this level, whether built with partials or not will be built on the middleman build command.

+-- public_html             <-- middleman bulid will create this folder with compiled CSS/JS/HTML that will then be served to the public
```

## Building the site 

RubyFuza is running on Gitlab pages, it's a free service offered by gitlab for static sites. I have set up the pipeline so that all you have to do is create a pull request
and the branch if successfully built will automatically deploy live, if it fails then it will notify you that it has failed. 

The task simply shells out to call `middleman build` which builds the site automatically. Middleman will output all files to the configured directory `./public_html`.

## Serving the site

The site is currently being served by gitlab pages.

## Contributing

The site is usually maintained by the Ruby community, pull requests welcome

## Credits

Updated with love by Legendary Rob

## License

Copyright (c) 2015 Rubyfuza

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.