const video_links = [
    {
        name: "top",
        url: "https://www.pexels.com/download/video/31541410/"
    },
    {
        name: "content",
        url: "https://www.pexels.com/download/video/34996597/"
    },
    {
        name: "footer",
        url: "https://www.pexels.com/download/video/33506233/"
    },
]

for (const vl of video_links) {
    const panel = document.querySelector(`[data-panel="${vl.name}"]`);
    const video = panel.querySelector('video');
    video.src = vl.url;
}