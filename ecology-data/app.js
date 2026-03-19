const categoryMeta = [
  {
    id: "全部",
    description: "显示全部专题资源。"
  },
  {
    id: "地理空间专题数据",
    description: "行政区划、标准地图、土壤、水系、道路和其他基础空间底图。"
  },
  {
    id: "土地利用专题",
    description: "土地利用/覆被产品、长期序列、分类底图与未来情景预测数据。"
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
    description: "人口、夜间灯光、人类压力等人地耦合数据。"
  },
  {
    id: "生态学 R 包专题",
    description: "数据整理清洗、假设检验、方差分析、排序分析、SDM、占域模型、GLMM、模型比较、贝叶斯和 SEM 等常用生态学 R 工具。"
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
    category: "土地利用专题",
    title: "ESA WorldCover 10 m",
    org: "European Space Agency",
    description: "全球 10 m 土地覆盖产品，适合栖息地制图、土地利用变化评估和保护地覆盖分析。",
    access: "开放下载",
    license: "CC BY 4.0",
    version: "2021 v200",
    updated: "2022",
    year: 2022,
    heat: 4,
    tags: ["global", "10 m", "2020/2021", "11 classes", "open"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://esa-worldcover.org/en/data-access",
    secondaryLabel: "数据 DOI",
    secondaryUrl: "https://doi.org/10.5281/zenodo.7254221"
  },
  {
    id: "globeland30",
    category: "土地利用专题",
    title: "GlobeLand30 / WorldLand30",
    org: "National Geomatics Center of China",
    description: "全球 30 m 土地覆盖经典产品，提供 2000 和 2010 两个基准年，是全球变化、生态恢复和土地利用变化研究中的高频基线数据。",
    access: "开放下载",
    license: "开放使用",
    version: "2000 / 2010",
    updated: "2010 epoch",
    year: 2010,
    heat: 4,
    tags: ["global", "30 m", "2000/2010", "10 classes", "open"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.globallandcover.com/GLC30Download/index.aspx",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.ngcc.cn/zdchgc/qqdbfg/"
  },
  {
    id: "from-glc",
    category: "土地利用专题",
    title: "FROM-GLC 30 m",
    org: "Tsinghua University",
    description: "清华大学发布的首套 30 m 全球地表覆盖产品，是高分辨率全球土地覆盖制图的重要里程碑，适合全球土地利用与生态格局研究。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "30 m global baseline",
    updated: "数据迁移后持续可访问",
    year: 2024,
    heat: 4,
    tags: ["global", "30 m", "2010 era", "10 classes", "Tsinghua"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.ess.tsinghua.edu.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.dess.tsinghua.edu.cn/info/1120/1418.htm"
  },
  {
    id: "from-glc10",
    category: "土地利用专题",
    title: "FROM-GLC10",
    org: "Tsinghua University",
    description: "清华大学团队制作的 10 m 全球地表覆盖图，基于 Sentinel-2 建成，是高分辨率全球土地覆盖和生态格局分析的热门数据源。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "2017 global map",
    updated: "数据迁移后持续可访问",
    year: 2024,
    heat: 4,
    tags: ["global", "10 m", "2017", "10 classes", "Tsinghua"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.ess.tsinghua.edu.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.dess.tsinghua.edu.cn/info/1080/1063.htm"
  },
  {
    id: "glass-glc",
    category: "土地利用专题",
    title: "GLASS-GLC Annual Land Cover",
    org: "Tsinghua University / ESSD / PANGAEA",
    description: "全球 5 km 逐年动态土地覆盖产品，覆盖 1982-2015，是长时间序列土地覆盖变化、生态趋势和全球变化研究的重要数据。",
    access: "开放 DOI",
    license: "开放论文；数据见仓储说明",
    version: "1982-2015 annual",
    updated: "2020",
    year: 2020,
    heat: 3,
    tags: ["global", "5 km", "1982-2015", "annual", "open"],
    primaryLabel: "数据 DOI",
    primaryUrl: "https://doi.org/10.1594/PANGAEA.913496",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.dess.tsinghua.edu.cn/info/1080/1003.htm"
  },
  {
    id: "copernicus-lc100",
    category: "土地利用专题",
    title: "Copernicus Global Land Cover 100 m",
    org: "Copernicus Land Monitoring Service",
    description: "欧盟 Copernicus 全球 100 m 年度土地覆盖产品，适合大尺度土地利用变化监测、生态系统评估和跨区域比较研究。",
    access: "开放下载",
    license: "Copernicus 开放条款",
    version: "Collection 3",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["global", "100 m", "2015-2019", "annual", "open"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://land.copernicus.eu/en/products/global-dynamic-land-cover/copernicus-global-land-service-land-cover-100m-collection-3-epoch-2015-2019-globe",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://land.copernicus.eu/en/products/global-dynamic-land-cover"
  },
  {
    id: "esa-cci-land-cover",
    category: "土地利用专题",
    title: "ESA CCI / C3S Land Cover 300 m",
    org: "Copernicus Climate Data Store / ESA CCI",
    description: "全球 300 m 年度土地覆盖长时间序列产品，覆盖 1992 至今，是长期变化分析、气候模式和土地覆盖一致性比较的经典数据。",
    access: "开放下载",
    license: "开放使用",
    version: "v2.0.7cds / v2.1.1",
    updated: "2026",
    year: 2026,
    heat: 4,
    tags: ["global", "300 m", "1992-present", "annual", "22 classes"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://cds.climate.copernicus.eu/datasets/satellite-land-cover",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://cds.climate.copernicus.eu/"
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
    id: "china-standard-map-service",
    category: "地理空间专题数据",
    title: "National Standard Map Service of China",
    org: "自然资源部标准地图服务系统",
    description: "中国标准地图官方入口，提供国家、省、市、县等不同层级标准地图与专题底图，是论文、报告和合规制图使用中国行政区划的首选来源。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["China", "standard maps", "administrative boundaries", "county level", "cartography"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://bzdt.ch.mnr.gov.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://bzdt.ch.mnr.gov.cn/"
  },
  {
    id: "tianditu",
    category: "地理空间专题数据",
    title: "Tianditu National Geospatial Platform",
    org: "国家地理信息公共服务平台（天地图）",
    description: "提供行政区、道路、水系、地名注记、影像与矢量底图服务，是中国在线制图、空间分析和可视化的官方基础平台。",
    access: "API 申请 key",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["China", "vector basemap", "roads", "rivers", "administrative boundaries"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.tianditu.gov.cn/",
    secondaryLabel: "平台主页",
    secondaryUrl: "https://www.tianditu.gov.cn/"
  },
  {
    id: "natural-earth",
    category: "地理空间专题数据",
    title: "Natural Earth",
    org: "Natural Earth",
    description: "全球开放矢量底图平台，提供国家和省级行政区、道路、河流、湖泊、海岸线等多尺度空间要素，适合制图和大尺度生态分析。",
    access: "开放下载",
    license: "Public Domain",
    version: "5.x",
    updated: "2024",
    year: 2024,
    heat: 4,
    tags: ["administrative boundaries", "roads", "rivers", "cartography", "global"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.naturalearthdata.com/downloads/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.naturalearthdata.com/"
  },
  {
    id: "gadm",
    category: "地理空间专题数据",
    title: "GADM Administrative Boundaries",
    org: "GADM",
    description: "全球多层级行政区划边界数据，常用于国家、省、县等子国家尺度分析，是生态学和社会生态研究的常用边界底图。",
    access: "开放下载",
    license: "开放学术使用",
    version: "4.x",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["administrative boundaries", "global", "subnational", "multi-level", "shapefiles"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gadm.org/data.html",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gadm.org/"
  },
  {
    id: "geofabrik-osm",
    category: "地理空间专题数据",
    title: "Geofabrik OpenStreetMap Extracts",
    org: "Geofabrik / OpenStreetMap",
    description: "提供国家和区域尺度的 OSM 矢量切片，便于直接获取道路、水系、铁路、居民地和多类基础空间要素，是开放道路与线状要素数据的重要入口。",
    access: "开放下载",
    license: "ODbL 1.0",
    version: "daily extracts",
    updated: "持续更新",
    year: 2025,
    heat: 4,
    tags: ["roads", "waterways", "OpenStreetMap", "China", "vector features"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://download.geofabrik.de/asia/china.html",
    secondaryLabel: "平台主页",
    secondaryUrl: "https://www.geofabrik.de/data/download.html"
  },
  {
    id: "resdc",
    category: "地理空间专题数据",
    title: "RESDC / Resource and Environment Science Data Center",
    org: "中国科学院地理科学与资源研究所",
    description: "中科院经典资源环境数据门户，长期提供中国土地利用/覆被、NDVI、自然区划、交通和社会经济栅格等高频基础数据。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["RESDC", "China", "land use", "NDVI", "resource environment"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.resdc.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.resdc.cn/"
  },
  {
    id: "geodata-resource-center",
    category: "地理空间专题数据",
    title: "GRE Geographical Resources Center",
    org: "国家地球系统科学数据中心-地理资源分中心",
    description: "中国权威的地理资源综合平台之一，聚合土地利用、植被、物候、社会经济、资源环境与对地观测数据，适合中国区域生态研究起步检索。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["China", "geodata", "land use", "vegetation", "resource center"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/aboutus.html"
  },
  {
    id: "remote-sensing-cloud",
    category: "地理空间专题数据",
    title: "Earth System Remote Sensing Cloud",
    org: "地理资源分中心 / 中国科学院地理科学与资源研究所",
    description: "聚合 Landsat、多源遥感影像与多类产品，是中国区域土地覆盖、植被和地表参数研究的重要入口。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["remote sensing", "Landsat", "products", "China", "imagery"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/rmdb/",
    secondaryLabel: "平台主页",
    secondaryUrl: "https://gre.geodata.cn/rmdb/aboutus"
  },
  {
    id: "glass-products",
    category: "地理空间专题数据",
    title: "GLASS Land Surface Parameters",
    org: "地球系统遥感数据云 / GLASS 团队",
    description: "覆盖 LAI、FAPAR、ET、PAR、FVC、Albedo 等核心陆表参数，是植被结构和生态生产力建模的高频数据家族。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["GLASS", "LAI", "FAPAR", "ET", "PAR"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/rmdb/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/"
  },
  {
    id: "landcover-special-cn",
    category: "土地利用专题",
    title: "China Land Cover Thematic Products",
    org: "地理资源分中心",
    description: "提供中国区域多时期、多尺度土地覆被产品，并整合全球土地覆被数据，适合 LUCC、栖息地和生态恢复研究。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 4,
    tags: ["China", "multi-year", "30 m+", "LUCC", "open"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/aboutus.html"
  },
  {
    id: "china-phenology-network",
    category: "地理空间专题数据",
    title: "China Phenology Observation Network",
    org: "地理资源分中心",
    description: "中国物候观测网络数据可用于植被季相、气候响应、物候错配和生产力季节性研究。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 3,
    tags: ["phenology", "seasonality", "vegetation dynamics", "China", "observations"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/aboutus.html"
  },
  {
    id: "allweather-land-parameters",
    category: "地理空间专题数据",
    title: "All-weather Land Surface Parameters for China",
    org: "地理资源分中心",
    description: "面向中国区域的全天候地表参数反演产品，适合云覆盖频繁区域的长期生态和地表过程研究。",
    access: "开放查询 / 下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 3,
    tags: ["all-weather", "land surface", "China", "vegetation", "surface processes"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/aboutus.html"
  },
  {
    id: "vegetation-clumping-index",
    category: "地理空间专题数据",
    title: "Global Vegetation Clumping Index",
    org: "地理资源分中心 / 方红亮团队",
    description: "植被聚集指数可改进辐射传输、冠层结构和生产力估算，是植被结构研究的专业型产品。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "持续更新",
    updated: "平台持续更新",
    year: 2024,
    heat: 3,
    tags: ["clumping index", "canopy structure", "radiative transfer", "vegetation", "global"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://gre.geodata.cn/",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gre.geodata.cn/aboutus.html"
  },
  {
    id: "mod17a3hgf",
    category: "地理空间专题数据",
    title: "MOD17A3HGF V6.1 GPP / NPP",
    org: "NASA LP DAAC",
    description: "全球 500 m 年尺度 GPP / NPP 标准产品，是宏观生态学、碳循环和生产力研究中最常用的官方产品之一。",
    access: "开放下载",
    license: "Earthdata Login",
    version: "V6.1",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["GPP", "NPP", "productivity", "MODIS", "carbon cycle"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061"
  },
  {
    id: "mcd12q1",
    category: "土地利用专题",
    title: "MCD12Q1 V6.1 Land Cover Type",
    org: "NASA LP DAAC",
    description: "官方全球土地覆被类型产品，提供 IGBP、PFT 等多种分类体系，适合作为全球土地覆被基线。",
    access: "开放下载",
    license: "Earthdata Login",
    version: "V6.1",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["global", "500 m", "annual", "IGBP/PFT", "MODIS"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd12q1-061"
  },
  {
    id: "mod44b-vcf",
    category: "地理空间专题数据",
    title: "MOD44B V6.1 Vegetation Continuous Fields",
    org: "NASA LP DAAC",
    description: "提供连续植被覆盖度、树冠与非树植被比例，适合植被结构、树冠覆盖和景观生态分析。",
    access: "开放下载",
    license: "Earthdata Login",
    version: "V6.1",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["vegetation cover", "tree cover", "continuous fields", "MODIS", "structure"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod44b-061"
  },
  {
    id: "tpdc-par",
    category: "地理空间专题数据",
    title: "High-resolution PAR Dataset",
    org: "国家青藏高原科学数据中心 / 中国科学院青藏高原研究所",
    description: "高分辨率光合有效辐射数据直接服务于光合作用、NPP 估算和碳循环建模，是生产力研究的重要输入。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "高分辨率 PAR",
    updated: "2022",
    year: 2022,
    heat: 3,
    tags: ["PAR", "productivity", "photosynthesis", "radiation", "TPDC"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://www.cas.cn/syky/202206/t20220602_4836736.shtml",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
  },
  {
    id: "tpdc-grassland-type",
    category: "地理空间专题数据",
    title: "Tibetan Plateau Grassland Type Map (2020)",
    org: "国家青藏高原科学数据中心",
    description: "青藏高原草地资源类型分布数据适合高寒草地分类、牧业管理、栖息地和恢复潜力分析。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "2020",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["grassland types", "Tibetan Plateau", "vegetation map", "classification", "China"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.tpdc.ac.cn/view/googleSearch/dataList?pageNum=490",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
  },
  {
    id: "tpdc-qilian-npp",
    category: "地理空间专题数据",
    title: "Qilian Mountains Monthly 30 m NPP (2019)",
    org: "国家青藏高原科学数据中心",
    description: "祁连山 30 m 月度 NPP 产品适合山地高分辨率生产力变化、生态工程和草地恢复研究。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "2019",
    updated: "2019",
    year: 2019,
    heat: 3,
    tags: ["NPP", "30 m", "Qilian Mountains", "productivity", "mountains"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.tpdc.ac.cn/view/googleSearch/dataList?pageNum=490",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
  },
  {
    id: "tpdc-qilian-fvc",
    category: "地理空间专题数据",
    title: "Qilian Mountains Monthly 30 m FVC (2019)",
    org: "国家青藏高原科学数据中心",
    description: "祁连山 30 m 月度植被覆盖度产品有利于精细化追踪高山草地、裸地和生态恢复变化。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "2019",
    updated: "2019",
    year: 2019,
    heat: 3,
    tags: ["FVC", "30 m", "Qilian Mountains", "vegetation cover", "restoration"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.tpdc.ac.cn/view/googleSearch/dataList?pageNum=93",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
  },
  {
    id: "tpdc-lai-30m",
    category: "地理空间专题数据",
    title: "Tibetan Plateau 30 m LAI (2022)",
    org: "国家青藏高原科学数据中心",
    description: "青藏高原 30 m 叶面积指数产品适合高寒植被结构、生产力和水热响应分析。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "2022",
    updated: "2022",
    year: 2022,
    heat: 3,
    tags: ["LAI", "30 m", "Tibetan Plateau", "vegetation structure", "productivity"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://data.tpdc.ac.cn/view/googleSearch/dataList?pageNum=842",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
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
    id: "cmfd-2",
    category: "气候专题",
    title: "CMFD 2.0",
    org: "国家青藏高原科学数据中心 / 清华大学等",
    description: "中国区域高精度地面气象要素驱动数据集，广泛用于陆面过程、水文与生态生产力模型，是中国区域研究的高频输入。",
    access: "开放访问 / 数据下载",
    license: "开放使用",
    version: "v2.0 (1951-2020)",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["China", "forcing data", "land surface models", "hydrology", "ecology"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://cms.casdc.cn/article/541",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://data.tpdc.ac.cn/"
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
    category: "土地利用专题",
    title: "LUH2",
    org: "Land-Use Harmonization Project",
    description: "连接历史重建与未来情景的土地利用变化数据库，是 CMIP6 和生物多样性情景研究的重要输入。",
    access: "开放下载",
    license: "开放使用",
    version: "LUH2 for CMIP6",
    updated: "2020",
    year: 2020,
    heat: 3,
    tags: ["global", "0.25°", "850-2100", "annual", "scenarios"],
    primaryLabel: "官网 / 数据入口",
    primaryUrl: "https://luh.umd.edu/",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.5194/gmd-13-5425-2020"
  },
  {
    id: "china-lulc-ssp-rcp",
    category: "土地利用专题",
    title: "China 1 km Future LULC under SSP-RCP",
    org: "Scientific Data / Figshare",
    description: "中国 1 km 土地利用/覆被未来情景数据，覆盖 2020-2100 年 24 组 SSP-RCP 组合，适合生态系统服务、碳中和和区域情景评估。",
    access: "开放 DOI",
    license: "开放论文；数据见仓储说明",
    version: "2020-2100 by decade",
    updated: "2022",
    year: 2022,
    heat: 4,
    tags: ["China", "1 km", "2020-2100", "24 scenarios", "GeoTIFF"],
    primaryLabel: "数据 DOI",
    primaryUrl: "https://doi.org/10.6084/m9.figshare.14776128.v4",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://www.nature.com/articles/s41597-022-01204-w"
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
    id: "ade4",
    category: "生态学 R 包专题",
    title: "ade4",
    org: "CRAN / adeverse",
    description: "经典生态排序与多元分析包，覆盖 PCA、CA、DCA 等常用方法，适合群落生态、环境梯度和排序分析教学与研究。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["ordination", "multivariate", "PCA/CA", "ecology", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=ade4",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://adeverse.github.io/ade4/"
  },
  {
    id: "adespatial",
    category: "生态学 R 包专题",
    title: "adespatial",
    org: "CRAN / adeverse",
    description: "面向空间生态与排序分析的扩展包，适合 Moran 特征向量、空间结构分解和空间约束排序研究。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["ordination", "spatial ecology", "MEM", "dbMEM", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=adespatial",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://adeverse.github.io/adespatial/"
  },
  {
    id: "ggvegan",
    category: "生态学 R 包专题",
    title: "ggvegan",
    org: "CRAN / Gavin Simpson",
    description: "把 vegan 的排序结果转成更现代、更适合论文发表的 ggplot 风格图形，是生态排序作图的高价值补充包。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["ordination", "plotting", "ggplot", "vegan", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=ggvegan",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://gavinsimpson.github.io/ggvegan/"
  },
  {
    id: "tidyverse",
    category: "生态学 R 包专题",
    title: "tidyverse",
    org: "CRAN / Posit",
    description: "数据整理、清洗、变形和可视化的核心工具集合，是生态学数据预处理和可重复分析流程中最常用的基础 R 生态之一。",
    access: "CRAN / 文档 / 教程",
    license: "MIT + file LICENSE",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["data cleaning", "wrangling", "tidy data", "dplyr", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=tidyverse",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.tidyverse.org/"
  },
  {
    id: "janitor",
    category: "生态学 R 包专题",
    title: "janitor",
    org: "CRAN / Sam Firke",
    description: "数据清洗和字段整理高频包，尤其适合标准化列名、检查重复值、频数汇总和快速整理原始生态数据表。",
    access: "CRAN / 文档 / 教程",
    license: "MIT + file LICENSE",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["data cleaning", "tables", "column names", "wrangling", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=janitor",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://sfirke.github.io/janitor/"
  },
  {
    id: "rstatix",
    category: "生态学 R 包专题",
    title: "rstatix",
    org: "CRAN / Kassambara",
    description: "把常见假设检验、方差分析、效应量和事后比较整理成更流畅的数据分析语法，是生态学统计入门和论文分析的高频工具。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["hypothesis testing", "ANOVA", "effect size", "post hoc", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=rstatix",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://rpkgs.datanovia.com/rstatix/"
  },
  {
    id: "car-package",
    category: "生态学 R 包专题",
    title: "car",
    org: "CRAN / John Fox & Sanford Weisberg",
    description: "经典回归与方差分析工具包，常用于 Type II/III ANOVA、Levene 检验、方差齐性和诊断分析。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 4,
    tags: ["ANOVA", "Levene test", "regression", "diagnostics", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=car",
    secondaryLabel: "文档页",
    secondaryUrl: "https://rdrr.io/cran/car/"
  },
  {
    id: "emmeans",
    category: "生态学 R 包专题",
    title: "emmeans",
    org: "CRAN / Russell V. Lenth",
    description: "边际均值、简单效应和多重比较的标准工具，适合方差分析、GLMM 和回归模型的事后比较与结果可视化。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["ANOVA", "post hoc", "marginal means", "contrasts", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=emmeans",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://rvlenth.github.io/emmeans/"
  },
  {
    id: "MuMIn",
    category: "生态学 R 包专题",
    title: "MuMIn",
    org: "CRAN / MuMIn authors",
    description: "模型选择、AICc 比较和模型平均经典包，是生态学多模型推断和候选模型比较中的常用工具。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["model selection", "AICc", "model averaging", "dredge", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=MuMIn",
    secondaryLabel: "文档页",
    secondaryUrl: "https://rdrr.io/cran/MuMIn/"
  },
  {
    id: "performance",
    category: "生态学 R 包专题",
    title: "performance",
    org: "CRAN / easystats",
    description: "面向模型诊断、拟合优度比较和性能评估的高频包，适合和 lme4、glmmTMB、brms 等模型流程联动使用。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["model diagnostics", "model comparison", "goodness of fit", "easystats", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=performance",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://easystats.github.io/performance/"
  },
  {
    id: "vegan",
    category: "生态学 R 包专题",
    title: "vegan",
    org: "CRAN / vegan developers",
    description: "群落排序、多样性指数、置换检验和植被分析旗舰包，是社区生态学和群落数据分析最常用的 R 工具之一。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2 | GPL-3",
    version: "持续更新",
    updated: "2026",
    year: 2026,
    heat: 4,
    tags: ["community ecology", "ordination", "diversity", "beta diversity", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=vegan",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://vegandevs.github.io/vegan/"
  },
  {
    id: "inext",
    category: "生态学 R 包专题",
    title: "iNEXT",
    org: "CRAN / Anne Chao Lab",
    description: "用于稀释与外推、多样性覆盖度和 Hill numbers 计算，是比较样地和群落多样性的高频工具。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["biodiversity indices", "Hill numbers", "rarefaction", "extrapolation", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=iNEXT",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://johnsonhsieh.github.io/iNEXT/"
  },
  {
    id: "betapart",
    category: "生态学 R 包专题",
    title: "betapart",
    org: "CRAN / betapart authors",
    description: "专门处理 beta 多样性分解、周转与嵌套性分析，是区域组成变化研究中的经典 R 包。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["beta diversity", "turnover", "nestedness", "community composition", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=betapart",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1111/j.2041-210X.2012.00124.x"
  },
  {
    id: "fd-package",
    category: "生态学 R 包专题",
    title: "FD",
    org: "CRAN / FD authors",
    description: "功能多样性分析常用包，可计算 FRic、FEve、FDiv 等指标，适合 trait-based ecology 与群落功能结构研究。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2023",
    year: 2023,
    heat: 3,
    tags: ["functional diversity", "traits", "FRic", "FEve", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=FD",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.1890/08-1206.1"
  },
  {
    id: "biomod2",
    category: "生态学 R 包专题",
    title: "biomod2",
    org: "CRAN / biomodhub",
    description: "面向物种分布模型和集合预测的旗舰包，可组织多算法、多情景和多数据源的 SDM 工作流。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["species distribution models", "ensemble modelling", "SDM", "forecasting", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=biomod2",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://biomodhub.github.io/biomod2/"
  },
  {
    id: "enmeval",
    category: "生态学 R 包专题",
    title: "ENMeval",
    org: "CRAN / ENMeval authors",
    description: "用于 Maxent / maxnet 的调参与评估，可进行分块交叉验证、复杂度控制和模型比较，是生态位模型中很常用的配套包。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["ecological niche", "Maxent", "model tuning", "SDM", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=ENMeval",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://jamiemkass.github.io/ENMeval/"
  },
  {
    id: "ecospat",
    category: "生态学 R 包专题",
    title: "ecospat",
    org: "CRAN / ecospat team",
    description: "聚焦生态位重叠、环境空间分析、潜在分布和范围动态，是生态位与生物地理研究常用工具。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["ecological niche", "niche overlap", "range dynamics", "biogeography", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=ecospat",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://www.unil.ch/ecospat/home/menuinst/ecospat-resources/tools.html"
  },
  {
    id: "unmarked",
    category: "生态学 R 包专题",
    title: "unmarked",
    org: "CRAN / unmarked team",
    description: "占域模型、N-mixture、检测概率和丰度模型的经典包，是监测数据和保护生物学分析中最常用的占域工具之一。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 3)",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["occupancy models", "detection probability", "abundance models", "monitoring", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=unmarked",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://rbchan.github.io/unmarked/"
  },
  {
    id: "lme4",
    category: "生态学 R 包专题",
    title: "lme4",
    org: "CRAN / lme4 authors",
    description: "线性和广义线性混合效应模型标准工具，是生态学中层级数据、随机效应和 GLMM 分析的基础包。",
    access: "CRAN / 文档 / 教程",
    license: "GPL (>= 2)",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["mixed-effects models", "GLMM", "hierarchical models", "random effects", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=lme4",
    secondaryLabel: "代表论文",
    secondaryUrl: "https://doi.org/10.18637/jss.v067.i01"
  },
  {
    id: "glmmtmb",
    category: "生态学 R 包专题",
    title: "glmmTMB",
    org: "CRAN / glmmTMB team",
    description: "适合零膨胀、负二项、异方差和复杂随机结构的 GLMM，是生态计数数据和过度离散问题的高频解决方案。",
    access: "CRAN / 文档 / 教程",
    license: "AGPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["GLMM", "zero inflation", "count data", "negative binomial", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=glmmTMB",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://glmmtmb.github.io/glmmTMB/"
  },
  {
    id: "metafor",
    category: "生态学 R 包专题",
    title: "metafor",
    org: "CRAN / Wolfgang Viechtbauer",
    description: "元分析和多层元回归最经典的 R 包之一，广泛用于生态学综合分析、效应量整合和发表偏倚检验。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2 | GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["meta-analysis", "meta-regression", "effect sizes", "evidence synthesis", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=metafor",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://wviechtb.github.io/metafor/"
  },
  {
    id: "brms",
    category: "生态学 R 包专题",
    title: "brms",
    org: "CRAN / Paul Buerkner",
    description: "基于 Stan 的贝叶斯多层模型包，适合生态学中的层级模型、零膨胀、空间结构和复杂响应分布分析。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 4,
    tags: ["Bayesian models", "multilevel models", "Stan", "hierarchical models", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=brms",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://paulbuerkner.com/brms/"
  },
  {
    id: "piecewise-sem",
    category: "生态学 R 包专题",
    title: "piecewiseSEM",
    org: "CRAN / piecewiseSEM authors",
    description: "面向生态学路径分析的分段结构方程模型包，能够把 GLMM、LMM 和因果路径分析自然结合起来。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-3",
    version: "持续更新",
    updated: "2024",
    year: 2024,
    heat: 3,
    tags: ["structural equation models", "piecewise SEM", "causal paths", "mixed models", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=piecewiseSEM",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://jslefche.github.io/piecewiseSEM/"
  },
  {
    id: "lavaan",
    category: "生态学 R 包专题",
    title: "lavaan",
    org: "CRAN / lavaan project",
    description: "协方差结构方程模型和确认性因子分析的主流 R 包，适合生态学中潜变量与复杂路径关系建模。",
    access: "CRAN / 文档 / 教程",
    license: "GPL-2",
    version: "持续更新",
    updated: "2025",
    year: 2025,
    heat: 3,
    tags: ["structural equation models", "latent variables", "path analysis", "SEM", "R"],
    primaryLabel: "CRAN 页面",
    primaryUrl: "https://cran.r-project.org/package=lavaan",
    secondaryLabel: "官网主页",
    secondaryUrl: "https://lavaan.ugent.be/"
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
  rTask: "all",
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
    zh: { label: "地理空间专题数据", description: "行政区划、标准地图、土壤、水系、道路和其他基础空间底图。" },
    en: { label: "Geospatial Data", description: "Administrative boundaries, standard maps, soils, rivers, roads, and other spatial base layers." }
  },
  土地利用专题: {
    zh: { label: "土地利用专题", description: "土地利用/覆被产品、长期序列、分类底图与未来情景预测数据。" },
    en: { label: "Land Use and Cover", description: "Land use or land cover products, long time series, thematic maps, and future scenarios." }
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
    zh: { label: "人类活动与社会经济专题", description: "人口、夜间灯光、人类压力等人地耦合数据。" },
    en: { label: "Human Activity and Socioeconomics", description: "Population, night lights, and human-pressure layers." }
  },
  "生态学 R 包专题": {
    zh: { label: "生态学 R 包专题", description: "数据整理清洗、假设检验、方差分析、排序分析、SDM、占域模型、GLMM、模型比较、贝叶斯和 SEM 等常用生态学 R 工具。" },
    en: { label: "Ecology R Packages", description: "R tools for data cleaning, hypothesis testing, ANOVA, ordination, SDMs, occupancy, GLMMs, model comparison, Bayesian models, and SEM." }
  },
  生态学数据论文专题: {
    zh: { label: "生态学数据论文专题", description: "高价值数据论文、数据描述论文和核心方法参考。" },
    en: { label: "Ecological Data Papers", description: "High-value data papers, dataset descriptors, and core methodological references." }
  }
};

const rPackageTasks = [
  {
    id: "all",
    labelZh: "全部任务",
    labelEn: "All workflows",
    hintZh: "显示全部生态学 R 包",
    hintEn: "Show every ecology R package"
  },
  {
    id: "data-cleaning",
    labelZh: "数据整理 / 清洗",
    labelEn: "Data cleaning",
    hintZh: "tidyverse、janitor 与整理流程",
    hintEn: "tidyverse, janitor, and wrangling workflows",
    packageIds: ["tidyverse", "janitor"]
  },
  {
    id: "testing",
    labelZh: "假设检验",
    labelEn: "Hypothesis tests",
    hintZh: "t 检验、非参数检验与效应量",
    hintEn: "t-tests, nonparametric tests, and effect sizes",
    packageIds: ["rstatix", "car-package"]
  },
  {
    id: "anova",
    labelZh: "方差分析 / 事后比较",
    labelEn: "ANOVA",
    hintZh: "Anova、Levene、边际均值与多重比较",
    hintEn: "ANOVA, Levene tests, marginal means, and post hoc contrasts",
    packageIds: ["rstatix", "car-package", "emmeans"]
  },
  {
    id: "ordination",
    labelZh: "排序分析",
    labelEn: "Ordination",
    hintZh: "PCA、CA、NMDS、RDA、空间排序",
    hintEn: "PCA, CA, NMDS, RDA, and spatial ordination",
    packageIds: ["ade4", "adespatial", "ggvegan", "vegan"]
  },
  {
    id: "diversity",
    labelZh: "多样性指标",
    labelEn: "Diversity",
    hintZh: "稀释曲线、beta 分解、功能多样性",
    hintEn: "Rarefaction, beta partitioning, and functional diversity",
    packageIds: ["vegan", "inext", "betapart", "fd-package"]
  },
  {
    id: "sdm",
    labelZh: "物种分布模型",
    labelEn: "SDM",
    hintZh: "集合建模、调参、生态位评估",
    hintEn: "Ensemble modelling, tuning, and niche-model evaluation",
    packageIds: ["biomod2", "enmeval", "ecospat"]
  },
  {
    id: "occupancy",
    labelZh: "占域模型",
    labelEn: "Occupancy",
    hintZh: "检测概率、占域率、监测数据",
    hintEn: "Detection, occupancy, and monitoring workflows",
    packageIds: ["unmarked"]
  },
  {
    id: "glmm",
    labelZh: "混合效应 / GLMM",
    labelEn: "GLMM",
    hintZh: "层级模型、计数数据、零膨胀",
    hintEn: "Hierarchical models, count data, and zero inflation",
    packageIds: ["lme4", "glmmtmb"]
  },
  {
    id: "model-selection",
    labelZh: "模型选择 / 比较",
    labelEn: "Model selection",
    hintZh: "AICc、模型平均、诊断与比较",
    hintEn: "AICc, model averaging, diagnostics, and comparison",
    packageIds: ["MuMIn", "performance", "lme4", "glmmtmb"]
  },
  {
    id: "bayesian",
    labelZh: "贝叶斯建模",
    labelEn: "Bayesian",
    hintZh: "Stan、多层模型、后验预测",
    hintEn: "Stan, multilevel models, and posterior workflows",
    packageIds: ["brms"]
  },
  {
    id: "sem",
    labelZh: "结构方程模型",
    labelEn: "SEM",
    hintZh: "分段 SEM、路径分析、潜变量",
    hintEn: "Piecewise SEM, path analysis, and latent variables",
    packageIds: ["piecewise-sem", "lavaan"]
  },
  {
    id: "meta",
    labelZh: "Meta 分析",
    labelEn: "Meta-analysis",
    hintZh: "森林图、漏斗图、元回归",
    hintEn: "Forest plots, funnel plots, and meta-regression",
    packageIds: ["metafor"]
  }
];

const researchGuideCards = {
  地理空间专题数据: {
    zh: {
      title: "中国制图与基础空间叠加",
      starter: "标准地图服务系统 + 天地图 + Natural Earth / GADM + HydroRIVERS + Geofabrik",
      questions: ["如何快速做中国国家、省、市、县多层级标准地图？", "如何叠加道路、河流、湖泊和行政边界做论文图？"]
    },
    en: {
      title: "China mapping and base overlays",
      starter: "National Standard Map Service + Tianditu + Natural Earth or GADM + HydroRIVERS + Geofabrik",
      questions: ["How do I assemble standard maps across national, provincial, prefectural, and county levels in China?", "How do I overlay roads, rivers, lakes, and boundaries for publication-ready figures?"]
    }
  },
  土地利用专题: {
    zh: {
      title: "土地利用变化与未来情景",
      starter: "WorldCover / GlobeLand30 / FROM-GLC + Copernicus LC100 + ESA CCI + LUH2 / 中国 SSP-RCP",
      questions: ["想比较不同土地覆盖产品的空间分辨率和时间连续性？", "想做历史变化、未来情景和生态响应的联动分析？"]
    },
    en: {
      title: "Land-use change and scenarios",
      starter: "WorldCover or GlobeLand30 or FROM-GLC + Copernicus LC100 + ESA CCI + LUH2 or China SSP-RCP",
      questions: ["How do I compare major land-cover products by resolution and temporal continuity?", "How do I connect historical land change with future scenarios and ecological responses?"]
    }
  },
  气候专题: {
    zh: {
      title: "气候基准面与未来预测",
      starter: "WorldClim / CHELSA + TerraClimate / ERA5-Land + CMFD 2.0 + 数据论文",
      questions: ["做 SDM 时应该优先选哪类气候面和时序气候数据？", "如何兼顾全球分析、中国区域和未来情景预测？"]
    },
    en: {
      title: "Climate baselines and projections",
      starter: "WorldClim or CHELSA + TerraClimate or ERA5-Land + CMFD 2.0 + data papers",
      questions: ["Which climate surfaces and time-series products are best suited to SDMs?", "How do I balance global coverage, China-focused analyses, and future projections?"]
    }
  },
  生物多样性专题: {
    zh: {
      title: "分布记录与群落变化",
      starter: "GBIF / eBird / OBIS + BioTIME / PREDICTS + sPlotOpen",
      questions: ["想获取全球物种出现记录、监测序列和群落变化数据？", "想比较陆地、海洋和长期时间序列数据的适用性？"]
    },
    en: {
      title: "Occurrences and community change",
      starter: "GBIF or eBird or OBIS + BioTIME or PREDICTS + sPlotOpen",
      questions: ["How do I gather global occurrences, monitoring series, and community-change datasets?", "How do I compare terrestrial, marine, and long-term biodiversity sources?"]
    }
  },
  保护地专题: {
    zh: {
      title: "保护优先区与保护成效",
      starter: "WDPCA + Protected Planet API + GD-PAME + KBA",
      questions: ["如何做保护地覆盖、空缺分析和关键生物多样性区域叠加？", "如何从面积覆盖拓展到管理成效和政策评估？"]
    },
    en: {
      title: "Priority areas and management outcomes",
      starter: "WDPCA + Protected Planet API + GD-PAME + KBA",
      questions: ["How do I run coverage or gap analyses and overlay protected areas with KBAs?", "How do I move from area coverage to management effectiveness and policy evaluation?"]
    }
  },
  "物种编目及生态性状": {
    zh: {
      title: "物种名录、红名录与性状整合",
      starter: "Catalogue of Life + IUCN Spatial Data + TRY + GIFT + AVONET / EltonTraits / PanTHERIA",
      questions: ["如何做学名清洗、同物异名处理和分类骨架统一？", "如何把植物和动物性状接入宏观生态和功能多样性分析？"]
    },
    en: {
      title: "Taxonomy, red lists, and traits",
      starter: "Catalogue of Life + IUCN Spatial Data + TRY + GIFT + AVONET or EltonTraits or PanTHERIA",
      questions: ["How do I standardize names, synonyms, and taxonomic backbones?", "How do I connect plant and animal traits to macroecology and functional analyses?"]
    }
  },
  人类活动与社会经济专题: {
    zh: {
      title: "人类压力与社会生态耦合",
      starter: "WorldPop / GPWv4 + VIIRS Nighttime Lights + Human Footprint + HYDE",
      questions: ["如何量化人口密度、夜间灯光和人类活动强度？", "如何把历史土地利用和人口变化接入生物多样性响应研究？"]
    },
    en: {
      title: "Human pressure and coupled systems",
      starter: "WorldPop or GPWv4 + VIIRS Nighttime Lights + Human Footprint + HYDE",
      questions: ["How do I quantify population density, night lights, and human activity intensity?", "How do I connect historical land use and population trajectories to biodiversity responses?"]
    }
  },
  "生态学 R 包专题": {
    zh: {
      title: "生态学 R 工作流导航",
      starter: "tidyverse / janitor + rstatix / car / emmeans + vegan / ade4 / ggvegan + biomod2 / ENMeval + unmarked + lme4 / glmmTMB / MuMIn / performance + brms + piecewiseSEM / lavaan",
      questions: ["我现在做的是数据清洗、假设检验、方差分析、排序分析、GLMM、模型比较还是 SEM？", "我想直接看中文教程、官方案例、微信精选案例还是高质量作图示例？"]
    },
    en: {
      title: "Ecology R workflow map",
      starter: "tidyverse or janitor + rstatix or car or emmeans + vegan or ade4 or ggvegan + biomod2 or ENMeval + unmarked + lme4 or glmmTMB or MuMIn or performance + brms + piecewiseSEM or lavaan",
      questions: ["Am I doing data cleaning, hypothesis tests, ANOVA, ordination, GLMMs, model comparison, or SEM?", "Do I want Chinese tutorials, official examples, WeChat-style writeups, or polished plotting references first?"]
    }
  },
  "生态学数据论文专题": {
    zh: {
      title: "数据论文与方法追踪",
      starter: "WorldClim / CHELSA / SoilGrids / Surface Water / PREDICTS / BioTIME / TRY / AVONET / LUH2 论文",
      questions: ["想快速找到高价值数据论文、数据说明文和代表性方法文章？", "想核对数据集的版本背景、变量定义和推荐引用方式？"]
    },
    en: {
      title: "Data papers and method tracking",
      starter: "WorldClim or CHELSA or SoilGrids or Surface Water or PREDICTS or BioTIME or TRY or AVONET or LUH2 papers",
      questions: ["How do I quickly find high-value data papers and dataset descriptor articles?", "How do I verify provenance, variable definitions, and recommended citations?"]
    }
  }
};

const quickAccessTags = [
  { id: "china-map", labelZh: "中国标准地图", labelEn: "China maps", category: "地理空间专题数据", query: "标准地图 天地图 China" },
  { id: "land-use", labelZh: "土地利用", labelEn: "Land use", category: "土地利用专题", query: "" },
  { id: "climate", labelZh: "气候", labelEn: "Climate", category: "气候专题", query: "" },
  { id: "biodiversity", labelZh: "生物多样性", labelEn: "Biodiversity", category: "生物多样性专题", query: "" },
  { id: "protected", labelZh: "保护地", labelEn: "Protected areas", category: "保护地专题", query: "" },
  { id: "china-data", labelZh: "中国权威数据", labelEn: "China data", category: "全部", query: "China 中国 RESDC 天地图 标准地图 青藏高原" },
  { id: "data-cleaning", labelZh: "数据整理", labelEn: "Data cleaning", category: "生态学 R 包专题", rTask: "data-cleaning" },
  { id: "testing", labelZh: "假设检验", labelEn: "Hypothesis tests", category: "生态学 R 包专题", rTask: "testing" },
  { id: "anova", labelZh: "方差分析", labelEn: "ANOVA", category: "生态学 R 包专题", rTask: "anova" },
  { id: "ordination", labelZh: "排序分析", labelEn: "Ordination", category: "生态学 R 包专题", rTask: "ordination" },
  { id: "glmm", labelZh: "GLMM", labelEn: "GLMM", category: "生态学 R 包专题", rTask: "glmm" },
  { id: "model-selection", labelZh: "模型选择", labelEn: "Model selection", category: "生态学 R 包专题", rTask: "model-selection" },
  { id: "papers", labelZh: "数据论文", labelEn: "Data papers", category: "生态学数据论文专题", query: "" }
];

const uiCopy = {
  zh: {
    homeLink: "返回主页",
    siteNote: "面向宏观生态学、生物地理学和保护生物学研究的数据导航站",
    heroEyebrow: "Open Data Navigator",
    heroTitle: "生态学数据网站",
    heroLead:
      "为宏观生态学、生物地理学和保护生物学研究整理的权威数据入口，覆盖标准地图与地理空间、土地利用/覆被、气候、生物多样性、保护地、物种编目与生态性状、人类活动与社会经济、生态学 R 包，以及高价值生态学数据论文。",
    heroTags: ["专业", "开源优先", "权威官网直达", "土地利用与标准地图", "微信教程与工作流"],
    tagNavEyebrow: "Quick Tags",
    tagNavTitle: "标签导航",
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
      },
      {
        title: "研究场景 4",
        body: "中国区域制图与空间叠加分析：推荐组合 标准地图服务系统 / 天地图 + RESDC / 地理资源分中心 + HydroRIVERS / Geofabrik。"
      },
      {
        title: "研究场景 5",
        body: "R 工作流起步：数据整理可用 tidyverse / janitor；假设检验与方差分析可用 rstatix / car / emmeans；排序与作图可用 ade4 / ggvegan；模型选择可用 MuMIn / performance。"
      },
      {
        title: "研究场景 6",
        body: "土地利用变化与未来情景：推荐组合 WorldCover / GlobeLand30 / FROM-GLC + Copernicus 100 m / ESA CCI + LUH2 / 中国 1 km SSP-RCP 情景。"
      }
    ],
    controlsEyebrow: "Browse",
    controlsTitle: "按专题、热度和时间筛选",
    workflowFilterEyebrow: "R Workflow Filters",
    workflowFilterTitle: "按任务筛选 R 包",
    workflowFilterHint: "点击任务即可快速切到对应的生态学 R 工作流。",
    searchLabel: "搜索关键词",
    searchPlaceholder: "输入数据源、机构、变量、土地利用、标准地图、R 包、教程、案例或专题关键词",
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
    guideEyebrow: "Research Paths",
    guideTitle: "推荐起步组合与研究问题",
    guideLead: "先按研究问题找到专题，再进入资源卡片快速定位数据和工具。",
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
      },
      {
        title: "土地利用专题",
        body: "土地利用专题优先收录免费开放下载、时间连续性强、空间分辨率清晰、并在 LUCC、生态评估、碳循环和情景研究中高频使用的产品。"
      },
      {
        title: "工具专题",
        body: "R 包专题优先收录生态学社区高频使用、文档完善、CRAN 可访问，且能直接支撑数据清洗、假设检验、方差分析、群落分析、SDM、占域模型、GLMM、模型比较、贝叶斯和 SEM 的成熟工具。"
      },
      {
        title: "教程与案例",
        body: "R 包卡片优先附中文教程、官方案例和公众号精选；优先收录生态学、地理学和 R 语言作图相关公众号原文或高质量镜像，如 RStata、BIO-SPRING 和 10100 等。"
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
    activeRTask: (label) => `R 工作流：${label}`,
    useFor: "重点标签",
    learningResourcesTitle: "教程与案例",
    guideStarterLabel: "推荐起步组合",
    guideQuestionsLabel: "常见研究问题",
    guideAction: "切到本专题",
    allTopicsShort: "全部专题"
  },
  en: {
    homeLink: "Back to main site",
    siteNote: "A curated data navigator for macroecology, biogeography, and conservation biology",
    heroEyebrow: "Open Data Navigator",
    heroTitle: "Ecological Data Hub",
    heroLead:
      "A curated gateway to authoritative resources for macroecology, biogeography, and conservation biology, covering standard maps and geospatial layers, land use and land cover, climate, biodiversity, protected areas, taxonomic catalogues and traits, human activity and socioeconomics, ecology-focused R packages, plus influential ecological data papers.",
    heroTags: ["Research-grade", "Open-first", "Official source links", "Land use and standard maps", "WeChat-style tutorials and workflows"],
    tagNavEyebrow: "Quick Tags",
    tagNavTitle: "Tag navigator",
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
      },
      {
        title: "Use case 4",
        body: "Mapping and overlay work in China: try the National Standard Map Service or Tianditu + RESDC or GRE + HydroRIVERS or Geofabrik."
      },
      {
        title: "Use case 5",
        body: "R workflow starter set: use tidyverse or janitor for cleaning, rstatix or car or emmeans for tests and ANOVA, ade4 or ggvegan for ordination, and MuMIn or performance for model selection."
      },
      {
        title: "Use case 6",
        body: "Land-use change and future scenarios: try WorldCover or GlobeLand30 or FROM-GLC + Copernicus 100 m or ESA CCI + LUH2 or the China 1 km SSP-RCP scenarios."
      }
    ],
    controlsEyebrow: "Browse",
    controlsTitle: "Filter by topic, importance, and time",
    workflowFilterEyebrow: "R Workflow Filters",
    workflowFilterTitle: "Filter ecology R packages by workflow",
    workflowFilterHint: "Tap a workflow to jump straight into the matching ecology R-tool set.",
    searchLabel: "Search keywords",
    searchPlaceholder: "Search datasets, institutions, variables, land use, standard maps, R packages, tutorials, examples, or topics",
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
    guideEyebrow: "Research Paths",
    guideTitle: "Starter stacks and research questions",
    guideLead: "Start from a research question, then jump into the matching topic and data or tool cards.",
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
      },
      {
        title: "Land-use topic",
        body: "The land-use topic prioritizes freely downloadable products with clear temporal coverage, explicit spatial resolution, and strong reuse in LUCC, ecosystem, carbon, and scenario research."
      },
      {
        title: "Software topic",
        body: "The R package topic prioritizes mature, ecology-facing packages with good documentation, active community use, and direct support for cleaning, hypothesis tests, ANOVA, biodiversity, SDMs, occupancy, GLMMs, model comparison, Bayesian models, and SEM."
      },
      {
        title: "Tutorial links",
        body: "R package cards prioritize Chinese tutorials, official examples, and WeChat-style picks, with a preference for strong ecology, geography, and R-plotting accounts such as RStata, BIO-SPRING, and 10100."
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
    activeRTask: (label) => `R workflow: ${label}`,
    useFor: "Quick tags",
    learningResourcesTitle: "Tutorials and examples",
    guideStarterLabel: "Starter stack",
    guideQuestionsLabel: "Common questions",
    guideAction: "Open topic",
    allTopicsShort: "All topics"
  }
};

const resourceDescriptionEn = {
  "esa-worldcover": "A global 10 m land-cover product suitable for habitat mapping, land-use change assessment, and coverage analyses inside protected areas.",
  globeland30: "A classic 30 m global land-cover product for the 2000 and 2010 epochs, widely used as a baseline in land-change, restoration, and ecosystem studies.",
  "from-glc": "Tsinghua University’s pioneering 30 m global land-cover map, an important milestone for high-resolution global land-cover mapping.",
  "from-glc10": "A 10 m global land-cover product from Tsinghua based on Sentinel-2 imagery, popular for high-resolution global land-cover and landscape analyses.",
  "glass-glc": "An annual global land-cover time series at 5 km from 1982 to 2015, highly useful for long-term change, trend, and global-change studies.",
  "copernicus-lc100": "A Copernicus annual global land-cover product at 100 m resolution for large-scale land-change, ecosystem, and cross-region analyses.",
  "esa-cci-land-cover": "A classic annual global land-cover time series at 300 m from 1992 onward, widely used in long-term change, climate, and consistency analyses.",
  soilgrids: "A standardized global soil raster product for plant distributions, niche modelling, and ecosystem function analyses.",
  hydrolakes: "A global polygon database of lakes widely used in freshwater ecology, connectivity studies, and conservation planning.",
  hydrorivers: "A global river network and attribute layer that serves as a key base map for catchment ecology, freshwater biogeography, and connectivity analyses.",
  "global-surface-water": "A Landsat-based global surface-water dynamics product for wetlands, river or lake change, and ecosystem-service studies.",
  "china-standard-map-service": "The official Chinese portal for standard maps across national, provincial, prefectural, and county levels, ideal for compliant cartography and administrative-boundary work.",
  tianditu: "China’s official national geospatial service platform for administrative boundaries, roads, rivers, labels, imagery, and vector basemaps.",
  "natural-earth": "A global open vector basemap source for administrative boundaries, roads, rivers, lakes, coastlines, and small-scale cartography.",
  gadm: "A widely used global administrative-boundary dataset for country, province, county, and other subnational analyses.",
  "geofabrik-osm": "A major open access route to OpenStreetMap extracts for roads, waterways, rail, settlements, and other vector features.",
  resdc: "A long-running Chinese resource and environment data portal offering widely used land-use, NDVI, regionalization, transport, and socioeconomic base layers.",
  "geodata-resource-center": "One of China’s most authoritative integrated geography portals, aggregating land use, vegetation, phenology, socioeconomics, environment, and Earth observation resources.",
  "remote-sensing-cloud": "An important Chinese entry point for Landsat archives, multi-source imagery, and derivative products used in land cover, vegetation, and land-surface studies.",
  "glass-products": "A flagship family of land-surface parameter products covering LAI, FAPAR, ET, PAR, FVC, albedo, and related variables for ecosystem and productivity modelling.",
  "landcover-special-cn": "A Chinese thematic portal for multi-period and multi-scale land-cover products, useful for LUCC, habitat, and restoration studies.",
  "china-phenology-network": "Chinese phenology observations suitable for vegetation seasonality, climate responses, phenological mismatch, and productivity seasonality research.",
  "allweather-land-parameters": "All-weather land-surface parameter products for China, useful for long-term ecosystem and surface-process studies in cloudy regions.",
  "vegetation-clumping-index": "A specialist vegetation structure product that improves radiative transfer, canopy structure, and productivity estimation.",
  mod17a3hgf: "The standard annual 500 m global GPP and NPP product, widely used in macroecology, carbon-cycle, and ecosystem productivity studies.",
  mcd12q1: "The official global land-cover type product with multiple classification schemes such as IGBP and PFT, often used as a baseline land-cover layer.",
  "mod44b-vcf": "A continuous vegetation fields product providing tree cover and non-tree vegetation fractions for canopy and landscape-structure analyses.",
  "tpdc-par": "A high-resolution PAR dataset that directly supports photosynthesis, NPP estimation, and carbon-cycle modelling.",
  "tpdc-grassland-type": "A Tibetan Plateau grassland type map suitable for alpine grassland classification, grazing management, habitat analyses, and restoration work.",
  "tpdc-qilian-npp": "A 30 m monthly NPP product for the Qilian Mountains, useful for mountain productivity dynamics, restoration, and ecological engineering studies.",
  "tpdc-qilian-fvc": "A 30 m monthly fractional vegetation cover product for the Qilian Mountains, useful for fine-scale monitoring of alpine grasslands and restoration change.",
  "era5-land": "High-frequency land reanalysis data suited to extreme events, time-series analyses, and process-oriented ecological work.",
  chelsa: "High-resolution climate and bioclimatic surfaces, especially valuable in mountains and complex terrain for species distribution models.",
  worldclim: "One of the most widely used global climate raster products in ecology and biogeography, with historical, bioclimatic, and future scenario layers.",
  terraclimate: "A monthly climate and climatic water-balance dataset for ecohydrology, drought stress, and water limitation analyses.",
  "cru-ts": "A long global climate time series suited to historical trends, driver attribution, and long-term change studies.",
  "tpdc-lai-30m": "A 30 m LAI dataset for the Tibetan Plateau, useful for alpine vegetation structure, productivity, and hydroclimatic response analyses.",
  "cmfd-2": "A high-accuracy Chinese meteorological forcing dataset widely used as input for land-surface, hydrological, and ecosystem productivity models.",
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
  "china-lulc-ssp-rcp": "A 1 km future land-use and land-cover dataset for China covering 24 SSP-RCP scenarios from 2020 to 2100, useful for ecosystem services, carbon, and scenario assessments.",
  "viirs-nightlights": "Nighttime lights can act as a proxy for human activity intensity, infrastructure, and urbanization.",
  "human-footprint": "A composite global human-pressure product widely used for extinction risk, conservation gaps, and ecological intactness.",
  ade4: "A classic ordination and multivariate-analysis package covering PCA, CA, DCA, and related workflows for community ecology.",
  adespatial: "An extension package for spatial ecology and ordination, useful for Moran eigenvector methods, dbMEM analyses, and spatially explicit community workflows.",
  ggvegan: "A high-value companion to vegan that turns ordination results into more modern, publication-ready ggplot-style figures.",
  tidyverse: "The core tidy-data ecosystem for wrangling, reshaping, cleaning, and visualizing ecological datasets in reproducible workflows.",
  janitor: "A practical cleaning package for column names, duplicates, tabulations, and fast cleanup of messy ecological tables.",
  rstatix: "A streamlined ecology-friendly package for hypothesis tests, ANOVA, effect sizes, and post hoc comparisons.",
  "car-package": "A classic package for regression and ANOVA workflows, including Type II or III tests, Levene tests, and diagnostics.",
  emmeans: "The standard package for estimated marginal means, simple effects, and post hoc contrasts after ANOVA, GLMMs, and regressions.",
  MuMIn: "A classic package for model selection, AICc-based comparison, dredging, and model averaging in multi-model inference workflows.",
  performance: "A high-use easystats package for model diagnostics, goodness-of-fit summaries, and comparison across common ecological model classes.",
  vegan: "The flagship R package for community ecology, ordination, diversity indices, permutation tests, and vegetation analyses.",
  inext: "A leading R package for rarefaction, extrapolation, coverage-based comparisons, and Hill-number diversity estimation.",
  betapart: "A specialist R package for beta-diversity partitioning into turnover and nestedness components.",
  "fd-package": "A standard R package for functional diversity metrics such as FRic, FEve, and FDiv in trait-based ecology.",
  biomod2: "A flagship R workflow for ensemble species distribution modelling, projections, and scenario-based forecasting.",
  enmeval: "A widely used R package for tuning and evaluating Maxent or maxnet ecological niche models.",
  ecospat: "A niche and biogeography package for overlap analyses, environmental-space methods, and range-dynamics workflows.",
  unmarked: "A core R package for occupancy, detection, abundance, and N-mixture models based on ecological monitoring data.",
  lme4: "The standard R package for linear and generalized linear mixed-effects models in ecology and beyond.",
  glmmtmb: "A high-use R package for complex GLMMs, especially zero-inflated, overdispersed, and count-data models.",
  metafor: "One of the most authoritative R packages for meta-analysis, multilevel meta-regression, and effect-size synthesis.",
  brms: "A leading R interface to Stan for Bayesian multilevel and distributionally flexible ecological models.",
  "piecewise-sem": "A popular ecology-facing package that connects mixed models to piecewise structural equation modelling.",
  lavaan: "A mainstream package for covariance-based SEM, CFA, latent variables, and path modelling.",
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

const packageLearningResources = {
  ade4: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "PCA 入门，适合先熟悉 ade4 的语法与排序图。",
      noteEn: "A PCA-focused starter for learning ade4 syntax and ordination graphics.",
      url: "https://officeguide.cc/r-pca-principal-components-analysis-tutorial/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "ade4 官方入口，集中查看排序、多元分析与文档示例。",
      noteEn: "Official ade4 entry point with ordination, multivariate, and documentation examples.",
      url: "https://adeverse.github.io/ade4/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 生态排序文章，适合搭配 ade4 / vegan 对照学习。",
      noteEn: "A BIO-SPRING ordination article that pairs well with ade4 or vegan workflows.",
      url: "https://bio-spring.top/post/2018/10/22/ordination-analysis-in-r/"
    }
  ],
  adespatial: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "BIO-SPRING 的生态排序文章，适合作为空间排序、梯度解释和群落结构分析的中文起点。",
      noteEn: "A BIO-SPRING ordination article that works well as a Chinese starting point for spatial ordination, gradient reading, and community-structure analyses.",
      url: "https://bio-spring.top/post/2018/10/22/ordination-analysis-in-r/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "adespatial 官方入口，适合查看空间特征向量与排序流程。",
      noteEn: "Official adespatial entry point for Moran eigenvector and spatial-ordination workflows.",
      url: "https://adeverse.github.io/adespatial/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "RStata 的配色与图层文章，适合把空间排序图和群落图进一步打磨成论文级图形。",
      noteEn: "An RStata article on palettes and layers that helps polish spatial ordination and community plots into publication-style figures.",
      url: "https://tidyfriday.cn/posts/18040/index.html"
    }
  ],
  ggvegan: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "RStata 的配色与图层文章，适合把 ggvegan 图做得更像论文图。",
      noteEn: "An RStata article on palettes and layers that helps turn ggvegan figures into publication-style plots.",
      url: "https://tidyfriday.cn/posts/18040/index.html"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "ggvegan 官方主页，直接看排序图、分层图与图形语法。",
      noteEn: "The official ggvegan site with ordination figures, layers, and grammar examples.",
      url: "https://gavinsimpson.github.io/ggvegan/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 排序分析文章，适合对照学习生态排序图和环境梯度解释。",
      noteEn: "A BIO-SPRING ordination article useful for reading ecological plots and environmental gradients.",
      url: "https://bio-spring.top/post/2018/10/22/ordination-analysis-in-r/"
    }
  ],
  tidyverse: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "RStata 数据整理案例，适合用 tidyverse 理解真实中文数据清洗流程。",
      noteEn: "An RStata wrangling case that uses tidyverse-style ideas for real Chinese data-cleaning workflows.",
      url: "https://tidyfriday.cn/posts/20729/index.html"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "tidyverse 官网入口，可直接查看 tidy data、管道和可视化案例。",
      noteEn: "The tidyverse site with tidy-data, piping, and visualization examples.",
      url: "https://www.tidyverse.org/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "RStata 数据整理案例，适合看真实中文数据清洗工作流。",
      noteEn: "A WeChat-style RStata case study showing a real Chinese data-cleaning workflow.",
      url: "https://tidyfriday.cn/posts/38638/index.html"
    }
  ],
  janitor: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "RStata 数据清洗案例，适合理解 janitor 在字段和表格整理里的位置。",
      noteEn: "An RStata cleaning case that helps place janitor into field-name and table-cleaning workflows.",
      url: "https://tidyfriday.cn/posts/38638/index.html"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "janitor 官方文档，适合直接查看 clean_names、tabyl 等函数案例。",
      noteEn: "The janitor docs with examples for clean_names, tabyl, and related helpers.",
      url: "https://sfirke.github.io/janitor/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "公众号转载的数据清洗工具合集，适合把 janitor 放进完整清洗流程里理解。",
      noteEn: "A WeChat-style roundup of data-cleaning tools that helps place janitor into a full wrangling workflow.",
      url: "https://cloud.tencent.com.cn/developer/article/1425619"
    }
  ],
  rstatix: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "BIO-SPRING 假设检验文章，适合先建立 t 检验、非参数检验和方差分析的整体框架。",
      noteEn: "A BIO-SPRING article on hypothesis tests that helps build a coherent foundation for t-tests, nonparametric tests, and ANOVA.",
      url: "https://bio-spring.top/post/2019/09/23/basic-stats-in-r/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "rstatix 官方主页，含 pipe 友好的统计检验与 ANOVA 示例。",
      noteEn: "The official rstatix site with pipe-friendly hypothesis tests and ANOVA examples.",
      url: "https://rpkgs.datanovia.com/rstatix/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 的 ANOVA + TukeyHSD 文章，适合直接看方差分析和事后比较的作图流程。",
      noteEn: "A BIO-SPRING ANOVA plus TukeyHSD article that is useful for seeing the full plotting workflow for ANOVA and post hoc tests.",
      url: "https://r.bio-spring.top/2019/09/24/anova-turkeyhsd-plotting/"
    }
  ],
  "car-package": [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "BIO-SPRING 假设检验文章，适合理解方差分析、非参数检验和回归检验的基础场景。",
      noteEn: "A BIO-SPRING hypothesis-testing article useful for understanding where ANOVA, nonparametric tests, and regression checks fit.",
      url: "https://bio-spring.top/post/2019/09/23/basic-stats-in-r/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "car 文档页，适合直接查阅 Anova、LeveneTest 和诊断函数。",
      noteEn: "A car docs hub for Anova, LeveneTest, and diagnostic functions.",
      url: "https://rdrr.io/cran/car/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 的 ANOVA + TukeyHSD 文章，适合配合 car::Anova 和 LeveneTest 理解完整检验流程。",
      noteEn: "A BIO-SPRING ANOVA plus TukeyHSD article that pairs well with car::Anova and LeveneTest.",
      url: "https://r.bio-spring.top/2019/09/24/anova-turkeyhsd-plotting/"
    }
  ],
  emmeans: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "BIO-SPRING 的 ANOVA + TukeyHSD 文章，适合作为理解事后比较与组间差异可视化的起点。",
      noteEn: "A BIO-SPRING ANOVA plus TukeyHSD article that works well as a starting point for post hoc comparisons and group-difference plotting.",
      url: "https://r.bio-spring.top/2019/09/24/anova-turkeyhsd-plotting/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "emmeans 官方站点，含对比、边际均值和可视化示例。",
      noteEn: "The official emmeans site with contrasts, marginal means, and visualization examples.",
      url: "https://rvlenth.github.io/emmeans/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 的方差分析作图文章，适合对照理解边际均值和组间比较的结果表达。",
      noteEn: "A BIO-SPRING ANOVA plotting article that helps interpret marginal means and group contrasts.",
      url: "https://r.bio-spring.top/2019/09/24/anova-turkeyhsd-plotting/"
    }
  ],
  MuMIn: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "10100 的混合线性模型词条，适合先建立候选模型、AIC 类比较和多模型推断的整体概念。",
      noteEn: "A 10100 mixed-linear-model explainer that helps build intuition for candidate models, AIC-style comparison, and multi-model inference.",
      url: "https://www.10100.com/article/41710296"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "MuMIn 文档页，适合直接查看 dredge、model.avg 等函数示例。",
      noteEn: "A MuMIn docs hub for dredge, model.avg, and related examples.",
      url: "https://rdrr.io/cran/MuMIn/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修生态环境课程页，适合把 MuMIn 放进生态建模、模型筛选和比较的完整流程里理解。",
      noteEn: "An Ai尚研修 ecology-course page that helps place MuMIn inside a full ecological workflow of model screening and comparison.",
      url: "https://www.10100.com/article/9259060"
    }
  ],
  performance: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "10100 的混合线性模型词条，适合理解诊断、残差检查和拟合优度比较在生态模型中的位置。",
      noteEn: "A 10100 mixed-linear-model explainer that helps place diagnostics, residual checks, and goodness-of-fit comparisons in ecological modelling.",
      url: "https://www.10100.com/article/41710296"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "performance 官方主页，适合查看 check_model、compare_performance 等案例。",
      noteEn: "The official performance site with check_model and compare_performance examples.",
      url: "https://easystats.github.io/performance/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修生态环境课程页，适合把 performance 接到 GLMM、回归和模型比较工作流中理解。",
      noteEn: "An Ai尚研修 ecology-course page that helps place performance into GLMM, regression, and model-comparison workflows.",
      url: "https://www.10100.com/article/9259060"
    }
  ],
  vegan: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "排序分析中文入门，含 PCA、NMDS、RDA、CCA 等核心流程。",
      noteEn: "A Chinese ordination primer covering PCA, NMDS, RDA, CCA, and related workflows.",
      url: "https://bio-spring.top/post/2018/10/22/ordination-analysis-in-r/"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "vegan FAQ 与文档入口，适合系统熟悉函数体系与常见问题。",
      noteEn: "The vegan FAQ and docs hub for learning the package structure and common workflows.",
      url: "https://vegandevs.github.io/vegan/articles/FAQ-vegan.html"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "BIO-SPRING 生态学排序文章，适合学习解释排序轴与环境变量。",
      noteEn: "A BIO-SPRING ecology article useful for reading ordination axes and environmental vectors.",
      url: "https://bio-spring.top/post/2018/10/17/bray-curtis-dissimilarity/"
    }
  ],
  inext: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "稀释与外推、多样性覆盖度和 Hill numbers 的中文入门。",
      noteEn: "A Chinese introduction to rarefaction, extrapolation, coverage, and Hill numbers.",
      url: "https://cloud.tencent.com/developer/article/1624003"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "iNEXT 官方主页，含 ggiNEXT 图形、示例数据与 vignette 入口。",
      noteEn: "The official iNEXT page with ggiNEXT figures, example data, and vignette links.",
      url: "https://johnsonhsieh.github.io/iNEXT/"
    },
    {
      labelZh: "精选示例",
      labelEn: "Curated example",
      noteZh: "iNEXT 方法论文，适合配合图形输出理解样本覆盖与多样性比较。",
      noteEn: "The core iNEXT methods paper for understanding coverage-based comparisons and plot outputs.",
      url: "https://doi.org/10.1111/2041-210X.12613"
    }
  ],
  betapart: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "beta 多样性分解中文教程，适合理解周转与嵌套性指标。",
      noteEn: "A Chinese tutorial on beta-diversity partitioning into turnover and nestedness.",
      url: "https://cloud.tencent.com/developer/article/1635073"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "betapart 文档入口，可直接查看 pairwise 与 multiple-site 计算示例。",
      noteEn: "A package docs hub for pairwise and multiple-site beta-diversity examples.",
      url: "https://cran.r-universe.dev/betapart"
    },
    {
      labelZh: "精选示例",
      labelEn: "Curated example",
      noteZh: "中文 beta 脚本笔记，适合快速比对输出结果与图形表达。",
      noteEn: "A Chinese beta-diversity script note that is handy for comparing outputs and plots.",
      url: "https://helixcn.github.io/2019/07/10/2019-7-10-beta/"
    }
  ],
  "fd-package": [
    {
      labelZh: "中文解读",
      labelEn: "Chinese explainer",
      noteZh: "中文应用论文，适合理解功能多样性指标在生态研究中的解释方式。",
      noteEn: "A Chinese application paper showing how functional-diversity indices are interpreted in ecology.",
      url: "https://www.plant-ecology.com/article/2023/1005-264X/1005-264X-47-6-822.shtml"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "dbFD 核心函数说明与示例，是使用 FD 包的最好起点之一。",
      noteEn: "The dbFD help page with core examples, one of the best entry points to the FD package.",
      url: "https://search.r-project.org/CRAN/refmans/FD/html/dbFD.html"
    },
    {
      labelZh: "精选示例",
      labelEn: "Curated example",
      noteZh: "功能多样性与生态功能案例解读，适合对照指标含义与论文写法。",
      noteEn: "A functional-diversity case study helpful for matching index meaning to ecological interpretation.",
      url: "https://www.ebiotrade.com/newsf/2025-5/20250513002433391.htm"
    }
  ],
  biomod2: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修的生态环境多元分析课程页，明确列出 biomod2 物种分布模拟专题，适合作为中文入口。",
      noteEn: "An Ai尚研修 ecology-course page that explicitly lists a biomod2 species-distribution module as a Chinese entry point.",
      url: "https://www.10100.com/article/9259060"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "biomod2 官方主页，适合查看 ensemble modelling 与预测流程。",
      noteEn: "The official biomod2 site for ensemble-modelling and projection workflows.",
      url: "https://biomodhub.github.io/biomod2/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "海龟热点研究的公众号镜像，文中直接展示 biomod2 在气候情景和保护规划中的应用。",
      noteEn: "A WeChat-style mirror of a sea-turtle hotspot study that directly shows biomod2 in climate-scenario and conservation-planning work.",
      url: "https://www.10100.com/article/41646541"
    }
  ],
  enmeval: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修生态环境课程页，明确覆盖物种分布模型路线，适合作为 ENMeval 调参与评估的中文入口。",
      noteEn: "An Ai尚研修 ecology-course page that explicitly covers species-distribution workflows and works as a Chinese entry point to ENMeval tuning and evaluation.",
      url: "https://www.10100.com/article/9259060"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "ENMeval 官方主页，直接看自动调参与生态位模型评估流程。",
      noteEn: "The official ENMeval site for automated tuning and niche-model evaluation workflows.",
      url: "https://jamiemkass.github.io/ENMeval/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "海龟热点研究的公众号镜像，适合结合 ENMeval 理解变量调优、情景预测和保护应用。",
      noteEn: "A WeChat-style mirror of a sea-turtle hotspot study that pairs well with ENMeval for tuning, scenario projections, and conservation applications.",
      url: "https://www.10100.com/article/41646541"
    }
  ],
  ecospat: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修生态环境课程页，适合作为生态位建模、环境空间分析和分布变化研究的中文入口。",
      noteEn: "An Ai尚研修 ecology-course page that works as a Chinese entry point for niche modelling, environmental-space analyses, and range-shift studies.",
      url: "https://www.10100.com/article/9259060"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "ecospat 生态位相似性函数说明，可直观看 overlap 分析流程。",
      noteEn: "An ecospat niche-similarity reference page that shows the overlap workflow clearly.",
      url: "https://rdrr.io/cran/ecospat/man/ecospat.niche.similarity.test.html"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "海龟热点研究的公众号镜像，适合对照理解生态位空间、气候情景和潜在分布图的表达。",
      noteEn: "A WeChat-style mirror of a sea-turtle hotspot study that helps interpret niche space, climate scenarios, and projected distribution maps.",
      url: "https://www.10100.com/article/41646541"
    }
  ],
  unmarked: [
    {
      labelZh: "中文案例",
      labelEn: "Chinese example",
      noteZh: "单季占域模型中文应用解读，适合理解检测概率与占域率输出。",
      noteEn: "A Chinese single-season occupancy case for understanding detection and occupancy outputs.",
      url: "https://www.ebiotrade.com/newsf/2026-1/20260125000550358.htm"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "unmarked 官方入口，适合查看 occupancy、N-mixture 与动态模型文档。",
      noteEn: "The official unmarked entry point for occupancy, N-mixture, and dynamic-model docs.",
      url: "https://rbchan.github.io/unmarked/"
    },
    {
      labelZh: "精选示例",
      labelEn: "Curated example",
      noteZh: "被动声学监测占域分析示例，适合理解 unmarked 的生态监测应用。",
      noteEn: "A passive-acoustic occupancy example that illustrates ecological monitoring applications of unmarked.",
      url: "https://www.ebiotrade.com/newsf/2025-3/20250321001325629.htm"
    }
  ],
  lme4: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "10100 的混合线性模型词条，适合先建立随机效应、层级结构和 REML 等基本概念。",
      noteEn: "A 10100 mixed-linear-model explainer that is useful for building intuition about random effects, hierarchy, and REML.",
      url: "https://www.10100.com/article/41710296"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "lme4 官方主页，适合查看 LMM / GLMM 基础范式与文档。",
      noteEn: "The official lme4 site for core LMM or GLMM patterns and documentation.",
      url: "https://lme4.github.io/lme4/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修生态环境课程页，明确包含混合效应模型专题，适合作为生态应用入口。",
      noteEn: "An Ai尚研修 ecology-course page that explicitly includes a mixed-effects module, useful as an ecology-facing entry point.",
      url: "https://www.10100.com/article/9259060"
    }
  ],
  glmmtmb: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修生态环境课程页，包含混合效应与复杂模型专题，适合作为 glmmTMB 的中文路线入口。",
      noteEn: "An Ai尚研修 ecology-course page with mixed-effects and complex-model modules that works as a Chinese entry point for glmmTMB-style workflows.",
      url: "https://www.10100.com/article/9259060"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "glmmTMB 官方主页，适合查看复杂 GLMM 与诊断文档。",
      noteEn: "The official glmmTMB site for complex GLMM workflows and diagnostics.",
      url: "https://glmmtmb.github.io/glmmTMB/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "10100 的混合线性模型词条，适合理解复杂随机结构与混合模型的整体位置。",
      noteEn: "A 10100 mixed-linear-model explainer that helps place complex random structures and mixed models in context.",
      url: "https://www.10100.com/article/41710296"
    }
  ],
  metafor: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "10100 的热文汇总页，集中整理了 Meta 分析全流程、森林图和发表偏倚等内容入口。",
      noteEn: "A 10100 roundup page that aggregates meta-analysis workflow, forest-plot, and publication-bias entry points.",
      url: "https://www.10100.com/article/9645100"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "metafor 官方主页，集中展示 forest、funnel 和 meta-regression 图。",
      noteEn: "The official metafor site featuring forest, funnel, and meta-regression plot examples.",
      url: "https://wviechtb.github.io/metafor/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "10100 的 Meta 专题入口，适合继续追踪森林图、亚组分析和偏倚检验的公众号内容。",
      noteEn: "A 10100 meta-analysis hub that is useful for following WeChat-style content on forest plots, subgroup analyses, and bias checks.",
      url: "https://www.10100.com/article/9645100"
    }
  ],
  brms: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修的 piecewiseSEM 课程页中组合列出贝叶斯方法专题，适合作为生态贝叶斯建模的中文入口。",
      noteEn: "An Ai尚研修 piecewiseSEM course page that explicitly bundles an ecology-focused Bayesian module, useful as a Chinese entry point.",
      url: "https://www.10100.com/article/10005616"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "brms 官方主页，适合查看贝叶斯回归、层级模型与可视化入口。",
      noteEn: "The official brms site with Bayesian regression, hierarchical-model, and visualization entry points.",
      url: "https://paulbuerkner.com/brms/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修生态环境课程页中同时列出贝叶斯与混合效应专题，适合对照中文应用场景。",
      noteEn: "An Ai尚研修 ecology-course page that lists both Bayesian and mixed-effects modules, useful for Chinese application contexts.",
      url: "https://www.10100.com/article/9259060"
    }
  ],
  "piecewise-sem": [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修的 piecewiseSEM 生态环境专题，适合作为最贴近生态应用场景的中文入口。",
      noteEn: "An Ai尚研修 piecewiseSEM ecology page that serves as one of the most ecology-facing Chinese entry points.",
      url: "https://www.10100.com/article/10005616"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "piecewiseSEM 官方主页，适合查看生态路径模型工作流。",
      noteEn: "The official piecewiseSEM site for ecology-facing path-model workflows.",
      url: "https://jslefche.github.io/piecewiseSEM/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修的生态环境专题介绍，直接点出 piecewiseSEM 在生态与地学中的应用优势。",
      noteEn: "An Ai尚研修 ecology article that directly highlights the strengths of piecewiseSEM in ecological and geoscience work.",
      url: "https://www.10100.com/article/10005616"
    }
  ],
  lavaan: [
    {
      labelZh: "中文教程",
      labelEn: "Chinese tutorial",
      noteZh: "Ai尚研修生态环境结构方程模型课程页，适合作为中文 SEM 入门入口。",
      noteEn: "An Ai尚研修 ecology-focused SEM course page that works as a Chinese entry point to SEM workflows.",
      url: "https://www.10100.com/article/10005616"
    },
    {
      labelZh: "官方案例",
      labelEn: "Official examples",
      noteZh: "lavaan 官方教程入口，适合系统查看 CFA、SEM 与多层模型示例。",
      noteEn: "The official lavaan tutorial hub for CFA, SEM, and multilevel examples.",
      url: "https://lavaan.ugent.be/tutorial/"
    },
    {
      labelZh: "公众号精选",
      labelEn: "WeChat pick",
      noteZh: "Ai尚研修生态环境 SEM 专题，适合配合 lavaan 理解路径图与因果结构表达。",
      noteEn: "An Ai尚研修 ecology-focused SEM page that pairs well with lavaan for reading path diagrams and causal structures.",
      url: "https://www.10100.com/article/10005616"
    }
  ]
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
    "开放访问 / 数据下载": "Open access / data download",
    "CRAN / 文档 / 教程": "CRAN / docs / tutorials"
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
    "2025-11 后启用新结构": "New structure enabled after 2025-11",
    "数据迁移后持续可访问": "Still accessible after data migration"
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
    "平台主页": "Platform site",
    "CRAN 页面": "CRAN page"
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
const workflowFilterPanel = document.querySelector("#workflowFilterPanel");
const workflowFilters = document.querySelector("#workflowFilters");
const resourceSections = document.querySelector("#resourceSections");
const resultSummary = document.querySelector("#resultSummary");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const introStrip = document.querySelector("#introStrip");
const guideGrid = document.querySelector("#guideGrid");
const methodologyGrid = document.querySelector("#methodologyGrid");
const languageButtons = document.querySelectorAll("[data-lang]");
const featuredStack = document.querySelector("#featuredStack");
const tagNavBar = document.querySelector("#tagNavBar");
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

