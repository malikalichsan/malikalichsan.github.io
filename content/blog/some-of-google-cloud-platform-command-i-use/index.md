---
title: Some of Google Cloud Platform Command I use
date: "2021-08-26T12:27:04.284Z"
description: 
---
To connect to Google Cloud SQL

```bash
$ gcloud sql connect your-project-id-in-gcp --user=root --quiet
```

SSH to your Google Compute Engine

```bash
$ gcloud beta compute --project "your-project-id-in-gcp" ssh --zone "asia-southeast1-a" "your-vm-instance-name"
```

Copy files from Google Cloud Storage Bucket to local

```bash
$ gsutil cp -r gs://your-bucket-name/path/to/files /path/to/local
```