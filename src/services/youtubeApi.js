export async function loadYouTubeAPI() {
    if (window.YT) {
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        // Salva o callback atual se existir
        const oldCallback = window.onYouTubeIframeAPIReady;
        
        window.onYouTubeIframeAPIReady = () => {
            if (oldCallback) oldCallback();
            resolve();
        };

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
}

export function createPlayer(playerId, videoId) {
    if (!videoId || !playerId) {
        console.error('VideoId ou PlayerId inválidos:', { playerId, videoId });
        return null;
    }

    try {
        return new YT.Player(playerId, {
            height: '360',
            width: '640',
            videoId: videoId,
            playerVars: {
                playsinline: 1,
                controls: 1,
                rel: 0,
                modestbranding: 1
            }
        });
    } catch (error) {
        console.error('Erro ao criar player:', error);
        return null;
    }
}
