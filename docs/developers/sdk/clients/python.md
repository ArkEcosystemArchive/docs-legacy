---
title: "Python"
---

# Python

::: warning
This project is still under development. This page will get more content as the project evolves. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/python-client/)
:::

[[toc]]

## Installation

```bash
pip install -e git://github.com/ArkEcosystem/python-client.git@develop#egg=ark-client
```

## Basics

### Example for v2

```python
client = ArkClient('http://127.0.0.1:4003/api/')

delegates = ark.delegates().delegates()
delegates = client.delegates.all()
```

### Example for v1

```python
client = ArkClient('http://127.0.0.1:4002/api/', api_version='v1')

delegates = ark.delegates().delegates()
delegates = client.delegates.all()
```

## Connections

```python
...
```
