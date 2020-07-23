---
title: Installing elasticsearch client in lumen
date: "2020-07-23T18:00:00.000Z"
description: "We will install elastichsearch in lumen, create the builder and use it"
---

Today, we will do :
- Installing elasticsearch
- Create elasticsearch builder
- Use the builder to get data from elasticsearch

### Installing elasticsearch

In lumen project, install elasticsearch via composer

```bash
composer require elasticsearch/elasticsearch
```

### Create elasticsearch builder

We can create a new class, and we can put it in `app/Helper`. And named it `Elasticsearch` class. If you don't want to put it in Helper dir, you can move it as you want.

```php
<?php

namespace App\Helpers;

class Elasticsearch
{
}
```

Then, crete property called `$elasticsearchClient`

```php
...
public $elasticsearchClient;
...
```

We can add constructor method

```php
...
public function __construct()
{
    $host     = env('ELASTICSEARCH_HOSTS', 'localhost:9200');
    $username = env('ELASTICSEARCH_BASIC_AUTH_USERNAME', null);
    $password = env('ELASTICSEARCH_BASIC_AUTH_PASSWORD', null);

    return $this->elasticsearchClient = ClientBuilder::create()
        ->setBasicAuthentication($username, $password)
        ->setHosts(['host' => $host])
        ->build();
}
...
```

Don't forget to import ClientBuilder

```php
...
use Elasticsearch\ClientBuilder;
...
```

Then add new key in `.env` file

```
ELASTICSEARCH_HOSTS=localhost:9200
ELASTICSEARCH_BASIC_AUTH_USERNAME=your-elasticsearch-auth-username
ELASTICSEARCH_BASIC_AUTH_PASSWORD=your-elasticsearch-auth-password
```

Complete file will be like this

```php
<?php

namespace App\Helpers;
use Elasticsearch\ClientBuilder;

class Elasticsearch
{
    public $elasticsearchClient;

    public function __construct()
    {
        $host        = env('ELASTICSEARCH_HOSTS', 'localhost:9200');
        $username    = env('ELASTICSEARCH_BASIC_AUTH_USERNAME', null);
        $password    = env('ELASTICSEARCH_BASIC_AUTH_PASSWORD', null);

        return $this->elasticsearchClient = ClientBuilder::create()
            ->setBasicAuthentication($username, $password)
            ->setHosts(['host' => $host])
            ->build();
    }
}
```

### Use the builder to get data from elasticsearch

Okay, elasticsearch has been installed and we already have the builder class. Then how to use it ?

First, create controller in `app/Http/Controllers`. Let's called it `ElasticsearchController`. 

```php
<?php

namespace App\Http\Controllers;

class ElasticsearchController extends Controller
{
	public function index()
    {
    }
}
```

Within index method, we can call elasticsearch builder.

```php
...
use App\Helpers\Elasticsearch;
...

...
public function index()
{
    $params = [
        'index' => 'yourindexname',
        'body' => [
            'size' => 0
        ]
    ];

    $elasticsearch = (new Elasticsearch())->elasticsearchClient;
    $esResult = $elasticsearch->search($params);
	return $esResult;
}
...
```

Complete file will be like this

```php
<?php

namespace App\Http\Controllers;

use App\Helpers\Elasticsearch;

class ElasticsearchController extends Controller
{
    public function index()
    {
		$params = [
	        'index' => 'yourindexname',
	        'body' => [
	            'size' => 0
	        ]
	    ];
	
	    $elasticsearch = (new Elasticsearch())->elasticsearchClient;
	    $esResult = $elasticsearch->search($params);
		return $esResult;
    }
}
```

Then, add route name in `routes/web.php`. 

```php
$router->get('/elasticsearch', 'ElasticsearchController@index');
```

You can see the result when you hit `localhost:8080/elasticsearch`.

```json
{
    "took": 1,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": 8375076,
        "max_score": 0,
        "hits": []
    }
}
```
