# Product Requirements Document: Kişisel Web Sitesi

## 1. Giriş

Bu belge, Workintech Frontend eğitimi Sprint Challenge kapsamında geliştirilecek olan Kişisel Web Sitesi projesinin gereksinimlerini, hedeflerini ve özelliklerini tanımlamaktadır. Proje, öğrencilerin React JS ve ilgili Frontend teknolojilerindeki yetkinliklerini sergileyerek, profesyonel bir portfolyo sitesi oluşturmalarını amaçlamaktadır.

## 2. Proje Hedefleri

- Frontend bilgilerini (HTML, CSS, JavaScript, React JS) kullanarak modern ve etkileşimli bir kişisel web sitesi geliştirmek.
- Component bazlı mimari, state yönetimi (yerel ve global), API entegrasyonu ve responsive tasarım prensiplerini uygulamak.
- Kullanıcı deneyimini (UX) ön planda tutarak, karanlık mod ve çoklu dil (Türkçe/İngilizce) desteği sunmak.
- `localStorage` kullanarak kullanıcı tercihlerini saklamak.
- Ek kütüphanelerle (Tailwind CSS, react-toastify) geliştici ve kullanıcı deneyimini zenginleştirmek.
- Projeyi `vercel.com` veya `render.com` gibi bir platformda canlıya almak.
- Projenin 4 dakikalık etkili bir sunumunu (arayüz ve kod) gerçekleştirebilmek.

## 3. Kullanıcı Kitlesi

- **Workintech Eğitmenleri:** Proje değerlendirmesi ve geri bildirim için.
- **Potansiyel İşverenler/İK Yetkilileri:** Adayın teknik becerilerini ve proje geliştirme yeteneğini incelemek için.
- **Geliştiricinin Kendisi:** Kişisel markalaşma ve projelerini sergilemek için.

## 4. Proje Özellikleri ve Gereksinimleri

### 4.1. Genel Gereksinimler

- Proje `npm create vite@latest` ile oluşturulacak.
- Sağlanan 3 tasarımdan biri seçilerek, HTML/JSX iskeleti ve CSS stilleri birebir uygulanacak.
- Renkler ve yerleşimde değişiklik yapılmayacak (sunum öncesi).
- Kişisel bilgiler (projeler, resimler vb.) geliştirici tarafından güncellenecek.

### 4.2. Arayüz (UI) ve Kullanıcı Deneyimi (UX)

- **Tasarım Uyumu:** Seçilen Figma tasarımına (kullanıcı tarafından sağlanan görsel referans alınarak) %100 uyum.
- **Component Yapısı:** Tasarımdaki her ana bölüm ayrı React component'leri olarak geliştirilecek. Bunlar genel olarak şunları içerir (tasarımdaki isimlendirme ve yapıya göre uyarlanacak):
  - Header (Logo/İsim, Dil Değiştirme Butonu, Karanlık Mod Toggle)
  - Hero (Tanıtım Metni, Alt Açıklama, Sosyal Medya/Proje Linkleri, Ana Görsel)
  - Skills (Beceri Listesi)
  - Profile (Temel Bilgiler, Hakkımda Metni, Profil Resmi)
  - Projects (Proje Kartları: Proje Resmi, Başlık, Açıklama, Kullanılan Teknolojiler, Site/Repo Linkleri)
  - Contact/Footer (İletişim Formu/Mesaj Alanı, E-posta, Sosyal Medya İkonları)
- **Karanlık Mod:** Kullanıcının seçebileceği açık ve karanlık tema.
- **Dil Desteği:** Türkçe ve İngilizce içerik. Dil seçimi kullanıcı arayüzünden değiştirilebilecek. **i18n paketi kullanılmayacak.**
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumluluk. Farklı ekran boyutları için optimize edilmiş kullanıcı deneyimi.
- **Kullanıcı Geri Bildirimleri:** `react-toastify` gibi bir kütüphane ile form gönderimi, API hataları vb. durumlar için bilgilendirme mesajları.

### 4.3. Teknik Gereksinimler

