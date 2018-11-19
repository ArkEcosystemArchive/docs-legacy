---
title: "Python"
---

# Python

[[toc]]

## Installation

```bash
pip install arkecosystem-client
```

## Basics

### Example for v2

```python
from ark.client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

delegates = ark.delegates().delegates()
delegates = client.delegates.all()
```

### Example for v1

```python
from ark.client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

delegates = ark.delegates().delegates()
delegates = client.delegates.all()
```