function getRTaskMeta(taskId) {
  return rPackageTasks.find((task) => task.id === taskId) || rPackageTasks[0];
}

function getRTaskLabel(taskId) {
  const task = getRTaskMeta(taskId);
  return state.lang === "zh" ? task.labelZh : task.labelEn;
}

function itemMatchesRTask(item, taskId) {
  if (taskId === "all") {
    return true;
  }
  if (item.category !== "生态学 R 包专题") {
    return false;
  }
  return getRTaskMeta(taskId).packageIds?.includes(item.id) || false;
}

function isOpenAccess(item) {
  return item.access.includes("开放") || item.access.toLowerCase().includes("open");
}

function matchesQuery(item, query) {
  if (!query) {
    return true;
  }

  const learningTerms = (packageLearningResources[item.id] || []).flatMap((resource) => [
    resource.labelZh,
    resource.labelEn,
    resource.noteZh,
    resource.noteEn
  ]);

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
    ...learningTerms,
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
    const rTaskOk = itemMatchesRTask(item, state.rTask);
    const queryOk = matchesQuery(item, state.query);
    const flagshipOk = !state.flagshipOnly || item.heat >= 4;
    const openOk = !state.openOnly || isOpenAccess(item);
    return categoryOk && rTaskOk && queryOk && flagshipOk && openOk;
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
  document.querySelector("#tagNavEyebrow").textContent = ui.tagNavEyebrow;
  document.querySelector("#tagNavTitle").textContent = ui.tagNavTitle;
  document.querySelector("#browseLink").textContent = ui.browseLink;
  document.querySelector("#criteriaLink").textContent = ui.criteriaLink;
  document.querySelector("#legendTitle").textContent = ui.legendTitle;
  document.querySelector("#legendDescription").textContent = ui.legendDescription;
  document.querySelector("#featuredEyebrow").textContent = ui.featuredEyebrow;
  document.querySelector("#featuredTitle").textContent = ui.featuredTitle;
  document.querySelector("#controlsEyebrow").textContent = ui.controlsEyebrow;
  document.querySelector("#controlsTitle").textContent = ui.controlsTitle;
  document.querySelector("#workflowFilterEyebrow").textContent = ui.workflowFilterEyebrow;
  document.querySelector("#workflowFilterTitle").textContent = ui.workflowFilterTitle;
  document.querySelector("#workflowFilterHint").textContent = ui.workflowFilterHint;
  document.querySelector("#searchLabel").textContent = ui.searchLabel;
  document.querySelector("#sortLabel").textContent = ui.sortLabel;
  document.querySelector("#guideEyebrow").textContent = ui.guideEyebrow;
  document.querySelector("#guideTitle").textContent = ui.guideTitle;
  document.querySelector("#guideLead").textContent = ui.guideLead;
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

function renderTagNav() {
  tagNavBar.innerHTML = quickAccessTags
    .map(
      (tag) => `
        <button type="button" class="tag-nav-btn" data-quick-tag="${tag.id}">
          ${state.lang === "zh" ? tag.labelZh : tag.labelEn}
        </button>
      `
    )
    .join("");

  tagNavBar.querySelectorAll("[data-quick-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = quickAccessTags.find((item) => item.id === button.dataset.quickTag);
      if (!tag) {
        return;
      }

      state.category = tag.category || "全部";
      state.rTask = tag.rTask || "all";
      state.query = tag.query || "";
      searchInput.value = state.query;
      renderAll();
      document.querySelector("#browse")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderFeaturedStack() {
  const ui = getUi();
  const filteredPicks = getFilteredResources().filter((item) => item.heat >= 3);
  const picks = [...(filteredPicks.length ? filteredPicks : resources.filter((item) => item.heat >= 3))]
    .sort(compareByHeat)
    .slice(0, 5);

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
      if (state.category !== "全部" && state.category !== "生态学 R 包专题") {
        state.rTask = "all";
      }
      renderAll();
    });
  });
}

