const categoryMeta = [
  {
    id: "全部",
    description: "显示全部专题资源。"
  },
  {
    id: "地理空间专题数据",
    description: "土地覆盖、土壤、水系、湖泊和地表水等基础空间底图。"
  },
  {
    id: "气候专题",
    description: "气候基准面、再分析、时序气候和未来情景数据。"
  },
  {
    id: "生物多样性专题",
    description: "观测记录、群落监测、海洋生物多样性和长期时间序列。"
  },
  {
    id: "保护地专题",
    description: "保护地、OECM、保护成效与关键生物多样性区域。"
  },
  {
    id: "物种编目及生态性状",
    description: "物种名录、红色名录、植物与动物性状数据库。"
  },
  {
    id: "人类活动与社会经济专题",
    description: "人口、土地利用、夜间灯光、人类压力等人地耦合数据。"
  },
  {
    id: "生态学数据论文专题",
    description: "高价值数据论文、数据描述论文和核心方法参考。"
  }
];

const heatLabel = {
  4: "旗舰",
  3: "高热",
  2: "常用",
  1: "专题"
};

const resources = [
  {
    id: "esa-worldcover",
    category: "地理空间专题数据",
    title: "ESA WorldCover 10 m",
    org: "European Space Agency",
    description: "全球 10 m 土地覆盖产品，适合栖息地制图、土地利用变化评估和保护地覆盖分析。",
    access: "开放下载",
    license: "CC BY 4.0",
    version: "2021 v200",
    updated: "2022",
    year: 2022,
    heat: 4,
    tags: ["land cover", "10 m", "遥感", "全球"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://esa-worldcover.org/en/data-access",
    secondaryLabel: "数据 DOI",
    secondaryUrl: "https://doi.org/10.5281/zenodo.7254221"
  },
  {
    id: "soilgrids",
    category: "地理空间专题数据",
    title: "SoilGrids 2.0",
    org: "ISRIC - World Soil Information",
    description: "全球标准化土壤属性栅格，适合植物分布、生态位建模和生态系统功能分析。",
    access: "开放下载 / API",
    license: "开放使用，遵守 ISRIC 条款",
    version: "2.0",
    updated: "2021",
    year: 2021,
    heat: 4,
    tags: ["soil", "edaphic", "API", "土壤"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.isric.org/explore/soilgrids",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.5194/soil-7-217-2021"
  },
  {
    id: "hydrolakes",
    category: "地理空间专题数据",
    title: "HydroLAKES",
    org: "HydroSHEDS / McGill University",
    description: "全球湖泊多边形数据库，常用于淡水生态、栖息地连通性和保护规划研究。",
    access: "开放下载",
    license: "开放学术使用",
    version: "1.0",
    updated: "2018",
    year: 2018,
    heat: 3,
    tags: ["lakes", "freshwater", "hydrology", "多边形"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.hydrosheds.org/products/hydrolakes",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1038/sdata.2018.54"
  },
  {
    id: "hydrorivers",
    category: "地理空间专题数据",
    title: "HydroRIVERS / HydroSHEDS",
    org: "HydroSHEDS",
    description: "全球河流网络及属性数据，是流域生态学、淡水生物地理和连通性分析的重要底图。",
    access: "开放下载",
    license: "开放学术使用",
    version: "HydroRIVERS",
    updated: "2013",
    year: 2013,
    heat: 3,
    tags: ["rivers", "drainage", "basins", "水系"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.hydrosheds.org/products/hydrorivers",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1002/hyp.9740"
  },
  {
    id: "global-surface-water",
    category: "地理空间专题数据",
    title: "Global Surface Water Explorer",
    org: "European Commission JRC",
    description: "基于 Landsat 的全球地表水动态数据，适合湿地、河湖变化和生态系统服务分析。",
    access: "开放下载 / 可视化",
    license: "开放使用",
    version: "1984-present explorer",
    updated: "2016",
    year: 2016,
    heat: 3,
    tags: ["surface water", "wetlands", "Landsat", "变化"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://global-surface-water.appspot.com/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1038/nature20584"
  },
  {
    id: "era5-land",
    category: "气候专题",
    title: "ERA5-Land",
    org: "Copernicus Climate Data Store / ECMWF",
    description: "高频率陆面再分析数据，适合极端事件、时间序列分析和过程驱动研究。",
    access: "开放下载 / API",
    license: "Copernicus 开放条款",
    version: "Monthly means",
    updated: "持续更新",
    year: 2025,
    heat: 4,
    tags: ["reanalysis", "land surface", "monthly", "extremes"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land-monthly-means",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.5194/essd-13-4349-2021"
  },
  {
    id: "chelsa",
    category: "气候专题",
    title: "CHELSA V2.1",
    org: "Climatologies at High Resolution for the Earth's Land Surface Areas",
    description: "高分辨率全球气候表面和生物气候变量，山地地区表现尤为突出，常用于物种分布模型。",
    access: "开放下载",
    license: "开放使用，遵守发布条款",
    version: "V2.1",
    updated: "2023",
    year: 2023,
    heat: 4,
    tags: ["bioclim", "high resolution", "mountains", "species distribution"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://chelsa-climate.org/downloads/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1038/sdata.2017.122"
  },
  {
    id: "worldclim",
    category: "气候专题",
    title: "WorldClim 2.1",
    org: "WorldClim",
    description: "生态学和生物地理学中使用最广的全球气候栅格之一，提供历史、生物气候与未来情景数据。",
    access: "开放下载",
    license: "开放学术使用",
    version: "2.1",
    updated: "2020",
    year: 2020,
    heat: 4,
    tags: ["bioclim", "climate normals", "CMIP6", "SDM"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.worldclim.org/data/worldclim21.html",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1002/joc.5086"
  },
  {
    id: "terraclimate",
    category: "气候专题",
    title: "TerraClimate",
    org: "Climatology Lab",
    description: "全球月尺度气候与气候水量平衡数据，适合生态水文和干旱胁迫分析。",
    access: "开放下载",
    license: "开放使用",
    version: "~4 km monthly",
    updated: "2020",
    year: 2020,
    heat: 3,
    tags: ["water balance", "monthly", "drought", "evapotranspiration"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.climatologylab.org/terraclimate/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1038/sdata.2017.191"
  },
  {
    id: "cru-ts",
    category: "气候专题",
    title: "CRU TS 4.08 / 4.09",
    org: "Climatic Research Unit, University of East Anglia",
    description: "长时间序列全球气候时序数据，适合历史趋势分析、驱动归因和长期变化研究。",
    access: "开放下载",
    license: "学术研究常用",
    version: "1901-2023+",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["time series", "trend", "historical climate", "monthly"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://crudata.uea.ac.uk/cru/data/hrg/",
    secondaryLabel: "文档页",
    secondaryUrl: "https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.08/"
  },
  {
    id: "gbif",
    category: "生物多样性专题",
    title: "GBIF Occurrence Data",
    org: "Global Biodiversity Information Facility",
    description: "全球最重要的物种观测与馆藏记录门户之一，是宏观生态学和生物地理学的基础数据源。",
    access: "开放门户 / 下载 / API",
    license: "按数据集许可（CC0 / CC BY / CC BY-NC）",
    version: "持续更新",
    updated: "门户持续更新",
    year: 2024,
    heat: 4,
    tags: ["occurrence", "museum records", "API", "global"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.gbif.org/occurrence/search",
    secondaryLabel: "引用说明",
    secondaryUrl: "https://www.gbif.org/citation-guidelines"
  },
  {
    id: "ebird",
    category: "生物多样性专题",
    title: "eBird Status and Trends",
    org: "Cornell Lab of Ornithology",
    description: "全球鸟类分布、季节动态与相对丰度产品，适合迁徙、保护优先区和气候响应分析。",
    access: "开放下载（遵守产品条款）",
    license: "eBird Status and Trends Terms of Use",
    version: "2023 estimates",
    updated: "2025-04-30 发布",
    year: 2025,
    heat: 4,
    tags: ["birds", "citizen science", "abundance", "migration"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://science.ebird.org/en/status-and-trends",
    secondaryLabel: "数据访问说明",
    secondaryUrl: "https://science.ebird.org/en/status-and-trends/download-data-products"
  },
  {
    id: "obis",
    category: "生物多样性专题",
    title: "OBIS",
    org: "Ocean Biodiversity Information System",
    description: "全球海洋生物多样性记录平台，适合海洋宏生态、分布格局和保护规划研究。",
    access: "开放门户 / 下载 / API",
    license: "按数据集许可",
    version: "持续更新",
    updated: "门户持续更新",
    year: 2024,
    heat: 3,
    tags: ["marine", "occurrence", "API", "oceans"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://obis.org/",
    secondaryLabel: "API 文档",
    secondaryUrl: "https://api.obis.org/"
  },
  {
    id: "map-of-life",
    category: "生物多样性专题",
    title: "Map of Life",
    org: "Map of Life",
    description: "集成分布范围、观测记录和模型产品的生物多样性平台，适合大尺度多类群分析。",
    access: "门户访问 / 部分数据开放",
    license: "依项目与产品而异",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2023,
    heat: 3,
    tags: ["species maps", "ranges", "integration", "biodiversity"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://mol.org/",
    secondaryLabel: "项目介绍",
    secondaryUrl: "https://auth.mol.org/about"
  },
  {
    id: "predicts",
    category: "生物多样性专题",
    title: "PREDICTS",
    org: "Natural History Museum / PREDICTS Project",
    description: "全球陆地局地生物多样性对土地利用和人类压力响应的核心数据库。",
    access: "开放说明 / 数据入口",
    license: "遵守 NHM / PREDICTS 条款",
    version: "持续更新数据库",
    updated: "2023 勘误后持续维护",
    year: 2023,
    heat: 4,
    tags: ["land use", "community", "local biodiversity", "responses"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.nhm.ac.uk/our-science/our-work/biodiversity/predicts.html",
    secondaryLabel: "数据论文",
    secondaryUrl: "https://doi.org/10.1002/ece3.1303"
  },
  {
    id: "biotime",
    category: "生物多样性专题",
    title: "BioTIME 2.0",
    org: "University of St Andrews",
    description: "全球生物多样性时间序列数据库，适合群落变化、时间 beta 多样性和变化速率分析。",
    access: "开放下载",
    license: "请按站点要求引用",
    version: "2.0",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["time series", "community change", "abundance", "long-term"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://biotime.st-andrews.ac.uk/download.php",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/geb.70003"
  },
  {
    id: "splotopen",
    category: "生物多样性专题",
    title: "sPlotOpen",
    org: "sPlot Consortium",
    description: "全球开放植被样方数据库，适合群落生态、生物地理和植物多样性格局研究。",
    access: "开放下载",
    license: "开放再利用，遵守引用要求",
    version: "open release",
    updated: "2021",
    year: 2021,
    heat: 3,
    tags: ["vegetation plots", "plants", "communities", "biogeography"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://splotopen.ipk-gatersleben.de/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/geb.13346"
  },
  {
    id: "wdpca",
    category: "保护地专题",
    title: "Protected Planet / WDPCA",
    org: "UNEP-WCMC / IUCN",
    description: "全球保护地与 OECM 的核心官方数据库，适合保护覆盖、空缺分析和全球指标核算。",
    access: "开放下载（非商业）",
    license: "Protected Planet Terms; 非商业研究友好",
    version: "WDPCA monthly release",
    updated: "2026-03",
    year: 2026,
    heat: 4,
    tags: ["protected areas", "OECM", "coverage", "global policy"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.protectedplanet.net/en",
    secondaryLabel: "最近更新说明",
    secondaryUrl: "https://www.protectedplanet.net/en/monthly-release-news/march-2026-update-of-the-wdpca-and-gd-pame"
  },
  {
    id: "protected-planet-api",
    category: "保护地专题",
    title: "Protected Planet API v4",
    org: "Protected Planet",
    description: "面向程序化分析的保护地 API，适合自动化拉取边界、属性和状态字段。",
    access: "API 申请 key",
    license: "非商业使用",
    version: "v4",
    updated: "2025-11 后启用新结构",
    year: 2025,
    heat: 3,
    tags: ["API", "protected areas", "automation", "WDPCA"],
    primaryLabel: "API 文档",
    primaryUrl: "https://api.protectedplanet.net/",
    secondaryLabel: "字段变更说明",
    secondaryUrl: "https://wcmc.io/WDPA_changes_2025"
  },
  {
    id: "gd-pame",
    category: "保护地专题",
    title: "GD-PAME",
    org: "Protected Planet",
    description: "全球保护地管理有效性评估数据库，适合从“保护地存在”进一步扩展到“保护地效果”研究。",
    access: "通过 Protected Planet 获取",
    license: "遵守 Protected Planet 条款",
    version: "随月度更新发布",
    updated: "2026-03",
    year: 2026,
    heat: 2,
    tags: ["management effectiveness", "protected areas", "governance", "outcomes"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.protectedplanet.net/en/thematic-areas/protected-planet-report",
    secondaryLabel: "最近更新说明",
    secondaryUrl: "https://www.protectedplanet.net/en/monthly-release-news/march-2026-update-of-the-wdpca-and-gd-pame"
  },
  {
    id: "kba",
    category: "保护地专题",
    title: "World Database of Key Biodiversity Areas",
    org: "Key Biodiversity Areas Partnership",
    description: "全球关键生物多样性区域数据，对保护优先区识别和空缺分析非常重要。",
    access: "申请获取 / 门户浏览",
    license: "遵守 KBA 数据使用条款",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 3,
    tags: ["KBA", "prioritization", "conservation planning", "sites"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.keybiodiversityareas.org/kba-data/request",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.keybiodiversityareas.org/"
  },
  {
    id: "catalogue-of-life",
    category: "物种编目及生态性状",
    title: "Catalogue of Life",
    org: "Catalogue of Life Consortium",
    description: "全球最权威的物种名录基础设施之一，是物种名清洗、同物异名处理和 taxonomy backbone 的关键资源。",
    access: "开放查询 / 下载",
    license: "CC BY",
    version: "XR 2026-02-13",
    updated: "2026-02-13",
    year: 2026,
    heat: 4,
    tags: ["taxonomy", "checklist", "species backbone", "nomenclature"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.catalogueoflife.org/",
    secondaryLabel: "版本说明",
    secondaryUrl: "https://www.catalogueoflife.org/building/releases"
  },
  {
    id: "iucn-spatial",
    category: "物种编目及生态性状",
    title: "IUCN Red List Spatial Data",
    org: "IUCN Red List",
    description: "全球受威胁物种空间范围数据，是保护规划、灭绝风险评估和系统保护分析的核心来源。",
    access: "开放下载（非商业）",
    license: "IUCN Terms and Conditions of Use",
    version: "bulk spatial downloads",
    updated: "2025-10-10",
    year: 2025,
    heat: 4,
    tags: ["threat status", "range maps", "red list", "conservation"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://nrl.iucnredlist.org/resources/spatial-data-download",
    secondaryLabel: "丰富度产品",
    secondaryUrl: "https://nrl.iucnredlist.org/resources/other-spatial-downloads"
  },
  {
    id: "try",
    category: "物种编目及生态性状",
    title: "TRY Plant Trait Database",
    org: "TRY Initiative",
    description: "植物功能性状研究的旗舰数据库，适合 trait-based macroecology、群落组装和生态系统功能分析。",
    access: "注册申请 / 研究使用",
    license: "遵守 TRY data policy",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["plant traits", "functional traits", "trait-based ecology", "global"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.try-db.org/TryWeb/Home.php",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/1365-2435.13625"
  },
  {
    id: "gift",
    category: "物种编目及生态性状",
    title: "GIFT",
    org: "Global Inventory of Floras and Traits",
    description: "全球区域植物名录与功能性状整合平台，非常适合岛屿生物地理、植物区系与 trait biogeography 研究。",
    access: "官网 / 数据说明 / 部分数据通过 TRY 开放",
    license: "依数据产品而异",
    version: "持续更新",
    updated: "2023 公共 trait 合并说明",
    year: 2023,
    heat: 3,
    tags: ["floras", "traits", "plants", "regional checklists"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gift.uni-goettingen.de/home",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/jbi.13623"
  },
  {
    id: "avonet",
    category: "物种编目及生态性状",
    title: "AVONET",
    org: "Figshare / AVONET Team",
    description: "覆盖全球鸟类的形态、生态和地理数据，是鸟类功能多样性研究的热门标准数据集。",
    access: "开放下载",
    license: "Figshare 开放共享",
    version: "v4",
    updated: "2024-07-29",
    year: 2024,
    heat: 3,
    tags: ["birds", "traits", "morphology", "functional diversity"],
    primaryLabel: "数据入口",
    primaryUrl: "https://figshare.com/articles/dataset/AVONET_morphological_ecological_and_geographical_data_for_all_birds_Tobias_et_al_2021_Ecology_Letters_/16586228/4",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/ele.13898"
  },
  {
    id: "eltontraits",
    category: "物种编目及生态性状",
    title: "EltonTraits 1.0",
    org: "VertLife / Ecological Archives",
    description: "全球鸟类和哺乳动物取食生态性状数据库，是食物网、功能群和生态位分析中的经典资源。",
    access: "开放下载",
    license: "Ecological Archives 数据共享条款",
    version: "1.0",
    updated: "2014",
    year: 2014,
    heat: 3,
    tags: ["diet", "foraging", "birds", "mammals"],
    primaryLabel: "数据入口",
    primaryUrl: "https://vertlife.org/data/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1890/13-1917.1"
  },
  {
    id: "pantheria",
    category: "物种编目及生态性状",
    title: "PanTHERIA",
    org: "Ecological Archives",
    description: "全球现生和近现代灭绝哺乳动物生活史、生态与地理数据库，适合宏观生态与灭绝风险研究。",
    access: "开放下载",
    license: "Ecological Archives 数据共享条款",
    version: "1.0",
    updated: "2009",
    year: 2009,
    heat: 2,
    tags: ["mammals", "life history", "traits", "macroecology"],
    primaryLabel: "数据入口",
    primaryUrl: "https://esapubs.org/archive/ecol/E090/184/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1890/08-1494.1"
  },
  {
    id: "worldpop",
    category: "人类活动与社会经济专题",
    title: "WorldPop",
    org: "WorldPop, University of Southampton",
    description: "高分辨率全球人口空间分布与人口结构数据，是保护规划和暴露风险分析的热门数据源。",
    access: "开放下载",
    license: "开放使用，遵守 WorldPop 条款",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["population", "high resolution", "exposure", "human pressure"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.worldpop.org/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1038/sdata.2017.4"
  },
  {
    id: "gpwv4",
    category: "人类活动与社会经济专题",
    title: "GPWv4 Population Density",
    org: "NASA Earthdata / CIESIN SEDAC",
    description: "全球人口密度的基础标准产品，适合基线人口暴露、可达性和人类影响建模。",
    access: "开放下载",
    license: "EOSDIS open data",
    version: "v4.11",
    updated: "2020 cohort",
    year: 2020,
    heat: 3,
    tags: ["population density", "SEDAC", "global baseline", "gridded population"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.earthdata.nasa.gov/data/catalog/esdis-ciesin-sedac-gpwv4-popdens-4.0",
    secondaryLabel: "数据 DOI",
    secondaryUrl: "https://doi.org/10.7927/H4NP22DQ"
  },
  {
    id: "hyde",
    category: "人类活动与社会经济专题",
    title: "HYDE Portal",
    org: "Copernicus Land Change Lab / Utrecht University",
    description: "历史人口与土地利用重建数据库，适合长期土地利用变化、Anthropocene 和基准重建研究。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "portal launched 2024",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["land use history", "population history", "Holocene", "long-term"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://landuse.sites.uu.nl/hyde-portal/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.5194/essd-9-927-2017"
  },
  {
    id: "luh2",
    category: "人类活动与社会经济专题",
    title: "LUH2",
    org: "Land-Use Harmonization Project",
    description: "连接历史重建与未来情景的土地利用变化数据库，是 CMIP6 和生物多样性情景研究的重要输入。",
    access: "开放下载",
    license: "开放使用",
    version: "LUH2 for CMIP6",
    updated: "2020",
    year: 2020,
    heat: 3,
    tags: ["land-use change", "scenarios", "CMIP6", "global change"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://luh.umd.edu/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.5194/gmd-13-5425-2020"
  },
  {
    id: "viirs-nightlights",
    category: "人类活动与社会经济专题",
    title: "VIIRS Nighttime Lights",
    org: "Earth Observation Group",
    description: "夜间灯光数据可作为人类活动强度、基础设施与城市化水平的重要代理变量。",
    access: "开放下载",
    license: "开放使用",
    version: "Annual composites",
    updated: "持续更新",
    year: 2024,
    heat: 2,
    tags: ["night lights", "urbanization", "human activity", "remote sensing"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://eogdata.mines.edu/products/vnl/",
    secondaryLabel: "平台主页",
    secondaryUrl: "https://eogdata.mines.edu/"
  },
  {
    id: "human-footprint",
    category: "人类活动与社会经济专题",
    title: "Human Footprint",
    org: "Nature Communications / Dryad-linked dataset",
    description: "全球人类压力综合指标，适合灭绝风险、保护空缺和生态完整性研究。",
    access: "论文与数据仓储入口",
    license: "开放论文；数据见仓储说明",
    version: "time series footprint maps",
    updated: "2018",
    year: 2018,
    heat: 3,
    tags: ["human pressure", "extinction risk", "conservation", "impact"],
    primaryLabel: "代表论文",
    primaryUrl: "https://www.nature.com/articles/s41467-018-07049-5",
    secondaryLabel: "数据仓储 DOI",
    secondaryUrl: "https://doi.org/10.5061/dryad.052q5"
  },
  {
    id: "paper-worldclim",
    category: "生态学数据论文专题",
    title: "WorldClim 2 Data Paper",
    org: "Journal of Climatology · 2017",
    description: "全球 1 km 空间分辨率气候面数据论文，是生态位建模和气候敏感性分析的基础文献。",
    access: "开放 DOI",
    license: "期刊页面",
    version: "10.1002/joc.5086",
    updated: "2017",
    year: 2017,
    heat: 4,
    tags: ["climate", "worldclim", "data paper", "bioclim"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1002/joc.5086",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://www.worldclim.org/data/worldclim21.html"
  },
  {
    id: "paper-chelsa",
    category: "生态学数据论文专题",
    title: "CHELSA Climatologies Data Paper",
    org: "Scientific Data · 2017",
    description: "高分辨率地形修正气候表面数据论文，尤其适合山地和复杂地形研究。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.1038/sdata.2017.122",
    updated: "2017",
    year: 2017,
    heat: 3,
    tags: ["climate", "CHELSA", "topography", "data paper"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1038/sdata.2017.122",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://chelsa-climate.org/downloads/"
  },
  {
    id: "paper-soilgrids",
    category: "生态学数据论文专题",
    title: "SoilGrids 2.0 Data Paper",
    org: "SOIL · 2021",
    description: "新一代全球土壤属性制图论文，是土壤生态与植物分布研究中的重要基础文献。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.5194/soil-7-217-2021",
    updated: "2021",
    year: 2021,
    heat: 3,
    tags: ["soil", "mapping", "data paper", "edaphic"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.5194/soil-7-217-2021",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://www.isric.org/explore/soilgrids"
  },
  {
    id: "paper-surface-water",
    category: "生态学数据论文专题",
    title: "Global Surface Water over 30 Years",
    org: "Nature · 2016",
    description: "全球地表水长期变化论文，是湿地变化、河湖波动和景观水文研究的高引用数据论文。",
    access: "开放 DOI",
    license: "期刊页面",
    version: "10.1038/nature20584",
    updated: "2016",
    year: 2016,
    heat: 3,
    tags: ["surface water", "Landsat", "change detection", "Nature"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1038/nature20584",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://global-surface-water.appspot.com/"
  },
  {
    id: "paper-predicts",
    category: "生态学数据论文专题",
    title: "The PREDICTS Database",
    org: "Ecology and Evolution · 2014",
    description: "描述 PREDICTS 数据结构、覆盖范围和适用性的核心论文，是陆地人类影响生物多样性研究的基石。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.1002/ece3.1303",
    updated: "2014",
    year: 2014,
    heat: 4,
    tags: ["PREDICTS", "human impacts", "local biodiversity", "database paper"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1002/ece3.1303",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://www.nhm.ac.uk/our-science/our-work/biodiversity/predicts.html"
  },
  {
    id: "paper-biotime",
    category: "生态学数据论文专题",
    title: "BioTIME 2.0",
    org: "Global Ecology and Biogeography · 2025",
    description: "BioTIME 扩展版数据论文，适合长期群落变化、时间 beta 多样性和全球变化生态学研究。",
    access: "开放 DOI",
    license: "期刊页面",
    version: "10.1111/geb.70003",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["time series", "community change", "biodiversity", "database paper"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1111/geb.70003",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://biotime.st-andrews.ac.uk/download.php"
  },
  {
    id: "paper-try",
    category: "生态学数据论文专题",
    title: "TRY Plant Trait Database",
    org: "Functional Ecology · 2020",
    description: "植物功能性状数据库升级论文，是 trait-based ecology 和全球植物功能研究的核心文献。",
    access: "开放 DOI",
    license: "期刊页面",
    version: "10.1111/1365-2435.13625",
    updated: "2020",
    year: 2020,
    heat: 4,
    tags: ["plant traits", "functional ecology", "TRY", "data paper"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1111/1365-2435.13625",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://www.try-db.org/TryWeb/Home.php"
  },
  {
    id: "paper-avonet",
    category: "生态学数据论文专题",
    title: "AVONET",
    org: "Ecology Letters · 2022",
    description: "全球鸟类形态、生态和地理数据库论文，是鸟类功能多样性和大尺度 trait biogeography 的热门文献。",
    access: "开放 DOI",
    license: "期刊页面",
    version: "10.1111/ele.13898",
    updated: "2022",
    year: 2022,
    heat: 3,
    tags: ["birds", "traits", "functional diversity", "AVONET"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1111/ele.13898",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://figshare.com/articles/dataset/AVONET_morphological_ecological_and_geographical_data_for_all_birds_Tobias_et_al_2021_Ecology_Letters_/16586228/4"
  },
  {
    id: "paper-pantheria",
    category: "生态学数据论文专题",
    title: "PanTHERIA",
    org: "Ecology · 2009",
    description: "哺乳动物生活史、生态和地理数据库经典论文，是宏观生态学和灭绝风险研究常引数据文献。",
    access: "开放 DOI",
    license: "Ecological Archives",
    version: "10.1890/08-1494.1",
    updated: "2009",
    year: 2009,
    heat: 2,
    tags: ["mammals", "life history", "traits", "classic dataset"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1890/08-1494.1",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://esapubs.org/archive/ecol/E090/184/"
  },
  {
    id: "paper-worldpop",
    category: "生态学数据论文专题",
    title: "WorldPop, Open Data for Spatial Demography",
    org: "Scientific Data · 2017",
    description: "高分辨率人口空间数据论文，是保护规划、风险暴露和人地耦合研究中的热门参考。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.1038/sdata.2017.4",
    updated: "2017",
    year: 2017,
    heat: 3,
    tags: ["population", "spatial demography", "human pressure", "open data"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.1038/sdata.2017.4",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://www.worldpop.org/"
  },
  {
    id: "paper-hyde",
    category: "生态学数据论文专题",
    title: "HYDE Anthropogenic Land Use Estimates",
    org: "Earth System Science Data · 2017",
    description: "HYDE 历史人口与土地利用重建论文，适合长期变化和历史人类影响研究。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.5194/essd-9-927-2017",
    updated: "2017",
    year: 2017,
    heat: 3,
    tags: ["HYDE", "land use history", "Holocene", "ESSD"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.5194/essd-9-927-2017",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://landuse.sites.uu.nl/hyde-portal/"
  },
  {
    id: "paper-luh2",
    category: "生态学数据论文专题",
    title: "LUH2 for CMIP6",
    org: "Geoscientific Model Development · 2020",
    description: "LUH2 数据与方法论文，是未来情景、生物多样性模型和气候-土地利用耦合分析的重要文献。",
    access: "开放 DOI",
    license: "开放论文",
    version: "10.5194/gmd-13-5425-2020",
    updated: "2020",
    year: 2020,
    heat: 3,
    tags: ["LUH2", "CMIP6", "scenarios", "land-use change"],
    primaryLabel: "论文入口",
    primaryUrl: "https://doi.org/10.5194/gmd-13-5425-2020",
    secondaryLabel: "对应数据",
    secondaryUrl: "https://luh.umd.edu/"
  }
];

const state = {
  query: "",
  category: "全部",
  sort: "heat",
  lang: localStorage.getItem("ecology-data-language") || "zh",
  flagshipOnly: false,
  openOnly: false
};

const categoryMetaLookup = {
  全部: {
    zh: { label: "全部", description: "显示全部专题资源。" },
    en: { label: "All", description: "Show every topic in the hub." }
  },
  地理空间专题数据: {
    zh: { label: "地理空间专题数据", description: "土地覆盖、土壤、水系、湖泊和地表水等基础空间底图。" },
    en: { label: "Geospatial Data", description: "Base layers for land cover, soils, rivers, lakes, and surface water." }
  },
  气候专题: {
    zh: { label: "气候专题", description: "气候基准面、再分析、时序气候和未来情景数据。" },
    en: { label: "Climate", description: "Climate normals, reanalysis, time-series climate, and future scenarios." }
  },
  生物多样性专题: {
    zh: { label: "生物多样性专题", description: "观测记录、群落监测、海洋生物多样性和长期时间序列。" },
    en: { label: "Biodiversity", description: "Occurrences, community monitoring, marine biodiversity, and long-term time series." }
  },
  保护地专题: {
    zh: { label: "保护地专题", description: "保护地、OECM、保护成效与关键生物多样性区域。" },
    en: { label: "Protected Areas", description: "Protected areas, OECMs, management effectiveness, and KBAs." }
  },
  物种编目及生态性状: {
    zh: { label: "物种编目及生态性状", description: "物种名录、红色名录、植物与动物性状数据库。" },
    en: { label: "Catalogues and Traits", description: "Species checklists, Red List products, and plant or animal trait databases." }
  },
  人类活动与社会经济专题: {
    zh: { label: "人类活动与社会经济专题", description: "人口、土地利用、夜间灯光、人类压力等人地耦合数据。" },
    en: { label: "Human Activity and Socioeconomics", description: "Population, land use, night lights, and human-pressure layers." }
  },
  生态学数据论文专题: {
    zh: { label: "生态学数据论文专题", description: "高价值数据论文、数据描述论文和核心方法参考。" },
    en: { label: "Ecological Data Papers", description: "High-value data papers, dataset descriptors, and core methodological references." }
  }
};

const uiCopy = {
  zh: {
    homeLink: "返回主页",
    siteNote: "面向宏观生态学、生物地理学和保护生物学研究的数据导航站",
    heroEyebrow: "Open Data Navigator",
    heroTitle: "生态学数据网站",
    heroLead:
      "为宏观生态学、生物地理学和保护生物学研究整理的权威数据入口，覆盖地理空间、气候、生物多样性、保护地、物种编目与生态性状、人类活动与社会经济，以及高价值生态学数据论文。",
    heroTags: ["专业", "开源优先", "权威官网直达", "可用于建模与制图", "按热度与时间浏览"],
    browseLink: "开始浏览",
    criteriaLink: "查看筛选标准",
    legendTitle: "排序说明",
    legendDescription: "默认在每个专题内按照“热度优先，其次时间”排序，也可切换为“时间优先”。",
    legendItems: [
      { term: "旗舰", desc: "全球通用、引用与复用极高的核心数据基础设施。" },
      { term: "高热", desc: "当前生态学研究和保护实践中使用非常频繁。" },
      { term: "常用", desc: "专业可靠、适合专题建模或补充分析。" },
      { term: "专题", desc: "适合特定问题、区域或分析流程。" }
    ],
    featuredEyebrow: "Curated Picks",
    featuredTitle: "旗舰资源速览",
    introCards: [
      {
        title: "研究场景 1",
        body: "物种分布模型与群落分析：推荐组合 WorldClim / CHELSA + GBIF / eBird + IUCN / COL + Human Footprint。"
      },
      {
        title: "研究场景 2",
        body: "保护优先区与空缺分析：推荐组合 WDPCA + KBA + IUCN Spatial Data + WorldCover + WorldPop。"
      },
      {
        title: "研究场景 3",
        body: "宏观生态与生物地理综合研究：推荐组合 BioTIME / PREDICTS + SoilGrids + HydroSHEDS + LUH2。"
      }
    ],
    controlsEyebrow: "Browse",
    controlsTitle: "按专题、热度和时间筛选",
    searchLabel: "搜索关键词",
    searchPlaceholder: "输入数据源、机构、变量、方法或专题关键词",
    sortLabel: "排序方式",
    sortOptions: {
      heat: "热度优先",
      recent: "时间优先",
      name: "名称 A-Z"
    },
    navEyebrow: "Topic Map",
    navTitle: "专题导航",
    focusEyebrow: "Focus Tools",
    focusTitle: "快速收敛",
    flagshipToggleLabel: "只看旗舰资源",
    flagshipToggleHint: "保留最高优先级的核心资源。",
    openToggleLabel: "优先开放入口",
    openToggleHint: "隐藏需要复杂访问流程的资源。",
    clearFilters: "重置筛选",
    methodologyEyebrow: "Curation Notes",
    methodologyTitle: "收录标准",
    methodologyCards: [
      {
        title: "优先级",
        body: "优先收录国际权威机构、官网持续维护、生态学研究高频复用、且具有直接下载或稳定访问入口的数据资源。"
      },
      {
        title: "开放性",
        body: "页面优先展示开放下载、开放 API 或开放门户；如数据需注册、限非商业或需遵守专门条款，会在卡片中注明。"
      },
      {
        title: "时间字段",
        body: "时间字段显示当前可核实的版本、发布年、更新年或官网说明的最近公开更新时间，便于快速判断“新旧程度”。"
      },
      {
        title: "热度字段",
        body: "热度为人工整理分级，综合考虑引用影响、社区采用度、生态模型复用率、保护政策使用频次和学术可见度。"
      }
    ],
    footerNote: "本页面向生态学科研使用整理，建议在正式分析前再次核对许可条款、版本号、坐标系、空间分辨率和时间范围。",
    footerLink: "回到个人主页",
    resultSummary: (count) => `当前显示 ${count} 条资源`,
    emptyState: "没有匹配到资源。建议换一个关键词，或切回“全部”专题浏览。",
    featuredFallback: "优先展示旗舰和高热资源，帮助你快速找到常用核心入口。",
    stats: [
      "精选资源总数",
      "专题类别",
      "开放入口优先",
      "数据论文",
      "2024+ 更新 / 版本",
      "旗舰 / 高热资源"
    ],
    topicLabel: "Topic",
    countLabel: (count) => `${count} 条`,
    factLabels: { access: "访问", license: "许可", version: "版本" },
    heatLabel: { 4: "旗舰", 3: "高热", 2: "常用", 1: "专题" },
    activeCategory: (label) => `专题：${label}`,
    activeFlagship: "仅旗舰资源",
    activeOpen: "开放入口优先",
    useFor: "适用",
    allTopicsShort: "全部专题"
  },
  en: {
    homeLink: "Back to main site",
    siteNote: "A curated data navigator for macroecology, biogeography, and conservation biology",
    heroEyebrow: "Open Data Navigator",
    heroTitle: "Ecological Data Hub",
    heroLead:
      "A curated gateway to authoritative resources for macroecology, biogeography, and conservation biology, covering geospatial layers, climate, biodiversity, protected areas, taxonomic catalogues and traits, human activity and socioeconomics, plus influential ecological data papers.",
    heroTags: ["Research-grade", "Open-first", "Official source links", "Ready for mapping and modelling", "Sorted by relevance and time"],
    browseLink: "Start browsing",
    criteriaLink: "See curation criteria",
    legendTitle: "Ranking guide",
    legendDescription: "Within each topic, resources are ranked by community importance first and recency second by default. You can switch to recency-first at any time.",
    legendItems: [
      { term: "Flagship", desc: "Core global infrastructures with exceptionally high reuse and citation value." },
      { term: "High-use", desc: "Widely adopted in current ecological research and conservation practice." },
      { term: "Standard", desc: "Reliable professional resources suitable for thematic modelling and supplements." },
      { term: "Niche", desc: "Useful for specific questions, regions, or analytical workflows." }
    ],
    featuredEyebrow: "Curated Picks",
    featuredTitle: "Flagship shortcuts",
    introCards: [
      {
        title: "Use case 1",
        body: "Species distribution modelling and community analyses: try WorldClim or CHELSA + GBIF or eBird + IUCN or Catalogue of Life + Human Footprint."
      },
      {
        title: "Use case 2",
        body: "Priority-setting and conservation gap analyses: try WDPCA + KBA + IUCN Spatial Data + WorldCover + WorldPop."
      },
      {
        title: "Use case 3",
        body: "Integrated macroecology and biogeography studies: try BioTIME or PREDICTS + SoilGrids + HydroSHEDS + LUH2."
      }
    ],
    controlsEyebrow: "Browse",
    controlsTitle: "Filter by topic, importance, and time",
    searchLabel: "Search keywords",
    searchPlaceholder: "Search datasets, institutions, variables, methods, or topics",
    sortLabel: "Sort by",
    sortOptions: {
      heat: "Importance first",
      recent: "Newest first",
      name: "Name A-Z"
    },
    navEyebrow: "Topic Map",
    navTitle: "Topic navigator",
    focusEyebrow: "Focus Tools",
    focusTitle: "Narrow faster",
    flagshipToggleLabel: "Flagship resources only",
    flagshipToggleHint: "Keep only the highest-priority core resources.",
    openToggleLabel: "Open-access first",
    openToggleHint: "Hide resources with more restrictive access paths.",
    clearFilters: "Reset filters",
    methodologyEyebrow: "Curation Notes",
    methodologyTitle: "Selection criteria",
    methodologyCards: [
      {
        title: "Priority",
        body: "The hub prioritizes internationally authoritative resources with active official maintenance, strong ecological reuse, and stable direct access."
      },
      {
        title: "Openness",
        body: "Open download portals, open APIs, and open-access gateways are prioritized. Registration, non-commercial limits, or special terms are flagged on the cards."
      },
      {
        title: "Time field",
        body: "Time fields summarize a verifiable version, release year, update year, or the latest public update explicitly documented by the source."
      },
      {
        title: "Importance field",
        body: "Importance is a curated score combining citation footprint, community adoption, reuse in ecological models, policy relevance, and scientific visibility."
      }
    ],
    footerNote:
      "This page is curated for ecological research use. Before formal analyses, please re-check license terms, version numbers, coordinate systems, spatial resolution, and temporal coverage.",
    footerLink: "Back to main site",
    resultSummary: (count) => `Showing ${count} resources`,
    emptyState: "No matching resources found. Try another keyword or switch back to All topics.",
    featuredFallback: "These flagship and high-use resources are surfaced first so you can jump straight into the most reused gateways.",
    stats: [
      "Curated resources",
      "Topic groups",
      "Open-access first",
      "Data papers",
      "2024+ updates / releases",
      "Flagship / high-use"
    ],
    topicLabel: "Topic",
    countLabel: (count) => `${count} items`,
    factLabels: { access: "Access", license: "License", version: "Version" },
    heatLabel: { 4: "Flagship", 3: "High-use", 2: "Standard", 1: "Niche" },
    activeCategory: (label) => `Topic: ${label}`,
    activeFlagship: "Flagship only",
    activeOpen: "Open-access first",
    useFor: "Best for",
    allTopicsShort: "All topics"
  }
};

const resourceDescriptionEn = {
  "esa-worldcover": "A global 10 m land-cover product suitable for habitat mapping, land-use change assessment, and coverage analyses inside protected areas.",
  soilgrids: "A standardized global soil raster product for plant distributions, niche modelling, and ecosystem function analyses.",
  hydrolakes: "A global polygon database of lakes widely used in freshwater ecology, connectivity studies, and conservation planning.",
  hydrorivers: "A global river network and attribute layer that serves as a key base map for catchment ecology, freshwater biogeography, and connectivity analyses.",
  "global-surface-water": "A Landsat-based global surface-water dynamics product for wetlands, river or lake change, and ecosystem-service studies.",
  "era5-land": "High-frequency land reanalysis data suited to extreme events, time-series analyses, and process-oriented ecological work.",
  chelsa: "High-resolution climate and bioclimatic surfaces, especially valuable in mountains and complex terrain for species distribution models.",
  worldclim: "One of the most widely used global climate raster products in ecology and biogeography, with historical, bioclimatic, and future scenario layers.",
  terraclimate: "A monthly climate and climatic water-balance dataset for ecohydrology, drought stress, and water limitation analyses.",
  "cru-ts": "A long global climate time series suited to historical trends, driver attribution, and long-term change studies.",
  gbif: "One of the world’s most important biodiversity occurrence and specimen portals, foundational for macroecology and biogeography.",
  ebird: "A leading global bird product for distributions, seasonal dynamics, and relative abundance, ideal for migration and conservation analyses.",
  obis: "The major global marine biodiversity portal for marine macroecology, distribution patterns, and ocean conservation planning.",
  "map-of-life": "An integrated biodiversity platform combining ranges, observations, and model products for large-scale multi-taxon analyses.",
  predicts: "A core global database on how local terrestrial biodiversity responds to land use and human pressure.",
  biotime: "A global biodiversity time-series database for community change, temporal beta diversity, and rates of change.",
  splotopen: "An open global vegetation-plot database for community ecology, plant diversity, and biogeographic studies.",
  wdpca: "The official global backbone for protected areas and OECMs, central to coverage metrics, gap analyses, and global policy tracking.",
  "protected-planet-api": "A programmatic API for protected-area attributes and boundaries, useful for automated ecological workflows.",
  "gd-pame": "A global database of protected-area management effectiveness that extends analyses from area coverage to management outcomes.",
  kba: "A global dataset of Key Biodiversity Areas that is highly relevant for conservation prioritization and gap analyses.",
  "catalogue-of-life": "One of the most authoritative global taxonomic backbones for name cleaning, synonym resolution, and checklist integration.",
  "iucn-spatial": "Global spatial range products for threatened species, essential for conservation planning, extinction-risk analyses, and systematic protection studies.",
  try: "The flagship plant trait database for trait-based macroecology, community assembly, and ecosystem function research.",
  gift: "A global platform integrating regional plant checklists and trait data, highly useful for island biogeography and floristic studies.",
  avonet: "A popular standard dataset of bird morphology, ecology, and geography for functional diversity analyses.",
  eltontraits: "A classic global resource on bird and mammal foraging traits for food-web, functional-group, and niche analyses.",
  pantheria: "A classic database of mammalian life-history, ecological, and geographic traits for macroecology and extinction-risk work.",
  worldpop: "A high-resolution global population product widely used in conservation planning and exposure or accessibility analyses.",
  gpwv4: "A standard gridded population baseline for exposure assessment, accessibility, and human-impact modelling.",
  hyde: "A historical reconstruction of population and land use, useful for long-term land-change and Anthropocene studies.",
  luh2: "A harmonized land-use change dataset connecting historical reconstructions to future scenarios, central to CMIP6 and biodiversity-scenario work.",
  "viirs-nightlights": "Nighttime lights can act as a proxy for human activity intensity, infrastructure, and urbanization.",
  "human-footprint": "A composite global human-pressure product widely used for extinction risk, conservation gaps, and ecological intactness.",
  "paper-worldclim": "The core data paper behind 1 km global climate surfaces, foundational for niche modelling and climate-sensitivity studies.",
  "paper-chelsa": "The key data paper for topography-aware high-resolution climatologies, especially useful in mountain systems.",
  "paper-soilgrids": "The main paper behind the new generation of global soil-property mapping products.",
  "paper-surface-water": "A highly cited paper describing multi-decadal global surface-water dynamics from Landsat imagery.",
  "paper-predicts": "The foundational database paper describing PREDICTS structure, coverage, and applicability for human-impact studies.",
  "paper-biotime": "The updated BioTIME data paper for long-term biodiversity change and temporal beta-diversity studies.",
  "paper-try": "The major paper behind the upgraded TRY database for global plant functional ecology.",
  "paper-avonet": "The central paper describing global bird morphology, ecology, and geographic coverage in AVONET.",
  "paper-pantheria": "The classic paper describing a mammalian life-history and ecology database frequently used in macroecology.",
  "paper-worldpop": "The core open-data paper introducing WorldPop for spatial demography and human-pressure analyses.",
  "paper-hyde": "The main HYDE paper describing historical population and land-use estimates through long time periods.",
  "paper-luh2": "The main LUH2 paper documenting harmonized land-use scenarios for CMIP6 and biodiversity modelling."
};

const exactFieldTranslations = {
  access: {
    "开放下载": "Open download",
    "开放下载 / API": "Open download / API",
    "开放下载 / 可视化": "Open download / visualization",
    "开放门户 / 下载 / API": "Open portal / download / API",
    "开放下载（遵守产品条款）": "Open download (subject to product terms)",
    "门户访问 / 部分数据开放": "Portal access / partly open data",
    "开放说明 / 数据入口": "Open information / data access",
    "开放下载（非商业）": "Open download (non-commercial)",
    "API 申请 key": "API access with key request",
    "通过 Protected Planet 获取": "Available through Protected Planet",
    "申请获取 / 门户浏览": "Request access / portal browsing",
    "开放查询 / 下载": "Open query / download",
    "注册申请 / 研究使用": "Registration request / research use",
    "官网 / 数据说明 / 部分数据通过 TRY 开放": "Project site / data notes / some data openly served via TRY",
    "数据入口": "Data access",
    "论文与数据仓储入口": "Paper and repository access",
    "开放 DOI": "Open DOI",
    "开放访问 / 数据下载": "Open access / data download"
  },
  license: {
    "开放使用，遵守 ISRIC 条款": "Open use, subject to ISRIC terms",
    "开放学术使用": "Open for academic use",
    "开放使用": "Open use",
    "Copernicus 开放条款": "Copernicus open terms",
    "开放使用，遵守发布条款": "Open use, subject to release terms",
    "开放学术使用": "Open for academic use",
    "学术研究常用": "Widely used in academic research",
    "按数据集许可（CC0 / CC BY / CC BY-NC）": "Depends on each dataset license (CC0 / CC BY / CC BY-NC)",
    "按数据集许可": "Depends on each contributing dataset",
    "依项目与产品而异": "Varies by project and product",
    "遵守 NHM / PREDICTS 条款": "Subject to NHM / PREDICTS terms",
    "请按站点要求引用": "Please cite according to the site requirements",
    "开放再利用，遵守引用要求": "Open reuse with required citation",
    "Protected Planet Terms; 非商业研究友好": "Protected Planet terms; suitable for non-commercial research",
    "非商业使用": "Non-commercial use",
    "遵守 Protected Planet 条款": "Subject to Protected Planet terms",
    "遵守 KBA 数据使用条款": "Subject to KBA data-use terms",
    "Figshare 开放共享": "Open sharing through Figshare",
    "Ecological Archives 数据共享条款": "Ecological Archives sharing terms",
    "开放使用，遵守 WorldPop 条款": "Open use, subject to WorldPop terms",
    "开放论文；数据见仓储说明": "Open paper; data terms are defined in the repository",
    "期刊页面": "Journal page",
    "开放论文": "Open paper"
  },
  updated: {
    "持续更新": "Continuously updated",
    "门户持续更新": "Portal updated continuously",
    "平台持续更新": "Platform updated continuously",
    "2025-04-30 发布": "Released on 2025-04-30",
    "2023 勘误后持续维护": "Maintained after the 2023 correction",
    "2023 公共 trait 合并说明": "2023 public trait integration note",
    "2025-11 后启用新结构": "New structure enabled after 2025-11"
  },
  primaryLabel: {
    "官网 / 数据入口": "Official site / data access",
    "数据 DOI": "Data DOI",
    "代表论文": "Key paper",
    "引用说明": "Citation guide",
    "数据访问说明": "Access details",
    "API 文档": "API docs",
    "最近更新说明": "Latest release note",
    "版本说明": "Release notes",
    "数据入口": "Data access",
    "论文入口": "Paper",
    "平台主页": "Platform site"
  },
  secondaryLabel: {
    "数据 DOI": "Data DOI",
    "代表论文": "Key paper",
    "文档页": "Docs",
    "数据访问说明": "Access details",
    "API 文档": "API docs",
    "项目介绍": "About the project",
    "数据论文": "Data paper",
    "最近更新说明": "Latest release note",
    "字段变更说明": "Schema change note",
    "官网主页": "Project site",
    "版本说明": "Release notes",
    "丰富度产品": "Richness products",
    "平台主页": "Platform site",
    "数据仓储 DOI": "Repository DOI",
    "对应数据": "Related data"
  },
  version: {
    "持续更新": "Continuously updated",
    "持续更新数据库": "Continuously maintained database"
  },
  tag: {
    遥感: "remote sensing",
    全球: "global",
    多边形: "polygons",
    水系: "river network",
    变化: "change"
  }
};

const summaryStats = document.querySelector("#summaryStats");
const categoryFilters = document.querySelector("#categoryFilters");
const resourceSections = document.querySelector("#resourceSections");
const resultSummary = document.querySelector("#resultSummary");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const introStrip = document.querySelector("#introStrip");
const methodologyGrid = document.querySelector("#methodologyGrid");
const languageButtons = document.querySelectorAll("[data-lang]");
const featuredStack = document.querySelector("#featuredStack");
const topicNavigator = document.querySelector("#topicNavigator");
const activeFilters = document.querySelector("#activeFilters");
const clearFiltersBtn = document.querySelector("#clearFiltersBtn");
const flagshipToggle = document.querySelector("#flagshipToggle");
const openToggle = document.querySelector("#openToggle");

function categoryToSectionId(categoryId) {
  return `topic-${categoryMeta.findIndex((item) => item.id === categoryId)}`;
}

function getUi() {
  return uiCopy[state.lang] || uiCopy.zh;
}

function getCategoryMeta(categoryId) {
  const meta = categoryMetaLookup[categoryId];
  return meta ? meta[state.lang] : { label: categoryId, description: "" };
}

function translateExact(field, value) {
  if (state.lang === "zh") {
    return value;
  }
  return exactFieldTranslations[field]?.[value] || value;
}

function getDescription(item) {
  if (state.lang === "zh") {
    return item.description;
  }
  return resourceDescriptionEn[item.id] || item.description;
}

function getTags(item) {
  if (state.lang === "zh") {
    return item.tags;
  }
  return item.tags.map((tag) => exactFieldTranslations.tag[tag] || tag);
}

function isOpenAccess(item) {
  return item.access.includes("开放") || item.access.toLowerCase().includes("open");
}

function matchesQuery(item, query) {
  if (!query) {
    return true;
  }

  const categoryStrings = [item.category, getCategoryMeta(item.category).label, getCategoryMeta(item.category).description];
  const haystack = [
    item.title,
    item.org,
    item.description,
    getDescription(item),
    item.access,
    translateExact("access", item.access),
    item.license,
    translateExact("license", item.license),
    item.version,
    translateExact("version", item.version),
    item.updated,
    translateExact("updated", item.updated),
    ...item.tags,
    ...getTags(item),
    ...categoryStrings
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

function getFilteredResources(options = {}) {
  const { ignoreCategory = false } = options;
  return resources.filter((item) => {
    const categoryOk = ignoreCategory || state.category === "全部" || item.category === state.category;
    const queryOk = matchesQuery(item, state.query);
    const flagshipOk = !state.flagshipOnly || item.heat >= 4;
    const openOk = !state.openOnly || isOpenAccess(item);
    return categoryOk && queryOk && flagshipOk && openOk;
  });
}

function compareByHeat(a, b) {
  return b.heat - a.heat || b.year - a.year || a.title.localeCompare(b.title, "zh-CN");
}

function compareByRecent(a, b) {
  return b.year - a.year || b.heat - a.heat || a.title.localeCompare(b.title, "zh-CN");
}

function compareByName(a, b) {
  return a.title.localeCompare(b.title, "zh-CN");
}

function sortResources(items) {
  if (state.sort === "recent") {
    return [...items].sort(compareByRecent);
  }
  if (state.sort === "name") {
    return [...items].sort(compareByName);
  }
  return [...items].sort(compareByHeat);
}

function renderStaticUi() {
  const ui = getUi();
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";

  document.querySelector("#homeLink").textContent = ui.homeLink;
  document.querySelector("#siteNote").textContent = ui.siteNote;
  document.querySelector("#heroEyebrow").textContent = ui.heroEyebrow;
  document.querySelector("#heroTitle").textContent = ui.heroTitle;
  document.querySelector("#heroLead").textContent = ui.heroLead;
  document.querySelector("#browseLink").textContent = ui.browseLink;
  document.querySelector("#criteriaLink").textContent = ui.criteriaLink;
  document.querySelector("#legendTitle").textContent = ui.legendTitle;
  document.querySelector("#legendDescription").textContent = ui.legendDescription;
  document.querySelector("#featuredEyebrow").textContent = ui.featuredEyebrow;
  document.querySelector("#featuredTitle").textContent = ui.featuredTitle;
  document.querySelector("#controlsEyebrow").textContent = ui.controlsEyebrow;
  document.querySelector("#controlsTitle").textContent = ui.controlsTitle;
  document.querySelector("#searchLabel").textContent = ui.searchLabel;
  document.querySelector("#sortLabel").textContent = ui.sortLabel;
  document.querySelector("#navEyebrow").textContent = ui.navEyebrow;
  document.querySelector("#navTitle").textContent = ui.navTitle;
  document.querySelector("#focusEyebrow").textContent = ui.focusEyebrow;
  document.querySelector("#focusTitle").textContent = ui.focusTitle;
  document.querySelector("#flagshipToggleLabel").textContent = ui.flagshipToggleLabel;
  document.querySelector("#flagshipToggleHint").textContent = ui.flagshipToggleHint;
  document.querySelector("#openToggleLabel").textContent = ui.openToggleLabel;
  document.querySelector("#openToggleHint").textContent = ui.openToggleHint;
  document.querySelector("#clearFiltersBtn").textContent = ui.clearFilters;
  document.querySelector("#methodologyEyebrow").textContent = ui.methodologyEyebrow;
  document.querySelector("#methodologyTitle").textContent = ui.methodologyTitle;
  document.querySelector("#footerNote").textContent = ui.footerNote;
  document.querySelector("#footerLink").textContent = ui.footerLink;
  document.querySelector("#sortOptionHeat").textContent = ui.sortOptions.heat;
  document.querySelector("#sortOptionRecent").textContent = ui.sortOptions.recent;
  document.querySelector("#sortOptionName").textContent = ui.sortOptions.name;
  searchInput.placeholder = ui.searchPlaceholder;

  document.querySelector("#heroTags").innerHTML = ui.heroTags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#legendList").innerHTML = ui.legendItems
    .map((item) => `<li><strong>${item.term}</strong>: ${item.desc}</li>`)
    .join("");

  introStrip.innerHTML = ui.introCards
    .map(
      (item) => `
        <article>
          <h2>${item.title}</h2>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");

  methodologyGrid.innerHTML = ui.methodologyCards
    .map(
      (item) => `
        <article>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  flagshipToggle.checked = state.flagshipOnly;
  openToggle.checked = state.openOnly;
}

function renderSummary() {
  const ui = getUi();
  const openCount = resources.filter((item) => isOpenAccess(item)).length;
  const paperCount = resources.filter((item) => item.category === "生态学数据论文专题").length;
  const latestCount = resources.filter((item) => item.year >= 2024).length;
  const stats = [
    { value: resources.length, label: ui.stats[0] },
    { value: categoryMeta.length - 1, label: ui.stats[1] },
    { value: openCount, label: ui.stats[2] },
    { value: paperCount, label: ui.stats[3] },
    { value: latestCount, label: ui.stats[4] },
    { value: resources.filter((item) => item.heat >= 3).length, label: ui.stats[5] }
  ];

  summaryStats.innerHTML = stats
    .map(
      (item) => `
        <div class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderFeaturedStack() {
  const ui = getUi();
  const picks = [...resources.filter((item) => item.heat >= 3)].sort(compareByHeat).slice(0, 5);

  featuredStack.innerHTML = picks.length
    ? picks
        .map(
          (item) => `
            <a class="featured-item" href="${item.primaryUrl}" target="_blank" rel="noopener">
              <span class="featured-topic">${getCategoryMeta(item.category).label}</span>
              <strong>${item.title}</strong>
              <span>${getDescription(item)}</span>
            </a>
          `
        )
        .join("")
    : `<div class="featured-item"><span>${ui.featuredFallback}</span></div>`;
}

function renderFilters() {
  categoryFilters.innerHTML = categoryMeta
    .map(
      (category) => `
        <button
          type="button"
          class="filter-chip ${state.category === category.id ? "is-active" : ""}"
          data-category="${category.id}"
        >
          ${getCategoryMeta(category.id).label}
        </button>
      `
    )
    .join("");

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderAll();
    });
  });
}

function renderTopicNavigator() {
  const scoped = getFilteredResources({ ignoreCategory: true });
  topicNavigator.innerHTML = categoryMeta
    .map((category) => {
      const label = getCategoryMeta(category.id).label;
      const description = getCategoryMeta(category.id).description;
      const count = category.id === "全部" ? scoped.length : scoped.filter((item) => item.category === category.id).length;

      return `
        <button
          type="button"
          class="topic-link ${state.category === category.id ? "is-active" : ""}"
          data-topic-nav="${category.id}"
        >
          <span class="topic-link-label">
            <strong>${label}</strong>
            <span>${description}</span>
          </span>
          <span class="topic-link-count">${count}</span>
        </button>
      `;
    })
    .join("");

  topicNavigator.querySelectorAll("[data-topic-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.topicNav;
      renderAll();
      document.querySelector("#browse")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderActiveFilters() {
  const ui = getUi();
  const pills = [];

  if (state.category !== "全部") {
    pills.push(ui.activeCategory(getCategoryMeta(state.category).label));
  }
  if (state.flagshipOnly) {
    pills.push(ui.activeFlagship);
  }
  if (state.openOnly) {
    pills.push(ui.activeOpen);
  }
  if (state.query) {
    pills.push(`"${state.query}"`);
  }

  activeFilters.innerHTML = pills.map((pill) => `<span class="active-pill">${pill}</span>`).join("");
}

function renderCard(item) {
  const ui = getUi();
  const tags = getTags(item);
  const useCases = tags.slice(0, 3);
  return `
    <article class="resource-card">
      <div class="card-top">
        <div class="card-top-left">
          <span class="topic-badge">${getCategoryMeta(item.category).label}</span>
          <span class="heat-badge">${ui.heatLabel[item.heat]}</span>
        </div>
        <span class="date-badge">${translateExact("updated", item.updated)}</span>
      </div>
      <div>
        <h3>${item.title}</h3>
        <p class="resource-org">${item.org}</p>
      </div>
      <div class="card-summary">
        <p>${getDescription(item)}</p>
        <div class="card-use-row">
          <span class="use-label">${ui.useFor}</span>
          ${useCases.map((tag) => `<span class="use-case">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="card-facts">
        <span class="fact"><strong>${ui.factLabels.access}:</strong> ${translateExact("access", item.access)}</span>
        <span class="fact"><strong>${ui.factLabels.license}:</strong> ${translateExact("license", item.license)}</span>
        <span class="fact"><strong>${ui.factLabels.version}:</strong> ${translateExact("version", item.version)}</span>
      </div>
      <div class="meta-tags">
        ${tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a class="primary-link" href="${item.primaryUrl}" target="_blank" rel="noopener">${translateExact("primaryLabel", item.primaryLabel)}</a>
        ${
          item.secondaryUrl
            ? `<a class="secondary-link" href="${item.secondaryUrl}" target="_blank" rel="noopener">${translateExact("secondaryLabel", item.secondaryLabel)}</a>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderResources() {
  const ui = getUi();
  const filtered = getFilteredResources();

  resultSummary.textContent = ui.resultSummary(filtered.length);

  if (!filtered.length) {
    resourceSections.innerHTML = `
      <div class="empty-state">
        <p>${ui.emptyState}</p>
      </div>
    `;
    return;
  }

  const sections = categoryMeta
    .filter((category) => category.id !== "全部")
    .map((category) => {
      const items = sortResources(filtered.filter((item) => item.category === category.id));
      if (!items.length) {
        return "";
      }

      return `
        <section class="resource-section" id="${categoryToSectionId(category.id)}">
          <div class="section-head">
            <div>
              <p class="eyebrow">${ui.topicLabel}</p>
              <h2>${getCategoryMeta(category.id).label}</h2>
              <p>${getCategoryMeta(category.id).description}</p>
            </div>
            <div class="section-count">${ui.countLabel(items.length)}</div>
          </div>
          <div class="card-grid">
            ${items.map(renderCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  resourceSections.innerHTML = sections;
}

function renderAll() {
  renderStaticUi();
  renderSummary();
  renderFeaturedStack();
  renderFilters();
  renderTopicNavigator();
  renderActiveFilters();
  renderResources();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderAll();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderAll();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("ecology-data-language", state.lang);
    renderAll();
  });
});

flagshipToggle.addEventListener("change", () => {
  state.flagshipOnly = flagshipToggle.checked;
  renderAll();
});

openToggle.addEventListener("change", () => {
  state.openOnly = openToggle.checked;
  renderAll();
});

clearFiltersBtn.addEventListener("click", () => {
  state.query = "";
  state.category = "全部";
  state.sort = "heat";
  state.flagshipOnly = false;
  state.openOnly = false;
  searchInput.value = "";
  sortSelect.value = "heat";
  renderAll();
});

renderAll();
