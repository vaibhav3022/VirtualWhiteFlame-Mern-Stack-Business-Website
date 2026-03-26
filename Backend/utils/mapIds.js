module.exports = function mapIds(docs) {
  if (Array.isArray(docs)) {
    return docs.map(doc => { doc.id = doc._id.toString(); return doc; });
  } else if (docs) {
    let newDoc = { ...docs };
    newDoc.id = newDoc._id.toString();
    return [newDoc];
  }
  return [];
};
