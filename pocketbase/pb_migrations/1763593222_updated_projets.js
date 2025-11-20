/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "file1440484992",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "demo1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "file3436535610",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "demo2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file3151130540",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "demo3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // remove field
  collection.fields.removeById("file1440484992")

  // remove field
  collection.fields.removeById("file3436535610")

  // remove field
  collection.fields.removeById("file3151130540")

  return app.save(collection)
})
