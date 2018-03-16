module.exports = (app) ->
  absoluteURLForPath: (path) ->
    "http://localhost:#{app.settings.port}#{path}"
