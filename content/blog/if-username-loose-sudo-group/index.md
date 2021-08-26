---
title: If username loose sudo group
date: "2021-08-26T12:24:03.284Z"
description: "How to solve if username loose sudo group"
---
gpasswd -a <username> <group>

Example:

```bash
$ gpasswd -a malik sudo
```

Or we can do 

sudo usermod -aG <group> <username>

Example:

```bash
$ sudo usermod -aG docker malik
```