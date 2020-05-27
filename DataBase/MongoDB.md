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
