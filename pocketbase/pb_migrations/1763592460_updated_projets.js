/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2157135697",
    "max": 0,
    "min": 0,
    "name": "sous_titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file2926277328",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "couleurs_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text608345538",
    "max": 0,
    "min": 0,
    "name": "noms_typographie",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // remove field
  collection.fields.removeById("text2157135697")

  // remove field
  collection.fields.removeById("file2926277328")

  // remove field
  collection.fields.removeById("text608345538")

  return app.save(collection)
})
