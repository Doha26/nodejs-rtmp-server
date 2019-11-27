 const { NodeMediaServer } = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 3000,
    allow_origin: '*'
  },trans: {
    ffmpeg: '/usr/local/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        mp4: true,
        mp4Flags: '[movflags=faststart]'
      }
    ]
  }
};

var nms = new NodeMediaServer(config);
nms.run();
 nms.on('getFilePath', (streamPath, oupath, mp4Filename) => {
   console.log('---------------- get file path ---------------');
   console.log(streamPath);
   console.log(oupath);
   console.log(mp4Filename);
   utils.setMp4FilePath(oupath + '/' + mp4Filename);
 });

 nms.on('preConnect', (id, args) => {
   console.log(
       '[NodeEvent on preConnect]',
       `id=${id} args=${JSON.stringify(args)}`
   );
 });

 nms.on('postConnect', (id, args) => {
   console.log(
       '[NodeEvent on postConnect]',
       `id=${id} args=${JSON.stringify(args)}`
   );
 });

 nms.on('doneConnect', (id, args) => {
   console.log(
       '[NodeEvent on doneConnect]',
       `id=${id} args=${JSON.stringify(args)}`
   );
 });

 nms.on('prePublish', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on prePublish]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
   // let session = nms.getSession(id);
   // session.reject();
 });

 nms.on('postPublish', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on postPublish]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
 });

 nms.on('donePublish', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on donePublish]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
 });

 nms.on('prePlay', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on prePlay]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
 });

 nms.on('postPlay', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on postPlay]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
 });

 nms.on('donePlay', (id, StreamPath, args) => {
   console.log(
       '[NodeEvent on donePlay]',
       `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
   );
 });
