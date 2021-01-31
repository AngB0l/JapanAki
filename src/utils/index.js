/* eslint-disable */
import store from 'store';
import { format } from 'date-fns';
import _ from 'lodash';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const createDocument = (name=format(new Date(), 'yyyy-MM-dd')) => {
  let currentDocuments = store.get("documents");
  
  const newDocument = {
    id: uuidv4(),
    name: name,
    content: null,
    comments: []
  }

  currentDocuments.push(newDocument);

  store.set("documents", currentDocuments);

  return newDocument;
}

export const saveDocument = (document) => {
  let currentDocuments = store.get("documents");

  for (var i in currentDocuments) {
    if (currentDocuments[i].id == document.id) {
      currentDocuments[i].content = document.content;
      currentDocuments[i].comments = document.comments;
       break; 
    }
  }

  store.set("documents", currentDocuments);
}
