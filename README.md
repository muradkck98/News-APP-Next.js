# News App with API Gateway

Bu proje, güncel haberleri kullanıcıya sunan bir haber uygulaması içerir. Proje, bir Node.js API Gateway ve bir Next.js Frontend uygulaması ile yapılandırılmıştır.

## İçindekiler

- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Mimari ve Tasarım Kararları](#mimari-ve-tasarım-kararları)
- [API Seçimi](#api-seçimi)
- [Frontend Uygulamasının Çalışma Şekli](#frontend-uygulamasının-çalışma-şekli)
- [Değişkenlerin Ayarlanması](#değişkenlerin-ayarlanması)
- [Varsayımlar ve Bilinen Kısıtlamalar](#varsayımlar-ve-bilinen-kısıtlamalar)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)

## Kullanılan Teknolojiler

- **Node.js:** Sunucu tarafında JavaScript çalıştırmak için.
- **Express.js:** RESTful API geliştirmek için minimal ve esnek bir web çerçevesi.
- **Next.js:** React tabanlı bir framework ile SEO uyumlu ve hızlı kullanıcı arayüzü oluşturmak için.
- **Docker:** Uygulamaların izole edilmiş ortamda çalıştırılması için konteynerleştirme.
- **News API:** Güncel haberleri almak için kullanılan bir API.

### Neden Bu Teknolojiler?

- **Node.js ve Express:** Hızlı geliştirme süreci ve ölçeklenebilirlik sunar. Özellikle JavaScript tabanlı olduğu için, frontend ve backend arasında tutarlılık sağlanır.
- **Next.js:** Sunucu tarafı render'ı ve statik site üretimi gibi özellikler sunarak SEO uyumlu bir kullanıcı deneyimi sağlar.
- **Docker:** Geliştirme ortamının tutarlılığını sağlamak ve uygulamaların kolayca dağıtımını gerçekleştirmek için kullanılır.

## Mimari ve Tasarım Kararları

Proje, aşağıdaki gibi iki ana bileşenden oluşmaktadır:

1. **API Gateway:** 
   - Tüm dış API çağrılarını yöneten bir ara katman sağlar.
   - Güvenlik amacıyla API anahtarlarını gizler ve dışarıya kapalı bir mimari sunar.

2. **Next.js Frontend:** 
   - Kullanıcı arayüzünü sunan ve API Gateway üzerinden haberleri çeken bir uygulamadır.
   - Kullanıcı etkileşimlerini ve görsel içerikleri yönetir.

## API Seçimi

**News API** kullanılmıştır çünkü:

- Kolayca erişilebilen ve iyi belgelenmiş bir API'dir.
- Çok sayıda farklı kategoride güncel haberler sağlar.
- Kullanımı ücretsiz bir planda başlar, bu nedenle geliştirme sürecinde maliyetleri düşük tutar.

### Neden API Gateway Kullanıyoruz?

API Gateway, uygulamanın dış kaynaklara erişimini merkezi bir noktada toplar. Bu, aşağıdaki avantajları sağlar:

- **Güvenlik:** API anahtarları ve hassas bilgiler gizli tutulur.
- **Tek Noktadan Yönetim:** Tüm API istekleri tek bir noktadan yönetilir, bu da izleme ve hata ayıklama süreçlerini kolaylaştırır.
- **Ölçeklenebilirlik:** API Gateway, yüksek trafikte yük dengelemesi yaparak uygulamanın performansını artırır.

## Frontend Uygulamasının Çalışma Şekli

Next.js frontend uygulaması, kullanıcıdan haber verilerini almak için API Gateway'e istek yapar. Kullanıcı arayüzünde, güncel haberler listelenir ve kullanıcı etkileşimleri üzerinden kategori seçimi yapılabilir.

### Haber Verilerini Alma:

- Frontend uygulaması, `useEffect` hook'u kullanarak API Gateway'e bir GET isteği gönderir.
- Haber verileri alındıktan sonra, kullanıcı arayüzünde görüntülenir.

### Kategorilere Göre Filtreleme:

- Kullanıcı, farklı haber kategorileri arasında geçiş yapabilir. Bu durumda, frontend uygulaması API Gateway'e yeni bir istek gönderir ve güncellenmiş haber verilerini alır.

## Değişkenlerin Ayarlanması

API anahtarlarını gizlemek ve yapılandırmalar için ortam değişkenlerini kullanmanız gerekmektedir. Aşağıdaki adımları izleyin:

1. **API Gateway Dizini İçin .env Dosyası Oluşturun:**
   ```plaintext
   API_KEY=your_news_api_key_here
2. **Frontend Dizini İçin .env.local Dosyası Oluşturun:**

    ```plaintext
    NEXT_PUBLIC_API_URL=http://localhost:5000/api/news
3. **Değişkenleri Yükleyin:**
 Projeyi başlatmadan önce, .env ve .env.local dosyalarındaki değişkenlerin doğru olduğundan emin olun.
       
## Kurulum ve Çalıştırma

### Gereksinimler

- Docker ve Docker Compose kurulu olmalıdır.

### Adımlar

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/muradkck98/News-APP-Next.js.git
   cd News-APP-Next.js
2. **API Gateway ve Frontend için Gerekli Dizini Ayarlayın:**
   - `api-gateway` ve `frontend` dizinlerinin doğru olduğundan emin olun.

3. **Docker İmajlarını Oluşturun ve Uygulamayı Başlatın:**
   ```bash
   docker-compose up --build
