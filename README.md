# Repro Build & Run Steps 👋

This repo exposes a reproduction of the pmtiles parsing error present for iOS builds when using `maplibre-react-native`

## Build Steps

1. Install dependencies

   ```bash
   npm install
   ```

2. Run prebuild for native apps

   ```bash
    npx expo prebuild
   ```

3. Start server for development build

   ```bash
    npx expo start
   ```
   
4. Build and run iOS app

   ```bash
    npx expo run:ios
   ```
   
You will see the error:

```
 (NOBRIDGE) ERROR  MapLibre error Requesting: https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles failed with error: Error Domain=NSURLErrorDomain Code=-1002 "unsupported URL" UserInfo={NSLocalizedDescription=unsupported URL, NSErrorFailingURLStringKey=https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles, NSErrorFailingURLKey=https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles, _NSURLErrorRelatedURLSessionTaskErrorKey=(
    "LocalDataTask <6816E63E-8AC6-413A-B987-B1B2F8D969DD>.<2>"
), _NSURLErrorFailingURLSessionTaskErrorKey=LocalDataTask <6816E63E-8AC6-413A-B987-B1B2F8D969DD>.<2>, NSUnderlyingError=0x600000d025b0 {Error Domain=kCFErrorDomainCFNetwork Code=-1002 "(null)"}} {"filePath": "-[MLNNetworkConfiguration errorLog:]", "level": "error", "line": 129, "message": "Requesting: https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles failed with error: Error Domain=NSURLErrorDomain Code=-1002 \"unsupported URL\" UserInfo={NSLocalizedDescription=unsupported URL, NSErrorFailingURLStringKey=https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles, NSErrorFailingURLKey=https//nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles, _NSURLErrorRelatedURLSessionTaskErrorKey=(
    \"LocalDataTask <6816E63E-8AC6-413A-B987-B1B2F8D969DD>.<2>\"
), _NSURLErrorFailingURLSessionTaskErrorKey=LocalDataTask <6816E63E-8AC6-413A-B987-B1B2F8D969DD>.<2>, NSUnderlyingError=0x600000d025b0 {Error Domain=kCFErrorDomainCFNetwork Code=-1002 \"(null)\"}}"}
 (NOBRIDGE) ERROR  MapLibre error [event]:Style [code]:-1 [message]:Failed to load source fireCentreSource: Error fetching PMTiles header: unsupported URL {"filePath": "virtual bool mbgl::MLNCoreLoggingObserver::onRecord(EventSeverity, Event, int64_t, const std::string &)", "level": "error", "line": 30, "message": "[event]:Style [code]:-1 [message]:Failed to load source fireCentreSource: Error fetching PMTiles header: unsupported URL"}
```

Likely the fix is to avoid using `NSURL` for maplibre URLs since they allow `pmtiles://https://<rest>` that is not legal for `NSURL`. A string or a more constrained type may be a solution.
