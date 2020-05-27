| Relational Databases                | NoSql Databases                        |
| ----------------------------------- | -------------------------------------- |
| 1. Powerful, Flexible, constrained. | 1. Document model more closely matches |
| 2. Designed for database            | code objects.                          |
| administrators.                     | 2. Designed for developers.            |

---

### Dev purpose:

db.collection.find().explain()

db.collection.find().explain('executionStats')

---

importing data from files, take a quick help by command _mongoimport --help_

importing from a json file:
_mongoimport --db \<databaseName\> --collection \<collectionName\> --jsonArray \<filename.json\>_

---

Creating index makes much more efficient while quering documents: Creating indexes will help when dealing with large amount of data.

_db.\<collectionName\>.createIndex({\<keys for indexing\>})_

---

### Aggregation:

This is similar to the group by functionality in SQL. [reference](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/)

Small exampe on find the count of all the array elements in a collection grouped by some keyName : _db.\<collectionName\>.aggregate([{$group: {\_id:'$\<keyName\>', count: {$sum:1}}}])_

---

| Replication                       | Sharding                                |
| --------------------------------- | --------------------------------------- |
| 1. Full copies of the dataset     | 1. Partition data onto multiple servers |
| 2. Primary and secondary servers. | 2. Server farm friendly                 |
| 3. Automatic failover             | 3. Scalability and performance          |
