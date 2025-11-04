
This Hugo Module wraps [Minimal Analytics](https://github.com/jahilldev/minimal-analytics)'s GA4 script for easy integration with Hugo sites.


Import the module and set your GA4 tracking ID in your `hugo.toml` like this:

```toml
[module]
    [[module.imports]]
        path = "github.com/bep/hugo-mod-minimalanalytics"

[params]
    [params.minimalanalytics]
        # GA4 tracking ID
        tracking_id = "G-MYTRACKINGID"
```

Then include the partial in your HTML templates, typically in the `<head>` section:

```html
{{ if  hugo.IsProduction }}
  {{ partial "minimalanalytics.html" . }}
{{ end }}
```




