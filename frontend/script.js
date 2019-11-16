$('#myModal').on('show.bs.modal',function(event){
  var button=$(event.relatedTarget);
  var recipient=button.data('whatever');
  var modal=$(this);
  modal.find('.modal-title').text(recipient);
  // Making API call for fetching data
  // $.get('http://06171611.ngrok.io/data',function(result){
  //   // console.log(result);
  //   var rows=$.map(result,function(value,index){
  //     return `<tr><td>${value.ProductName}</td></tr>`
  //   });
  //   console.log(rows);
  // });
  
  
  //response from server. You need to make API call by yourself
  var res={
    "0": {
        "Category": "Health Conditions",
        "Id": 0,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Honitus Syrup contains Tulsi, Mulethi, Banaphsa, Kantkari, Talispatra, Sunthi, Pippali, Vasaka, Shati, Pudina Satva, and Shudha Madhu (Honey) as major ingredients. <br/><br/>Key benefits/uses of Dabur Honitus Syrup: <br/>- Tulsi act as anti-tussive. <br/>- Sunthi helps to relieve cough. <br/>- Mulethi provides relief from sore throat. <br/>- Honey helps in relieving cough and throat irritation. <br/>- Banapsha possesses expectorant property. <br/><br/>Direction for use/ Dosage: <br/>For adults: Take 2 teaspoons 3-4 times a day. <br/>For children: Take 1 teaspoon 3-4 times a day. <br/><br/>Indication: <br/>Cough and cold <br/><br/>Safety information: <br/>- Do not exceed the daily recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of the children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-honitus-herbal-cough-remedy-otc113472",
        "ProductName": "Dabur Honitus Herbal Cough Remedy: Buy 100 ml Syrup at best price in India"
    },
    "1": {
        "Category": "Ayurveda Products",
        "Id": 1,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Dabur Chyawanprash 1Kg</b> is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity, protects the body from infections like cough &amp; cold etc. caused by various micro organisms and weather change. This effectively helps to restore youth and vitality and can be taken by people of all ages.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Bilya</li></ul><ul><li>Amla</li></ul><ul><li>Brahmi</li></ul><ul><li>Pippali</li></ul><ul><li>Yashtimadhu</li></ul><ul><li>Gokshura</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Strengthens the immune system and helps fight diseases</li></ul><ul><li>Helps in improving the process of digestion</li></ul><ul><li>Strengthens the body's internal defense mechanism with its anti-oxidant properties</li></ul><ul><li>It helps n the purification of the blood and provides nourishment to the body</li></ul><ul><li>Protects the body from infections and clearance of respiratory passages</li></ul><br/><b>Directions For Use:</b><br/><ul><li>1 teaspoon to be taken twice a day- once in morning &amp; once at night</li></ul><ul><li>For children above 3, 1 teaspoon of Dabur Chyawanprash daily is recommended</li></ul><ul><li>For adults: 1 teaspoon of Dabur Chyawanprash twice a day is recommended</li></ul><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicianl use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach of children</li></ul><ul><li>Store at temperature below 25 degree Celcius and 40% humidity in cool and dry place</li></ul><ul><li>Should protect from sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-chyawanprash-1kg-get-dabur-honey-50g-free-otc448456",
        "ProductName": "Dabur Chyawanprash 1Kg (Get Dabur Honey 50g Free): Buy 1 kg Paste at best price in India"
    },
    "2": {
        "Category": "Ayurveda Products",
        "Id": 2,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Shilajit Capsule contains Shilajit Patthar as the main ingredient. It increases strength, vigor, vitality, and memory grasping power. The capsule improves the overall constitution and wellness of the body.<br/><br/>Key benefits/uses of Dabur Shilajit Capsule:<br/>- Powerful and nutritional capsule<br/>- Regains lost powers of body<br/>- Helpful in infertility and weakness<br/>- Increases vigor and Vitality<br/>- Body regulator<br/><br/>Direction for use/Dosage:<br/>- One capsule twice a day or as directed by the physician<br/><br/>Indications:<br/>- Infertility, weakness<br/><br/>Storage instructions:<br/>- Store in a cool, dry, &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-shilajit-capsule-otc292789",
        "ProductName": "Dabur Shilajit Capsule: Buy 100 capsules at best price in India"
    },
    "3": {
        "Category": "Ayurveda Products",
        "Id": 3,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Triphala Churna contains a combination of three well-known herbs Amla, Harad, and Bahera. These three fruits help in smooth functioning of bowel and relieve constipation.<br/><br/>Key benefits/uses of Dabur Triphala Churna:<br/>- Maintain overall health by harmonizing digestive functions and cleansing the stomach.<br/>- Help in smooth functioning of bowel and relieve constipation.<br/><br/>Direction for use/Dosage:<br/>- Consume ½ to 1 of Dabur Triphala Churna teaspoonful (3-6g) twice a day with lukewarm water or as directed by the physician.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-triphala-churna-otc347806",
        "ProductName": "Dabur Triphala Churna: Buy 500 gm Powder at best price in India"
    },
    "4": {
        "Category": "Ayurveda Products",
        "Id": 4,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Ashwagandha Churna contains is an Ayurvedic formula which helps improve stamina, energy levels as well as provides relief from weakness and stress<br/><br/>Key benefits/uses of Dabur Ashwagandha Churna:<br/>- Improves old age debility and immunity<br/>- Useful for Stress, fatigue, weakness, sexual debility, spermatorrhoea<br/><br/>Direction for use/Dosage:<br/>- ¼ to ½ teaspoonful (1 to 3g) twice a day with milk<br/>- As directed by the physician<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-ashwagandha-churna-otc497801",
        "ProductName": "Dabur Ashwagandha Churna: Buy 60 gm Powder at best price in India"
    },
    "5": {
        "Category": "Ayurveda Products",
        "Id": 5,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Shilajit Gold Capsule contains is a unique mix of herbs, which makes it a premium restorative health tonic that boosts your overall well-being<br/><br/>Key benefits/uses of Dabur Shilajit Gold Capsule:<br/>- An effective ayurvedic formulation which provides strength &amp; stamina to the body .<br/>- Used for stamina, strength, energy, counter weakness.<br/>- Providing strength, stamina to local tissues by helping in strengthening muscles to energizing, rejuvenating and vitalizing the body.<br/>- Used for general weakness and to rejuvenate and restore the body's strength.<br/><br/>Direction for use/Dosage:<br/>Take Dabur Shilajit Gold Capsule as directed by the physician.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-shilajit-gold-capsule-otc183248",
        "ProductName": "Dabur Shilajit Gold Capsule: Buy 10 capsules at best price in India"
    },
    "6": {
        "Category": "Ayurveda Products",
        "Id": 6,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Pudin Hara Pearls contains Pudina Satva as major ingredient.<br/><br/>Key benefits/uses of Dabur Pudin Hara Pearls:<br/>- Useful in the treatment of stomach ailments like acidity, gas, indigestion.<br/>- Also, provide quick relief from stomach ache.<br/>- The product is 100% safe and natural.<br/><br/>Direction for use/ Dosage:<br/>- For adults: Take 1 Pearl 2-3 times a day.<br/>- For Children: Take 1 Pearl once a day.<br/>Indication:<br/>Indigestion, Gas, Stomach ache<br/><br/>Safety information:<br/>- Not recommended for children below 12 yrs of age.<br/>- Do not exceed the daily recommended dose.<br/>- Read the label carefully before use.<br/>- Keep out of the reach and sight of the children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-pudin-hara-pearls-otc255194",
        "ProductName": "Dabur Pudin Hara Pearls: Buy 10 soft gelatin capsules at best price in India"
    },
    "7": {
        "Category": "Ayurveda Products",
        "Id": 7,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Dabur Hajmola</strong> tablet is a tasty, fun-filled digestive that enhances the digestive power of the body. It comes in various flavours and can be regularly taken after meals. It is a mixture of traditional Indian culinary herbs, spices and edible salts that enhances digestion in the body. It comes in five flavours- Original, Lemon, Tamarind, Peppermint, Guava and Pomegranate.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Black Pepper</li></ul><ul><li>Pippali (Long pepper)</li></ul><ul><li>Ginger</li></ul><ul><li>Lemon</li></ul><ul><li>Cumin Seeds</li></ul><ul><li>Sea Salt</li></ul><ul><li>Sugar</li></ul><ul><li>Black Salt</li></ul><ul><li>Navsadar</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Useful in cases of indigestion, loss of appetite and flatulence</li></ul><ul><li>Black Pepper is a gastro-intestinal stimulant</li></ul><ul><li>Long Pepper is a carminative and expectorant</li></ul><ul><li>Ginger is a useful digestive tonic</li></ul><ul><li>Lemon is a digestive stimulant</li></ul><ul><li>Cumin seeds are antispasmodic</li></ul><ul><li>Sea salt stimulates secretion of saliva and gastric juices</li></ul><ul><li>Black Salt is carminative and digestive</li></ul><ul><li>Navsadar helps in digestive function</li></ul><br/><strong>Directions For Use:</strong><br/>Adults 1-2 tablets and children 1 tablet after meals<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the daily recommended dosage</li></ul><ul><li>To be used under medical supervision only</li></ul><ul><li>Keep out of reach of children</li></ul><ul><li>Store in a cool, dry place, away from direct heat and sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-hajmola-regular-otc325365",
        "ProductName": "Dabur Hajmola Regular: Buy 120 tablets at best price in India"
    },
    "8": {
        "Category": "Ayurveda Products",
        "Id": 8,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Red Paste contains Clove Oil, Pudina Satva, Tomar Beej (Zanthoxylum alatum) and Sunthi (Ginger) as major ingredients.<br/><br/>Key benefits/uses of Dabur Red Paste:<br/>- Pudina Satva and Sunthi: Help in preventing toothache and bad breath.<br/>- Tomar Beej: Helps in preventing dental diseases like plaque, stain and malodour.<br/>- Clove Oil: Helps in fighting germs and useful in gingivitis.<br/><br/>Direction for use:<br/>To obtain best results use twice daily <br/><br/>Indication: <br/>Dental and oral problems<br/><br/>Safety information:<br/>- Do not exceed the recommended dose. <br/>- Read the label carefully before use.<br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-red-toothpaste-otc352520",
        "ProductName": "Dabur Red Toothpaste: Buy 300 gm Toothpaste at best price in India"
    },
    "9": {
        "Category": "Ayurveda Products",
        "Id": 9,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Dabur Honey (Get 20% Extra)</b> is rich in natural vitamins &amp; minerals and is one of the healthiest substitutes of refined sugar. It has wholesome natural goodness, is procured from the purest of sources from the forests of Sundarbans and Himalayas. Taken with warm water, it helps in managing weight and helps to stay fit &amp; feel young. Dabur honey is rich in carbohydrates, vitamins and anti-oxidants. <br/><br/><b>Key Ingredients:</b><br/><ul><li>100% pure honey</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It helps in providing energy and strengthens immunity</li></ul><ul><li>It helps in weight management and helps in maintaining the metabolism of body</li></ul><ul><li>It is rich in anti-oxidants and helps us stay fit &amp; young</li></ul><ul><li>It is very helpful in digestion and also helps to cure cough and throat irritations</li></ul><br/><b>Directions For Use:</b> <br/><ul><li>Take spoonful of Dabur honey in a glass of warm water for optimum health or as prescribed by the physician</li></ul><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a temperature below 25-degree Celsius and 40 % humidity in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-honey-get-20-extra-otc478588",
        "ProductName": "Dabur Honey (Get 20% Extra): Buy 1 kg Liquid at best price in India"
    },
    "10": {
        "Category": "Personal Care",
        "Id": 10,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Almond Shampoo contains Almond Vita Complex and Milk extracts as major ingredients. <br/><br/>Key benefits/uses of Dabur Almond Shampoo: <br/>- The shampoo is enriched with Milk Extracts and Almond which makes the hair smooth and add lustre to the hair. <br/>- Gently clean the scalp and remove dryness. <br/>- The product is natural and safe. <br/>- Contains no chemicals <br/><br/>Direction for use: <br/>- Use Dabur Almond Shampoo shampoo to lather up the scalp in wet hair. <br/>- Gently massage the shampoo onto the scalp using fingers for few minutes. <br/>- Rinse with water properly to wash off the shampoo entirely from the hair scalp. <br/>- For best results follow up with the conditioner. <br/><br/>Indication: <br/>Hair damage and hair loss <br/><br/>Safety information: <br/>- Do not exceed the recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-almond-shampoo-otc352578",
        "ProductName": "Dabur Almond Shampoo: Buy 350 ml Shampoo at best price in India"
    },
    "11": {
        "Category": "Health Conditions",
        "Id": 11,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Dabur Hajmola</strong> tablet is a tasty, fun-filled digestive that enhances the digestive power of the body. It comes in various flavours and can be regularly taken after meals. It is a mixture of traditional Indian culinary herbs, spices and edible salts that enhances digestion in the body. It comes in five flavours- Original, Lemon, Tamarind, Peppermint, Guava and Pomegranate.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Black Pepper</li></ul><ul><li>Pippali (Long pepper)</li></ul><ul><li>Ginger</li></ul><ul><li>Lemon</li></ul><ul><li>Cumin Seeds</li></ul><ul><li>Sea Salt</li></ul><ul><li>Sugar</li></ul><ul><li>Black Salt</li></ul><ul><li>Navsadar</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Useful in cases of indigestion, loss of appetite and flatulence</li></ul><ul><li>Black Pepper is a gastro-intestinal stimulant</li></ul><ul><li>Long Pepper is a carminative and expectorant</li></ul><ul><li>Ginger is a useful digestive tonic</li></ul><ul><li>Lemon is a digestive stimulant</li></ul><ul><li>Cumin seeds are antispasmodic</li></ul><ul><li>Sea salt stimulates secretion of saliva and gastric juices</li></ul><ul><li>Black Salt is carminative and digestive</li></ul><ul><li>Navsadar helps in digestive function</li></ul><br/><strong>Directions For Use:</strong><br/>Adults 1-2 tablets and children 1 tablet after meals<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the daily recommended dosage</li></ul><ul><li>To be used under medical supervision only</li></ul><ul><li>Keep out of reach of children</li></ul><ul><li>Store in a cool, dry place, away from direct heat and sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-hajmola-pudina-otc174078",
        "ProductName": "Dabur Hajmola Pudina: Buy 120 tablets at best price in India"
    },
    "12": {
        "Category": "Health Conditions",
        "Id": 12,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Dabur Chandraprabha Vati</b> is made from ingredients that work together to help treat urinary tract infections, difficulty in urination and urinary calculi. It also helps relieve indigestion and increases strength in the body. It has anti ageing and aphrodisiac like properties.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Karpur</li></ul><ul><li>Vacha</li></ul><ul><li>Musta</li></ul><ul><li>Ativisha</li></ul><ul><li>Kiratatikta</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It is helpful in treating urinary tract infections as well as difficulty in urinating</li></ul><ul><li>It helps in the treatment of Urinary calculi</li></ul><ul><li>Used in the treatment of indigestion and increases body's strength</li></ul><ul><li>It has anti ageing properties and may also act as an aphrodisiac</li></ul><br/><b>Directions For Use:</b><br/>Take 2 tablets twice a day or as directed by physician.<br/><br/><b>Safety Information:</b><br/><ul><li>Consult physician before consuming</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Store in a cool dry place away from direct sunlight</li></ul><ul><li>Keep out of reach of the children</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-chandraprabha-vati-otc446452",
        "ProductName": "Dabur Chandraprabha Vati: Buy 80 tablets at best price in India"
    },
    "13": {
        "Category": "Ayurveda Products",
        "Id": 13,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Dabur Hajmola</strong> tablet is a tasty, fun-filled digestive that enhances the digestive power of the body. It comes in various flavours and can be regularly taken after meals. It is a mixture of traditional Indian culinary herbs, spices and edible salts that enhances digestion in the body. It comes in five flavours- Original, Lemon, Tamarind, Peppermint, Guava and Pomegranate.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Black Pepper</li></ul><ul><li>Pippali (Long pepper)</li></ul><ul><li>Ginger</li></ul><ul><li>Lemon</li></ul><ul><li>Cumin Seeds</li></ul><ul><li>Sea Salt</li></ul><ul><li>Sugar</li></ul><ul><li>Black Salt</li></ul><ul><li>Navsadar</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Useful in cases of indigestion, loss of appetite and flatulence</li></ul><ul><li>Black Pepper is a gastro-intestinal stimulant</li></ul><ul><li>Long Pepper is a carminative and expectorant</li></ul><ul><li>Ginger is a useful digestive tonic</li></ul><ul><li>Lemon is a digestive stimulant</li></ul><ul><li>Cumin seeds are antispasmodic</li></ul><ul><li>Sea salt stimulates secretion of saliva and gastric juices</li></ul><ul><li>Black Salt is carminative and digestive</li></ul><ul><li>Navsadar helps in digestive function</li></ul><br/><strong>Directions For Use:</strong><br/>Adults 1-2 tablets and children 1 tablet after meals<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the daily recommended dosage</li></ul><ul><li>To be used under medical supervision only</li></ul><ul><li>Keep out of reach of children</li></ul><ul><li>Store in a cool, dry place, away from direct heat and sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-hajmola-imli-otc325364",
        "ProductName": "Dabur Hajmola Imli: Buy 120 tablets at best price in India"
    },
    "14": {
        "Category": "Ayurveda Products",
        "Id": 14,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Triphala Churna contains a combination of three well-known herbs Amla, Harad, and Bahera. These three fruits help in smooth functioning of bowel and relieve constipation.<br/><br/>Key benefits/uses of Dabur Triphala Churna:<br/>- Maintain overall health by harmonizing digestive functions and cleansing the stomach.<br/>- Help in smooth functioning of bowel and relieve constipation.<br/><br/>Direction for use/Dosage:<br/>- Consume ½ to 1 of Dabur Triphala Churna teaspoonful (3-6g) twice a day with lukewarm water or as directed by the physician.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-triphala-churna-otc497803",
        "ProductName": "Dabur Triphala Churna: Buy 120 gm Powder at best price in India"
    },
    "15": {
        "Category": "Personal Care",
        "Id": 15,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Almond Hair Oil is enriched with the goodness of Vitamin E and Almond Protein. <br/><br/>Key benefits/uses of Dabur Almond Hair Oil: <br/>Prevent following hair problems: <br/>- Hair fall <br/>- Split ends <br/>- Dry scalp and dandruff <br/>- Rough hair <br/>Provides the following benefits: <br/>- Makes the hair thicker, softer and lustrous <br/>- Promote hair growth <br/>- Nourish and restore natural moisture of the scalp <br/>- Provide the goodness of Vitamin E <br/><br/>Direction for use: <br/>- Apply gently and massage the oil into the hair scalp using the fingertips. <br/>- Leave it for an hour <br/>- Rinse-off with any shampoo or Dabur Almond Shampoo for best results <br/><br/>Indication: <br/>Hair damage and hair loss <br/><br/>Safety information: <br/>- Do not exceed the recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-almond-hair-oil-otc352584",
        "ProductName": "Dabur Almond Hair Oil: Buy 200 ml Oil at best price in India"
    },
    "16": {
        "Category": "Ayurveda Products",
        "Id": 16,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Hajmola Maha Candy contains Amra, Imli, Shvetajiraka, Shunthi, Pippali, Samudra Lavana, Sauvarchala Lavana, Maricha, Pudina, Dhanyaka, and Sharkara as major ingredients. The pack contains mixed candies of both the flavors Aam and Imli. The Candy's khatta meetha taste is available in two different fun-filled flavors- Albela Aam and Chulbuli Imli as ingredients.<br/><br/>Key benefits/uses of Dabur Hajmola Maha Candy:<br/>- Can be consumed by both adult and kid.<br/>- Improve digestion if taken regularly after meals.<br/>- Useful as a laxative for children andhelpd to treat stomach issues like loss of appetite, indigestion, flatulence.<br/><br/>Direction for use/Dosage:<br/>Consume Dabur Hajmola Maha Candy as per the requirement.<br/><br/>Indication:<br/>Indigestion<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-hajmola-maha-aam-imli-candy-otc391548",
        "ProductName": "Dabur Hajmola Maha Aam Imli Candy: Buy 130 candies at best price in India"
    },
    "17": {
        "Category": "Ayurveda Products",
        "Id": 17,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Avipattikar Churna contains Trikatu, Triphala, Haritaki, Vibhitaki, Amalaki, Musta, Vida Lavana, Vidanga, Ela, and Patra. It is one of the very effective medicines of Ayurveda. It is usually used in the treatment of constipation.<br/> <br/>Key benefits of Dabur Avipattikar Churna:<br/>- Helps to relieve gastritis, constipation, and difficulty in urination.<br/>- Treat sour and bitter eructation, inflammation in throat, chest and abdomen, sour salivation, bilious vomiting distaste, nausea.<br/>- Also, relieve indigestion, hyperacidity and heartburn.<br/>- Used even in chronic conditions.<br/> <br/>The direction for use:<br/>Take ¼ to ½ teaspoonful(1-3gm) twice a day with honey or milk or as directed by the physician.<br/> <br/>Safety information:<br/>People with diabetes, hypertension, sensitive stomach, ulcerative colitis, diarrhoea, should exercise caution while taking Avipattikar Churna.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-avipattikar-churna-otc497935",
        "ProductName": "Dabur Avipattikar Churna: Buy 60 gm Powder at best price in India"
    },
    "18": {
        "Category": "Ayurveda Products",
        "Id": 18,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Dabur Hajmola</strong> tablet is a tasty, fun-filled digestive that enhances the digestive power of the body. It comes in various flavours and can be regularly taken after meals. It is a mixture of traditional Indian culinary herbs, spices and edible salts that enhances digestion in the body. It comes in five flavours- Original, Lemon, Tamarind, Peppermint, Guava and Pomegranate.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Black Pepper</li></ul><ul><li>Pippali (Long pepper)</li></ul><ul><li>Ginger</li></ul><ul><li>Lemon</li></ul><ul><li>Cumin Seeds</li></ul><ul><li>Sea Salt</li></ul><ul><li>Sugar</li></ul><ul><li>Black Salt</li></ul><ul><li>Navsadar</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Useful in cases of indigestion, loss of appetite and flatulence</li></ul><ul><li>Black Pepper is a gastro-intestinal stimulant</li></ul><ul><li>Long Pepper is a carminative and expectorant</li></ul><ul><li>Ginger is a useful digestive tonic</li></ul><ul><li>Lemon is a digestive stimulant</li></ul><ul><li>Cumin seeds are antispasmodic</li></ul><ul><li>Sea salt stimulates secretion of saliva and gastric juices</li></ul><ul><li>Black Salt is carminative and digestive</li></ul><ul><li>Navsadar helps in digestive function</li></ul><br/><strong>Directions For Use:</strong><br/>Adults 1-2 tablets and children 1 tablet after meals<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the daily recommended dosage</li></ul><ul><li>To be used under medical supervision only</li></ul><ul><li>Keep out of reach of children</li></ul><ul><li>Store in a cool, dry place, away from direct heat and sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-hajmola-anardana-otc516625",
        "ProductName": "Dabur Hajmola Anardana: Buy 120 tablets at best price in India"
    },
    "19": {
        "Category": "Winter Care",
        "Id": 19,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Dabur Honey Squeezy</b> is one of the healthiest alternate for refined sugar with nutritious natural goodness. This honey is procured from the purest sources from the forest of Sundarbans, Himalayas and other specific regions. Pure honey is blended with many ayurvedic medications for the best results and enhancing the taste of the medicine. It can be used in several recipes to make them tastier and healthier. <br/><br/><b>Key Ingredients:</b><br/><ul><li>100% natural honey</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Provides energy and strengthens immunity</li></ul><ul><li>Rich in vitamins and carbohydrates</li></ul><ul><li>Helps in weight management</li></ul><ul><li>Helps improve digestion</li></ul><ul><li>Helps to cure throat infections and cough</li></ul><ul><li>Used in many formulations meant for skin improvement</li></ul><br/><b>Direction for Use:</b><br/>Mix Dabur Honey with warm water every morning helps in managing weight. You can also replace empty-calorie table sugar with nutritious honey in all your food and beverages<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Protect from direct heat and moisture</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Avoid any physical damage</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-honey-squeezy-buy-1-get-1-free-otc374425",
        "ProductName": "Dabur Honey Squeezy Buy 1 Get 1 Free: Buy 400 gm Liquid at best price in India"
    },
    "20": {
        "Category": "Ayurveda Products",
        "Id": 20,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Sat Isabgol Powder contains Isabgol Powder as a major ingredient. <br/><br/>Key benefits/uses of Dabur Sat Isabgol Powder: <br/>- Relieve constipation<br/>- Remedy diarrhea<br/>- Improve digestion<br/>- Cleanse Colon<br/>- Remedy fissures<br/>- Help reduce cholesterol <br/><br/>Direction for use: <br/>As directed by the physician.<br/><br/>Indication: <br/>Constipation <br/><br/>Safety information: <br/>- Do not exceed the recommended dose<br/>- Use the label/instruction manual carefully before use<br/>- Keep out of the reach and sight of the children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-sat-isabgol-otc497942",
        "ProductName": "Dabur Sat Isabgol: Buy 100 gm Powder at best price in India"
    },
    "21": {
        "Category": "Health Conditions",
        "Id": 21,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Sat Isabgol Powder contains Isabgol Powder as a major ingredient. <br/><br/>Key benefits/uses of Dabur Sat Isabgol Powder: <br/>- Relieve constipation<br/>- Remedy diarrhea<br/>- Improve digestion<br/>- Cleanse Colon<br/>- Remedy fissures<br/>- Help reduce cholesterol <br/><br/>Direction for use: <br/>As directed by the physician.<br/><br/>Indication: <br/>Constipation <br/><br/>Safety information: <br/>- Do not exceed the recommended dose<br/>- Use the label/instruction manual carefully before use<br/>- Keep out of the reach and sight of the children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-sat-isabgol-otc356329",
        "ProductName": "Dabur Sat Isabgol: Buy 200 gm Powder at best price in India"
    },
    "22": {
        "Category": "Ayurveda Products",
        "Id": 22,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Almond Hair Oil is enriched with the goodness of Vitamin E and Almond Protein. <br/><br/>Key benefits/uses of Dabur Almond Hair Oil: <br/>Prevent following hair problems: <br/>- Hair fall <br/>- Split ends <br/>- Dry scalp and dandruff <br/>- Rough hair <br/>Provides the following benefits: <br/>- Makes the hair thicker, softer and lustrous <br/>- Promote hair growth <br/>- Nourish and restore natural moisture of the scalp <br/>- Provide the goodness of Vitamin E <br/><br/>Direction for use: <br/>- Apply gently and massage the oil into the hair scalp using the fingertips. <br/>- Leave it for an hour <br/>- Rinse-off with any shampoo or Dabur Almond Shampoo for best results <br/><br/>Indication: <br/>Hair damage and hair loss <br/><br/>Safety information: <br/>- Do not exceed the recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-almond-hair-oil-otc352585",
        "ProductName": "Dabur Almond Hair Oil: Buy 500 ml Oil at best price in India"
    },
    "23": {
        "Category": "Ayurveda Products",
        "Id": 23,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Chyawanprash Awaleha derived from an Ayurvedic formula. It is an effcetive ayurvedic herb which fulfill the daily nutritional requirements of the body and support overall well being. <br/><br/>Key benefits/uses of Dabur Chyawanprash Awaleha:<br/>- Doubles the immunity in the body by maintaining nutritional balance.<br/>- Improves stress tolerance and increases energy. It also possess strong antioxidant properties.<br/>- Natural &amp; safe and suitable for all age groups in all seasons.<br/>- Synergistic combination of herbs and plant extracts in a base of amla fruit pulp.<br/><br/>Direction for use/Dosage:<br/>For best results consume Dabur Chyawanprash Awaleha daily either directly or with lukewarm milk.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children<br/></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-chyawanprash-awaleha-otc500894",
        "ProductName": "Dabur Chyawanprash Awaleha: Buy 250 gm Paste at best price in India"
    },
    "24": {
        "Category": "Ayurveda Products",
        "Id": 24,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Dabur Saraswatarishta</b> acts as a media to deliver water and alcohol soluble active herbal components to the body. Saraswatarishta is an anti-aging herbal tonic which is formulated using natural ingredients. <br/><br/><b>Key Ingredients:</b> <br/><ul><li>Brahmi (Bacopa monnieri)</li></ul><ul><li>Shatavari asparagus racemosus</li></ul><ul><li>Vidari (Pueraria tuberosa)</li></ul><ul><li>Abhaya Haritaki (Terminalia chebula)</li></ul><ul><li>Usheera (Vetiveria zizanioides)</li></ul><ul><li>Shunti Ginger Zingiber officinalis</li></ul><ul><li>Mishi foeniculum vulgare</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>It is a memory tonic and good for people of all ages, improves immunity, voice tone, and strength</li></ul><ul><li>It is also used in mental conditions, epilepsy, insanity and to improve the quality of semen and sperms</li></ul><br/><b>Directions For Use:</b> <br/>Take Dabur Saraswatarishta as directed by the physician.<br/><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-saraswatarishta-otc356318",
        "ProductName": "Dabur Saraswatarishta: Buy 450 ml Liquid at best price in India"
    },
    "25": {
        "Category": "Personal Care",
        "Id": 25,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Ashwagandharishta contains Ashwagandha, Sweta Musli, Manjishtha, Hareetaki, Haridra, Daruharidra, Yashtimadhu, Rasna, Vidari Kand, Arjun Tvak, Mustaka, Trivrit, Ananta Mool, Krishna Sariva, Rakta Chandan, Chandan, Vacha, Chitrak Mool, Dhatakipusph, Madhu, Shunthi, Maricha, Pippali, Tvak, Tejpatra, Ela, Priyangu, Nagakeshar as major ingredients.<br/><br/>Key benefits/uses of Dabur Ashwagandharishta:<br/>- Useful in nervous disorders improves memory, used in epilepsy, insanity, infertility and in piles and also useful in infertility.<br/>- Treats burning sensation of feet and palms.<br/>- Useful in treating tension, anxiety and general weakness.<br/>- Also, helpful in treating physical and mental disorders<br/><br/>Direction for use/Dosage:<br/>- Take 1 to 2 tablespoonful (15 to 30ml) Dabur Ashwagandharishta with an equal quantity of water after meals or as directed by the physician.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-ashwagandharishta-otc328665",
        "ProductName": "Dabur Ashwagandharishta: Buy 450 ml Liquid at best price in India"
    },
    "26": {
        "Category": "Ayurveda Products",
        "Id": 26,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Chyawanprash Awaleha derived from an Ayurvedic formula. It is an effcetive ayurvedic herb which fulfill the daily nutritional requirements of the body and support overall well being. <br/><br/>Key benefits/uses of Dabur Chyawanprash Awaleha:<br/>- Doubles the immunity in the body by maintaining nutritional balance.<br/>- Improves stress tolerance and increases energy. It also possess strong antioxidant properties.<br/>- Natural &amp; safe and suitable for all age groups in all seasons.<br/>- Synergistic combination of herbs and plant extracts in a base of amla fruit pulp.<br/><br/>Direction for use/Dosage:<br/>For best results consume Dabur Chyawanprash Awaleha daily either directly or with lukewarm milk.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children<br/></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-chyawanprash-awaleha-otc123952",
        "ProductName": "Dabur Chyawanprash Awaleha: Buy 500 gm Paste at best price in India"
    },
    "27": {
        "Category": "Ayurveda Products",
        "Id": 27,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Stresscom Capsule contains Ashwagandha extract, (which is standardized for 4.5% withanoloides) as major ingredients.<br/><br/>Key benefits/uses of Dabur Stresscom Capsule:<br/>The formulation is effective for relieving stress, anxiety, and insomnia.<br/><br/>Direction for use/Dosage:<br/>Take 1 capsule, twice a day, preferably with milk. For the optimum result to be taken for at least 4 weeks or as directed by the physician.<br/><br/>Indication:<br/>Physical and mental stress, General Debility, Strain, Fatigue<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-stresscom-ashwagandha-capsule-otc139026",
        "ProductName": "Dabur Stresscom Ashwagandha Capsule: Buy 10 capsules at best price in India"
    },
    "28": {
        "Category": "Ayurveda Products",
        "Id": 28,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Ashokarishta contains Ashoka, Dhataki, Musta, Haritaki and Amlaki as its main ingredients. Ashokarishta is especially helpful in reducing menstrual cramps and period pains in women.<br/><br/>Key benefits/uses of Dabur Ashokarishta:<br/>- Anti-inflammatory and rejuvenating properties.<br/>- An ayurvedic tonic that provides abdominal pain relief.<br/>- Useful for women dealing with menstrual problems<br/>- Helps overcome digestive weakness and loss of appetite.<br/>- Provides strength and stamina during painful periods<br/>- Helpful in improving overall health.<br/><br/>Direction for use/Dosage:<br/>Consume Dabur Ashokarishta as directed by the physician<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children<br/><br/></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-ashokarishta-otc325372",
        "ProductName": "Dabur Ashokarishta: Buy 450 ml Syrup at best price in India"
    },
    "29": {
        "Category": "Winter Care",
        "Id": 29,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Dabur Honey</strong> contains a pure form of honey extracted from Honey bee colonies without harming the colonies by anyway. <br/><br/><strong>Key benefits/uses of Dabur Honey: </strong><br/><strong>- </strong>Used in the treatment of Cough, Insomnia, Dandruff, Yeast infection, Eczema, Memory loss etc. <br/><strong>- </strong>Dabur honey is also beneficial for face and skin. <br/><strong>- </strong>Boost immunity and support in quick wound healing.<br/><strong> </strong><br/><strong>Direction for use/ Dosage: </strong><br/><br/>Consume Dabur Honey directly as per the requirement or add one teaspoonful honey in lukewarm water and consume empty stomach in the morning. <br/><br/><strong>Indications:</strong> <br/>Weight loss, Weak immunity, Cough, Eczema etc.<br/> <br/><strong>Safety information:</strong><br/>- Do not exceed the daily recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of the children.<br/><br/></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-honey-otc174066",
        "ProductName": "Dabur Honey: Buy 500 gm Liquid at best price in India"
    },
    "30": {
        "Category": "Personal Care",
        "Id": 30,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Shilajit Capsule contains Shilajit Patthar as the main ingredient. It increases strength, vigor, vitality, and memory grasping power. The capsule improves the overall constitution and wellness of the body.<br/><br/>Key benefits/uses of Dabur Shilajit Capsule:<br/>- Powerful and nutritional capsule<br/>- Regains lost powers of body<br/>- Helpful in infertility and weakness<br/>- Increases vigor and Vitality<br/>- Body regulator<br/><br/>Direction for use/Dosage:<br/>- One capsule twice a day or as directed by the physician<br/><br/>Indications:<br/>- Infertility, weakness<br/><br/>Storage instructions:<br/>- Store in a cool, dry, &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-shilajit-capsule-otc167804",
        "ProductName": "Dabur Shilajit Capsule: Buy 30 capsules at best price in India"
    },
    "31": {
        "Category": "Ayurveda Products",
        "Id": 31,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Sitopaladi Churna contains Mishri, Vanshalochan, Pippali, Ela, and Tvak as major ingredients. <br/><br/>Key benefits/uses of Dabur Sitopaladi Churna: <br/>- Act as an expectorant and provide instant relief from cough and cold. <br/>- Also, provide relief from burning sensation in hand and feet and loss of appetite. <br/>- Get absorbed and provide the body with energy and nutrition to fight against the mucous conditions. <br/><br/>Direction for use/ Dosage: <br/>Consume half to 1 teaspoonful (3-6g) twice a day with honey or as directed by the healthcare professional. <br/><br/>Indication: <br/>Bronchitis, cold and cough<br/><br/>Safety information: <br/>- Do not exceed the daily recommended dose. <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of the children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-sitopaladi-churna-otc347997",
        "ProductName": "Dabur Sitopaladi Churna: Buy 500 gm Powder at best price in India"
    },
    "32": {
        "Category": "Ayurveda Products",
        "Id": 32,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Pudina Hara Active is an ayurvedic medicine which contains Andrographis paniculata, Tulsi, Achyranthes Aspera, Piper Longum, Coriander, Acorus Calamus &amp; Alpinia Galanga and contains Pudinah Satva as active ingredients. It is recommended for indigestion, gas, and flatulence<br/><br/>Key benefits/Uses of Dabur Pudina Hara Active:<br/>- Works as cooling agent<br/>- Provides quick relief from stomach ailments like stomach ache, gas, and indigestion<br/>- 100 % natural and safe<br/><br/>Direction for use/Dosage:<br/>- Adults- Dilute 15 to 20 drops in a glass of water, 2-3 times a day<br/>- Children- Dilute 5 to 10 drops in a glass of water, 2-3 times a day<br/>- Dilute to ½ to 1 cup of water<br/><br/>Indications:<br/>- Indigestion, gas, and flatulence<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-pudin-hara-active-liquid-otc201530",
        "ProductName": "Dabur Pudin Hara Active Liquid: Buy 10 ml Liquid at best price in India"
    },
    "33": {
        "Category": "Winter Care",
        "Id": 33,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Chyawanprakash Sugarfree is an effective ayurvedic formulation, works as a specialized immune system booster.<br/><br/>Key benefits/uses of Dabur Chyawanprakash Sugarfree:<br/>- Safe for diabetics &amp; stimulates the body’s immunity against everyday infections like a cough, cold, and infections caused by seasonal weather changes.<br/>- Improves stress tolerance, increases energy, and supports overall well-being.<br/>- Provides digestive support &amp; packed with strong antioxidant properties.<br/>- The formulation is natural and safe.<br/><br/>Direction for use/Dosage:<br/>As directed by the physician<br/><br/>Indication:<br/>Weak immunity<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-chyawanprakash-sugarfree-otc333182",
        "ProductName": "Dabur Chyawanprakash Sugarfree: Buy 900 gm Paste at best price in India"
    },
    "34": {
        "Category": "Ayurveda Products",
        "Id": 34,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Badam Tail is extracted from the ripe kernels of Prunus Amygdalus. It contains many benefits for the body. <br/><br/>Key benefits/uses of Dabur Badam Tail: <br/>- The oil is a rich source of Vitamin E which provides glow and softness to the skin. <br/>- Sharpens memory and strengthens nerves and improve body strength. <br/>- Act as a mild laxative and provide relief from constipation. <br/>- Regular use makes hair strong and healthy. <br/><br/>Direction for use: <br/>- Consume 1-2 teaspoon preferably with a glass of milk. <br/>- Can also be applied externally to scalp &amp; body. <br/><br/>Indication: <br/>Skin &amp; hair damage, Memory loss, Constipation <br/><br/>Safety information: <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-badam-tail-otc347680",
        "ProductName": "Dabur Badam Tail: Buy 100 ml Oil at best price in India"
    },
    "35": {
        "Category": "Ayurveda Products",
        "Id": 35,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Pudina Hara Active is an ayurvedic medicine which contains Andrographis paniculata, Tulsi, Achyranthes Aspera, Piper Longum, Coriander, Acorus Calamus &amp; Alpinia Galanga and contains Pudinah Satva as active ingredients. It is recommended for indigestion, gas, and flatulence<br/><br/>Key benefits/Uses of Dabur Pudina Hara Active:<br/>- Works as cooling agent<br/>- Provides quick relief from stomach ailments like stomach ache, gas, and indigestion<br/>- 100 % natural and safe<br/><br/>Direction for use/Dosage:<br/>- Adults- Dilute 15 to 20 drops in a glass of water, 2-3 times a day<br/>- Children- Dilute 5 to 10 drops in a glass of water, 2-3 times a day<br/>- Dilute to ½ to 1 cup of water<br/><br/>Indications:<br/>- Indigestion, gas, and flatulence<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-pudin-hara-active-liquid-otc500825",
        "ProductName": "Dabur Pudin Hara Active Liquid: Buy 30 ml Liquid at best price in India"
    },
    "36": {
        "Category": "Personal Care",
        "Id": 36,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Lal Tail contains Shankhapushpi, Ratanjot, Til Tail (Sesame Oil), Camphor as major ingredients <br/><br/>Key benefits/uses of Dabur Lal Tail:<br/>- Dabur Lal oil provides 2 times faster physical growth, compared to no massage oil usage.<br/>- Helps in strengthening baby's bones and muscles and is proven safe and effective for better overall physical growth of babies.<br/>- Helps better sleeping patterns in neonates and infants.<br/>- Results in two times faster increase in weight and height.<br/>- Helps babies experience better appetite.<br/><br/>Direction for use:<br/>Use as directed on the pack.<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-lal-tail-otc174076",
        "ProductName": "Dabur Lal Tail: Buy 500 ml Oil at best price in India"
    },
    "37": {
        "Category": "Ayurveda Products",
        "Id": 37,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Abhayarishta is an effcetive ayurvedic formulation to treat<br/><br/>Key benefits/uses of Dabur Abhayarishta:<br/>- The formulation is used to treat stomach ailments including constipation, indigestion, flatulence etc.<br/>- Also helps to improves liver functions and useful in piles.<br/><br/>Direction for use/Dosage:<br/>Consume 1 to 2 tablespoonful of Dabur Abhayarishta with the equal quantity of water twice a day after meals or as directed by the physician.<br/><br/>Indications:<br/>Constipation, indigestion, piles etc.<br/><br/>Storage instructions:<br/>- Store in a cool, dry &amp; dark place<br/>- Protect from direct Sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose <br/>- Keep out of the reach and sight of children<br/></div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-abhayarishta-otc347673",
        "ProductName": "Dabur Abhayarishta: Buy 450 ml Liquid at best price in India"
    },
    "38": {
        "Category": "Personal Care",
        "Id": 38,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Badam Tail is extracted from the ripe kernels of Prunus Amygdalus. It contains many benefits for the body. <br/><br/>Key benefits/uses of Dabur Badam Tail: <br/>- The oil is a rich source of Vitamin E which provides glow and softness to the skin. <br/>- Sharpens memory and strengthens nerves and improve body strength. <br/>- Act as a mild laxative and provide relief from constipation. <br/>- Regular use makes hair strong and healthy. <br/><br/>Direction for use: <br/>- Consume 1-2 teaspoon preferably with a glass of milk. <br/>- Can also be applied externally to scalp &amp; body. <br/><br/>Indication: <br/>Skin &amp; hair damage, Memory loss, Constipation <br/><br/>Safety information: <br/>- Read the label carefully before use. <br/>- Keep out of the reach and sight of children.</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-badam-tail-otc347681",
        "ProductName": "Dabur Badam Tail: Buy 50 ml Oil at best price in India"
    },
    "39": {
        "Category": "Winter Care",
        "Id": 39,
        "Manufacture": "Dabur India Ltd",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Dabur Honitus Cough Drops Lozenges contain Shudh Madhu (Honey), Pudina Satva (Mentha Oil), Nilgiri Tail (Eucalyptus Oil) and Kapoor (Camphor) as major ingredients. The Lozenges are available in various flavours like Honey Ginger, Honey Lemon, Honey Menthol, Honey Orange and Honey Mint<br/><br/>Key benefits/uses of Dabur Honitus Cough Drops Lozenges: <br/>- Provide effective and instant relief from cough and sore throat.<br/>- Useful in combating problems like bad breath.<br/><br/>Direction for use: <br/>As per the requirement or as directed by physician<br/><br/>Safety information: <br/>- Do not exceed the recommended dose<br/>- Read the label carefully before use <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/dabur-honitus-cough-drops-lozenges-ginger-honey-otc356254",
        "ProductName": "Dabur Honitus Cough Drops Lozenges Ginger Honey: Buy 300 lozenges at best price in India"
    },
    "40": {
        "Category": "Ayurveda Products",
        "Id": 0,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Himalaya Confido Tablet</b> is an ayurvedic formulation to provide strength. It is a precursor of testosterone which improves flow-mediated vasodilatation of the penile arteries.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Gokshura</li></ul><ul><li>Kapikachchu</li></ul><ul><li>Protodioscin</li></ul><br/><b>Key Benefits</b><br/><ul><li>Augments semen count and enhances libido, and strengthens the penile tissue</li></ul><ul><li>Confido tablet helps in the management of male sexual dysfunction by increasing sperm count and testosterone levels</li></ul><ul><li>Himalaya confido tablet helps when a man can't get or keep an erection firm enough for sexual intercourse</li></ul><br/><b>Directions For Use</b><br/>Use as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of reach of the children</li></ul><ul><li>Store in a cool dry place away from direct sunlight</li></ul><ul><li>Use under medical supervision</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-confido-tablet-otc90667",
        "ProductName": "Himalaya Confido Tablet: Buy 60 tablets at best price in India"
    },
    "41": {
        "Category": "Personal Care",
        "Id": 1,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Himalaya Himcolin Gel</b> is a natural herbal medicine which is helpful in the treatment of erectile dysfunction and other sexual problem of the male. Himcolin gel contains the composition of numerous ingredients which helps in enhancing the vasodilation in the tissue which helps in relieving disorder of erectile dysfunction. iT also helps in improving libido.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Jaatiphalam</li></ul><ul><li>Jaatipatree</li></ul><ul><li>Lavanga</li></ul><ul><li>Taja</li></ul><ul><li>Mukulaka</li></ul><ul><li>Jyotishmati</li></ul><ul><li>Karpasa</li></ul><ul><li>Vathada</li></ul><ul><li>Lathakasthuri</li></ul><ul><li>Nirgundi</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It helps in conditions like erectile dysfunction</li></ul><ul><li>Helps in maintaining the full erection for a longer period</li></ul><ul><li>Helps in improving libido naturally</li></ul><ul><li>Useful in strengthening penile muscles</li></ul><br/><b>Directions For Use:</b><br/><ul><li>Apply a little bit of Himcolin Gel onto the male sexual organ, right before intercourse</li></ul><ul><li>Massage gently, all throughout for maximum effect</li></ul><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Store in a cool and dry place away from direct sunlight</li></ul><ul><li>Keep away from children</li></ul><ul><li>Use under medical supervision</li></ul><ul><li>In case of side effects such as rashes, painful urination and extreme dryness discontinue usage</li></ul><ul><li>For external use only</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-himcolin-gel-otc290073",
        "ProductName": "Himalaya Himcolin Gel: Buy 30 gm Gel at best price in India"
    },
    "42": {
        "Category": "Personal Care",
        "Id": 2,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Speman tablets gives hope to childless couples by enhancing the process of production of sperms. It contains Hygrophilia, Cowhage/Velvet Bean and Small Caltrops <br/> <br/>Role of Key ingredients:<br/><br/><ul><br/><li>Hygrophilia (Kokilaksha) is beneficial in treating impotence and seminal debilities.</li><br/><li>Cowhage/Velvet Bean (Kapikachchu) is an aphrodisiac, which supports the production of hormones associated with the ‘pleasure system’ of the brain. </li><br/><li>Small Caltrops (Gokshura) contains protodioscin (a steroidal saponin compound) which converts to dehydroepiandrosterone (DHEA) in the body, a precursor of testosterone, which improves sexual desire and sustains penile erection.</li><br/></ul><br/><br/> <br/>Speman tablet enhances spermatogenesis by improving testosterone levels in men affected by oligospermia (semen with low concentration of sperm). It further improves the sperm count and the quality of semen. It also enhances sexual performance by improving sexual desire and sustaining penile erection. <br/><br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-speman-tablet-otc90723",
        "ProductName": "Himalaya Speman Tablet: Buy 60 tablets at best price in India"
    },
    "43": {
        "Category": "Ayurveda Products",
        "Id": 3,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Tentex Royal is recommended for erectile dysfunction of various etiologies (cardiovascular diseases, endothelial dysfunction and diabetes). The natural ingredients in Tentex Royal act as aphrodisiacs that increase sexual desire, treats male sexual weakness and premature ejaculation.<br/>Role of Key ingredients:<br/>Small Caltrops (Gokshura) is beneficial in erectile dysfunction. Gokshura improves flow-mediated dilation of the penile arteries. This results in the relaxation of vascular smooth muscles, which enhances erection.<br/>Hygrophilia (Kokilaksha) releases nitric oxide (NO) from endothelium and nitrergic nerve endings of the penis, relaxing the cavernosal (a sponge-like area around the penis that has most of the blood during erection) muscles and increasing penile blood flow. This is helpful in correcting erectile dysfunction.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-tentex-royal-capsule-otc61763",
        "ProductName": "Himalaya Tentex Royal Capsule: Buy 10 capsules at best price in India"
    },
    "44": {
        "Category": "Health Conditions",
        "Id": 4,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"> <br/>Himalaya Ophthacare Eye Drops contain a mixture of Honey and Persian Rose. Honey acts as an effective anti-inflammatory agent which has a soothing effect on the eyes. Persian Rose has unique cooling properties and helps in treating eyestrain and computer vision syndrome. <br/> <br/>Himalaya Ophthacare Eye Drops is an excellent eye care product and keeps the eyes safe from infection and allergic disorders. Its cooling and antibacterial effects soothe the eyes in case of irritation and facilitates the quick healing of minor wounds as well. It provides relief from dry eyes, eyestrain, swelling, redness and inflammation and removes elements that damages eyes (atmospheric pollutants). It provides relief to those wearing lenses and improves eye sight and vision<br/> <br/>Directions for use:<br/>Please consult your physician to prescribe the dosage that best suits the condition. <br/> <br/> <br/>Use under medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-ophthacare-eye-drop-otc131470",
        "ProductName": "Himalaya Ophthacare Eye Drop: Buy 10 ml Eye Drop at best price in India"
    },
    "45": {
        "Category": "Ayurveda Products",
        "Id": 5,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Ashvagandha Tablet is pure herb extract that contains Ashvagandha (Withania somnifera). Ashvagandha rejuvenates the mind and helps to increase the immunity. Ashvagandha is also referred to as to as “Indian ginseng” as it acts as a natural stress reliever. Ashvagandha Tablet maintains a healthy balance between the nervous system, endocrine glands and immune system. It also helps in boosting up the sexual energy in men. Ashvagandha is traditionally referred to as an aphrodisiac which promotes sexual health by uplifting the mood, reducing anxiety, improving energy levels and fertility.<br/> <br/>Directions of use:<br/>Recommended dose is 1 tablet twice daily after meals, with water. <br/> <br/>Note:<br/>Ashvagandha tablets are 100% vegetarian. They are also free from sugar, artificial colours, artificial flavours, preservatives, and gelatin. <br/> <br/>Use under medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-ashvagandha-tablet-otc134485",
        "ProductName": "Himalaya Wellness Pure Herbs Ashvagandha Tablet: Buy 60 tablets at best price in India"
    },
    "46": {
        "Category": "Health Conditions",
        "Id": 6,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Septilin tablet is a formulation of herbo-mineral ingredients like Tinospora Gulancha, Licorice, and Indian Bdellium. Tinospora Gulancha (Guduchi) comes with an antimicrobial property which helps in increasing the level of antibodies. Licorice (Yashtimadhu) enhance immunostimulation and increases macrophage. Indian Bdellium (Guggulu) has anti-inflammatory and antioxidant properties, which helps in maintaining overall health.<br/> <br/>Himalaya Sepilin tablets enhance natural immunity and acts as an immunity booster which maintains general well-being. It is also used for:<br/> <br/>As an immunomodulator in the management of upper and lower respiratory tract infections, allergic disorders <br/>For early recovery in postoperative conditions<br/>To reduce recurrence in infection-prone individuals<br/>As an adjuvant to anti-infective therapy<br/>Resistance to antibiotic therapy<br/> <br/>Other benefits: Septilin possesses antipyretic (reduces fever) properties. It is also beneficial in respiratory tract infections, including chronic tonsillitis, pharyngitis, chronic bronchitis<br/> <br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-septilin-tablet-otc191717",
        "ProductName": "Himalaya Septilin Tablet: Buy 60 tablets at best price in India"
    },
    "47": {
        "Category": "Ayurveda Products",
        "Id": 7,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Liv.52 DS is a double strength Hepatospecific formulation that contains Caper Bush (Himsra) and Chicory (Kasani) herbs. The Caper Bush contains p-methoxy benzoic acid for increasing the functional efficiency of the liver. Chicory is effective in protecting liver from alcohol toxicity. Liv 52 DS tablet is a daily health supplement that protect the hepatic parenchyma and stimulate hepatocellular regeneration to increase efficiency of the liver.<br/> <br/>Two tablet of Liv 52 DS can be consumed twice or thrice a day after meals. <br/> <br/>Liv.52 DS Tablet improves digestion and assimilation process, promotes appetite. It reduces damage caused to liver due to Elevated liver enzyme, jaundice, and Hepatitis A &amp; B.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-liv.-52-ds-tablet-otc135545",
        "ProductName": "Himalaya Liv. 52 DS Tablet: Buy 60 tablets at best price in India"
    },
    "48": {
        "Category": "Ayurveda Products",
        "Id": 8,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>The Himalaya Wellness Pure Herbs KapiKachhu Men's Wellness Tablet</strong> is recommended for men wellness. Ih enhances sperm count providing more stamina.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Kapikacchu</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Manages male sexual disorders</li></ul><ul><li>Improves sexual desire and drive, which subsequently improves sexual performance</li></ul><ul><li>Enhances sperm count and its ability to swim</li></ul><ul><li>Improves semen quality and maintain semen balance</li></ul><ul><li>Prevents damage to sperm caused by free radicals, stress or age</li></ul><ul><li>Free from sugar, artificial colors, artificial flavors, preservatives, and gelatin</li></ul><ul><li>100% vegetarian</li></ul><br/><strong>Directions For Use:</strong><br/>1-2 capsule twice daily or as directed by the physician<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-kapikachhu-men-s-health-tablet-otc322762",
        "ProductName": "Himalaya Wellness Pure Herbs Kapikachhu Men's Health Tablet: Buy 60 tablets at best price in India"
    },
    "49": {
        "Category": "Ayurveda Products",
        "Id": 9,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Hadjod contains Asthisamhara (Cissus quadrangularis). <br/>Asthisamhara is a therapeutic herb that promotes healing in fractured bones. Himalaya Hadjod quickens healing during bone fracture, strengthens bone integrity, combats pain and inflammation, and assists in building weak bones. It restores the balance between bone restoration and bone formation. Hadjod assists in building the chemical composition of fractured and weak bones. It also restores the tensile strength of bones.<br/> <br/>Directions of use:<br/>To reap best results, one must consume 2 tablets twice daily. <br/> <br/>Caution:<br/>One must consult a doctor in case of pregnancy, breastfeeding, diabetes, and hypertension. <br/>Hadjod must not be consumed on an empty stomach to avoid indigestion.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-hadjod-bone-joint-wellness-tablet-otc306022",
        "ProductName": "Himalaya Wellness Pure Herbs Hadjod Bone & Joint Wellness Tablet: Buy 60 tablets at best price in India"
    },
    "50": {
        "Category": "Personal Care",
        "Id": 10,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Wellness Pure Herbs Gokshura Men's Wellness Tablet contains Gokshura (Tribulus terrestris) as a key ingredient. It is recommended for men wellness.<br/><br/>Key benefits/uses of Himalaya Wellness Pure Herbs Gokshura Men's Wellness Tablet:<br/>- Improves sexual desire and drive which subsequently improves sexual performance<br/>- Nonhormonal bio stimulator which increases the level of natural endogenous testosterone<br/>- Strengthens the penile tissue and enhances penile erection, making it very useful in erectile dysfunction<br/>- Improves vigor and vitality<br/>- Free from sugar, artificial colors, artificial flavors, preservatives, and gelatin<br/>- 100% vegetarian<br/><br/>Direction for use/Dosage:<br/>- 1-2 tablets twice daily <br/>- Or as directed by the physician<br/><br/>Recommendation:<br/>- For men only<br/><br/>Indications:<br/>- Low libido, weak strength, and stamina<br/><br/>Storage instructions:<br/>- Store in a cool, dry, &amp; dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-gokshura-tablet-otc325580",
        "ProductName": "Himalaya Wellness Pure Herbs Gokshura Tablet: Buy 60 tablets at best price in India"
    },
    "51": {
        "Category": "Ayurveda Products",
        "Id": 11,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya AyurSlim capsules contain a rich formulation of Garcinia, Indian Bdellium, Gymnema, Chebulic Myrobalan, and Fenugreek. AyurSlim is a Clinically Proven, 100% safe and natural slimming therapy, with absolutely no side-effects. <br/> <br/>Role of Key Ingredients:<br/>Garcinia cambogia (Garcinia / Vriksh amla) - Inhibits the manufacture of fatty acids in the muscles and liver and thus arrests lipogenesis (prevents conversion of carbohydrates to fatty acids)<br/>Balsamodendron mukul (Indian Bdellium / Guggulu) - Reduces cholesterol and triglyceride levels factors concerned with the management of obesity<br/>Gymnema sylvestre (Gymnema / Meshashringi)  -Reduces the craving for sugar and neutralizes excess sugar in the body<br/>Terminalia chebula (Chebulic Myrobalan / Haritaki) - Potent anti-oxidant and anti-inflammatory herb which removes toxins from the body<br/>Trigonella foenum-graecum (Fenugreek / Medhika) - It exhibits potent anti-diabetic activity<br/> <br/>All the herbal extracts work in unity to ensure that consumption of Himalaya AyurSlim capsules lead to weight reduction and limit fat production. It should not be consumed by pregnant and lactating women.<br/> <br/>Directions of use:<br/>2 capsules twice a day, after meals.<br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-ayurslim-capsule-otc249083",
        "ProductName": "Himalaya Wellness AyurSlim Capsule: Buy 60 capsules at best price in India"
    },
    "52": {
        "Category": "Health Conditions",
        "Id": 12,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Septilin syrup is a formulation of herbo-mineral ingredients like Tinospora Gulancha, Licorice, and Indian Bdellium. Tinospora Gulancha (Guduchi) comes with an antimicrobial property which helps in increasing the level of antibodies. Licorice (Yashtimadhu) enhance immunostimulation and increases macrophage. Indian Bdellium (Guggulu) has anti-inflammatory and antioxidant properties, which helps in maintaining overall health.<br/> <br/>Himalaya Sepilin syrup enhances natural immunity and acts as an immunity booster which maintains general well-being. It is also used for:<br/> <br/>As an immunomodulator in the management of upper and lower respiratory tract infections, allergic disorders <br/>For early recovery in postoperative conditions<br/>To reduce recurrence in infection-prone individuals<br/>As an adjuvant to anti-infective therapy<br/>Resistance to antibiotic therapy<br/> <br/>Other benefits: Septilin possesses antipyretic (reduces fever) properties. It is also beneficial in respiratory tract infections, including chronic tonsillitis, pharyngitis, chronic bronchitis<br/> <br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-septilin-syrup-otc171792",
        "ProductName": "Himalaya Septilin Syrup: Buy 200 ml Syrup at best price in India"
    },
    "53": {
        "Category": "Ayurveda Products",
        "Id": 13,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Gasex tablet contains Cowrie shell calx (<em>Cowrie bhasma</em>), Conch shell calx (<em>Shankh bhasma</em>), Black pepper (<em>Piper nigrum</em>), Indian gooseberry (<em>Emblica officinalis</em>), Chebulic myrobalan (<em>Terminalia chebula</em>), Belleric myrobalan (<em>Terminalia bellerica</em>) and Ginger (<em>Zingiber officinale</em>)<br/> <br/>Gasex Tablet normalizes the intestinal transit time. Gasex tablet has prebiotic, antiflatulent and antacid, antiulcer, anti-inflammatory, hepatoprotective, cholagogue and membrane-modulating, antimicrobial, and antioxidant actions.<br/> <br/>Gasex tablet is used for symptomatic control and relief of indigestion, Flatulence, abdominal distension, and belching. It is also used for abdominal discomfort in the postoperative period and during prolonged immobilization<br/> <br/>Directions of use: 1 to 2 tablets before lunch/dinner.<br/> <br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-gasex-tablet-otc61706",
        "ProductName": "Himalaya Gasex Tablet: Buy 100 tablets at best price in India"
    },
    "54": {
        "Category": "Ayurveda Products",
        "Id": 14,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Mentat Channelizes mental energy and enhances memory and learning capacity. It is rich in Brahmi, Ashwagandha and Madhukaparni.<br/> <br/>Role of Key ingredients:<br/>Thyme-Leaved Gratiola (Brahmi) maintains cognitive function. Well known for its nootropic (memory enhancer) effect, the herb enhances memory and learning. It is also known to calm restlessness and is used to treat several mental disorders.<br/>Indian Pennywort (Madhukaparni) possesses antiepileptic properties and is commonly used as an adjuvant to epileptic drugs. It balances amino acid levels, which is beneficial in treating depression. It also prevents cognitive impairment.<br/>Winter Cherry (Ashvagandha) is used as a mood stabilizer in clinical conditions of anxiety and depression. Withanolides, the chemical constituents present in Winter Cherry, possess rejuvenating properties. The herb also reduces oxidative stress, which can cause mental fatigue.<br/> <br/> <br/>The natural ingredients in Mentat improves mental quotient, memory span and concentration ability. The calming effects of Mentat are beneficial in treating insomnia and convulsions. Mentat is useful as an adjuvant in the treatment of epilepsy and enuresis.<br/> <br/>Mentat is effective in<br/>Memory and learning disorders – attention fluctuation, concentration impairment, language and learning disability<br/>Behavioral disorders – hyperkinetic states, asocial behavior,temper tantrums, aggressive behavior, enuresis<br/>Attention deficit hyperactivity disorder (ADHD)<br/>Anxiety and stress-related disorders<br/>Mental fatigue<br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-mentat-tablet-otc255261",
        "ProductName": "Himalaya Mentat Tablet: Buy 60 tablets at best price in India"
    },
    "55": {
        "Category": "Featured",
        "Id": 15,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Tentex forte contains natural ingredients that possess tonic and aphrodisiac properties, which enhance sexual desire, drive and performance. Tentex forte increases the testosterone levels in the body, preventing erectile dysfunction. <br/>Role of Key Ingredients:<br/>Winter Cherry (Ashvagandha) is a potent adaptoge and antioxidant, which relieves mental stress, a key contributor of poor sexual performance. <br/>Shilajeet acts as an adaptogen and rejuvenates the body in order to improve sexual function.<br/>Cowhage/Velvet Bean (Kapikachchu) is an aphrodisiac, that supports the production of hormones associated with the ‘pleasure system’ of the brain.<br/>Small Caltrops (Gokshura) is beneficial in erectile dysfunction as it strengthens the penile tissue. <br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-tentex-forte-tablet-otc90726",
        "ProductName": "Himalaya Tentex Forte Tablet: Buy 10 tablets at best price in India"
    },
    "56": {
        "Category": "Ayurveda Products",
        "Id": 16,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Cystone is a natural choice in urinary calculi and UTI. It majorly contains Pasanabheda and Shilapushpa. <br/> <br/>Role of Key ingredients:<br/><br/><ul><br/><li>Pasanabheda (Saxifraga Ligulata) possesses diuretic, demulcent and antimicrobial properties. Pasanabheda soothes and protects irritated or inflamed internal tissue. As a diuretic, the herb helps to flush out small stones and gravel along with urine.</li><br/><li>Shilapushpa(Didymocarpus pedicellata) prevents the formation of urinary stone and helps dissolve kidney stones. The herb is also known for its antimicrobial properties.</li><br/></ul><br/><br/>Cystone tablets are also used for the prevention and treatment of kidney stone formation, presence of crystals in urine,removal of kidney stones and recurrence of stones<br/>It can also be used as adjuvant in chronic UTI, painful urination or blood present in urine and burning micturition (urination).<br/> <br/>Use under medical supervision.<br/> </div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-cystone-tablet-otc169306",
        "ProductName": "Himalaya Cystone Tablet: Buy 60 tablets at best price in India"
    },
    "57": {
        "Category": "Ayurveda Products",
        "Id": 17,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Liv 52 syrup contains Caper Bush (<em>Himsra</em>) and Chicory (<em>Kasani</em>). <em>Himsra</em> is a potent hepatoprotective, which lowers down the level of liver enzymes (ALT and AST) and improves the functional efficiency of the liver and spleen. Flavonoids present in the <em>Himsra</em> exhibit significant antioxidant properties, as well.<em>Kasani</em> protects the liver against alcohol toxicity. It is also a potent antioxidant, which can be seen by its free radical scavenging property.    Liv-52 Syrup helps in:<ul><li>Treatment of Jaundice</li><li>Improves appetite, digestion and assimilation processes and promotes weight gain.  </li><li>Prevention and treatment of viral hepatitis, alcoholic liver disease and liver damage.</li><li>As an adjuvant during prolonged illness and convalescence.</li></ul>  Directions for use: Please consult your physician to prescribe the dosage that best suits the condition.<br/><br/>Use under Medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-liv.52-syrup-otc135546",
        "ProductName": "Himalaya Liv.52 Syrup: Buy 200 ml Syrup at best price in India"
    },
    "58": {
        "Category": "Ayurveda Products",
        "Id": 18,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya AyurSlim capsules contain a rich formulation of Garcinia, Indian Bdellium, Gymnema, Chebulic Myrobalan, and Fenugreek. AyurSlim is a Clinically Proven, 100% safe and natural slimming therapy, with absolutely no side-effects. <br/> <br/>Role of Key Ingredients:<br/>Garcinia cambogia (Garcinia / Vriksh amla) - Inhibits the manufacture of fatty acids in the muscles and liver and thus arrests lipogenesis (prevents conversion of carbohydrates to fatty acids)<br/>Balsamodendron mukul (Indian Bdellium / Guggulu) - Reduces cholesterol and triglyceride levels factors concerned with the management of obesity<br/>Gymnema sylvestre (Gymnema / Meshashringi)  -Reduces the craving for sugar and neutralizes excess sugar in the body<br/>Terminalia chebula (Chebulic Myrobalan / Haritaki) - Potent anti-oxidant and anti-inflammatory herb which removes toxins from the body<br/>Trigonella foenum-graecum (Fenugreek / Medhika) - It exhibits potent anti-diabetic activity<br/> <br/>All the herbal extracts work in unity to ensure that consumption of Himalaya AyurSlim capsules lead to weight reduction and limit fat production. It should not be consumed by pregnant and lactating women.<br/> <br/>Directions of use:<br/>2 capsules twice a day, after meals.<br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-ayurslim-capsule-otc349357",
        "ProductName": "Himalaya Wellness AyurSlim Capsule: Buy 180 capsules at best price in India"
    },
    "59": {
        "Category": "Ayurveda Products",
        "Id": 19,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>The Himalaya Wellness Pure Herbs Brahmi Mind Wellness Tablet</b> helps in increasing and improving intelligence. Improves mental agility, helps with weak memory and learning in young adults and working professionals. Also helpful in age-associated memory problems in the elderly.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Brahmi</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Acts as a potent antioxidant neuro protector</li></ul><ul><li>Improves certain brain chemicals that are involved in thinking, learning and memory</li></ul><ul><li>Enhances cognitive abilities and calms the mind</li></ul><ul><li>Promotes clarity of thought</li></ul><ul><li>Helps in memory consolidation</li></ul><ul><li>Helps in reducing unnatural age-related brain degeneration</li></ul><ul><li>100% vegetarian</li></ul><ul><li>Free from sugar, artificial colors, artificial flavors, preservatives, and gelatin</li></ul><br/><b>Directions For Use:</b><br/>1-2 tablets twice daily or as directed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-brahmi-mind-wellness-tablet-otc135993",
        "ProductName": "Himalaya Wellness Pure Herbs Brahmi Mind Wellness Tablet: Buy 60 tablets at best price in India"
    },
    "60": {
        "Category": "Featured",
        "Id": 20,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Diabecon DS tablets contain a unique combination of Gymnema (Meshashringi), Indian Kino Tree (Pitasara) and Shilajeet. <br/> <br/>Gymnema helps reducing excessive blood sugar in the body, and it stimulates the production and activity of insulin<br/>Pitasara has alpha-glucosidase inhibitory properties and regularizes key metabolic enzymes involved in carbohydrate metabolism <br/>Shilajeet decreases hepatic glucose production and prevents hyperglycemia. It also protects the pancreas and helps it produce insulin. <br/> <br/>Himalaya Diabecon DS tablets are an effective anti-diabetic herbal supplement and are used to control and manage type 2 diabetes. <br/>The natural ingredients present in this medication helps the body produce its own insulin and minimize long term complications from the problem. It also helps reduces high glucose content in the blood, keeping the body healthy and functioning normally.<br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-diabecon-ds-tablet-otc268145",
        "ProductName": "Himalaya Diabecon DS Tablet: Buy 60 tablets at best price in India"
    },
    "61": {
        "Category": "Ayurveda Products",
        "Id": 21,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Purifying Neem Face Wash is a soap-free, herbal formulation that cleans impurities and helps clear pimples. A natural blend of Neem and Turmeric bring together their antibacterial and antifungal properties to prevent the recurrence of acne over time.<br/> <br/>Key ingredients:<br/>Neem is an excellent skin care ingredient known for its antibacterial properties. It improves general skin health and immunity, combating bacterial infections such as acne, boils and ulcers. Neem tackles bacteria from the root and prevents the recurrence of pimples and blemishes. <br/>Turmeric has been used as an antiseptic for centuries, and it is regarded as one of nature's most powerful healers. The herb helps to even out your skin tone and color, making it an excellent ingredient in a face wash. It also helps to retain the skin's elasticity, making it supple. Turmeric has strong anti-inflammatory properties, which soothe your skin.<br/> <br/>Direction for use:<br/>Moisten face, apply a small quantity of Purifying Neem Face Wash and gently work up a lather using a circular motion. Wash off and pat dry. Use twice daily.<br/> <br/>Suitable for all skin types. Best for acne-prone skin.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc370059",
        "ProductName": "Himalaya Herbals Purifying Neem Face Wash: Buy 300 ml Face Wash at best price in India"
    },
    "62": {
        "Category": "Personal Care",
        "Id": 22,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Purifying Neem Face Wash is a soap-free, herbal formulation that cleans impurities and helps clear pimples. A natural blend of Neem and Turmeric bring together their antibacterial and antifungal properties to prevent the recurrence of acne over time.<br/> <br/>Key ingredients:<br/>Neem is an excellent skin care ingredient known for its antibacterial properties. It improves general skin health and immunity, combating bacterial infections such as acne, boils and ulcers. Neem tackles bacteria from the root and prevents the recurrence of pimples and blemishes. <br/>Turmeric has been used as an antiseptic for centuries, and it is regarded as one of nature's most powerful healers. The herb helps to even out your skin tone and color, making it an excellent ingredient in a face wash. It also helps to retain the skin's elasticity, making it supple. Turmeric has strong anti-inflammatory properties, which soothe your skin.<br/> <br/>Direction for use:<br/>Moisten face, apply a small quantity of Purifying Neem Face Wash and gently work up a lather using a circular motion. Wash off and pat dry. Use twice daily.<br/> <br/>Suitable for all skin types. Best for acne-prone skin.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc370057",
        "ProductName": "Himalaya Herbals Purifying Neem Face Wash: Buy 150 ml Face Wash at best price in India"
    },
    "63": {
        "Category": "Personal Care",
        "Id": 23,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">The Himalaya Anti-dandruff shampoo has a rich formulation containing Tea Tree Oil and Aloe Vera. Tea Tree oil helps in effectively treating dandruff owing to its anti-fungal properties.Aloe Vera softens hair and soothes the scalp, helping to alleviate itching.<br/> <br/>Aloe Vera and Tea Tree oil combine to moisturise and sooth the scalp. <br/> <br/>The herbal shampoo strengthens hair roots, controls dandruff, and prevent dryness. It addresses the root cause of dandruff such as Malassezia fungus and dry scalp, while being gentle on hair.  The Himalaya hair shampoo is effective in controlling dandruff for all hair types. The herbal hair shampoo can be used on artificially coloured or permed hair. <br/> <br/>Directions for use:<br/>Wet your hair and scalp with lukewarm water.<br/>Gently massage the Himalaya shampoo.<br/>Rinse thoroughly with water.<br/>Repeat the process, if required.<br/> <br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-anti-dandruff-shampoo-otc173442",
        "ProductName": "Himalaya Anti-Dandruff Shampoo: Buy 200 ml Shampoo at best price in India"
    },
    "64": {
        "Category": "Ayurveda Products",
        "Id": 24,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Hairzone solution is a photo-pharmaceutical topical preparation that prevents hair fall and promotes hair growth. It contains Palasha and Palashabheda.<br/> <br/>Role of key ingredients:<br/>Palasha (Butea monosperma) prevents hair follicular degeneration and extends the anagen (hair growth) phase. It acts as an astringent that relieves minor skin irritation resulting from scalp fungal infections. The antioxidant property prevents hair fall.<br/>Palashabheda (Butea parviflora) is an antimicrobial agent that eliminates bacteria, viruses and fungi from the scalp.<br/> <br/>Hairzone solution prevents follicle degeneration, promotes hair follicular density and hair follicle count. It can be used to relief common hair problems associated with a dry and itchy scalp.<br/> <br/>Directions of use:<br/>Spray a generous amount of Hairzone solution to the affected parts of the scalp.<br/>Gently massage the scalp for 5 to 10 minutes and leave it overnight.<br/>Wash your hair the next morning.<br/> <br/>Use under medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-hairzone-solution-otc269760",
        "ProductName": "Himalaya Hairzone Solution: Buy 60 ml Solution at best price in India"
    },
    "65": {
        "Category": "Featured",
        "Id": 25,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya V-Gel is a unique herbal formula that consists of Persian Rose, Triphala and Cardamom.<br/> <br/>Role of Key Ingredients:<br/>Persian Rose (Satapatri) has antiviral and antibacterial properties, which  reduces the maturation of the infectious progeny virus. It also combats gram-positive and gram-negative bacteria responsible for female reproductive tract infections. <br/>Triphala acts as an anti-inflammatory and antibacterial agent that cleanses the female reproductive organ from any bacteria. <br/>Cardamom (Ela) provides relief from pain associated with vaginitis, cervicitis and leucorrhea.<br/> <br/>Himalaya V-Gel is indicated for vaginal candidiasis (fungal yeast infection), vaginal trichomoniasis (parasitic vaginal infection) and non-specific bacterial vaginitis.Himalaya V-Gel cream provides relief from occasional irritation, itching and burning sensations of the women's private part. Topical application of this gel can soothe inflamed vulva and cervix, thus accelerating the healing process. It can also stop vaginal discharge and prevents further infection.<br/> <br/>Use under medical supervision. </div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-v-gel-otc284365",
        "ProductName": "Himalaya V-Gel: Buy 30 gm Gel at best price in India"
    },
    "66": {
        "Category": "Ayurveda Products",
        "Id": 26,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Liv.52 DS is a double strength hepato specific formulation, designed for the treatment and management of liver disorders.<br/>Liv 52 DS syrup contains Caper Bush (<em>Himsra</em>) and Chicory (<em>Kasani</em>).<em>Himsra</em> is a potent hepatoprotective, which lowers down the level of liver enzymes (ALT and AST) and improves the functional efficiency of the liver and spleen. Flavonoids present in the <em>Himsra</em> exhibit significant antioxidant properties, as well.<em>Kasani</em> protects the liver against alcohol toxicity. It is also a potent antioxidant, which can be seen by its free radical scavenging property. <br/> <br/>Liv-52 DS Syrup helps in:<br/>Treatment of Jaundice<br/>Improves appetite, digestion and assimilation processes and promotes weight gain.  <br/>Prevention and treatment of viral hepatitis, alcoholic liver disease, and liver damage.<br/>As an adjuvant during prolonged illness and convalescence.<br/> <br/>Directions for use:<br/>Please consult your physician to prescribe the dosage that best suits the condition.<br/> <br/> <br/>Use under Medical supervision.<br/> </div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-liv.52-ds-syrup-otc210496",
        "ProductName": "Himalaya Liv.52 DS Syrup: Buy 200 ml Syrup at best price in India"
    },
    "67": {
        "Category": "Ayurveda Products",
        "Id": 27,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Tagara also known as Valeriana Wallichii, is a pure herb extract. Tagara (valeriana wallichii) rhizome promotes healthy sleep. It also calms the mind and reduces stress and anxiety by interfering with brain chemicals (GABA) that communicate information between nerve cells in the brain. Tagara also restores circadian rhythm and maintains daytime freshness.<br/> <br/>Tagara tablet are best suited for treating disturbed sleep and insomnia. This medicine comes with sedative and sleep-enhancing properties that provides natural relaxation. It can also provide relief from all nervous related activity.<br/> <br/>Directions of use:<br/>Recommended dose of Tagara is 1 tablet twice daily with water. It is suitable for long-term use. <br/> <br/>Note:<br/>These Himalaya sleeping tablet are 100% Ayurvedic and vegetarian composition. It is free from sugar, artificial colours, artificial flavours, preservatives, and gelatin.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-tagara-tablet-otc135065",
        "ProductName": "Himalaya Wellness Pure Herbs Tagara Tablet: Buy 60 tablets at best price in India"
    },
    "68": {
        "Category": "Personal Care",
        "Id": 28,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Stress Relief Massage Oil is an Ayurvedic formulation which helps relieve stress and fatigue and relaxes the body. It improves skin texture and keeps it healthy. It is a contains Winter Cherry, Country Mallow, Indian Tinospora and Indian Madder.<br/> <br/>Role of key ingredients:<br/>Winter Cherry is an effective anti-stress agent that has a mild, tranquilizing action. It is useful in the treatment of several inflammatory conditions, such as rheumatoid arthritis and lumbar pain.<br/>Indian Tinospora helps in suppressing body pain and relieves body tension.<br/>Country Mallow is found in the tropical and subtropical plains of India and Sri Lanka. The entire plant, including the leaves, stem, roots and seeds have good medicinal value. Applied topically, Country Mallow relieves various nervous disorders.<br/>Indian Madder is an antiseptic, anti-inflammatory agent that has a soothing effect on the skin.<br/> <br/>Direction for use:<br/>Apply the oil and gently massage all over the body. Leave for 10 to 15 minutes before bathing with warm water.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-stress-relief-massage-oil-otc303908",
        "ProductName": "Himalaya Wellness Stress Relief Massage Oil: Buy 200 ml Oil at best price in India"
    },
    "69": {
        "Category": "Fitness & Supplements",
        "Id": 29,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Neem Tablet contains Nimba (Azadirachta indica) leaf extract as a key ingredient.<br/> <br/>Key benefits of Himalaya Neem Tablet:<br/>Helps to fight acne by inhibiting the bacteria that causes acne growth.<br/>Helps in alleviating acne-causing bacteria-induced skin inflammation.<br/>Help alleviate the cell-damaging effects of free-radical.<br/>Assist in rejuvenating the skin and help to maintain healthy and glowing skin.<br/>Ideal for long-standing skin allergies and infections.<br/>100% vegetarian.<br/>Free from sugar, artificial colours, artificial flavours, preservatives, and gelatin.<br/> <br/>Directions for use:<br/>1 to 2 tablet twice daily or as directed by the physician.<br/> <br/>Safety Information:<br/>Pregnant or lactating women, diabetics and people with known medical conditions should consult with a physician prior to taking dietary supplements. Consult the physician if symptoms persist.<br/>Himalaya manjishtha capsule is recommended for children ages 14 and above.<br/> <br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-neem-skin-wellness-tablet-otc272303",
        "ProductName": "Himalaya Wellness Pure Herbs Neem Skin Wellness Tablet: Buy 60 tablets at best price in India"
    },
    "70": {
        "Category": "Ayurveda Products",
        "Id": 30,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Clarina Kit is a comprehensive anti-acne therapy which contains one tube each of:<br/>Clarina anti-acne face wash gel-60ml<br/>Clarina anti-acne face mask-75ml<br/>Clarina anti-acne cream-30gm<br/> <br/>Clarina anti-acne kit offers a polyherbal anti-acne regimen, recommended for comprehensive management of acne<br/> <br/>Clarina Facewash is a Anti-Acne Face Wash Gel which contains Neem, Barbados Aloe and Haldi. Neem leaves and Barbados Aloe eliminate acne-causing bacteria. Haldi has strong anti-inflammatory properties, which soothe the skin gently. The herb helps to even out skin tone and color, making it an excellent ingredient in a face wash. <br/> <br/>Clarina cream clears acne effectively and safely. Clarina cream contains Barbados Aloe (Ghrita-kumari), Almond (Vatada) and Indian Madder (Manjishtha). Clarina cream controls Acne, reduces bacterial infection related to Acne and accelerates the wound healing of acne-related lesions and scars.<br/> <br/>Clarina Anti-Acne Face Mask controls oil, cleanses pores, clears acne. It is a effective cleanser which retains hydration and reduces inflammation. It contains Barbados Aloe, Indian Willow and Turmeric.<br/> <br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-clarina-anti-acne-kit-otc131452",
        "ProductName": "Himalaya Clarina Anti-Acne Kit: Buy 1 Kit at best price in India"
    },
    "71": {
        "Category": "Winter Care",
        "Id": 31,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Bresol Tablet combats respiratory disorders. It contains following key ingredients: Turmeric (Haridra): It contains curcumin (a chemical constituent) which blocks NF-kappa B, a protein complex that is linked to allergy and asthma. Holy Basil (Tulasi): It possesses potent antihistaminic and antioxidant property. Malabar Nut (Vasaka): It is widely used as a mucolytic, which thins mucus sputum and alleviates a cough. It improves breathing in respiratory disorders. Key benefits of Himalaya Bresol Tablet: Useful in allergic rhinitis (stuffy nose). Indicated in allergic bronchitis. Useful in bronchial asthma. Helpful in Pollen allergy. Directions for use: Please consult the physician to prescribe the dosage that best suits the condition. Safety information: Pregnant, nursing women or individual taking any medications, consult the doctor before use. Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-bresol-tablet-otc131450",
        "ProductName": "Himalaya Bresol Tablet: Buy 60 tablets at best price in India"
    },
    "72": {
        "Category": "Featured",
        "Id": 32,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Anti-Hair Fall Shampoo is a breakthrough 2-in-1 formula that reduces hair fall and provides nourishment to hair shafts. It also conditions and improves your hair texture to reduce hair fall due to breakage. The herbs Butea Frondosa and Bhringaraja stimulate hair follicle growth and are effective in strengthening hair roots and controlling hair fall.<br/> <br/>Role of Key ingredients:<br/>Butea Frondosa or 'flame of the forest' is native to India and Southeast Asia. It strengthens hair and helps promote hair growth.<br/>Bhringaraja is traditionally used in Ayurveda for hair growth and hair dyeing. It nourishes the hair root, improves hair texture and reduces hair fall.<br/> <br/>Direction for use:<br/>Gently massage the shampoo into wet hair and scalp. Leave for two to three minutes, and rinse thoroughly. Repeat if necessary.<br/> <br/>Effective for all hair types. Safe to use on artificially colored or permed hair.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-anti-hair-fall-shampoo-otc326430",
        "ProductName": "Himalaya Anti Hair Fall Shampoo: Buy 400 ml Shampoo at best price in India"
    },
    "73": {
        "Category": "Featured",
        "Id": 33,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Protein Hair Cream nourishes the hair root and shaft. It is specially formulated ingredients strengthen hair, promote hair growth and leave your hair soft and shiny. Protein Hair Cream nourishes your hair with natural proteins derived from Chickpea, while Amla promotes hair growth.<br/> <br/>Role of Key ingredients:<br/>Amla, a natural hair tonic used extensively in Ayurveda, is an effective ingredient for treating the hair and scalp. It prevents dandruff, strengthens hair follicles and promotes hair growth. It also acts as an antioxidant.<br/>Chickpea, a natural source of proteins, effectively nourishes hair, making it healthy and strong.<br/> <br/>Direction for use:<br/>Massage Protein Hair Cream gently on scalp using a circular motion before and after shampooing.<br/> <br/>Best for dry, lifeless hair and hair loss. Safe to use on artificially colored or permed hair.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-protein-hair-cream-otc340550",
        "ProductName": "Himalaya Protein Hair Cream: Buy 100 ml Cream at best price in India"
    },
    "74": {
        "Category": "Ayurveda Products",
        "Id": 34,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Shigru Tablet reduces joint stiffness. It is rich in calcium, Shigru strengthens bones, improves blood circulation to the joints, and treats joint aches and pains. <br/> <br/>Himalaya Shigru Tablet helps to suppress joint inflammation and pain by targeting key enzymes that facilitate the release of pro-inflammatory chemicals in the joints. The antioxidant phytoconstituents present in Shigru alleviate gouty inflammation of the joint by inhibiting the key enzyme that is involved in excessive uric acid production. Due to its high nutritional content, Shigru nourishes body tissues, especially bones and joints.<br/>Improves blood circulation in joints.<br/> <br/>Usage:<br/>Joint pain and inflammation.<br/>As an adjuvant for gouty arthritis.<br/> <br/>Other benefits:<br/>100% vegetarian.<br/>Free from sugar, artificial colors, artificial flavors, preservatives, and gelatin.<br/> <br/>Dosage Recommendation: 1 tablet twice daily or as directed by your physician.<br/> <br/>Please inform your physician before consuming in the following situations:<br/>Pregnancy<br/>Breastfeeding<br/>Diabetes<br/>Hypertension<br/> <br/>Please consult your physician if symptoms persist.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-wellness-pure-herbs-shigru-bone-joint-wellness-tablet-otc325298",
        "ProductName": "Himalaya Wellness Pure Herbs Shigru Bone & Joint Wellness Tablet: Buy 60 tablets at best price in India"
    },
    "75": {
        "Category": "Personal Care",
        "Id": 35,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Purifying Neem Face Wash is a soap-free, herbal formulation that cleans impurities and helps clear pimples. A natural blend of Neem and Turmeric bring together their antibacterial and antifungal properties to prevent the recurrence of acne over time.<br/> <br/>Key ingredients:<br/>Neem is an excellent skin care ingredient known for its antibacterial properties. It improves general skin health and immunity, combating bacterial infections such as acne, boils and ulcers. Neem tackles bacteria from the root and prevents the recurrence of pimples and blemishes. <br/>Turmeric has been used as an antiseptic for centuries, and it is regarded as one of nature's most powerful healers. The herb helps to even out your skin tone and color, making it an excellent ingredient in a face wash. It also helps to retain the skin's elasticity, making it supple. Turmeric has strong anti-inflammatory properties, which soothe your skin.<br/> <br/>Direction for use:<br/>Moisten face, apply a small quantity of Purifying Neem Face Wash and gently work up a lather using a circular motion. Wash off and pat dry. Use twice daily.<br/> <br/>Suitable for all skin types. Best for acne-prone skin.<br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc325809",
        "ProductName": "Himalaya Herbals Purifying Neem Face Wash: Buy 100 ml Face Wash at best price in India"
    },
    "76": {
        "Category": "Winter Care",
        "Id": 36,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Chyavanaprasha is a classic recipe with authenticating herbs that promote wellness naturally. It is a combination of five tastes including sweet, sour, bitter, pungent and astringent. Himalaya Chyavanaprasha can be consumed in all seasons, as it contains ingredients, which are weather friendly, nullifying the unpleasant effects due to extreme environmental and climatic conditions. It is made in an Amalaki (Indian gooseberry base), which is the richest source of Vitamin C and antioxidants.<br/> <br/>Key benefits of Himalaya Chyavanaprasha:<br/>It helps in prevention of recurrent infections and debility.<br/>It also helps in promoting energy and fitness.<br/>Providing nourishment and wellness.<br/>It is ideal for general debility, respiratory ailments, digestive disorders, and stress-induced ailments.<br/> <br/>The direction of use:<br/>For 2-5 years: 1/4 teaspoon (3 grams approximately) once a day.<br/>For 6-11 years: 1/2 teaspoon (6 grams approximately) once a day.<br/>For 12 years and above: 1 teaspoon (12 gram approximately)once a day.<br/>Dosage can be increased based on individual tolerance, or as directed by your physician.<br/> <br/>For best results, consume half-an-hour before breakfast followed by warm water/ milk.</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-chyavanaprasha-otc333414",
        "ProductName": "Himalaya Chyavanaprasha: Buy 1 kg Paste at best price in India"
    },
    "77": {
        "Category": "Ayurveda Products",
        "Id": 37,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>The Himalaya Abana Tablet</b> helps in reducing cholesterol levels like in cases of hyperlipidemia, high cholesterol levels.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Arjuna</li></ul><ul><li>Guggul</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Reduces lipid concentration, total cholesterol and triglyceride levels</li></ul><ul><li>Helps in the management of atherosclerosis</li></ul><ul><li>Prevents oxidative damage to the heart and stabilizes blood pressure</li></ul><ul><li>Lowers triglyceride levels, total cholesterol levels and free fatty acid levels, through the breakdown of lipids in the liver</li></ul><ul><li>Increases faecal bile acid excretion</li></ul><ul><li>Inhibits the biosynthesis of hepatic cholesterol and the oxidation of LDL</li></ul><br/><b>Directions For Use:</b><br/>As directed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-abana-tablet-otc120273",
        "ProductName": "Himalaya Abana Tablet: Buy 60 tablets at best price in India"
    },
    "78": {
        "Category": "Featured",
        "Id": 38,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Renalka syrup contains a unique and effective blend of Asparagus, Indian Sarsaparilla, Small Caltrops, and Nut Grass.<br/>Asparagus possesses potent antimicrobial properties that help in fighting off infections associated with Urinary tract infections. Indian Sarsaparilla protects the kidney against harmful and toxic effects of other chemicals. Small Caltrops works as a potent diuretic and Nut Grass is a mild analgesic and has anti-inflammatory properties as well. <br/> <br/>Himalaya Renalka syrup is effective in the treatment of recurrent UTIs and helps relieve painful or burning sensations when urinating. The anti-inflammatory and analgesic properties of Renalka soothe the inflamed mucosa, and alleviate the burning sensation or pain that occurs during urination. It also normalizes the pH balance in the body while increasing healthy blood flow to the kidneys.  <br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-renalka-syrup-otc336073",
        "ProductName": "Himalaya Renalka Syrup: Buy 200 ml Syrup at best price in India"
    },
    "79": {
        "Category": "Ayurveda Products",
        "Id": 39,
        "Manufacture": "Himalaya Drug Company",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Himalaya Mentat DS syrup Channelizes mental energy and enhances memory and learning capacity. It is rich in Brahmi, Ashwagandha and Madhukaparni.<br/> <br/>Role of Key ingredients:<br/>Thyme-Leaved Gratiola (Brahmi) maintains cognitive function. Well known for its nootropic (memory enhancer) effect, the herb enhances memory and learning. It is also known to calm restlessness and is used to treat several mental disorders.<br/>Indian Pennywort (Madhukaparni) possesses antiepileptic properties and is commonly used as an adjuvant to epileptic drugs. It balances amino acid levels, which is beneficial in treating depression. It also prevents cognitive impairment.<br/>Winter Cherry (Ashvagandha) is used as a mood stabilizer in clinical conditions of anxiety and depression. Withanolides, the chemical constituents present in Winter Cherry, possess rejuvenating properties. The herb also reduces oxidative stress, which can cause mental fatigue.<br/> <br/>The natural ingredients in Mentat improves mental quotient, memory span and concentration ability. The calming effects of Mentat are beneficial in treating insomnia and convulsions. Mentat is useful as an adjuvant in the treatment of epilepsy and enuresis.<br/> <br/>Mentat is effective in<br/>Memory and learning disorders – attention fluctuation, concentration impairment, language and learning disability<br/>Behavioral disorders – hyperkinetic states, asocial behavior,temper tantrums, aggressive behavior, enuresis<br/>Attention deficit hyperactivity disorder (ADHD)<br/>Anxiety and stress-related disorders<br/>Mental fatigue<br/> <br/>Use under Medical Supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/himalaya-mentat-ds-syrup-otc325049",
        "ProductName": "Himalaya Mentat DS Syrup: Buy 100 ml Syrup at best price in India"
    },
    "80": {
        "Category": "Ayurveda Products",
        "Id": 0,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Kamdudha Ras contains Moti Pishti, Prawal Pishti, Mukta Shukti Bhasma, Kaudi Bhasma, Shankha Bhasma, Shuddha Swarn Gairik, Giloy Sat, Moti Pishti, Prawal Pishti, Mukta Shukti Bhasma, Kaudi Bhasma, Shankha Bhasma, Shuddha Swarn Gairik as the combination of an ingredient. The formulation is prepared by an elaborative method by purifying and combining the goodness of natural ingredients and It is very effective in long-lingering ailments.<br/><br/>Key benefits/uses of Kamdudha Ras:<br/>- Relieves chronic acidity, heartburn, stomach ulcers and colic pains<br/>- Used to soothe hyperacidity<br/>- Provides cooling relief in ulcers<br/>- Stimulates production of digestive enzymes which boosts the digestive system<br/><br/>Direction for use/Dosage: <br/>- Take the formulation as directed by the physician<br/><br/>Indications: <br/>- Hyperacidity, ulcers, heartburn and stomach pain <br/>- Pittavikar, amlapitta, daha, and raktapitta<br/><br/>Storage instructions:<br/>Store the formulation in cool and dry place<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-kamdudha-ras-otc387802",
        "ProductName": "Patanjali Divya Kamdudha Ras: Buy 10 gm Powder at best price in India"
    },
    "81": {
        "Category": "Ayurveda Products",
        "Id": 1,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Swasari Ras contains Mulethi, Lavang, Dalchini, Kakdasingi, Rudanti, Sounth, Chhoti Pipal, Abhrak Bhasma, Mukta Shukti Bhasma, and Kapardak Bhasma as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Swasari Ras:<br/>- Removes the inflammation of bronchioles &amp; bronchi and treats chronic diseases like bronchitis<br/>- Promotes the immune power of lungs<br/>- Cures cough, coryza, cold, asthma, sneezing<br/>- Cures heaviness in the head and sinusitis<br/>- Acts as a tonic for lungs to nourish them<br/>- Removes the infection from bronchi and bronchioles<br/><br/>Directions for use/Dosage:<br/>- Consume Patanjali Divya Swasari Ras as directed by the physician<br/><br/>Indication:<br/>Cough, cold, asthma<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-swasari-ras-otc387990",
        "ProductName": "Patanjali Divya Swasari Ras: Buy 10 gm Powder at best price in India"
    },
    "82": {
        "Category": "Health Conditions",
        "Id": 2,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Divya Mukta Shukti Bhasma contains MuktaShukti, Nimbu Ras, and GhritKumari as a combination of ingredients.<br/>- A time-tested remedy for acidity, colic problems, and resulting fever. <br/>- An herbal formulation which addresses the root causes but has no harmful side effects, thus making it safe to take with other medications<br/><br/>Key benefits/uses of Divya Mukta Shukti Bhasma :<br/>- Gives quick and effective relief from acidity<br/>- Soothes stomach and boost your digestive system<br/><br/>Direction for use/Dosage: <br/>- Take as directed by the physician<br/><br/>Indications: <br/>- Hyperacidity and gastric pain<br/><br/>Storage instructions: <br/>- Store the formulation in cool and dry place<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children<br/><br/></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-mukta-shukti-bhasma-otc387922",
        "ProductName": "Patanjali Divya Mukta Shukti Bhasma: Buy 10 gm Powder at best price in India"
    },
    "83": {
        "Category": "Health Conditions",
        "Id": 5,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Patanjali Divya Dhara</b> is a specially formulated herbal remedy which is used for the treatment of various health complications. It is primarily used as a pain reliever and is beneficial for headache, toothache, ear diseases and can be used for the treatment of digestive disorders including dyspepsia and indigestion. Excellent source to treat respiratory disorders such as cough, asthma and relieves breathing difficulties. Contains anti-spasm properties which reduces muscle spasms, convulsions and treats involuntary jerking of limbs and fingers. <br/><br/><b>Key Ingredients:</b><br/><ul><li>Peppermint (Mentha piperita)</li></ul><ul><li>Camphor or Desi Kapur (Cinnamomum camphora)</li></ul><ul><li>Ajwain or Bishop's weed (Trachyspermum ammi)</li></ul><ul><li>Laung or Clove Oil (Syzygium aromaticum)</li></ul><ul><li>Eucalyptus oil (Eucalyptus globulus)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Primarily used for the treatment of various kinds of body pains</li></ul><ul><li>Treats cough and cold conditions and provides relief from nasal congestion</li></ul><ul><li>Excellent remedy for the treatment of sore throat and bacterial infections</li></ul><ul><li>Stomach disorders such as gas, flatulence and colic pain is effectively treated</li></ul><br/>Directions For Use:<br/>It should be gently rolled and rubbed onto the area of discomfort directly. For toothache some drops can be applied to the aching tooth with the help of fingers or cotton. For internal pains and stresses mix some drops with water. The quantity or number of drops varies as per the problem. Now heat the water and patient can inhale the steam to get internal relief.<br/><br/>Safety Information:<br/>Read the label carefully before use<br/>Do not exceed the recommended dose <br/>Keep out of the reach of children <br/>Store in a cool dry place away from direct sunlight and heat</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-dhara-otc402476",
        "ProductName": "Patanjali Divya Dhara: Buy 10 ml Oil at best price in India"
    },
    "84": {
        "Category": "Ayurveda Products",
        "Id": 6,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Ashwagandha Churna contains Ashwagandha as an active ingredient. Ashwagandha Churna is used as a rejuvenating agent, it controls depression and relieves stress.<br/><br/>Key benefits/uses of Divya Ashwagandha Churna:<br/>- Helps you get relief from stress and boosts your health and immunity<br/>- Helps you recover from anxiety and depression, boosts your brain and nervous system and helps regain strength<br/>- Has antioxidant properties which help in quick recovery from ailments and revitalises body<br/>- Used for the holistic cure of body and mind<br/>- Improves memory and helps to treat different types of diseases like Parkinson’s disease, mental disorders and depression, etc.<br/><br/>Directions for use/Dosage:<br/>- Take this churna 1 teaspoon with warm water, twice a day or as directed by the physician<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-ashwagandha-churna-otc387793",
        "ProductName": "Patanjali Divya Ashwagandha Churna: Buy 100 gm Powder at best price in India"
    },
    "85": {
        "Category": "Ayurveda Products",
        "Id": 7,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Medha Vati-Extra Power contains Brahmi, Shankhpushpi, Ghodbach, Ustukhuddus, Ashvagandha, Malkangani, Saunf, Phushkarmool, and Ganjwa as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Medha Vati-Extra Power:<br/>- Acts as a memory booster, antioxidant, adaptogenic, anti-inflammatory, sedative, anti-stress, antidepressant, anxiolytic, neuroprotective, carminative, and stomachic<br/>- Cures cerebral complaints like memory weakness, headache, sleeplessness, irritable temperament, epilepsy, and used as a brain tonic<br/><br/>Directions for use/Dosage:<br/>- Consume Patanjali Divya Medha Vati-Extra Power as directed by the physician<br/><br/>Indications:<br/>Weak memory, depression, headache, sleeplessness, epilepsy, stomach gas, stomach ache etc.<br/><br/>Safety information:<br/><br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-medha-vati-extra-power-otc388034",
        "ProductName": "Patanjali Divya Medha Vati-Extra Power: Buy 40 gm Tablet at best price in India"
    },
    "86": {
        "Category": "Ayurveda Products",
        "Id": 8,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Arjun Kwath contains Arjuna Chal (Terminalia arjuna) as active ingredient. <br/><br/>Key benefits/uses of Patanjali Divya Arjun Kwath:<br/>Role of active ingredient:<br/>- Used for the treatment of the heart disorders and blood vessels related problems (cardiovascular disease)<br/>- Helps to treat heart disease, chest pain, high blood pressure, and high cholesterol<br/>- Also useful in the treatment of mitral stenosis, arterial infraction, and high cholesterol <br/>- Delivers nourishment to the heart muscles and tissues and helps to function it properly<br/><br/>Directions for use/Dosage:<br/>Take 5 gm or 1 teaspoon kwath with boiled water, twice a day or as directed by the physician<br/><br/>Indication:<br/>Cardiac disorders<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-arjun-kwath-otc387769",
        "ProductName": "Patanjali Divya Arjun Kwath: Buy 100 gm Powder at best price in India"
    },
    "87": {
        "Category": "Ayurveda Products",
        "Id": 9,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Churna contains Gulab Phool, Kala Dana, Sounf, Sanay, Sounth, Chhoti Harad, and Sendha Namak as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Churna:<br/>- Improves digestion, increases appetite and reduces gas formation<br/>- Gives relief from constipation<br/>- Activates intestines and gently cleanses the intestinal walls<br/>- Has laxative and purgative action and helps in total evacuation of bowel<br/>- Gives relief from stomach ache, gas, heaviness, and nausea<br/>- Helps in eases evacuation in piles and fissure<br/><br/>Directions for use/Dosage:<br/>- Take 2-5 g at bedtime in the evening and before breakfast in the morning with lukewarm water or as directed by the physician<br/><br/>Indications:<br/>Indigestion, gas, constipation, stomachache, nausea etc.<br/><br/>Safety information:<br/><br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-churna-otc329145",
        "ProductName": "Patanjali Divya Churna: Buy 100 gm Powder at best price in India"
    },
    "88": {
        "Category": "Ayurveda Products",
        "Id": 10,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Patanjali Ayurveda Nimb Ghan Vati</b> helps in the treatment of various skin disorders.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Neem</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Helps to purify the blood</li></ul><ul><li>Removes toxins and impurities from the blood</li></ul><ul><li>Helps prevent pimples or acne</li></ul><ul><li>Makes skin clear</li></ul><br/><b>Directions For Use:</b><br/>As directed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-neem-ghanvati-otc328535",
        "ProductName": "Patanjali Ayurveda Neem Ghanvati: Buy 40 gm Tablet at best price in India"
    },
    "89": {
        "Category": "Winter Care",
        "Id": 11,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Honey has fructose, minerals, vitamins and natural nutritious elements. <br/><br/>Key Benefits of Patanjali Honey:<br/>It is a good quality anti septic and blood refi ner. <br/>Its regular use treats cough, cold and fever. <br/>Patanjali honey for sweetness and remain healthy forever. <br/><br/>Note: Different seasons also bring changes in the state of pure honey hence, if Patanjali honey also gets deposited, use it without any apprehension with happiness. <br/>Use honey with `roti`, milk, gruel and other edible items for sweetness. Most of the ayurvedic medicines are taken with honey.<br/><br/><br/>Use under Medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-honey-otc328153",
        "ProductName": "Patanjali Ayurveda Honey: Buy 1 kg Liquid at best price in India"
    },
    "90": {
        "Category": "Ayurveda Products",
        "Id": 12,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Swarn Makshik Bhasma contains Swarna Makshik and Sendha namak as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Swarn Makshik Bhasma:<br/>- Acts as an aphrodisiac and has anti ageing properties<br/>- Beneficial in Iron deficiency, anaemia and in jaundice<br/>- Useful in the treatment of diabetes, helminthiasis (Intestinal worms), eye diseases, urinary tract disorders, haemorrhoids, skin diseases, anorexia, insomnia, inflammation, poison, etc.<br/>- Beneficial in rheumatic disorders<br/>- Repairs the damage tissues of the joints and muscular system<br/><br/>Directions for use/Dosage:<br/>- Consume Patanjali Divya Swarn Makshik Bhasma as directed by the physician<br/><br/>Indications:<br/>- Loss of libido, Iron deficiency, anaemia, jaundice, diabetes, rheumatic disorders, eye disease, haemorrhoids, skin diseases etc.<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-swarn-makshik-bhasma-otc387986",
        "ProductName": "Patanjali Divya Swarn Makshik Bhasma: Buy 5 gm Powder at best price in India"
    },
    "91": {
        "Category": "Fitness & Supplements",
        "Id": 13,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Giloy Juice contatins Giloy (tinospora cordifolia) 9.6 ml.Patanjali Giloy Juice is very useful in fever, Rheumatism, Gout, Jaundice, Anaemia, Urinary Disorders &amp; Immuno Deficiency.<br/> <br/>Direction for use: Mix 15-30 ml of Giloy juice with water &amp; consume empty stomach in the morning and evening or as directed by physician.<br/><br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-giloy-juice-otc328545",
        "ProductName": "Patanjali Ayurveda Giloy Juice: Buy 500 ml Liquid at best price in India"
    },
    "92": {
        "Category": "Ayurveda Products",
        "Id": 14,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Brahmi Churna contains Brahmi as active ingredient.<br/><br/>Key benefits/uses of Patanjali Divya Brahmi Churna:<br/>- Decreases anxiety, restlessness, and senility<br/>- Improves intellect, consciousness, and mental acuity<br/>- Supports mental clarity, focus, cognitive capability<br/>- Acts as nervous system tonic<br/>- Improves memory, mental clarity and longevity<br/>- Calms the mind and promotes relaxation<br/><br/>Directions for use/Dosage:<br/>- 1 Teaspoon (5 gm) with milk or water or as directed by the physician<br/><br/>Indications:<br/>Anxiety, weak memory, stress, restlessness etc.<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-brahmi-churna-otc387838",
        "ProductName": "Patanjali Divya Brahmi Churna: Buy 100 gm Powder at best price in India"
    },
    "93": {
        "Category": "Health Conditions",
        "Id": 15,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Ayurveda Divya Giloy Ghan Vati contains Giloy (Tinospora cordifolia) as active ingredient.<br/><br/>Key benefits/uses of Patanjali Ayurveda Divya Giloy Ghanvati:<br/><strong>-</strong> Used for the treatment of general weakness, recurrent infections, immuno-deficiency disorders, appetite loss, chronic constipation with mucus in the stool, common cold, high cholesterol, hepatitis, jaundice and other liver disorders and various autoimmune disorders<br/><strong>-</strong> Also beneficial in dengue, chicken guinea, skin and urinary disorders<br/><br/>Directions for use/Dosage:<br/><strong>-</strong> Above 12 years: 1 tablet twice daily<br/><strong>-</strong> Below 12 years: Half tablet twice daily or as directed by the physician<br/><br/><strong>Indications:</strong><br/>General weakness, common cold, weak immunity, jaundice, liver disorders, dengue etc.<br/><br/><strong>Safety information:</strong><br/><strong>- </strong>Read the label carefully before use<br/><strong>-</strong> Do not exceed the recommended dose<br/><strong>-</strong> Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-giloy-ghan-vati-otc324816",
        "ProductName": "Patanjali Ayurveda Giloy Ghan Vati: Buy 40 gm Tablet at best price in India"
    },
    "94": {
        "Category": "Fitness & Supplements",
        "Id": 16,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Amla juice contains Indian Gooseberry or Amla. Amla (Indian Gooseberry) is regarded as one of the best rejuvenators known to man. It is the richest natural source of Vitamin C one can find. The strong levels of Vitamin C make amla a powerful anti-oxidant, which helps fight ions in the body that cause ageing and degenerate cells. It is an extremely mild laxative that helps in constipation and regulating bowel movements. It nourishes the roots and helps prevent premature graying, as well as hair loss. It has also been shown that Amla is very good for purifying the blood which helps improve the skin. <br/><br/>Key Benefits of Patanjali Amla juice<br/>1.Rich source of Vitamin C and contains 80% water, protein, minerals, fiber as well as carbohydrates.<br/>2.Reduce obesity and prevents heart attack as it helps in reducing the cholesterol levels.<br/>3.Natural oxidant that flushes out toxins from body, fortifies our liver, nourishes our brain, strengthens our lung, improves muscle tone, conditions our urinary system, balances stomach acids and is a very good body coolant.<br/>4.Promotes hair pigmentation and hair growth. It also strengthens roots of hair thus preventing hair loss.<br/>5.Improves eyesight.<br/>6.Exhibits anti aging properties by decreasing the levels of free radicals in our body.<br/>7.Beneficial in treating all kinds of skin ailments.<br/><br/>Directions of use:<br/>20ml taken with equal amount of water twice a day. The juice should be taken on an empty stomach. <br/><br/>Use under Medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-amla-juice-otc325277",
        "ProductName": "Patanjali Ayurveda Amla Juice: Buy 1000 ml Liquid at best price in India"
    },
    "95": {
        "Category": "Winter Care",
        "Id": 18,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Honey has fructose, minerals, vitamins and natural nutritious elements. <br/><br/>Key Benefits of Patanjali Honey:<br/>It is a good quality anti septic and blood refi ner. <br/>Its regular use treats cough, cold and fever. <br/>Patanjali honey for sweetness and remain healthy forever. <br/><br/>Note: Different seasons also bring changes in the state of pure honey hence, if Patanjali honey also gets deposited, use it without any apprehension with happiness. <br/>Use honey with `roti`, milk, gruel and other edible items for sweetness. Most of the ayurvedic medicines are taken with honey.<br/><br/><br/>Use under Medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-honey-otc328148",
        "ProductName": "Patanjali Ayurveda Honey: Buy 500 gm Liquid at best price in India"
    },
    "96": {
        "Category": "Health Conditions",
        "Id": 19,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Amla Churna contains Amla as active ingredient.<br/><br/>Key benefits/uses of Divya Amla Churna:<br/>Role of active ingredient:<br/>Amla:<br/>- Fights against heart diseases increase diuretic activity and metabolic activity<br/>- Helps to reduces blood sugar and boosts immunity<br/>- Boosts digestion and reduces constipation <br/>- Helps to cures eye problems <br/>- Reduces hair fall &amp; cures cold <br/>- Possess anti-oxidant properties<br/><br/>Directions for use/Dosage:<br/>- Take 2-5g twice a day with lukewarm water or honey or as directed by the physician<br/><br/>Indications:<br/>Hyperglycemia, weak immunity, constipation, indigestion, hair fall, cold etc.<br/><br/>Safety information:<br/>- Do not exceed the recommended dose<br/>- Read the label carefully before use <br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-amla-churna-otc387761",
        "ProductName": "Patanjali Divya Amla Churna: Buy 100 gm Powder at best price in India"
    },
    "97": {
        "Category": "Ayurveda Products",
        "Id": 20,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Ashwagandha capsule is a combination of Ashwagandha herbs that help to increase your energy. Ashwagandha is a traditional herb that has been used to increase brain power. It is a natural tonic for overall improvement of the health. <br/>Ashwagandha is known as Indian ginseng and it is known to provide energy and strength to all body parts. It also acts as a sexual boosting herb and provides relief from sexual <br/><br/>Other Benefits of Patanjali Ashwagandha:<br/>Remedy for male sexual organs as it helps to increase male libido.<br/>Immunity enhancer as it helps to boost up immunity by increasing the energy of the body cells.<br/>Possess anti-inflammatory properties and it helps to prevent inflammatory diseases such as arthritis, sciatica, etc.<br/><br/>Use under Medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-ashvagandha-capsule-otc501407",
        "ProductName": "Patanjali Ayurveda Ashvagandha Capsule: Buy 20 capsules at best price in India"
    },
    "98": {
        "Category": "Ayurveda Products",
        "Id": 21,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Shilajeet Rasayan Vati contains Shilajit, Ashwangdha, Bhumi Amla, Harar, Baheda, and Amla as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Shilajeet Rasayan Vati:<br/>- Used for the treatment of erectile dysfunction in men and various sexual disorder in the male reproductive system<br/>- Acts as an aphrodisiac and increases the vigour and sexual stamina in men<br/>- Beneficial for the nervous system diseases of male reproductive organs and urinary system<br/>- Improves the quality of the sperms and treats the male infertility<br/><br/>Directions for use/Dosage:<br/>- Two pills of Patanjali Divya Shilajeet Rasayana 2 or 3 times a day with milk or lukewarm water after a meal or as directed by the physician<br/><br/>Indications:<br/>- Erectile dysfunction, male infertility and other sexual disorders<br/><br/>Recommendation:<br/>For men only<br/><br/>Safety information:<br/>- Read the label carefully before use - Do not exceed the recommended dose - Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-shilajeet-rasayan-vati-otc329133",
        "ProductName": "Patanjali Divya Shilajeet Rasayan Vati: Buy 40 gm Tablet at best price in India"
    },
    "99": {
        "Category": "Health Conditions",
        "Id": 23,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Drishti Eye Drops is a strong antiseptic solution, which soothes and heals the eyes. It gives cooling effects to the eyes without any side effects to the eyes. <br/><br/>Key Ingredients: <br/>onion, ginger and juice with honey. The eye solution gives relief to tired and strained eyes. The drop can be used to clean dust and dirt and cool the eyes in hot sultry weather. <br/><br/>Regular use of Patanjali Drishti Eye Drops prevents age related eye conditions like cataract, glaucoma, low vision etc. It gives improved vision quality to those with weak vision problems. The antibiotic properties of the solution help to keep bacteria, infections, or inflammation free eyes. Drishti Eye Drops keep the eyes healthy and young. <br/><br/>Dosage: <br/>As Directed by the Physician. <br/><br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-drishti-eye-drop-otc500921",
        "ProductName": "Patanjali Ayurveda Drishti Eye Drop: Buy 10 ml Eye Drop at best price in India"
    },
    "100": {
        "Category": "Ayurveda Products",
        "Id": 24,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Godhan Ark contains Gomutra Ark as an active ingredient.<br/><br/>Key benefits/uses of Patanjali Divya Godhan Ark:<br/>- Useful in general debility, obesity, abdominal diseases, skin diseases, asthma and cough<br/>- Gives relief from problems of liver and stomach<br/>- Cures eczema, controls diabetes and cancer<br/>- Has detoxifying properties which cleanses body system of toxins accumulated from the environment or unhealthy lifestyle<br/><br/>Directions for use/Dosage:<br/>- Take 10-20 ml with equal quantity of water twice a day on empty stomach or as directed by the physician<br/><br/>Indications:<br/>- Obesity, abdominal diseases, skin diseases, asthma, liver &amp; stomach problems etc.<br/><br/>Safety information:<br/><br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-godhan-ark-otc387915",
        "ProductName": "Patanjali Divya Godhan Ark: Buy 450 ml Liquid at best price in India"
    },
    "101": {
        "Category": "Winter Care",
        "Id": 25,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Patanjali Ayurveda Tulsi Ghan Vati</b> is very beneficial for the health and immunity of the body. This is helpful in fever, dengue, cold, and chicken guinea.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Tulsi</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Reduces the pain in the body due to fever</li></ul><ul><li>Helpful in relieving nasal congestion, sneezing, and blockage of nose</li></ul><ul><li>Improves the immunity of the body</li></ul><ul><li>Helps in maintaining the overall health</li></ul><br/><b>Directions For Use:</b><br/>As directed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-tulsi-ghanvati-otc328568",
        "ProductName": "Patanjali Ayurveda Tulsi Ghanvati: Buy 40 gm Tablet at best price in India"
    },
    "102": {
        "Category": "Ayurveda Products",
        "Id": 26,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Patanjali Ayurveda Dant Kanti Advanced Dental Cream</b> has a matchless formula of 26 priceless herbs which Improves oral health and offers dental protection to dental beauty.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Lavang</li></ul><ul><li>Tomar</li></ul><ul><li>Akarkara</li></ul><ul><li>Babool</li></ul><ul><li>Triphla</li></ul><ul><li>Khadir</li></ul><ul><li>Pudina Sat</li></ul><ul><li>Ajwain Sat</li></ul><ul><li>Kapoor sat</li></ul><ul><li>Neem</li></ul><ul><li>Vajradanti</li></ul><ul><li>Meswak</li></ul><ul><li>Anar Chilka</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Helps protect against cavities and decay</li></ul><ul><li>Fights germs</li></ul><ul><li>Protects and strengthens gums</li></ul><ul><li>Keeps mouth fresh for long</li></ul><ul><li>Maintains oral hygiene</li></ul><br/><b>Directions For Use:</b><br/><ul><li>Brush thoroughly after meals or at least twice a day till symptoms subside or as directed by a dentist or physician</li></ul><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-dant-kanti-advanced-dental-cream-otc328581",
        "ProductName": "Patanjali Ayurveda Dant Kanti Advanced Dental Cream: Buy 100 gm Toothpaste at best price in India"
    },
    "103": {
        "Category": "Health Conditions",
        "Id": 27,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Amla Rasayan contains Amla dry and fresh Amla as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Amla Rasayan:<br/>- The formulation is useful in hyperacidity, weakness of eyesight, hair fall, general debility, chronic constipation etc. <br/>- Cures cough and cold<br/>- Fights against heart diseases, increase diuretic activity, and metabolic activity<br/>- Boosts the immunity of the body<br/><br/>Directions for use/Dosage:<br/>- Take 2-3 g of Patanjali Divya Amla Rasayan twice daily on empty stomach with water/honey or as directed by the physician<br/><br/>Indications:<br/>- Hyperacidity, weak eyesight, hair fall, general debility, constipation, cough, cold, heart diseases, weak immunity etc.<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-amla-rasayan-otc387865",
        "ProductName": "Patanjali Divya Amla Rasayan: Buy 100 gm Powder at best price in India"
    },
    "104": {
        "Category": "Health Conditions",
        "Id": 28,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Pure kesar that is found in the Mother Nature is known for its positive impact on the entire body. It is particularly beneficial for the skin and the digestive system. That is why it has been used in the preparation of Patanjali kesar. It is a wonderful product that enhances taste of dishes and energizes the entire body.<br/>Key Benefits:<br/>It is good for the digestive system.<br/>It soothes down any discomfort caused due to intake of spicy, hot and pungent foods.<br/>It relieves stomach gas.<br/>It improves natural glow on the skin.<br/>It also improves skin complexion and makes it fairer.<br/><br/><br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-kesar-otc323572",
        "ProductName": "Patanjali Ayurveda Kesar: Buy 1 gm Granules at best price in India"
    },
    "105": {
        "Category": "Ayurveda Products",
        "Id": 29,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">PATANJALI AMLA CANDY<br/>We found all the good qualities of Amla. Amla Candy helps in maintaining good health and cures diseases of patients.  <br/>Dosage and method of usage. Amla candy is the refined state of Amla Murabba. It can be taken as Amla Murabba. In our country, we have old tradition of presenting edibles and drinks before any guest. Keeping this tradition in mind, we are preparing candy and jellies of `aola`, carrot, vine fruit and apples. <br/>The process is based on age-old formulae been prepared by the seers and the latest technology. The objective is to give health along with the taste to the people.<br/> <br/> <br/>Use under medical supervision.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-amla-candy-otc328546",
        "ProductName": "Patanjali Ayurveda Amla Candy: Buy 500 gm Candy at best price in India"
    },
    "106": {
        "Category": "Ayurveda Products",
        "Id": 30,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Sarvakalp Kwath contains Punarnava, Bhumi Amla, and Makoy as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Sarvakalp Kwath:<br/>- Reduces stress on the hepatic portal system<br/>- Improves digestion system<br/>- Reduces the skin problems<br/>- Cures enlargement, jaundice, oedema, swelling of liver etc.<br/>- Activates the liver and makes it healthy<br/>- Cures chronic stages of hepatitis B and C<br/><br/>Directions for use/Dosage:<br/>- Take Patanjali Divya Sarvakalp Kwath as directed by the physician<br/><br/>Indication:<br/>- Liver problems including enlargement, jaundice, swelling, other problems like indigestion, skin problems etc.<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children<br/><br/></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-sarvakalp-kwath-otc387963",
        "ProductName": "Patanjali Divya Sarvakalp Kwath: Buy 100 gm Powder at best price in India"
    },
    "107": {
        "Category": "Ayurveda Products",
        "Id": 31,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Shilajit provides strength and energy. This eradicates sexual weakness, Gout (joint pains or Rheumatiod), diseases related to kapha (Asthma and allergy), semen defi ciency, urine and bone- weakness, diabetes etc. problems both in men and women and benefi cial for providing vigorous energy. <br/> <br/><strong>DOSAGE AND METHOD OF USAGE</strong>: 1-1 to 2-2 capsules with milk should be taken every day in the morning and evening, after having Tiffi n or meal. If high blood pressure problem is there, Shilajit should be taken in a small quantity or take as per the suggestion of the physician.<br/> <br/><strong>INDICATIONS</strong>: Sexual weekness,UTI, diabetes, joints pain.</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-shilajit-capsule-otc323577",
        "ProductName": "Patanjali Ayurveda Shilajit Capsule: Buy 20 capsules at best price in India"
    },
    "108": {
        "Category": "Ayurveda Products",
        "Id": 32,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Arogyavardhini Vati contains Shudha Mercury, ShudhaGandhak, LouhBhasma, AbhrakBhasma, TamraBhasma, ShudhaShilajeet, Shudha Guggul, ChitrakMool, Kutki, Neem Patra Ras, Harad, Baheda and Amla as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Arogyavardhini Vati:<br/>- Maintains and balances the liver function in our body<br/>- Increase the digestive system in our body<br/>- Useful for skin problems and it helps to reduce the skin disorder easily<br/>- Remove the oily skin and make your skin glowing<br/><br/>Directions for use/Dosage:<br/>Take 1-2 tablets, twice a day, before or after the food or as directed by the physician.<br/><br/>Safety information:<br/>- Read the label carefully before use <br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-arogyavardhini-vati-otc387775",
        "ProductName": "Patanjali Divya Arogyavardhini Vati: Buy 40 gm Tablet at best price in India"
    },
    "109": {
        "Category": "Winter Care",
        "Id": 33,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Ayurveda Balm contains Gandhpurataila (Gaultheria fragrantissima), Pudina satva (Menthe Piperita), and Neelgiritaila (Eucalyptus globulus) as active ingredients. Patanjali Balm provides relief from aches and pains.<br/><br/>Key benefits/uses of Patanjali Ayurveda Balm:<br/>Role of active ingredients:<br/>- Gandhpurataila (Gaultheria fragrantissima): Used to relieve spasm of involuntary muscle, acts as an anti-inflammatory, and gives relief in pain and exhibits antiarthritic, antiseptic and astringent<br/>- Pudina sat (Mentha piperita): Gives a cooling sensation and has a calming effect on the body, which can relieve sore muscles when used topically<br/>- Neelgiri tail (Eucalyptus globulus): Has anti-inflammatory properties that help ease muscle &amp; joint pain and also helps to reduce pain, inflammation and stiffness<br/><br/>Directions for use/Dosage:<br/>Gently apply sufficient quantity on the affected area or as directed<br/><br/>Safety information:<br/>- For external use only<br/>- Read the label carefully before use<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-balm-otc501432",
        "ProductName": "Patanjali Ayurveda Balm: Buy 25 gm Balm at best price in India"
    },
    "110": {
        "Category": "Winter Care",
        "Id": 34,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Chyawanprash is an ancient ayurvedic herbal formulation with many health benefits. This special chyawanprash is prepared with pure and organic natural herbs and spices in the right proportion. Special Chyawanprash strengthens the natural defense of the body against infections and diseases. It nourishes and revitalizes the whole body. It is also known as the brain tonic as it improves learning, cognition and memory. This ayurvedic tonic is a great aid in respiratory illness and is highly effective in cold, cough, fever and asthma. <br/><br/>Patanjali  chyawanprash stimulates appetite and is good remedy for anemia. Antioxidant rich tonic keeps the heart and body healthy and young. It is highly beneficial against degenerative diseases like diabetes, arthritis, dementia, etc. It aids in the digestion of food and absorption of nutrients. Chyawanprash purifies blood and strengthens the functioning of the liver. The chyawanprash is rich in health benefiting vitamins and minerals that helps to build strong bones and muscles. Patanjali Chyawanprash enhances the overall quality of life.<br/>Key Benefits<br/>Development of Brain<br/>Boosts Immune System<br/>Purifies &amp; Eliminates Toxins<br/>Increases Energy &amp; Vitality<br/>Anti-Ageing Tonic<br/><br/>Use under Medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-chyawanprash-otc323595",
        "ProductName": "Patanjali Ayurveda Chyawanprash: Buy 1000 gm Paste at best price in India"
    },
    "111": {
        "Category": "Ayurveda Products",
        "Id": 35,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Patanjali Divya Mukta Vati Extra Power</strong> contains Ganjwa, Brahmi, Shankpushpi, Ghorbach, Ashwangandha, Malkangini, Sounf, Pushkarmool etc. as active ingredients.<br/><br/><strong>Key benefits/uses of Patanjali Divya Mukta Vati Extra Power:</strong><br/>- Acts as heart tonic as it provides relief from heart-related disorders and promotes normal functioning of the heart<br/>- Cures high blood pressure or heart disease caused by the disorder of the kidneys or cholesterol, anxiety, stress or any other reason which is hereditary etc. <br/>- Used for the treatment of high blood pressure<br/>- Builds up the immune system<br/>- Provides relief in various type of coughs like dry and wet cough<br/>- Helps in maintaining a healthy digestive system<br/><br/><strong>Directions for use/Dosage:</strong><br/>Consume Patanjali Divya Mukta Vati Extra Power as directed by the physician<br/><br/><strong>Indications:</strong><br/>Heart-related disorders, stress, anxiety, disorders of the kidney, weak immunity, cough, indigestion etc.<br/><br/><strong>Safety information:<br/></strong>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-mukta-vati-extra-power-otc326421",
        "ProductName": "Patanjali Divya Mukta Vati Extra Power: Buy 120 tablets at best price in India"
    },
    "112": {
        "Category": "Personal Care",
        "Id": 36,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Patanjali Ayurveda Coconut Oil</b> has the goodness of coconut oil and is very helpful for good health of hair. Useful in hair fall, dry hair, damaged hair, and eczema.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Coconut</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Helps to moisturize the scalp</li></ul><ul><li>Nourishes the hairs to protect it from further damages</li></ul><ul><li>Helps in strengthening the hair from the roots and also adds shine</li></ul><ul><li>Reduces hair fall</li></ul><ul><li>Helps to calm eczema</li></ul><ul><li>Reduces stretch marks and makes the skin beautiful</li></ul><br/><b>Directions For Use:</b><br/>Apply oil on the roots and scalp area with the tips of your fingers<br/><br/><b>Safety Information:</b><br/><ul><li>For topical use only</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of reach and sight of children</li></ul><ul><li>Store the formulation in cool and dry place</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-coconut-oil-otc325958",
        "ProductName": "Patanjali Ayurveda Coconut Oil: Buy 200 ml Oil at best price in India"
    },
    "113": {
        "Category": "Ayurveda Products",
        "Id": 37,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Chitrakadi Vati contains Chitrak Mool Chhal, Pipla Mool, Yav Khashar, Sindha Namak, Sochar Namak, Kala Namak, SamundraNamak, Sambhar Namak, Sounth, Kali Marich, Pipali Choti, Hing, Ajmod, Chabya and Sajjishar as active ingredients.<br/><br/>Key benefits and uses of Patanjali Divya Chitrakadi Vati:<br/>- Useful in the treatment of stomach ailments including gastric trouble, indigestion, flatulence and various digestion disorders<br/><br/>Directions for use/Dosage:<br/>- Take 1-2 tablets of Patanjali Divya Chitrakadi twice a day after meals with water or as directed by the physician<br/><br/>Indications:<br/>Stomach problems including indigestion, gastric problems etc.<br/><br/>Safety information:<br/><br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-chitrakadi-vati-otc387849",
        "ProductName": "Patanjali Divya Chitrakadi Vati: Buy 60 tablets at best price in India"
    },
    "114": {
        "Category": "Ayurveda Products",
        "Id": 38,
        "Manufacture": "Patanjali Divya Pharmacy",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Divya Gashar Churna contains Ajawain, Kali Mirch, Kala Namak, Choti Harad, Meetha Soda, Nausadar, Heeng (Shudh), Nimbu Satva and Jeera as active ingredients.<br/><br/>Key benefits/uses of Patanjali Divya Gashar Churna:<br/>- Used for the digestion of food and it helps to relieve acidity and heartburn<br/>- Promotes digestion of food and gives relief from gastrointestinal disorders<br/>- Aids to increase the appetite and promotes healing of gastric ulcers<br/>- Useful for the treatment of constipation and diarrhoea<br/>- Prevents formation of gas and reduces the heaviness of the abdomen<br/><br/>Directions for use/Dosage:<br/>- Take 1-2 g of Patanjali Divya Gashar Churna twice or thrice daily after meals with water or as directed by the physician<br/><br/>Indications:<br/>- Acidity, heartburn, gastrointestinal disorders, loss of appetite, gastric ulcers, constipation, diarrhoea, gas etc.<br/><br/>Safety information:<br/><br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-divya-gashar-churna-otc387906",
        "ProductName": "Patanjali Divya Gashar Churna: Buy 100 gm Powder at best price in India"
    },
    "115": {
        "Category": "Fitness & Supplements",
        "Id": 39,
        "Manufacture": "Patanjali Ayurved Limited",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Patanjali Ayurveda Lohasava contains Harad Chilka, Amla Dry, Baheda Fruit Rind, Lohasav Prakshep (Sfg), Saunth, Black Pepper(G), Pipal, Ajmod, Nagar Motha, Chitrak Mool, Vindinga, Loha Bhasm, Dhataki Pushp, Gud and Honey (Raw) as the combination of ingredients. It contains naturally processed Iron.<br/><br/>Key benefits/uses of Patanjali Ayurveda Lohasava: <br/>- Used in the treatment of anemia<br/>- Used to improve digestion strength and metabolism<br/>- Used in treating inflammatory conditions, relieves pain and inflammation of piles<br/>- Used extensively in the treatment of many skin disorders, used in cardiac disorder, arrhythmia<br/><br/>Direction for use/Dosage:<br/>- Take 15-30 ml of Patanjali Ayurveda Lohasava with the equal amount of water after meals twice a day or as directed by the physician<br/><br/>Indications: <br/>- Anaemia, pain, piles, inflammation<br/><br/>Storage instructions:<br/>- Store the formulation in cool and dry place<br/><br/>Safety information:<br/>- Read the label carefully before use<br/>- Do not exceed the recommended dose<br/>- Keep out of the reach and sight of children<br/><br/><br/></div>",
        "ProductLink": "https://www.1mg.com/otc/patanjali-ayurveda-lohasava-otc328526",
        "ProductName": "Patanjali Ayurveda Lohasava: Buy 450 ml Liquid at best price in India"
    },
    "116": {
        "Category": "Ayurveda Products",
        "Id": 0,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Green Tea</b> is an antioxidant and helps in weight management. Helps in cases of obesity, anti-aging and high cholesterol.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Herbal tea leaves</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Aids in effective weight loss</li></ul><ul><li>Improves the metabolism</li></ul><ul><li>Prevents premature ageing of the skin</li></ul><ul><li>Helps in maintaining a healthy cholesterol level</li></ul><br/><b>Directions for Use:</b><br/>Twice every day – morning and evening or as directed by physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-green-tea-classic-otc343265",
        "ProductName": "Organic India Tulsi Green Tea Classic: Buy 25 tea bags at best price in India"
    },
    "117": {
        "Category": "Fitness & Supplements",
        "Id": 1,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Green Tea</b> is an antioxidant and helps in weight management. Helps in cases of obesity, anti-aging and high cholesterol.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Herbal tea leaves</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Aids in effective weight loss</li></ul><ul><li>Improves the metabolism</li></ul><ul><li>Prevents premature ageing of the skin</li></ul><ul><li>Helps in maintaining a healthy cholesterol level</li></ul><br/><b>Directions for Use:</b><br/>Twice every day – morning and evening or as directed by physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-green-tea-lemon-ginger-otc366938",
        "ProductName": "Organic India Tulsi Green Tea Lemon Ginger: Buy 25 tea bags at best price in India"
    },
    "118": {
        "Category": "Health Conditions",
        "Id": 2,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Triphala literally means “three fruits”. The three fruits contained in triphala are Amalaki (Emblica officinalis), Bibhitaki (Terminalia belerica) and Haritaki (Terminalia chebula). Triphala is tridoshic--equally balancing for Vata, Pitta and Kapha. Triphala is a powerful rejuvenating and detoxifying formulation that cleanses the colon and supports the entire GI tract, improves digestion, assimilation of nutrients and elimination.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-triphala-powder-otc339441",
        "ProductName": "Organic India Triphala Powder: Buy 100 gm Powder at best price in India"
    },
    "119": {
        "Category": "Ayurveda Products",
        "Id": 3,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Moringa Powder</b> comes with a delicious flavor with 25% plant protein including all 9 essential amino acids, 24% fibre, rich source of iron, vitamin K &amp; E, source of vitamin A &amp; calcium, and antioxidants. It is a natural source of these nutrients, it is highly bio-available, and so our body can absorb the benefits more easily.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Pure Moringa Oleifera leaf powder</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It is 100% natural with no added sugar and have an anti-diabetic properties</li></ul><ul><li>It reduces tiredness &amp; fatigue</li></ul><ul><li>It gives radiant skin and make it glow</li></ul><ul><li>It helps in keeping the immune system healthy</li></ul><ul><li>It contributes to normal vision and keep eyes healthy</li></ul><ul><li>It supports energy-yielding metabolism in the body</li></ul><ul><li>It contributes to the normal function of digestive enzymes</li></ul><br/><b>Directions For Use:</b> <br/>Take Organic India Moringa Powder one teaspoon twice a day with lukewarm water.<br/><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a temperature below 25-degree Celsius</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-moringa-powder-otc339443",
        "ProductName": "Organic India Moringa  Powder: Buy 100 gm Powder at best price in India"
    },
    "120": {
        "Category": "Ayurveda Products",
        "Id": 4,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Moringa Capsule is Contains Organic Leaf Powder of Moringa oleifera (Sahijan). The powder is produced by harvesting, drying then milling the the leaves of Moringa oleifera considered one of the most complete, nutrientdense plants on Earth. Its leaves have been eaten for thousands of years as a Superfood nutritional supplement.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-moringa-capsule-otc339423",
        "ProductName": "Organic India Moringa  Capsule: Buy 60 capsules at best price in India"
    },
    "121": {
        "Category": "Featured",
        "Id": 5,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Ashwagandha Capsule</b> is a natural treatment for low energy states and general exhaustion, a tendency towards infections, cold and flu. It is a powerful anti-stress agent that helps in relieving mental, physical and emotional stress, restores and builds energy and helps prevent cold.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Ashwagandha (Withania somnifera)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Increases stress resistance and improve memory related performance</li></ul><ul><li>Protects against stress-induced responses, such as anxiety and physiological imbalances</li></ul><ul><li>Offers powerful nutritional support to energize and rejuvenate, by helping minimize the negative effects of stress</li></ul><ul><li>Supports a healthy immune system and helps build sexual and reproductive balance</li></ul><br/><b>Directions For Use:</b> <br/>Take 2 Organic India Ashwagandha capsules twice daily with meals for 3 months or as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-ashwagandha-capsule-otc339413",
        "ProductName": "Organic India Ashwagandha Capsule: Buy 60 capsules at best price in India"
    },
    "122": {
        "Category": "Featured",
        "Id": 6,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Stevia Natural Sweetener</b> is a natural sweetener extracted from the leaves of plant species Stevia rebaudiana. It can be added to all desserts and tabletop applications, hot and cold beverages like tea, coffee, lassi, nimbu pani, breakfast cereals. It has 200-300 times the sweetness of sugar.<br/><br/><b>Key Ingredients:</b><br/>Stevia rebaudiana<br/><br/><b>Key Benefits:</b><br/><ul><li>It can be used in its natural state</li></ul><ul><li>Used in soft drink, pastry, pickles, yogurt, etc</li></ul><ul><li>It is good for teeth as it does not cause cavities</li></ul><ul><li>Its sweetness is felt for long time</li></ul><ul><li>One sachet has sweetness equal to 2 teaspoon of sugar</li></ul><br/><b>Directions For Use:</b> <br/>Take as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a cool and dry place</li></ul><ul><li>Should be protected from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-stevia-natural-sweetener-otc498701",
        "ProductName": "Organic India Stevia Natural Sweetener: Buy 25 Sachets at best price in India"
    },
    "123": {
        "Category": "Ayurveda Products",
        "Id": 7,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Wheat Grass Powder is an Energy and Immunity Booster supplement. It contains Vitamin A, Vitamin C, Vitamin B1, Vitamin B2, Vitamin B3, Vitamin B6, Vitamin B12, Folic acid, Vitamin E, Vitamin K,Calcium,Iron and Chlorophyll. All these nutrients are available in their natural forms and Naturally Acceptable to the Body.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-wheat-grass-powder-otc339437",
        "ProductName": "Organic India Wheat Grass Powder: Buy 100 gm Powder at best price in India"
    },
    "124": {
        "Category": "Health Conditions",
        "Id": 8,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Brahmi capsules helps in memory loss due to ageing, lack of concentration, mental &amp; emotional stress, depression, leg oedema, swollen leg/ankles, venous insufficiency, varicose veins, and poor circulation. It is also useful in treatment of giardiasis. It is also used for improving mental functioning of professionals.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-brahmi-capsule-otc339414",
        "ProductName": "Organic India Brahmi    Capsule: Buy 60 capsules at best price in India"
    },
    "125": {
        "Category": "Ayurveda Products",
        "Id": 9,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Flaxseed Oil Capsule</b> provides omega 3 and supports heart health. It helps with cases of high cholesterol, low immune states, dry eyes, joint pain.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Flax seed oil</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It is a healthy source of Omega 3, high in fibre and low in cholesterol</li></ul><ul><li>Helps reduce high cholesterol</li></ul><ul><li>Helps in burning body fat </li></ul><ul><li>Supports healthy skin and nails</li></ul><ul><li>Supports a healthy cardiovascular system</li></ul><ul><li>Stabilizes sugar levels</li></ul><ul><li>Lowers inflammation and oxidative stress</li></ul><ul><li>Keeps the heart healthy</li></ul><ul><li>Keeps the joints healthy, prevents and heals joint pain</li></ul><ul><li>Softens stool for effortless evacuation</li></ul><ul><li>Is safe for long term use</li></ul><br/><b>Directions for Use:</b><br/>2 capsules twice daily or as prescribed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-flaxseed-oil-capsule-otc339417",
        "ProductName": "Organic India Flaxseed Oil Capsule: Buy 60 capsules at best price in India"
    },
    "126": {
        "Category": "Winter Care",
        "Id": 10,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Green Tea</b> is organic made with the finest black tea and tulsi which makes the ultimate flavor of the tea. It has an anti-stress and immune-supportive function and is rich in anti-oxidants. The tea is very helpful against cough and cold and also enhances stamina and immunity.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Rama Tulsi (Ocimum sanctum)</li></ul><ul><li>Krishna Tulsi (Ocimum sanctum)</li></ul><ul><li>Vana Tulsi (Ocimum gratissimum)</li></ul><ul><li>Green Tea (Camellia sinensis)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Reduces stress and is rich in antioxidants and other nutrients</li></ul><ul><li>Guards against cough, cold and enhances stamina</li></ul><ul><li>Builds immunity and eliminates toxins</li></ul><ul><li>Revitalizes the body and enhances respiratory functions</li></ul><br/><b>Directions For Use:</b> <br/>Pour fresh boiling water over infusion bag in a cup or teapot (1 bag per cup) and infuse for 3-5 minutes or longer. Double the strength when serving iced<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a cool and dry place</li></ul><ul><li>Should be protected from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-green-tea-classic-otc344869",
        "ProductName": "Organic India Tulsi Green Tea Classic: Buy 100 gm Granules at best price in India"
    },
    "127": {
        "Category": "Ayurveda Products",
        "Id": 11,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Organic India Organic Wild Forest Honey</strong> is smooth, perfectly and irresistibly delicious while being a natural source of energy. It is also anti-bacterial, anti-aging and helps with many nutritional deficiencies.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Organic honey</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Is naturally full of healthful minerals and nutrients</li></ul><ul><li>Acts as a natural source of energy</li></ul><ul><li>Supports immunity</li></ul><br/><strong>Directions for Use:</strong><br/>Organic Honey Naturally tends to crystallize. Liquify by placing the bottle in warm water. Do not refrigerate.<br/><br/><strong>Safety Information:</strong><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-honey-otc339448",
        "ProductName": "Organic India Honey: Buy 250 gm Liquid at best price in India"
    },
    "128": {
        "Category": "Fitness & Supplements",
        "Id": 12,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Turmeric Formula Capsule</b> supports important blood and liver functions and improves digestion. It helps in inflammatory conditions, joint and muscle pain, cold and cough, indigestion, bloating, skin infections and other skin diseases.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Organic Turmeric Rhizome (Curcuma longa)</li></ul><ul><li>Turmeric Extract with 95 % curcuminoids</li></ul><ul><li>Curcumin Extract</li></ul><ul><li>Organic Ginger Rhizome (zingiber officinale)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It supports blood and liver functions</li></ul><ul><li>It make joints healthy and is good for healthy inflammatory response</li></ul><ul><li>Promotes overall well-being</li></ul><ul><li>Helps in making skin radiant </li></ul><ul><li>Improves digestion</li></ul><br/><b>Directions For Use:</b><br/>1-2 capsules with food and water twice a day for a least 3 months or as directed by your health care provider<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-turmeric-formula-capsule-otc339435",
        "ProductName": "Organic India Turmeric Formula Capsule: Buy 60 capsules at best price in India"
    },
    "129": {
        "Category": "Ayurveda Products",
        "Id": 13,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Osteoseal is a source of herbal Calcium &amp; Minerals. It is abundant in minerals &amp; vitamins that promote good health of bone &amp; teeth naturally. It is necessary natural health supplement for growing children, mothers &amp; would be mothers. It can be taken by anyone suffering from bone related problems.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-osteoseal-capsule-otc328957",
        "ProductName": "Organic India Osteoseal    Capsule: Buy 60 capsules at best price in India"
    },
    "130": {
        "Category": "Personal Care",
        "Id": 14,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Beautiful Skin Capsule</b> helps to rejuvenate and restore the skin complexion, making it healthy and beautiful. It is safe for long term use asit has no side effects.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Rubia cordifolia</li></ul><ul><li>Red Sandalwood</li></ul><ul><li>Curcuma longa</li></ul><ul><li>Ocimum Sanctum</li></ul><ul><li>Neem Leaf</li></ul><ul><li>Guduchi stem</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Helps in improving skin complexion and tone and rejuvenate the skin making it clearer, glowing and radiant</li></ul><ul><li>It purifies the blood and balances endocrine system</li></ul><ul><li>Is made with certified organic herbs</li></ul><ul><li>Is vegetarian and gluten free</li></ul><br/><b>Directions For Use:</b><br/>1-2 capsules daily with food and water twice a day for at least 3 months or as directed by physician<br/><br/><b>Safety Information:</b><br/><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Keep out of the reach of children</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-beautiful-skin-capsule-otc328974",
        "ProductName": "Organic India Beautiful Skin Capsule: Buy 60 capsules at best price in India"
    },
    "131": {
        "Category": "Ayurveda Products",
        "Id": 15,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Prostate Care Capsule</b> supports healthy prostate and improve normal male urogenital function. Prostate Care improves urinary tract function and flow, reduces symptoms of an enlarged prostate, supports healthy PSA levels and restores male energy. <br/><br/><b>Key Ingredients:</b> <br/><ul><li>Motha rhizome ( Cyperus rotundus)</li></ul><ul><li> Neem leaf ( Azadirachta indica)</li></ul><ul><li>Turmeric rhizome ( Curcuma longa)</li></ul><ul><li>Organic Rama Tulsi/Holy Basil leaf (Ocimum sanctum)</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>Supports urinary tract function</li></ul><ul><li>Helps avoiding enlarged prostate</li></ul><ul><li>Support in healthy PSA level</li></ul><ul><li>Helps to stimulate male energy</li></ul><ul><li>Supports Healthy prostate and normal male urogenital function</li></ul><br/><b>Directions For Use:</b> <br/>Take 1-2 capsules with food and water twice a day for at least 3 months or as directed by the physician.<br/><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-prostate-care-capsule-otc328963",
        "ProductName": "Organic India Prostate Care Capsule: Buy 60 capsules at best price in India"
    },
    "132": {
        "Category": "Ayurveda Products",
        "Id": 16,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Osteoseal is a source of herbal Calcium &amp; Minerals. It is abundant in minerals &amp; vitamins that promote good health of bone &amp; teeth naturally. It is necessary natural health supplement for growing children, mothers &amp; would be mothers. It can be taken by anyone suffering from bone related problems.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-osteoseal-capsule-otc376382",
        "ProductName": "Organic India Osteoseal    Capsule: Buy 250 capsules at best price in India"
    },
    "133": {
        "Category": "Winter Care",
        "Id": 17,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><strong>Organic India Tulsi Ginger Tea Tin</strong> is a unique combination of taste and health. Tulsi Ginger Tea offers 100% certified finest blend of krishna, rama, vana tulsi leaves and ginger. The organic tea has an aromatic smell with numerous health benefits.<br/><br/><strong>Key Ingredients:</strong><br/><ul><li>Krishna Tulsi</li></ul><ul><li>Vana Tulsi</li></ul><ul><li>Rama Tulsi</li></ul><ul><li>Ginger</li></ul><ul><li>Tea leaves</li></ul><br/><strong>Key Benefits:</strong><br/><ul><li>Anti-stress formula</li></ul><ul><li>Accelerates glucose metabolism</li></ul><ul><li>Boosts up the stamina</li></ul><ul><li>Helps in relaxing you</li></ul><ul><li>Improves digestion and metabolism</li></ul><br/><strong>Directions For Use:</strong><br/><ul><li>2-3 cups daily (using one infusion bag or 2g loose per cup to make good infusion)</li></ul><br/><strong>Safety Information:</strong><br/><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from the direct sunlight</li></ul><ul><li>Store in the original package in order to protect from moisture</li></ul><ul><li>Keep out of the reach of children</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-ginger-tea-otc344868",
        "ProductName": "Organic India Tulsi Ginger Tea: Buy 100 gm Tea at best price in India"
    },
    "134": {
        "Category": "Ayurveda Products",
        "Id": 18,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Lipid Care Capsule</b> helps to maintain healthy cardiovascular functions and normal cholesterol levels in the body. It is an active immunomodulator and rich in anti-oxidants, It is made up of well known and safe lipid controlling herbs useful in prevention and treatment of raised lipid levels &amp; their complications.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Arjuna bark</li></ul><ul><li>Harjor stem</li></ul><ul><li>Amalaki fruit</li></ul><ul><li>Vana tulsi leaf</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Helps to naturally control the cholesterol levels and lowers the heart rate and thereby lowers blood pressure</li></ul><ul><li>It is rich in anti-oxidants and is an excellent immunomodulator that improves the immune system</li></ul><ul><li>Enriched with anti-oxidants and supports a healthy heart by controlling the lipid levels</li></ul><ul><li>Has a mild blood thinning agent and also helps in reducing the workload of the heart</li></ul><br/><b>Directions For Use:</b> <br/>Take 1-2 capsules of Organic India Lipid Care Capsule with food and water twice a day for at least 3 months or as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a temperature below 25-degree Celsius and 40 % humidity in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-lipid-care-capsule-otc328970",
        "ProductName": "Organic India Lipid Care Capsule: Buy 60 capsules at best price in India"
    },
    "135": {
        "Category": "Ayurveda Products",
        "Id": 19,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Brahmi capsules helps in memory loss due to ageing, lack of concentration, mental &amp; emotional stress, depression, leg oedema, swollen leg/ankles, venous insufficiency, varicose veins, and poor circulation. It is also useful in treatment of giardiasis. It is also used for improving mental functioning of professionals.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-brahmi-capsule-otc376393",
        "ProductName": "Organic India Brahmi    Capsule: Buy 250 capsules at best price in India"
    },
    "136": {
        "Category": "Ayurveda Products",
        "Id": 20,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Bowelcare Capsules offer best natural treatment for Chronic Constipation &amp; Irritable Bowel Syndrome. In India, a huge part of population suffers from IBS. Changes in consistency of stool, pain in lower part of abdomen, frequent urge to defecate and no clear evacuation are the symptoms of Irritable bowel syndrome.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-bowelcare-capsule-otc376375",
        "ProductName": "Organic India  Bowelcare   Capsule: Buy 250 capsules at best price in India"
    },
    "137": {
        "Category": "Ayurveda Products",
        "Id": 21,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Vitality Capsule</b> contains powerful anti-stress, anti-aging antioxidant-rich herbs that relieve stress and restore energy. Vitality provides increased life force, builds stamina and endurance, offers deep overall rejuvenation. It acts as a remedy for reducing inflammation, arthritis, asthma, hypertension, and rheumatism.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Ashwagandha</li></ul><ul><li>Vana Tulsi</li></ul><ul><li>Katuki</li></ul><ul><li>Rama Tulsi</li></ul><ul><li>Neel Kamal</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>Provides the necessary energy boost to our tired bodies</li></ul><ul><li>Assists in boosting testosterone levels in men</li></ul><ul><li>Helps in treating erectile dysfunction in men</li></ul><ul><li>Has anti-inflammatory and anti bacterial properties</li></ul><br/><b>Directions For Use:</b> <br/>Take Organic India Vitality Capsule as prescribed by the physician.<br/><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-vitality-capsule-otc376386",
        "ProductName": "Organic India Vitality Capsule: Buy 250 capsules at best price in India"
    },
    "138": {
        "Category": "Fitness & Supplements",
        "Id": 22,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Green Tea</b> is an antioxidant and helps in weight management. Helps in cases of obesity, anti-aging and high cholesterol.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Herbal tea leaves</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Aids in effective weight loss</li></ul><ul><li>Improves the metabolism</li></ul><ul><li>Prevents premature ageing of the skin</li></ul><ul><li>Helps in maintaining a healthy cholesterol level</li></ul><br/><b>Directions for Use:</b><br/>Twice every day – morning and evening or as directed by physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-green-tea-pomegranate-otc366939",
        "ProductName": "Organic India Tulsi Green Tea Pomegranate: Buy 25 tea bags at best price in India"
    },
    "139": {
        "Category": "Ayurveda Products",
        "Id": 23,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Amalaki is a Precious Fruit that is rich in Natural Antioxidents including Vitamin C. It is outstanding in its ability to nourish and rejuvenate the body and mind. It is considered to be a primary cooling rejuvenator in Ayurvedic medicine. It is prepared from Amala which is also termed as Indian Gooseberries.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-amalaki-capsule-otc376390",
        "ProductName": "Organic India Amalaki Capsule: Buy 250 capsules at best price in India"
    },
    "140": {
        "Category": "Winter Care",
        "Id": 24,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Sleep Tea</b> is a finest combination of stress relieving herbs including Tulsi, Brahmi, Ashwagandha, and Shankhpushpi. This herbal tea promotes healthy and restorative sleep and cures sleep disorders. <br/><br/><b>Key Ingredients:</b><br/><ul><li>Tulsi</li></ul><ul><li>Brahmi</li></ul><ul><li>Ashwagandha</li></ul><ul><li>Shankhpushpi</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Reduces stress and mental anxiety</li></ul><ul><li>Supports the immune system</li></ul><ul><li>Abundant in antioxidants</li></ul><ul><li>Powerful adaptogen</li></ul><ul><li>Aids digestion and balances metabolism</li></ul><ul><li>Balances energy levels and uplifts mood</li></ul><br/><b>Directions For Use:</b><br/>2-3 cups daily (using one infusion bag or 2g loose per cup to make good infusion)<br/><br/><b>Safety Information:</b><br/><ul><li>Keep out of the reach and sight of children</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from the direct sunlight</li></ul><ul><li>Store in the original package in order to protect from moisture</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-sleep-tea-otc344880",
        "ProductName": "Organic India Tulsi Sleep Tea: Buy 25 tea bags at best price in India"
    },
    "141": {
        "Category": "Ayurveda Products",
        "Id": 25,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Women Well Being (WWB) is a herbal women health supplement which cares for women at all stages of their life-restores and balances the hormone system from puberty to menopause.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-wwb-capsule-otc376389",
        "ProductName": "Organic India WWB Capsule: Buy 250 capsules at best price in India"
    },
    "142": {
        "Category": "Ayurveda Products",
        "Id": 26,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Capsule</b>contains vitamin C and antioxidants such as eugenol, which protects the heart from the harmful effects of free radicals thus supporting anti-aging. It also helps in treating kidney stones and headaches as well.<br/><br/><b>Key Ingredients:</b> <br/><ul><li>Tulsi</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>It is used to fight acne</li></ul><ul><li>Fights against diabetes</li></ul><ul><li>It helps fight cancer</li></ul><ul><li>It balances hormones and lowers stress</li></ul><ul><li>Assists to relieve fever</li></ul><ul><li>Cures respiratory disorders</li></ul><ul><li>A good source of vitamin K</li></ul><br/><b>Directions For Use:</b> <br/>Take Organic India Tulsi Capsule as directed by the physician.<br/><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-capsule-otc339434",
        "ProductName": "Organic India Tulsi Capsule: Buy 60 capsules at best price in India"
    },
    "143": {
        "Category": "Health Conditions",
        "Id": 27,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Triphala Capsule</b> benefits in various health disorders, especially the ones related to the digestive system. It is also known as the caretaker of all internal organs of our body. It is a medicine for weight loss, as it is an efficient metabolic stimulator.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Amla</li></ul><ul><li>Bibhitaki</li></ul><ul><li>Haritaki</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Triphala has several phyto-chemicals, which are potent antioxidants and immuno-stimulators</li></ul><ul><li>Triphala powder is effective in delaying aging, maintaining skin health, preventing premature greying of hairs and hair fall and reducing oxidative stress in the body</li></ul><ul><li>Immuno-stimulatory effects of Triphala help in AIDS/HIV positive patients</li></ul><ul><li>It improves immunity and prevents secondary infections</li></ul><ul><li>Beneficial for reducing vertigo or dizziness</li></ul><ul><li>Has significant lipid-profile modulating action and also reduces low-density lipoprotein cholesterol and triglycerides levels in the blood</li></ul><br/><b>Directions For Use:</b> <br/>Take Organic India Triphala Capsule as prescribed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a temperature below 25-degree Celsius and 40 % humidity in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-triphala-capsule-otc376398",
        "ProductName": "Organic India Triphala Capsule: Buy 250 capsules at best price in India"
    },
    "144": {
        "Category": "Ayurveda Products",
        "Id": 28,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Breathe Free Capsule</b> effectively helps relieve shortness of breath, respiratory complications and coughing without adverse side effects. It helps increases vital capacity and helpful in relieves congestion and promotes expectoration.<br/><br/><b>Key Ingredients:</b> <br/><ul><li>Organic Pushkarmool root(Inula racemosa)</li></ul><ul><li>Organic Krishna Tulsi leaf (Ocimum sanctum)</li></ul><ul><li>Organic Vibhitaki fruit (Terminalia belerica)</li></ul><ul><li>Organic Pippali fruit (Piper longum)</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>It is helpful in Congestion, dust and smoke-induced congestion</li></ul><ul><li>Naturally relieves short breathe</li></ul><ul><li>Effective in Bronchitis and cough due to an allergic reaction and dry and productive cough</li></ul><ul><li>It promotes expectoration</li></ul><br/><b>Directions For Use:</b> <br/><ul><li>1-2 capsules with food and water twice a day for at least 3 months or as directed by your health care provider</li></ul><ul><li>Safe for long term use</li></ul><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-breathe-free-capsule-otc376376",
        "ProductName": "Organic India Breathe Free Capsule: Buy 250 capsules at best price in India"
    },
    "145": {
        "Category": "Winter Care",
        "Id": 29,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Immunity offers relief from Cold, Flu and other Upper Respiratory Tract Infections (RTI). Immunity is recommended to be regularly to build and maintain a Strong, Healthy Immune system and Prevent Illnesses.<br/>Immunity Capsules is Best Anti Stress formula. This herbal supplement also helps in Rejuvenation &amp; Natural Detoxification (Removal of Toxic Substances).</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-immunity-capsule-otc376380",
        "ProductName": "Organic India Immunity Capsule: Buy 250 capsules at best price in India"
    },
    "146": {
        "Category": "Ayurveda Products",
        "Id": 30,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Cinnamon Capsule</b> aids in healthy carbohydrate metabolism and healthy conscious living. It helps with bloating, gas, indigestion, poor metabolism, poor immunity, gripping pain, joint pain, blood disorder.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Cinnamon</li></ul><br/><b>Key Benefits:</b><br/><ul><li> It supports healthy metabolism and improves digestion</li></ul><ul><li>It also helps to relieve joint pains</li></ul><ul><li>Has antioxidant properties</li></ul><ul><li>Maintains healthy sugar levels</li></ul><br/><b>Directions for Use:</b><br/>2 capsules twice daily with or after meals or as prescribed by physician<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-cinnamon-capsule-otc339416",
        "ProductName": "Organic India Cinnamon Capsule: Buy 60 capsules at best price in India"
    },
    "147": {
        "Category": "Ayurveda Products",
        "Id": 31,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Organic India, Bowelcare Capsules offer best natural treatment for Chronic Constipation &amp; Irritable Bowel Syndrome. In India, a huge part of population suffers from IBS. Changes in consistency of stool, pain in lower part of abdomen, frequent urge to defecate and no clear evacuation are the symptoms of Irritable bowel syndrome.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-bowelcare-capsule-otc323217",
        "ProductName": "Organic India  Bowelcare   Capsule: Buy 60 capsules at best price in India"
    },
    "148": {
        "Category": "Ayurveda Products",
        "Id": 32,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Shatavari Capsule</b> is a rich source of Shatavari that supports well-being through all phases of a woman's life cycle. Shatavari provides natural and organic plant-based estrogens that support women's health needs from adolescence throughout her life. It is also a natural diuretic that helps relieve fluid retention.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Shatavari (Asparagus racemosus)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Restores hormonal balance and regulates disturbed menstruation</li></ul><ul><li>Relieves symptoms of PMS (premenstrual syndrome), premenopause and menopausal syndrome</li></ul><ul><li>Improves the chances of pregnancy</li></ul><br/><b>Directions For Use:</b> <br/>Take 1-2 Organic India Shatavari Capsules with food and water twice a day for at least 3 months or as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a cool and dry place</li></ul><ul><li>Should be protected from direct sunlight</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-shatavari-capsule-otc376395",
        "ProductName": "Organic India Shatavari Capsule: Buy 250 capsules at best price in India"
    },
    "149": {
        "Category": "Ayurveda Products",
        "Id": 33,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Heart Guard Capsule</b> acts as a heart guard and it helps in maintaining cardiovascular health. It helps in cellular rejuvination and cardiac functioning.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Arjuna</li></ul><ul><li>Reetha</li></ul><ul><li>Shaijan</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Acts as antioxidant and protects heart from free radicals</li></ul><ul><li>Improves cardiac function</li></ul><ul><li>Improves blood circulation and reduces stress</li></ul><ul><li>Provides cellular rejuvenation</li></ul><ul><li>Strengthens heart muscles</li></ul><ul><li>Maintains healthy lipid and cholesterol levels thus ensuring all-round protection and upkeep of the heart</li></ul><br/><b>Directions for Use:</b><br/>1-2 capsules twice daily with food and water for 3 months or as prescribed by the physician<br/><br/><b>Safety Information:</b><br/><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from direct sunlight</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-heart-guard-capsule-otc339419",
        "ProductName": "Organic India Heart Guard Capsule: Buy 60 capsules at best price in India"
    },
    "150": {
        "Category": "Winter Care",
        "Id": 34,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Breathe Free Capsule</b> effectively helps relieve shortness of breath, respiratory complications and coughing without adverse side effects. It helps increases vital capacity and helpful in relieves congestion and promotes expectoration.<br/><br/><b>Key Ingredients:</b> <br/><ul><li>Organic Pushkarmool root(Inula racemosa)</li></ul><ul><li>Organic Krishna Tulsi leaf (Ocimum sanctum)</li></ul><ul><li>Organic Vibhitaki fruit (Terminalia belerica)</li></ul><ul><li>Organic Pippali fruit (Piper longum)</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>It is helpful in Congestion, dust and smoke-induced congestion</li></ul><ul><li>Naturally relieves short breathe</li></ul><ul><li>Effective in Bronchitis and cough due to an allergic reaction and dry and productive cough</li></ul><ul><li>It promotes expectoration</li></ul><br/><b>Directions For Use:</b> <br/><ul><li>1-2 capsules with food and water twice a day for at least 3 months or as directed by your health care provider</li></ul><ul><li>Safe for long term use</li></ul><br/><b>Safety Information:</b> <br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-breathe-free-capsule-otc328973",
        "ProductName": "Organic India Breathe Free Capsule: Buy 60 capsules at best price in India"
    },
    "151": {
        "Category": "Ayurveda Products",
        "Id": 35,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Ashwagandha Capsule</b> is a natural treatment for low energy states and general exhaustion, a tendency towards infections, cold and flu. It is a powerful anti-stress agent that helps in relieving mental, physical and emotional stress, restores and builds energy and helps prevent cold.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Ashwagandha (Withania somnifera)</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Increases stress resistance and improve memory related performance</li></ul><ul><li>Protects against stress-induced responses, such as anxiety and physiological imbalances</li></ul><ul><li>Offers powerful nutritional support to energize and rejuvenate, by helping minimize the negative effects of stress</li></ul><ul><li>Supports a healthy immune system and helps build sexual and reproductive balance</li></ul><br/><b>Directions For Use:</b> <br/>Take 2 Organic India Ashwagandha capsules twice daily with meals for 3 months or as directed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-ashwagandha-capsule-otc376391",
        "ProductName": "Organic India Ashwagandha Capsule: Buy 250 capsules at best price in India"
    },
    "152": {
        "Category": "Winter Care",
        "Id": 36,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Ginger Tea</b> is a unique combination of taste and health. Tulsi Ginger Tea offers 100% certified finest blend of krishna, rama, vana tulsi leaves and ginger. The organic tea has an aromatic smell with numerous health benefits.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Tulsi</li></ul><ul><li>Ginger</li></ul><ul><li>Tea leaves</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Anti-stress formula that helps to prevent stress</li></ul><ul><li>Accelerates glucose metabolism hence prevents diabetes and cardiac complications</li></ul><ul><li>Boosts up the stamina</li></ul><ul><li>Helps to relax the mind and body</li></ul><ul><li>Improves digestion and metabolism</li></ul><br/><b>Directions For Use:</b><br/><ul><li>2-3 cups daily (using one infusion bag or 2g loose per cup to make good infusion)</li></ul><br/><b>Safety Information:</b><br/><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from the direct sunlight</li></ul><ul><li>Store in the original package in order to protect from moisture</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Do not exceed the recommended dose</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-ginger-tea-otc344873",
        "ProductName": "Organic India Tulsi Ginger Tea: Buy 25 tea bags at best price in India"
    },
    "153": {
        "Category": "Ayurveda Products",
        "Id": 37,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Amalaki is a Precious Fruit that is rich in Natural Antioxidents including Vitamin C. It is outstanding in its ability to nourish and rejuvenate the body and mind. It is considered to be a primary cooling rejuvenator in Ayurvedic medicine. It is prepared from Amala which is also termed as Indian Gooseberries.</div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-amalaki-capsule-otc337816",
        "ProductName": "Organic India Amalaki Capsule: Buy 60 capsules at best price in India"
    },
    "154": {
        "Category": "Fitness & Supplements",
        "Id": 38,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Tulsi Honey Chamomile Tea</b> is a healthy combination with magical Tulsi with soft and smooth flavor of Chamomile blossoms and deliciousness of organically sourced honey. Tea has wondrous healing properties and offers a healthy and pure way of living. Brew up your daily cups of herbal teas to benefit from these natural and vital nutrients and keep yourself energized through the day organically.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Tulsi</li></ul><ul><li>Honey</li></ul><ul><li>Tea</li></ul><ul><li>Chamomile blossoms</li></ul><br/><b>Key Benefits:</b><br/><ul><li>A great stress reliever that helps to calm the mind</li></ul><ul><li>Boosts up the stamina and resistance to illness</li></ul><ul><li>Enhances immunity and also great for skin and reducing weight</li></ul><ul><li>Rich in anti-oxidants which enhances health quotient</li></ul><br/><b>Directions For Use:</b><br/>2-3 cups daily (using one infusion bag or 2g loose per cup to make good infusion)<br/><br/><b>Safety Information:</b><br/><ul><li>Store in a cool, dry and dark place</li></ul><ul><li>Protect from the direct sunlight</li></ul><ul><li>Store in the original package in order to protect from moisture</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Do not exceed the recommended dose</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-tulsi-honey-chamomile-tea-otc366935",
        "ProductName": "Organic India Tulsi Honey Chamomile Tea: Buy 25 tea bags at best price in India"
    },
    "155": {
        "Category": "Ayurveda Products",
        "Id": 39,
        "Manufacture": "Organic India",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Organic India Triphala Capsule</b> benefits in various health disorders, especially the ones related to the digestive system. It is also known as the caretaker of all internal organs of our body. It is a medicine for weight loss, as it is an efficient metabolic stimulator.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Amla</li></ul><ul><li>Bibhitaki</li></ul><ul><li>Haritaki</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Triphala has several phyto-chemicals, which are potent antioxidants and immuno-stimulators</li></ul><ul><li>Triphala powder is effective in delaying aging, maintaining skin health, preventing premature greying of hairs and hair fall and reducing oxidative stress in the body</li></ul><ul><li>Immuno-stimulatory effects of Triphala help in AIDS/HIV positive patients</li></ul><ul><li>It improves immunity and prevents secondary infections</li></ul><ul><li>Beneficial for reducing vertigo or dizziness</li></ul><ul><li>Has significant lipid-profile modulating action and also reduces low-density lipoprotein cholesterol and triglycerides levels in the blood</li></ul><br/><b>Directions For Use:</b> <br/>Take Organic India Triphala Capsule as prescribed by the physician.<br/><br/><b>Safety Information:</b><br/><ul><li>A dietary nutritional supplement not for medicinal use</li></ul><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store at a temperature below 25-degree Celsius and 40 % humidity in cool and dry place</li></ul><ul><li>Should be protected from direct light</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/organic-india-triphala-capsule-otc339427",
        "ProductName": "Organic India Triphala Capsule: Buy 60 capsules at best price in India"
    },
    "156": {
        "Category": "Personal Care",
        "Id": 0,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Vajradanti toothpaste contains babhul, lavang, and bakul, Babhul works as an astringent on the gums. <br/><br/>Bakul is also added to strengthen teeth and gums. <br/>Lavang is added in the Ayurvedic toothpaste to control tooth decay and reduce bad breath. <br/><br/>Vicco toothpaste is made with herbal components and is easy for people to tolerate. It makes teeth white and gums healthy with regular use. <br/><br/>Steps for using a toothpaste: <br/>Clean a soft/medium bristle toothbrush under running water <br/>Apply generous amount of toothpaste on the toothbrush <br/>Brush teeth for at least 2 minutes <br/>Gently brush over the sensitive areas<br/><br/>Use under medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-vajradanti-ayurvedic-paste-regular-otc325157",
        "ProductName": "Vicco Vajradanti Ayurvedic Paste Regular: Buy 200 gm Toothpaste at best price in India"
    },
    "157": {
        "Category": "Personal Care",
        "Id": 1,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Turmeric Cream is an ayurvedic cream and it contains a blend of Turmeric and Sandalwood Oil as major ingredients.The cream protects the skin from harmful radiations and gives natural radiance.<br/><br/>Key benefits/uses of Vicco Turmeric Cream:<br/>- Turmeric has antiseptic, anti-acne and grooming properties<br/>- Protects the skin from harmful radiations<br/>- Vicco Turmeric Cream rejuvenates and revitalizes the skin and give it a natural radiance<br/>- Maintains the original pigmentation of the skin<br/>- Fights against blemishes, acne and other skin disorders<br/><br/>Direction for use/Dosage:<br/>As per the requirement or as directed by the physician.<br/><br/>Indications:<br/>Skin disorders, Acne, Blemishes, Skin pigmentation<br/><br/>Storage instructions:<br/>- Store in a cool, dry and dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- For external use only<br/>- Read the label carefully before use<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-otc328409",
        "ProductName": "Vicco Turmeric Skin Cream: Buy 50 gm Cream at best price in India"
    },
    "158": {
        "Category": "Ayurveda Products",
        "Id": 2,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Turmeric Cream is an ayurvedic cream and it contains a blend of Turmeric and Sandalwood Oil as major ingredients.The cream protects the skin from harmful radiations and gives natural radiance.<br/><br/>Key benefits/uses of Vicco Turmeric Cream:<br/>- Turmeric has antiseptic, anti-acne and grooming properties<br/>- Protects the skin from harmful radiations<br/>- Vicco Turmeric Cream rejuvenates and revitalizes the skin and give it a natural radiance<br/>- Maintains the original pigmentation of the skin<br/>- Fights against blemishes, acne and other skin disorders<br/><br/>Direction for use/Dosage:<br/>As per the requirement or as directed by the physician.<br/><br/>Indications:<br/>Skin disorders, Acne, Blemishes, Skin pigmentation<br/><br/>Storage instructions:<br/>- Store in a cool, dry and dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- For external use only<br/>- Read the label carefully before use<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-otc328413",
        "ProductName": "Vicco Turmeric Skin Cream: Buy 70 gm Cream at best price in India"
    },
    "159": {
        "Category": "Winter Care",
        "Id": 3,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Turmeric Cream is an ayurvedic cream and it contains a blend of Turmeric and Sandalwood Oil as major ingredients.The cream protects the skin from harmful radiations and gives natural radiance.<br/><br/>Key benefits/uses of Vicco Turmeric Cream:<br/>- Turmeric has antiseptic, anti-acne and grooming properties<br/>- Protects the skin from harmful radiations<br/>- Vicco Turmeric Cream rejuvenates and revitalizes the skin and give it a natural radiance<br/>- Maintains the original pigmentation of the skin<br/>- Fights against blemishes, acne and other skin disorders<br/><br/>Direction for use/Dosage:<br/>As per the requirement or as directed by the physician.<br/><br/>Indications:<br/>Skin disorders, Acne, Blemishes, Skin pigmentation<br/><br/>Storage instructions:<br/>- Store in a cool, dry and dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- For external use only<br/>- Read the label carefully before use<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-otc401011",
        "ProductName": "Vicco Turmeric Skin Cream: Buy 30 gm Cream at best price in India"
    },
    "160": {
        "Category": "Personal Care",
        "Id": 7,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Vicco Turmeric Wso Skin Cream</b> is an Ayurvedic cream and is helpful skin infections and reduce skin inflammation. Aids in the treatment of acne and pimples and manages ailments causing rosacea. <br/><br/><b>Key Ingredients:</b><br/><ul><li>Turmeric</li></ul><ul><li>Ayurvedic ingredients</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Ayurvedic cream which helps in reduce acne, scars and related skin conditions</li></ul><ul><li>Useful in skin infections and reduces the appearance of acne and reduces skin inflammation</li></ul><ul><li>Helps improve skin complexion and reduces dark spots and acne marks</li></ul><ul><li>Improves skin texture and nourishes the skin and makes it beautiful</li></ul><ul><li>It is hygienic and easily controllable</li></ul><br/><b>Directions for use:</b><br/><ul><li>Apply the cream on face and massage gently</li></ul><ul><li>Use daily for best results</li></ul><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool dry place away from direct sunlight and heat</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-wso-skin-cream-otc328408",
        "ProductName": "Vicco Turmeric Wso Skin Cream: Buy 60 gm Cream at best price in India"
    },
    "161": {
        "Category": "Personal Care",
        "Id": 8,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Vajradanti toothpaste contains babhul, lavang, and bakul, Babhul works as an astringent on the gums. <br/><br/>Bakul is also added to strengthen teeth and gums. <br/>Lavang is added in the Ayurvedic toothpaste to control tooth decay and reduce bad breath. <br/><br/>Vicco toothpaste is made with herbal components and is easy for people to tolerate. It makes teeth white and gums healthy with regular use. <br/><br/>Steps for using a toothpaste: <br/>Clean a soft/medium bristle toothbrush under running water <br/>Apply generous amount of toothpaste on the toothbrush <br/>Brush teeth for at least 2 minutes <br/>Gently brush over the sensitive areas<br/><br/>Use under medical supervision</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-vajradanti-ayurvedic-paste-regular-otc340553",
        "ProductName": "Vicco Vajradanti Ayurvedic Paste Regular: Buy 150 gm Toothpaste at best price in India"
    },
    "162": {
        "Category": "Personal Care",
        "Id": 9,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "None",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-cream-with-foam-base-otc532319",
        "ProductName": "Vicco Turmeric Cream with Foam Base: Buy 70 gm Cream at best price in India"
    },
    "163": {
        "Category": "Winter Care",
        "Id": 10,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Vicco Turmeric Wso Skin Cream</b> is an Ayurvedic cream and is helpful skin infections and reduce skin inflammation. Aids in the treatment of acne and pimples and manages ailments causing rosacea. <br/><br/><b>Key Ingredients:</b><br/><ul><li>Turmeric</li></ul><ul><li>Ayurvedic ingredients</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Ayurvedic cream which helps in reduce acne, scars and related skin conditions</li></ul><ul><li>Useful in skin infections and reduces the appearance of acne and reduces skin inflammation</li></ul><ul><li>Helps improve skin complexion and reduces dark spots and acne marks</li></ul><ul><li>Improves skin texture and nourishes the skin and makes it beautiful</li></ul><ul><li>It is hygienic and easily controllable</li></ul><br/><b>Directions for use:</b><br/><ul><li>Apply the cream on face and massage gently</li></ul><ul><li>Use daily for best results</li></ul><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool dry place away from direct sunlight and heat</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-wso-skin-cream-otc329316",
        "ProductName": "Vicco Turmeric Wso Skin Cream: Buy 30 gm Cream at best price in India"
    },
    "164": {
        "Category": "Ayurveda Products",
        "Id": 11,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "None",
        "ProductLink": "https://www.1mg.com/otc/vicco-narayani-spray-otc328411",
        "ProductName": "Vicco Narayani Spray: Buy 45 gm Spray at best price in India"
    },
    "165": {
        "Category": "Personal Care",
        "Id": 12,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Vicco Vajradanti Ayurvedic Powder</b> is an ayurvedic medicine that is used to prevent bleeding of gums and tooth decay. It also helps in the strengthening of teeth and gums. <br/><br/><b>Key Ingredients:</b> <br/><ul><li>Babhul ( Bark )</li></ul><ul><li>Bakul ( Bark )</li></ul><ul><li>Jambhul ( Bark )</li></ul><ul><li>Lavang</li></ul><ul><li>Manjishtha</li></ul><ul><li>Bor</li></ul><ul><li>Acrod</li></ul><ul><li>Akkal Kadha</li></ul><ul><li>Jeshthamadh</li></ul><ul><li>Ajwan</li></ul><ul><li>Dalchini</li></ul><ul><li>Khair</li></ul><ul><li>Patang</li></ul><ul><li>Harada Vajradanti</li></ul><ul><li>Anantmul</li></ul><ul><li>Amala</li></ul><ul><li>Behada</li></ul><ul><li>Kavab – Chini</li></ul><ul><li>Maifal</li></ul><br/><b>Key Benefits:</b> <br/><ul><li>Specially treats swollen and bleeding gums</li></ul><ul><li>Prevents tooth decay and cures pyorrhoea</li></ul><ul><li>Hardening of gums and teeth</li></ul><br/><b>Directions For Use:</b> <br/>Massage your gums and teeth daily with Vicco Vajradanti Powder for two minutes.<br/><br/><b>Safety Information:</b><br/><ul><li>Keep out of reach of the children</li></ul><ul><li>Do not exceed recommended dosage</li></ul><ul><li>Stop use if problem persists or worsens for more than 3 days</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-vajradanti-ayurvedic-powder-otc328412",
        "ProductName": "Vicco Vajradanti Ayurvedic Powder: Buy 200 gm Powder at best price in India"
    },
    "166": {
        "Category": "Ayurveda Products",
        "Id": 13,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Vicco Narayani Cream</b> is a mixture of various oils having medicinal properties which our ancestors have been using since generations. It is used for various purposes. It relives in the lower back pain, controls backache and joint pain associated with the same. It is very effective in all kind of joint pain and inflammation. It also helps in providing a strong relief from severe headache and cold. It is also a good muscle relaxant which provides cure from cervical. It also has antiseptic qualities.<br/><br/><b>Key Ingredients:</b><br/><ul><li>Rai</li></ul><ul><li>Nilgiri</li></ul><ul><li>Devdaru</li></ul><ul><li>Chaipati</li></ul><ul><li>Rosha</li></ul><ul><li>Laung</li></ul><ul><li>Dalchini</li></ul><ul><li>Pudina</li></ul><ul><li>Kapur</li></ul><ul><li>Gandharpura</li></ul><ul><li>Ajwain phool</li></ul><br/><b>Key Benefits:</b><br/><ul><li>It has anti-inflammatory properties</li></ul><ul><li>It reduces the pain associated in back and muscles</li></ul><ul><li>It is a good muscle relaxant</li></ul><ul><li>It helps smoothen the flow of the blood</li></ul><br/><b>Directions for use:</b> <br/>Apply the cream on the effective area and rub it gently for a minute and leave it to get absorbed in the skin.<br/><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Keep it out of reach of the children</li></ul><ul><li>Store in a cool and dry place away from direct sunlight</li></ul><ul><li>Use under medical supervision</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-narayani-cream-otc328410",
        "ProductName": "Vicco Narayani Cream: Buy 30 gm Cream at best price in India"
    },
    "167": {
        "Category": "Winter Care",
        "Id": 15,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "None",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-in-oil-base-otc499171",
        "ProductName": "Vicco Turmeric Skin Cream in Oil Base: Buy 100 gm Cream at best price in India"
    },
    "168": {
        "Category": "Winter Care",
        "Id": 16,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "None",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-in-oil-base-otc406605",
        "ProductName": "Vicco Turmeric Skin Cream in Oil Base: Buy 300 gm Cream at best price in India"
    },
    "169": {
        "Category": "Winter Care",
        "Id": 17,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\"><b>Vicco Turmeric Wso Skin Cream</b> is an Ayurvedic cream and is helpful skin infections and reduce skin inflammation. Aids in the treatment of acne and pimples and manages ailments causing rosacea. <br/><br/><b>Key Ingredients:</b><br/><ul><li>Turmeric</li></ul><ul><li>Ayurvedic ingredients</li></ul><br/><b>Key Benefits:</b><br/><ul><li>Ayurvedic cream which helps in reduce acne, scars and related skin conditions</li></ul><ul><li>Useful in skin infections and reduces the appearance of acne and reduces skin inflammation</li></ul><ul><li>Helps improve skin complexion and reduces dark spots and acne marks</li></ul><ul><li>Improves skin texture and nourishes the skin and makes it beautiful</li></ul><ul><li>It is hygienic and easily controllable</li></ul><br/><b>Directions for use:</b><br/><ul><li>Apply the cream on face and massage gently</li></ul><ul><li>Use daily for best results</li></ul><br/><b>Safety Information:</b><br/><ul><li>Read the label carefully before use</li></ul><ul><li>Do not exceed the recommended dose</li></ul><ul><li>Keep out of the reach of children</li></ul><ul><li>Store in a cool dry place away from direct sunlight and heat</li></ul></div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-wso-skin-cream-otc539743",
        "ProductName": "Vicco Turmeric Wso Skin Cream: Buy 15 gm Cream at best price in India"
    },
    "170": {
        "Category": "Winter Care",
        "Id": 22,
        "Manufacture": "Vicco Laboratories",
        "ProductDesc": "<div class=\"ProductDescription__description-content___A_qCZ\">Vicco Turmeric Cream is an ayurvedic cream and it contains a blend of Turmeric and Sandalwood Oil as major ingredients.The cream protects the skin from harmful radiations and gives natural radiance.<br/><br/>Key benefits/uses of Vicco Turmeric Cream:<br/>- Turmeric has antiseptic, anti-acne and grooming properties<br/>- Protects the skin from harmful radiations<br/>- Vicco Turmeric Cream rejuvenates and revitalizes the skin and give it a natural radiance<br/>- Maintains the original pigmentation of the skin<br/>- Fights against blemishes, acne and other skin disorders<br/><br/>Direction for use/Dosage:<br/>As per the requirement or as directed by the physician.<br/><br/>Indications:<br/>Skin disorders, Acne, Blemishes, Skin pigmentation<br/><br/>Storage instructions:<br/>- Store in a cool, dry and dark place<br/>- Protect from direct sunlight<br/><br/>Safety information:<br/>- For external use only<br/>- Read the label carefully before use<br/>- Keep out of the reach and sight of children</div>",
        "ProductLink": "https://www.1mg.com/otc/vicco-turmeric-skin-cream-otc541310",
        "ProductName": "Vicco Turmeric Skin Cream: Buy 15 gm Cream at best price in India"
    }
  };
  var rows=$.map(res,function(value,index){
    return `<tr>
              <td>${value.Id}</td>
              <td>${value.ProductName}</td>
              <td>${value.Category}</td>
              <td>${value.Manufacture}</td>
              <td>${value.ProductDesc}</td>
              <td><a href="${value.ProductLink}" target='_blank'>Click Here</a></td>
            </tr>`
  });
  modal.find('#products-table tbody').html(rows.join(''));
});