const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "最美的期待",
        artist: '南征北站',
        url: 'https://m10.music.126.net/20200114163701/d14eb10a1418fc577fc732ccafdcf0ec/ymusic/0b45/e639/b768/d0c07f504f04bfe73ae87b139b34dcc7.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      },
      {
        name: '透明',
        artist: '邓紫棋',
        url: 'https://m10.music.126.net/20200114164120/9c15f442618f7a138b4edb00875520d8/ymusic/0108/0758/015a/6bee1351c20219e537d86001cff74d4b.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      },
      {
        name: '像风一样自由',
        artist: '许巍',
        url: 'https://m10.music.126.net/20200114163650/5274f0c0958c9353fccb263f9369ba49/ymusic/9755/631c/4fcc/9524fff997e8a4f41c6083ef242e3536.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2533827078,375027369&fm=26&gp=0.jpg',
      }
    ]
});