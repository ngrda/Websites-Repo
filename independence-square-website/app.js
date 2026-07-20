/**
 * Master Global Production Database Architecture - Gallery Structured
 * Contains the database of historic buildings, professional assets, and culinary locations
 * around Independence Square.
 */
const buildingsDatabase = [
    {
        id: "courthouse",
        title: "Historic Truman Courthouse",
        address: "112 W. Lexington Avenue",
        category: "historical",
        photo: "images/courthouse.jpg",
        shortDesc: "The monumental civic heart of Independence. The official staging point for the legendary Oregon and Santa Fe trails, and the very headquarters where Harry S. Truman forged his legacy before reaching the White House.",
        photoCaption: "Entrance to Harry Truman's Office in the Historic Courthouse",
        gallery: ["images/courthouse_inside.jpg"],
        bullets: [
            "<li><strong>Civic Anchor & Westward Expansion:</strong> The architectural centerpiece of Independence Square. Resting upon a historic foundation from 1827, its current colonial design was constructed in 1933 under the direct leadership of Presiding Judge Harry S. Truman, making it a premier landmark dedicated to his enduring administrative and political legacy.</li>",
            "<li><strong>Harry S. Truman's Political Foundation:</strong> Long before becoming the 33rd President of the United States, Truman launched his political career within these walls while serving as the Presiding Judge of Jackson County. His leadership here established his reputation for administrative responsibility, civic pride, and infrastructure modernization.</li>",
            "<li><strong>Colonial Revival Architecture:</strong> Constructed to project formal order, stability, and enduring civic authority, the building features a monumental brick exterior, classical design details, a perfectly balanced symmetry, and a commanding central clock tower that defines the downtown streetscape skyline.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>1827 – The Original Log Structure:</strong> Jackson County's first frontier log courthouse is erected at the southeast corner of Lexington Avenue and Lynn Street before its eventual removal.</li><li><strong>1836 – Brick Construction Era:</strong> The permanent brick foundations of the current courthouse are officially laid to accommodate the county's rapid population and economic growth.</li><li><strong>1848 to 1907 – Structural Expansions:</strong> The building undergoes a series of major multi-decade architectural renovations in 1848, 1873, 1887, and 1907, continuously altering its exterior form and clock tower design.</li><li><strong>1933 – The Truman Modernization:</strong> Presiding Judge Harry S. Truman directs a sweeping architectural overhaul designed by George Fredrick Wallace, giving the courthouse its definitive Colonial Revival features and modern public appearance.</li></ul></li>",
            "<li><strong>Current Use & Living Archive:</strong> Transitioned from a purely administrative county seat into a preserved historic public site. Today, it serves the community through educational tours, historical archives, cultural exhibits, and interpretation of national memory while maintaining active space for ongoing public services.</li>"
        ]
    },
    {
        id: "mixed-wildflower",
        title: "Mixed Wildflower & Co.",
        address: "103 W. Lexington Avenue",
        category: "professional", 
        photo: "images/wildflower_new.jpg",
        shortDesc: "The 1897 brick facade that witnessed an era. Surviving everything from a frontier saloon to post-war army surplus lines, this historic cornerstone now flourishes as an artisan floral and design boutique.",
        photoCaption: "Mixed Wildflower & Co. - 103 W. Lexington Avenue inside view",
        gallery: ["images/wildflower_inside.jpg"],
        bullets: [
            "<li><strong>Building Description and Construction Date:</strong> According to a Missouri historic resources survey, the building at 103 W. Lexington Avenue is a two-story brick commercial structure. It is considered a contributing historic building within the Independence Square area, meaning it helps preserve the historic character of the district. A commercial real estate record lists the building’s construction year as 1897 and the property contains approximately 4,300 to 5,350 square feet of open flooring.</li>",
            "<li><strong>Businesses Over Time:</strong> The building has served commercial purposes for more than a century. Over the years, it housed different businesses, showing how the needs of the local community changed over time from a saloon and cigar shop to a multi-floor market, bowling alley, general merchandise storefront, and army surplus center.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>1907 & 1911 – Louis Fournie’s Saloon and Poolroom:</strong> Operated as a popular downtown saloon, social poolroom, and gathering hub.</li><li><strong>1910 – Heckart Cigars:</strong> Housed specialized local tobacco and retail cigar inventory.</li><li><strong>1920 – People’s Market and Clark’s Studios:</strong> Functioned simultaneously as a community fresh food market and a professional photography studio.</li><li><strong>1930 – Missouri Fruit Co., Necessary Real Estate & Gaston & Becker Bowling:</strong> A bustling multi-tenant era featuring a fruit company on the ground floor, alongside a real estate office and a bowling alley operating on the second floor.</li><li><strong>1940, 1946 & 1950 – The Leader (General Merchandise):</strong> Anchors the block as a prominent multi-decade general merchandise store handling local retail needs.</li><li><strong>ca. 1950s – Peter’s Shoes:</strong> Operated as a dedicated footwear storefront, with historical storefront markings suggesting it was closely interpreted or intertwined with 'The Leader' business.</li><li><strong>1960 – Western Army Store:</strong> Transformed into a rugged utility and military army surplus depot serving regional buyers.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, Mixed Wildflower & Co. continues the building’s commercial tradition. It now operates as a local boutique that sells gifts, floral items, and decorative products.</li>"
        ]
    },
    {
        id: "fitness",
        title: "Self-Propelled Fitness",
        address: "109 W. Lexington Avenue",
        category: "architecture",
        photo: "images/gym.jpg",
        shortDesc: "From mid-century sewing machine tracks and a lively 2001 dance hall to a modern health hub! This 1920 storefront packs over a century of hardware, retail, and social memories into a premium fitness suite.",
        photoCaption: "Self-Propelled Fitness - 109 W. Lexington Avenue inside view of the Strength Saloon",
        gallery: ["images/gym_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Historical Appearance:</strong> Built around 1920 as a specialty retail storefront on Independence Square, the underlying brick commercial building has served generations of local shoppers, visitors, and community members. A major remodeling project during the 1980s altered the original storefront appearance. Despite these architectural changes, the structure remains an active contributing asset that preserves its historic presence and commercial vitality within the downtown district grid.</li>",
            "<li><strong>Evolving Social and Brand Footprint:</strong> Over the years, the property adapted fluidly to changing community needs. Its rich history reflects the Square's importance not only as a commercial center but also as a vibrant social gathering place, hosting everything from neighborhood hardware suppliers and nationally recognized brands to local entertainment spaces.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Prior to 1933 to ca. 1949 – Buntings Hardware:</strong> Anchored the storefront for over fifteen years as a core hardware supplier for local residents and tradesmen.</li><li><strong>1950s – Singer Sewing Machine:</strong> Housed a dedicated retail shop for one of America's most recognizable and iconic domestic appliance brands.</li><li><strong>2001 – Sarsaparilla Dance Hall:</strong> Transformed into a lively social venue and gathering space, also associated historically with the LTS name.</li><li><strong>ca. 2010 – Primary Colors:</strong> Operated as a colorful specialty retail storefront adding specialized variety to the block.</li><li><strong>Subsequent Era – Creative Caviar:</strong> Occupied the commercial retail floor space, maintaining continuous business activity on Lexington Avenue.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building is occupied by Self-Propelled Fitness, a modern training and wellness facility. This current use represents a dynamic adaptation of a historic commercial building; rather than housing traditional retail trades, the space now supports community health, fitness, and active engagement while seamlessly continuing its long-standing commercial role on Independence Square.</li>"
        ]
    },
    {
        id: "musicgear",
        title: "Music Gear",
        address: "121 W. Lexington Avenue",
        category: "architecture",
        photo: "images/music.jpg",
        shortDesc: "A century of rhythm and health! This 1898 brick landmark hosted the legendary Yantis-Fritts Drugstore for 30 years. Today, it trades medicine bottles for guitars, amps, and the best musical atmosphere on the Square.",
        photoCaption: "Music Gear - 121 W. Lexington Avenue hosts locally owned instruments, amplification equipment, and retail gear.",
        gallery: ["images/music_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Construction Date:</strong> The building at 121–123 W. Lexington Avenue is a historic two-story brick commercial block that dates to the late 1890s or early 1900s. According to the Missouri Historic Resources Survey, the structure originally featured two separate storefronts on the first floor, a central entrance and stairway leading to the second floor, large display windows facing Lexington Avenue, decorative terra-cotta trim, a metal cornice, and cast-iron storefront lintels that survive today. Although some decorative parapet features were removed after 1950, the building retains much of its historic character and is considered a contributing historic structure within the Independence Square Historic District.</li>",
            "<li><strong>Businesses Over Time:</strong> Throughout its history, the building has housed a variety of commercial businesses. This building was constructed ca. 1898. It contains two storefronts and two addresses, with office spaces on the second floor, accessed via a central staircase. The east storefront, now occupied by Music Gear, was most notably associated with pharmacies and drugstores.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>1907 to 1914 – Mize Drug Co.:</strong> Housed early drugstore operations during a period of significant commercial growth on the Square.</li><li><strong>1914 to 1944 – Yantis-Fritz Drug Co.:</strong> Operated for approximately thirty years, becoming one of the longest-running establishments in the building's history.</li><li><strong>1950 – Office Space:</strong> The storefront transitioned temporarily into commercial office spaces during the mid-century era.</li><li><strong>1960 – Bunyar Drug Store:</strong> Returned to its traditional roots as a downtown pharmacy serving local residents.</li><li><strong>2001 – Pioneer Trails Barbeque and Trading Post:</strong> Adapted to accommodate a local restaurant and specialized trading storefront.</li><li><strong>2013 to Present – Music Gear:</strong> Today, the building serves as a locally owned music store specializing in musical instruments and related equipment.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building is home to Music Gear, a locally owned music store serving musicians and residents throughout the Independence area. Its current use continues the building's long-standing commercial tradition while adapting the space to modern community needs. The store contributes to the economic activity of Independence Square and helps maintain the area's role as a destination for local shopping and services.</li>"
        ]
    },
    {
        id: "courthouse_exchange",
        title: "Courthouse Exchange",
        address: "113 W. Lexington Avenue",
        category: "culinary",
        photo: "images/ch.jpg",
        shortDesc: "From hardware sales and a massive J.C. Penney era to a secret underground tavern! Built in 1909 over a burned past, it now hosts one of the Square's oldest legendary burger spots inside a historic limestone cave.",
        photoCaption: "Exchange Courthouse Tavern - 113 W. Lexington Avenue, a local favorite for burgers and craft beer.",
        gallery: ["images/ch_inside.jpg"],
        bullets: [
            "<li><strong>Building Description and Construction Date:</strong> According to the Missouri State Parks Jackson County National Register Listings, the Martin Building was constructed around 1909 after a previous building burned down. It is a two-story commercial block designed with prominent storefronts facing the Jackson County Courthouse and is clearly marked at the apex as the 'Martin Building.' A unique structural element is its limestone-walled basement beneath the sidewalk, which evolved into a tavern and local gathering place.</li>",
            "<li><strong>Businesses Over Time:</strong> In its early years, the first floor hosted multiple businesses while the second floor accommodated office tenants, including attorneys-at-law and physicians.</strong><ul class='timeline-nested-list'><li><strong>1899 – Origins of the Business:</strong> The early foundations of the Courthouse Exchange tavern and social gathering business are established on the Square.</li><li><strong>1909 to 1912 – Martin-Parker Hardware Co.:</strong> Shophouse operations open under the building's original hardware namesake following the reconstruction.</li><li><strong>1911 – The Major and Humphrey:</strong> The retail space hosts specialty men's clothing lines catering to downtown shoppers.</li><li><strong>1912 – Professional Suites & Hardware:</strong> Housed Thice & Hamilton Attorneys-At-Law, Dr. Oliver C. Sheley, and the Martin Welch Hardware & Plumbing co.</li><li><strong>1930s to 1963 – J.C. Penney Co.:</strong> Anchors the block as a major retail department storefront, later receiving a modern marble-style ground floor remodeling.</li><li><strong>2001 to Present – Courthouse Exchange Restaurant & Tavern:</strong> Officially recognized in architectural surveys as the building's primary modern occupant, serving the public through commerce.</li></ul></li>",
            "<li><strong>Historical Longevity and Media Presence:</strong> Unlike many downtown businesses that disappeared during periods of economic decline, this establishment continued operating and adapting for more than a century. It stands as one of the oldest continuously operating establishments on the Square, with roots dating back to 1899. Highlighting its enduring cultural presence, the venue was famously featured in the 2023 Kansas City Chiefs commercial 'Falling for Football.'</li>",
            "<li><strong>Current Use:</strong> Today, the building is occupied by Courthouse Exchange, a celebrated restaurant and tavern particularly known for its burgers and historic atmosphere. Located in the basement level beneath the sidewalk, the restaurant preserves much of the raw limestone character that has made it a local landmark for generations, contributing directly to the economic and walkable vitality of Independence Square.</li>"
        ]
    },
    {
        id: "gamecafe",
        title: "Game Cafe",
        address: "107 W. Lexington Avenue",
        category: "professional",
        photo: "images/game.jpg",
        shortDesc: "From lively 1930s barber shop debates to the ultimate tabletop gaming hub. This Mission Revival-style building features a rare below-grade storefront and a century-long tradition of community gathering.",
        photoCaption: "Game cafe in Independence, MO hosts 24 players for Modeen RCQ.",
        gallery: ["images/game_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Construction Date:</strong> According to the Missouri Historic Resources Survey, the building was originally constructed as a Mission Revival-style commercial building. When first built, it featured an elaborate shaped parapet above the roofline that gave the structure a much more decorative appearance than it has today. During the mid-twentieth century, the original parapet was removed and the upper façade was covered with corrugated metal siding, significantly altering the building's appearance. One of the building's most distinctive architectural features was the inclusion of both a street-level entrance and a below-grade storefront accessed by stairs. Traces of its commercial history remain visible through historic signage from former businesses.</li>",
            "<li><strong>Businesses Over Time:</strong> Throughout its history, the building housed multiple businesses simultaneously, including restaurants, barber shops, beauty parlors, cigar stores, and specialty retailers. This timeline illustrates how the building functioned as a center of commerce and social activity for generations of Independence residents.<ul class='timeline-nested-list'><li><strong>1910 – Lewis Shoes and Grove Cigars:</strong> Housed retail shoe sales and cigar inventory simultaneously.</li><li><strong>1920 – Elliott and Kaplanue Restaurant & John W. Grove Cigars:</strong> Served as a dual retail and food-service space on the Square.</li><li><strong>1930 – Otto Kueffer Barber & Beauty Parlor:</strong> Introduced the grooming and beauty era as a neighborhood gathering point.</li><li><strong>1940 – Elsen’s Cafe Deluxe Barber Shop:</strong> Maintained community operations near county government offices.</li><li><strong>1946 – Briggs Cafe Deluxe Barber Shop & Beauty Shop and Elsea’s Cafe:</strong> Combined an expanded grooming suite layout with local diner services.</li><li><strong>1949 & 1950 – Gibbons Cafe Deluxe Barber Shop and Jay’s Buffet:</strong> Continued its long-running multi-tenant identity as a social landmark on the block.</li><li><strong>1960 – Gibbons Cafe and Missouri Sewing Machine Co.:</strong> Transformed to accommodate a traditional diner setup alongside a specialty sewing retailer.</li><li><strong>ca. 1970s – Mode O Day (women’s clothes):</strong> Transitioned into a specialized retail space anchoring women's fashion trends on the Square.</li><li><strong>2001 – Blue & Grey Book Shop:</strong> Operated as a dedicated local bookstore, drawing readers and collectors to the historic district.</li></ul></li>",
            "<li><strong>The Cigar and Restaurant Era & The Barber Shop Decades:</strong> During the early twentieth century, the building housed both retail and food-service businesses. From the 1930s until the 1950s, barber shops and beauty parlors became the tenants of the building. The repeated appearance of Cafe Deluxe Barber Shop under different owners suggests that it was a long-running and well-known establishment. During this era, barber shops served not only as places for grooming but also as important community gathering spaces where residents discussed local politics, business, sports, and courthouse news.</li>",
            "<li><strong>Current Use:</strong> Today, the building houses Game Cafe, a business that began in 2006 and has expanded over time into multiple levels and adjoining spaces. The café serves as a gathering place for board games, tabletop gaming, role-playing games, tournaments, and community events. Its current use continues a long tradition of social interaction that has characterized the building throughout its history.</li>"
        ]
    },
    {
        id: "101-lexington",
        title: "101 W. Lexington Avenue",
        address: "101 W. Lexington Avenue",
        category: "architecture", 
        photo: "images/101.jpg",
        shortDesc: "From golden rule outfitters and retro shoe repairs to a lively popcorn stand! This prominent 1900 brick storefront blends a century of changing retail trends with a modern interactive glass art studio.",
        photoCaption: "Berlin’s Inc. (1930 & 1932)",
        gallery: ["images/101.jpg"],
        bullets: [
            "<li><strong>Building Description and Construction Date:</strong> According to public property facts and the Missouri historic resources framework, the building at 101 W. Lexington Avenue is a classic single-story brick commercial storefront originally constructed around 1900. Featuring approximately 1,200 square feet of adaptable retail floor space, the structure stands as an integral contributing asset within the Independence Square Historic District grid.</li>",
            "<li><strong>Businesses Over Time:</strong> The location's diverse business record highlights its role as a flexible neighborhood retail space, shifting dynamically from clothing lines and beauty parlors to specialty hobby centers and creative art spaces across more than a century of service.<ul class='timeline-nested-list'><li><strong>1910 – Golden Rule Clothing House, Mills, Turoff:</strong> Operated as an early high-volume textile and dry goods retail establishment on the corner block.</li><li><strong>1920 – Sami Turoff Clothing:</strong> Maintained its traditional identity as a specialized downtown garment and fashion shop.</li><li><strong>1930 & 1932 – Berlin’s Inc.:</strong> Transitioned to host updated commercial retail mercantile selections.</li><li><strong>1946 & 1949 – Smith’s Shoe Repair & Beauty Shop:</strong> Operated as a dual-service hub, combining craft shoe mechanics with a local neighborhood beauty parlor.</li><li><strong>1950 – Smith’s Shoe Shop, Barber Shop and Jackie Smith’s Popcorn:</strong> A vibrant multi-tenant era featuring local grooming services alongside custom sidewalk popcorn retail sales.</li><li><strong>1952 – Bermaster Shoe Store:</strong> Continued anchoring the block's multi-decade specialization in family footwear supply.</li><li><strong>1960 – Lane’s Shoe Store:</strong> Maintained active neighborhood storefront traffic under classic retail footwear management.</li><li><strong>1972 – Hobby Corner:</strong> Reimagined to accommodate specialized hobby crafts, games, and community retail inventory.</li><li><strong>2001 – Western Army Store:</strong> Adapted into a rugged utility and military surplus depot serving regional buyers.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the historic building is an interactive art and glass gallery established in 2019.</li>"
        ]
    },
    {
        id: "blueridge",
        title: "Blue Ridge Bank & Trust Co.",
        address: "201 W. Lexington Avenue",
        category: "architecture",
        photo: "images/blueridge_new.jpg",
        shortDesc: "A high-stakes corner banking site since 1869! Replacing a historic three-story block that housed law suites and secret fraternal rooms, this commanding mid-century structure now serves as a premium modern branch.",
        photoCaption: "Blue Ridge Bank & Trust Co. - 201 W. Lexington Avenue exterior view",
        gallery: ["images/bluerridge_out.jpg"],
        bullets: [
            "<li><strong>Premium Location:</strong> Occupies the northwest corner intersection of Lexington Avenue and Liberty Street directly overlooking the courthouse grounds. This high-impact corner lot has long been occupied by a banking institution, serving as an anchor of financial activity on Independence Square for over a century.</li>",
            "<li><strong>Structural History:</strong> Serves as a mid-twentieth-century architectural replacement structure. The historic Chrisman-Sawyer Bank Building was originally built on this site in 1869 and remained as a landmark until 1963 when it was razed and replaced by the current three-story building.</li>",
            "<li><strong>Multi-Floor Professional Ecosystem:</strong> Throughout the property's history, both the 1869 block and the current building contained three floors, housing a banking room on the ground floor and an array of upper-floor spaces, including law offices, dental practices, government bureaus, and a local fraternal organization at various times.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>1869 to 1963 – The Original Chrisman-Sawyer Building:</strong> Commenced more than a century of banking services on the corner inside a grand three-story brick structure.</li><li><strong>1963 – Modern Structural Replacement:</strong> The original 19th-century block is razed and replaced by the current modern building layout.</li><li><strong>1963 to 1995 – Chrisman-Sawyer Bank:</strong> Continued continuous retail financial operations in the new facility until its corporate merger.</li><li><strong>1995 to 2010 – Hillcrest Bank:</strong> Operated under the new banner following the 1995 Chrisman-Sawyer merger, maintaining the site's banking heritage.</li><li><strong>2019 to Present – Blue Ridge Bank & Trust Co.:</strong> Opened its dynamic Square Branch at this location, driving modern commercial transactions.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building houses the Square Branch of Blue Ridge Bank & Trust Co., which opened here in 2019. The facility blends modern retail financial suites alongside municipal government offices and administrative professional spaces, effectively continuing more than 150 years of uninterrupted civic and financial utility on the block.</li>"
        ]
    },
    {
        id: "first-national-bank",
        title: "First National Bank Building",
        address: "129 W. Lexington Avenue",
        category: "architecture", 
        photo: "images/firstnational_o.jpg",
        shortDesc: "A powerhouse corner block that literally expanded to swallow a neighboring trust company! Shifting from high-stakes Edwardian real estate and fine jewelers to iconic bank corporate desks.",
        photoCaption: "Last Business located at 129 W. Lexington Avenue - Bank of America",
        gallery: ["images/firstnational_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architectural Footprint:</strong> The commanding structure occupies a prominent corner lot at 129 W. Lexington Avenue, having historically expanded to encompass the adjoining 127 W. Lexington lot—the original home of the Home Deposit Trust Co. Both the Missouri State Parks Architectural Surveys and the Missouri State Parks Jackson County National Register Listings treat these integrated parcels as a unified structural asset under the 129 W. Lexington designation.</li>",
            "<li><strong>The Corner Multi-Tenant Hub:</strong> Designed to project institutional stability on the grid, the building traditionally supported a dynamic mix of continuous high-volume banking institutions alongside prestigious specialized service offices, serving as a core destination for financial and professional transactions on Independence Square.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early Foundation – First National Bank:</strong> Established prominent banking operations, anchoring the high-impact corner lot as a principal financial institution for the community.</li><li><strong>1906 – Sturgis & Deffendack Jewelers and Opticians:</strong> Shared the valuable commercial footprint, providing upscale luxury watchmaking, jewelry lines, and specialized optical services.</li><li><strong>1906 – Walter Rider & Co. Real Estate & Loans:</strong> Housed an active Edwardian-era property desk managing real estate operations and regional investment loans.</li><li><strong>Subsequent Era – Boatmen’s Bank:</strong> Transitioned to host the regional banking network, maintaining the block's multi-decade role as a foundational financial site.</li><li><strong>Modern Corporate Era – Bank of America:</strong> Operated under the major national financial banner, driving retail banking and community business transactions in the heart of downtown.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building maintains its commanding presence on Independence Square, standing as a pristine architectural landmark. Its contemporary function continues the site's multi-tenant commercial legacy, blending historic stone-and-brick preservation with modern corporate and service activities that actively fuel the economic revitalization of the downtown district.</li>"
        ]
    },
    {
        id: "beherenow",
        title: "Be Here Now / Gentry Building",
        address: "205-207 W. Lexington Avenue",
        category: "professional",
        photo: "images/beherenow.jpg",
        shortDesc: "Built in 1938 over the razed footprints of frontier-era banks! This sleek, non-ornamental mid-century Moderne landmark broke the block's traditional mold, shifting from grand music halls to a holistic community venue.",
        photoCaption: "Be Here Now - 205-207 W. Lexington Avenue inside view of the retail boutique and community space",
        gallery: ["images/beherenow_i.jpg"],
        bullets: [
            "<li><strong>Modernist Architecture and Footprint:</strong> Constructed circa 1938, the Gentry Building occupies a expanded commercial footprint that seamlessly spans both the 205 and 207 W. Lexington lots. It stands out sharply against its traditional Victorian neighbors as a striking, geometric example of clean, non-ornamental mid-century Moderne architecture.</li>",
            "<li><strong>The Vanished Banking Foundations:</strong> Long before the current Art Deco-influenced facade was built, this high-impact site served as the foundation and headquarters for the former McCoy Bank Building and the Southern Bank. The original historic banking structures were razed in the late 1930s to make way for the construction of the present Gentry block.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Late 1800s to Late 1930s – The Banking Era:</strong> Operated continuously as a financial hub housing the McCoy Bank and Southern Bank systems until the property's structural demolition.</li><li><strong>1938 – Modernist Reconstruction:</strong> The current Gentry Building is officially erected on the combined lots, introducing Streamline Moderne aesthetics to Lexington Ave.</li><li><strong>1938 to 1963 – Tucker Furniture:</strong> Headquartered the prominent local furniture showroom, anchoring retail traffic across the mid-1900s.</li><li><strong>1969 to ca. 2001 – Turner Music:</strong> Transformed into a legendary downtown musical instrument shop and specialty retail showroom for over three decades.</li><li><strong>Current Era – B Here Now:</strong> Reimagined to accommodate an innovative local retail boutique and community footprint.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building functions as Be Here Now, acting as a specialty retail commercial boutique and a local holistic community gathering venue. Its contemporary adaptation preserves the 1938 architectural envelope while modernizing the indoor floor space to support active neighborhood commerce and social collaboration on the Square.</li>"
        ]
    },
    {
        id: "cafeverona",
        title: "Café Verona",
        address: "206 W. Lexington Avenue",
        category: "culinary",
        photo: "images/cafeverona.jpg",
        shortDesc: "The robust 1880s dual facade that stands as a theater of rotating trades. Having hosted everything from early frontier barber shops and lunchrooms to Roy Keehnel's vintage jewelry counters, this historic cornerstone now flourishes as a premier fine-dining Italian restaurant.",
        photoCaption: " Café Verona — 206 W. Lexington Avenue interior view showing the refined dining room and bar area",
        gallery: ["images/cafeverona_i.jpg"],
       bullets: [
            "<li><strong>Design Framework:</strong> Late 19th-century commercial storefront built on the south side of the Square; features ground-floor retail spaces, shared party walls, a flat roofline hidden behind an ornate parapet, and dedicated second-floor professional suites. This architectural layout allowed businesses to operate on the first floor while attorneys, insurance agents, and physicians occupied offices directly above.</li>",
            "<li><strong>Architectural Evolution:</strong> Originally constructed as two independent buildings in the 1880s, the structures underwent several modernization phases over the last century. This included replacing original frontier wooden storefronts with large plate-glass display windows, installing metal awnings, and updating retail signage. During the 2001 historic district survey, the site was documented as being actively under construction to unify both commercial storefronts into a single footprint.</li>",
            "<li><strong>Businesses Over Time:</strong> The combined lots have supported a rich lineage of continuous independent commerce, changing dynamically across generations to serve courthouse visitors, local merchants, and shoppers from fine jewelry desks to dual-tenant barber and restaurant spaces.<ul class='timeline-nested-list'><li><strong>Latter part of the 1800s – Barber Shop Foundations (204 W.):</strong> The early commercial footprint begins by housing a traditional downtown barber shop on the western lot.</li><li><strong>1910 – White Sewing Machine (204 W.) & Milner Cafe (206 W.):</strong> Lot 204 accommodates specialized domestic appliance retail lines while Lot 206 (historically known as the Milner Building) operates as a bustling neighborhood lunchroom and grocery store managed by Thomas W. Milner.</li><li><strong>1930s & 1940s – Keehnel Jewelry (204 W.) & E.F. Bracht Restaurant (206 W.):</strong> The western storefront anchors high-end retail trade under Keehnel Jewelry Co., Inc., owned by Roy B. Keehnel, while the eastern storefront hosts a local restaurant.</li><li><strong>1930 to 1950 – Herbert A. Major Barber Shop (206 W.):</strong> A long-running barber shop occupies the eastern wing, explicitly sharing the address with a dining restaurant to form a popular social core where residents gathered to cut hair and discuss regional politics, business, and court news.</li><li><strong>Early 1990s – Drug Store Transition (204 W.):</strong> Storefront 204 temporarily alters its commercial layout to host a neighborhood pharmacy and retail drugstore venue.</li><li><strong>1963 to 1965 – Jones Store Occupancy (206 W.):</strong> Lot 206 hosts a local business operating under the Jones name, noted in historic registries as distinct from the major regional department store network.</li><li><strong>2002 to Present – Café Verona Integration:</strong> Both structures are officially unlinked from independent records and unified into a single major culinary footprint, continuing a long tradition of community hospitality.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building is occupied by Café Verona, operating strictly as a premier fine-dining Italian restaurant. Its contemporary adaptation perfectly utilizes the traditional, open-concept ground floor to deliver an unmatched atmosphere of community hospitality while preserving its original historic structure beneath the updated modern facade.</li>"
        ]
    },
    {
        id: "three_trails_brew",
        title: "3 Trails Brewing",
        address: "111 N. Main Street",
        category: "culinary",
        photo: "images/3trails_o.jpg",
        shortDesc: "From grand 1890s furniture showrooms and a massive mid-century S.S. Kresge store to a modern taproom! This historic block blends decades of classic retail giants into a dynamic craft brewery celebrating the western trails.",
        photoCaption: "3 Trails Brewing Co. - 111 N. Main Street interior view of the taproom and brewery",
        gallery: ["images/3trails_i.jpg"],
        bullets: [
            "<li><strong>Core Chronology:</strong> A historic two-story brick commercial retail and office structure erected around the late nineteenth century on the eastern sector of the city grid, serving as a core retail pillar for generations of local shoppers.</li>",
            "<li><strong>Businesses Over Time:</strong> The property boasts a rich commercial legacy, transitioning from grand early-twentieth-century furniture warehouses to mid-century national variety department stores and surplus outlets before its ultimate modern culinary adaptation.<ul class='timeline-nested-list'><li><strong>1890 – Henry Jott Furniture Company / Sampsons Men's Clothing:</strong> Commenced its commercial legacy housing high-volume home furnishings alongside specialized men's apparel.</li><li><strong>1926 – Charles Tucker Furniture Store / Drug Store:</strong> Transformed into a neighborhood drug store and retail furniture showroom.</li><li><strong>1929 – Tucker Furniture Store / S.S. Kresge:</strong> Accommodated the expansion of the iconic S.S. Kresge retail network on the block alongside furniture sales.</li><li><strong>1951 – S.S. Kresge:</strong> Operated fully under the famous national variety store banner, driving massive daily foot traffic to Main Street.</li><li><strong>1971 – Sears Surplus:</strong> Adapted into a rugged regional Sears outlet hub handling general appliance and retail surplus inventory.</li><li><strong>1980s – The Emporium Stores:</strong> Reimagined as a centralized multi-tenant local shopping center and boutique market.</li><li><strong>2019 to Present – 3 Trails Brewing Co.:</strong> Converted into a modern independent craft taproom, microbrewery, and social venue.</li></ul></li>",
            "<li><strong>Cultural Alignment:</strong> Named explicitly in honor of the three iconic pathways (Santa Fe, Oregon, and California) that natively converged at the Square parameters, cementing the district’s role as America's ultimate national transport and westward outfitting hub.</li>",
            "<li><strong>Current Use:</strong> Today, the building functions as 3 Trails Brewing Co. Opened in 2019, it serves as an active craft brewery, tasting taproom, and localized downtown revitalization anchor, beautifully marrying century-old brick masonry with contemporary community spaces.</li>"
        ]
    },
    {
        id: "ophelias",
        title: "Ophelia's Restaurant & Inn",
        address: "201 N. Main Street",
        category: "culinary",
        photo: "images/ophelias.jpg",
        shortDesc: "A masterclass in historical transformation! Once a bustling post-war drugstore powerhouse complete with its own dedicated pet department, this dual-era landmark now thrives as a premier fine-dining spot and boutique inn.",
        photoCaption: "Ophelia's Restaurant & Inn - 201 N. Main Street interior view of the restaurant.",
        gallery: ["images/ophelias_i.jpg"],
        bullets: [
            "<li><strong>Dual Construction Eras:</strong> Represents the architectural modernization of the Square district. The original front storefront facade was built around 1907 to house hardware mercantile operations, while a massive rear structural extension was completed in 1948 to facilitate the massive post-war expansion of downtown retail footprint.</li>",
            "<li><strong>The Corporate Drugstore Empire:</strong> From the late 1940s through the mid-1970s, the building served as one of the largest and highest-volume retail powerhouses on Independence Square, famously operating under prominent regional drug banners that completely changed traditional commercial foot traffic on Main Street.</li>",
            "<li><strong>Business Over Time:</strong><ul class='timeline-nested-list'><li><strong>1907 – Hill & Martin Hardware Store:</strong> Opened as a prominent early-century hardware depot handling local tools and building supplies.</li><li><strong>1918 – Hill Brothers Hardware:</strong> Maintained continuous neighborhood utility under updated family hardware management.</li><li><strong>1948 – Katz Drug Store:</strong> Transformed into an iconic commercial powerhouse employing 175 people across 13 distinct departments, including a snack bar, soda fountain, and a dedicated pet department.</li><li><strong>1971 – Skaggs Drug Store:</strong> Transitioned to host the prominent mid-century Skaggs national retail network.</li><li><strong>1980 – Spirit of '76:</strong> Reimagined to accommodate specialized commercial and community retail initiatives.</li><li><strong>1998 to Present – Ophelia's Restaurant & Inn:</strong> Converted into a high-end hospitality destination, elegantly bridging historic preservation with modern luxury.</li></ul></li>",
            "<li><strong>Current Use:</strong> Named after Mary Pipher's book 'Reviving Ophelia,' the building now functions seamlessly as an upscale fine-dining restaurant, premier community event space, and an elegant upper-story boutique inn overlooking the Square, standing as a primary anchor for downtown revitalization.</li>"
        ]
    },
    {
        id: "gateway-sporting-goods",
        title: "Gateway Sporting Goods Building",
        address: "213 N. Main Street",
        category: "professional",
        photo: "images/gateway_o.jpg",
        shortDesc: "The ultimate chameleon of Main Street! Built in the 1890s as a hotel kitchen, this brick landmark served as the City Marshal's headquarters, a heavy iron depot, a retro grill, and a legendary mid-century sporting goods store.",
        photoCaption: "Gateway Sporting Goods  - 213 N. Main Street slogan",
        gallery: ["images/gateway.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Erected during the booming 1890s expansion era, this versatile single-story brick commercial building stands as a highly adaptable structural asset within the Independence Square Historic District. As documented by the Jackson County Historical Society, the building features a classic late-Victorian commercial facade engineered to support rotating high-traffic retail formats.</li>",
            "<li><strong>A Century of Radical Adaptation:</strong> This specific location boasts one of the most uniquely diverse adaptive reuse records on the entire Square. Over a 130-year span, the interior square footage was repeatedly reconfigured to support everything from back-of-house hospitality logistics and municipal law enforcement to heavy industrial metal distribution and popular mid-century community dining rooms.<ul class='timeline-nested-list'><li><strong>1890s – Kitchen for Hotel:</strong> Commenced its utility as a dedicated service facility and commercial kitchen layout supporting a nearby downtown hotel.</li><li><strong>1908 – City Marshal Office:</strong> Transformed into a vital public safety asset, housing the official headquarters for the local City Marshal operations.</li><li><strong>1910 – Auto Supplies:</strong> Shifted to capture the early automotive boom, operating as an early-century specialized parts and tire depot.</li><li><strong>1911 – Thomas Confectioners:</strong> Reimagined into a sweet neighborhood gathering spot selling traditional candies and baked goods.</li><li><strong>1913 – Benjamin Lewis Dry Goods:</strong> Anchored the block as a multi-line textile, clothing, and general merchandise mercantile store.</li><li><strong>1923 – Sprangler Grocer:</strong> Served the neighborhood as a dedicated local fresh food and dry grocery market.</li><li><strong>1929 – Sturm Furniture:</strong> Operated as a downtown home furniture showroom and commercial retail floor space.</li><li><strong>1940 – The Hounds:</strong> Welcomed a unique specialized local business concept to the Main Street storefront.</li><li><strong>1942 – Independence Iron & Metal Co.:</strong> Adapted during the World War II industrial era into a commercial supply desk for iron and metal components.</li><li><strong>1957 – Main Street Grill:</strong> Returned to its culinary roots as a popular mid-century walkable diner and community social restaurant.</li><li><strong>1966 – Gateway Sporting Goods Co.:</strong> Became a highly celebrated regional landmark, anchoring the block as a premier outfitter for sports gear, apparel, and hardware.</li><li><strong>1986 – The Keeping Room Antiques:</strong> Transitioned into a specialized vintage showcase, preserving the building's historic charm through antique retail commerce.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building preserves its original 19th-century structural brick envelope while remaining an active part of the ongoing revitalization of downtown Independence. By continuously bridging historic preservation with local walkable commerce, it maintains active visual and economic continuity on the eastern perimeter of the Square grid.</li>"
        ]
    },
    {
        id: "hall-building",
        title: "Hall Building",
        address: "109 S. Main Street",
        category: "architecture", 
        photo: "images/hall_building_o.jpg",
        shortDesc: "A timeless slice of 1880s history! Starting as a frontier meat market before hosting mid-century grocery chains and legendary local diners, this enduring brick landmark brings over a century of culinary evolution to the Square.",
        photoCaption: "Lettering on the Hall Building - 109 S. Main Street exterior view",
        gallery: ["images/hall_building_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Constructed in 1883, the Hall Building stands as one of the highly significant late-nineteenth-century architectural structures remaining on the city grid. As documented by the Jackson County Historical Society, its historic commercial layout was intentionally engineered to anchor high-traffic food merchants and local trade, featuring large street-level display apertures and upper-story framing typical of the post-frontier era.</li>",
            "<li><strong>Businesses Over Time:</strong> The site has acted as a vital community hub for generations of Independence shoppers. Its early decades heavily anchored the district's fresh food infrastructure as an open marketplace and grocery hub, eventually morphing into a series of long-running neighborhood diners and twentieth-century lifestyle service shops.<ul class='timeline-nested-list'><li><strong>1883 – Meat Market:</strong> Commenced its active commercial footprint on South Main as a dedicated nineteenth-century neighborhood butcher shop and fresh meat market.</li><li><strong>1911 – City Market:</strong> Transformed into an expanded community food center handling bulk agricultural goods and provisions.</li><li><strong>1912 – Wyman Cash Grocery Store:</strong> Operated as a traditional downtown 'cash-and-carry' dry grocery merchant.</li><li><strong>1923 – Popel Furniture Store:</strong> Temporarily shifted its retail focus to showcase home furnishings and family decor options.</li><li><strong>1926 – Atlantic & Pacific Grocery (A&P):</strong> Hosted the iconic national A&P variety grocery network, driving steady neighborhood foot traffic to the block.</li><li><strong>1934 – Walker's Cafe:</strong> Reimagined into a localized downtown dining room and social gathering space during the mid-1930s.</li><li><strong>1961 – Beulah and Don's Cafe:</strong> Formed a beloved mid-century landmark identity, operating as a staple destination for local diner fare and community conversation.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the historic 1883 structure preserves its beautiful brick envelope and late-Victorian commercial heritage while remaining a vital, contributing asset to the walkable revitalization of Independence Square. It houses Salon 208, a modern health and lifestyle beauty boutique.</li>"
        ]
    },
    {
        id: "farmers-merchants-bank",
        title: "Farmers & Merchants Bank Building",
        address: "101 N. Main Street",
        category: "culinary",
        photo: "images/farmers_bank_o.jpg",
        shortDesc: "A cornerstone of frontier finance and community flavor! Built in 1885, this prominent brick landmark transitioned from an early merchant bank and sweet confectioneries to a secret third-floor social club and a modern health food spot.",
        photoCaption: "Nutrition On the Square - 101 N. Main Street, products of the health food store on display",
        gallery: ["images/farmers_bank_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Originally constructed in 1885 with significant structural modifications around 1921, this multi-story brick landmark commands a premier anchor position on North Main Street. As documented by the Jackson County Historical Society, the building features classic late-nineteenth-century commercial masonry designed to handle high-traffic ground-floor retail alongside expansive multi-purpose upper levels.</li>",
            "<li><strong>Business Over Time:</strong> This prominent structure has served as an essential center for both finance and community lifestyle for generations of Independence residents. Its diverse architectural footprint fluidly adapted across the twentieth century, hosting traditional banks, sweet confectioneries, neighborhood fresh produce markets, private social lodges, and mid-century commercial loan hubs.<ul class='timeline-nested-list'><li><strong>1885 – Farmers & Merchants Bank:</strong> Commenced its active financial footprint on the block, operating as a foundational banking institution for early regional merchants and farmers.</li><li><strong>1910 – McClintink Confectionery Shop:</strong> Transformed into a popular downtown sweet shop and community gathering point.</li><li><strong>1920 – Mike Santoro & Son Fruit & Produce:</strong> Adapted into a dedicated neighborhood fresh food and bulk agricultural produce market.</li><li><strong>1924 – 3rd Floor - Harpie Club:</strong> Welcomed a unique local social organization and private gathering layout to the building's third-story floor space.</li><li><strong>1946 – Reliable Loan Co:</strong> Shifted back to financial utility, operating as a localized commercial credit and consumer loan office.</li><li><strong>1950 – Davis Paint Store:</strong> Reimagined into a dedicated mid-century home design, hardware retail storefront, and supply hub.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the ground floor of the historic 1885 building hosts On the Square Nutrition. By perfectly preserving its striking late-Victorian brick exterior while continuously adapting its indoor layout to support healthy lifestyle retail, the property beautifully bridges its grand financial heritage with the active, walkable commercial vitality of downtown Independence.</li>"
        ]
    },
    {
        id: "mize-building",
        title: "Mize Building",
        address: "101, 103, 105 S. Main Street",
        category: "architecture", 
        photo: "images/mize_building_o.jpg",
        shortDesc: "A triple-storefront powerhouse from 1890! Witness to a wild retail evolution, this historic block anchored legendary grocery giants like Piggly Wiggly and Milgram before bringing big catalog brands to the Square.",
        photoCaption: "Sonshine Sports Apparel - 101, 103, 105 S. Main Street interior view of machines",
        gallery: ["images/mize_building_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Built in 1890, the Mize Building is a major two-story brick commercial block that commands a prominent multi-lot footprint on South Main Street. As documented by the Jackson County Historical Society and shown on the plaque, its expansive design originally incorporated three distinct storefront addresses (101, 103, and 105) to accommodate high-volume retail, complete with upper-level suites and classic late-nineteenth-century structural masonry.</li>",
            "<li><strong>Business Over Time:</strong> This commercial property played a critical role in the mid-twentieth-century food and supply infrastructure of Independence Square. It served as a premier location for pioneering national and regional grocery networks, driving massive daily foot traffic to the block for decades before transitioning into appliance showrooms and modern specialty apparel lines.<ul class='timeline-nested-list'><li><strong>1890 – R.D. Mize Drug Store / Grocery Store / Saloon:</strong> Commenced operations as a versatile multi-concept frontier hub handling local medicine, bulk provisions, and social tavern spaces.</li><li><strong>1906 – Thomas J. Walker's Drug Store / Himes & Frisbee Feed / Billiards:</strong> Expanded into a multi-tenant footprint blending retail pharmacy lines with regional agricultural feed supplies and a local billiard hall.</li><li><strong>1910 – Mize Peters Drug Store / Polo Sirchia Confectionary:</strong> Housed specialized downtown pharmacy services alongside an artisanal confectionery shop.</li><li><strong>1920 – Piggly Wiggly Grocery Store:</strong> Hosted the revolutionary national self-service grocery chain, modernizing local food retail formats.</li><li><strong>1950 – Milgram Grocery Store:</strong> Transformed into a major neighborhood hub for the iconic regional Milgram supermarket brand, visible in vintage street-view archives.</li><li><strong>1970s – Montgomery Ward Catalogue & Appliances:</strong> Adapted into a specialized retail showroom and pick-up desk for the major American department store network, focusing on modern home appliances.</li><li><strong>1986 – Desktop Office Supply:</strong> Reimagined to meet changing office demands, operating as a localized commercial print and business supply store.</li><li><strong>2016 – Sonshine Sports Apparel:</strong> Transitioned into a local specialty retail storefront handling custom athletic gear and apparel.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the historic 1890 Mize Building continues its continuous commercial legacy on Independence Square. It hosts Sonshine Sports Apparel and serves as a dynamic example of adaptive reuse. By perfectly preserving its grand multi-storefront brick facade while adapting its interior footprint to contemporary boutique and retail operations, it maintains active economic and walking vitality on the southern sector of the district grid.</li>"
        ]
    },
    {
        id: "bundschus-building",
        title: "Bundschu’s Department Store Building",
        address: "103 N. Main Street",
        category: "architecture", 
        photo: "images/bundschu_building_o.jpg",
        shortDesc: "From a grand 19th-century opera house to a high-fashion mid-century department store empire! This 1928 brick landmark captures generations of downtown luxury shopping, later serving as an essential municipal hub.",
        photoCaption: "Historic 1928 commercial building known as Bundschu’s Department Store at 103 N. Main Street.",
        gallery: ["images/bundschu_building_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Built in 1928, this imposing commercial brick structure was engineered specifically to support a grand, multi-level department store format. As documented by the Jackson County Historical Society, the current building replaced an earlier nineteenth-century entertainment landmark on the same plot, featuring massive street-facing window bays designed to showcase premium retail displays to walking traffic.</li>",
            "<li><strong>Businesses Over Time:</strong> For decades, this site operated as the absolute crown jewel of fashion and retail commerce on Independence Square. The property adapted fluidly across the mid-twentieth century, transitioning from independent local dry goods operations into a massive collaborative regional department store network before being utilized as an essential municipal facility for city management.<ul class='timeline-nested-list'><li><strong>18xx? – Wilson Opera House:</strong> Commenced its structural legacy on the site as a premier frontier-era theater, cultural gathering space, and opera hall.</li><li><strong>1900 – Bundschu’s Department Store (First Floor):</strong> Establishes its retail footprint by leasing the ground floor of the original Wilson Opera House building.</li><li><strong>1928 – Bundschu’s Department Store (Current Building):</strong> The grand, modern replacement structure is officially erected on the lot to anchor Bundschu's expanding retail empire.</li><li><strong>1959 – Emery, Bird, Bundschu’s Department Store:</strong> Transformed through a major high-profile retail partnership, operating as a multi-floor destination for fine apparel, homewares, and community shopping.</li><li><strong>1973 – Independence Municipal Building:</strong> Acquired and adapted by the local government to host centralized city administration bureaus and public safety desks.</li><li><strong>1978 – Various Offices:</strong> Reimagined into a highly versatile multi-tenant commercial property housing diverse professional suites and local businesses.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the historic 1928 Bundschu Building houses the Heartland Center for Behavioral Change Independence Outpatient Clinic. By maintaining its striking brick facade and continuous structural utility, it bridges the Golden Age of twentieth-century retail history with critical, community-focused healthcare resources that support the wellness and active engagement of downtown Independence.</li>"
        ]
    },
    {
        id: "pickens",
        title: "Pickens Sweet Treats",
        address: "205 N. Main Street",
        category: "culinary", 
        photo: "images/pickens_n.jpg",
        shortDesc: "A delightful family-owned confectionery anchoring the North Main corridor. Managed by sisters Natalie and Nanette Pickens, this early-20th-century brick storefront charms visitors with small-batch handmade toffees, fudge, and custom gift baskets.",
        photoCaption: "Pickens Sweet Treats — 205 N. Main Street interior view of the candy shop and display cases",
        gallery: ["images/pickens_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of a continuous commercial block on North Main Street, this structure features an adaptable early-20th-century footprint and shared masonry party walls engineered for versatile downtown trade.</li>",
            "<li><strong>Business Over Time:</strong> The location has served as a key confectionery destination for more than a century, transitioning from early general retail roots into a specialized candy and sweet shop.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early Period – Commercial Development:</strong> Anchors high-density storefront commerce along the northern expansion corridor of the courthouse square, serving residents and travelers for generations.</li><li><strong>Modern Era – Candy Shop Foundations:</strong> Pickens Sweet Treats opens its doors to the public, transitioning the antique space into a specialized culinary design house.</li></ul></li>",
            "<li><strong>Current Use:</strong> Owned by sisters Natalie and Nanette Pickens, the business has established a specialized niche as a primary community stop, providing handcrafted toffees, fudge, chocolates, and custom cookies.</li>"
        ]
    },
    {
        id: "hrblock",
        title: "H&R Block",
        address: "207 N. Main Street",
        category: "professional",
        photo: "images/hrblock_n.jpg",
        shortDesc: "A foundational professional service anchor on the North Main corridor. Occupying a historic commercial storefront near the Square, this adaptive brick block seamlessly continues the district's long business tradition through modern financial services.",
        photoCaption: "H&R Block Building — 207 N. Main Street",
        gallery: ["images/hrblock_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the historic commercial fabric near Independence Square, this structure features an adaptable open footprint and shared masonry party walls engineered for versatile downtown trade.</li>",
            "<li><strong>Professional Service Continuity:</strong> While detailed early occupancy records remain limited, its location connects it directly to the city’s long history of business, public service, and community life.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early Period – Commercial Use:</strong> Accommodates diverse early mercantile layouts that helped establish downtown Independence as a major commercial center.</li><li><strong>Modern Era to Present – Financial Hub:</strong> H&R Block establishes its active storefront presence, transitioning the historic space into a dedicated tax and financial services office.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the storefront houses H&R Block, successfully utilizing its historic layout to provide essential financial services while continuing the building's role as a productive center of business in the heart of Independence.</li>"
        ]
    },
    {
        id: "scandinavia-place",
        title: "Scandinavia Place",
        address: "209 N. Main Street",
        category: "professional",
        photo: "images/scandinavia_n.jpg",
        shortDesc: "A remarkable nearly forty-year monument to specialized international retail. Operating on North Main Street since at least 1987, this historic brick storefront stands as an enduring local anchor, enriching the Square with authentic European foods, gifts, and decor.",
        photoCaption: "Scandinavia Place — 209 N. Main Street interior view of the specialty retail store and display cases",
        gallery: ["images/scandinavia_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the late 19th- to early 20th-century commercial development boom of Independence Square, this structure features a traditional brick commercial framework and shared party walls engineered for versatile downtown trade.</li>",
            "<li><strong>An Enduring Multi-Decade Anchor:</strong> While many traditional downtown storefronts naturally experience high tenant turnover, this venue is highly significant for maintaining a single, continuous connection to Scandinavia Place since at least 1987.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Late 19th/Early 20th Century – Commercial Boom:</strong> Built as a classic two-story brick block, optimizing street-level pedestrian trade with flexible office or storage layout space above.</li><li><strong>Circa 1987 – Import Foundations:</strong> Scandinavia Place officially opens its doors, transitioning the property's lifecycle into a dedicated center for international goods and cultural gifts.</li><li><strong>Present – Retail Longevity:</strong> Celebrates approximately four decades of continuous, uninterrupted operation under independent local management.</li></ul></li>",
            "<li><strong>Current Use & Foot Traffic Activation:</strong> Today, the storefront houses Scandinavia Place, seamlessly utilizing its classic pedestrian-facing display windows to offer imported foods, candies, home decor, and seasonal items, driving crucial morning and afternoon walking traffic to the North Main corridor.</li>"
        ]
    },
    {
        id: "1859-jail-museum",
        title: "1859 Jail, Marshal's Home & Museum",
        address: "217 N. Main Street",
        category: "historical", 
        photo: "images/1859jail_o.jpg",
        shortDesc: "The ultimate frontier lockdown! Built in 1859 with two-foot-thick limestone walls, this grand complex housed Civil War renegades and the infamous outlaw Frank James before Harry S. Truman personally saved it from destruction.",
        photoCaption: "1859 Jail, Marshal's Home & Museum - 217 N. Main Street interior view of the historic jail",
        gallery: ["images/1859jail_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Designed by notable early Kansas City architect A.B. Cross and constructed in 1859, this formidable complex served as the third Jackson County jail. The front features a two-story brick residence designed in the Federal style for the jailer and his family, while the rear hidden wing contains twelve multi-level cells engineered with massive, two-foot-thick quarried limestone blocks and tremendous iron doors.</li>",
            "<li><strong>The Dynamic Layout and Contrast:</strong> The building is divided into three functional parts: the Marshal's home office and family living quarters in the front, the barren limestone jail cells in the center, and a post-war museum display section in the back. A brick addition was built on the rear in 1907 to house mid-century chain gangs tasked with constructing early county roads and public works projects.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>1827 – The Log Cabin Origins:</strong> The original frontier county jail is built as a small log structure before burning down and prompting a modern masonry replacement.</li><li><strong>1859 to 1933 – Active Jackson County Jail:</strong> Operates continuously as the central law enforcement hub and home office for the county sheriff and marshal.</li><li><strong>1861 – Civil War Provost Marshal's Office:</strong> Transformed during the war to detain military prisoners, Confederate raiders like William Quantrill, and citizens refusing to take pro-Union loyalty oaths.</li><li><strong>1882 – The Frank James Confinement:</strong> Confines the infamous James Gang outlaw for six months, whose celebrity cell was uniquely furnished with Brussels carpet, paintings, and a free-roaming card-party layout.</li><li><strong>1930s – Great Depression Adaptations:</strong> Following its 1933 decommissioning, the property is utilized by the county to house work-training programs, local welfare offices, and municipal bureaus.</li><li><strong>1959 to Present – JCHS Preservation and Museum:</strong> Saved directly from demolition by former President Harry S. Truman, the building is acquired by the Jackson County Historical Society to function as a pristine public museum.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building operates as a landmark living-history museum listed on the National Register of Historic Places. Maintained by the Jackson County Historical Society, it guides thousands of regional tourists through well-preserved historic cells, primary artifact rooms, and interactive walking tours that capture the authentic atmosphere of the old frontier West.</li>"
        ]
    },
    {
        id: "truman-visitor-center",
        title: "Harry S. Truman National Historic Site Visitor Center",
        address: "219-223 N. Main Street",
        category: "historical", 
        photo: "images/firestation_o.jpg",
        shortDesc: "A masterclass in civic duty! Built in 1927 to house roaring American LaFrance engines, this distinctive brick landmark evolved into a community theater before becoming the official National Park Service gateway to the Truman legacy.",
        photoCaption: "Harry S. Truman National Historic Site -219-223 N. Main Street, a beautifully arranged exhibition of Truman's personal travel pieces and artifacts.",
        gallery: ["images/firestation_i.jpg"],
        bullets: [
            "<li><strong>Building Description and Architecture:</strong> Originally designed by notable architect Hal Wheelock and constructed by the J.E. Dunn Construction Company, this 1927 two-story brick landmark stands out on the grid. As documented in architectural archives, it features a distinctive flat roof hidden behind a shaped parapet with an inverted scallop design. The structure was engineered to house firefighting equipment on the lower portion—originally featuring folding wood doors for heavy response trucks—with sleeping quarters and a kitchen layout positioned on the upper floor.</li>",
            "<li><strong>Businesses Over Time:</strong> When the local department outgrew the facility in the early 1972-1973 window, the City of Independence seamlessly adapted the property to host community gathering initiatives. <ul class='timeline-nested-list'><li><strong>1927 – Fire Station No. 1:</strong> Erected as a state-of-the-art facility to modernize downtown public safety, housing a collection of new 750-gallon American LaFrance fire apparatus.</li><li><strong>1973 – Community Theatre & Municipal Offices:</strong> Adapted into an active localized performance arts house and city administration suite following the relocation of emergency crews.</li><li><strong>1983 to Present – National Park Service Headquarters:</strong> Formally acquired as a structural anchor following the establishment of the Harry S. Truman National Historic Site.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the building is owned by the City of Independence and operated by the National Park Service as the official Visitor Center for the Harry S. Truman National Historic Site. Serving as a high-impact preservation anchor, it guides thousands of regional tourists, handles scheduling, and coordinates historical interpretation programs across the downtown district grid.</li>"
        ]
    },
    {
        id: "clintons",
        title: "Clinton’s Soda Fountain",
        address: "100 W. Maple Avenue",
        category: "historical", 
        photo: "images/clintons_n.jpg",
        shortDesc: "The very floor where a future president first went to work! A 14-year-old Harry S. Truman earned his first three silver dollars here in 1898. Today, it revives the golden magic of an authentic 19th-century American soda fountain.",
        photoCaption: "Clinton's Soda Fountain - 100 W. Maple Avenue interior view of the restored soda fountain and seating area",
        gallery: ["images/clintons_i.jpg"],
        bullets: [
            "<li><strong>Post-Civil War Growth & Architecture:</strong> Constructed during the late nineteenth century commercial boom, replacing earlier frame structures with permanent brick. Occupying a prominent northwest corner lot on Main and Maple, its architectural presence was strategically optimized to anchor local retail trade and serve a steady influx of county seat visitors.</li>",
            "<li><strong>Harry Truman’s First Paying Job (1898):</strong> At age fourteen, future President Harry S. Truman earned his first three silver dollars here before and after school. His foundational duties included sweeping floors, dusting inventory, and opening the shop—a youthful milestone that Truman frequently cited as his introduction to civic responsibility and basic business discipline.</li>",
            "<li><strong>Twentieth-Century Survival:</strong> Despite the post-WWII suburban shift that altered traditional downtown footprints across Missouri, this structure successfully withstood commercial decline. Its physical preservation maintains a living connection to the early life of the 33rd President and the historical continuity of the district.</li>",
            "<li><strong>Businesses Over Time:</strong><ul class='timeline-nested-list'><li><strong>1890s – James H. Clinton Drugs:</strong> Operated by pharmacist J. H. Clinton as a central community hub selling stationery, tobacco, cosmetics, and custom-compounded family refreshments.</li><li><strong>1898 – The Truman Era:</strong> Young Harry S. Truman begins his historic tenure as a store boy, assisting customers and working the early mechanical fountain lines.</li><li><strong>1911 to 1950s – Clinton Pharmacy:</strong> Maintained its vital role as a trusted independent downtown pharmacy and social anchor through the Great Depression and World War II.</li><li><strong>1960s & 1970s – Goldman Jewelry:</strong> The space transitioned into a retail storefront for fine jewelry, reflecting changing retail demands on Independence Square.</li><li><strong>1988 to Present – Clinton’s Soda Fountain:</strong> Meticulously restored and reimagined to evoke its authentic early 20th-century atmosphere, continuing the long-standing tradition of serving the community through locally owned commerce.</li></ul></li>",
            "<li><strong>Current Use & Living Memorial:</strong> Today, Clinton’s Soda Fountain serves as a beloved operational museum and thriving local dessert destination. The meticulously designed interior instantly transports traveling tourists and local families into the early 1900s, serving up classic treats while educating the public on Truman’s youthful milestones.</li>"
        ]
    },
    {
        id: "elpico",
        title: "El Pico Mexican Restaurant",
        address: "106 W. Maple Avenue",
        category: "culinary",
        photo: "images/elpico_n.jpg",
        shortDesc: "The resilient turn-of-the-century culinary storefront literally rebuilt from the ashes of the Great Fire of 1906. Once marking the exact, dramatic boundary where firefighters halted a catastrophic downtown blaze, this historic lot has transformed from F.H.H. Knoepker's Edwardian grocery depot into a premier Mexican dining destination.",
        photoCaption: "El Pico Mexican Restaurant — 106 W. Maple Avenue interior view of the dining room and bar area",
        gallery: ["images/elpico_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> The structure dates to the early twentieth century—a period of intense commercial growth on the Square, during which vulnerable frontier timber frames were systematically replaced by permanent brick storefronts following a series of devastating downtown fires.</li>",
            "<li><strong>The Knoepker Grocery Era:</strong> During the late 19th and early 20th centuries, the address hosted F. H. H. Knoepker's prominent neighborhood grocery store. Knoepker, who learned the grocery trade under his father's established business on Maple Avenue, operated a bustling food and provisions depot on this exact lot.</li>",
            "<li><strong>The Great Fire of 1906:</strong> In February 1906, a catastrophic fire completely destroyed Knoepker's storefront alongside the iconic Clinton Block directly to the east. Archival photographs capture the building dramatically cut in half with its roof entirely collapsed, marking the exact perimeter where emergency crews fought to save the rest of the block.</li>",
            "<li><strong>Strategic Design Framework:</strong> Rebuilt immediately after the structural trauma of the fire, the building features a classic commercial layout including an open-concept ground floor, shared structural party walls with neighboring lots, and an ultra-walkable location perfect for courthouse visitors.</li>",
            "<li><strong>Current Use:</strong> Today, the building houses El Pico Mexican Restaurant, a locally owned dining staple known for serving traditional Mexican and Fresh-Mex cuisine, successfully driving steady evening foot traffic to the historic district grid.</li>"
        ]
    },
    {
        id: "pharaoh",
        title: "Pharaoh 4 Cinema",
        address: "114 W. Maple Avenue",
        category: "architecture",
        photo: "images/pharaoh.jpg",
        shortDesc: "A modern entertainment anchor built explicitly for the silver screen. Opened in the summer of 1975 as a pioneer of the multi-auditorium era, this resilient four-screen landmark outlasted the corporate multiplex boom to thrive as a dynamic independent community cinema.",
        photoCaption: "Pharaoh 4 Cinema — 114 W. Maple Avenue interior view of the theater lobby",
        gallery: ["images/pharaoh_i.jpg"],
        bullets: [
            "<li><strong>Modern Cinematic Framework:</strong> Constructed in the mid-1970s and opened on June 20, 1975, as the Independence Square Cinema, this structure stands out on the block as a building designed specifically as a multi-auditorium movie house rather than an adapted 19th-century storefront.</li>",
            "<li><strong>The Multi-Screen Revolution:</strong> Originally operated by Mid-America Theatres, the four-screen layout captured an important economic shift in the film industry, replacing vulnerable single-screen palaces with higher-density auditorium setups.</li>",
            "<li><strong>The 2008 Independent Revival:</strong> Following major ownership shifts, the venue was officially renamed Pharaoh 4 Cinema around 2008, establishing a distinct neighborhood identity that saved the property from the retail decline that swept other mid-century cinemas.</li>",
            "<li><strong>Current Use & Adaptive Activation:</strong> Today, the theater hosts current box-office films alongside interactive Retro Movie Nights, community venue rentals, and the famous summer 'Moonlight Movies' series featuring open-air screenings projected directly onto its exterior block parameters.</li>"
        ]
    },
    {
        id: "planetqueen",
        title: "Planet Queen Records & Vintage",
        address: "209 W. Maple Avenue",
        category: "professional",
        photo: "images/planetqueen.jpg",
        shortDesc: "A timeless commercial storefront channeling a century of independent spirit. Having served the Square for decades as a dedicated shoe repair hub and a legendary 40-year local hair salon, this cozy brick block now spins new life as a vibrant haven for vinyl records, vintage fashion, and pop culture nostalgia.",
        photoCaption: "Planet Queen Records & Vintage — 209 W. Maple Avenue interior view of the store.",
        gallery: ["images/planetqueen_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Dating from the historic commercial growth boom of the late nineteenth or early twentieth century, this brick storefront features an open-concept layout and street-facing apertures specifically engineered for flexible independent retail trade.</li>",
            "<li><strong>Businesses Over Time:</strong> Prior to its contemporary musical adaptation, the lot maintained a rich multi-generational legacy as the central hub for local shoe care, cobbling, and personal grooming on Maple Avenue.<ul class='timeline-nested-list'><li><strong>1920s–1930s – Louis Nerman Shoe Repair:</strong> Anchors the space as a dedicated interwar leather workshop and neighborhood shoe repair shop.</li><li><strong>1940s–1950s – Independence Shoe Repair:</strong> Serves the community throughout the World War II and post-war eras under updated operations.</li><li><strong>1960 – Lolla’s Shoe Shop:</strong> Continues the multi-decade tradition of independent artisanal shoe care on the block.</li><li><strong>1970 – JM Steinhauser Realty:</strong> Shifts away from manual trades to accommodate a localized real estate and professional business office.</li><li><strong>1980s–2023 – Randal’s For Hair:</strong> Operates as a beloved independent hair salon, serving downtown residents for over forty continuous years.</li><li><strong>2024 to Present – Planet Queen Records & Vintage:</strong> Transformed into a specialized vinyl, vintage apparel, and pop culture collectibles destination.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the venue operates as Planet Queen Records & Vintage, expanding the commercial variety of Independence Square by drawing steady pedestrian traffic interested in music history, retro fashion, and collectible community pop culture.</li>"
        ]
    },
    {
        id: "casket",
        title: "Direct Casket Outlet",
        address: "210 W. Maple Avenue",
        category: "professional",
        photo: "images/casket.jpg",
        shortDesc: "A masterclass in modern niche adaptation. Operating on the Square since 1998 as one of the first retail casket stores in the Midwest to sell directly to the public, this early-20th-century brick storefront proves how versatile historic commercial spaces remain.",
        photoCaption: "Direct Casket Outlet — A classic downtown storefront repurposed to pioneer direct-to-consumer retail alternatives.",
        gallery: ["images/casket_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the historic commercial fabric surrounding the Truman Courthouse, this late-19th to early-20th-century brick structure features a flexible open footprint engineered for specialized independent trade.</li>",
            "<li><strong>A Midwest Retail Pioneer:</strong> Established in 1998, this business became notable as one of the very first retail casket stores in the Midwest to sell directly to consumers, disrupting traditional funeral home merchandise constraints.</li>",
            "<li><strong>Consumer-First Alternative:</strong> The company was founded to give local families a transparent alternative and potentially more affordable financial options for funeral merchandise during difficult personal moments.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Late 1800s/Early 1900s – Construction:</strong> Erected to anchor high-density storefront commerce along the west corridor of the Square.</li><li><strong>1998 – Showroom Foundations:</strong> Opened to the public, successfully pioneering a direct-to-consumer retail strategy inside an antique layout.</li><li><strong>Present – Service Continuity:</strong> Maintains active commercial operations, contributing to the distinct entrepreneurial diversity of the district.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the company utilizes this adaptive storefront to provide specialized funeral-related options directly to customers, demonstrating how historic downtown buildings remain useful through continued economic service.</li>"
        ]
    },
    {
        id: "emmys",
        title: "Emmy's Nails",
        address: "212 W. Maple Avenue",
        category: "professional",
        photo: "images/emmys.jpg",
        shortDesc: "A timeless West-Square storefront championing modern personal care. Having established a rock-solid, ten-year legacy as a dedicated beauty and wellness hub through concepts like Blush Nail and Miss Nails, this adaptive brick block now flourishes as Emmy's Nails.",
        photoCaption: "Emmy’s Nails — 212 W. Maple Avenue, view of the product they offer.",
         gallery: ["images/emmys_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the historic commercial fabric on the west side of Independence Square, this structure features an adaptable open layout and shared masonry party walls engineered for versatile downtown trade.</li>",
            "<li><strong>Businesses Over Time:</strong> In recent years, the building has maintained an incredibly consistent function, carving out a specialized niche as a primary beauty and customer-service storefront along Maple Avenue.<ul class='timeline-nested-list'><li><strong>Early Period – Early Retail/Service:</strong> Utilized by foundational independent merchants not yet fully identified in regional records.</li><li><strong>2016–2017 – Blush Nail:</strong> Launches the property's modern footprint into the personal care and beauty-service industry.</li><li><strong>2018–2024 – Miss Nails:</strong> Extends the block's wellness service continuity as a trusted local nail salon for six continuous years.</li><li><strong>2024 to Present – Emmy’s Nails:</strong> Thoroughly refreshed to operate as a thriving contemporary salon, offering premium nail and spa services.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the storefront houses Emmy’s Nails, beautifully demonstrating how historic downtown buildings remain highly useful and economically active by adapting to modern service demands while preserving the architectural character of the district.</li>"
        ]
    },
    {
        id: "bigjohns",
        title: "Big John's Corner Bar",
        address: "213 W. Maple Avenue",
        category: "culinary",
        photo: "images/bigjohns.jpg",
        shortDesc: "A legendary four-decade anchor of downtown hospitality. Operating on the West Square since circa 1983, this historic brick storefront stands as a rare monument to commercial longevity, driving high-energy social vitality for over 42 continuous years.",
        photoCaption: "Big John’s Corner Bar — A classic turn-of-the-century commercial storefront serving as one of the longest-running social hubs on the Square.",
        gallery: ["images/bigjohns_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the historic commercial fabric on the west side of Independence Square, this structure features an adaptable open footprint and classic masonry lines that directly contribute to the historic character of the district.</li>",
            "<li><strong>A Rare Multi-Decade Anchor:</strong> While many downtown storefronts naturally experience frequent tenant turnover, this venue is highly significant for maintaining a single, continuous connection to the same business concept for over forty years.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early Period – Early Retail/Service:</strong> Serves as a versatile commercial storefront for various early independent merchants not yet fully documented in regional archives.</li><li><strong>Circa 1983/1984 – Tavern Foundations:</strong> Big John’s Corner Bar officially opens its doors, transitioning the property's lifecycle into a dedicated neighborhood social venue.</li><li><strong>Present – Commercial Longevity:</strong> Celebrates approximately 42 years of continuous, uninterrupted operation under the exact same storefront identity.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, Big John’s Corner Bar fully utilizes its classic storefront layout to operate as a beloved neighborhood tavern and gathering hub.</li>"
        ]
    },
    {
        id: "daves",
        title: "Dave's Bakery & Deli",
        address: "214 W. Maple Avenue",
        category: "culinary",
        photo: "images/daves.jpg",
        shortDesc: "A legendary multi-generational cornerstone of the Square's culinary history. Rooted on the site of an 1849 pioneer railroad depot and beautifully rebuilt after the catastrophic 'Hundred-Thousand-Dollar Fire' of 1915, this iconic storefront continues a near century-old baking tradition.",
        photoCaption: "Dave’s Bakery & Deli - 214 W. Maple Avenue interior view of the bakery and deli",
        gallery: ["images/daves_i.jpg"],
       bullets: [
            "<li><strong>Pioneer Transportation Foundations:</strong> In 1849, this exact lot served as the original location for the depot and Freight House of the Independence and Missouri Railroad, welcoming travelers preparing for their historic journeys west.</li>",
            "<li><strong>The Great Fire of 1915:</strong> After housing the Cleveland News office in 1911, the lot was cleared by a devastating early-morning blaze on February 11, 1915, known historically as the 'Hundred-Thousand-Dollar Fire,' which leveled an entire commercial block.</li>",
            "<li><strong>Businesses Over Time:</strong> Following post-fire brick reconstruction, the storefront maintained a deep connection to food crafts.<ul class='timeline-nested-list'><li><strong>1911 – Cleveland News:</strong> Anchors the early 20th-century storefront prior to the structural trauma of the block.</li><li><strong>1920s–1930s – Union Pacific Tea & Market Meats:</strong> Establishes a thriving neighborhood grocery and provisions depot.</li><li><strong>1940s–1960s – The Bakery Era:</strong> Solidifies the storefront's culinary identity through Star Bakery and Smith's Quality Bakery.</li><li><strong>1970s – Commercial Shifts:</strong> Accommodates diverse local businesses including Independence Hearing Aid Co. (1970), Harold Office Equipment (1979), and the Jewelera Shop (1980).</li><li><strong>1980s to Present – Dave’s Deli:</strong> Operates as one of the longest-running casual food anchors on the Square, serving the community for more than four decades.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the storefront serves as Dave’s Bakery & Deli, operating as a beloved community space for coffee, breakfast, lunch, and conversation, while driving crucial daytime pedestrian foot traffic to the historic district grid.</li>"
        ]
    },
    {
        id: "haupart",
        title: "haupART Frame Gallery",
        address: "220 W. Maple Avenue",
        category: "professional",
        photo: "images/haupart.jpg",
        shortDesc: "A dedicated 17-year sanctuary for art preservation and local craftsmanship. Established around 2008 by artist Sherri Haupert, this early-20th-century brick storefront anchors the West Square's creative economy through conservation-quality framing and original art displays.",
        photoCaption: "haupART Frame Gallery — 220 W. Maple Avenue, offering framing and art.",
        gallery: ["images/haupart_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the late 19th- to early 20th-century commercial growth of Independence Square, this structure features a flexible open footprint and shared party walls engineered for specialized independent trade.</li>",
            "<li><strong>A Seventeenth-Year Creative Anchor:</strong> Owned and operated by artist and master framer Sherri Haupert, the studio has maintained continuous business operations on the block since circa 2008/2009, defying traditional independent retail turnover rates.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early Period – Early Retail:</strong> Accommodates diverse early mercantile layouts that helped establish downtown Independence as a major commercial center in Jackson County.</li><li><strong>Circa 2008/2009 – Gallery Foundations:</strong> Sherri Haupert establishes haupART Frame Gallery, transitioning the space into a dedicated artisan design house.</li><li><strong>Present – Cultural Preservation:</strong> Celebrates nearly two decades of active service, providing essential conservation-quality materials to protect the region's physical art and history.</li></ul></li>",
            "<li><strong>Current Use & Specialized Craft:</strong> Today, the storefront houses haupART Frame Gallery, utilizing its classic pedestrian-facing layout to offer custom picture framing, art preservation, photography displays, and original artwork to courthouse district visitors.</li>"
        ]
    },
    {
        id: "wild-about-harry",
        title: "Wild About Harry",
        address: "206 W. Maple Avenue",
        category: "professional",
        photo: "images/wildharry_n.jpg",
        shortDesc: "A phenomenal century-old storefront celebrating local presidential heritage. Having served the Square since 1911 as a vibrant dry goods depot, an A&P grocery hub, and a premier multi-generational menswear boutique, this adaptive brick block now thrives as Wild About Harry.",
        photoCaption: "Wild About Harry — 206 W. Maple Avenue interior view of the shop.",
        gallery: ["images/wildharry_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of the historic commercial fabric surrounding the Truman Courthouse, this structure features an adaptable open footprint and shared party walls engineered for versatile downtown trade.</li>",
            "<li><strong>Businesses Over Time:</strong> The property boasts a deeply documented occupancy history, serving as a premier destination for general dry goods, essential community groceries, and high-end tailored clothing.<ul class='timeline-nested-list'><li><strong>1911 – Casper & Shimfessel Dry Goods:</strong> Anchors the early twentieth-century storefront as a dedicated textile and dry goods house.</li><li><strong>1930s–1940s – A&P Tea Company:</strong> Operates as a central neighborhood grocery outpost, later expanding the property to accommodate upper-level physician offices.</li><li><strong>1950s–1970s – The Menswear Era:</strong> Transitions into a high-end apparel destination through Herman Wienshienk Clothing and the legendary Herm’s Mens Shop.</li><li><strong>Present – Wild About Harry:</strong> Transformed into an iconic specialized retail storefront paying homage to local history.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the storefront houses Wild About Harry, a mens goods store and a gift shop for men.</li>"
        ]
    },
    {
        id: "gilbert-whitney",
        title: "Gilbert, Whitney & Co.",
        address: "104 N. Liberty Street",
        category: "professional", 
        photo: "images/gilbert_o.jpg",
        shortDesc: "A prominent century-old commercial anchor along the Liberty Street corridor. Originally housing 'The Evening & Morning Sun' in the 1830s, this highly adaptable brick storefront survived changing economic eras to thrive today as a premier specialty boutique for home décor, gifts, and vintage-inspired furnishings.",
        photoCaption: "Gilbert, Whitney & Co. —  104 N. Liberty Street interior view of the store.",
        gallery: ["images/gilbert_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Reflecting traditional commercial design, this building features a narrow footprint, large street-level display windows, and shared party walls engineered to maximize pedestrian exposure north of the Square.</li>",
            "<li><strong>Business Over Time:</strong> Built to accommodate high-density trade, the building's flexible interior layout has allowed successive generations of independent merchants to navigate shifting regional marketplace trends over the course of a century.<ul class='timeline-nested-list'><li><strong>1832–1833 – Origins:</strong> The lot hosts the foundational print and publication operations of 'The Evening & Morning Sun.'</li><li><strong>1911 – Richards Carpentry:</strong> Adapts the commercial layout into a specialized local woodworking and carpentry shop.</li><li><strong>1924 – Allen Music & Co.:</strong> Transitions the property into a popular musical retail hub during the roaring twenties.</li><li><strong>1930s – Pendleton & Gentry Drug:</strong> Serves the downtown community through the interwar era as a busy neighborhood pharmacy.</li><li><strong>1960s – Jones Store:</strong> Anchors the block's mid-century commercial footprint as a dedicated regional department store outlet.</li><li><strong>Present – Gilbert, Whitney & Co.:</strong> Revitalized into a premier specialty boutique, offering curated home décor, seasonal merchandise, and gifts.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the storefront houses Gilbert, Whitney & Co., continuing a long-standing mercantile tradition that drives crucial tourist and community foot traffic to the historic district grid.</li>"
        ]
    },
    {
        id: "designers-avenue",
        title: "Designers Avenue Upholstery",
        address: "202 N. Liberty Street",
        category: "professional", 
        photo: "images/designersavenue_n.jpg",
        shortDesc: "A rare living monument to traditional American craftsmanship. Operating just north of the Square since 2006, this adaptive commercial storefront keeps historic skilled trades alive through the dedicated master restoration of family heirlooms and antique furniture.",
        photoCaption: "Designers Avenue Upholstery — 202 N. Liberty Street interior view of the workshop area.",
        gallery: ["images/designersavenue_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Located just north of Independence Square, this structure forms part of the historic commercial fabric engineered with the flexible layout common to early-20th-century pedestrian trade blocks.</li>",
            "<li><strong>Preserving Skilled Trades:</strong> While professional upholstery workshops were once standard features of early American downtowns, this building stands out as a rare modern survivor maintaining a craft-based commercial legacy.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Late 19th/Early 20th Century – Construction:</strong> Erected to support high-density commercial growth and specialized trade along the northern Liberty Street corridor.</li><li><strong>2006 – Workshop Foundations:</strong> Designers Avenue Upholstery opens its doors, transitioning the property into a dedicated workshop for antique furniture revival.</li><li><strong>Present – Two Decades of Service:</strong> Continues to operate seamlessly under independent management, anchoring the neighborhood's craft economy.</li></ul></li>",
            "<li><strong>Current Use & Master Craft:</strong> Today, the storefront houses Designers Avenue Upholstery, utilizing its active space to restore family heirlooms and antique furniture, helping community members extend the lifecycle of historic pieces while keeping the streetscape economically diverse.</li>"
        ]
    },
    {
        id: "austin-conley-agency",
        title: "Austin Conley Agency — American Family Insurance",
        address: "202–206 N. Liberty Street",
        category: "historical", 
        photo: "images/austinconley_n.jpg",
        shortDesc: "A premier historic landmark directly tied to the professional career of President Harry S. Truman. Erected as a substantial early-20th-century brick block, this beautifully preserved seven-bay structure housed the Community Savings and Loan Association where Truman maintained his offices from 1925 to 1932.",
        photoCaption: "Austin Conley Agency - 202–206 N. Liberty Street, advertising view", 
        gallery: ["images/austinconley_i.jpg"],
        bullets: [
            "<li><strong>Significant Seven-Bay Architecture:</strong> Reconstructed as a substantial two-story brick commercial block, this structure features decorative corbelling, stone stringcourses, and upper-story office windows perfectly preserving its turn-of-the-century streetscape appearance.</li>",
            "<li><strong>The Historic Truman Footprint:</strong> From roughly 1925 to 1932, the building served as the operational headquarters for the Community Savings and Loan Association, employing Harry S. Truman as his primary business office prior to his election to the U.S. Senate.</li>",
            "<li><strong>Businesses Over Time:</strong><ul class='timeline-nested-list'><li><strong>Late 1800s/Early 1900s – Construction:</strong> Built as a high-density, multi-storefront commercial block to anchor the northern Liberty corridor.</li><li><strong>1905 – Foundational Trade:</strong> The Independence City Directory documents Charles Capello (clerk, 202 N. Liberty) and Jacob Lay (tailor, 204 N. Liberty) operating out of the layout.</li><li><strong>1925–1932 – The Financial & Truman Era:</strong> Houses the Community Savings and Loan Association, serving as a frequent business site captured in national archival media.</li><li><strong>Mid-to-Late 1900s – Adaptive Reuse:</strong> Accommodates continuous lines of professional services, financial suites, and specialized craft trades like Designers Avenue Upholstery.</li><li><strong>Present – Professional Continuity:</strong> Functions as the active home of the Austin Conley American Family Insurance agency, providing auto, home, life, and commercial planning.</li></ul></li>",
            "<li><strong>Current Use:</strong> Today, the property seamlessly blends its monumental presidential legacy with active community insurance services, serving as an essential contributing landmark within the Independence Square Historic District.</li>"
        ]
    },
    {
        id: "just-for-you-salon",
        title: "Just For You Hair & Nail",
        address: "208 N. Liberty Street",
        category: "professional",
        photo: "images/justforyou_n.jpg",
        shortDesc: "An essential component of the historic Truman-era streetscape. Nestled directly adjacent to the historic 1920s Community Savings and Loan block, this resilient early-20th-century brick storefront maintains the Square's long-standing tradition of independent personal service.",
        photoCaption: "Just For You Hair & Nail — 208 N. Liberty Street logo",
        gallery: ["images/justforyou_i.jpg"],
        bullets: [
            "<li><strong>Historic Square-Area Architecture:</strong> Part of a continuous row of late-19th and early-20th-century commercial developments, this structure features classic brick construction, shared party walls, and large street-level display windows engineered for independent trade.</li>",
            "<li><strong>The Truman Streetscape Context:</strong> Located immediately north of the historic 202–206 N. Liberty block where Harry S. Truman maintained his pre-senatorial business offices, this storefront stands as an intact element of the historic environment the President frequented throughout his life.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>Early to Late 1900s – Commercial Witness:</strong> Serves as a flexible home to various commercial retail merchants, insurance offices, and professional services typical of the courthouse district.</li><li><strong>Modern Era to Present – Salon Adaptation:</strong> Just For You Hair & Nail establishes its brick-and-mortar operations, transitioning the antique space into a dedicated beauty and wellness hub.</li></ul></li>",
            "<li><strong>Current Use & Service Continuity:</strong> Today, the storefront houses Just For You Hair & Nail, successfully utilizing its historic layout to offer haircuts, styling, coloring, and nail services, driving essential daily foot traffic to the North Liberty commercial grid.</li>"
        ]
    },
    {
        id: "updog",
        title: "Up Dog",
        address: "114 N. Liberty Street",
        category: "culinary",
        photo: "images/updog_o.jpg",
       shortDesc: "A beloved retro culinary anchor on the North Liberty corridor. Operating since circa 2011, this early-20th-century brick storefront blends a nostalgic diner-style atmosphere with a creative menu of regional-style hot dogs.",
        photoCaption: "Up Dog — 114 N. Liberty Street interior view of the diner",
         gallery: ["images/updog_i.jpg"],
       bullets: [
            "<li><strong>Historical Architecture:</strong> Part of a continuous commercial row on Liberty Street, this structure features classic brick construction, shared party walls, and large display windows engineered for adaptable downtown trade.</li>",
            "<li><strong>A Decade of Restaurant Longevity:</strong> Establishing its diner foundations around 2011, the venue stands out as a highly successful example of independent storefront survival, drawing steady tourist and local foot traffic.</li>",
            "<li><strong>Application Evolution & Key Events:</strong><ul class='timeline-nested-list'><li><strong>19th/Early 20th Century – Commercial Witness:</strong> Serves as a flexible home to early retail merchants, professional offices, and specialized service trades that built Jackson County's core.</li><li><strong>Circa 2011 – The Up Dog Era:</strong> Transformed into a retro diner-style space, introducing counter seating, classic decor, and handcrafted regional hot dogs to the streetscape.</li><li><strong>Present – Historic Preservation:</strong> Continues to fulfill its original purpose, maintaining an unbroken pattern of locally owned commerce that protects the active character of the Square.</li></ul></li>",
            "<li><strong>Current Use & Curated Menu:</strong> Today, the storefront houses Up Dog, successfully utilizing its historic pedestrian layout to offer specialized hot dogs, custom burgers, and locally produced beverages to courthouse district visitors.</li>"
        ]
    },
    {
        id: "squarepizza",
        title: "Square Pizza",
        address: "208 W. Maple Avenue",
        category: "culinary",
       photo: "images/squarepizza_n.jpg",
        shortDesc: "The legendary home of 'The Only Square Pizza in Missouri'. Anchoring the West Maple corridor since 2011, this century-old commercial block—which previously housed beloved local groceries, meat depots, and bookstores—blends retro diner decor and arcade games with family-friendly dining.",
        photoCaption: "Square Pizza — 208 W. Maple Avenue interior view of the restaurant",
        gallery: ["images/squarepizza_i.jpg"],
        bullets: [
            "<li><strong>Historical Architecture:</strong> Part of a continuous row of late-19th and early-20th-century structures defining West Maple Avenue, this building features an adaptable retail footprint and shared masonry walls engineered for high-density trade.</li>",
            "<li><strong>Businesses Over Time:</strong> For well over one hundred years, this exact property has served its original community mandate, seamlessly transitioning from early historic markets to specialized lifestyle storefronts.<ul class='timeline-nested-list'><li><strong>1920s–1950s – The Grocery & Meat Market Era:</strong> Functions as a premier neighborhood food hub under Bridges Grocery, Beatty Grocery & Roberts Meats, and Buehler Brothers Meats.</li><li><strong>1960s – Midland Hardware Store:</strong> Shifts the building's commercial lineage into regional home goods, tools, and community hardware distribution.</li><li><strong>1970s – Literary & Gift Boutiques:</strong> Adapts the street-level layout to house Graham Meyer Book & Gift Shop and Harold Books & Gifts.</li></ul></li>",
            "<li><strong>Current Use & Specialized Themes:</strong> Today, the storefront houses Square Pizza, successfully utilizing its historic pedestrian layout to blend square pan-style pizzas, retro diner decor, and vintage arcade games with a menu celebrating local landmarks.</li>"
        ]
    }
];

