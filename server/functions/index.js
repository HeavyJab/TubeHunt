const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors')
const cheerio = require('cheerio');
const axios = require('axios')
const app = express();
const YouTubeAPI = require("./YouTubeAPI.json");
app.use( cors({origin: true}))

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tube-hunt.firebaseio.com"
});

const db = admin.firestore();

// submit channels
app.post('/api/channel/submit', (req, res) => {
    (async () => {
        try 
        {
            const { url } = req.body;
            const { data } = await axios.get(url)
            const $ = cheerio.load(data);

            // getting metadata
            const metadata =  
            {
                title: $('meta[name="title"]').attr('content'),
                keywords: $('meta[name="keywords"]').attr('content').split(' '),
                desc: $('meta[name="description"]').attr('content'),
                channelId: $('meta[itemprop="channelId"]').attr('content'),
                subscribe: $('link[itemprop="url"]').attr('href') + '?sub_confirmation=1',
                isFamilyFriendly: $('meta[itemprop="isFamilyFriendly"]').attr('content'),
                imgSrc:$('link[rel="image_src"]').attr('href'),
                dateSubmitted: Date.now()
            }

            // get top 20 videos
            await db.collection('channels')
            .doc('/' + metadata.channelId + '/')
            .create(metadata) 
            return res.status(200).send(metadata);

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// get all channels
app.get('/api/channels', (req, res) => {
    (async () => {
        try {
            const channelSnapshot = await db.collection('channels')
            .get();
            const channels = []
            channelSnapshot.forEach(
                (doc) => {
                    channels.push(doc.data())
                }
            )
            res.status(200).send(channels);

        } catch (error){
            console.log(error)
            return res.status(500).send(error);
        }
        
    })();
});



// get videos by channels
app.get('/api/videos/:channelId', (req, res) => {
    (async () => {
        try {
            const channelId = req.params.channelId;
            const videosUrl = `https://www.googleapis.com/youtube/v3/search?key=${YouTubeAPI.key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=25`
            const { data } = await axios.get(videosUrl)

            videos = data.items.map((item) => {
                    return {
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    publishTime: item.snippet.publishTime,
                    videoUrl: `www.youtube.com/watch?v=${item.id.videoId}` 
                    }
            })
            
            res.status(200).send(videos);

        } catch (error){
            console.log(error)
            return res.status(500).send(error);
        }
        
    })();
});

exports.app = functions.https.onRequest(app);