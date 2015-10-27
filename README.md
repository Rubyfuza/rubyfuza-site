# rubyfuza2

## Installation

[Middleman](https://middlemanapp.com/) is built on Ruby and uses the [RubyGems package manager] (https://rubygems.org/pages/download) for installation. These are usually pre-installed on Mac OS X and Linux. Windows users can install both using [RubyInstaller].

```
gem install middleman
```


## Middleman Server and Build

Change directories into your new project and start the preview server:

```
cd /rubyfuza
middleman server
```

The preview server allows you to build your site, by modifying the contents of the `source` directory, and see your changes reflected in the browser at: `http://localhost:4567/`

Autoreload is enabled so you wont need to refresh your site, or the serever for content / style changes, only if you have installed a new gem.

To get started, simply develop as you normally would by building HTML, CSS, and Javascript in the `source` directory.

Finally, you will want to build your project into a stand-alone site. From the project directory:

```
middleman build
```


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
