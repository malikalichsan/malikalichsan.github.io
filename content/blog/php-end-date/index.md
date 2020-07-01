---
title: PHP End Date
date: "2020-07-01T21:43:03.284Z"
description: "We can get end date of this month."
---

```php
<?php

$begin = date('Ymd');

echo $begin;
```

This is how we get date today

But how to get end date of this month based on date today ?

```php
<?php

$begin = date('Ymd');
$end = date('Ymt', strtotime($begin));

echo $end;
```

Just by adding `t`  we can get end date of this month
