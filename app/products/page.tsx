import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const productCategories = [
  {
    category: "Filter Press",
    variants: [
      {
        name: "Manual Filter Press (Capstan Closing)",
        model: "Basic Model",
        description: "This type of Filter Presses offered all ranges and types as per customer requirements. The capstan wheel is used for closing the plate pack for filter plates. A Manual Filter press is a basic Model of the Filter Press. Manual Filter press doing every operation is in manual.",
        image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 5 bar",
          maxOperatingTemp: "90°C",
          mocFilterElement: "PP (Polypropylene)",
        },
        sizes: ["300 x 300mm", "470 x 470mm", "610 x 610mm"],
        applications: ["Wood Pressed Oil", "STP", "ETP", "Chemicals", "Pharmaceuticals", "Laboratories"],
    features: [
          "Capstan wheel closing mechanism",
          "Manual operation for all functions",
          "Cost-effective solution",
          "Simple and reliable design",
          "Basic model suitable for small operations",
        ],
      },
      {
        name: "Hydraulic Filter Press (EH Model)",
        model: "EH Model",
        description: "We are manufacturing Electro Hydraulic closing mechanism. It consist of hydraulic cylinder and motor operated power pack. The Power pack activated, the cylinder moves forward and touch the filter plate and clamp the filter plates. We are offered upto 300 bar Operating pressure. This type of Filter Presses offered all ranges and types as per customer requirements.",
    image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 24 bar (up to 300 bar available)",
          maxOperatingTemp: "110°C",
          mocFilterElement: "PP (Polypropylene)",
        },
        sizes: [
          "470 x 470mm",
          "610 x 610mm",
          "760 x 760mm",
          "800 x 800mm",
          "915 x 915mm",
          "1000 x 1000mm",
          "1100 x 1100mm",
          "1200 x 1200mm",
          "1250 x 1250mm",
          "1500 x 1500mm",
    ],
    applications: [
          "Edible oil",
          "STP",
          "ETP",
          "Chemicals",
          "Pharmaceuticals",
          "Ceramic",
          "Tannery ETP",
          "Food & Beverages",
        ],
        features: [
          "Electro Hydraulic closing mechanism",
          "Hydraulic cylinder with motor operated power pack",
          "High operating pressure capability",
          "Automated hydraulic operation",
          "Up to 300 bar operating pressure available",
        ],
      },
      {
        name: "Skid Mounted Filter Press (SKID)",
        model: "SKID Model",
        description: "It consist of Filter press, feed pump, small size slurry tank if required, interconnecting pipelines, valves, gauges, fittings from filter press inlet to filter press feed pump outlet which will be mounted on an appropriate fabricated steel frame.",
        image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 7 bar",
          maxOperatingTemp: "110°C",
          mocFilterElement: "PP (Polypropylene)",
        },
        sizes: ["470 x 470mm", "610 x 610mm"],
        applications: ["Portable applications", "Small to medium scale operations", "Quick installation requirements"],
        features: [
          "Complete skid-mounted package",
          "Includes feed pump and slurry tank",
          "Interconnecting pipelines and valves",
          "Pre-fabricated steel frame",
          "Quick installation and relocation",
          "All components mounted on single skid",
    ],
  },
  {
        name: "Fully Automatic Filter Press (FAFP Model)",
        model: "FAFP Model",
        description: "Fully Automatic Filter Press systems are same as semiautomatic systems, except the complete operation, from the feeding through the end of the filtration cycle, is begun through a single 'start' pushbutton in central control panel. We manufacture fully automated advanced filter press with plate shifting and auto cake discharge along with PLC based electrical control panel and pneumatically operated control valves, sensor, and hydraulically operated bomb door drip tray. We are provided programmable logic controller (PLC), Local control panel and touch-screen panel.",
        image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 24 bar",
          maxOperatingTemp: "110°C",
          mocFilterElement: "PP (Polypropylene)",
        },
        sizes: [
          "470 x 470mm",
          "610 x 610mm",
          "760 x 760mm",
          "800 x 800mm",
          "915 x 915mm",
          "1000 x 1000mm",
          "1100 x 1100mm",
          "1200 x 1200mm",
          "1250 x 1250mm",
          "1500 x 1500mm",
        ],
        applications: [
          "Edible oil",
          "STP",
          "ETP",
          "Chemicals",
          "Pharmaceuticals",
          "Ceramic",
          "Tannery ETP",
          "Food & Beverages",
        ],
    features: [
          "Single pushbutton start operation",
          "PLC based electrical control panel",
      "Automatic plate shifting",
          "Auto cake discharge",
          "Touch-screen panel interface",
          "Pneumatically operated control valves",
          "Hydraulically operated bomb door drip tray",
          "Complete automation from feeding to discharge",
        ],
      },
      {
        name: "Semi Automatic Filter Press (SAFP Model)",
        model: "SAFP Model",
        description: "Semi Automatic Filter Press are same as a manual filter press. Only the feed pump operating automatic. Valves are operating will be manual. We are provided VFD control panel for operating feed pump. The filter press hydraulic operation are manual. customers can avail these products at industry competitive prices. Semi-automatic filter press more efficient compared to a manual filter press.",
        image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 24 bar",
          maxOperatingTemp: "110°C",
          mocFilterElement: "PP (Polypropylene)",
        },
        sizes: [
          "470 x 470mm",
          "610 x 610mm",
          "760 x 760mm",
          "800 x 800mm",
          "915 x 915mm",
          "1000 x 1000mm",
          "1100 x 1100mm",
          "1200 x 1200mm",
          "1250 x 1250mm",
          "1500 x 1500mm",
    ],
    applications: [
          "Edible oil",
          "STP",
          "ETP",
          "Chemicals",
          "Pharmaceuticals",
          "Ceramic",
          "Tannery ETP",
          "Food & Beverages",
        ],
        features: [
          "Automatic feed pump operation",
          "VFD control panel for feed pump",
          "Manual valve operation",
          "Manual hydraulic operation",
          "More efficient than manual filter press",
          "Industry competitive pricing",
          "Balanced automation and manual control",
    ],
  },
  {
        name: "High Pressure Membrane Filter Press",
        model: "Membrane Model",
        description: "Membrane Filter Presses are used for extra moisture reduction in the cake. It contains one membrane Plate which has the Thermo plaster elastomer and a companion plate made of solid Poly propylene. During the initial phase of the filtration, usually called filling cycle, the process is similar to the chamber filter press. After reaching a predefined pressure-usually around 4-7 bar-depending on the liquid characteristics, Liquid feeding is stopped and the membranes slowly inflated, using oil as squeeze medium. The cake is hereby compressed and dewatered further. This process is continued up to 21 bar pressure. Then the squeeze medium is relieved and the cake discharged. We are specially design for 30 bar membrane filter press. After getting the result as per our customer requirement.",
        image: "/membrane-filter-press-equipment.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "Up to 30 bar (special design)",
          maxOperatingTemp: "110°C",
          mocFilterElement: "PP with Thermo plaster elastomer membrane",
        },
        sizes: ["1250 x 1250mm", "1500 x 1500mm"],
        applications: ["Palm Oil", "Ceramic", "High moisture reduction applications"],
    features: [
          "Membrane plate with Thermo plaster elastomer",
          "Companion plate made of solid Polypropylene",
          "Oil as squeeze medium",
          "Up to 21 bar squeeze pressure (standard)",
          "Special 30 bar design available",
          "Extra moisture reduction in cake",
          "Enhanced dewatering capability",
        ],
      },
      {
        name: "Fully Automatic Membrane Filter Press",
        model: "FAFP Membrane Model",
        description: "Fully Automatic Membrane Filter Press systems are same as semiautomatic systems, except the complete operation, from the feeding through the end of the filtration cycle. Membrane Filter Presses are used for extra moisture reduction in the cake. We are Manufacturing Membrane filter press to several clients across the world. We are manufacturing Higher quality with international standards and quality membrane filter press. We are offered membrane squeeze pressure up to 24 bar. We are extraction additional liquid during the squeeze cycle, a solid percentage increases. We manufacture fully automated advanced filter press with PLC based electrical control panel and pneumatically operated control valves, and sensor. We are provided programmable logic controller (PLC), Local control panel and touch-screen panel.",
        image: "/membrane-filter-press-equipment.jpg",
        specifications: {
          structure: "Mild Steel",
          operatingPressure: "1 to 24 bar",
          maxOperatingTemp: "Up to 110°C",
          mocFilterElement: "PP with Membrane (Polypropylene, Synthetic Rubber NBR/EPDM, or TPE)",
        },
        sizes: [
          "610 x 610mm",
          "800 x 800mm",
          "1000 x 1000mm",
          "1200 x 1200mm",
          "1250 x 1250mm",
          "1500 x 1500mm",
    ],
    applications: [
          "Edible oil",
          "STP",
          "ETP",
          "Chemicals",
          "Pharmaceuticals",
          "Ceramic",
          "Tannery ETP",
          "Food & Beverages",
        ],
        benefits: [
          "High dry solids content in the filtration cake",
          "Lower costs of transport and storage of the cake",
          "Shortened filtration cycle",
          "Adaptability to the changing filtration conditions",
          "Possibility of efficient washing of the filtration cake",
          "Smaller size of the filter press given the same performance compared to the chamber filter press",
        ],
        advantages: [
          "Energy cost savings",
          "Higher throughput rate",
          "Higher dry solids content",
          "Shorter filtration cycles",
          "Improved wash results",
          "Easily replaceable",
          "Reduced cake washing time",
          "Increased capacity",
          "Pressure: Up to 24 bar",
          "Hydraulics: Up to 500 tons",
          "Reduced water consumption due to reduced wash times",
          "Reduced air consumption during blow-drying",
          "High Molecular Welded membrane plates",
          "Higher quality and valued end product",
          "Lesser wash water consumption",
        ],
        features: [
          "Fully automated operation",
          "PLC based electrical control panel",
          "Touch-screen panel interface",
          "Membrane squeeze pressure up to 24 bar",
          "Pneumatically operated control valves",
          "International standards quality",
          "Flexible membrane materials (PP, NBR, EPDM, TPE)",
          "Liquid or compressed-air as membrane inflation media",
          "Special safety systems for membrane protection",
          "High Molecular Welded membrane plates",
        ],
      },
      {
        name: "Stainless Steel Filter Press",
        model: "SS Model",
        description: "The Filter Press Structure Is Fabricated From Stainless Steel Which Best Suits For Food Applications. We are fabricated in different grades SS 304, SS 316, SS 316 L etc... It will Suiting our customer application requirements and these types are required for hygienic and corrosion resistant application. Stainless steel construction is possible in all sizes. We offer our clients a high quality range of stainless steel filter presses. We are fabricated Full SS frame with P.P Filter plates & Full SS frame with SS Plate & Frame filter plates.",
        image: "/industrial-filter-press-machine.jpg",
        specifications: {
          structure: "Stainless Steel (SS 304, SS 316, SS 316L)",
          operatingPressure: "1 to 7 bar",
          maxOperatingTemp: "Up to 110°C",
          mocFilterElement: "PP or SS Plate & Frame",
        },
        sizes: ["470 x 470mm", "610 x 610mm", "800 x 800mm"],
        applications: [
          "Pharmaceuticals",
          "Chemical",
          "Food products",
          "Beverages",
          "Distilleries",
          "Oil",
          "Dairy",
        ],
        features: [
          "Stainless steel construction (SS 304, SS 316, SS 316L)",
          "Hygienic design for food applications",
          "Corrosion resistant",
          "Full SS frame with PP Filter plates option",
          "Full SS frame with SS Plate & Frame option",
          "Suitable for all sizes",
          "High quality fabrication",
        ],
      },
    ],
    detailedApplications: [
      {
        title: "Waste Water Treatment Plants",
        description:
          "Our filter presses find application in effluent treatments plans, municipal sewage works, industrial purification plants and industrial acid waste neutralization. Our chamber filter presses and membrane filter presses are the optimal solution for your individual application due to their process variability and the selected filter plate and filter cloth technology. These are specially designed for the best possible filtration result, high filtration speeds, low energy costs and a high degree of dewatering.",
      },
      {
        title: "Edible Oil",
        description:
          "Filter press machines and refinery machines are used as oil purifiers in the edible oil processing industry. It is used to refine rice bran oil, coconut oil, sunflower oil, sesame oil, mustard oil, gingelly oil, and peanut oil.",
      },
      {
        title: "Ceramic",
        description:
          "The ceramic industry filter press is the main equipment for dewatering the ceramic sludge in electrical porcelain and ceramic industry. This ceramic filter is applied with traditional filtration system using traditional slurry dewatering method. It is used dewatering chemical equipment, light industry, Tiles, metallurgy, filter clay, quartz, iron oxides, and inorganic pigments environmental protection and other industries. This ceramic filter is under pressure and high resistance.",
      },
      {
        title: "Tannery Industries",
        description:
          "The tannery sector uses a lot of chemicals to obtain the end product. The chemicals are dissolved in water and sludge is created. The filter presses reduces the moisture content, volume and weight of the solid residue.",
      },
      {
        title: "Iron Ore, Mining & Minerals",
        description:
          "Filter presses in the iron ore industry are used for mechanical dewatering of finest grain suspensions. It is used for filtration of slurries. SFS Filter presses are used, among other things, in processing plants in the mining industry (mining / mining). The most common applications are used the solid-liquid separation of the ore concentrate suspension that has been concentrated by flotation and then separated from mineral by-products.",
      },
      {
        title: "Food Processing Industries",
        description:
          "The food and beverage industry places high demands on the filtration systems. Our chamber and membrane filter presses have proven themselves in a large number of applications. Filter presses from SFS are specially designed for high filtration quality. Our highly motivated, technically trained staff is also a guarantee for the development and production of innovative, market-driven products with consistently high quality.",
      },
      {
        title: "Chemical and Pharmaceutical Industries",
        description:
          "The chemical and petrochemical industry places high demands on the filtration systems and filter press architectures used in terms of chemical resistance and the relevant filtration parameters to achieve the highest possible end product quality. SFS offers comprehensive and mature filter press technologies in the field of solid-liquid separation and customer-oriented solutions to improve production, efficiency and end product quality.",
      },
      {
        title: "Insulator Industries",
        description:
          "Filter presses in the iron ore industry are used for mechanical dewatering of finest grain suspensions. It is used for filtration of slurries. SHA Filter presses are used, among other things, in processing plants in the mining industry (mining / mining). The most common applications are used the solid-liquid separation of the ore concentrate suspension that has been concentrated by flotation and then separated from mineral by-products. Membrane filter presses are preferably used here in order to achieve high quantitative yields in cake washing and high dry matter contents by means of post-pressing processes.",
      },
    ],
  },
  {
    category: "Sludge De-watering Machine",
    variants: [
      {
        name: "Multi Disk Screw Press",
        description: "Sludge Dewatering Screw Press is designed to apply three functions into one unit, in which the three zones are conditioning zone, thickening zone and dewatering zone. It is able to run continuously and automatically to dewater sludge up to 15% to 25% of Outlet Consistency. With this equipment, you can remove Sludge Thickening Tank and Filter Press. Hence, reduce footprint and less manpower needed for cleaning dewatering equipment and discharge of sludge.",
        image: "/screw-press-dewatering-machine.jpg",
        models: [
          {
            model: "SHA 0.5",
            inletFlow: "0.5 m³/hr",
            drySludge: "2-5 kg/hr",
            electricalLoad: "0.36 KW",
            dimensions: "1.50 x 0.71 x 0.95 M (L x W x H)",
            rinsingWater: "30 L/hr",
          },
          {
            model: "SHA 1.0",
            inletFlow: "1.0 m³/hr",
            drySludge: "5-10 kg/hr",
            electricalLoad: "0.36 KW",
            dimensions: "1.90 x 0.70 x 1.00 M (L x W x H)",
            rinsingWater: "40 L/hr",
          },
          {
            model: "SHA 1.5",
            inletFlow: "1.5 m³/hr",
            drySludge: "10-15 kg/hr",
            electricalLoad: "0.36 KW",
            dimensions: "2.10 x 0.80 x 1.00 M (L x W x H)",
            rinsingWater: "50 L/hr",
          },
          {
            model: "SHA 2.0",
            inletFlow: "2.0 m³/hr",
            drySludge: "15-20 kg/hr",
            electricalLoad: "0.54 KW",
            dimensions: "2.30 x 0.90 x 1.25 M (L x W x H)",
            rinsingWater: "60 L/hr",
          },
          {
            model: "SHA 3.0",
            inletFlow: "3.0 m³/hr",
            drySludge: "20-30 kg/hr",
            electricalLoad: "0.55 KW",
            dimensions: "3.00 x 0.90 x 1.20 M (L x W x H)",
            rinsingWater: "80 L/hr",
          },
          {
            model: "SHA 4.0",
            inletFlow: "4.0 m³/hr",
            drySludge: "30-40 kg/hr",
            electricalLoad: "0.55 KW",
            dimensions: "3.05 x 0.90 x 1.30 M (L x W x H)",
            rinsingWater: "100 L/hr",
          },
          {
            model: "SHA 6.0",
            inletFlow: "6.0 m³/hr",
            drySludge: "40-60 kg/hr",
            electricalLoad: "0.92 KW",
            dimensions: "3.10 x 0.95 x 1.60 M (L x W x H)",
            rinsingWater: "150 L/hr",
          },
          {
            model: "SHA 10",
            inletFlow: "10.0 m³/hr",
            drySludge: "70-100 kg/hr",
            electricalLoad: "1.25 KW",
            dimensions: "3.20 x 1.00 x 1.65 M (L x W x H)",
            rinsingWater: "200 L/hr",
          },
          {
            model: "SHA 15",
            inletFlow: "15.0 m³/hr",
            drySludge: "120-150 kg/hr",
            electricalLoad: "1.30 KW",
            dimensions: "3.40 x 1.10 x 1.65 M (L x W x H)",
            rinsingWater: "250 L/hr",
          },
          {
            model: "SHA 20",
            inletFlow: "20.0 m³/hr",
            drySludge: "160-200 kg/hr",
            electricalLoad: "1.47 KW",
            dimensions: "4.10 x 1.10 x 2.20 M (L x W x H)",
            rinsingWater: "300 L/hr",
          },
          {
            model: "SHA 25",
            inletFlow: "25.0 m³/hr",
            drySludge: "200-250 kg/hr",
            electricalLoad: "1.87 KW",
            dimensions: "4.10 x 1.10 x 2.20 M (L x W x H)",
            rinsingWater: "350 L/hr",
          },
          {
            model: "SHA 30",
            inletFlow: "30.0 m³/hr",
            drySludge: "250-300 kg/hr",
            electricalLoad: "2.75 KW",
            dimensions: "4.00 x 1.50 x 2.13 M (L x W x H)",
            rinsingWater: "450 L/hr",
          },
          {
            model: "SHA 40",
            inletFlow: "40.0 m³/hr",
            drySludge: "300-400 kg/hr",
            electricalLoad: "2.95 KW",
            dimensions: "4.30 x 1.50 x 2.20 M (L x W x H)",
            rinsingWater: "600 L/hr",
          },
          {
            model: "SHA 50",
            inletFlow: "50.0 m³/hr",
            drySludge: "410-500 kg/hr",
            electricalLoad: "3.75 KW",
            dimensions: "4.40 x 1.50 x 2.20 M (L x W x H)",
            rinsingWater: "700 L/hr",
          },
        ],
        features: [
          "Extremely Low energy consumption",
          "No requirement of Thickener or drying beds",
          "Clog-Free & small foot print",
          "Fully automatic control",
          "High resistance to oily sludge",
          "Lesser Manpower requirement",
          "Very Low water consumption",
          "Three zones: conditioning, thickening, and dewatering",
          "Continuous and automatic operation",
          "Outlet consistency: 15% to 25%",
          "Eliminates need for Sludge Thickening Tank and Filter Press",
        ],
      },
      {
        name: "Volute Screw Press",
        description: "Volute-type screw press with advanced dewatering mechanism for optimal sludge treatment.",
        image: "/screw-press-dewatering-machine.jpg",
        features: ["Volute design", "Enhanced dewatering", "Low maintenance", "Compact footprint"],
      },
    ],
  },
  {
    category: "Sludge Dryer",
    variants: [
      {
        name: "Paddle Dryer",
        description: "The Paddle dryer is suitable for DRYING & STERILIZING the sludge at a low temperature as 150-degree Celsius. This machine uses conductive heat with a horizontal mixing mechanism, so continuous operation is possible to maximize production efficiency. The special wedge-type stirring heat transfer blades in the equipment have high heat transfer efficiency. It's utilized in varied industries to extract dry powder either from solutions as high as 85% moisture or wet cake.",
        image: "/placeholder.jpg",
        workingPrinciple: [
          "The paddle dryer is compact in structure and mainly consists of a sandwich casing, a central shaft with staggered blades, inlet and outlet joints, drive mechanisms, control boxes, and other components.",
          "The mechanism, involves a closed system wherein hot water, steam, or hot fluid is used as a heating medium within the jacket, in the hollow paddle as well as in the hallow shaft.",
          "The temperature range of heating media is 80 ℃ to 250 ℃. Heating source could be steam, liquid state, such as steam, thermal oil etc.",
          "The surface of chock shaped blade has self-cleaning function. The relative movements of the product particles and the chocked shaped blades surface clean the materials attached to the blades surface",
          "The shell of hollow blade paddle dryer is Ω shape. To avoid any leakage of materials and dust. After heat transfer and drying, it is discharged out of machine through rotary joint.",
        ],
        capacityModels: [
          { model: "SHA050", feedFlow: "50 KG/HR" },
          { model: "SHA080", feedFlow: "50 to 80 KG/HR" },
          { model: "SHA100", feedFlow: "80 to 100 KG/HR" },
          { model: "SHA200", feedFlow: "180 to 200 KG/HR" },
          { model: "SHA250", feedFlow: "230 to 250 KG/HR" },
          { model: "SHA300", feedFlow: "280 to 300 KG/HR" },
          { model: "SHA400", feedFlow: "380 to 400 KG/HR" },
          { model: "SHA500", feedFlow: "480 to 500 KG/HR" },
          { model: "SHA750", feedFlow: "730 to 750 KG/HR" },
          { model: "SHA1000", feedFlow: "950 to 1000 KG/HR" },
        ],
        features: [
          "Efficient drying of sludge and paste through direct contact",
          "Low running and maintenance cost",
          "Compact construction – less floor area",
          "Minimum exhaust air quantity – no elaborate air cleaning equipment needed",
          "Special paddle form – ploughing and self-cleaning action",
          "Low temperature operation (150°C)",
          "Conductive heat with horizontal mixing mechanism",
          "High heat transfer efficiency",
          "Continuous operation capability",
          "Can handle solutions up to 85% moisture",
        ],
      },
    ],
  },
  {
    category: "DAF (Dissolved Air Flotation)",
    variants: [
      {
        name: "Dissolved Air Flotation System",
        description: "A Dissolved Air Flotation (DAF) machine is a water treatment device designed to separate suspended solids, oils, and grease from water by utilizing the principle of flotation. Purpose: DAF machines are employed in various industries and municipal wastewater treatment plants to efficiently remove contaminants and improve water quality.",
        image: "/placeholder.jpg",
        advantages: [
          "Very Low Retention Time Approx 5-20 Minutes",
          "Small Foot Print",
          "Easy To Install",
          "Ready To Use",
          "Low Chemical Consumption",
          "Higher Sludge Consistence",
          "Very Low Startup Time",
          "Efficiency 90-95%",
          "Pre-fabricated Unit",
          "Easy To Relocate",
          "Civil Cost Very Low",
        ],
        features: [
          "Efficient flotation separation",
          "Oil and grease removal",
          "Suspended solids removal",
          "Compact design",
          "Pre-fabricated construction",
          "Quick installation",
          "High efficiency (90-95%)",
          "Low chemical consumption",
        ],
      },
    ],
  },
  {
    category: "Centrifuge",
    variants: [
      {
        name: "Basket Centrifuge",
        description: "High-speed centrifugal separation for effective solid-liquid separation with fine particle handling.",
        image: "/basket-centrifuge-industrial-equipment.jpg",
        features: ["High-speed rotation", "Fine particle handling", "Lower moisture content", "Wide size range"],
      },
    ],
  },
  {
    category: "Bag Filter",
    variants: [
      {
        name: "Bag Filter System",
        description: "Efficient bag filtration system for solid-liquid separation using filter bags.",
        image: "/sludge-bag-dewatering-system.jpg",
        features: ["Reusable filter bags", "Low operation cost", "Easy maintenance", "High efficiency"],
      },
    ],
  },
  {
    category: "Pump",
    variants: [
      {
        name: "Industrial Pumps",
        description: "High-performance pumps for various industrial applications including sludge transfer and filtration.",
        image: "/placeholder.jpg",
        features: ["High performance", "Durable construction", "Various configurations", "Reliable operation"],
      },
    ],
  },
  {
    category: "Filter Press Spares",
    variants: [
      {
        name: "Filter Press Spares & Parts",
        description: "Genuine spare parts and components for filter press maintenance and repair.",
        image: "/placeholder.jpg",
        features: ["Genuine parts", "Quick delivery", "Quality assured", "Expert support"],
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 animate-slideIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">All Products</h1>
        </div>
      </nav>

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Complete Product Range</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive filtration and separation solutions for every industrial need
          </p>
        </div>

        <div className="space-y-8">
          {productCategories.map((category, categoryIdx) => (
            <Card
              key={categoryIdx}
              className="bg-card border-border overflow-hidden hover:border-primary transition"
            >
              <div className="p-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="text-primary">{categoryIdx + 1}.</span>
                  {category.category}
                </h2>

                {category.variants.length === 1 ? (
                  // Single variant - show full details
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex items-center justify-center bg-background/50 rounded-lg p-4 min-h-64">
                  <Image
                          src={category.variants[0].image || "/placeholder.svg"}
                          alt={category.variants[0].name}
                    width={400}
                          height={300}
                          className="object-contain max-h-64"
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {category.variants[0].name}
                            {category.variants[0].model && (
                              <span className="text-lg text-muted-foreground ml-2">({category.variants[0].model})</span>
                            )}
                          </h3>
                          <p className="text-foreground mb-4">{category.variants[0].description}</p>
                </div>

                        {category.variants[0].specifications && (
                  <div>
                            <h4 className="text-foreground font-semibold mb-3">Materials of Construction</h4>
                            <div className="bg-background/30 rounded-lg p-4 space-y-2">
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <span className="text-muted-foreground">Structure:</span>
                                <span className="text-foreground font-medium">
                                  {category.variants[0].specifications.structure}
                                </span>
                                <span className="text-muted-foreground">Operating Pressure:</span>
                                <span className="text-foreground font-medium">
                                  {category.variants[0].specifications.operatingPressure}
                                </span>
                                <span className="text-muted-foreground">Max Operating Temp:</span>
                                <span className="text-foreground font-medium">
                                  {category.variants[0].specifications.maxOperatingTemp}
                                </span>
                                <span className="text-muted-foreground">MOC of Filter Element:</span>
                                <span className="text-foreground font-medium">
                                  {category.variants[0].specifications.mocFilterElement}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {category.variants[0].sizes && category.variants[0].sizes.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Available Sizes</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.variants[0].sizes.map((size, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.variants[0].applications && category.variants[0].applications.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.variants[0].applications.map((app, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary/20 text-foreground rounded-md text-sm"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.variants[0].models && category.variants[0].models.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Available Models</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                            <thead className="bg-primary/10">
                              <tr>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Model
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Inlet Flow (1% Conc.)
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Dry Sludge (Kg/hr)
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Electrical Load (KW)
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Dimensions (L x W x H)
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Rinsing Water (L/hr)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.variants[0].models.map((model, i) => (
                                <tr key={i} className="hover:bg-background/50">
                                  <td className="border border-border p-2 text-sm font-medium text-foreground">
                                    {model.model}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.inletFlow}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.drySludge}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.electricalLoad}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.dimensions}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.rinsingWater}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {category.variants[0].workingPrinciple && category.variants[0].workingPrinciple.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Working Principle</h4>
                        <div className="space-y-3">
                          {category.variants[0].workingPrinciple.map((principle, i) => (
                            <div key={i} className="flex items-start gap-3 bg-background/30 rounded-lg p-4">
                              <div className="w-2 h-2 bg-chart-1 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm leading-relaxed">{principle}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.variants[0].capacityModels && category.variants[0].capacityModels.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Capacity Available</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                            <thead className="bg-primary/10">
                              <tr>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Model
                                </th>
                                <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                  Feed Flow (Kg/hr)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.variants[0].capacityModels.map((model, i) => (
                                <tr key={i} className="hover:bg-background/50">
                                  <td className="border border-border p-2 text-sm font-medium text-foreground">
                                    {model.model}
                                  </td>
                                  <td className="border border-border p-2 text-sm text-muted-foreground">
                                    {model.feedFlow}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {category.variants[0].features && category.variants[0].features.length > 0 && (
                    <div>
                        <h4 className="text-foreground font-semibold mb-3">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {category.variants[0].features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    )}

                    {category.variants[0].benefits && category.variants[0].benefits.length > 0 && (
                    <div>
                        <h4 className="text-foreground font-semibold mb-3">Benefits</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {category.variants[0].benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    )}

                    {category.variants[0].advantages && category.variants[0].advantages.length > 0 && (
                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Advantages</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {category.variants[0].advantages.map((advantage, i) => (
                          <div key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm">{advantage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    )}
                  </div>
                ) : (
                  // Multiple variants - use accordion
                  <Accordion type="single" collapsible className="w-full">
                    {category.variants.map((variant, variantIdx) => (
                      <AccordionItem
                        key={variantIdx}
                        value={`item-${categoryIdx}-${variantIdx}`}
                        className="border-border data-[state=open]:border-primary data-[state=open]:bg-primary/10 rounded-lg px-4 mb-2 transition-all duration-300 shadow-sm data-[state=open]:shadow-lg"
                      >
                        <AccordionTrigger className="text-left hover:no-underline data-[state=open]:text-primary py-6">
                          <div className="flex items-center gap-3">
                            <span className="text-primary font-semibold text-lg">•</span>
                            <span className="text-xl font-semibold text-foreground data-[state=open]:text-primary transition-colors">
                              {variant.name}
                            </span>
                            {variant.model && (
                              <span className="text-sm text-muted-foreground data-[state=open]:text-primary/90 transition-colors">
                                ({variant.model})
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="data-[state=open]:bg-primary/5 rounded-b-lg -mx-4 px-4 pb-6 pt-2">
                          <div className="pt-4 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="flex items-center justify-center bg-background/50 rounded-lg p-4 min-h-64">
                                <Image
                                  src={variant.image || "/placeholder.svg"}
                                  alt={variant.name}
                                  width={400}
                                  height={300}
                                  className="object-contain max-h-64"
                                />
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="text-foreground font-semibold mb-2">Description</h4>
                                  <p className="text-foreground text-sm leading-relaxed">{variant.description}</p>
                                </div>

                                {variant.specifications && (
                                  <div>
                                    <h4 className="text-foreground font-semibold mb-3">Materials of Construction</h4>
                                    <div className="bg-background/30 rounded-lg p-4 space-y-2">
                                      <div className="grid grid-cols-2 gap-2 text-sm">
                                        <span className="text-muted-foreground">Structure:</span>
                                        <span className="text-foreground font-medium">
                                          {variant.specifications.structure}
                                        </span>
                                        <span className="text-muted-foreground">Operating Pressure:</span>
                                        <span className="text-foreground font-medium">
                                          {variant.specifications.operatingPressure}
                                        </span>
                                        <span className="text-muted-foreground">Max Operating Temp:</span>
                                        <span className="text-foreground font-medium">
                                          {variant.specifications.maxOperatingTemp}
                                        </span>
                                        <span className="text-muted-foreground">MOC of Filter Element:</span>
                                        <span className="text-foreground font-medium">
                                          {variant.specifications.mocFilterElement}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {variant.sizes && variant.sizes.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Available Sizes</h4>
                                <div className="flex flex-wrap gap-2">
                                  {variant.sizes.map((size, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                                    >
                                      {size}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {variant.applications && variant.applications.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Applications</h4>
                                <div className="flex flex-wrap gap-2">
                                  {variant.applications.map((app, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1 bg-secondary/20 text-foreground rounded-md text-sm"
                                    >
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {variant.models && variant.models.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Available Models</h4>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                                    <thead className="bg-primary/10">
                                      <tr>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Model
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Inlet Flow (1% Conc.)
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Dry Sludge (Kg/hr)
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Electrical Load (KW)
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Dimensions (L x W x H)
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Rinsing Water (L/hr)
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {variant.models.map((model, i) => (
                                        <tr key={i} className="hover:bg-background/50">
                                          <td className="border border-border p-2 text-sm font-medium text-foreground">
                                            {model.model}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.inletFlow}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.drySludge}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.electricalLoad}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.dimensions}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.rinsingWater}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {variant.workingPrinciple && variant.workingPrinciple.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Working Principle</h4>
                                <div className="space-y-3">
                                  {variant.workingPrinciple.map((principle, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-background/30 rounded-lg p-4">
                                      <div className="w-2 h-2 bg-chart-1 rounded-full mt-2 flex-shrink-0" />
                                      <p className="text-muted-foreground text-sm leading-relaxed">{principle}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {variant.capacityModels && variant.capacityModels.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Capacity Available</h4>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                                    <thead className="bg-primary/10">
                                      <tr>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Model
                                        </th>
                                        <th className="border border-border p-2 text-left text-sm font-semibold text-foreground">
                                          Feed Flow (Kg/hr)
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {variant.capacityModels.map((model, i) => (
                                        <tr key={i} className="hover:bg-background/50">
                                          <td className="border border-border p-2 text-sm font-medium text-foreground">
                                            {model.model}
                                          </td>
                                          <td className="border border-border p-2 text-sm text-muted-foreground">
                                            {model.feedFlow}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {variant.features && variant.features.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Key Features</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {variant.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                      <p className="text-muted-foreground text-sm">{feature}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {variant.benefits && variant.benefits.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Benefits</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {variant.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 flex-shrink-0" />
                                      <p className="text-muted-foreground text-sm">{benefit}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {variant.advantages && variant.advantages.length > 0 && (
                              <div>
                                <h4 className="text-foreground font-semibold mb-3">Advantages</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {variant.advantages.map((advantage, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0" />
                                      <p className="text-muted-foreground text-sm">{advantage}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Applications Section - Separate prominent section */}
        {productCategories.find((cat) => cat.detailedApplications) && (
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/30 p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Filter Press Applications</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our filter presses are trusted across diverse industries for efficient solid-liquid separation and
                  dewatering applications
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productCategories
                  .find((cat) => cat.detailedApplications)
                  ?.detailedApplications?.map((app, appIdx) => (
                    <Card
                      key={appIdx}
                      className="bg-card/80 border-border p-6 hover:border-primary hover:shadow-lg transition-all hover:scale-105"
                    >
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-primary text-2xl font-bold">{appIdx + 1}.</span>
                        <span>{app.title}</span>
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{app.description}</p>
                    </Card>
                  ))}
              </div>
            </Card>
          </div>
        )}

        <div className="mt-20 text-center animate-fadeInUp">
          <p className="text-foreground mb-6 text-lg font-semibold">Ready to find the right solution for your needs?</p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg animate-pulse-glow">
              Request More Information
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
