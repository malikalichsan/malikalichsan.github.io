---
title: How to setup project in LEMP
date: "2020-07-07T12:24:03.284Z"
description: "Setup project in LEMP"
---
- Copy project in `/var/www/html/project`
- Create config nginx in `/etc/nginx/sites-available`
- Symbolic link to sites-enable
`sudo ln -s /etc/nginx/sites-available/project.test /etc/nginx/sites-enabled`
- Create host in `/etc/hosts`
- Add `127.0.0.1	project.test`
- Check `sudo nginx -t`
- Reload nginx `sudo systemctl reload nginx`