/**
 * Individual Organized Itineraries Database Asset
 * Structured list of available wagon and walking tours.
 */
const organizedTours = [
    {
        id: "tour-square-loop",
        title: "The Historical Square Loop",
        meta: "15-20 Mins • $20 Adult / $7 Kids",
        photo: "images/district1.jpg",
        shortDesc: "Perfect for quick historic setups! Ride past the oldest courthouse remaining West of the Mississippi River and see where young Harry S. Truman held his first commercial paying job.",
        pickup: "217 N. Main Street (Wagon Depot)",
        bullets: [
            "Route Parameter Logistics: A rapid, high-impact loop designed for tourists tracking immediate architectural landmarks on the central county block grid. All loops load directly outside the historic depot parameters.",
            "Application Evolution & Key Events: Includes detailed narratives on the 1859 Jail structures, the 1836 frontier masonry styles, the outfitting supply stores where pioneer wagon lines built provisions, and the historical background explaining how 'Wild' Bill Hickok natively gained his legendary moniker."
        ]
    },
    {
        id: "tour-city-limits",
        title: "The 1845 City Limits Excursion",
        meta: "45 Mins • $30 Adult / $7 Kids",
        photo: "images/trails_view.jpg",
        shortDesc: "Track deep pioneer paths! Travel out to the original municipal borders, cross authentic Oregon Trail wagon swales, and explore the bloody Kansas-Missouri border wars.",
        pickup: "217 N. Main Street (Wagon Depot)",
        bullets: [
            "Route Parameter Logistics: An intermediate, mid-duration trail mapping out the transition from a nineteenth-century village outfitting post into a high-density regional trade city.",
            "Application Evolution & Key Events: Rides directly across real ground footprints left by pioneer caravans on the Oregon Trail path. Includes structural storytelling outside Bess Truman’s birthplace home, detailed historical analysis of Civil War General Order No. 11, and explanations regarding why Frank James' maximum-security cell was never locked."
        ]
    },
    {
        id: "tour-full-city",
        title: "The Ultimate Full City Journey",
        meta: "90 Mins (2.8 Miles) • $45 Adult / $7 Kids",
        photo: "images/fullcity.jpg",
        shortDesc: "The complete historical chronicle. Compounds all pioneer trails while traversing real Civil War battlefields with visible bullet holes and the classic Truman Home love story.",
        pickup: "217 N. Main Street (Wagon Depot)",
        bullets: [
            "Route Parameter Logistics: The premium, maximum-length covered wagon route covering nearly three full miles of uninterrupted historical district parameters.",
            "Application Evolution & Key Events: Delivers tourists into tactical Civil War combat sectors where real gunfire impact damage remains visible on structural stone masonry. Features a transit stop at Cannon Hill to evaluate where guerilla raider Cole Younger spied heavily on Union garrisons, concluding with an exploration of the Truman Home neighborhood."
        ]
    },
    {
        id: "tour-chuck-wagon",
        title: "Chuck Wagon Dinner Experience",
        meta: "60 Mins Transit + BBQ • $60 Adult / $20 Kids",
        photo: "images/wagon.jpg",
        shortDesc: "The ultimate pioneer feast! Combines an open-air wagon ride with an authentic campfire gathering featuring world-famous Kansas City BBQ and live frontier acoustic music.",
        pickup: "Group Booking (Min. 15 Persons Required)",
        bullets: [
            "Route Parameter Logistics: Operating exclusively via specialized group advance reservations (minimum 15 participants), making it highly optimized for school field trips, family reunions, and district hospitality events.",
            "Application Evolution & Key Events: Blends a scenic architectural transit loop with an outdoor social dinner layout beside a roaring campfire (weather permitting). Serving authentic slow-smoked Kansas City BBQ cuts accompanied by live vocal performers playing period-accurate 19th-century folk and trail music on request."
        ]
    }
];

