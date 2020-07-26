const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('../../models/postsModel');

dotenv.config({ path: '../../config.env' });
const posts = JSON.parse(
    fs.readFileSync(`${__dirname}/posts.json`, 'utf-8')
);

console.log(posts);

const url = process.env.CONNECTION_STRING;

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('database connection successful');
    });

const importAll = async () => {
    try {
        await Post.insertMany(posts);
        console.log('import success');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

const deleteAll = async () => {
    try {
        await Post.deleteMany();
        console.log('delete successful');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importAll();
} else if (process.argv[2] === '--delete') {
    deleteAll();
}

console.log(process.argv);
