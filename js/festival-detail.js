/* Festival Detail Page - Dynamic Content Loading */

const festivalsData = {
    diwali: {
        title: "Diwali - Festival of Lights",
        date: "October/November",
        image: "https://via.placeholder.com/800x400/FF6B35/FFFFFF?text=Diwali+Festival",
        significance: "Diwali, also known as Deepavali, celebrates the triumph of light over darkness and good over evil. It marks Lord Rama's return from exile after defeating the demon Ravana. Celebrated for five days, this festival symbolizes new beginnings and spiritual awakening.",
        celebrations: "During Diwali, homes are decorated with oil lamps (diyas) and colorful rangoli patterns. People exchange sweets, give gifts, and burst firecrackers. The festival includes prayers to Goddess Lakshmi for prosperity and wealth.",
        regional: "While the main theme remains the same, Diwali is celebrated differently across India. In South India, it involves oil baths before dawn, while in North India, the focus is on Ramlila performances and fireworks.",
        howToCelebrate: [
            "Clean and decorate your home with diyas and rangoli",
            "Prepare traditional sweets and share with family and friends",
            "Wear new clothes and exchange gifts",
            "Light diyas in the evening and pray to Goddess Lakshmi",
            "Burst firecrackers safely (optional)",
            "Watch live celebrations at temples during live darshan"
        ]
    },
    holi: {
        title: "Holi - Festival of Colors",
        date: "March",
        image: "https://via.placeholder.com/800x400/F18F01/FFFFFF?text=Holi+Festival",
        significance: "Holi celebrates the divine love of Lord Krishna and Radha. It also marks the victory of good over evil and the burning of the demoness Holika. This festival symbolizes love, joy, and the arrival of spring.",
        celebrations: "Holi begins with Holika Dahan where bonfires are lit. The next day, people play with colored powders (gulal), spray colored water, and celebrate with music and dance. Traditional foods like gujhiya are prepared and shared.",
        regional: "In North India, Holi is more elaborate with bonfires and color play. In South India, it's often called Kamadahana and involves rituals for prosperity. In Bengal, it's celebrated as Basanta Utsav.",
        howToCelebrate: [
            "Participate in Holika Dahan the night before",
            "Play with organic colors and colored water",
            "Prepare and share traditional Holi sweets",
            "Visit family and friends to exchange greetings",
            "Sing Holi songs and dance",
            "Forgive grievances and start fresh relationships"
        ]
    },
    navratri: {
        title: "Navratri & Dussehra",
        date: "September/October",
        image: "https://via.placeholder.com/800x400/C1121F/FFFFFF?text=Navratri+Festival",
        significance: "Navratri celebrates nine nights of worship dedicated to Goddess Durga and her nine forms. Dussehra marks the victory of Goddess Durga over the buffalo demon Mahishasura. It represents the triumph of good over evil.",
        celebrations: "During Navratri, people fast, perform prayers, and sing devotional songs. Garba and Dandiya are traditional dances performed during the festival. Ramlila performances depict episodes from the Ramayana. Dussehra is celebrated with grand processions and effigies of Ravana are burned.",
        regional: "In North India, Ramlila performances are common. In Gujarat, Garba and Dandiya nights are colorful celebrations. In South India, Golu is displayed with dolls depicting different stories.",
        howToCelebrate: [
            "Fast during Navratri (full or partial)",
            "Participate in Garba and Dandiya dances",
            "Set up a Golu in your home",
            "Read or listen to Devi Mahatmya recitations",
            "Prepare special Navratri dishes",
            "Attend Ramlila performances",
            "Burn effigies on Dussehra"
        ]
    },
    janmashtami: {
        title: "Janmashtami - Birth of Lord Krishna",
        date: "August/September",
        image: "https://via.placeholder.com/800x400/003566/FFFFFF?text=Janmashtami+Festival",
        significance: "Janmashtami celebrates the birth of Lord Krishna, the eighth incarnation of Vishnu. Krishna is revered as the supreme deity in Hinduism and is known for his divine love and wisdom.",
        celebrations: "Temples are decorated elaborately with flowers and lights. Devotees perform Raas Leela, a dramatic recreation of Krishna's life. Special foods like makhan (butter) and milk products are prepared as offerings. The celebrations often involve swinging the idol of baby Krishna.",
        regional: "In North India, Krishna Janmashtami is celebrated with great fervor, especially in Mathura and Vrindavan. In Maharashtra, it's celebrated with the 'Dahi Handi' where young people form pyramids to break a pot of butter.",
        howToCelebrate: [
            "Visit Krishna temples and participate in prayers",
            "Watch Raas Leela performances",
            "Prepare butter-based sweets as offerings",
            "Fast and break it at midnight",
            "Ring temple bells at midnight to mark Krishna's birth",
            "Share prasad with family and friends",
            "Sing devotional songs praising Lord Krishna"
        ]
    },
    "makar-sankranti": {
        title: "Makar Sankranti - Winter Harvest",
        date: "January 14",
        image: "https://via.placeholder.com/800x400/606C38/FFFFFF?text=Makar+Sankranti",
        significance: "Makar Sankranti marks the sun's transition from Sagittarius to Capricorn (Makar). It symbolizes the end of winter and the beginning of a new harvest season. This festival celebrates the glory of the sun god Surya.",
        celebrations: "Kite flying is a prominent activity during this festival. People prepare til (sesame) and jaggery (gur) sweets to share. In South India, Pongal is celebrated with the preparation of a special rice dish. In North India, Lohri festival is celebrated around this time.",
        regional: "In Gujarat, Uttarayan festival involves massive kite flying competitions. In Maharashtra and Karnataka, the festival is celebrated as Makar Sankranti. In Tamil Nadu, it's celebrated as Pongal with agricultural festivities.",
        howToCelebrate: [
            "Fly kites and enjoy outdoor activities",
            "Prepare til ladoos and gur sweets",
            "Take ritualistic dips in holy rivers if possible",
            "Wear new clothes",
            "Share sweets with neighbors and friends",
            "Worship the sun god",
            "Participate in harvest celebrations"
        ]
    },
    "maha-shivratri": {
        title: "Maha Shivratri - Night of Lord Shiva",
        date: "February/March",
        image: "https://via.placeholder.com/800x400/8B4513/FFFFFF?text=Maha+Shivratri",
        significance: "Maha Shivratri celebrates Lord Shiva's cosmic dance and his victory over evil. It's considered one of the most auspicious nights in the Hindu calendar. Devotees believe that worshipping Shiva on this night grants moksha (liberation).",
        celebrations: "Devotees fast throughout the day and night, performing Shiva prayers. Temple bells ring continuously, and Shiva is worshipped with water and milk. All-night vigils are common as devotees chant 'Om Namah Shivaya'. Bhaang (cannabis preparation) is traditionally consumed as an offering.",
        regional: "In North India, Maha Shivratri is celebrated with massive gatherings at Shiva temples. In South India, temple processions and fire rituals are common. In Kashmir, it's celebrated as Herath with family gatherings.",
        howToCelebrate: [
            "Fast for 24 hours",
            "Keep an all-night vigil",
            "Chant 'Om Namah Shivaya' mantras",
            "Worship Shivalingam with water, milk, and honey",
            "Meditate throughout the night",
            "Visit Shiva temples for worship",
            "Avoid sleep and engage in spiritual activities"
        ]
    },
    "gudi-padwa": {
        title: "Gudi Padwa - Marathi New Year",
        date: "March/April",
        image: "https://via.placeholder.com/800x400/DAA520/FFFFFF?text=Gudi+Padwa",
        significance: "Gudi Padwa marks the beginning of the Hindu lunar new year and the start of spring season. It celebrates the victory of good over evil and marks new beginnings and prosperity.",
        celebrations: "A Gudi (flag) is hoisted outside homes with a decorated pot and mango leaves. The flag is topped with a sugar garland and flowers. Neem flowers and jaggery (gur) are consumed together to bring health. Special dishes like puran poli are prepared.",
        regional: "Gudi Padwa is primarily celebrated in Maharashtra. The festival has similar celebrations in Andhra Pradesh (as Ugadi) and Karnataka (as Yugadi) with slightly different names and customs.",
        howToCelebrate: [
            "Hoist a decorated Gudi outside your home",
            "Consume neem flowers with jaggery",
            "Prepare puran poli and other traditional dishes",
            "Wear new clothes",
            "Apply tilak on forehead",
            "Visit temples and family members",
            "Share festive greetings and exchange gifts"
        ]
    },
    pongal: {
        title: "Pongal - Tamil Harvest Festival",
        date: "January",
        image: "https://via.placeholder.com/800x400/2E8B57/FFFFFF?text=Pongal",
        significance: "Pongal is a harvest festival celebrated in Tamil Nadu. It marks the end of the monsoon season and the beginning of a new harvest season. The festival is dedicated to the sun god Surya.",
        celebrations: "Pongal is prepared as an offering to the sun god. Rice is cooked with jaggery and moong dal in new earthen pots. Cattle are decorated and taken for processions in Mattu Pongal. Fireworks and colorful rangoli decorations are part of the celebrations.",
        regional: "Pongal is primarily celebrated in Tamil Nadu and Andhra Pradesh. Each region has its own way of celebrating the festival.",
        howToCelebrate: [
            "Prepare traditional Pongal dish with rice and sugar",
            "Clean and decorate your home",
            "Make colorful rangoli patterns",
            "Participate in Mattu Pongal celebrations",
            "Worship the sun god",
            "Exchange greetings and sweets",
            "Burn firecrackers safely"
        ]
    },
    "karva-chauth": {
        title: "Karva Chauth - Day of Marital Devotion",
        date: "October/November",
        image: "https://via.placeholder.com/800x400/4B0082/FFFFFF?text=Karva+Chauth",
        significance: "Karva Chauth celebrates marital devotion and the bond between married couples. Women fast for the longevity and prosperity of their husbands. It's a festival that emphasizes love and commitment.",
        celebrations: "Women dress in traditional attire and apply henna (mehndi). They fast from sunrise to moonrise. In the evening, they gather to watch the moon and apply makeup. After seeing the moon, they break their fast by eating food offered by their husbands.",
        regional: "Karva Chauth is primarily celebrated in North India, especially in Punjab, Haryana, Uttar Pradesh, and Rajasthan. The festival has regional variations in customs and traditions.",
        howToCelebrate: [
            "Apply henna on hands",
            "Wear traditional and festive clothing",
            "Fast throughout the day",
            "Gather with other women for celebrations",
            "Apply makeup and dress up",
            "Watch the moon in the evening",
            "Break the fast with food offered by husband"
        ]
    },
    "rama-navami": {
        title: "Rama Navami - Birth of Lord Rama",
        date: "March/April",
        image: "https://via.placeholder.com/800x400/DC143C/FFFFFF?text=Rama+Navami",
        significance: "Rama Navami celebrates the birth of Lord Rama, the seventh incarnation of Vishnu. Rama is revered as the ideal man, embodying virtues like dharma, righteousness, and truth.",
        celebrations: "Temples are beautifully decorated and special prayers are performed. Ramayana recitations are held in homes and temples. Processions with the idol of baby Rama are taken through the streets. Special foods and sweets are prepared.",
        regional: "Rama Navami is celebrated throughout India, but with special fervor in North India and Ayodhya. In South India, it's celebrated with temple rituals and classical music performances.",
        howToCelebrate: [
            "Visit Rama temples and participate in prayers",
            "Listen to or read Ramayana recitations",
            "Prepare special sweets like kheer and puri",
            "Sing devotional songs praising Lord Rama",
            "Attend Ramlila performances if available",
            "Fast or eat sattvic (pure) food",
            "Share prasad with family and friends"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const festival = params.get('festival') || 'diwali';
    const data = festivalsData[festival];

    if (data) {
        document.getElementById('festivalTitle').textContent = data.title;
        document.getElementById('festivalDate').textContent = data.date;
        document.getElementById('detailImage').src = data.image;
        document.getElementById('significance').textContent = data.significance;
        document.getElementById('celebrations').textContent = data.celebrations;
        document.getElementById('regional').textContent = data.regional;
        
        const celebrateList = document.getElementById('howToCelebrate');
        celebrateList.innerHTML = '';
        data.howToCelebrate.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            celebrateList.appendChild(li);
        });
    }
});