### Installation

Because it's not in npmjs, you have to add this in **package.json**

```
{
   "dependencies": {
      "@neoxr/gitdb": "git+https://github.com/neoxr/gitdb",
   }
}
```

### Get Token

You must have access to an authentication token to get it go to the [https://github.com/settings/tokens](https://github.com/settings/tokens) page. Give a name for your token, set no expiration and follow the scope rules that need to be checked below to grant access and avoid errors.

- [x] repo
- [x] write:packages
- [ ] delete:packages
- [x] admin:org
- [x] admin:public_key
- [x] admin:repo_hook
- [x] admin:org_hoox
- [ ] gist
- [ ] notifications
- [ ] delete:repo
- [ ] user
- [ ] admin:enterprise
- [x] project
- [x] admin:rpg_key

**Token format looks like this :**

```
ghp_ZYuUPTSs3W4orj34g97iQRVrFWoswjwo
```

### Authentication

Github authentication using this package as an example :

``` 
const config = {
   username: 'YOUR_USERNAME'
   repository: 'YOUR_REPOSITORY',
   file: 'FILENAME', // <-- JSON filename, If not passed defaults to : database
   token: 'YOUR_TOKEN'
}
const git = new(require('@neoxr/gitdb'))(config)
```

### Fetch & Save JSON

There are main functions, namely ```.save()``` and ```.fetch()```

#### 1. Save

```
const data = {
   "name": "Budi Budiman",
   "age": 20,
   "hobby: "Turu"
}

git.save(data).then(res => {
   console.log(res)
})
```

#### 2. Fetch

```
git.fetch().then(res => {
   console.log(res)
})
```

### Example

Access the sample script **[here](https://github.com/neoxr/gitdb/blob/master/src/example.js)**
