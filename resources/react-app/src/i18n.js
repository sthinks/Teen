import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            katalog: "Katalog",

            test: "İletişim",
            navproje: "Projeler",
            navsolution: "Çözümler",
            navsolutionpartner: "Çözüm Ortakları",
            navsolutionabout: "Hakkımızda",
            // about sayfası
            abouttitle: "Daha İyi Bir Gelecek için Sürdürülebilir Çözümler",
            aboutcontent1:
                "Kurulduğu günden itibaren 59,000 hane halkının yıllık elektrik tüketim ihtiyaçlarına eşdeğer tasarruf sağlayan T-EEN TECHNIC, gerçekleştirdiği projelerle ve sunduğu çözümlerle Türkiye'nin 2053 yılı net sıfır emisyon hedefine katkıda bulunuyor.",
            //Çözüm ortakları,
            solpart1:
                "T-EEN TECHNIC enerji verimliliği ve iş gücü yönetimi platformu Wisera aracılığıyla, yapay zeka destekli modülleriyle enerji tüketimini optimize ediyor ve tüm iş süreçlerinde verimlilik sağlıyor.",
            solpart2:
                "T-EEN TECHNIC, yeni nesil elektrikli araç şarj istasyonu RS Şarj ile kurduğu stratejik ortaklık ile son teknolojiye sahip elektrikli araç şarj çözümleri de sunuyor.",
            //Çözümler
            sol1: "Enerji Etüd",
            sol2: "Enerji Verimliliği ve Yenilenebilir Enerji Danışmanlığı",
            sol3: "Proje Uygulama",
            sol4: "Verimlilik Artırıcı Proje (VAP) Danışmanlığı",
            sol5: "Sürdürülebilirlik ve Enerji Yönetimi",
            sol6: "Enerji İzleme Yönetimi",
            sol7: "Elektrikli Şarj Çözümleri",
            //Proje sayfası
            proje1: "SÜRDÜRÜLEBİLİRLİK VE ENERJİ YÖNETİMİ PROJELERİ",
            proje2: "ENERJİ VERİMLİLİĞİ PROJELERİ",
            proje3: "YENİLENEBİLİR ENERJİ PROJELERİ",
            proje4: "ENERJİ VERİMLİLİĞİ VE YENİLENEBİLİR ENERJİ DANIŞMANLIĞI",
            //İletişim page
            bizimle: "Bizimle iletişime geçin",
            ad: "Ad Soyad",
            telefon: "Telefon",
            konu: "Konu",
            mesaj: "Mesaj",
            gonder: "Gönder",
            footer: "Teen Technic. Her Hakkı Saklıdır.",
            enerjiver: "Enerji Verimliliği Yönetim Döngüsü",
            enerjivertext:
                "Enerji verimliliği proje süreçlerimizi sürdürülebilirlik alanında 5 adımlı bir döngüyü baz alarak yürütüyoruz.",
            timeline1: "MERSİN ŞEHİR HASTANESİ MEP YAPIM",
            timeline2: "İlk tamamlanan Kamu Özel İş Birliği Projesi",
            timeline3: "ANKARA ŞEHİR HASTANESİ MEP YAPIM",
            timeline4:
                "Avrupa’nın en büyük Hastanesi Kamu Özel İş Birliği Projesi",
            timeline5: "ALTUNİZADE OTEL MEP YAPIM",
            timeline6: "DoubleTree by Hilton Otel ve Suit",
            timeline7: "YENİLENEBİLİR ENERJİ PROJELERİ",
            timeline8: "TED İzmir Koleji",
            timeline9: "TED Kocaeli Koleji",
            timeline10: "IC Otelleri Antalya",
            timeline11: "KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ-ANTALYA",
            timeline12: "Antalya Eğitim ve Araştırma Hastanesi",
            timeline13: "Elmalı Devlet Hastanesi",
            timeline14: "KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ-DENİZLİ",
            timeline15: "Pamukkale Üniversitesi (nZEB)",
            timeline16: "19 Bina",
            timeline17: "KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ-ALANYA",
            timeline18: "Alanya Eğitim ve Araştırma Hastanesi",
            timeline19: "Alanya Adliyesi",
            timeline20: "Gazipaşa Devlet Hastanesi",
            timeline21: "ELEKTRİKLİ ARAÇ ŞARJ İSTASYON YATIRIMLARI",
            timeline22: "Ankara Bilkent Şehir Hastanesi",
            timeline23: "IC Otelleri Antalya",
            timeline24: "T.C. Sağlık Bakanlığı",
            timeline25: "ENERJİ VERİMLİLİĞİ KAMU BİNALARI PROJELERİ",
            timeline26: "Türkiye Projeleri",
            timeline27: "Avrupa Projeleri",
            timeline28: "ENERJİ VERİMLİLİĞİ İÇİN BÜTÜNSEL ÇÖZÜMLER",
            timeline29:
                "YENİLENEBİLİR ENERJİ UYGULAMALARI İÇİN TEKNOLOJİK ÇÖZÜMLER",
        },
    },
    en: {
        translation: {
            katalog: "Catalog",
            enerjivertext:
                "We carry out our energy efficiency project processes based on a 5-step cycle in the field of sustainability.",
            enerjiver: "Energy Efficiency Management Cycle and Solutions",
            test: "Contact",
            navproje: "Projects",
            navsolution: "Solutions",
            navsolutionpartner: "Solutions Partner",
            navsolutionabout: "About Us",
            //About sayfası
            abouttitle: "Sustainable Solutions for a Better Future",
            aboutcontent1:
                "Since its establishment, T-EEN TECHNIC has provided savings equivalent to the annual electricity consumption needs of 59,000 households. It continues to contribute to Turkey's 2053 net zero emission target with the projects it carries out and the solutions it offers.",
            //Çözüm ortakları,
            solpart1:
                "T-EEN TECHNIC, the energy efficiency and workforce management platform, optimizes energy consumption with artificial intelligence-powered modules and provides productivity in their processes through Wisera.",
            solpart2:
                "T-EEN TECHNIC also offers state-of-the-art electric vehicle charging solutions with its strategic partnership, the new generation electric vehicle charging station RS Şarj.",
            //Çözümler
            sol1: "Energy Survey",
            sol2: "Energy Efficiency and Renewable Energy Consultancy",
            sol3: "Project Implementation",
            sol4: "Productivity Enhancing Project (VAP) Consultancy",
            sol5: "Sustainability and Energy Management",
            sol6: "Energy Monitoring Management",
            sol7: "Electric Charging Solutions",
            //Proje sayfası
            proje1: "SUSTAINABILITY AND ENERGY MANAGEMENT PROJECTS",
            proje2: "ENERGY EFFICIENCY PROJECTS",
            proje3: "RENEWABLE ENERGY PROJECTS",
            proje4: "ENERGY EFFICIENCY AND RENEWABLE ENERGY CONSULTANCY",
            //İletişim page
            bizimle: "Contact us",
            ad: "Name surname",
            telefon: "Phone",
            konu: "Subject",
            mesaj: "Message",
            gonder: "Send",
            footer: "Teen Technic. All rights reserved.",
            timeline1: "MERSIN CITY HOSPITAL MEP CONSTRUCTION",
            timeline2: "First completed Public-Private Partnership Project",
            timeline3: "ANKARA CITY HOSPITAL MEP CONSTRUCTION",
            timeline4:
                "Europe’s Largest Hospital Public-Private Partnership Project",
            timeline5: "ALTUNIZADE HOTEL MEP CONSTRUCTION",
            timeline6: "DoubleTree by Hilton Hotel and Suit",
            timeline7: "RENEWABLE ENERGY PROJECTS",
            timeline8: "TED İzmir College",
            timeline9: "TED Kocaeli College",
            timeline10: "IC Hotels Antalya",
            timeline11: "ENERGY EFFICIENCY PROJECT IN PUBLIC BUILDINGS-ANTALYA",
            timeline12: "Antalya Training and Research Hospital",
            timeline13: "Elmalı State Hospital",
            timeline14: "ENERGY EFFICIENCY PROJECT IN PUBLIC BUILDINGS-DENIZLI",
            timeline15: "Pamukkale University (nZEB)",
            timeline16: "19 Buildings",
            timeline17: "ENERGY EFFICIENCY PROJECT IN PUBLIC BUILDINGS-ALANYA",
            timeline18: "Alanya Training and Research Hospital",
            timeline19: "Alanya Courthouse",
            timeline20: "Gazipasa State Hospital",
            timeline21: "ELECTRIC VEHICLE CHARGING INVESTMENTS",
            timeline22: "Ankara Bilkent City Hospital",
            timeline23: "IC Hotels Antalya",
            timeline24: "Republic of Türkiye Ministry of Health",
            timeline25: "ENERGY EFFICIENCY PUBLIC BUILDINGS PROJECTS",
            timeline26: "Türkiye Projects",
            timeline27: "European Projects",
            timeline28: "COMPREHENSIVE SOLUTIONS FOR ENERGY EFFICIENCY",
            timeline29:
                "TECHNOLOGICAL SOLUTIONS FOR RENEWABLE ENERGY APPLICATIONS",
        },
    },
};
i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    fallbackLng: "tr",
    resources,
});

export default i18n;
