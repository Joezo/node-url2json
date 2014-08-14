url2json
=============

A small command line tool to convert url params into json.

### Installation
`npm install -g url2json`

### Usage

```
$ url2json "foo=bar&bar[]=fizz&bar[]=buzz"
{
  "foo": "bar",
  "bar": [
    "fizz",
    "buzz"
  ]
}
```

### License
MIT

