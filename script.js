const data = {
    plants: [
        {name: "Acacia",
            videourl: "https://www.youtube.com/embed/VcapafbS0bA?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Acacia_baileyana_3%2C_Canberra_ACT.JPG/800px-Acacia_baileyana_3%2C_Canberra_ACT.JPG",
            description: "A thorny tree or shrub, often found in savannas.",
            habitat: "Tropical Rainforest.",
            history: "Symbolizes immortality in ancient Egypt.",
            originalName: "Acacia nilotica"},
           
           {name: "Aloe Vera", 
            videourl: "https://www.youtube.com/embed/sO50zKCJOvo?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png", 
            description: "A succulent plant known for its medicinal properties.", 
            habitat: "Desert.", 
            history: "Used for skin treatment since ancient times.", 
            originalName: "Aloe barbadensis miller" },
           
           {name: "Amaranth", 
            videourl: "https://www.youtube.com/embed/vnP72DFlRUs?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Amaranthus_tricolor0.jpg", 
            description: "An ancient grain with vibrant flowers.", 
            habitat: "Grassland.", 
            history: "Cultivated by Aztecs as a staple crop.", 
            originalName: "Amaranthus" },
           
           {name: "Apple Tree", 
            videourl: "https://www.youtube.com/embed/wwpeTT2yPbk?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Apple_Blossom_%40_Manali.jpg/810px-Apple_Blossom_%40_Manali.jpg", 
            description: "A deciduous tree producing sweet fruits.", 
            habitat: "Mountain.", 
            history: "Central to myths like Adam and Eve.", 
            originalName: "Malus domestica" },
           
           {name: "Ash Tree", 
            videourl: "https://www.youtube.com/embed/oryHGf75lIA?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fraxinus_ornus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-062.jpg", 
            description: "A tree known for its strong wood.", 
            habitat: "Tundra.", 
            history: "Symbol of protection in Norse mythology.", 
            originalName: "Fraxinus" },
           
           {name: "Bamboo", 
            videourl: "https://www.youtube.com/embed/sxKjm1FVIVI?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bamboo_forest.jpg", 
            description: "A fast-growing woody grass.", 
            habitat: "Tropical Rainforest.", 
            history: "Used in construction and crafts for centuries.", 
            originalName: "Bambusoideae" },
           
           {name: "Basil", 
            videourl: "https://www.youtube.com/embed/RHZe5sEmtSo?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/440px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg", 
            description: "A fragrant herb used in cooking and medicine.",
            habitat: "Urban.",
            history: "Used in culinary traditions and spiritual rituals.", 
            originalName: "Ocimum basilicum" },
           
           {name: "Baobab", 
            videourl: "https://www.youtube.com/embed/M9V9bVEDSVs?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Baobab_Adansonia_digitata.jpg/1920px-Baobab_Adansonia_digitata.jpg", 
            description: "A large tree storing water in its trunk.", 
            habitat: "Desert.", 
            history: "Known as the 'Tree of Life' for its utility.", 
            originalName: "Adansonia" },
           
           {name: "Begonia", 
            videourl: "https://www.youtube.com/embed/mCPpm8lrnFw?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Begonia_obliqua00.jpg", 
            description: "A flowering plant with vibrant colors.", 
            habitat: "Tropical Rainforest.", 
            history: "Popular as ornamental plants.", 
            originalName: "Begonia" },
           
           {name: "Birch Tree", 
            videourl: "https://www.youtube.com/embed/Z6UfJ3WCllw?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Betula_pendula_001.jpg/440px-Betula_pendula_001.jpg", 
            description: "A slender tree with white bark.", 
            habitat: "Tundra.", 
            history: "Used in traditional medicine and crafts.", 
            originalName: "Betula" },
           
           {name: "Cactus", 
            videourl: "https://www.youtube.com/embed/r9RL9ISACTs?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/440px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg", 
            description: "A spiny plant adapted to arid environments.", 
            habitat: "Desert.", 
            history: "Symbol of endurance and adaptation.", 
            originalName: "Cactaceae" },
           
           {name: "Camellia", 
            videourl: "https://www.youtube.com/embed/FVT9_cgedgY?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Camellia_sasanqua1JAM343.jpg/440px-Camellia_sasanqua1JAM343.jpg", 
            description: "A flowering plant prized for its beauty.", 
            habitat: "Coastal.", 
            history: "Tea is made from Camellia sinensis leaves.", 
            originalName: "Camellia" },
           
           {name: "Clover", 
            videourl: "https://www.youtube.com/embed/9j6eaQJ2a2o?autoplay=1", 
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/79_Trifolium_repens_L.jpg", 
            description: "A small plant with three-lobed leaves.",
            habitat: "Grassland.", 
            history: "Associated with good luck, especially the four-leaf variety.",
            originalName: "Trifolium" },
           
            { name: "Cedar Tree", videourl: "https://www.youtube.com/embed/DV3UPi2bWXs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/View_from_the_Barouk_Forest_1.JPG", description: "An evergreen tree with aromatic wood.", habitat: "Mountain", history: "Used in construction and rituals.", originalName: "Cedrus" },
{ name: "Cucumber", videourl: "https://www.youtube.com/embed/0uBuHOo5VO8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/440px-ARS_cucumber.jpg", description: "A vining plant grown for its edible fruit.", habitat: "Urban", history: "Domesticated over 3,000 years ago.", originalName: "Cucumis sativus" },

// D
{ name: "Daisy", videourl: "https://www.youtube.com/embed/vJBR7v3fCu4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/440px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg", description: "A cheerful flowering plant.", habitat: "Grassland", history: "Symbol of innocence and purity.", originalName: "Bellis perennis" },
{ name: "Date Palm", videourl: "https://www.youtube.com/embed/A4KrAhdCFlk?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dates005.jpg/1920px-Dates005.jpg", description: "A tree producing sweet, edible dates.", habitat: "Desert", history: "Cultivated for thousands of years.", originalName: "Phoenix dactylifera" },
{ name: "Dragon Tree", videourl: "https://www.youtube.com/embed/JufOZoC_zi4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg", description: "A tree with red resin called 'dragon's blood.'", habitat: "Tropical Rainforest", history: "Used in traditional medicine.", originalName: "Dracaena draco" },
{ name: "Durian", videourl: "https://www.youtube.com/embed/9o5G7s_BH4w?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Durio_graveolens_Suluy_Z_3zz.jpg/800px-Durio_graveolens_Suluy_Z_3zz.jpg", description: "A tropical tree known for its pungent fruit.", habitat: "Tropical Rainforest", history: "Called the 'King of Fruits.'", originalName: "Durio" },

{
    name: "Daffodil",
    videourl: "https://www.youtube.com/embed/ig1-LTSmP8Y?autoplay=1", // Actual video URL for Daffodil
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Narcissus_poeticus_subsp._radiiflorus.1658.jpg/1024px-Narcissus_poeticus_subsp._radiiflorus.1658.jpg", // Actual image of Daffodil
    description: "A bright yellow spring-blooming flower.",
    habitat: "Wetland",
    history: "Symbolizes rebirth and new beginnings.",
    originalName: "Narcissus"
},

// E
{ name: "Eucalyptus", videourl: "https://www.youtube.com/embed/V38lrJtyvoM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg/1920px-Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg", description: "A fast-growing tree known for its oil.", habitat: "Tropical Rainforest", history: "Essential in aromatherapy.", originalName: "Eucalyptus" },
{ name: "Eggplant", videourl: "https://www.youtube.com/embed/GQX_nqOn7mA?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/%C3%89pines_sous_branches_de_plante_%C3%A0_%C5%93ufs.jpg/1920px-%C3%89pines_sous_branches_de_plante_%C3%A0_%C5%93ufs.jpg", description: "A fruiting plant often used as a vegetable.", habitat: "Urban", history: "Domesticated in Asia over 1,500 years ago.", originalName: "Solanum melongena" },
{ name: "Elderberry", videourl: "https://www.youtube.com/embed/18wYO5UxTAU?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sambucus-berries.jpg/1920px-Sambucus-berries.jpg", description: "A shrub with medicinal berries.", habitat: "Wetland", history: "Used in syrups and remedies.", originalName: "Sambucus" },
{ name: "Elm Tree", videourl: "https://www.youtube.com/embed/ZWqQNJ1-vlw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/East_Coker_elm%2C_2.jpg", description: "A deciduous tree with broad leaves.", habitat: "Forest", history: "Widely used for its durable wood.", originalName: "Ulmus" },
{ name: "English Ivy", videourl: "https://www.youtube.com/embed/ZpgvgguLLgM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hedera_helix_Dover.jpg/1920px-Hedera_helix_Dover.jpg", description: "A climbing plant often used as ground cover.", habitat: "Urban", history: "Associated with fidelity and friendship.", originalName: "Hedera helix" },

      // F
{
    name: "Fennel", videourl: "https://www.youtube.com/embed/Z5AopRF4s3c?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Foeniculum_July_2011-1a.jpg/1024px-Foeniculum_July_2011-1a.jpg", description: "A herb with a licorice-like flavor, used in cooking and medicine.", habitat: "Coastal", history: "Used since ancient times for culinary and medicinal purposes.", originalName: "Foeniculum vulgare"
},
{ 
    name: "Fig Tree", videourl: "https://www.youtube.com/embed/SQHfXdsN83U?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sycomoros_old.jpg/1024px-Sycomoros_old.jpg", description: "A tree producing sweet, edible fruits.", habitat: "Tropical Rainforest", history: "Cultivated since ancient times.", originalName: "Ficus carica" 
},
{ 
    name: "Fuchsia", videourl: "https://www.youtube.com/embed/tCdBiEsyJvc?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Brincos_De_Princesa.jpg/2560px-Brincos_De_Princesa.jpg", description: "A flowering plant known for its pendulous, colorful blossoms.", habitat: "Tropical Rainforest", history: "Symbolizes love, beauty, and harmony.", originalName: "Fuchsia" 
},
{ 
    name: "Foxglove", videourl: "https://www.youtube.com/embed/U3ceSmu3ZnQ?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Digitalis_purpurea2.jpg", description: "A tall plant with tubular flowers.", habitat: "Forest", history: "Used to make digitalis, a heart medication.", originalName: "Digitalis" 
},
{ 
    name: "Freesia", videourl: "https://www.youtube.com/embed/EVS_ewbRSk4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Freesia.jpg", description: "A fragrant flowering plant.", habitat: "Grassland", history: "Popular in perfumes and bouquets.", originalName: "Freesia" 
},

// G
{ 
    name: "Gardenia", videourl: "https://www.youtube.com/embed/iQvyvZ9Bc40?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gardeniaflower.jpg/440px-Gardeniaflower.jpg", description: "A flowering plant with white, fragrant blossoms.", habitat: "Tropical Rainforest", history: "Symbol of purity and love.", originalName: "Gardenia" 
},
{ 
    name: "Geranium", videourl: "https://www.youtube.com/embed/yTqKT8yxDY8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Geranium_February_2008-1.jpg/440px-Geranium_February_2008-1.jpg", description: "A flowering plant with colorful blooms.", habitat: "Urban", history: "Used in herbal medicine.", originalName: "Pelargonium" 
},
{ 
    name: "Ginger", videourl: "https://www.youtube.com/embed/-mUeNy0rweM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Koeh-146-no_text.jpg/440px-Koeh-146-no_text.jpg", description: "A rhizome plant used as a spice and medicine.", habitat: "Tropical Rainforest", history: "Used in traditional remedies for centuries.", originalName: "Zingiber officinale" 
},
{ 
    name: "Ginkgo", videourl: "https://www.youtube.com/embed/Dzt4XW9QEtQ?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/GinkgoLeaves.jpg/1024px-GinkgoLeaves.jpg", description: "An ancient tree species known for its fan-shaped leaves.", habitat: "Mountain", history: "Considered a 'living fossil.'", originalName: "Ginkgo biloba" 
},
{ 
    name: "Gladiolus", videourl: "https://www.youtube.com/embed/puTuPTNjfhs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/0_Gladiolus_italicus_-_Samo%C3%ABns_%281%29.JPG/800px-0_Gladiolus_italicus_-_Samo%C3%ABns_%281%29.JPG", description: "A flowering plant with tall, colorful spikes.", habitat: "Grassland", history: "Symbolizes strength and integrity.", originalName: "Gladiolus" },

// H
{ 
    name: "Hibiscus", videourl: "https://www.youtube.com/embed/0Jg_KJv97O0?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hibiscus_flower_TZ.jpg/1024px-Hibiscus_flower_TZ.jpg", description: "A flowering plant with large, showy flowers.", habitat: "Tropical Rainforest", history: "Symbolizes beauty and femininity.", originalName: "Hibiscus rosa-sinensis" 
},
{ 
    name: "Holly", videourl: "https://www.youtube.com/embed/m5hQFvQkinM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ilex-aquifolium_%28Europaeische_Stechpalme-1%29.jpg/440px-Ilex-aquifolium_%28Europaeische_Stechpalme-1%29.jpg", description: "A shrub with spiky leaves and red berries.", habitat: "Forest", history: "Symbol of Christmas and protection.", originalName: "Ilex" 
},
{ 
    name: "Honeysuckle", videourl: "https://www.youtube.com/embed/lMSKs3yeSsw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lonicera_caprifolium001.jpg/440px-Lonicera_caprifolium001.jpg", description: "A fragrant flowering vine.", habitat: "Grassland", history: "Attracts pollinators like bees and hummingbirds.", originalName: "Lonicera" 
},
{ 
    name: "Hyacinth", videourl: "https://www.youtube.com/embed/x8ZSwh14qSs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hyacinth_-_Anglesey_Abbey.jpg/440px-Hyacinth_-_Anglesey_Abbey.jpg", description: "A fragrant flowering bulb.", habitat: "Wetland", history: "Symbol of rebirth in Greek mythology.", originalName: "Hyacinthus" 
},
{ 
    name: "Hydrangea", videourl: "https://www.youtube.com/embed/kCt4LOnTm2E?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bauernhortensie_Wochenmarkt.jpg/440px-Bauernhortensie_Wochenmarkt.jpg", description: "A flowering shrub with large blooms.", habitat: "Wetland", history: "Represents heartfelt emotions.", originalName: "Hydrangea" 
}
,
   // I
{ name: "Indian Fig", videourl: "https://www.youtube.com/embed/j-nJdfAf83g?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ficus_elastica_leaves_02.JPG/1920px-Ficus_elastica_leaves_02.JPG", description: "A cactus producing edible fruits.", habitat: "Desert", history: "Used as a food source in ancient cultures.", originalName: "Opuntia ficus-indica" },
{ name: "Indian Paintbrush", videourl: "https://www.youtube.com/embed/A6AMz16c5EQ?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Castilleja_integra_-_Michael_Tidwell_01.jpg/440px-Castilleja_integra_-_Michael_Tidwell_01.jpg", description: "A wildflower with bright, brush-like petals.", habitat: "Grassland", history: "Named for its striking colors.", originalName: "Castilleja" },
{ name: "Indian Almond", videourl: "https://www.youtube.com/embed/4rrrbg8jwTo?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Terminalia_catappa_%28fruit%29.jpg/440px-Terminalia_catappa_%28fruit%29.jpg", description: "A tropical tree with edible seeds.", habitat: "Tropical Rainforest", history: "Used in traditional medicine.", originalName: "Terminalia catappa" },
{ name: "Impatiens", videourl: "https://www.youtube.com/embed/DvAyvT-wdLk?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Impatiens_scapiflora.jpg", description: "A flowering plant commonly grown as an annual.", habitat: "Urban", history: "Popular in gardens for its vibrant blooms.", originalName: "Impatiens" },
{ name: "Irish Moss", videourl: "https://www.youtube.com/embed/TqfmeJs4y4c?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chondrus_crispus.jpg", description: "A red algae used as a food additive.", habitat: "Coastal", history: "Used as a thickening agent in foods.", originalName: "Chondrus crispus" },

// J
{ name: "Jade Plant", videourl: "https://www.youtube.com/embed/WqRef-clGPU?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Crassula_ovata_700.jpg/440px-Crassula_ovata_700.jpg", description: "A succulent often kept as a houseplant.", habitat: "Desert", history: "Symbol of prosperity and good luck.", originalName: "Crassula ovata" },
{ name: "Jasmine", videourl: "https://www.youtube.com/embed/-M7NUDTXelw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Common_Jasmine.jpg/440px-Common_Jasmine.jpg", description: "A fragrant flowering plant.", habitat: "Tropical Rainforest", history: "Used in perfumes and teas for centuries.", originalName: "Jasminum" },
{ name: "Jacaranda", videourl: "https://www.youtube.com/embed/NlBbjw1k_LM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Jacaranda_cuspidifolia_flower.jpg", description: "A tree with purple trumpet-shaped flowers.", habitat: "Urban", history: "Widely grown for its ornamental beauty.", originalName: "Jacaranda mimosifolia" },
{ name: "Japanese Maple", videourl: "https://www.youtube.com/embed/vdyxiaYIF8A?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Acer_palmatum0.jpg", description: "A tree with intricately lobed leaves.", habitat: "Mountain", history: "Cultivated for its aesthetic value.", originalName: "Acer palmatum" },
{ name: "Juniper", videourl: "https://www.youtube.com/embed/5LTYjCFNuCA?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Juniperus_osteosperma_1.jpg/440px-Juniperus_osteosperma_1.jpg", description: "An evergreen shrub with aromatic berries.", habitat: "Mountain", history: "Used in gin production and traditional medicine.", originalName: "Juniperus" },

// K
{ name: "Kale", videourl: "https://www.youtube.com/embed/-KvWqbJ2cng?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Boerenkool.jpg", description: "A leafy green vegetable rich in nutrients.", habitat: "Grassland", history: "Cultivated since ancient Roman times.", originalName: "Brassica oleracea var. acephala" },
{ name: "Kapok Tree", videourl: "https://www.youtube.com/embed/dBKAsBgN960?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ceiba-pentandra-RuB-8466.JPG/440px-Ceiba-pentandra-RuB-8466.JPG", description: "A tropical tree known for its fluffy fibers.", habitat: "Tropical Rainforest", history: "Used to stuff mattresses and cushions.", originalName: "Ceiba pentandra" },
{ name: "Kudzu", videourl: "https://www.youtube.com/embed/b3A2JWoAA64?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kudzu_on_trees_in_Atlanta%2C_Georgia.jpg", description: "A fast-growing vine.", habitat: "Grassland", history: "Used for erosion control and livestock feed.", originalName: "Pueraria montana" },
{ name: "King Palm", videourl: "https://www.youtube.com/embed/sbE7nfouOxg?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Archontophoenix_alexandrae.jpg/440px-Archontophoenix_alexandrae.jpg", description: "A tall, graceful palm tree.", habitat: "Tropical Rainforest", history: "Popular in landscaping.", originalName: "Archontophoenix" },
{ name: "Kiwi Plant", videourl: "https://www.youtube.com/embed/Us0fjXx-aao?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kiwifruit_Female_Flowers.JPG/440px-Kiwifruit_Female_Flowers.JPG", description: "A vine producing sweet, fuzzy fruits.", habitat: "Mountain", history: "Native to China, but popular worldwide.", originalName: "Actinidia deliciosa" },

// L
{ name: "Lavender", videourl: "https://www.youtube.com/embed/bkHCh3TxZNM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/440px-Single_lavender_flower02.jpg", description: "A fragrant flowering herb.", habitat: "Grassland", history: "Used for its calming scent and medicinal properties.", originalName: "Lavandula" },
{ name: "Lemon Tree", videourl: "https://www.youtube.com/embed/XC67v3q-m28?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/P1030323.JPG", description: "A citrus tree producing sour fruits.", habitat: "Tropical Rainforest", history: "Widely cultivated for culinary and medicinal uses.", originalName: "Citrus limon" },
{ name: "Lilac", videourl: "https://www.youtube.com/embed/XnzKDcGeS-k?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lilac_Flower%26Leaves%2C_SC%2C_Vic%2C_13.10.2007.jpg/440px-Lilac_Flower%26Leaves%2C_SC%2C_Vic%2C_13.10.2007.jpg", description: "A shrub with fragrant purple or white flowers.", habitat: "Urban", history: "Symbolizes spring and renewal.", originalName: "Syringa" },
{ name: "Lily", videourl: "https://www.youtube.com/embed/v5QJuWBKovE?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lilium_candidum01.jpg/440px-Lilium_candidum01.jpg", description: "A beautiful flowering plant with large blooms.", habitat: "Mountain", history: "Used in traditional medicine and for ornamental purposes.", originalName: "Lilium" },
{ name: "Lotus", videourl: "https://www.youtube.com/embed/og0A1KOd0xw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Lotus1.jpg", description: "A water plant known for its large, striking flowers.", habitat: "Coastal", history: "Sacred in many cultures, symbolizing purity.", originalName: "Nelumbo nucifera" },
 // M
{ name: "Magnolia", videourl: "autoplay=1", image: "", description: "A tree with large, fragrant flowers.", habitat: "Tropical Rainforest", history: "One of the oldest flowering plants.", originalName: "Magnolia" },
{
    name: "Mangrove",
    videourl: "https://www.youtube.com/embed/twjPo2Luk5A?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sonneratia_alba_-_Manado_%282%29.JPG/800px-Sonneratia_alba_-_Manado_%282%29.JPG",
    description: "A tree that grows in coastal intertidal zones.",
    habitat: "Coastal",
    history: "Essential for coastal ecosystem stability.",
    originalName: "Rhizophora"
},
{ name: "Marigold", videourl: "https://www.youtube.com/embed/cePPAf7kwvA?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tagetes_erecta_chendumalli_chedi.jpg/800px-Tagetes_erecta_chendumalli_chedi.jpg", description: "A vibrant flowering plant.", habitat: "Grassland", history: "Used in religious rituals and as a pest repellent.", originalName: "Tagetes" },
{ name: "Mint", videourl: "https://www.youtube.com/embed/6_3aM1QkWCY?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mentha_piperita_-_Flickr_-_aspidoscelis_%281%29.jpg/1280px-Mentha_piperita_-_Flickr_-_aspidoscelis_%281%29.jpg", description: "An aromatic herb used in cooking and teas.", habitat: "Urban", history: "Used medicinally and culinarily since ancient times.", originalName: "Mentha" },
{ name: "Morning Glory", videourl: "https://www.youtube.com/embed/l4R7FKNGro8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Morning-glory-C6295b.jpg/1024px-Morning-glory-C6295b.jpg", description: "A climbing plant with trumpet-shaped flowers.", habitat: "Tropical Rainforest", history: "Symbolizes love and renewal.", originalName: "Ipomoea" },

// N
{ name: "Nasturtium", videourl: "https://www.youtube.com/embed/cbz9dLpkUEo?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nasturtium_lvs.jpg/440px-Nasturtium_lvs.jpg", description: "A flowering plant with edible leaves and flowers.", habitat: "Grassland", history: "Used as a salad ingredient and in herbal remedies.", originalName: "Tropaeolum" },
{ name: "Neem Tree", videourl: "https://www.youtube.com/embed/MNEKFU5zPw0?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg", description: "A tree known for its medicinal properties.", habitat: "Tropical Rainforest", history: "Used in traditional medicine and pest control.", originalName: "Azadirachta indica" },
{ name: "Nettle", videourl: "https://www.youtube.com/embed/2ASTvp1pgLg?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Br%C3%A4nn%C3%A4ssla_%28Urtica_Dioica%29.jpg/800px-Br%C3%A4nn%C3%A4ssla_%28Urtica_Dioica%29.jpg", description: "A stinging plant used for its fibers and nutrients.", habitat: "Forest", history: "Used in traditional remedies and as a food source.", originalName: "Urtica dioica" },
{ name: "Norfolk Pine", videourl: "https://www.youtube.com/embed/Vo-wQHwWTYw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Norfolk-Island-Pines.jpg/1280px-Norfolk-Island-Pines.jpg", description: "An evergreen tree with symmetrical branches.", habitat: "Mountain", history: "Popular as an ornamental tree.", originalName: "Araucaria heterophylla" },
{ name: "Nutmeg Tree", videourl: "https://www.youtube.com/embed/JLCAYmrcH3Q?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Myristica_Fragrans_-_%E0%B4%9C%E0%B4%BE%E0%B4%A4%E0%B4%BF%E0%B4%AE%E0%B4%B0%E0%B4%82.JPG/1024px-Myristica_Fragrans_-_%E0%B4%9C%E0%B4%BE%E0%B4%A4%E0%B4%BF%E0%B4%AE%E0%B4%B0%E0%B4%82.JPG", description: "A tree producing nutmeg and mace spices.", habitat: "Tropical Rainforest", history: "Highly valued in ancient trade.", originalName: "Myristica fragrans" },

// O
{ name: "Oak Tree", videourl: "https://www.youtube.com/embed/zdKYWiVy9FY?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg", description: "A sturdy tree known for its strength and longevity.", habitat: "Forest", history: "Symbolizes strength and endurance.", originalName: "Quercus" },
{ name: "Olive Tree", videourl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Old_olive_tree_in_Karystos%2C_Euboia%2C_Greece.jpg/1024px-Old_olive_tree_in_Karystos%2C_Euboia%2C_Greece.jpgautoplay=1", image: "https://www.youtube.com/embed/WO9-qqrgiIE?", description: "A tree producing olives, used for oil and food.", habitat: "Mediterranean regions", history: "An ancient symbol of peace and victory.", originalName: "Olea europaea" },

{
    name: "Orchid",
    videourl: "https://www.youtube.com/embed/N4rcyn7DODA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/White_orchid_in_Clara_bog._03.jpg/440px-White_orchid_in_Clara_bog._03.jpg",
    description: "A diverse and beautiful flowering plant family.",
    habitat: "Tropical Rainforest",
    history: "Symbolizes luxury and elegance.",
    originalName: "Orchidaceae"
},
{ name: "Oxeye Daisy", videourl: "https://www.youtube.com/embed/x4fX_-AT6pg?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Leucanthemum_vulgare_08.jpg/1024px-Leucanthemum_vulgare_08.jpg", description: "A wildflower with white petals and a yellow center.", habitat: "Grassland", history: "Symbolizes patience and simplicity.", originalName: "Leucanthemum vulgare" },

// P
{ name: "Palm Tree", videourl: "autoplay=1", image: "", description: "A tropical tree with feather-like leaves.", habitat: "Tropical Rainforest", history: "Symbol of triumph and peace.", originalName: "Arecaceae" },
{ name: "Peony", videourl: "autoplay=1", image: "", description: "A flowering plant with large, colorful blooms.", habitat: "Urban", history: "Represents wealth and honor in Chinese culture.", originalName: "Paeonia" },
{
    name: "Peppermint",
    videourl: "https://www.youtube.com/embed/ChHSWuMCk44?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/1920px-Pfefferminze_natur_peppermint.jpg",
    description: "A hybrid mint plant with a strong, minty aroma.",
    habitat: "Wetland",
    history: "Used for its refreshing scent and medicinal qualities.",
    originalName: "Mentha × piperita"
},
{ name: "Pine Tree", videourl: "https://www.youtube.com/embed/vN4ioKBPhrs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pinus_densiflora_Kumgangsan.jpg/440px-Pinus_densiflora_Kumgangsan.jpg", description: "A coniferous tree known for its evergreen needles.", habitat: "Mountain", history: "Used for timber and as a Christmas tree.", originalName: "Pinus" },
{ name: "Plumeria", videourl: "https://www.youtube.com/embed/mO8H9JSkcNs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Plumeria_rubra-4.JPG/440px-Plumeria_rubra-4.JPG", description: "A tropical flowering plant with fragrant blossoms.", habitat: "Tropical Rainforest", history: "Used in leis and traditional ceremonies.", originalName: "Plumeria" },

// Q
{ name: "Quaking Aspen", videourl: "https://www.youtube.com/embed/y4NA2MDMbO0?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon%2C_Nevada.jpg/440px-2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon%2C_Nevada.jpg", description: "A tree with trembling leaves.", habitat: "Mountain", history: "Known for its unique sound in the wind.", originalName: "Populus tremuloides" },
{ name: "Queen Anne's Lace", videourl: "https://www.youtube.com/embed/xOV4FZgL-cE?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Queen_Anns_Lace_--_Daucus_carota.jpg/1280px-Queen_Anns_Lace_--_Daucus_carota.jpg", description: "A wildflower with lace-like white blooms.", habitat: "Grassland", history: "Named for Queen Anne of England.", originalName: "Daucus carota" },
{ name: "Quince", videourl: "https://www.youtube.com/embed/pl8rAgzJ40E?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Pancrace_Bessa00.jpg", description: "A tree producing aromatic yellow fruits.", habitat: "Urban", history: "Used in ancient culinary recipes.", originalName: "Cydonia oblonga" },

    // R
    { name: "Raspberry", videourl: "https://www.youtube.com/embed/JGCtVvZnFC4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Himbeere_%28Rubus_idaeus%29_IMG_7756.JPG/1280px-Himbeere_%28Rubus_idaeus%29_IMG_7756.JPG", description: "A shrub producing sweet, red fruits.", habitat: "Temperate regions.", history: "Cultivated since prehistoric times.", originalName: "Rubus idaeus" },
    { name: "Rose", videourl: "https://www.youtube.com/embed/a_egIQ5l8jI?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rosa_rubiginosa_1.jpg/440px-Rosa_rubiginosa_1.jpg", description: "A flowering plant with iconic beauty and fragrance.", habitat: "Urban", history: "Symbol of love and romance.", originalName: "Rosa" },
    { name: "Rhubarb", videourl: "https://www.youtube.com/embed/3eIugG-G3jM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rheum_rhabarbarum.2006-04-27.uellue.jpg/1280px-Rheum_rhabarbarum.2006-04-27.uellue.jpg", description: "A vegetable used in desserts and cooking.", habitat: "Temperate regions.", history: "Popular in traditional pies and jams.", originalName: "Rheum rhabarbarum" },
    { name: "Rue", videourl: "https://www.youtube.com/embed/lv35n9WmNSM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Die_Weinraute%2C_lat._Ruta_graveolens%2C_Pflanze_mit_den_gelben_Bl%C3%BCten.jpg/1280px-Die_Weinraute%2C_lat._Ruta_graveolens%2C_Pflanze_mit_den_gelben_Bl%C3%BCten.jpg", description: "An herb used in traditional medicine.", habitat: "Mediterranean regions.", history: "Symbolized regret in ancient literature.", originalName: "Ruta graveolens" },
    { name: "Rubber Tree", videourl: "https://www.youtube.com/embed/UbyXWaP5Mbg?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hevea_brasiliensis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-071.jpg", description: "A tree producing latex for rubber production.", habitat: "Tropical Rainforest", history: "Vital to the industrial revolution.", originalName: "Hevea brasiliensis" },

    // S
    { name: "Sage", videourl: "https://www.youtube.com/embed/ya3mtAFqKzI?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Salvia_officinalis0.jpg", description: "An aromatic herb used in cooking and medicine.", habitat: "Mediterranean regions.", history: "Symbolizes wisdom and immortality.", originalName: "Salvia officinalis" },
    { name: "Sequoia", videourl: "https://www.youtube.com/embed/9a0c0TLpDUM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/US_199_Redwood_Highway.jpg/440px-US_199_Redwood_Highway.jpg", description: "A massive coniferous tree.", habitat: "Forest", history: "Among the tallest and oldest trees on Earth.", originalName: "Sequoia sempervirens" },
    { name: "Snapdragon", videourl: "https://www.youtube.com/embed/jaJdTTJKtMA?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Antirrhinum_majus_from_Thasos.JPG/800px-Antirrhinum_majus_from_Thasos.JPG", description: "A flowering plant with colorful, dragon-shaped blooms.", habitat: "Urban", history: "Symbolizes strength and grace.", originalName: "Antirrhinum" },
    { name: "Spider Plant", videourl: "https://www.youtube.com/embed/iGaCOHzUv6A?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1280px-Hierbabuena_0611_Revised.jpg", description: "A popular houseplant with long, arching leaves.", habitat: "Tropical Rainforest", history: "Known for its air-purifying qualities.", originalName: "Chlorophytum comosum" },
    { name: "Sunflower", videourl: "https://www.youtube.com/embed/x5mHzwEOpp4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SunflowerSunset2.jpg/1280px-SunflowerSunset2.jpg", description: "A tall plant with a large, sunny flower.", habitat: "Grassland", history: "Symbol of loyalty and adoration.", originalName: "Helianthus" },

    // T
    { name: "Tamarind", videourl: "https://www.youtube.com/embed/11MTqHWoxf8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tamarindus_indica_pods.JPG", description: "A tropical tree producing tangy fruits.", habitat: "Tropical Rainforest", history: "Widely used in cuisines worldwide.", originalName: "Tamarindus indica" },
    { name: "Tea Plant", videourl: "https://www.youtube.com/embed/dTHansLrH0M?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Csinensis.jpg/1280px-Csinensis.jpg", description: "A shrub producing leaves for tea.", habitat: "Tropical Rainforest", history: "Central to cultural rituals worldwide.", originalName: "Camellia sinensis" },
    { name: "Tulip", videourl: "https://www.youtube.com/embed/nsPQvZm_rgM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG/1280px-%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG", description: "A flowering bulb with a cup-shaped bloom.", habitat: "Mountain", history: "Popular during the Dutch 'Tulip Mania.'", originalName: "Tulipa" },
    { name: "Tobacco Plant", videourl: "https://www.youtube.com/embed/DORfPGMv-kc?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tabak_9290019.JPG/440px-Tabak_9290019.JPG", description: "A plant grown for its leaves.", habitat: "Tropical Rainforest", history: "Used in traditional ceremonies and commercial products.", originalName: "Nicotiana" },
    { name: "Tomato", videourl: "https://www.youtube.com/embed/FSFBPtRO4HU?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tomato_27_days_from_planting_seeds.jpg", description: "A fruit often treated as a vegetable in cooking.", habitat: "Tropical Rainforest", history: "Native to South America.", originalName: "Solanum lycopersicum" },

 // U
{ name: "Umbrella Plant", videourl: "https://www.youtube.com/embed/Dgo0K1PPwvY?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Schefflera_digitata_258334362.jpg/440px-Schefflera_digitata_258334362.jpg", description: "A tropical plant with large, umbrella-like leaves.", habitat: "Tropical Rainforest", history: "Popular as a houseplant for its unique foliage.", originalName: "Schefflera" },
{ name: "Uva Ursi", videourl: "https://www.youtube.com/embed/_33DS7cKZtU?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Arctostaphylos_uva-ursi_25924.JPG/440px-Arctostaphylos_uva-ursi_25924.JPG", description: "A small shrub with red berries used in herbal medicine.", habitat: "Tundra", history: "Traditionally used for urinary tract health.", originalName: "Arctostaphylos uva-ursi" },
{ name: "Urn Plant", videourl: "https://www.youtube.com/embed/paYumLAimYE?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aechmea_fasciata2.jpg/440px-Aechmea_fasciata2.jpg", description: "A bromeliad with a vase-like rosette of leaves.", habitat: "Tropical Rainforest", history: "Grown for its striking appearance.", originalName: "Aechmea fasciata" },
{ name: "Umbrella Bamboo", videourl: "https://www.youtube.com/embed/fQi8AquPiUI?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/FargesiaMurieliae.jpg/440px-FargesiaMurieliae.jpg", description: "A clumping bamboo with arching canes.", habitat: "Mountain", history: "Used in landscaping for its elegance.", originalName: "Fargesia murielae" },
{ name: "Upland Cotton", videourl: "https://www.youtube.com/embed/lCidlr_pbI4?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/CottonPlant.JPG/1280px-CottonPlant.JPG", description: "A plant cultivated for cotton fibers.", habitat: "Grassland", history: "Essential to the textile industry.", originalName: "Gossypium hirsutum" },

// V
{ name: "Vanilla Orchid", videourl: "https://www.youtube.com/embed/SgOl6HPJY3U?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vanilla_planifolia_%286998639597%29.jpg", description: "A climbing orchid that produces vanilla pods.", habitat: "Tropical Rainforest", history: "Cultivated for its aromatic vanilla flavoring.", originalName: "Vanilla planifolia" },
{ name: "Venus Flytrap", videourl: "https://www.youtube.com/embed/O7eQKSf0LmY?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Venus_Flytrap_showing_trigger_hairs.jpg/440px-Venus_Flytrap_showing_trigger_hairs.jpg", description: "A carnivorous plant that traps insects.", habitat: "Wetland", history: "Famous for its quick trap mechanism.", originalName: "Dionaea muscipula" },
{ name: "Viburnum", videourl: "https://www.youtube.com/embed/OGbHRaOTV40?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Viburnum_opulus_C.jpg/440px-Viburnum_opulus_C.jpg", description: "A flowering shrub with clusters of white or pink blooms.", habitat: "Grassland", history: "Used in ornamental gardens.", originalName: "Viburnum" },
{ name: "Virginia Creeper", videourl: "https://www.youtube.com/embed/3CWSADHDrHk?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Virginia_creeper_Parthenocissus_quinquifolia_169.JPG/440px-Virginia_creeper_Parthenocissus_quinquifolia_169.JPG", description: "A fast-growing vine with red autumn foliage.", habitat: "Urban", history: "Often used as ground cover or for climbing walls.", originalName: "Parthenocissus quinquefolia" },
{ name: "Violet", videourl: "https://www.youtube.com/embed/VvQ2lLb_hew?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Viola_reichenbachiana_LC0128.jpg/440px-Viola_reichenbachiana_LC0128.jpg", description: "A small flowering plant with delicate purple blooms.", habitat: "Temperate regions worldwide.", history: "Symbolizes modesty and faithfulness.", originalName: "Viola" },

// W
{ name: "Walnut Tree", videourl: "https://www.youtube.com/embed/G04eY45KDFw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Juglans_major_Morton.jpg/440px-Juglans_major_Morton.jpg", description: "A tree producing edible nuts and valuable timber.", habitat: "Mountain", history: "Nuts used for food, oil, and medicinal purposes.", originalName: "Juglans" },
{ name: "Water Lily", videourl: "https://www.youtube.com/embed/H851doVVx2Y?autoplay=1", image: "https://www.youtube.com/embed/i5Kl5ZQ9ugA?", description: "An aquatic plant with floating leaves and colorful flowers.", habitat: "Aquatic", history: "Symbol of purity in many cultures.", originalName: "Nymphaea" },
{ name: "Weeping Willow", videourl: "https://www.youtube.com/embed/nGvs4j4bohc?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ch%C3%A2teau_de_Chenonceau_-_jardin_Russell-Page_%2801%29.jpg/440px-Ch%C3%A2teau_de_Chenonceau_-_jardin_Russell-Page_%2801%29.jpg", description: "A tree with graceful, drooping branches.", habitat: "Coastal", history: "Symbol of sorrow and mourning.", originalName: "Salix babylonica" },
{ name: "Wheat", videourl: "https://www.youtube.com/embed/jttmNqbSEu8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/1280px-Vehn%C3%A4pelto_6.jpg", description: "A cereal plant cultivated for its grain.", habitat: "Grassland", history: "A staple food crop for millennia.", originalName: "Triticum" },
 
    { name: "Wisteria", videourl: "https://www.youtube.com/embed/j_NY0LSOmAU?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Chinese_Wisteria_Bl%C3%BCtentrauben.JPG/440px-Chinese_Wisteria_Bl%C3%BCtentrauben.JPG", description: "A woody vine with cascading clusters of bluish-purple flowers.", habitat: "Urban", history: "Symbolizes devotion and long-lasting love.", originalName: "Wisteria" },
    // X
    { name: "Xanthium", videourl: "https://www.youtube.com/embed/kTx9mpKmg6I?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Xanthium_strumarium_L..jpg/440px-Xanthium_strumarium_L..jpg", description: "A spiny plant with bur-like fruits.", habitat: "Grassland", history: "Used in traditional medicine.", originalName: "Xanthium strumarium" },
    
    { name: "Xylosma", videourl: "https://www.youtube.com/embed/uILmcyXQjGM?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Starr_060225-6165_Xylosma_hawaiiense.jpg/440px-Starr_060225-6165_Xylosma_hawaiiense.jpg", description: "A shrub often used for hedges.", habitat: "Urban", history: "Valued for ornamental landscaping.", originalName: "Xylosma" },
    { name: "Ximenia", videourl: "https://www.youtube.com/embed/KMD_Wizgh5s?autoplay=1", image: "https://www.youtube.com/embed/vfBAfAEHBw4?", description: "A shrub or small tree with edible fruits.", habitat: "Coastal", history: "Used in traditional African medicine.", originalName: "Ximenia americana" },
    { name: "Xanthorrhoea", videourl: "https://www.youtube.com/embed/Gh5Rg7ROra8?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Xanthorrhoea_semiplana_-_Anstey_Hill.JPG/440px-Xanthorrhoea_semiplana_-_Anstey_Hill.JPG", description: "A grass tree native to Australia.", habitat: "Grassland", history: "Known for its long lifespan and resilience.", originalName: "Xanthorrhoea" },
    
    // Y
    { name: "Yarrow", videourl: "https://www.youtube.com/embed/qlAfSH1lg4g?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/440px-Achillea_millefolium_%28bright%29.jpg", description: "A flowering plant used in herbal remedies.", habitat: "Grassland", history: "Used for wound healing in ancient times.", originalName: "Achillea millefolium" },
    { name: "Yucca", videourl: "https://www.youtube.com/embed/2XusWoefuag?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Yucca_filamentosa.jpg/440px-Yucca_filamentosa.jpg", description: "A drought-tolerant plant with spiky leaves.", habitat: "Desert", history: "Symbolizes protection and purification.", originalName: "Yucca" },
    { name: "Yellow Bell", videourl: "https://www.youtube.com/embed/kWz_B8ZWaIQ?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tecoma_Stans_%28Yellow_Elder%29_%2828863456756%29.jpg/440px-Tecoma_Stans_%28Yellow_Elder%29_%2828863456756%29.jpg", description: "A flowering shrub with bright yellow blooms.", habitat: "Tropical Rainforest", history: "Grown for its vibrant ornamental value.", originalName: "Tecoma stans" },
    { name: "Yellow Birch", videourl: "https://www.youtube.com/embed/QriGjc9uCD0?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Betula_alleghaniensis_5349050.jpg/440px-Betula_alleghaniensis_5349050.jpg", description: "A tree known for its golden bark and timber.", habitat: "Forest", history: "Used in furniture and flooring.", originalName: "Betula alleghaniensis" },
    { name: "Yellowwood", videourl: "https://www.youtube.com/embed/vJbGLDhdU0g?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/PodocarpusTotara2.jpg/440px-PodocarpusTotara2.jpg", description: "A tree with golden heartwood.", habitat: "Mountain", history: "Valued for its timber and ornamental appeal.", originalName: "Podocarpus" },
    
    // Z
    { name: "Zebra Plant", videourl: "https://www.youtube.com/embed/j7E9NvJpxWs?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/AphelandraSquarrosaWPC_edit.jpg/440px-AphelandraSquarrosaWPC_edit.jpg", description: "A striking houseplant with striped leaves.", habitat: "Tropical Rainforest", history: "Popular for indoor decoration.", originalName: "Aphelandra squarrosa" },
    { name: "Zucchini", videourl: "https://www.youtube.com/embed/jt5wKiEEZxc?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cucurbita_pepo_collage_1.png/440px-Cucurbita_pepo_collage_1.png", description: "A summer squash used in cooking.", habitat: "Grassland", history: "A versatile vegetable native to the Americas.", originalName: "Cucurbita pepo" },
    { name: "Zinnia", videourl: "https://www.youtube.com/embed/XGu4UxyVi-k?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Zinnia_elegans_flowers_%28Rajbiraj%2C_Saptari%2C_Nepal%29_2015-04-25.jpg/1024px-Zinnia_elegans_flowers_%28Rajbiraj%2C_Saptari%2C_Nepal%29_2015-04-25.jpg", description: "A flowering plant with vibrant blooms.", habitat: "Urban", history: "Symbolizes lasting affection.", originalName: "Zinnia elegans" },
    
    { name: "Zamia", videourl: "https://www.youtube.com/embed/mC2nB46P4lw?autoplay=1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Starr_060905-8736_Zamia_furfuracea.jpg/1280px-Starr_060905-8736_Zamia_furfuracea.jpg", description: "A primitive plant with fern-like leaves.", habitat: "Tropical Rainforest", history: "A living fossil among cycads.", originalName: "Zamia" }
    
      
    ],
    animals: [
        
        {
            name: "Alligator",
            videourl: "https://www.youtube.com/embed/5gC438crLVY?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Chinese%2Bamerican_alligators.png",
            description: "A large reptile with a powerful jaw and a long tail.",
            habitat: "Wetland",
            history: "Exists for millions of years, often mistaken for crocodiles.",
            originalName: "Alligator mississippiensis"
        },
        {
            name: "Anteater",
            videourl: "https://www.youtube.com/embed/yc8ZiyweAF0?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Silky_Anteater.jpg/1280px-Silky_Anteater.jpg",
            description: "A mammal with a long snout used for eating ants and termites.",
            habitat: "Tropical Rainforest",
            history: "Known for its unique diet of insects.",
            originalName: "Myrmecophaga tridactyla"
        },
        {
            name: "Armadillo",
            videourl: "https://www.youtube.com/embed/r0e-tiKu2P4?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Cingulata2.jpg/440px-Cingulata2.jpg",
            description: "A small mammal with a leathery shell.",
            habitat: "Grassland",
            history: "Famous for its ability to roll into a ball for defense.",
            originalName: "Dasypus novemcinctus"
        },
        {
            name: "Albatross",
            videourl: "https://www.youtube.com/embed/SRTRRMwXuEg?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Short_tailed_Albatross1.jpg/500px-Short_tailed_Albatross1.jpg",
            description: "A large seabird with an impressive wingspan.",
            habitat: "Coastal",
            history: "Symbolizes endurance and long journeys.",
            originalName: "Diomedeidae"
        },
        {
            name: "Aardvark",
            videourl: "https://www.youtube.com/embed/7bf-AIhVk3A?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orycteropus_afer_175359469.jpg/1280px-Orycteropus_afer_175359469.jpg",
            description: "A nocturnal mammal known for digging.",
            habitat: "Savannas and grasslands in Africa.",
            history: "Its name comes from Afrikaans, meaning 'earth pig.'",
            originalName: "Orycteropus afer"
        },
        // B
        {
            name: "Baboon",
            videourl: "https://www.youtube.com/embed/vO-7MZFXJpw?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Olive_baboon_Ngorongoro.jpg/1280px-Olive_baboon_Ngorongoro.jpg",
            description: "A large monkey with a dog-like face.",
            habitat: "Grassland",
            history: "Highly social and lives in troops.",
            originalName: "Papio"
        },
        {
            name: "Barracuda",
            videourl: "https://www.youtube.com/embed/w3NpdfcPTt0?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Barracuda_laban.jpg",
            description: "A predatory fish with sharp teeth.",
            habitat: "Aquatic",
            history: "Known for its speed and aggression.",
            originalName: "Sphyraena"
        },
        {
            name: "Bison",
            videourl: "https://www.youtube.com/embed/zGfn7UKSnB4?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1280px-American_bison_k5680-1.jpg",
            description: "A large grazing mammal also known as a buffalo.",
            habitat: "Grassland",
            history: "Once roamed in massive herds in North America.",
            originalName: "Bison bison"
        },
        {
            name: "Boa Constrictor",
            videourl: "https://www.youtube.com/embed/vuzyV8iM_ag?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Boa_constrictor%2C_Va%C5%88kovka%2C_Brno_%282%29.jpg/1280px-Boa_constrictor%2C_Va%C5%88kovka%2C_Brno_%282%29.jpg",
            description: "A non-venomous snake that kills its prey by constriction.",
            habitat: "Tropical Rainforest",
            history: "Popular in myths and folklore.",
            originalName: "Boa constrictor"
        },
        {
            name: "Butterfly",
            videourl: "https://www.youtube.com/embed/1b87rwtXGzA?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg/440px-Fesoj_-_Papilio_machaon_%28by%29.jpg",
            description: "An insect known for its colorful wings.",
            habitat: "Tropical Rainforest",
            history: "Symbolizes transformation and beauty.",
            originalName: "Lepidoptera"
        },
        // C
        {
            name: "Cheetah",
            videourl: "https://www.youtube.com/embed/J20eXhZTHEo?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/440px-Male_cheetah_facing_left_in_South_Africa.jpg",
            description: "The fastest land animal.",
            habitat: "Grassland",
            history: "Known for its incredible speed.",
            originalName: "Acinonyx jubatus"
        },
        {
            name: "Cow",
            videourl: "https://www.youtube.com/embed/frcAf4ks9_s?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1920px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
            description: "A domesticated herbivorous mammal, raised for milk, meat, and labor.",
            habitat: "Urban",
            history: "Domesticated around 10,000 years ago, cows are central to agriculture.",
            originalName: "Bos taurus"
        },
        {
            name: "Capybara",
            videourl: "https://www.youtube.com/embed/wE6pEsjgdHo?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/440px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg",
            description: "The largest rodent in the world.",
            habitat: "Wetland",
            history: "Known for its social nature.",
            originalName: "Hydrochoerus hydrochaeris"
        },
        {
            name: "Cougar",
            videourl: "https://www.youtube.com/embed/WS85m8SnEVs?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/1280px-Mountain_Lion_in_Glacier_National_Park.jpg",
            description: "A large, powerful cat also called a mountain lion.",
            habitat: "Mountain",
            history: "A versatile predator found in the Americas.",
            originalName: "Puma concolor"
        },
        {
            name: "Clownfish",
            videourl: "https://www.youtube.com/embed/lgUFkM34R7U?autoplay=1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1280px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
            description: "A small fish known for living in anemones.",
            habitat: "Aquatic",
            history: "Popularized by movies like 'Finding Nemo.'",
            originalName: "Amphiprioninae"
        },
    
        
            // D
            {
                name: "Dolphin",
                videourl: "https://www.youtube.com/embed/VjMn_dVCJyA?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/1920px-Tursiops_truncatus_01.jpg",
                description: "A highly intelligent aquatic mammal known for its agility.",
                habitat: "Coastal",
                history: "Featured in mythology as a friend of humans.",
                originalName: "Delphinidae"
            },
            {
                name: "Dingo",
                videourl: "https://www.youtube.com/embed/_fsSZopC6FM?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dingo_%28Canis_lupus_dingo%29_Kakadu_2.jpg/1280px-Dingo_%28Canis_lupus_dingo%29_Kakadu_2.jpg",
                description: "A wild dog found in Australia.",
                habitat: "Desert",
                history: "Australia's top predator.",
                originalName: "Canis lupus dingo"
            },
            {
                name: "Dragonfly",
                videourl: "https://www.youtube.com/embed/q5-KoPvZDIU?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gemeine_Heidelibelle_%28Sympetrum_vulgatum%29_4.jpg/440px-Gemeine_Heidelibelle_%28Sympetrum_vulgatum%29_4.jpg",
                description: "An insect with large eyes and fast flight.",
                habitat: "Wetland",
                history: "A symbol of transformation and adaptability.",
                originalName: "Anisoptera"
            },
            {
                name: "Deer",
                videourl: "https://www.youtube.com/embed/L2zxCEpO-sY?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Family_Cervidae_five_species.jpg",
                description: "A graceful herbivore with antlers.",
                habitat: "Forest",
                history: "A vital part of many ecosystems and cultures.",
                originalName: "Cervidae"
            },
            {
                name: "Duck",
                videourl: "https://www.youtube.com/embed/ndiVL4plQDI?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/440px-Bucephala-albeola-010.jpg",
                description: "A waterbird with a broad bill.",
                habitat: "Wetland",
                history: "Domesticated for eggs and meat.",
                originalName: "Anatidae"
            },
            // E
            {
                name: "Eagle",
                videourl: "https://www.youtube.com/embed/BEgEIEfSuvU?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Eagles_together.jpg",
                description: "A powerful bird of prey.",
                habitat: "Mountain",
                history: "Symbolizes strength and freedom.",
                originalName: "Aquila"
            },
            {
                name: "Elephant",
                videourl: "https://www.youtube.com/embed/LpzwxDqVDtc?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg",
                description: "The largest land mammal with large ears and a trunk.",
                habitat: "Grassland",
                history: "A symbol of wisdom and strength, elephants are revered in many cultures.",
                originalName: "Elephas maximus (Asian), Loxodonta africana (African)"
            },
         
            {
                name: "Emu",
                videourl: "ttps://www.youtube.com/embed/VgMmp_NF3eE?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emu_1_-_Tidbinbilla.jpg/1280px-Emu_1_-_Tidbinbilla.jpg",
                description: "A flightless bird native to Australia.",
                habitat: "Grassland",
                history: "Australia's second-largest bird.",
                originalName: "Dromaius novaehollandiae"
            },
            {
                name: "Eel",
                videourl: "https://www.youtube.com/embed/fdR93OhxdCI?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/New_Zealand_longfin_eel_%28Anguilla_dieffenbachii%29_Piha.jpg/480px-New_Zealand_longfin_eel_%28Anguilla_dieffenbachii%29_Piha.jpg",
                description: "A long, snake-like fish.",
                habitat: "Aquatic",
                history: "Known for their slippery bodies.",
                originalName: "Anguilliformes"
            },
            {
                name: "Echidna",
                videourl: "https://www.youtube.com/embed/yHjdIXN9v2g?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Short-beaked_echidna_in_ANBG.jpg/1280px-Short-beaked_echidna_in_ANBG.jpg",
                description: "A spiny mammal that lays eggs.",
                habitat: "Grassland",
                history: "One of the only egg-laying mammals.",
                originalName: "Tachyglossidae"
            },
             // F
             {
                name: "Falcon",
                videourl: "https://www.youtube.com/embed/r7lglchYNew?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Brown-Falcon%2C-Vic%2C-3.1.2008.jpg/440px-Brown-Falcon%2C-Vic%2C-3.1.2008.jpg",
                description: "A bird of prey known for its speed.",
                habitat: "Desert",
                history: "Used in falconry for thousands of years.",
                originalName: "Falco"
            },
            {
                name: "Frog",
                videourl: "https://www.youtube.com/embed/-r6tZGMep0U?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Anoures.jpg/800px-Anoures.jpg",
                description: "An amphibian that leaps and croaks.",
                habitat: "Wetland",
                history: "Known for its metamorphosis from tadpole to adult.",
                originalName: "Anura"
            },
            {
                name: "Flamingo",
                videourl: "https://www.youtube.com/embed/_gs4XfbYPKc?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flamingos_Laguna_Colorada.jpg/1280px-Flamingos_Laguna_Colorada.jpg",
                description: "A wading bird with pink feathers.",
                habitat: "Wetland",
                history: "Color comes from its diet of shrimp and algae.",
                originalName: "Phoenicopterus"
            },
            {
                name: "Fox",
                videourl: "https://www.youtube.com/embed/bD0mresKnTY?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/1280px-Vulpes_vulpes_ssp_fulvus.jpg",
                description: "A cunning carnivorous mammal.",
                habitat: "Forest",
                history: "Symbolizes cleverness in many cultures.",
                originalName: "Vulpes"
            },
            {
                name: "Ferret",
                videourl: "https://www.youtube.com/embed/PhPxobsJORg?autoplay=1",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ferret_2008.png/1280px-Ferret_2008.png",
                description: "A small carnivorous mammal often kept as a pet.",
                habitat: "Urban",
                history: "Used for hunting rabbits historically.",
                originalName: "Mustela putorius furo"
            },
    // G
    {
        name: "Giraffe",
        videourl: "https://www.youtube.com/embed/bNYXweQ81vI?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/440px-Giraffe_Mikumi_National_Park.jpg",
        description: "The tallest land animal.",
        habitat: "Grassland",
        history: "Known for its long neck and spots.",
        originalName: "Giraffa camelopardalis"
    },
    {
        name: "Goat",
        videourl: "https://www.youtube.com/embed/96LRW_knWMU?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/440px-Hausziege_04.jpg",
        description: "A domesticated herbivore often used for milk and meat.",
        habitat: "Mountain",
        history: "One of the first animals to be domesticated.",
        originalName: "Capra aegagrus hircus"
    },
    {
        name: "Gorilla",
        videourl: "https://www.youtube.com/embed/rHhSCO5-3Pg?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/440px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg",
        description: "A large, intelligent primate.",
        habitat: "Tropical Rainforest",
        history: "Shares a close genetic relationship with humans.",
        originalName: "Gorilla"
    },
    {
        name: "Goldfish",
        videourl: "https://www.youtube.com/embed/y8JwDCc7CBc?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gold_fish1.jpg/440px-Gold_fish1.jpg",
        description: "A small freshwater fish often kept as a pet.",
        habitat: "Aquatic",
        history: "Domesticated in China over a thousand years ago.",
        originalName: "Carassius auratus"
    },
    {
        name: "Gecko",
        videourl: "https://www.youtube.com/embed/DPZbNg-n8vI?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Phelsuma_l._laticauda.jpg",
        description: "A small lizard known for its adhesive toes.",
        habitat: "Desert",
        history: "Can climb walls and ceilings.",
        originalName: "Gekkonidae"
    },
    {
        name: "Horse",
        videourl: "https://www.youtube.com/embed/ZxrEgghMA_k?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
        description: "A domesticated herbivorous mammal, used for riding and transportation.",
        habitat: "Grassland",
        history: "Domesticated for work and travel, horses have been companions to humans for thousands of years.",
        originalName: "Equus ferus caballus"
    },
    {
        name: "Hawk",
        videourl: "https://www.youtube.com/embed/qRchBFuWENg?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Northern_Goshawk_ad_M2.jpg/800px-Northern_Goshawk_ad_M2.jpg",
        description: "A bird of prey with excellent vision.",
        habitat: "Grassland",
        history: "Known for its sharp talons and hunting skills.",
        originalName: "Accipitridae"
    },
    {
        name: "Hedgehog",
        videourl: "https://www.youtube.com/embed/-uf7digx8xg?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Igel.JPG",
        description: "A small mammal covered in spines.",
        habitat: "Grassland",
        history: "Rolls into a ball for protection.",
        originalName: "Erinaceinae"
    },
    {
        name: "Hippopotamus",
        videourl: "https://www.youtube.com/embed/0iYx5q5CudI?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/1280px-Portrait_Hippopotamus_in_the_water.jpg",
        description: "A large semi-aquatic mammal.",
        habitat: "Wetland",
        history: "One of the most dangerous animals in Africa.",
        originalName: "Hippopotamus amphibius"
    },
    {
        name: "Hornbill",
        videourl: "https://www.youtube.com/embed/kbpAFENvyzQ?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Great_hornbill_Photograph_by_Shantanu_Kuveskar.jpg/440px-Great_hornbill_Photograph_by_Shantanu_Kuveskar.jpg",
        description: "A bird with a large curved bill.",
        habitat: "Tropical Rainforest",
        history: "Known for its unique nesting behavior.",
        originalName: "Bucerotidae"
    },
    {
        name: "Iguana",
        videourl: "https://www.youtube.com/embed/BSF1fnZAMKQ?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Green_Iguana_In_Florida.jpg/1024px-Green_Iguana_In_Florida.jpg",
        description: "A herbivorous lizard with a spiny crest.",
        habitat: "Tropical Rainforest",
        history: "Known for its long tail and climbing skills.",
        originalName: "Iguana iguana"
    },
    {
        name: "Indian Star Tortoise",
        videourl: "https://www.youtube.com/embed/wrrtp-LBtIo?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Davidraju_IMG_7365.jpg/440px-Davidraju_IMG_7365.jpg",
        description: "A tortoise with star-like patterns on its shell.",
        habitat: "Desert",
        history: "Native to India and Sri Lanka.",
        originalName: "Geochelone elegans"
    },
    {
        name: "Indian Cobra",
        videourl: "https://www.youtube.com/embed/ImUgAzHSyIc?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Indian_Cobra%2C_crop.jpg/440px-Indian_Cobra%2C_crop.jpg",
        description: "A venomous snake with a hood.",
        habitat: "Urban",
        history: "Frequently depicted in Indian mythology.",
        originalName: "Naja naja"
    },
    {
        name: "Indian Pangolin",
        videourl: "https://www.youtube.com/embed/DqC3ieJJlFM?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Scaly_ant_eater_by_Dushy_Ranetunge_2.jpg",
        description: "A scaly mammal that feeds on ants.",
        habitat: "Grassland",
        history: "Critically endangered due to poaching.",
        originalName: "Manis crassicaudata"
    },
    {
        name: "Indian Peafowl",
        videourl: "https://www.youtube.com/embed/TTwT1-TpFhE?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Peacock_on_tree_%2852077240794%29.jpg/440px-Peacock_on_tree_%2852077240794%29.jpg",
        description: "A colorful bird with iridescent feathers.",
        habitat: "Grassland",
        history: "The national bird of India.",
        originalName: "Pavo cristatus"
    },
    {
        name: "Jaguar",
        videourl: "https://www.youtube.com/embed/tx6r7QX2iXk?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/520px-Standing_jaguar.jpg",
        description: "A large, powerful cat with spotted fur.",
        habitat: "Tropical Rainforest",
        history: "The largest cat in the Americas.",
        originalName: "Panthera onca"
    },
    {
        name: "Jellyfish",
        videourl: "https://www.youtube.com/embed/9z8ujpPgUjI?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
        description: "A gelatinous marine creature with tentacles.",
        habitat: "Aquatic",
        history: "Has existed for millions of years.",
        originalName: "Scyphozoa"
    },
    
    {
        name: "Jackal",
        videourl: "https://www.youtube.com/embed/AhEdKY4ujjg?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Flickr_-_Rainbirder_-_Golden_Jackal_%281%29.jpg",
        description: "A carnivorous mammal related to wolves.",
        habitat: "Desert",
        history: "Known for its cunning nature.",
        originalName: "Canis aureus"
    },
    {
        name: "Junco",
        videourl: "https://www.youtube.com/embed/JslBVIo13qc?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Junco_hyemalis_hyemalis_CT2.jpg/440px-Junco_hyemalis_hyemalis_CT2.jpg",
        description: "A small songbird with a white belly.",
        habitat: "Tundra",
        history: "Commonly seen during winter.",
        originalName: "Junco hyemalis"
    },
    {
        name: "Japanese Macaque",
        videourl: "https://www.youtube.com/embed/AtI0p6_8-z0?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Japanese_Snow_Monkey_%28Macaque%29_Mother_Grooms_Her_Young.jpg/440px-Japanese_Snow_Monkey_%28Macaque%29_Mother_Grooms_Her_Young.jpg",
        description: "A monkey known for bathing in hot springs.",
        habitat: "Mountain",
        history: "Also called the snow monkey.",
        originalName: "Macaca fuscata"
    },
    {
        name: "Kangaroo",
        videourl: "https://www.youtube.com/embed/-nQzs_4WhO0?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/440px-Kangaroo_Australia_01_11_2008_-_retouch.JPG",
        description: "A marsupial known for its powerful legs.",
        habitat: "Grassland",
        history: "Famous for its hopping movement.",
        originalName: "Macropus"
    },
    {
        name: "Koala",
        videourl: "https://www.youtube.com/embed/oI3ADcDH0Uc?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/480px-Koala_climbing_tree.jpg",
        description: "A tree-dwelling marsupial that eats eucalyptus leaves.",
        habitat: "Tropical Rainforest",
        history: "Often mistakenly called a 'koala bear.'",
        originalName: "Phascolarctos cinereus"
    },
    {
        name: "Kingfisher",
        videourl: "https://www.youtube.com/embed/4vU1zMeiijk?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Alcedo_azurea_-_Julatten.jpg/440px-Alcedo_azurea_-_Julatten.jpg",
        description: "A small bird known for diving to catch fish.",
        habitat: "Wetland",
        history: "Has vibrant blue and orange feathers.",
        originalName: "Alcedinidae"
    },
    {
        name: "Komodo Dragon",
        videourl: "https://www.youtube.com/embed/rXrg5-H1GIk?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Komodo_dragon_%28Varanus_komodoensis%29.jpg/440px-Komodo_dragon_%28Varanus_komodoensis%29.jpg",
        description: "The largest living lizard.",
        habitat: "Coastal",
        history: "A powerful predator and scavenger.",
        originalName: "Varanus komodoensis"
    },
    {
        name: "Kudu",
        videourl: "https://www.youtube.com/embed/K6hPyRr0XTU?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kudu_%2817418137574%29.jpg/600px-Kudu_%2817418137574%29.jpg",
        description: "A large antelope with twisted horns.",
        habitat: "Grassland",
        history: "Known for its striking appearance.",
        originalName: "Tragelaphus"
    },
    {
        name: "Lion",
        videourl: "https://www.youtube.com/embed/I-pGU5a8_uU?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1920px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
        description: "A large carnivorous mammal, often called the king of the jungle.",
        habitat: "Grassland",
        history: "Lions are known for their strength and are revered in many cultures as symbols of power.",
        originalName: "Panthera leo"
    },
    {
        name: "Leopard",
        videourl: "https://www.youtube.com/embed/jqxFELz4eVs?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/440px-African_leopard_male_%28cropped%29.jpg",
        description: "A big cat with rosette-patterned fur.",
        habitat: "Tropical Rainforest",
        history: "Known for its stealth and adaptability.",
        originalName: "Panthera pardus"
    },
    {
        name: "Lynx",
        videourl: "https://www.youtube.com/embed/2iIY1nfmGOQ?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Lynx_heads_collage.jpg",
        description: "A wild cat with tufted ears.",
        habitat: "Forest",
        history: "Known for its sharp vision and hunting skills.",
        originalName: "Lynx"
    },
    {
        name: "Lemur",
        videourl: "https://www.youtube.com/embed/kQ3A2z_hiPE?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Babakotia_radofilai.jpg/1024px-Babakotia_radofilai.jpg",
        description: "A primate native to Madagascar.",
        habitat: "Tropical Rainforest",
        history: "Famous for its large eyes and vocal calls.",
        originalName: "Lemuroidea"
    },
    {
        name: "Ladybug",
        videourl: "https://www.youtube.com/embed/ws_D5nXOAJg?autoplay=1",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/BIEDRONA_mirrored%2C_cropped.png",
        description: "A small beetle often considered a symbol of luck.",
        habitat: "Urban",
        history: "Helps control pests in agriculture.",
        originalName: "Coccinellidae"
    },
   // M
{
    name: "Monkey",
    videourl: "https://www.youtube.com/embed/opyPkipNNhE?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg",
    description: "A primate known for its intelligence and agility.",
    habitat: "Tropical Rainforest.",
    history: "Close relatives of humans.",
    originalName: "Cercopithecoidea"
},
{
    name: "Moose",
    videourl: "https://www.youtube.com/embed/0StC3P2H-k4?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alaska_moose.jpg/440px-Alaska_moose.jpg",
    description: "A large herbivore with massive antlers.",
    habitat: "Tundra.",
    history: "The largest member of the deer family.",
    originalName: "Alces alces"
},
{
    name: "Macaw",
    videourl: "https://www.youtube.com/embed/18Y6kXiNIeA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Blue-and-Yellow-Macaw.jpg/800px-Blue-and-Yellow-Macaw.jpg",
    description: "A brightly colored parrot.",
    habitat: "Tropical Rainforest.",
    history: "Known for its long tail feathers.",
    originalName: "Ara"
},
{
    name: "Manatee",
    videourl: "https://www.youtube.com/embed/ruSqRvCxi-s?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Trichechus_Diversity.jpg",
    description: "A large, gentle marine mammal.",
    habitat: "Coastal.",
    history: "Often called sea cows.",
    originalName: "Trichechus"
},
{
    name: "Mandrill",
    videourl: "https://www.youtube.com/embed/6k-qCVzhQBY?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mandrill_Albert_September_2015_Zoo_Berlin_%282%29.jpg/1024px-Mandrill_Albert_September_2015_Zoo_Berlin_%282%29.jpg",
    description: "A primate with vibrant facial colors.",
    habitat: "Tropical Rainforest.",
    history: "The largest species of monkey.",
    originalName: "Mandrillus sphinx"
},
// N
{
    name: "Narwhal",
    videourl: "https://www.youtube.com/embed/YO58kt-jETA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB_%D0%B2_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg/440px-%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB_%D0%B2_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg",
    description: "A marine mammal with a long, spiral tusk.",
    habitat: "Aquatic.",
    history: "Often called the unicorn of the sea.",
    originalName: "Monodon monoceros"
},
{
    name: "Newt",
    videourl: "https://www.youtube.com/embed/kvBi5Wv8-qg?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Uhandre_goimenditarra.jpg/440px-Uhandre_goimenditarra.jpg",
    description: "A small amphibian with a lizard-like body.",
    habitat: "Wetland.",
    history: "Known for regenerating lost body parts.",
    originalName: "Salamandridae"
},
{
    name: "Numbat",
    videourl: "https://www.youtube.com/embed/gkmk3AU5QHo?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Numbat_0A2A0187.jpg/1280px-Numbat_0A2A0187.jpg",
    description: "A small marsupial that eats termites.",
    habitat: "Grassland.",
    history: "Critically endangered due to habitat loss.",
    originalName: "Myrmecobius fasciatus"
},
{
    name: "Nightingale",
    videourl: "https://www.youtube.com/embed/x7atJQnmhTw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Luscinia_megarhynchos_-_01.jpg/800px-Luscinia_megarhynchos_-_01.jpg",
    description: "A bird known for its beautiful song.",
    habitat: "Urban.",
    history: "Symbol of poetic inspiration.",
    originalName: "Luscinia megarhynchos"
},
{
    name: "Nautilus",
    videourl: "https://www.youtube.com/embed/7EO7FdTlvbU?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Nautilus_Palau.JPG/1280px-Nautilus_Palau.JPG",
    description: "A marine mollusk with a spiral shell.",
    habitat: "Aquatic.",
    history: "An ancient species, often called a living fossil.",
    originalName: "Nautilidae"
},
// O
{
    name: "Octopus",
    videourl: "https://www.youtube.com/embed/EmcdhDUQzik?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/1280px-Octopus2.jpg",
    description: "A highly intelligent marine mollusk with eight arms.",
    habitat: "Aquatic.",
    history: "Known for its ability to camouflage and escape predators.",
    originalName: "Octopoda"
},
{
    name: "Orangutan",
    videourl: "https://www.youtube.com/embed/pqsFvQgYCu4?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/800px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG",
    description: "A great ape known for its reddish-brown hair.",
    habitat: "Tropical Rainforest.",
    history: "Critically endangered due to deforestation.",
    originalName: "Pongo"
},
{
    name: "Ostrich",
    videourl: "https://www.youtube.com/embed/qxbxsTy3PPw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Struthio_Diversity.jpg/440px-Struthio_Diversity.jpg",
    description: "The largest bird, unable to fly but very fast.",
    habitat: "Desert.",
    history: "Lays the largest eggs of any living bird.",
    originalName: "Struthio camelus"
},
{
    name: "Otter",
    videourl: "https://www.youtube.com/embed/Wn9kx4lGlpE?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Fischotter%2C_Lutra_Lutra.JPG",
    description: "A playful semi-aquatic mammal.",
    habitat: "Coastal.",
    history: "Known for using tools to crack open shellfish.",
    originalName: "Lutrinae"
},
{
    name: "Ocelot",
    videourl: "https://www.youtube.com/embed/33SNca5zNYM?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/1280px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg",
    description: "A small wild cat with striking spotted fur.",
    habitat: "Tropical Rainforest.",
    history: "Frequently referenced in ancient South American art.",
    originalName: "Leopardus pardalis"
},

   // P
{
    name: "Panda",
    videourl: "https://www.youtube.com/embed/VNxx8jVEm3I?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1280px-Grosser_Panda.JPG",
    description: "A bear famous for its black-and-white fur and bamboo diet.",
    habitat: "Mountain.",
    history: "A global symbol of wildlife conservation.",
    originalName: "Ailuropoda melanoleuca"
},
{
    name: "Penguin",
    videourl: "https://www.youtube.com/embed/O8qilxaBR20?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/800px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg",
    description: "A flightless bird that swims well.",
    habitat: "Tundra.",
    history: "Adapted to extreme cold climates.",
    originalName: "Spheniscidae"
},
{
    name: "Panther",
    videourl: "https://www.youtube.com/embed/mbu2zN_9NVQ?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Everglades_National_Park_Florida_Panther.jpg",
    description: "A black-coated big cat, often a leopard or jaguar.",
    habitat: "Forest.",
    history: "Symbolizes mystery and power.",
    originalName: "Panthera"
},
{
    name: "Parrot",
    videourl: "https://www.youtube.com/embed/NJ9Z6mSIMXk?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sirocco_full_length_portrait.jpg",
    description: "A colorful bird known for its mimicry.",
    habitat: "Tropical Rainforest.",
    history: "Highly social and intelligent.",
    originalName: "Psittaciformes"
},
{
    name: "Platypus",
    videourl: "https://www.youtube.com/embed/apmfhV_ko0E?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Duck-billed_platypus_%28Ornithorhynchus_anatinus%29_Scottsdale.jpg/1280px-Duck-billed_platypus_%28Ornithorhynchus_anatinus%29_Scottsdale.jpg",
    description: "A unique mammal with a duckbill and webbed feet.",
    habitat: "Aquatic.",
    history: "One of the few egg-laying mammals.",
    originalName: "Ornithorhynchus anatinus"
},
// Q
{
    name: "Quokka",
    videourl: "https://www.youtube.com/embed/9h9lZP97Hg4?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Quokka_at_rottnest_%28cropped%29.jpg",
    description: "A small marsupial known for its friendly smile.",
    habitat: "Grassland.",
    history: "Nicknamed the happiest animal on Earth.",
    originalName: "Setonix brachyurus"
},
{
    name: "Quail",
    videourl: "https://www.youtube.com/embed/mT6e7pnYfUY?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Brown_Quail.jpg/440px-Brown_Quail.jpg",
    description: "A small ground-dwelling bird.",
    habitat: "Grassland.",
    history: "Known for its distinct whistling calls.",
    originalName: "Coturnix"
},
{
    name: "Queen Butterfly",
    videourl: "https://www.youtube.com/embed/lWOySU_hAz0?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Danaus_gilippus-male_dorsal.jpg",
    description: "A vibrant butterfly similar to the monarch.",
    habitat: "Desert.",
    history: "Migrates over long distances.",
    originalName: "Danaus gilippus"
},
{
    name: "Quokka Frog",
    videourl: "autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/RanaTemporaria.jpg",
    description: "A frog species found near Australia.",
    habitat: "Wetland.",
    history: "Rarely spotted and highly adapted to its habitat.",
    originalName: "Ranoidea"
},
{
    name: "Quagga",
    videourl: "https://www.youtube.com/embed/PO4wNi0CJkA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Quagga_photo.jpg",
    description: "An extinct subspecies of zebra.",
    habitat: "Grassland.",
    history: "Went extinct in the late 19th century.",
    originalName: "Equus quagga quagga"
},
// R
{
    name: "Rabbit",
    videourl: "https://www.youtube.com/embed/0e1mXp8BNEY?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/1024px-Oryctolagus_cuniculus_Rcdo.jpg",
    description: "A small herbivore known for its long ears.",
    habitat: "Grassland.",
    history: "A symbol of fertility in many cultures.",
    originalName: "Oryctolagus cuniculus"
},
{
    name: "Raccoon",
    videourl: "https://www.youtube.com/embed/1lViKrWgTYk?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1920px-Raccoon_in_Central_Park_%2835264%29.jpg",
    description: "A nocturnal mammal with a distinctive mask-like face.",
    habitat: "Urban.",
    history: "Known for its intelligence and dexterity.",
    originalName: "Procyon lotor"
},
{
    name: "Raven",
    videourl: "https://www.youtube.com/embed/JpL1CR9w5XQ?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/3782_Common_Raven_in_flight.jpg/1280px-3782_Common_Raven_in_flight.jpg",
    description: "A large, intelligent bird with black feathers.",
    habitat: "Mountain.",
    history: "Featured in myths and folklore.",
    originalName: "Corvus corax"
},
{
    name: "Red Panda",
    videourl: "https://www.youtube.com/embed/L2_d5aCZN3w?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1280px-Red_Panda_%2824986761703%29.jpg",
    description: "A small mammal with reddish-brown fur.",
    habitat: "Mountain.",
    history: "Often confused with the giant panda.",
    originalName: "Ailurus fulgens"
},
{
    name: "Reindeer",
    videourl: "https://www.youtube.com/embed/pKRIm_-RvA0?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg/1280px-Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg",
    description: "A deer species associated with the Arctic.",
    habitat: "Tundra.",
    history: "Known for its role in Christmas folklore.",
    originalName: "Rangifer tarandus"
},
{
    name: "Shark",
    videourl: "https://www.youtube.com/embed/4HGNqFdaD34?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Corl0207_%2828225976491%29.jpg/440px-Corl0207_%2828225976491%29.jpg",
    description: "A large carnivorous fish with sharp teeth and streamlined bodies.",
    habitat: "Coastal.",
    history: "Sharks are ancient predators that have existed for over 400 million years.",
    originalName: "Selachimorpha"
},

// S
{
    name: "Snake",
    videourl: "https://www.youtube.com/embed/BOHFt15eVD4?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Corallus_caninus.JPG/260px-Corallus_caninus.JPG",
    description: "A legless reptile that slithers.",
    habitat: "Desert.",
    history: "Famous for its role in myths and folklore.",
    originalName: "Serpentes"
},
{
    name: "Sloth",
    videourl: "https://www.youtube.com/embed/9qdxBpyV24k?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/440px-Bicho-pregui%C3%A7a_3.jpg",
    description: "A slow-moving tree-dwelling mammal.",
    habitat: "Tropical Rainforest.",
    history: "Known for its leisurely pace and moss-covered fur.",
    originalName: "Folivora"
},
{
    name: "Swan",
    videourl: "https://www.youtube.com/embed/LRPLk6ddfzw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cygnus_olor_2_%28Marek_Szczepanek%29.jpg",
    description: "A graceful water bird with a long neck.",
    habitat: "Aquatic.",
    history: "Symbol of beauty and elegance.",
    originalName: "Cygnus"
},
{
    name: "Starfish",
    videourl: "https://www.youtube.com/embed/FsSGW4sZl_o?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fromia_monilis_%28Seastar%29.jpg/440px-Fromia_monilis_%28Seastar%29.jpg",
    description: "A marine invertebrate with a star-shaped body.",
    habitat: "Coastal.",
    history: "Regenerates its arms when damaged.",
    originalName: "Asteroidea"
},

// T
{
    name: "Tiger",
    videourl: "https://www.youtube.com/embed/8OmRW4em_vA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/520px-Walking_tiger_female.jpg",
    description: "A large striped carnivore.",
    habitat: "Grassland.",
    history: "The largest cat species.",
    originalName: "Panthera tigris"
},
{
    name: "Tortoise",
    videourl: "https://www.youtube.com/embed/EIffdbFZMPQ?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/A._gigantea_Aldabra_Giant_Tortoise.jpg/440px-A._gigantea_Aldabra_Giant_Tortoise.jpg",
    description: "A slow-moving land reptile with a shell.",
    habitat: "Desert.",
    history: "Known for its longevity.",
    originalName: "Testudinidae"
},

{
    name: "Toucan",
    videourl: "https://www.youtube.com/embed/9QbyE4iPGYU?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toucans_%28Ramphastidae%29.jpg",
    description: "A bird with a large, colorful bill.",
    habitat: "Tropical Rainforest.",
    history: "Known for its striking appearance.",
    originalName: "Ramphastidae"
},
{
    name: "Turkey",
    videourl: "https://www.youtube.com/embed/SnIU1iJgmVE?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg/440px-Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg",
    description: "A large bird often associated with Thanksgiving.",
    habitat: "Grassland.",
    history: "Domesticated for food.",
    originalName: "Meleagris"
},
{
    name: "Tuna",
    videourl: "https://www.youtube.com/embed/WA_jIj_w12U?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tuna_Relative_Sizes.jpg/1024px-Tuna_Relative_Sizes.jpg",
    description: "A fast-swimming marine fish.",
    habitat: "Aquatic.",
    history: "Highly valued as seafood.",
    originalName: "Thunnini"
},
{
    name: "Umbrellabird",
    videourl: "https://www.youtube.com/embed/HKRtODqdwEU?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Cephalopterus_penduligerIbisV1-1859-p003AA.jpg/800px-Cephalopterus_penduligerIbisV1-1859-p003AA.jpg",
    description: "A bird with a distinctive umbrella-like crest.",
    habitat: "Tropical Rainforest.",
    history: "Known for its deep, booming calls.",
    originalName: "Cephalopterus"
},
{
    name: "Urchin",
    videourl: "https://www.youtube.com/embed/qY9dheorKAE?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tripneustes_ventricosus_%28West_Indian_Sea_Egg-top%29_and_Echinometra_viridis_%28Reef_Urchin_-_bottom%29.jpg/500px-Tripneustes_ventricosus_%28West_Indian_Sea_Egg-top%29_and_Echinometra_viridis_%28Reef_Urchin_-_bottom%29.jpg",
    description: "A small, spiny marine animal.",
    habitat: "Aquatic.",
    history: "Feeds on algae and helps maintain marine ecosystems.",
    originalName: "Echinoidea"
},
{
    name: "Uakari",
    videourl: "https://www.youtube.com/embed/fgntF3xFelc?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Uakari_male.jpg",
    description: "A monkey with a bald, red face.",
    habitat: "Tropical Rainforest.",
    history: "Known for its vibrant facial coloration.",
    originalName: "Cacajao"
},
{
    name: "Uguisu",
    videourl: "https://www.youtube.com/embed/gEvAQQSDD9M?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cettia_diphone_%28crying%29.JPG/440px-Cettia_diphone_%28crying%29.JPG",
    description: "A Japanese bush warbler known for its song.",
    habitat: "Urban.",
    history: "Symbol of spring in Japanese culture.",
    originalName: "Horornis diphone"
},
{
    name: "Umbrella Octopus",
    videourl: "https://www.youtube.com/embed/YcoMEaBjJLk?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Opisthoteuthis_californiana.jpg/440px-Opisthoteuthis_californiana.jpg",
    description: "A deep-sea octopus with webbed arms.",
    habitat: "Aquatic.",
    history: "Rarely seen and named for its umbrella-like appearance.",
    originalName: "Cirroteuthidae"
},
{
    name: "Viper",
    videourl: "https://www.youtube.com/embed/xW1uRTIQzvA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Viperidae-01.jpg/440px-Viperidae-01.jpg",
    description: "A venomous snake with long fangs.",
    habitat: "Desert.",
    history: "Known for its quick strikes and potent venom.",
    originalName: "Viperidae"
},
{
    name: "Vulture",
    videourl: "https://www.youtube.com/embed/kbLE1-nOlSs?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gyps_rueppellii_-Nairobi_National_Park%2C_Kenya-8-4c.jpg/1280px-Gyps_rueppellii_-Nairobi_National_Park%2C_Kenya-8-4c.jpg",
    description: "A scavenging bird of prey.",
    habitat: "Grassland.",
    history: "Plays a vital role in ecosystems by cleaning up carcasses.",
    originalName: "Cathartidae"
},
{
    name: "Vaquita",
    videourl: "https://www.youtube.com/embed/IgiofflGelY?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Vaquita4_Olson_NOAA.jpg/1280px-Vaquita4_Olson_NOAA.jpg",
    description: "A small, endangered porpoise.",
    habitat: "Aquatic.",
    history: "Critically endangered due to fishing practices.",
    originalName: "Phocoena sinus"
},
{
    name: "Vervet Monkey",
    videourl: "https://www.youtube.com/embed/-t3tDW-HNsY?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cercopiteco_verde_%28Chlorocebus_pygerythrus%29%2C_parque_nacional_del_lago_Nakuru%2C_Kenia%2C_2024-05-18%2C_DD_77.jpg/440px-Cercopiteco_verde_%28Chlorocebus_pygerythrus%29%2C_parque_nacional_del_lago_Nakuru%2C_Kenia%2C_2024-05-18%2C_DD_77.jpg",
    description: "A small primate with black faces.",
    habitat: "Savanna.",
    history: "Known for its social behavior.",
    originalName: "Chlorocebus pygerythrus"
},
{
    name: "Vicuña",
    videourl: "https://www.youtube.com/embed/up_ZKSObLDw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg/440px-Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg",
    description: "A wild relative of the alpaca.",
    habitat: "Mountain.",
    history: "Valued for its fine wool.",
    originalName: "Vicugna vicugna"
},
// W
{
    name: "Wolf",
    videourl: "https://www.youtube.com/embed/YXMo5w9aMNs?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/440px-Eurasian_wolf_2.jpg",
    description: "A carnivorous mammal that lives in packs.",
    habitat: "Tundra", // Habitat changed to Tundra
    history: "An apex predator and symbol of wilderness.",
    originalName: "Canis lupus"
},
{
    name: "Walrus",
    videourl: "https://www.youtube.com/embed/v4-RhzbEcRk?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg/1280px-Pacific_Walrus_-_Bull_%288247646168%29.jpg",
    description: "A large marine mammal with tusks.",
    habitat: "Arctic seas.",
    history: "Relies on sea ice for survival.",
    originalName: "Odobenus rosmarus"
},
{
    name: "Wombat",
    videourl: "https://www.youtube.com/embed/WZQjQW4_N8c?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/1280px-Vombatus_ursinus_-Maria_Island_National_Park.jpg",
    description: "A burrowing marsupial from Australia.",
    habitat: "Grasslands and forests.",
    history: "Known for its cube-shaped droppings.",
    originalName: "Vombatidae"
},
{
    name: "Whale",
    videourl: "https://www.youtube.com/embed/GSmBYqmz4Y4?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg",
    description: "A large marine mammal.",
    habitat: "Oceans worldwide.",
    history: "Includes the largest animal on Earth, the blue whale.",
    originalName: "Cetacea"
},
{
    name: "Weasel",
    videourl: "https://www.youtube.com/embed/-TMkZzzPZBU?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/1280px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg",
    description: "A small carnivorous mammal.",
    habitat: "Grasslands and forests.",
    history: "Known for its agility and hunting skills.",
    originalName: "Mustela"
},
// X
{
    name: "Xerus",
    videourl: "https://www.youtube.com/embed/aDi8VWE4Cq8?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Xerus_rutilus.jpg/440px-Xerus_rutilus.jpg",
    description: "A ground squirrel from Africa.",
    habitat: "Grasslands and deserts.",
    history: "Lives in colonies for protection.",
    originalName: "Xerus"
},
{
    name: "X-Ray Tetra",
    videourl: "https://www.youtube.com/embed/8gF0QaTcYro?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pristella_maxillaris.jpg/440px-Pristella_maxillaris.jpg",
    description: "A small, transparent fish.",
    habitat: "Freshwater rivers in South America.",
    history: "Named for its visible backbone.",
    originalName: "Pristella maxillaris"
},
{
    name: "Xenopus",
    videourl: "https://www.youtube.com/embed/gmlaclb3K2o?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Xenopus_laevis.jpg",
    description: "An aquatic frog species.",
    habitat: "Sub-Saharan Africa.",
    history: "Used extensively in biological research.",
    originalName: "Xenopus laevis"
},
{
    name: "Xantus's Hummingbird",
    videourl: "https://www.youtube.com/embed/remX_MugsOM?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Hylocharis_xantusii.jpg",
    description: "A small bird known for its iridescent feathers.",
    habitat: "Baja California.",
    history: "Named after the Hungarian naturalist John Xantus.",
    originalName: "Basilinna xantusii"
},
{
    name: "Xoloitzcuintli",
    videourl: "https://www.youtube.com/embed/0Vk5iKiOd8w?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg/1280px-BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg",
    description: "A hairless dog breed from Mexico.",
    habitat: "Domesticated environments.",
    history: "Sacred in Aztec culture.",
    originalName: "Xoloitzcuintli"
},

      // Y
{
    name: "Yak",
    videourl: "https://www.youtube.com/embed/4H6-88PLhKA?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sarlyk_Yak2.jpg/1920px-Sarlyk_Yak2.jpg",
    description: "A domesticated bovine found in the Himalayas.",
    habitat: "Mountain", // Habitat changed to Mountain
    history: "Used for milk, meat, and transport in mountainous regions.",
    originalName: "Bos grunniens"
},
{
    name: "Yellowfin Tuna",
    videourl: "https://www.youtube.com/embed/bidCU-NSA-M?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Thunnus_albacares.png",
    description: "A fast-swimming tuna species.",
    habitat: "Aquatic", // Habitat changed to Aquatic
    history: "Highly valued for sushi.",
    originalName: "Thunnus albacares"
},
{
    name: "Yellow Warbler",
    videourl: "https://www.youtube.com/embed/Vr5os7snNlI?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dendroica-aestiva-001.jpg/440px-Dendroica-aestiva-001.jpg",
    description: "A bright yellow songbird.",
    habitat: "Wetland", // Habitat changed to Wetland
    history: "Known for its melodic songs.",
    originalName: "Setophaga petechia"
},
{
    name: "Yellow Baboon",
    videourl: "https://www.youtube.com/embed/vO-7MZFXJpw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Papio_cynocephalus02.jpg/440px-Papio_cynocephalus02.jpg",
    description: "A monkey species with yellow-brown fur.",
    habitat: "Savannas and open woodlands.",
    history: "Known for its complex social structures.",
    originalName: "Papio cynocephalus"
},
{
    name: "Yellowjacket",
    videourl: "https://www.youtube.com/embed/yF61-E-Jq20?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/European_wasp_white_bg.jpg/440px-European_wasp_white_bg.jpg",
    description: "A small, aggressive wasp.",
    habitat: "Urban", // Habitat changed to Urban
    history: "Known for its painful sting.",
    originalName: "Vespula"
},
// Z
{
    name: "Zebra",
    videourl: "https://www.youtube.com/embed/kWxnadQI5Qw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/500px-Plains_Zebra_Equus_quagga.jpg",
    description: "A horse-like animal with black-and-white stripes.",
    habitat: "Grasslands", // Habitat changed to Grasslands
    history: "Known for its unique stripe patterns.",
    originalName: "Equus quagga"
},
{
    name: "Zebu",
    videourl: "https://www.youtube.com/embed/5LKIKhVcH-I?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Miniature_Zebu.jpg",
    description: "A domesticated cattle species with a distinctive hump.",
    habitat: "Tropical Rainforest", // Habitat changed to Tropical Rainforest
    history: "Widely used in agriculture and ceremonies in Asia.",
    originalName: "Bos indicus"
},
{
    name: "Zorilla",
    videourl: "https://www.youtube.com/embed/et7aXP-P3_Y?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ictonyx_striatus_-_Museo_Civico_di_Storia_Naturale_Giacomo_Doria_-_Genoa%2C_Italy_-_DSC02633.JPG/440px-Ictonyx_striatus_-_Museo_Civico_di_Storia_Naturale_Giacomo_Doria_-_Genoa%2C_Italy_-_DSC02633.JPG",
    description: "A skunk-like carnivore from Africa.",
    habitat: "Grasslands", // Habitat changed to Grasslands
    history: "Uses a foul-smelling spray for defense.",
    originalName: "Ictonyx striatus"
},
{
    name: "Zander",
    videourl: "https://www.youtube.com/embed/QRpvu_Exq1Y?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sander_lucioperca_1.jpg/440px-Sander_lucioperca_1.jpg",
    description: "A freshwater fish related to the perch.",
    habitat: "Rivers and lakes.", // Habitat remains unchanged
    history: "Highly prized by anglers.",
    originalName: "Sander lucioperca"
},
{
    name: "Zebra Shark",
    videourl: "https://www.youtube.com/embed/M_t3W6Qp1uw?autoplay=1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Zebra_Shark_at_Sydney_Sea_Life_Aquarium.png/440px-Zebra_Shark_at_Sydney_Sea_Life_Aquarium.png",
    description: "A nocturnal shark with stripes as a juvenile.",
    habitat: "Coastal", // Habitat changed to Coastal
    history: "Loses its stripes as it matures.",
    originalName: "Stegostoma fasciatum"
}
  
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================
let state = {
    activeCategory: null,
    currentPage: 1,
    itemsPerPage: 6,
    searchQuery: '',
    filteredItems: [],
    allItems: []
};

// ============================================
// RECOMMENDATIONS
// ============================================
const allPlants = data.plants.map(p => p.name);
const allAnimals = data.animals.map(a => a.name);

function getRandomRecommendations() {
    const randomPlants = getRandomItems(allPlants, 3);
    const randomAnimals = getRandomItems(allAnimals, 3);
    return { plants: randomPlants, animals: randomAnimals };
}

function getRandomItems(list, count) {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

let recommendationData = getRandomRecommendations();

function displayRecommendations(category) {
    const recContainer = document.getElementById('recommendations');
    const recList = document.getElementById('recommendation-list');
    
    recContainer.style.display = 'block';
    recList.innerHTML = '';
    
    const recommendations = recommendationData[category];
    recommendations.forEach(item => {
        const div = document.createElement('div');
        div.className = 'recommendation-item';
        div.innerHTML = `<i class="fas fa-${category === 'plants' ? 'leaf' : 'paw'}"></i> ${item}`;
        div.addEventListener('click', () => {
            document.getElementById('search').value = item;
            state.searchQuery = item.toLowerCase();
            performSearch();
        });
        recList.appendChild(div);
    });
}

// ============================================
// PAGINATION
// ============================================
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (!state.filteredItems || state.filteredItems.length === 0) {
        pagination.style.display = 'none';
        return;
    }
    
    const totalPages = Math.ceil(state.filteredItems.length / state.itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    pageInfo.textContent = `Page ${state.currentPage} of ${totalPages}`;
    prevBtn.disabled = state.currentPage === 1;
    nextBtn.disabled = state.currentPage === totalPages;
}

function changePage(direction) {
    const totalPages = Math.ceil(state.filteredItems.length / state.itemsPerPage);
    state.currentPage = Math.max(1, Math.min(state.currentPage + direction, totalPages));
    renderItems();
    renderPagination();
}

// ============================================
// RENDER ITEMS
// ============================================
function renderItems() {
    const container = document.getElementById('content-container');
    container.innerHTML = '';
    
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const pageItems = state.filteredItems.slice(start, end);
    
    if (pageItems.length === 0) {
        container.innerHTML = `
            <div class="text-center text-white p-5">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--accent);"></i>
                <h3 class="mt-3">No results found</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }
    
    pageItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const category = state.activeCategory;
        const bgGradient = category === 'plants' 
            ? 'linear-gradient(135deg, rgba(45,106,79,0.9), rgba(64,145,108,0.9))'
            : 'linear-gradient(135deg, rgba(231,111,81,0.9), rgba(244,162,97,0.9))';
        
        card.innerHTML = `
            <div style="background: ${bgGradient}; border-radius: 15px; padding: 20px;">
                <h5 class="card-title">
                    <i class="fas fa-${category === 'plants' ? 'leaf' : 'paw'}"></i>
                    ${item.name}
                </h5>
                <div class="media-container">
                    <div>
                        ${createVideoIframe(item.videourl)}
                    </div>
                    <div>
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                </div>
                <div class="info-grid">
                    <p><strong>📝 Description:</strong> ${item.description}</p>
                    <p><strong>🌍 Habitat:</strong> ${item.habitat}</p>
                    <p><strong>📜 History:</strong> ${item.history}</p>
                    <p><strong>🔬 Scientific Name:</strong> ${item.originalName}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Smooth scroll to top of content
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createVideoIframe(videoUrl) {
    if (!videoUrl || videoUrl === 'autoplay=1') {
        return `<div class="text-center text-white p-5" style="background: rgba(0,0,0,0.3); border-radius: 15px;">
            <i class="fas fa-video" style="font-size: 3rem;"></i>
            <p class="mt-2">Video unavailable</p>
        </div>`;
    }
    const autoplayUrl = videoUrl.includes('youtube') ? `${videoUrl}?autoplay=1` : videoUrl;
    return `<iframe src="${autoplayUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function performSearch() {
    const query = state.searchQuery.toLowerCase().trim();
    
    if (!query) {
        state.filteredItems = [...state.allItems];
    } else {
        state.filteredItems = state.allItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.habitat.toLowerCase().includes(query) ||
            item.history.toLowerCase().includes(query) ||
            item.originalName.toLowerCase().includes(query)
        );
    }
    
    state.currentPage = 1;
    renderItems();
    renderPagination();
}

function searchItems(query) {
    state.searchQuery = query;
    performSearch();
}

function addToSearch(habitat) {
    document.getElementById('search').value = habitat;
    state.searchQuery = habitat.toLowerCase();
    performSearch();
}

// ============================================
// SHOW CATEGORY
// ============================================
function showCategory(category) {
    const welcomeText = document.getElementById('welcomeText');
    const recContainer = document.getElementById('recommendations');
    const pagination = document.getElementById('pagination');
    
    if (state.activeCategory === category) {
        // Toggle off
        state.activeCategory = null;
        state.allItems = [];
        state.filteredItems = [];
        document.getElementById('content-container').innerHTML = '';
        welcomeText.style.display = 'block';
        recContainer.style.display = 'none';
        pagination.style.display = 'none';
        
        document.getElementById('show-plants').classList.remove('active');
        document.getElementById('show-animals').classList.remove('active');
        return;
    }
    
    state.activeCategory = category;
    state.allItems = data[category];
    state.filteredItems = [...state.allItems];
    state.currentPage = 1;
    state.searchQuery = '';
    document.getElementById('search').value = '';
    
    welcomeText.style.display = 'none';
    
    // Update button styles
    document.getElementById('show-plants').classList.toggle('active', category === 'plants');
    document.getElementById('show-animals').classList.toggle('active', category === 'animals');
    
    displayRecommendations(category);
    renderItems();
    renderPagination();
}

// ============================================
// VOICE SEARCH
// ============================================
function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice search is not supported in your browser. Please use Chrome or Edge.');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    const btn = document.getElementById('voice-search-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btn.style.background = '#ffb703';
    
    recognition.onresult = function(event) {
        const query = event.results[0][0].transcript;
        document.getElementById('search').value = query;
        state.searchQuery = query.toLowerCase();
        performSearch();
        btn.innerHTML = '<i class="fas fa-microphone"></i>';
        btn.style.background = '';
    };
    
    recognition.onerror = function(event) {
        console.error('Voice recognition error:', event.error);
        btn.innerHTML = '<i class="fas fa-microphone"></i>';
        btn.style.background = '';
        if (event.error === 'not-allowed') {
            alert('Please allow microphone access to use voice search.');
        }
    };
    
    recognition.onend = function() {
        btn.innerHTML = '<i class="fas fa-microphone"></i>';
        btn.style.background = '';
    };
    
    recognition.start();
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Category buttons
    document.getElementById('show-plants').addEventListener('click', () => showCategory('plants'));
    document.getElementById('show-animals').addEventListener('click', () => showCategory('animals'));
    
    // Search
    document.getElementById('search').addEventListener('input', function() {
        state.searchQuery = this.value.toLowerCase();
        performSearch();
    });
    
    // Search button
    document.querySelector('.btn-search').addEventListener('click', function() {
        state.searchQuery = document.getElementById('search').value.toLowerCase();
        performSearch();
    });
    
    // Enter key on search
    document.getElementById('search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            state.searchQuery = this.value.toLowerCase();
            performSearch();
        }
    });
    
    // Voice search
    document.getElementById('voice-search-btn').addEventListener('click', startVoiceSearch);
    
    // Pagination buttons
    document.getElementById('prevPage').addEventListener('click', () => changePage(-1));
    document.getElementById('nextPage').addEventListener('click', () => changePage(1));
});