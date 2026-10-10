# Fazla Mesai ve İzin Takibi

Kişisel ve ekip çalışma kayıtları için ilk sürüm. `dist/index.html` uygulamanın girişidir.

## Hesap kuralları
- Hafta içi: net çalışılan dakika - 480 dakika.
- Cumartesi/Pazar: çalışılan bütün dakikalar eklenir.
- Normal izin: bakiyeye etkisi yoktur.
- Fazla mesai izni: kullanılan dakika düşülür.
- 480 dakika = 1 gün izin. Negatif bakiye mümkündür.
- Kayıt girilmeyen günler otomatik düşülmez. Kişi başına günde tek kayıt vardır.
- Net süre başlangıç/bitiş farkından girilen molanın düşülmesiyle hesaplanır.
- Gece çalışması, başlangıç gününe yazılır. Resmi tatil kuralı henüz tanımlanmamıştır.

## Kullanım
1. Personel ekle.
2. Günlük çalışma veya izin kaydını gir.
3. Personel filtresiyle bakiyeleri incele.
4. JSON yedeğini düzenli indir. Yedek yükleme mevcut verilerin yerini alır.

Bu sürümde veriler yalnızca kullanılan tarayıcının localStorage alanında saklanır. Ortak veritabanı veya ekip üyeleri için ayrı giriş bulunmaz. Gerçek personel kayıtları kaynak koduna eklenmez.

## Öğrenme rehberi
- `dist/index.html`: ekran ve görünüm (HTML/CSS).
- `dist/calc.js`: dakika bazındaki hesaplama kuralları.
- `dist/app.js`: formlar, kayıtlar ve tarayıcıda saklama.
- `test.cjs`: `node test.cjs` ile hesaplama kontrolleri.

Yerel sunucu: `python3 -m http.server 8080 --directory dist` ardından http://localhost:8080 adresini aç.
