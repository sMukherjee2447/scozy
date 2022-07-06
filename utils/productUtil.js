const products = [{
        name: "HP Pavillion",
        description: "HP Pavilion Notebook is a Windows 10 laptop with a 15.60-inch display. It is powered by a Core i7 processor and it comes with 8GB of RAM.",
        price: "₹ 52,999/-",
        specs: "12th Generation Intel® Core™ i5 processor.Windows 11 Home.35.6 cm (14\") diagonal, FHD (1920 x 1080), IPS, micro-edge, BrightView, 250 nits, 45% NTSC.Intel® Iris® Xᵉ Graphics.8 GB DDR4-3200 MHz RAM (2 x 4 GB)1.41 kg.",
        box: "HP Laptop,AC power adapter, user manuals",
        categoryId: "electronics",
        image: "2022-07-06T07-53-42.153Zc06451253_8.webp",
        productId: "E-L001"
    },
    {
        name: "MacBook Air",
        description: "Apple MacBook Air 2020 is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels.",
        price: "₹ 93,900/-",
        box: "MacBook Air, USB-C Charge Cable (2 m), 30W USB-C Power Adapter",
        categoryId: "electornics",
        image: "2022-07-06T07-53-33.828ZApple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg",
        productId: "E-L002",
        specs: "13 inch Display2.0 GHz Apple M1 Chip8 GB RAM64bit Operating Systemdiamentions : 30.41 x 1.09 x 21.24 cm"
    },
    {
        name: "Lenovo Legion 5",
        price: "₹ 1,35,990/-",
        specs: "Processor. AMD Ryzen™ 7 4800H Processor (2.90 GHz, up to 4.20 GHz Max Boost, 8 Cores, 16 Threads, 8 MB Cache)Operating System. Windows 10 Home 64.Graphics. NVIDIA® GeForce® GTX 1660 Ti 4GB.Display. 15.6\" FHD (1920 x 1080) IPS, anti-glare with Dolby Vision™, 300 nits, 144Hz.",
        box: "laptop",
        categoryId: "electronics",
        image: "2022-07-06T07-53-24.684Z71IGKyL5DhL._SL1500_.jpg",
        productId: "E-L003",
        description: "Lenovo Legion 5 is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels."
    },
    {
        name: "boAt immortal 700",
        price: "₹2,499",
        specs: "black sabre, 20cms, 9cms, 50mm dynamic, 7.1 channel virtual surround sound",
        box: "boAt headphone",
        categoryId: "electronics",
        image: "2022-07-06T07-53-12.368Zboat-immortal-700.webp",
        productId: "E-H001",
        description: "This is the best gaming headphone on the town, created by boAt"
    },
    {
        name: "Redgear Shadow Blade",
        description: "Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black)",
        price: "₹ 2,199",
        specs: "Blue Switches: Shadow blade comes equipped with mechanical Blue Clicky Switches which gives you a tactile feedback of it. It also helps to increase the gaming speed by reducing the effort required to push the keys all the way through and provides a 100% typing speed bonus.\r\nLED: It has a 22 Spectrum LED Mode for the day and also for the night time. You can adjust the LED as per your requirement\r\nWindows Key-Lock: With its Windows Key Lock you can play for long hours without being any hassle or interruption.",
        productId: "E-K001",
        image: "2022-07-06T07-27-16.822Z61NKGdlO36L._SL1500_.jpg",
        box: "Keyboard",
    },
    {
        name: "HP G200 ",
        description: "HP G200 Backlit USB Wired Gaming Mouse with Ergonomic Design, All Customizable Buttons, Adjustable 4000 DPI, RGB Breathing LED Lighting, Anti-Slip Scroll Wheel / 3 Years Warranty (7QV30AA)",
        price: "₹ 1,349",
        specs: "Instantly switch between six DPI sensitivity settings to quickly respond to your gaming demands for targeting, maneuverability or speed\r\nCompatibility - Windows XP / Windows7 /Windows 8 / Windows10 and MacOS:10.3 or later\r\nInstantly switch between six DPI sensitivity settings to quickly respond to your gaming demands for targeting, maneuverability or speed Note : In case of Wireless mouse, the USB receiver will be provided inside or along with the mouse",
        productId: "E-M001",
        image: "2022-07-06T08-00-14.458Z713JDux7+LL._SL1500_.jpg",
        box: "Mouse",
    },
    {
        name: "Samsung Galaxy M32 ",
        description: "Samsung Galaxy M32 (Light Blue, 6GB RAM, 128GB | FHD+ sAMOLED 90Hz Display | 6000mAh Battery | 64MP Quad Camera",
        price: "₹16,999.00",
        specs: "Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5\r\nVersatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera\r\nMonster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2 + MicroSD\r\nAndroid v11.0, One UI 3.1 operating system with MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz",
        productId: "E-M002",
        image: "2022-07-06T10-49-50.994Z71F4jU7MRUS._SL1500_.jpg",
        box: "Mobile Phone, Charger, Headphone",
    },
    {
        name: "Samsung Galaxy M53 5G",
        description: "Samsung Galaxy M53 5G (Deep Ocean Blue, 8GB, 128GB Storage) | 108MP Camera | sAmoled+ 120Hz | 32MP Front Camera | 6nm Processor | 16GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
        price: "₹28,499.00",
        specs: "Segment Best 108MP Quad Camera Setup, with exciting features like Single Take, Object Eraser, and Photo Remaster\r\n6.7-inch Super AMOLED Plus Display, FHD+ resolution, 1080x2400 pixels with 120Hz Refresh Rate\r\nMTK D900 Octa Core 2.4GHz 6nm Processor with 4x4 Mimo Band support for a HyperFast 5G experience\r\nMassive 5000 mAh Battery | Memory, Storage & SIM: 8GB RAM | RAM Plus upto 8GB |128GB internal memory expandable up to 1TB\r\nLatest Android v12.0, One UI 4 operating system",
        productId: "E-M003",
        image: "2022-07-06T10-51-26.379Z81yL2dXKTHL._SL1500_.jpg",
        box: "Mobile",
    }
]

module.exports = products