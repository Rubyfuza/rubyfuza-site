![Alt text](https://github.com/Ruberto/rubyfuza2/blob/master/source/images/rubyfuza_middleman.png?raw=true)

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

Heroku will automatically attempt to execute a rake task called `assets:precompile`.

This was originally for the benefit of Rails, but we can take advantage of this now for our own needs.

I created a new Rakefile and added the following.

```
namespace :assets do
  task :precompile do
    sh 'middleman build'
  end
end
```

The task simply shells out to call `middleman build` which builds the site automatically when the site is pushed to Heroku. Middleman will output all files to the configured directory `./public_html`.

## Serving the site

The process of serving a static Middleman site on Heroku is quite straight forward once you understand the basics. The site will be running as a Rack app, so we’ll need a `config.ru` file. Here is what it looks like.

```
require 'rack'
require 'rack/contrib/try_static'

# Serve files from the build directory
use Rack::TryStatic,
  root: 'public_html',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

run lambda{ |env|
  four_oh_four_page = File.expand_path("../public_html/404/index.html", __FILE__)
  [ 404, { 'Content-Type'  => 'text/html'}, [ File.read(four_oh_four_page) ]]
}
```

The `Rack::TryStatic` section is how we serve up the static files that Middleman builds when the site is pushed to Heroku. Middleman has been configured to output all files into `./public_html`.

If no page is served from the `Rack::Trystatic` app, the 404 page is served using the next `run` section.
