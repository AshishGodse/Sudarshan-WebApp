/* Travel Detail Page - Dynamic Content Loading */

const templesData = {
    varanasi: {
        title: "Varanasi (Kashi)",
        location: "📍 Uttar Pradesh",
        image: "https://via.placeholder.com/800x400/8B0000/FFFFFF?text=Varanasi",
        significance: "Varanasi is one of the oldest cities in the world and the holiest pilgrimage site in Hinduism. Located on the banks of the sacred Ganges River, it's believed that bathing in the river here washes away all sins. Varanasi is the city of Lord Shiva and holds immense spiritual significance.",
        attractions: [
            "Kashi Vishwanath Temple - One of the most sacred temples dedicated to Lord Shiva",
            "Ghat rituals and evening Aarti ceremonies - Spectacular fire rituals on the banks of Ganges",
            "Spiritual awakening experience - The entire city is steeped in spirituality",
            "Ancient temples and sacred sites - Over 2000 temples in the city",
            "Pilgrimage opportunities - Visit nearby temples like Annapurna Temple"
        ],
        visiting: [
            "Best time: October to March for pleasant weather",
            "How to reach: Accessible by air, rail, and road from major Indian cities",
            "Duration: 3-5 days for a complete pilgrimage experience",
            "Accommodation: Various guest houses, hotels, and ashrams available",
            "Local transport: Boats, autos, and taxis for local travel"
        ],
        bestTime: "The best time to visit Varanasi is from October to March when the weather is cool and pleasant. The Ghat Aarti is spectacular during winter evenings.",
        howToReach: "Varanasi International Airport (Babatpur) connects to major Indian cities. Regular trains and buses also connect Varanasi to different parts of India. The city is well-connected by road from Lucknow and other nearby cities."
    },
    kedarnath: {
        title: "Kedarnath",
        location: "📍 Uttarakhand",
        image: "https://via.placeholder.com/800x400/2F5233/FFFFFF?text=Kedarnath",
        significance: "Kedarnath is one of the four sacred Dhams (pilgrimage sites) in Hinduism. It's home to the Kedarnath Temple, one of the oldest temples dedicated to Lord Shiva. The temple stands at an altitude of 3,583 meters in the Himalayan Mountains.",
        attractions: [
            "Kedarnath Temple - Ancient temple with stunning architecture",
            "Trekking through beautiful Himalayan valleys",
            "Chopta hills and meadows for scenic views",
            "Spiritual enlightenment in the lap of nature",
            "Part of Char Dham Yatra - Four-temple pilgrimage circuit"
        ],
        visiting: [
            "Best time: May to October for trekking",
            "Trek distance: Approximately 16 km from Sonprayag",
            "Duration: 2-3 days for the pilgrimage",
            "Physical fitness required: Moderate to high altitude trek",
            "Accommodation: Guesthouses and camps available along the trek"
        ],
        bestTime: "The pilgrimage is possible from May to October when snow melts. September and October offer the best trekking conditions with clear skies.",
        howToReach: "Nearest railhead is Rishikesh. From there, take a bus or taxi to Sonprayag. The trek to Kedarnath starts from Sonprayag and takes approximately 2 days."
    },
    tirupati: {
        title: "Tirupati",
        location: "📍 Andhra Pradesh",
        image: "https://via.placeholder.com/800x400/1a472a/FFFFFF?text=Tirupati",
        significance: "Tirupati is one of the most visited temples in the world and one of the richest temples in terms of donations. The Tirupati Balaji Temple is dedicated to Lord Venkateshwara, an incarnation of Vishnu. It's a major pilgrimage site attracting millions of devotees annually.",
        attractions: [
            "Tirupati Balaji Temple - One of the richest temples with magnificent architecture",
            "Ritual baths in sacred waters",
            "Religious rituals and offerings",
            "Tirumala Hills with scenic views",
            "Temple museum with religious artifacts"
        ],
        visiting: [
            "Accessible year-round",
            "Efficient darshan system with online booking available",
            "Multiple accommodation options near the temple",
            "Food services and prasad (temple offering) distribution",
            "Vegetarian food available throughout the temple complex"
        ],
        bestTime: "Tirupati can be visited throughout the year. However, avoiding festival times helps in shorter queues. December to January offers pleasant weather.",
        howToReach: "Tirupati has an airport connecting to major Indian cities. Trains and buses connect Tirupati to Bangalore, Chennai, and Hyderabad. The city is well-connected by road."
    },
    mathura: {
        title: "Mathura & Vrindavan",
        location: "📍 Uttar Pradesh",
        image: "https://via.placeholder.com/800x400/654321/FFFFFF?text=Mathura",
        significance: "Mathura is the birthplace of Lord Krishna, one of the most revered deities in Hinduism. Vrindavan, nearby, is where Krishna spent his childhood and divine love with Radha. Both cities are central to Krishna devotion and contain numerous temples and sacred sites.",
        attractions: [
            "Krishna Janmabhoomi Temple - Built on Krishna's birthplace",
            "Banke Bihari Temple in Vrindavan - Famous for Krishna worship",
            "Raas Leela performances - Depicting Krishna's divine plays",
            "Multiple ancient temples dedicated to Krishna",
            "Sacred bathing sites and ghats on Yamuna River"
        ],
        visiting: [
            "Best time: October to March for pleasant weather",
            "Raas Leela performances during Krishna Janmashtami",
            "Accommodation: Various hotels and ashrams available",
            "Local guides helpful for understanding temple history",
            "Vegetarian food easily available"
        ],
        bestTime: "October to March provides pleasant weather. Janmashtami (August/September) is the best time to witness grand celebrations.",
        howToReach: "Mathura is well-connected by rail and road from Delhi (58 km away). Regular buses and trains operate between Delhi and Mathura. The city is also accessible from Agra."
    },
    ayodhya: {
        title: "Ayodhya",
        location: "📍 Uttar Pradesh",
        image: "https://via.placeholder.com/800x400/8B4513/FFFFFF?text=Ayodhya",
        significance: "Ayodhya is the birthplace of Lord Rama, the seventh incarnation of Vishnu. It's one of the most sacred pilgrimage sites in Hinduism. The recently rebuilt Ram Mandir is one of the grandest temples in India.",
        attractions: [
            "Ram Mandir - Grand temple recently opened to public",
            "Hanuman Garhi Temple - Temple dedicated to Lord Hanuman",
            "Ghat celebrations during Diwali",
            "Ramlila performances across the city",
            "Multiple ancient temples dedicated to Lord Rama"
        ],
        visiting: [
            "Best time: October to March",
            "Diwali celebrations are spectacular with city-wide lights",
            "Accommodation options improving with new developments",
            "Organized tours available for temple visits",
            "Vegetarian food readily available"
        ],
        bestTime: "October to March offers pleasant weather. Diwali season (October/November) is the best time to witness celebrations.",
        howToReach: "Ayodhya is accessible from Lucknow (135 km away) by road. Regular buses operate from Lucknow and other nearby cities. The nearest railway station is at Ayodhya with connections to major cities."
    },
    amarnath: {
        title: "Amarnath Cave",
        location: "📍 Jammu & Kashmir",
        image: "https://via.placeholder.com/800x400/4A5899/FFFFFF?text=Amarnath",
        significance: "Amarnath is a sacred cave shrine dedicated to Lord Shiva. It's famous for the mysterious ice lingam that forms naturally inside the cave. The pilgrimage is considered one of the most sacred in Hinduism.",
        attractions: [
            "Holy ice Shivalingam - The main attraction, naturally formed from ice",
            "High-altitude pilgrimage trek through beautiful valleys",
            "Spiritual significance and divine experience",
            "Breathtaking mountain scenery",
            "Ancient cave with religious importance"
        ],
        visiting: [
            "Best time: June to August",
            "Trek difficulty: High altitude, requires good fitness",
            "Duration: 3-4 days for the pilgrimage",
            "Helicopter options available for quick reach",
            "Basic accommodation and food services along the trek"
        ],
        bestTime: "The pilgrimage is possible from June to August when snow melts. July and early August offer the best conditions.",
        howToReach: "Nearest major city is Srinagar. From Srinagar, reach Pahalgam (Trek starting point) by road, approximately 95 km. The trek from Pahalgam to the cave takes 3 days."
    },
    dwarka: {
        title: "Dwarka",
        location: "📍 Gujarat",
        image: "https://via.placeholder.com/800x400/1a5f5f/FFFFFF?text=Dwarka",
        significance: "Dwarka is one of the four sacred Dhams. It's the ancient kingdom of Lord Krishna. The city is revered as the gateway to liberation (moksha). Dwarkadhish Temple is the main attraction.",
        attractions: [
            "Dwarkadhish Temple - Ancient temple dedicated to Krishna",
            "Nageshwar Jyotirlinga Temple - One of the twelve sacred Jyotirlingas",
            "Girnar Mountain pilgrimage with 10,000 steps",
            "Beach and scenic coastal views",
            "Multiple temples dedicated to Lord Krishna"
        ],
        visiting: [
            "Best time: October to March",
            "Accessible by air, rail, and road",
            "Good accommodation and food services",
            "Local guides helpful for exploring temples",
            "Vegetarian food readily available"
        ],
        bestTime: "October to March provides pleasant weather. This period is best for visiting and undertaking the Girnar pilgrimage.",
        howToReach: "Dwarka has an airport connecting to major cities. Trains and buses connect Dwarka to Gujarat and other states. The city is well-connected by road."
    },
    badrinath: {
        title: "Badrinath",
        location: "📍 Uttarakhand",
        image: "https://via.placeholder.com/800x400/6b4423/FFFFFF?text=Badrinath",
        significance: "Badrinath is one of the four sacred Dhams. The temple is dedicated to Lord Vishnu and is located in the Himalayan mountains. It's one of the most important pilgrimage sites in Hinduism.",
        attractions: [
            "Stunning mountain scenery and Himalayan views",
            "Part of Char Dham Yatra - Four-temple pilgrimage circuit",
            "Tapt Kund hot springs with medicinal properties",
            "Sacred rituals and temple ceremonies",
            "Ancient temple with religious significance"
        ],
        visiting: [
            "Best time: May to October",
            "High altitude location at 3,300 meters",
            "Accommodation and food services available",
            "Requires good physical fitness",
            "Helicopter and pony services available"
        ],
        bestTime: "May to October is the pilgrimage season. June to September offers the best weather conditions.",
        howToReach: "Nearest railhead is Rishikesh. From there, take a bus or taxi to reach Jyotirmath, and then continue to Badrinath, approximately 300 km total journey."
    },
    meenakshi: {
        title: "Meenakshi Temple",
        location: "📍 Tamil Nadu",
        image: "https://via.placeholder.com/800x400/9d4569/FFFFFF?text=Meenakshi",
        significance: "The Meenakshi Temple is one of the oldest and most magnificent temples in India. Dedicated to Goddess Meenakshi, it's an architectural marvel of South India with intricate carvings and sculptures.",
        attractions: [
            "Intricate temple architecture with detailed carvings",
            "Ancient rituals and traditions still practiced",
            "Spectacular gopurams (tower structures)",
            "Sacred ceremonies and daily rituals",
            "Temple tank and multiple shrines"
        ],
        visiting: [
            "Accessible year-round",
            "Multiple entrance gates and sections",
            "Organized temple tours available",
            "Accommodation and food services nearby",
            "Respectful dress code required"
        ],
        bestTime: "The temple can be visited throughout the year. December to February offers pleasant weather. Festivals add to the charm.",
        howToReach: "Madurai is the closest major city. Madurai has an airport and railway station. From Madurai, the temple is easily accessible by local transport."
    },
    rameswaram: {
        title: "Rameswaram",
        location: "📍 Tamil Nadu",
        image: "https://via.placeholder.com/800x400/556B2F/FFFFFF?text=Rameswaram",
        significance: "Rameswaram is one of the holiest Hindu pilgrimage sites. According to legend, this is where Lord Rama ended his exile and before embarking on a mission to rescue Sita from Sri Lanka.",
        attractions: [
            "Ramanathswamy Temple - Ancient temple with long corridors",
            "Sacred bathing in the ocean waters",
            "Ram Setu (Adam's Bridge) - Legendary bridge built by Rama",
            "Spiritual pilgrimage experience",
            "Multiple sacred sites and temples"
        ],
        visiting: [
            "Accessible year-round",
            "Special significance during full moon",
            "Accommodation and food services available",
            "Local guides helpful for exploring sites",
            "Beach and scenic views"
        ],
        bestTime: "October to March offers pleasant weather. The pilgrimage has special significance during full moon nights.",
        howToReach: "Rameswaram is accessible by rail and road. Madurai is the nearest major city (165 km away). Regular trains and buses connect Rameswaram to Chennai and other cities."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const temple = params.get('temple') || 'varanasi';
    const data = templesData[temple];

    if (data) {
        document.getElementById('templeTitle').textContent = data.title;
        document.getElementById('templeLocation').textContent = data.location;
        document.getElementById('detailImage').src = data.image;
        document.getElementById('significance').textContent = data.significance;
        document.getElementById('bestTime').textContent = data.bestTime;
        document.getElementById('howToReach').textContent = data.howToReach;
        
        // Load attractions list
        const attractionsList = document.getElementById('attractions');
        attractionsList.innerHTML = '';
        data.attractions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            attractionsList.appendChild(li);
        });

        // Load visiting info list
        const visitingList = document.getElementById('visitingInfo');
        visitingList.innerHTML = '';
        data.visiting.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            visitingList.appendChild(li);
        });
    }
});