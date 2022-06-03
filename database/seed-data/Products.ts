import { IComputadora } from "../../intefaces";


export interface ISpecifications  {
    processor: string;
    videoCard: string;
    RAM: string;
    Storage: string;
    Cooler?: string;
    Screen?: string;
}

export const computadoras: IComputadora[] = [
    {
        title:"HP PAVILION 14",
        slug: 'hp-pavilion-14',
        description: "RAZONES PARA COMPRARLA, Especificaciones versátiles y fuertes, Calidad de construcción sólida, hecha para durar, Gran almacenamiento interno ",
        price: 550,
        type: "Student",
        images:"https://m.media-amazon.com/images/I/41N6Wt8GkaL._AC_.jpg" ,
        specifications: {
            processor: 'CPU: Intel Core i5-8250U de 8ª generación',
            videoCard: 'Gráficos: Intel UHD Graphics 620',
            RAM: '8G',
            Storage: '256GB SSD',
            Screen: " 14 pulgadas (1920 x 1080)"
        }
    },
    {
        title:"DELL XPS 13 (9310)",
        slug: 'dell-xps-13-(9310)',
        description: " CPU: Intel Core i7-1185G7 Gráficos: Intel Iris Xe RAM: Hasta 16GB Pantalla: 13.4 pulgadas Full HD+ LCD (1920 x 1200) Almacenamiento: 512GB Sistema Operativo: Windows 10 Home 64-bit Dimensiones: 198.70 x 295.70 x 14.80 mm Peso: 1.2 kilos",
        price: 1.300,
        type: "Student",
        images:"https://cdn1.smartprix.com/rx-iNVlLlAR8-w1200-h1200/dell-xps-13-2020-lap.jpg",
        specifications: {
            processor: 'Cora i7-1185G7',
            videoCard: 'Intel Iris Xe',
            RAM: '16G',
            Storage: '512GB SSD',
            Screen:"13.4 pulgadas Full HD+ LCD(1920 x 1200)",
        }
    },
    {
        title:"ACER CHROMEBOOK 315",
        slug:  "acer-chromebook-312",
        description: " RAZONES PARA COMPRARLA, Calidad en la pantalla, Bateria de larga duracion, Precio atractivo",
        price: 200,
        type: "Student",
        images:"https://m.media-amazon.com/images/I/71itq2xZWyL._AC_SX569_.jpg",
        specifications: {
            processor: 'Intel Celeron 3205U 1.5GHz (doble núcleo)',
            videoCard: 'Intel HD Graphics',
            RAM: '4GB',
            Storage: '32GB SSD',
            Screen:"15.6 pulgadas, 1920 x 1080",
        }
    },
    {
        title:"GOOGLE PIXELBOOK GO",
        slug: 'google-pixelbook-go',
        description: "RAZONES PARA COMPRARLA, Increíble duración de batería,  Fantástico teclado silencioso, Apariencia premium, sin el precio premium ",
        price: 850,
        type: "Student",
        images:"https://m.media-amazon.com/images/I/81sDDc7rKqL._AC_SX569_.jpg",
        specifications: {
            processor: 'Intel Core m3-i7',
            videoCard: 'Intel UHD Graphics 615 (300MHz)',
            RAM: '8G A 16GB',
            Storage: '64-256GB',
            
            Screen:"Full HD – 4K Ultra HD Molecular Display ",
        }
    },
    {
        title:"MICROSOFT SURFACE GO 2",
        slug: 'microsoft-surface-go-2',
        description: " RAZONES PARA COMPRARLA, Precio atractivo, Gran hardware, Compacta y ligera",
        price: 670,
        type: "Student",
        images:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/05/surface-go-2-surface-book-3-1935655.jpg",
        specifications: {
            processor: 'Intel Core m3 8ª generación',
            videoCard: 'Intel UHD Graphics 615',
            RAM: '4GB / 8GB',
            Storage: '64GB / 128GB',
            Screen:"10.5 pulgadas 1920 x 1280 (220 ppi)",
        }
    },
    {
        title:" Dell Inspiron 15 3000 3501",
        slug: '-dell-inspiron-15-3000-3501',
        description: "RAZONES PARA COMPRARLA, Sumamente asequible, Hardware interno sólido, Experiencia Windows 10 completa ",
        price: 700,
        type: "Student",
        images:"https://m.media-amazon.com/images/I/61mFsTOtVVL._AC_SX425_.jpg",
        specifications: {
            processor: 'Intel Core i5-1135G7 de cuatro núcleos',
            videoCard: '',
            RAM: '16 GB',
            Storage: '256 GB SSD + 1 TB HDD',
            Screen:"pantalla Full HD 1080P",
        }
    },
    {
        title:"CYBERRPOWERPC Gamer Xtreme VR Gaming PC Desktop",
        slug: 'cyberrpowerpc-gamer-xtreme-vr-gaming-pc-desktop',
        description: " RAZONESA PARA COMPRARLA, Eficaz, Versatil, Buen precio",
        price:1200 ,
        type: "Gamer",
        images:"https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SS450_.jpg",
        specifications: {
            processor: 'Intel Core i5-11600KF 3.9GHz',
            videoCard: 'GeForce RTX 3060 12GB',
            RAM: '16GB DDR4',
            Storage: '500GB PCI-E NVMe SSD, 1 TB HSS',
        }
    },
    {
        title:"SkyTech Archangel 3.0 Gaming Computer PC Desktop",
        slug: 'skytech-archangel-3.0-gaming-computer-pc-desktop',
        description: " RAZONES PARA COMPRARLA, Equipo potente, Ideal para videojuegos, Buen desempeño",
        price: 1600,
        type: "Gamer",
        images:"https://m.media-amazon.com/images/I/61Vywt1SgWL._AC_SX355_.jpg",
        specifications: {
            processor: 'Ryzen 5 3600 6-Core 3.6GHz',
            videoCard: 'RTX 3060 12GB',
            RAM: '16GB DDR4 3200Mhz',
            Storage: '1TB SSD',
            Cooler: 'ventiladores RGB'
        }
    },
    {
        title:"Skytech Prism II Gaming Computer PC Desktop",
        slug: 'skytech-prism-ii-gaming-computer-pc-desktop',
        description: " RAZONES PARA COMPRALA, Ideal para juegos y trabajo con alta neceidad de procesamiento, Buen desempeño en renderizado",
        price:3100 ,
        type: "Gamer",
        images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471869cv2d.jpg",
        specifications: {
            processor: 'AMD Ryzen 7 5800X 8-Core 3.8GHz',
            videoCard: 'RTX 3080 Ti 12G GDDR6X',
            RAM: '16GB DDR4 3200Mhz',
            Storage: '1TB NVMe Gen4 SSD',
            Cooler: 'ventiladores RGB'
        }
    },
    {
        title:"Skytech Blaze ll Gaming PC Desktop ",
        slug: 'skytech-blaze-ll-gaming-pc-desktop',
        description: " RAZONES PARA COMPRARLA, Ideal para tener una pc gamer inicial, Buen precio, Equipo para actualizar a futuro",
        price: 1000,
        type: "Gamer",
        images:"https://m.media-amazon.com/images/I/81+N8J+dKRL._AC_SY355_.jpg",
        specifications: {
            processor: 'Intel i5-10400F',
            videoCard: 'GTX 1660',
            RAM: '16G DDR4 3200Mhz',
            Storage: '1TB NVME',
            Cooler: '',
        }
    },
    {
        title:"CyberpowerPC Gamer Xtreme VR Gaming PC",
        slug: 'cyberpowerpc-gamer-xtreme-vr-gaming-pc',
        description: " RAZONE PARA COMPRARLA, Buen precio, Diseño atractivo, Versatil, Ideal para iniciar en el Mundol del gamaing",
        price: 1000,
        type: "Gamer",
        images:"https://www.nfm.com/on/demandware.static/-/Sites-nfm-master-catalog/default/dw5bb5d66e/images/062/05/62055371-1.jpg",
        specifications: {
            processor: 'Intel i5-10400F 2.9GHz',
            videoCard: 'GeForce GTX 1660 Super',
            RAM: '6GB, 8GB DDR4',
            Storage: '500GB NVMe SSD',
            Cooler: ''
        }
    },
    {
        title:"MEK HERO G1 A5636 Gaming Desktop ",
        slug:'mek-hero-g1-a5636-gaming-desktop-powered-by-zotac-amd',
        description: " RAZONES PARA COMPRARLA, Ideal para trabajo de desarrolador y deseño, Buen desempeño en juegos, Buen precio",
        price: 1500 ,
        type: "Gamer",
        images:"https://m.media-amazon.com/images/I/617NZwKPTFL._AC_SX425_.jpg",
        specifications: {
            processor: 'Ryzen 5 5600X 6 núcleos/12 hilos',
            videoCard: 'NVIDIA GeForce RTX 3060 12GB',
            RAM: '16 GB 3200 MHz DDR4',
            Storage: '500GB M.2 NVMe SSD + 1TB 7200 RPM HDD',
        }
    },
    {
        title:"HUAWEI Matebook X Pro Gris",
        slug: 'huawei-matebook-x-pro-gris',
        description:" RAZONRES PARA COMPRARLA, Cocomptadora ideal para Diseño grafico",
        price: 2000,
        type: "Worked",
        images:"https://home.ripley.com.pe/Attachment/WOP_5/2004214485583/2004214485583-1.jpg",
        specifications: {
            processor: 'Intel® Core i5, 8° generacion',
            videoCard: '',
            RAM: '8GB',
            Storage: '512 GB SSD',
            Cooler: '2',
            Screen:"Táctil"
        }
    },
    {
        title:"MSI Prestige 14 A11SCX-060ES",
        slug: 'msi-prestige-14-a11scx-060es',
        description:"RAZONES PARA COMPRARLA, Computadora ideal para Diseño grafico",
        price: 800 ,
        type: "Worked",
        images:"http://img.pccomponentes.com/articles/32/329632/1411-msi-prestige-14-evo-a11m-003es-intel-core-i7-1185g7-16gb-512gb-ssd-14.jpg",
        specifications: {
            processor: 'Intel Core i7-1185G7',
            videoCard: 'Nvidia GTX1650-4GB',
            RAM: '16GB RAM',
            Storage: '1TB SSD',
            
        }
    },
    {
        title:"ASUS VivoBook S14 S435EA-KC035T",
        slug: 'asus-vivobook-s14-s435ea-kc035t',
        description:"RAZONES PARA COMPRARLA, Computadora versatil para trabajo de diseo grafico y más...",
        price: 1200,
        type: "Worked",
        images:"https://www.worten.es/i/d26e595e1158ae8d7a4003c90d52c6db00b64708.jpg",
        specifications: {
            processor: 'Intel Core i7-1165G7',
            videoCard: 'Iris Xe Graphics',
            RAM: '16GB RAM',
            Storage: '1TB SSD',
            Screen:"14 pulgadas Full HD",
        }
    },
    {
        title:"Acer Aspire 5 A515-44",
        slug: 'acer-aspire-5-a515-44',
        description:"RAZONES PRA COMPRARLA, Equipo ideal para trabajo en ofcina o en el hogar",
        price: 600 ,
        type: "Worked",
        images: "https://www.aliteq.com/wp-content/uploads/2022/01/71wvsFL1d0L._SL1500_.jpg",
        specifications:{
            processor: 'AMD Ryzen 7 4700U',
            videoCard: 'AMD Radeon Graphics',
            RAM: '8 GB RAM',
            Storage: '512 GB SSD',
            Screen:"15.6 Full HD",
        }
    },
    {
        title:"Lenovo V14",
        slug: 'lenovo-v14',
        description:"RAZONES PARA COMPRALA, Versatilidad, Muchas utilidad, ideal para trabajar y mucho más...",
        price:510 ,
        type: "Worked",
        images: "https://media.spdigital.cl/products/8i1vivr0_fc94e705.jpg",
        specifications: {
            processor: 'Athlon 3020E',
            videoCard: 'UMA Graphics',
            RAM: '4GB RAM',
            Storage: '128GB SSD',
            Screen:"14 Pulgadas HD",
        }
    },
    {
        title:"MEDION Akoya S15449",
        slug: 'medion-akoya-s15449',
        description:" RAZONES PARA COMPRALA, Un excelente equipo para hacer trabajos en casa",
        price: 750,
        type: "Worked",
        images: "https://www.notebookcheck.org/typo3temp/_processed_/f/b/csm_2004059548_01_2e2c3c1d6d.jpg",
        specifications: {
            processor: 'Intel Core i5-1135G7',
            videoCard: 'Intel Iris Xe Graphics',
            RAM: ' 8GB de RAM',
            Storage: '512GB SSD',
            Screen:"15.6 Pulgadas FullHD",
    },
}
]