/**
 * Pre-compiled thematic tracks grouping multiple locations into sequential tours.
 */
const tracksDatabase = {
    track1: {
        title: "The Truman Legacy Tour",
        tag: "Track 01 • Presidential History Timeline",
        photo: "images/district.jpg", 
        stops: ["courthouse", "clintons", "truman-visitor-center"]
    },
    track2: {
        title: "Local Heritage & Flavors",
        tag: "Track 02 • Culinary Timeline",
        photo: "images/food.jpg", 
        stops: ["courthouse_exchange", "cafeverona", "pickens", "squarepizza"]
    }
};

// Global state variable holding the active category filter status.
let currentCategory = "all";

/**
 * Global application initializer. Attaches foundational DOM interaction logic 
 * once the HTML structural tree is parsed and safe to read.
 */
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    syncMetricsData();
    initScrollReveal();
    initMetricsObserver();
    // Initially renders directory with data alphanumeric-sorted by street name/number
    renderDirectory(getBuildingsSortedByStreet());
    renderHomeDirectoryPreview();
    initOrganizedTours();
    initRoutes();
    initSearchLogic();
    // Activates the default tab/page (History) and syncs the nav highlight state
    showPage("history-section");
});

/**
 * Switches the site between single-section "pages" (tabs) instead of one
 * long continuous scroll. Only the section matching the given id is shown;
 * every other top-level section is hidden. Also syncs which nav link is
 * highlighted as active, in both the desktop bar and the mobile menu.
 */
