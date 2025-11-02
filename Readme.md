# E-School

E-School, okullar için geliştirilmiş modern bir yönetim sistemidir. Kullanıcı yönetimi, oturum yönetimi, rol tabanlı erişim ve güvenli giriş gibi temel özellikler sunar. Proje, Node.js (Express) ve MongoDB tabanlı bir backend ile React tabanlı bir frontend içerir.

## Özellikler

- Kullanıcı kaydı ve giriş işlemleri
- E-posta veya kullanıcı adı ile giriş
- Şifre güvenliği (bcrypt ile hashlenmiş)
- Hesap onay mekanizması
- JWT tabanlı oturum yönetimi
- Rol tabanlı erişim kontrolü (Öğrenci, Öğretmen, Yönetici vb.)
- Kullanıcı oturum geçmişi ve son giriş zamanı takibi

## Klasör Yapısı

```
e-school/
├── src/
│       ├── components/
│       ├── pages/
│       └── ...
```

## Kurulum

```sh
npm install
npm run dev
```

## Kullanım

1. Kayıt olarak veya yönetici tarafından eklenerek sisteme giriş yapın.
2. Hesabınız onaylandıktan sonra tüm özelliklere erişebilirsiniz.

## Katkı

Katkıda bulunmak için fork'layıp pull request gönderebilirsiniz.

## Lisans

MIT
