fixture `WebRTC`
    .page`https://webrtc.github.io/samples/src/content/getusermedia/canvas/`;
test(`test`, async t => t.wait(30000));