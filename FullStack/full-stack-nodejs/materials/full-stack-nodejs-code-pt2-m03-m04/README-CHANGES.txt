# Full Stack Node.js

Node.js is constantly on the move and things are changing rapidly. Here are some tips to keep things working smoothly with this tutorial.

* Use the included code samples, which have been updated to work with stable versions of Node and related libraries.
* Or, email peepcode@topfunky.com with any questions and we'll be glad to help you out.

See https://gist.github.com/3239424 for descriptions of the changes in Express 3.0. We've included a code sample here that works with Express 3.0 and will update the video once Express 3.0 is released.

## Node 0.8

We've run the code on Node 0.8 and the main application works. There are issues with libxmljs used for the tests (see below).

## Express

Running `npm install express` will give you the latest version of Express, which may be an unstable beta version.

Use the `package.json` from the final project for stable versions that we've tested.

## libxmljs

Unfortunately, libxmljs has issues if you install Node.js with the graphical installer (it assumes you've installed Node.js from source).

The main application will work, as will any tests that don't use the `assert-extra` code such as `hasTag`. We're working on a better solution that works with all installations of Node.
