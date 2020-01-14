const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "最美的期待",
        artist: '南征北站',
        url: 'http://m10.music.126.net/20200114213045/5a2df199f25b506a4204c7d4241da90c/ymusic/0b45/e639/b768/d0c07f504f04bfe73ae87b139b34dcc7.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      },
      {
        name: '透明',
        artist: '邓紫棋',
        url: 'http://m10.music.126.net/20200114220342/a778bbe47fb0b3e94460251f214f572a/ymusic/0108/0758/015a/6bee1351c20219e537d86001cff74d4b.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      },
      {
        name: '像风一样自由',
        artist: '许巍',
        url: 'http://m10.music.126.net/20200114220401/2b13d0e76e7054fe5e50a55c7cbfd7df/ymusic/9755/631c/4fcc/9524fff997e8a4f41c6083ef242e3536.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      }
    ]
});