function renderWorkflowFilters() {
  workflowFilterPanel.hidden = false;
  workflowFilters.innerHTML = rPackageTasks
    .map(
      (task) => `
        <button
          type="button"
          class="workflow-chip ${state.rTask === task.id ? "is-active" : ""}"
          data-r-task="${task.id}"
        >
          <strong>${state.lang === "zh" ? task.labelZh : task.labelEn}</strong>
          <small>${state.lang === "zh" ? task.hintZh : task.hintEn}</small>
        </button>
      `
    )
    .join("");

  workflowFilters.querySelectorAll("[data-r-task]").forEach((button) => {
    button.addEventListener("click", () => {
      state.rTask = button.dataset.rTask;
      if (state.rTask !== "all") {
        state.category = "生态学 R 包专题";
      }
      renderAll();
      document.querySelector("#browse")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      if (state.category !== "全部" && state.category !== "生态学 R 包专题") {
        state.rTask = "all";
      }
      renderAll();
      document.querySelector("#browse")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderResearchGuides() {
  const ui = getUi();
  const categories = categoryMeta.filter(
    (category) =>
      category.id !== "全部" &&
      (state.rTask !== "all"
        ? category.id === "生态学 R 包专题"
        : state.category === "全部" || category.id === state.category)
  );

  guideGrid.innerHTML = categories
    .map((category) => {
      const guide = researchGuideCards[category.id]?.[state.lang] || researchGuideCards[category.id]?.zh;
      if (!guide) {
        return "";
      }

      return `
        <article class="guide-card">
          <div class="guide-card-top">
            <span class="topic-badge">${getCategoryMeta(category.id).label}</span>
            <span class="guide-action-meta">${ui.countLabel(resources.filter((item) => item.category === category.id).length)}</span>
          </div>
          <div class="guide-copy">
            <h3>${guide.title}</h3>
            <p><strong>${ui.guideStarterLabel}:</strong> ${guide.starter}</p>
          </div>
          <div class="guide-questions">
            <p class="guide-section-label">${ui.guideQuestionsLabel}</p>
            ${guide.questions.map((question) => `<span class="guide-question">${question}</span>`).join("")}
          </div>
          <button type="button" class="guide-action" data-guide-topic="${category.id}">${ui.guideAction}</button>
        </article>
      `;
    })
    .join("");

  guideGrid.querySelectorAll("[data-guide-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.guideTopic;
      if (state.category !== "生态学 R 包专题") {
        state.rTask = "all";
      }
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
  if (state.rTask !== "all") {
    pills.push(ui.activeRTask(getRTaskLabel(state.rTask)));
  }
  if (state.query) {
    pills.push(`"${state.query}"`);
  }

  activeFilters.innerHTML = pills.map((pill) => `<span class="active-pill">${pill}</span>`).join("");
}

function renderLearningResources(item) {
  const resources = packageLearningResources[item.id];
  if (!resources || !resources.length) {
    return "";
  }

  const ui = getUi();
  const isZh = state.lang === "zh";

  return `
    <section class="learning-resources" aria-label="${ui.learningResourcesTitle}">
      <p class="learning-heading">${ui.learningResourcesTitle}</p>
      <div class="learning-grid">
        ${resources
          .map(
            (resource) => `
              <a class="learning-link" href="${resource.url}" target="_blank" rel="noopener">
                <span class="learning-kind">${isZh ? resource.labelZh : resource.labelEn}</span>
                <span class="learning-note">${isZh ? resource.noteZh : resource.noteEn}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
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
      ${renderLearningResources(item)}
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
  renderTagNav();
  renderFeaturedStack();
  renderFilters();
  renderWorkflowFilters();
  renderTopicNavigator();
  renderActiveFilters();
  renderResearchGuides();
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
  state.rTask = "all";
  state.sort = "heat";
  state.flagshipOnly = false;
  state.openOnly = false;
  searchInput.value = "";
  sortSelect.value = "heat";
  renderAll();
});

renderAll();
