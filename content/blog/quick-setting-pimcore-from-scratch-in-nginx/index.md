---
title: Quick Setting Pimcore From Scratch In Nginx
date: "2020-07-07T12:11:03.284Z"
description: "Install pimcore from scratch"
---
Quick setting pimcore from scratch in nginx.

- Install as usual according to doc
- Setting nginx sites-available
- Symbolic link to sites-enabled
- Test nginx `sudo nginx -t`
- Setting up hosts
- Reload nginx
- Setting permission folder & file of pimcore

```
# chmod 777 -R var/ web/var/
```
