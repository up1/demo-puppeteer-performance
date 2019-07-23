# demo-puppeteer-performance

Run chrome container
```
$docker run -d -p 3000:3000  -e PREBOOT_CHROME=true -e MAX_CONCURRENT_SESSIONS=10 --name browserless browserless/chrome:latest
```

Connect to Google chrome from puppeteer
```
browser = await puppeteer.connect({
            browserWSEndpoint: `ws://localhost:3000?--user-data-dir=/tmp/session-123`,
          });
```
* Using --user-data-dir to improve perforomance of Google chrome

Run test
```
$npm start
```

Before
```
8 specs, 0 failures
Finished in 16.978 seconds
```
After
```
8 specs, 0 failures
Finished in 2.721 seconds
```
