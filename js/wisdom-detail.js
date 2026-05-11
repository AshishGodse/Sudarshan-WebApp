/* Wisdom Detail Page - Dynamic Content Loading */

const wisdomData = {
    om: {
        title: "Om (ॐ)",
        mantra: "ॐ",
        romanized: "Chanting: Om",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23FF6B35' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eॐ%3C/text%3E%3C/svg%3E",
        about: "Om is the most sacred and universal mantra in Hinduism. It represents the ultimate reality (Brahman) and divine consciousness. According to Hindu philosophy, Om is the primordial sound from which all creation originated. It encompasses all existence - past, present, and future.",
        fullChanting: "Om",
        meaning: "Om is a monosyllabic word that doesn't have a literal translation. It represents the three states of consciousness: A (waking), U (dreaming), and M (deep sleep). The silence after chanting represents the fourth state - transcendental consciousness.",
        benefits: [
            "Mental peace and relaxation",
            "Enhanced concentration and focus",
            "Spiritual awakening and enlightenment",
            "Healing vibrations for body and mind",
            "Connection to universal consciousness",
            "Stress relief and anxiety reduction"
        ],
        howToChant: [
            "Sit in a comfortable position with spine straight",
            "Close your eyes and take deep breaths",
            "Inhale slowly and chant 'Om' on exhale",
            "Feel the vibration throughout your body",
            "Repeat 108 times or as long as you feel comfortable",
            "Maintain a steady rhythm and pace",
            "Meditate after chanting for best results"
        ],
        deity: "Om is considered the sound of Brahman (the ultimate reality) and is sacred to all deities in Hinduism. It's the universal mantra representing all divine power.",
        tips: [
            "Practice early morning for better results",
            "Chant in a calm and peaceful environment",
            "Use a Mala (prayer beads) to count repetitions",
            "Feel the vibration in your entire being",
            "Consistency in practice is more important than duration",
            "Don't rush; chant at a comfortable pace"
        ]
    },
    gayatri: {
        title: "Gayatri Mantra",
        mantra: "ॐ भूर्भुवः स्वः",
        romanized: "Chanting: Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23F18F01' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eॐ भूः%3C/text%3E%3C/svg%3E",
        about: "The Gayatri Mantra is one of the most revered mantras in the Vedas. It's a powerful prayer dedicated to Surya (the Sun God). This mantra is believed to bring wisdom, strength, and spiritual enlightenment. It's considered the mother of all mantras.",
        fullChanting: "Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat",
        meaning: "The mantra means: 'We meditate upon the glorious splendor of the radiant Sun God. May he inspire our thoughts and illuminate our minds.' It's a prayer for wisdom and illumination.",
        benefits: [
            "Enhanced intellectual growth and wisdom",
            "Spiritual enlightenment and awakening",
            "Divine protection and blessings",
            "Mental clarity and improved concentration",
            "Removal of negative energies",
            "Purification of mind and soul"
        ],
        howToChant: [
            "Face east during sunrise if possible",
            "Sit in a meditation pose with straight spine",
            "Take deep breaths and calm your mind",
            "Chant the mantra slowly and clearly",
            "Focus on the meaning while chanting",
            "Repeat 108 times each day",
            "Best practiced during sunrise (Brahma Muhurta)"
        ],
        deity: "Gayatri is dedicated to Surya (the Sun God) and to the divine feminine power known as Gayatri Devi. It represents the power of cosmic energy and illumination.",
        tips: [
            "Practice during sunrise for maximum benefits",
            "Maintain purity of body and mind",
            "Chant with devotion and sincerity",
            "Concentrate on the meaning",
            "Use a Rudraksha Mala for counting",
            "Practice consistently for spiritual benefits"
        ]
    },
    mahamrityunjaya: {
        title: "Mahamrityunjaya Mantra",
        mantra: "ॐ त्र्यम्बकम्",
        romanized: "Chanting: Om Tryambakam Yajamahe, Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan, Mrityor Mukshiya Maamritat",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23C1121F' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eॐ त्र्य%3C/text%3E%3C/svg%3E",
        about: "The Mahamrityunjaya Mantra is a powerful mantra dedicated to Lord Shiva. It's known as the mantra of immortality. This mantra is believed to have healing properties and protects against diseases and accidents. It brings health, prosperity, and longevity.",
        fullChanting: "Om Tryambakam Yajamahe, Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan, Mrityor Mukshiya Maamritat",
        meaning: "The mantra means: 'We worship the three-eyed Lord Shiva, who is fragrant and nourishes all beings. As the ripe fruit is liberated from its stem, so free us from bondage and death.'",
        benefits: [
            "Protection from diseases and accidents",
            "Healing and recovery from illness",
            "Longevity and healthy lifespan",
            "Spiritual growth and liberation",
            "Removal of negative energies",
            "Inner peace and mental stability"
        ],
        howToChant: [
            "Sit in a peaceful and clean place",
            "Maintain a straight posture",
            "Chant with focused intention",
            "Repeat 108 times daily",
            "Use a Rudraksha Mala for counting",
            "Chant slowly and clearly pronouncing each syllable",
            "Visualize Lord Shiva while chanting"
        ],
        deity: "This mantra is dedicated to Lord Shiva, the supreme deity representing consciousness, destruction, and transformation. It invokes Shiva's protective and healing powers.",
        tips: [
            "Practice early morning for best results",
            "Maintain consistency in your practice",
            "Chant with complete faith and devotion",
            "Combine with meditation for deeper benefits",
            "Recommended for health and wellness",
            "Can be chanted during illnesses for faster recovery"
        ]
    },
    "devi-mahatmya": {
        title: "Devi Mahatmya (Durga Saptashati)",
        mantra: "या देवी सर्वभूतेषु",
        romanized: "Chanting: Ya Devi Sarvabhuteshu...",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23FF1493' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eया देवी%3C/text%3E%3C/svg%3E",
        about: "The Devi Mahatmya is a sacred Hindu text containing 700 verses celebrating the divine feminine power through the Goddess Durga and her nine forms. It's one of the most important texts in Shaktism (worship of divine feminine power).",
        fullChanting: "Ya Devi Sarvabhuteshu, Shaktirupena Sansthita, Namastasyai Namastasyai, Namastasyai Namo Namah",
        meaning: "The text means: 'O Goddess, you are present in all beings as the power of consciousness. We bow to you, again and again we offer our salutations.'",
        benefits: [
            "Inner strength and courage",
            "Overcoming obstacles and challenges",
            "Protection from negative influences",
            "Spiritual power and transformation",
            "Fearlessness and confidence",
            "Removal of ignorance and darkness"
        ],
        howToChant: [
            "Read or listen to recitations during Navratri",
            "Study the meaning and significance",
            "Meditate on the divine feminine power",
            "Follow the 700 verses for complete benefit",
            "Practice with devotion during 9 days",
            "Combine with worship of Goddess",
            "Attend organized Devi Mahatmya recitations"
        ],
        deity: "This text is dedicated to Goddess Durga and her nine forms (Navadurga). It celebrates her victory over evil and her role as the supreme cosmic power.",
        tips: [
            "Recite during Navratri for maximum benefits",
            "Study the text to understand its philosophy",
            "Practice with sincere devotion",
            "Offer flowers and prayers to the Goddess",
            "Recommended for women's empowerment",
            "Bring strength during difficult times"
        ]
    },
    "vishnu-sahasranama": {
        title: "Vishnu Sahasranama",
        mantra: "विष्णु सहस्रनाम",
        romanized: "Chanting: Sahasranama (1000 names of Vishnu)",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%234169E1' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eविष्णु%3C/text%3E%3C/svg%3E",
        about: "The Vishnu Sahasranama is an ancient vedic hymn containing 1000 names of Lord Vishnu. Each name represents different divine qualities and aspects of the supreme being. It's recited daily by millions of devotees worldwide.",
        fullChanting: "Vishnavas cha Vishnur Bhagavan Bhagavat Prasad Atma Ananta Anantagunas...(1000 names)",
        meaning: "Each of the 1000 names describes divine attributes like: Omnipotent (all-powerful), Omniscient (all-knowing), Merciful, Protector, Sustainer, etc.",
        benefits: [
            "Divine grace and blessings",
            "Prosperity and abundance",
            "Spiritual growth and liberation",
            "Mental peace and clarity",
            "Protection and safety",
            "Fulfillment of desires"
        ],
        howToChant: [
            "Recite the 1000 names of Vishnu daily",
            "Listen to recordings of the Sahasranama",
            "Study the meaning of each name",
            "Meditate on Vishnu while chanting",
            "Chant with complete devotion",
            "Use 108 beads Mala for counting",
            "Practice in clean, peaceful surroundings"
        ],
        deity: "This Sahasranama is dedicated to Lord Vishnu, the preserver and sustainer of the universe. It's the central pillar of Vaishnavism.",
        tips: [
            "Daily recitation brings maximum benefits",
            "Study the meaning for deeper understanding",
            "Practice with sincere dedication",
            "Combine with meditation and prayers",
            "Recommended for all spiritual seekers",
            "Can be done for others' wellbeing too"
        ]
    },
    rudra: {
        title: "Rudra Mantra",
        mantra: "नमो भगवते रुद्राय",
        romanized: "Chanting: Namo Bhagavate Rudraya",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%238B4513' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eनमो भगवते%3C/text%3E%3C/svg%3E",
        about: "The Rudra Mantra is a powerful mantra dedicated to Lord Shiva in his fierce form as Rudra. Rudra is the god of storms, transformation, and cosmic destruction. This mantra invokes the protective and transformative aspects of Shiva.",
        fullChanting: "Namo Bhagavate Rudraya, Salutations to the Lord in His fierce form",
        meaning: "The mantra means: 'Salutations to Lord Rudra, the fierce and powerful manifestation of Lord Shiva.' It's an invocation of Shiva's transformative power.",
        benefits: [
            "Spiritual transformation and evolution",
            "Inner power and strength",
            "Removal of ego and illusions",
            "Cosmic consciousness awareness",
            "Protection from negative energies",
            "Fearlessness and inner peace"
        ],
        howToChant: [
            "Sit in meditation posture",
            "Focus on Shiva's cosmic form",
            "Chant with steady rhythm",
            "Repeat 108 times daily",
            "Use Rudraksha beads for counting",
            "Visualize divine light and power",
            "Meditate after chanting"
        ],
        deity: "This mantra is dedicated to Lord Shiva in his fierce form as Rudra. It represents transformation, cosmic consciousness, and divine power.",
        tips: [
            "Practice with sincere devotion",
            "Maintain consistency in your practice",
            "Combine with meditation for deeper benefits",
            "Chant during times of personal transformation",
            "Recommended for spiritual evolution",
            "Best practiced in early morning"
        ]
    },
    "hanuman-chalisa": {
        title: "Hanuman Chalisa",
        mantra: "दोहा - श्रीगुरु चरन सरोज",
        romanized: "Chanting: Shri Guru Charan Saroj Raj...",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23FF8C00' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eहनुमान%3C/text%3E%3C/svg%3E",
        about: "The Hanuman Chalisa is a devotional hymn containing 40 verses praising Lord Hanuman. Written by Tulsidas, it's one of the most popular prayers in Hinduism. Each verse celebrates Hanuman's courage, devotion, and powers.",
        fullChanting: "Shri Guru Charan Saroj Raj, Nij man mukur sudhar, Barnao Raghuvar Vimals Jas, Jo Dayak Phal Char...(40 verses)",
        meaning: "The Chalisa celebrates Hanuman's virtues, his devotion to Lord Rama, his courage, strength, and his role as the remover of obstacles. It's a prayer for protection and blessing.",
        benefits: [
            "Courage and bravery in facing challenges",
            "Overcoming obstacles and hardships",
            "Divine protection and guidance",
            "Mental strength and confidence",
            "Devotion and spiritual growth",
            "Removal of negativity"
        ],
        howToChant: [
            "Recite the 40 verses with devotion",
            "Understand the meaning of each verse",
            "Chant with focus and concentration",
            "Practice daily for best results",
            "Listen to recitations if unable to read",
            "Meditate after recitation",
            "Combine with worship of Hanuman"
        ],
        deity: "This Chalisa is dedicated to Lord Hanuman, the mighty deity known for his strength, courage, and unwavering devotion to Lord Rama.",
        tips: [
            "Recite daily for courage and protection",
            "Chant when facing difficulties",
            "Practice with sincere devotion",
            "Study the meaning for deeper understanding",
            "Recommended for all spiritual seekers",
            "Brings peace and confidence"
        ]
    },
    "bhagavad-gita": {
        title: "Bhagavad Gita",
        mantra: "योग क्षेम वहाम्यहम्",
        romanized: "Yogakshemam Vahamyaham (I carry what you lack and preserve what you have)",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23DC143C' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eगीता%3C/text%3E%3C/svg%3E",
        about: "The Bhagavad Gita is one of the most important scriptures in Hinduism. It's a dialogue between Lord Krishna and Arjuna containing 700 verses across 18 chapters. It covers philosophy, spirituality, ethics, and the path to liberation.",
        fullChanting: "The Gita covers multiple paths: Karma Yoga (yoga of action), Bhakti Yoga (yoga of devotion), and Jnana Yoga (yoga of knowledge)",
        meaning: "The Gita teaches the importance of duty (dharma), righteousness, and surrender to divine will. Krishna advises Arjuna on how to live a righteous life.",
        benefits: [
            "Clarity on life's purpose and meaning",
            "Inner peace and spiritual wisdom",
            "Understanding of dharma and duty",
            "Mental equanimity and balance",
            "Guidance for ethical living",
            "Path to liberation and enlightenment"
        ],
        howToChant: [
            "Read the Gita regularly for wisdom",
            "Study one chapter at a time",
            "Meditate on the teachings",
            "Apply the wisdom in daily life",
            "Join study groups for discussions",
            "Listen to professional recitations",
            "Combine with spiritual practice"
        ],
        deity: "The Bhagavad Gita is Krishna's teachings to Arjuna on the battlefield of Kurukshetra. It represents divine wisdom and guidance.",
        tips: [
            "Study with sincere interest and devotion",
            "Contemplate on the teachings",
            "Apply the wisdom to life challenges",
            "Read with a spiritual teacher if possible",
            "Recommended for all spiritual seekers",
            "Provides guidance for life's difficulties"
        ]
    },
    vedas: {
        title: "Vedas - The Eternal Knowledge",
        mantra: "ऋगवेद",
        romanized: "Rigveda, Yajurveda, Samaveda, Atharvaveda",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%23FF4500' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eवेद%3C/text%3E%3C/svg%3E",
        about: "The Vedas are the oldest scriptures of Hinduism, composed over 4000 years ago. They contain hymns, rituals, philosophies, and universal truths. The four Vedas are Rigveda, Yajurveda, Samaveda, and Atharvaveda.",
        fullChanting: "Each Veda contains multiple mantras and rituals. The Vedas are traditionally chanted in specific melodies called Vedic chanting.",
        meaning: "The Vedas contain knowledge about cosmic principles, human conduct, rituals, and spiritual wisdom. They form the foundation of all Hindu philosophy.",
        benefits: [
            "Universal wisdom and knowledge",
            "Understanding cosmic laws",
            "Spiritual enlightenment",
            "Guidance for righteous living",
            "Connection to eternal truths",
            "Inner transformation"
        ],
        howToChant: [
            "Study Vedic texts with qualified teachers",
            "Learn Vedic chanting if interested",
            "Attend Vedic study circles",
            "Listen to Vedic recitations",
            "Read translations and commentaries",
            "Practice meditation based on Vedic wisdom",
            "Apply teachings in daily life"
        ],
        deity: "The Vedas are considered divine revelations (shruti) given to ancient sages. They represent eternal cosmic knowledge.",
        tips: [
            "Study with sincere dedication",
            "Seek qualified teachers for guidance",
            "Practice regularly for wisdom",
            "Contemplate on the teachings",
            "Recommended for serious spiritual seekers",
            "Foundation for all Hindu spiritual practice"
        ]
    },
    "yoga-sutras": {
        title: "Yoga Sutras of Patanjali",
        mantra: "योग: चित्तवृत्ति निरोधः",
        romanized: "Yoga is the cessation of mental fluctuations",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff3e0' stroke='%239370DB' stroke-width='2'/%3E%3Ctext x='100' y='120' font-size='60' text-anchor='middle' font-family='serif' fill='%231a1a4e'%3Eयोग%3C/text%3E%3C/svg%3E",
        about: "The Yoga Sutras are 196 aphorisms that define yoga and the path to spiritual liberation. Written by Patanjali, this text is the foundation of Raja Yoga (royal path of yoga). It explains the eight limbs of yoga (Ashtanga Yoga).",
        fullChanting: "The Sutras describe various aspects: philosophy of yoga, obstacles to practice, siddhis (spiritual powers), and liberation.",
        meaning: "Yoga is defined as the complete restraint of mental fluctuations. Through disciplined practice, one achieves liberation and unity with divine consciousness.",
        benefits: [
            "Mental discipline and focus",
            "Spiritual enlightenment and liberation",
            "Inner peace and tranquility",
            "Overcoming mental obstacles",
            "Development of spiritual powers",
            "Union with divine consciousness"
        ],
        howToChant: [
            "Study Yoga Sutras with commentary",
            "Practice the eight limbs of yoga",
            "Meditate on the teachings",
            "Take yoga classes for practical understanding",
            "Combine philosophy with practice",
            "Join yoga study groups",
            "Apply teachings in daily life"
        ],
        deity: "The Yoga Sutras represent the wisdom of Patanjali and the divine knowledge of yogic practice. It's a guide to spiritual realization.",
        tips: [
            "Study with qualified yoga teachers",
            "Practice meditation and yoga asanas",
            "Maintain consistency in practice",
            "Combine philosophy with practical yoga",
            "Recommended for yoga practitioners",
            "Path to spiritual enlightenment"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const mantra = params.get('mantra') || 'om';
    const data = wisdomData[mantra];

    if (data) {
        document.getElementById('mantraTitle').textContent = data.title;
        document.getElementById('mantraText').textContent = data.mantra;
        document.getElementById('mantraRomanized').textContent = data.romanized;
        document.getElementById('about').textContent = data.about;
        document.getElementById('fullChanting').textContent = data.fullChanting;
        document.getElementById('meaning').textContent = data.meaning;
        document.getElementById('deity').textContent = data.deity;
        
        // Load benefits list
        const benefitsList = document.getElementById('benefits');
        benefitsList.innerHTML = '';
        data.benefits.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            benefitsList.appendChild(li);
        });

        // Load how to chant list
        const chantList = document.getElementById('howToChant');
        chantList.innerHTML = '';
        data.howToChant.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            chantList.appendChild(li);
        });

        // Load tips list
        const tipsList = document.getElementById('tips');
        tipsList.innerHTML = '';
        data.tips.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            tipsList.appendChild(li);
        });
    }
});