- **React JS:**
  - Fonksiyonel component'ler ve Hook'lar kullanılacak.
  - **State Yönetimi:**
    - Yerel state'ler için `useState`.
    - `props` aracılığıyla veri akışı.
  - **Global State Yönetimi:** Dil seçimi ve tema gibi global state'ler için `useContext` API (veya isteğe bağlı olarak Redux) kullanılacak. (%25 değerlendirme ağırlığı)
  - **Veri Listeleme:** Component listeleri `map` metodu ile dinamik olarak render edilecek.
- **Veri Yönetimi:**
  - Başlangıç verileri statik bir `JSON` dosyasından (`data.js` veya `data.json`) okunacak.
  - **API Entegrasyonu:** `axios` kütüphanesi ile `https://reqres.in/api/workintech` (yereldeki `data.js`'i POST ile simüle edebilir) veya başka bir sahte API servisinden veri alma/gönderme işlemi yapılacak. Bu, dış kaynakla iletişim kurabildiğini göstermek için projenin sonlarına doğru eklenecek.
- **Styling:**
  - Tercihen `Tailwind CSS` kullanılacak.
  - Alternatif olarak saf CSS veya CSS modülleri.
- **`localStorage` Kullanımı:**
  - Kullanıcının dil tercihi ve tema (açık/karanlık mod) seçimi `localStorage`'da saklanacak.
  - Sayfa yenilendiğinde bu tercihler otomatik olarak yüklenecek.
- **Kod Kalitesi:** Anlaşılır, okunabilir ve bakımı kolay kod yazılacak. Semantik HTML etiketleri kullanılacak.

### 4.4. Yayına Alma

- Proje `vercel.com` veya `render.com` üzerinde yayınlanacak.
- Daha önce geliştirilen tüm projelerin linkleri portfolyo sitesine eklenecek.

### 4.5. Sunum

- 4 dakika içinde arayüz, kullanıcı deneyimi, kod yapısı ve veri akışı etkili bir şekilde anlatılacak.

## 5. Proje Takvimi ve Durumu

### Yapılacaklar (To Do)

- [x] **Sprint Başlangıcı & Planlama**
  - [x] Proje gereksinimlerinin detaylı incelenmesi (PRD ve sağlanan görsel üzerinden).
  - [x] Kullanılacak tasarımın seçilmesi (Sağlanan görsel temel alınacak).
- [x] **Görev 1: Proje Kurulumu**
  - [x] `vite` ile React projesinin oluşturulması.
  - [x] Gerekli kütüphanelerin (`axios`, `react-toastify`, `tailwindcss` vb.) kurulması.
  - [x] Temel klasör yapısının oluşturulması (components, assets, data vb.).
- [x] **Görev 2: UI Tasarımı ve React JS Geliştirmeleri**

  - [x] **Temel Arayüz ve Component'ler:**
    - [x] Ana sayfa (App.js) ve temel layout component'inin oluşturulması.
    - [x] Header component'inin oluşturulması ve stillendirilmesi (Logo/İsim, Dil Değiştirme, Karanlık Mod Toggle).
    - [x] Hero section component'inin oluşturulması ve stillendirilmesi.
    - [x] Footer (ve/veya Contact Section) component'inin oluşturulması ve stillendirilmesi.
  - [x] **İçerik Component'leri (Görseldeki Yapıya Göre):**
    - [x] Skills (Beceriler) section component'inin oluşturulması ve stillendirilmesi (Örnek: JavaScript, React, Node.js vb. ikon ve başlıkları ile).
    - [x] Profile section component'inin oluşturulması ve stillendirilmesi (Temel Bilgiler ve Hakkımda metnini içerecek şekilde).
    - [x] Projects (Projelerim) section component'inin oluşturulması ve stillendirilmesi (Proje kartı yapısında: görsel, başlık, açıklama, teknoloji etiketleri, linkler).
  - [x] **Karanlık Mod Entegrasyonu:**
    - [x] Tema değiştirme (toggle) mekanizmasının UI'a eklenmesi.
    - [x] `useContext` ile tema state'inin global olarak yönetilmesi.
    - [x] CSS değişkenleri veya Tailwind `dark:` prefix'leri ile karanlık tema stillerinin uygulanması.
    - [x] Tema tercihinin `localStorage`'a kaydedilmesi ve okunması.
  - [x] **Statik Veri Entegrasyonu:**
    - [x] `data.js` dosyasının oluşturulması. (Tamamlandı)
    - [x] Verilerin component'lere aktarılması ve `map` ile listelenmesi (Hero, Skills, Profile, Projects, Footer için tamamlandı).
  - [x] **Dil Desteği Entegrasyonu (Türkçe/İngilizce):**
    - [x] Dil değiştirme mekanizmasının UI'a eklenmesi. (Hero component'inde mevcut)
    - [x] `useContext` ile dil state'inin global olarak yönetilmesi. (Tamamlandı)
    - [x] Metin içeriklerinin (statik `JSON` içinde) her iki dilde de hazırlanması. (Hero, Skills, Profile, Projects, Footer için tamamlandı)
    - [x] Seçilen dile göre içeriğin dinamik olarak gösterilmesi. (Hero, Skills, Profile, Projects, Footer için tamamlandı)
    - [x] Dil tercihinin `localStorage`'a kaydedilmesi ve okunması. (LanguageContext içinde tamamlandı)
  - [x] **Ek Kütüphane Entegrasyonları:**

    - [x] `react-toastify` ile form gönderimleri veya API etkileşimleri için kullanıcı bildirimlerinin eklenmesi.

  - [x] **API Entegrasyonu (Axios):**

    - [x] `axios` ile `https://reqres.in/api/workintech` adresine, **yerel `data.js` dosyasındaki verilerin bir kısmını POST isteği ile göndererek** dış kaynakla iletişim kurabildiğini gösterme. Bu işlem, öncelikli olarak API kullanım yeteneğini sergilemek amaçlı olup, sitenin ana veri kaynağı bu API olmayacaktır.
    - [x] Gelen verinin bir bölümde gösterilmesi veya konsola yazdırılması.
    - [x] Temel yüklenme (loading) ve hata (error) durumlarının yönetimi.

  - [x] **Responsive Tasarım İyileştirmeleri:**
    - [x] Tüm component'lerin ve sayfa düzeninin farklı ekran boyutlarında (mobil, tablet, masaüstü) test edilmesi.
    - [x] Medya sorguları (media queries) veya Tailwind responsive prefix'leri (`sm:`, `md:`, `lg:`) ile gerekli düzenlemelerin yapılması.

