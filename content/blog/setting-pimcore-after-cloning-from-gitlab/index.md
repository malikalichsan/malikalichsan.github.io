---
title: Setting pimcore after cloning from gitlab
date: "2020-07-07T12:12:08.284Z"
description: "Setting pimcore after cloning from gitlab"
---
- Git clone the repo
- Setting nginx sites-available
- Symbolic link ke sites-enabled
- Test nginx `sudo nginx -t`
- Setting `/etc/hosts`
- Reload nginx
- Checkout to `development` branch
- settting database in `var/config/system.php`
- Copy `var/config/website-settings.php` from the developer
- Check file `.gitignore`, which one is important ask from the developer
- `composer install`
- `./bin/console cache:clear`
- `./bin/console assets:install`
- `./bin/console pimcore:deployment:classes-rebuild -v`
- Optional: copy `web/var/assets`
- Setting permission folder & file
`chown -R YOURUSER:YOURGROUP app/config bin composer.json pimcore var web/pimcore web/var`

`chmod ug+x bin/*`

- If needed reload php fpm `sudo systemctl reload php7.1-fpm`
