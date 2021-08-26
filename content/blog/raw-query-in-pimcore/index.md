---
title: RAW Query in Pimcore
date: "2021-08-26T12:25:04.284Z"
description: "RAW Query in Pimcore"
---
Use class `Pimcore\Db`. The available methods can be seen at `vendor/pimcore/picmore/lib/Db/ConnectionInterface.php`.

Example : 

```php
Db::get()->fetchAll("SELECT * FROM object_5");
```

There are several conditions in which raw SQL queries are better than ORM, so they can improve performance.