function showPage(id) {
    const target = document.getElementById(id);
    if (!target) return;

    document.querySelectorAll(".page-section").forEach((section) => {
        section.classList.toggle("active-page", section.id === id);
    });

    document.querySelectorAll(".nav-links a, .mobile-fullscreen-links a, .mobile-secondary-links a").forEach((link) => {
        link.classList.toggle("active-link", link.dataset.page === id);
    });

    // Reveal this page's content immediately rather than waiting on the
    // scroll-based IntersectionObserver, since a hidden-then-shown page
    // may not have scrolled into view yet.
    target.querySelectorAll(".scroll-reveal").forEach((el) => el.classList.add("revealed"));
    if (target.classList.contains("scroll-reveal")) {
        target.classList.add("revealed");
    }

    // Every tab except Home sits on a light background from the top of the
    // page, so the nav must stay in its solid navy & gold state rather than
    // relying on scroll position (which just reset to 0 below).
    const nav = document.getElementById("mainNav");
    if (nav) {
        nav.dataset.forceSolid = id === "history-section" ? "false" : "true";
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    updateNavAppearance();
}

/**
 * Used by nav items whose full content now lives inline on the Home page
 * (Wagon Routes, Curated Pathways) instead of being separate tabs. Switches
 * to the Home page, then smooth-scrolls down to the requested section once
 * it's visible in the DOM.
 */
function goToHomeSection(id) {
    showPage("history-section");
    requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

/**
 * Renders a 3-building preview of the directory directly on the Home page:
 * full detail cards for the first three buildings, plus a horizontal
 * scrollable carousel of the same three that links out to the full
 * Directory tab.
 */
function renderHomeDirectoryPreview() {
    const previewGrid = document.getElementById("homeDirectoryPreviewGrid");
    if (!previewGrid) return;

    const items = getBuildingsSortedByStreet().slice(0, 3);

    previewGrid.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "dir-card";
        card.setAttribute("data-id", item.id);
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${item.photo}" alt="${item.title}" class="card-img">
            </div>
            <div class="card-body">
                <span class="dir-category">${item.category}</span>
                <h3 class="card-title"><span class="notranslate" translate="no">${item.title}</span></h3>
                <div class="card-address">📍 ${item.address}</div>
                <p class="card-desc">${item.shortDesc}</p>
                <button class="card-info-btn" onclick="openModal('${item.id}'); event.stopPropagation();">
                    <span>View History & Details</span>
                    <span class="arrow">→</span>
                </button>
            </div>
        `;
        card.onclick = () => openModal(item.id);
        previewGrid.appendChild(card);
    });
}

/**
 * Keeps the "Historic Sites" metric in the hero stats bar in sync with the
 * actual number of entries in buildingsDatabase, so it never has to be
 * updated by hand when buildings are added or removed.
 */
function syncMetricsData() {
    const historicSitesNumber = document.getElementById("historicSitesMetric");
    if (historicSitesNumber) {
        historicSitesNumber.setAttribute("data-target", buildingsDatabase.length);
    }
}

/**
 * Monitors page scrolling behavior to seamlessly alter header styling.
 * Applies a solid background once the user has scrolled past 50 pixels,
 * OR whenever the nav is flagged to stay solid regardless of scroll
 * position (see updateNavAppearance / showPage) — this keeps the navy
 * & gold branding on every non-Home page instead of it washing out to
 * a transparent/white bar sitting at the top of a light page.
 */
function updateNavAppearance() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    const shouldBeSolid = window.scrollY > 50 || nav.dataset.forceSolid === "true";
    nav.classList.toggle("nav-scrolled", shouldBeSolid);
}

function initNavbar() {
    window.addEventListener("scroll", updateNavAppearance);
    updateNavAppearance();
}

/**
 * Initializes a standard IntersectionObserver to toggle CSS transition visibility.
 * Triggers fade-in animations on components carrying the 'scroll-reveal' signature.
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    revealElements.forEach(el => observer.observe(el));
}

/**
 * Handles animated numeric tickers for visual analytics elements.
 * Evaluates entry via IntersectionObserver and applies a non-linear ease-out animation.
 */
function initMetricsObserver() {
    const bar = document.getElementById("metricsBar");
    const numbers = document.querySelectorAll(".metric-number");
    if (!bar) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                numbers.forEach(num => {
                    const target = parseInt(num.getAttribute("data-target"));
                    let current = 0;
                    const duration = 4000; // Animation duration in milliseconds
                    const frameRate = 1000 / 60; // Standard 60fps evaluation interval
                    const totalFrames = Math.round(duration / frameRate);
                    let frame = 0;

                    const ticker = setInterval(() => {
                        frame++;
                        const progress = frame / totalFrames;
                        // Quartic ease-out optimization function
                        const easeOutProgress = 1 - Math.pow(1 - progress, 4);
                        current = target * easeOutProgress;

                        if (frame >= totalFrames) {
                            num.innerText = target;
                            clearInterval(ticker);
                        } else {
                            num.innerText = Math.floor(current);
                        }
                    }, frameRate);
                });
                observer.unobserve(bar); // Prevents recurring calculation loops
            }
        });
    });
    observer.observe(bar);
}

/**
 * Normalizes input address strings by parsing away prefix numbers and directional chars.
 * E.g., translates "112 W. Lexington Avenue" down into "Lexington Avenue".
 */
function extractStreetName(address) {
    const match = address.match(/^[\d\s,\-–]+(?:[NSEW]\.?\s*)?(.+)$/);
    return match ? match[1].trim() : address.trim();
}

/**
 * Sorts array assets chronologically/alphanumerically based on parsed street structures,
 * falling back onto ascending street address values when names match.
 */
function getBuildingsSortedByStreet() {
    return [...buildingsDatabase].sort((a, b) => {
        const streetA = extractStreetName(a.address);
        const streetB = extractStreetName(b.address);
        if (streetA !== streetB) return streetA.localeCompare(streetB);

        // Sorting fallback matching direct numerical address parameters
        const numA = parseInt(a.address.match(/\d+/), 10) || 0;
        const numB = parseInt(b.address.match(/\d+/), 10) || 0;
        return numA - numB;
    });
}

/**
 * Populates the main UI grid layout dynamically using Javascript template literals.
 * Appends interactive event handlers onto generated card fragments.
 */
function renderDirectory(data) {
    const grid = document.getElementById("directoryGrid");
    grid.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "dir-card";
        card.setAttribute("data-id", item.id);

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${item.photo}" alt="${item.title}" class="card-img">
            </div>
            <div class="card-body">
                <span class="dir-category">${item.category}</span>
                <h3 class="card-title"><span class="notranslate" translate="no">${item.title}</span></h3>
                <div class="card-address">📍 ${item.address}</div>
                <p class="card-desc">${item.shortDesc}</p>
                <button class="card-info-btn" onclick="openModal('${item.id}'); event.stopPropagation();">
                    <span>View History & Details</span>
                    <span class="arrow">→</span>
                </button>
            </div>
        `;
        card.onclick = () => openModal(item.id);
        grid.appendChild(card);
    });
}

