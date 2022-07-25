const git = new(require('@neoxr/gitdb'))({
   username: 'neoxr'
   repository: 'gitdb',
   token: 'ghp_sEnSoR'
})

const data = {
   "name": "Budi Budiman",
   "age": 20,
   "hobby": "Turu"
}

git.save(data).then(res => {
   console.log(res)
})