- [ ] **Görev 3: Yayına Alma**
  - [x] Projenin `git` ile versiyon kontrol sistemine eklenmesi (GitHub).
  - [x] Projenin Vercel veya Render.com'a deploy edilmesi.
  - [x] Canlı linkin çalışır durumda olduğunun kontrol edilmesi.
  - [ ] Diğer projelerin linklerinin portfolyo sitesine eklenmesi.
- [ ] **Sunuma Hazırlık:**
  - [ ] 4 dakikalık sunum içeriğinin hazırlanması (arayüz demosu, önemli kod bölümleri, veri akışı).
  - [ ] Sunum provası yapılması.

### Yapıldı (Done)

- [x] Proje gereksinimlerinin ve kapsamının belirlenmesi (Bu PRD dokümanının ilk taslağı oluşturuldu).
- [ ] (Proje ilerledikçe burası güncellenecek)

## 6. Kapsam Dışı (Out of Scope)

- i18n gibi hazır dil yönetimi paketlerinin kullanılması (Özellikle `useContext` veya Redux ile çözüm isteniyor).
- Tasarımda (renkler, yerleşim) orijinalinden farklı büyük değişiklikler yapılması (sunumdan sonra serbest).
- Karmaşık backend işlemleri veya gerçek bir veritabanı entegrasyonu.
- Kullanıcı girişi, authentication gibi özellikler (eğer mock API bunu zorunlu kılmıyorsa).

## 7. Değerlendirme Kriterleri (Özet)

1.  Sunum ve Zamanlama (%4)
2.  HTML Yapısı, Semantik Tagler ve CSS/Hizalama (%12)
3.  Responsive Tasarım ve Karanlık Tema (%15)
4.  Component'lere Bölme ve `map` Kullanımı (%7)
5.  React Temel Prensipleri (State, Props, Veri Akışı) (%8)
6.  API Entegrasyonu (Axios) (%7)
7.  Ek Kütüphane Kullanımı (Tailwind, Toastify vb.) (%10)
8.  `localStorage` Kullanımı (%8)
9.  Global Store Kullanımı (Context API/Redux) (%25)
10. Projeyi Yayınlama (%4)