/**
 * RegEx pattern helper designed to parse meta-information metrics from tours.
 * Splits duration tags and extracts explicit dollar integers.
 */
function parseTourMeta(meta) {
    const parts = meta.split("•").map(p => p.trim());
    const duration = parts[0] || "";
    const priceInfo = parts[1] || "";

    const adultMatch = priceInfo.match(/\$(\d+)\s*Adult/i);
    const kidsMatch = priceInfo.match(/\$(\d+)\s*Kids/i);

    return {
        duration,
        adultPrice: adultMatch ? adultMatch[1] : "—",
        kidsPrice: kidsMatch ? kidsMatch[1] : null
    };
}

/**
 * Generates and mounts the structured list layouts for organized wagon tours.
 */
function initOrganizedTours() {
    const container = document.getElementById("organizedToursGrid");
    if (!container) return;
    container.className = "wagon-grid";
    container.innerHTML = "";

    const clockIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15.5 14"></polyline></svg>`;

    organizedTours.forEach(tour => {
        const { duration, adultPrice, kidsPrice } = parseTourMeta(tour.meta);

        const card = document.createElement("div");
        card.className = "wagon-card";
        card.onclick = () => launchTourModal(tour.id);

        card.innerHTML = `
            <div class="wagon-media">
                <img src="${tour.photo}" alt="${tour.title}" onerror="this.style.background='linear-gradient(45deg, #b58913, #041334)'">
                <div class="wagon-price-badge">$${adultPrice}<span>Adult</span></div>
                <div class="wagon-duration-badge">${clockIcon}${duration}</div>
            </div>
            <div class="wagon-body">
                <h3>${tour.title}</h3>
                <p>${tour.shortDesc}</p>
                <div class="wagon-ticket-divider"></div>
                <div class="wagon-footer">
                    ${kidsPrice ? `<span class="wagon-kids-price">Kids <strong>$${kidsPrice}</strong></span>` : `<span class="wagon-kids-price">Group Booking</span>`}
                    <span class="wagon-cta">View Details →</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * String splitter tool isolating semantic header keys from body descriptions.
 * Separates data elements across internal text properties using explicit colon anchors.
 */
function parseBulletChapters(bullets) {
    return bullets.map(text => {
        const match = text.match(/^(.*?):\s*(.*)$/s);
        if (match) return { label: match[1], text: match[2] };
        return { label: "", text: text };
    });
}

// Global SVG icon dictionary utilized across dynamic inline-modal configurations.
const ICONS = {
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15.5 14"></polyline></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
    flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
    campfire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1.5 1-2.5 1-2.5S8 9 8 11a4 4 0 0 0 8 0c0-4-4-9-4-9z"></path><path d="M5 21h14"></path></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
};

/**
 * Dynamic content controller for displaying Organized Tours inside the global modal view.
 * Configures statistics, pickup rules, maps content layout arrays, and locks scrolling.
 */
function launchTourModal(tourId) {
    const tour = organizedTours.find(t => t.id === tourId);
    if (!tour) return;

    // Forces modal interior scroll wrapper back to absolute top positions
    const modalContainer = document.getElementById("modalContainer");
    if (modalContainer) modalContainer.scrollTop = 0;

    const wrapper = document.getElementById("modalDynamicContent");
    const { duration, adultPrice, kidsPrice } = parseTourMeta(tour.meta);
    const chapters = parseBulletChapters(tour.bullets);
    const rowIcons = [ICONS.map, ICONS.flag, ICONS.campfire, ICONS.clock];

    const rowsHTML = chapters.map((c, i) => `
        <div class="detail-row">
            <div class="detail-icon-box">${rowIcons[i % rowIcons.length]}</div>
            <div class="detail-row-info">
                <h4>${c.label}</h4>
                <p>${c.text}</p>
            </div>
        </div>
    `).join("");

    const bodyHTML = `
        <div class="modal-stats-row">
            <div class="modal-stat"><span class="modal-stat-value">${duration}</span><span class="modal-stat-label">Duration</span></div>
            <div class="modal-stat"><span class="modal-stat-value">$${adultPrice}</span><span class="modal-stat-label">Adult</span></div>
            <div class="modal-stat"><span class="modal-stat-value">${kidsPrice ? "$" + kidsPrice : "Group"}</span><span class="modal-stat-label">${kidsPrice ? "Kids" : "Booking"}</span></div>
        </div>
        <p style="color:var(--muted); font-size:0.95rem; line-height:1.75; text-align:justify;">${tour.shortDesc}</p>
        <div style="margin-top:1rem;">
            ${rowsHTML}
        </div>
    `;

    wrapper.innerHTML = `
        <div class="modal-content-wrap">
            <span class="modal-meta-tag">Pioneer Wagon Experience</span>
            <h2>${tour.title}</h2>
            <span class="dir-address" style="font-size:1rem; margin-bottom:2rem; display:block;">📍 Fleet Depot: ${tour.pickup}</span>
            <div class="modal-body-stacked">
                ${bodyHTML}
            </div>
        </div>
    `;
    document.getElementById("modalOverlay").classList.add("active");
}

/**
 * Attaches the filtering evaluation routine to the main search bar text field input listener.
 */
function initSearchLogic() {
    const searchInput = document.getElementById("dirSearch");
    if (searchInput) {
        searchInput.addEventListener("input", performCombinedFiltering);
    }
}

/**
 * Click proxy receiving signals from frontend category tabs. Sets targeted values, 
 * updates active button classes, and passes execution to the search engine pipeline.
 */
function filterCategory(cat, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = cat;
    performCombinedFiltering();
}

/**
 * Unified filter engine matrix. Interrogates active global strings and categories 
 * concurrently, parsing target datasets to hide or show matching elements dynamically.
 */
function performCombinedFiltering() {
    const searchElement = document.getElementById("dirSearch");
    const query = searchElement ? searchElement.value.toLowerCase() : "";
    const cards = document.querySelectorAll(".dir-card");

    cards.forEach(card => {
        const id = card.getAttribute("data-id");
        const item = buildingsDatabase.find(b => b.id === id);

        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearchText = item.title.toLowerCase().includes(query) || item.address.toLowerCase().includes(query);

        // Directly appends responsive utility helper classes to steer structural presentation
        if (matchesCategory && matchesSearchText) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

/**
 * Primary modal portal system layout manager. Matches unique identifiers against 
 * the database array configuration variables, builds structure tags, transforms formatting 
 * and handles UI view updates.
 */
function openModal(id) {
    const item = buildingsDatabase.find(b => b.id === id);
    if (!item) return;

    // Resets layout position settings inside target overlay frames
    const modalContainer = document.getElementById("modalContainer");
    if (modalContainer) modalContainer.scrollTop = 0;

    const wrapper = document.getElementById("modalDynamicContent");

    const categoryLabels = {
        historical: "Historical Heritage",
        architecture: "Architecture & Design",
        culinary: "Culinary & Tastings",
        professional: "Services & Professional"
    };

    const displayTag = categoryLabels[item.category] || "Square Asset";
    const internalPhoto = (item.gallery && item.gallery.length > 0) ? item.gallery[0] : item.photo;
    const photoCaption = item.photoCaption || "Historic architectural asset preserved on Independence Square.";

    // Evaluates dynamic list rendering formats safely
    const bulletsHTML = item.bullets.map(bullet => {
        if (bullet.trim().startsWith("<li>")) {
            return bullet; 
        }
        
        const match = bullet.match(/^(.*?):\s*(.*)$/s);
        if (match) {
            return `<li><strong>${match[1]}:</strong> ${match[2]}</li>`;
        }
        return `<li>${bullet}</li>`;
    }).join("");

    wrapper.innerHTML = `
        <div class="modal-content-wrap">
            <span class="modal-meta-tag">${displayTag}</span>
            <h2><span class="notranslate" translate="no">${item.title}</span></h2>
            <span class="dir-address">📍 ${item.address}</span>
            <div class="modal-body-stacked">
                <ul class="modal-bullet-list">
                    ${bulletsHTML}
                </ul>
                <div class="modal-inline-figure">
                    <div class="timeline-node-image-wrapper">
                        <img src="${internalPhoto}" alt="${item.title}" class="timeline-node-img">
                    </div>
                    <div class="modal-caption-text">
                        ${photoCaption}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("modalOverlay").classList.add("active");
}

/**
 * Structural closing controller utility. Dismantles overlay activation parameters 
 * and strips active styling modifiers away from layout elements.
 */
function closeModal() {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("active");
    
    const popup = document.getElementById("mobileNavPopup");
    if (popup) popup.classList.remove("popup-active");
    
    // Returns full regular scrolling behaviors back to standard HTML viewport layers
    document.body.style.overflow = "";
}

/**
 * Compiles and launches complex pre-assembled thematic routes inside custom timeline frames.
 */
function launchTrack(trackKey) {
    const track = tracksDatabase[trackKey];
    if (!track) return;

    const modalContainer = document.getElementById("modalContainer");
    if (modalContainer) modalContainer.scrollTop = 0;

    const wrapper = document.getElementById("modalDynamicContent");

    const stopsHTML = track.stops.map((stopId, index) => {
        const item = buildingsDatabase.find(b => b.id === stopId);
        if (!item) return "";
        const excerpt = item.shortDesc || "";
        return `
            <div class="route-stop-card">
                <div class="route-stop-banner">
                    <img src="${item.photo}" alt="${item.title}">
                    <div class="route-stop-number-badge">0${index + 1}</div>
                    <div class="route-stop-title-overlay">
                        <h4><span class="notranslate" translate="no">${item.title}</span></h4>
                        <span class="dir-address">📍 ${item.address}</span>
                    </div>
                </div>
                <div class="route-stop-body">
                    <p>${excerpt}</p>
                </div>
            </div>
        `;
    }).join("");

    wrapper.innerHTML = `
        <div class="modal-content-wrap">
            <span class="modal-meta-tag">${track.tag}</span>
            <h2>${track.title}</h2>
            <p style="color:var(--muted); font-size:0.95rem; line-height:1.75; text-align:justify; margin:1.5rem 0 0.5rem;">
                A ${track.stops.length}-stop journey through ${track.title}.
            </p>
            <div class="route-stops-list">${stopsHTML}</div>
        </div>
    `;
    document.getElementById("modalOverlay").classList.add("active");
}

/**
 * Initializes visual pipeline elements connecting structured pathways to track modules.
 */
function initRoutes() {
    const container = document.getElementById("routesGrid");
    if (!container) return;
    container.className = "pathway-grid";
    container.innerHTML = "";

    Object.keys(tracksDatabase).forEach((trackKey, index) => {
        const track = tracksDatabase[trackKey];
        const card = document.createElement("div");
        card.className = "pathway-card";
        card.onclick = () => launchTrack(trackKey);

        const dots = track.stops.map(() => `<span class="pathway-stop-dot filled"></span>`).join("");

        card.innerHTML = `
            <div class="pathway-image" style="background-image:url('${track.photo}')"></div>
            <div class="pathway-index-ring"><span>0${index + 1}</span></div>
            <div class="pathway-content">
                <h3>${track.title}</h3>
                <div class="pathway-stops-track">
                    ${dots}
                    <span class="pathway-stops-label">${track.stops.length} Historical Stops</span>
                </div>
                <span class="pathway-cta">Launch Timeline →</span>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Manages responsive collapsible accordion cards representing historical milestone segments.
 * Closes surrounding layout siblings automatically when an target element is deployed.
 */
function toggleTrailDropdown(btn) {
    const parent = btn.closest('.trail-card');
    const details = parent.querySelector('.trail-details');
    const icon = btn.querySelector('.toggle-icon');

    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    // Collapses competing timeline assets to avoid visual clutter
    document.querySelectorAll('.trail-card').forEach((card) => {
        if (card === parent) return;
        const otherBtn = card.querySelector('.trail-toggle-btn');
        const otherDetails = card.querySelector('.trail-details');
        const otherIcon = card.querySelector('.toggle-icon');
        if (otherBtn && otherBtn.getAttribute('aria-expanded') === 'true') {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherDetails.classList.remove('active');
            otherIcon.style.transform = 'rotate(0deg)';
            otherBtn.querySelector('span').innerText = 'Show Historic Milestones';
        }
    });

    btn.setAttribute('aria-expanded', !isExpanded);

    if (!isExpanded) {
        details.classList.add('active');
        icon.style.transform = 'rotate(45deg)'; // Rotates structural indicator elements
        btn.querySelector('span').innerText = 'Hide Historic Milestones';
    } else {
        details.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
        btn.querySelector('span').innerText = 'Show Historic Milestones';
    }
}

/**
 * Toggles responsive layout side menu bars on small viewports and handheld devices.
 */
function toggleMobileMenu() {
    const popup = document.getElementById("mobileNavPopup");
    if (!popup) return;
    
    popup.classList.toggle("popup-active");
    
    // Safely blocks background parent scroll routines while overlays remain visible
    document.body.style.overflow = popup.classList.contains("popup-active") ? "hidden" : "";
}

/**
 * Automated safety closer cleanup asset executing directly when mobile navigation links are tapped.
 */
function handleMobileLinkClick() {
    toggleMobileMenu();
}