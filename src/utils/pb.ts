import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";

var path = '';
if (import.meta.env.MODE === 'development') {
    path = 'http://127.0.0.1:8090';    // localhost = machine de dev
} else {
    path = 'https://portfolio.manolia-kocaoglu.fr:443';   // url du site 
}

const pb = new PocketBase(path) as TypedPocketBase;

// Log pour debug
console.log('📡 PocketBase configuré sur:', path);

export default pb;