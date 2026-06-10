const memories = [
  { src: "anilar/1.jpeg", date: "🎓 Ve Sahne Sırada: AA!", note: "Tüm o uykusuz gecelerin, yetiştirilemeyen konuların ve dökülen dökmelerin karşılığını aldığın o an! ", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/2.jpeg", date: "🌅 Güne Zinde Başlamak: Günaydın!", note: "Gelecek yaşında kendine çok daha iyi bakmaya söz veriyorsun. Deniz kokusu eşliğinde, güneş yeni doğarken attığın o adımlar, tüm günün enerjisini belirleyecek. Gelecekteki sen çok daha dinamik!", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/3.jpeg", date: "🍽️ Menüdeki 'Küçük' Detay", note: "Yeni yaşında yeni lezzetler denemek için oturduğun o şık restoranda, sipariş ettiğin 'Veggie' tabağından çıkan et parçası... Gelecekte dışarıda yemek yerken gözlerini menüden ayırmaman gerekecek!", emotion: "disgust", label: "TİKSİNTİ", char: "img/disgust.png" },
  { src: "anilar/4.jpeg", date: "🌧️ 3 Derecede Mahsur Kalmak", note: "Okul çıkışı, sağank bir yağmurda otobüs beklerken... Gelecekte her şey planladığın gibi gitmediğinde, o soğuk havada tablete sarılıp bir otobüs beklemek de hayatın tuzu biberi olacak.", emotion: "sadness", label: "HÜZÜN", char: "img/sadness.png" },
  { src: "anilar/5.jpeg", date: "👟 Kendine Aldığın Hediye!", note: "Kendi birikiminle, o çok istediğin ayakkabıyı aldın! Gelecekte kendine böylesi anlamlı hediyeler alabilmek... İşte emeğinin, başarının ve o ilk somut adımın en güzel kanıtı.", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/6.jpeg", date: "🚗 Bitmeyen Trafik Kabusu", note: "Okuldan eve dönerken trafiğin %95 oranında durması ve 15 dakikalık yolun 2 saate dönmesi... Gelecekte direksiyon başında sabrını test eden bu anlarda, arabada bağıra bağıra şarkı söylemek en iyi terapin olacak!", emotion: "anger", label: "ÖFKE", char: "img/anger.png" },
  { src: "anilar/7.jpeg", date: "🗣️ Anlatım Eksikliği ve Ön Sıra Kabusu", note: "Amfide en ön sıraya oturma hatasını yapıp, dersi tükürerek anlatan profesörün tam menziline girmek... Gelecekte ders dinlerken hem bıkkınlıkla gözlerini devireceğin anlardan biri.", emotion: "disgust", label: "TİKSİNTİ", char: "img/disgust.png" },
  { src: "anilar/8.jpeg", date: "📦 '3-4 Gün Gecikti!'", note: "Evde kahveni yudumlarken heyecanla beklediğin o önemli paketin bir türlü teslim edilmemesi... Gelecekte kargo takip ekranına bakıp müşteri hizmetlerine içinden söylenmek de günlük rutinlerine dahil.", emotion: "anger", label: "ÖFKE", char: "img/anger.png" },
  { src: "anilar/9.jpeg", date: "🎬 En Sevdiğin Karaktere Veda", note: "Yatağına gömülüp tam rahatlayacağını sandığın bir anda, dizinin 3. sezon 9. bölümünde en sevdiğin karakterin öldüğünü görmek... Yeni yaşında böyle kalbini çıtlatan spoiler'lardan uzak durmanı dileriz!", emotion: "sadness", label: "HÜZÜN", char: "img/sadness.png" },
  { src: "anilar/10.jpeg", date: "📐 O Kuleyi Ben Tutuyorum!", note: "Gelecekte İtalya sokaklarında kaybolup, her turistin yapması zorunlu olan o meşhur Pisa Kulesi'ni düşmekten kurtarma pozunu vermek... ", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/11.jpeg", date: "🕒 Saat 02:00: Konular Yetişmiyor!", note: "Masada üst üste yığılmış psikoloji kitapları, boş enerji içecekleri ve asla bitmeyen konular... Gelecekteki o zorlu final haftalarında, sabaha karşı 'Ben bu bölümü niye seçtim?' aydınlanması yaşayacağın o meşhur an.", emotion: "fear", label: "KORKU", char: "img/fear.png" },
  { src: "anilar/12.jpeg", date: " 🔌 Korku Psikolojisi Testi Başlasın!", note: "Geleceğin başarılı psikoloğu iş başında! Deneklerin kalp ritmini ve korku protokollerini incelerken takındığın o ciddi ve profesyonel duruş, bu meslek için yaratıldığının en büyük kanıtı.", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/13.jpeg", date: "☕ 'Arkadaşlarımla!' En Güzel Terapi", note: "Bütün o yoğun derslerin, trafiğin ve stresin ardından arkadaşlarınla bir kafede toplanıp kutu oyunu oynamak, kahkahalara boğulmak... Gelecekte seni her zaman ayakta tutacak olan şey, bu masadaki dostluklar olacak.", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/14.jpeg", date: "🧠 Zihni Notlar ve Yoğun Mesai", note: "Gece ne kadar geç olursa olsun, o kahveden alınan güçle masanın başına geri dönmek... Gelecekteki başarın, işte bu uykusuz gecelerde çıkardığın o titiz özetlerde ve akıl haritalarında saklı.", emotion: "joy", label: "NEŞE", char: "img/joy.png" },
  { src: "anilar/15.jpeg", date: "🎁 Yeni Yaşın İlk Sürprizi!", note: "Gelecek yaşının ilk hediyesi... ", emotion: "joy", label: "NEŞE", char: "img/joy.png" }
];

let currentIndex = 0;
let isAnimating = false;

// Sayfa yüklendiğinde noktaları oluştur
const dotsContainer = document.getElementById('orbCarousel');
memories.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.onclick = () => { if(!isAnimating) { currentIndex = i; updateUI(); } };
  dotsContainer.appendChild(dot);
});

function updateUI() {
  isAnimating = true;
  const m = memories[currentIndex];
  // CSS'teki duygu renklerini al
  const color = getComputedStyle(document.documentElement).getPropertyValue(`--${m.emotion}`).trim();
  
  document.documentElement.style.setProperty('--accent', color);
  
  const img = document.getElementById('mainImage');
  const textInfo = document.getElementById('textInfo');
  const charBox = document.getElementById('charBox');

  // Çıkış Animasyonu
  img.style.opacity = "0";
  textInfo.classList.remove('text-active');

  setTimeout(() => {
    // İçerikleri Değiştir
    img.src = m.src;
    document.getElementById('memoryDate').textContent = m.date;
    document.getElementById('memoryNote').textContent = m.note;
    document.getElementById('emotionTag').textContent = m.label;
    
    // Sayaç güncelleme (Örn: 01 / 15)
    document.getElementById('counter').textContent = `${(currentIndex + 1).toString().padStart(2, '0')} / ${memories.length.toString().padStart(2, '0')}`;
    
    charBox.innerHTML = `<img src="${m.char}" alt="character">`;

    // Giriş Animasyonu tetikle
    img.style.opacity = "1";
    textInfo.classList.add('text-active');

    // Aktif Noktayı Güncelle
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    
    isAnimating = false;
  }, 400);
}

function nextMemory() {
  if (isAnimating) return;
  currentIndex = (currentIndex + 1) % memories.length;
  updateUI();
}

window.onload = updateUI;