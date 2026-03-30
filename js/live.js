/* ============================================
   Sudarshan - Live Darshan Page
   Fetches live streams from YouTube channels
   configured in config/channels.json
   ============================================ */

(function () {
    "use strict";

    var CONFIG_PATH = "config/channels.json";
    var streamsGrid = document.getElementById("streamsGrid");
    var noStreams = document.getElementById("noStreams");
    var liveStatus = document.getElementById("liveStatus");

    function escapeHtml(str) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function updateStatus(message, isLive) {
        if (!liveStatus) return;
        var dot = liveStatus.querySelector(".status-dot");
        liveStatus.querySelector("span:last-child").textContent = message;
        if (dot) {
            dot.classList.toggle("live", !!isLive);
        }
    }

    function createStreamCard(stream) {
        var card = document.createElement("div");
        card.className = "stream-card";

        var embedUrl =
            "https://www.youtube.com/embed/" +
            encodeURIComponent(stream.videoId) +
            "?autoplay=0&rel=0";

        card.innerHTML =
            '<div class="stream-thumbnail">' +
            '<span class="stream-live-badge">&#9679; LIVE</span>' +
            '<iframe src="' +
            embedUrl +
            '" ' +
            'title="' +
            escapeHtml(stream.title) +
            '" ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
            "allowfullscreen " +
            'loading="lazy">' +
            "</iframe>" +
            "</div>" +
            '<div class="stream-info">' +
            "<h3>" +
            escapeHtml(stream.title) +
            "</h3>" +
            "<p>" +
            escapeHtml(stream.channelName) +
            "</p>" +
            "</div>";

        return card;
    }

    function createThumbnailCard(stream) {
        var card = document.createElement("div");
        card.className = "stream-card";
        card.style.cursor = "pointer";

        var thumbnailUrl = stream.thumbnail ||
            "https://i.ytimg.com/vi/" + encodeURIComponent(stream.videoId) + "/hqdefault.jpg";

        card.innerHTML =
            '<div class="stream-thumbnail">' +
            '<span class="stream-live-badge">&#9679; LIVE</span>' +
            '<img src="' + escapeHtml(thumbnailUrl) + '" alt="' + escapeHtml(stream.title) + '">' +
            "</div>" +
            '<div class="stream-info">' +
            "<h3>" + escapeHtml(stream.title) + "</h3>" +
            "<p>" + escapeHtml(stream.channelName) + "</p>" +
            "</div>";

        card.addEventListener("click", function () {
            // Replace thumbnail with iframe on click
            var thumbDiv = card.querySelector(".stream-thumbnail");
            var embedUrl =
                "https://www.youtube.com/embed/" +
                encodeURIComponent(stream.videoId) +
                "?autoplay=1&rel=0";
            thumbDiv.innerHTML =
                '<span class="stream-live-badge">&#9679; LIVE</span>' +
                '<iframe src="' + embedUrl + '" ' +
                'title="' + escapeHtml(stream.title) + '" ' +
                'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
                "allowfullscreen></iframe>";
            card.style.cursor = "default";
        });

        return card;
    }

    function displayStreams(streams) {
        if (!streamsGrid) return;
        streamsGrid.innerHTML = "";

        if (streams.length === 0) {
            streamsGrid.style.display = "none";
            if (noStreams) noStreams.style.display = "block";
            updateStatus("No live streams currently available", false);
            return;
        }

        if (noStreams) noStreams.style.display = "none";
        streamsGrid.style.display = "";
        updateStatus(streams.length + " live stream(s) available", true);

        streams.forEach(function (stream) {
            // Use thumbnail cards for performance (lazy load iframes on click)
            streamsGrid.appendChild(createThumbnailCard(stream));
        });
    }

    function getCachedStreams() {
        var cached = localStorage.getItem("liveStreamsCache");
        var timestamp = localStorage.getItem("liveStreamsCacheTime");
        var now = Date.now();
        var CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

        if (cached && timestamp && (now - parseInt(timestamp)) < CACHE_DURATION) {
            return JSON.parse(cached);
        }
        return null;
    }

    function setCachedStreams(streams) {
        try {
            localStorage.setItem("liveStreamsCache", JSON.stringify(streams));
            localStorage.setItem("liveStreamsCacheTime", Date.now().toString());
        } catch (e) {
            console.warn("Could not cache streams:", e.message);
        }
    }

    function fetchLiveStreams(config) {
        var apiKey = config.youtube_api_key;
        var channels = config.channels || [];

        if (!apiKey || apiKey === "YOUR_YOUTUBE_API_KEY_HERE") {
            updateStatus("YouTube API key not configured. Please update config/channels.json", false);
            displayFallbackCards(channels);
            return;
        }

        // Check cache first
        var cachedStreams = getCachedStreams();
        if (cachedStreams) {
            displayStreams(cachedStreams);
            updateStatus("Showing cached streams (updated 5 min ago)", true);
            return;
        }

        var allStreams = [];
        var completed = 0;
        var total = channels.length;

        if (total === 0) {
            updateStatus("No channels configured", false);
            if (noStreams) noStreams.style.display = "block";
            return;
        }

        channels.forEach(function (channel) {
            var url =
                "https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet" +
                "&channelId=" + encodeURIComponent(channel.channel_id) +
                "&eventType=live" +
                "&type=video" +
                "&maxResults=1" +
                "&key=" + encodeURIComponent(apiKey);

            fetch(url)
                .then(function (res) {
                    if (!res.ok) throw new Error("API request failed: " + res.status);
                    return res.json();
                })
                .then(function (data) {
                    if (data.items && data.items.length > 0) {
                        data.items.forEach(function (item) {
                            allStreams.push({
                                videoId: item.id.videoId,
                                title: item.snippet.title,
                                channelName: channel.name,
                                thumbnail: item.snippet.thumbnails.high
                                    ? item.snippet.thumbnails.high.url
                                    : item.snippet.thumbnails.default.url,
                            });
                        });
                    }
                })
                .catch(function (err) {
                    console.warn("Failed to fetch streams for " + channel.name + ":", err.message);
                })
                .finally(function () {
                    completed++;
                    if (completed === total) {
                        if (allStreams.length > 0) {
                            setCachedStreams(allStreams);
                        }
                        displayStreams(allStreams);
                    }
                });
        });
    }

    function displayFallbackCards(channels) {
        // Show placeholder cards when API key is not set
        if (!streamsGrid) return;
        streamsGrid.innerHTML = "";

        if (channels.length === 0) {
            if (noStreams) noStreams.style.display = "block";
            return;
        }

        if (noStreams) noStreams.style.display = "none";
        streamsGrid.style.display = "";

        channels.forEach(function (channel) {
            var card = document.createElement("div");
            card.className = "stream-card";
            card.innerHTML =
                '<div class="stream-thumbnail" style="display:flex;align-items:center;justify-content:center;background:#f0f0f0;padding-top:56.25%;position:relative;">' +
                '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#999;">' +
                '<div style="font-size:2rem;margin-bottom:8px;">&#128249;</div>' +
                "<p>Configure API key to see live streams</p>" +
                "</div>" +
                "</div>" +
                '<div class="stream-info">' +
                "<h3>" + escapeHtml(channel.name) + "</h3>" +
                "<p>Channel ID: " + escapeHtml(channel.channel_id) + "</p>" +
                "</div>";
            streamsGrid.appendChild(card);
        });
    }

    // --- Load config and fetch streams ---
    fetch(CONFIG_PATH)
        .then(function (res) {
            if (!res.ok) throw new Error("Config file not found");
            return res.json();
        })
        .then(function (config) {
            fetchLiveStreams(config);
        })
        .catch(function (err) {
            console.error("Failed to load channel config:", err.message);
            updateStatus("Failed to load channel configuration", false);
            if (noStreams) noStreams.style.display = "block";
        });
})();
