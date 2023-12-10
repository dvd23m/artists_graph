const nodes = [{'id': 'Tiësto', 'group': 'artist'},
{'id': 'Armin van Buuren', 'group': 'artist'},
{'id': 'Major League', 'group': 'artist'},
{'id': 'Suzanne Palmer', 'group': 'artist'},
{'id': 'Junkie XL', 'group': 'artist'},
{'id': 'Nicola Hitchcock', 'group': 'artist'},
{'id': 'BT', 'group': 'artist'},
{'id': 'Kirsty Hawkshaw', 'group': 'artist'},
{'id': 'Allure', 'group': 'artist'},
{'id': 'Maxi Jazz', 'group': 'artist'},
{'id': 'Christian Burns', 'group': 'artist'},
{'id': 'JES', 'group': 'artist'},
{'id': 'Julie Thompson', 'group': 'artist'},
{'id': 'C.C. Sheffield', 'group': 'artist'},
{'id': 'Nelly Furtado', 'group': 'artist'},
{'id': 'Three 6 Mafia', 'group': 'artist'},
{'id': 'Sean Kingston', 'group': 'artist'},
{'id': 'Flo Rida', 'group': 'artist'},
{'id': 'Diplo', 'group': 'artist'},
{'id': 'Busta Rhymes', 'group': 'artist'},
{'id': 'Kaskade', 'group': 'artist'},
{'id': 'Haley Gibby', 'group': 'artist'},
{'id': 'Mark Knight', 'group': 'artist'},
{'id': 'Dino Lenny', 'group': 'artist'},
{'id': 'My Name Is Kay', 'group': 'artist'},
{'id': 'Steve Aoki', 'group': 'artist'},
{'id': 'Wolfgang Gartner', 'group': 'artist'},
{'id': 'Luciana', 'group': 'artist'},
{'id': 'Showtek', 'group': 'artist'},
{'id': 'Kyler England', 'group': 'artist'},
{'id': 'Nari & Milani', 'group': 'artist'},
{'id': 'Delayers', 'group': 'artist'},
{'id': 'Disco Fries', 'group': 'artist'},
{'id': 'Alvaro', 'group': 'artist'},
{'id': 'Twoloud', 'group': 'artist'},
{'id': 'Matthew Koma', 'group': 'artist'},
{'id': 'Icona Pop', 'group': 'artist'},
{'id': 'MOTi', 'group': 'artist'},
{'id': 'KSHMR', 'group': 'artist'},
{'id': 'Vassy', 'group': 'artist'},
{'id': 'Martin Garrix', 'group': 'artist'},
{'id': 'DallasK', 'group': 'artist'},
{'id': 'The Chainsmokers', 'group': 'artist'},
{'id': 'Oliver Heldens', 'group': 'artist'},
{'id': 'Natalie La Rose', 'group': 'artist'},
{'id': 'Bobby Puma', 'group': 'artist'},
{'id': 'Ummet Ozcan', 'group': 'artist'},
{'id': 'Mike Williams', 'group': 'artist'},
{'id': 'Bright Sparks', 'group': 'artist'},
{'id': 'Gucci Mane', 'group': 'artist'},
{'id': 'Sevenn', 'group': 'artist'},
{'id': 'Matisse & Sadko', 'group': 'artist'},
{'id': 'Dzeko', 'group': 'artist'},
{'id': 'Preme', 'group': 'artist'},
{'id': 'Post Malone', 'group': 'artist'},
{'id': 'Lena Leon', 'group': 'artist'},
{'id': 'Justin Caruso', 'group': 'artist'},
{'id': 'Kelli‐Leigh', 'group': 'artist'},
{'id': 'Jonas Blue', 'group': 'artist'},
{'id': 'Rita Ora', 'group': 'artist'},
{'id': 'Moska', 'group': 'artist'},
{'id': 'Stevie Appleton', 'group': 'artist'},
{'id': 'Becky Hill', 'group': 'artist'},
{'id': 'VER:WEST', 'group': 'artist'},
{'id': 'Ty Dolla $ign', 'group': 'artist'},
{'id': 'KAROL G', 'group': 'artist'},
{'id': 'Tomhio', 'group': 'artist'},
{'id': 'Killfake', 'group': 'artist'},
{'id': 'Lucas & Steve', 'group': 'artist'},
{'id': 'Ava Max', 'group': 'artist'},
{'id': 'Black Eyed Peas', 'group': 'artist'},
{'id': 'Farruko', 'group': 'artist'},
{'id': 'Tegan and Sara', 'group': 'artist'},
{'id': 'David Guetta', 'group': 'artist'},
{'id': 'Robert Owens', 'group': 'artist'},
{'id': 'Chris Willis', 'group': 'artist'},
{'id': 'David Bowie', 'group': 'artist'},
{'id': 'Moné', 'group': 'artist'},
{'id': 'JD Davis', 'group': 'artist'},
{'id': 'The Egg', 'group': 'artist'},
{'id': 'Cozi', 'group': 'artist'},
{'id': 'Tocadisco', 'group': 'artist'},
{'id': 'Steve Angello', 'group': 'artist'},
{'id': 'Sebastian Ingrosso', 'group': 'artist'},
{'id': 'Kelly Rowland', 'group': 'artist'},
{'id': 'Estelle', 'group': 'artist'},
{'id': 'Akon', 'group': 'artist'},
{'id': 'Kid Cudi', 'group': 'artist'},
{'id': 'Fergie', 'group': 'artist'},
{'id': 'LMFAO', 'group': 'artist'},
{'id': 'Afrojack', 'group': 'artist'},
{'id': 'Niles Mason', 'group': 'artist'},
{'id': 'Rihanna', 'group': 'artist'},
{'id': 'Snoop Dogg', 'group': 'artist'},
{'id': 'Nicki Minaj', 'group': 'artist'},
{'id': 'Taio Cruz', 'group': 'artist'},
{'id': 'Ludacris', 'group': 'artist'},
{'id': 'Usher', 'group': 'artist'},
{'id': 'Sia', 'group': 'artist'},
{'id': 'Jack Back', 'group': 'artist'},
{'id': 'Nicky Romero', 'group': 'artist'},
{'id': 'Ne‐Yo', 'group': 'artist'},
{'id': 'Max Elto', 'group': 'artist'},
{'id': 'GLOWINTHEDARK', 'group': 'artist'},
{'id': 'Harrison', 'group': 'artist'},
{'id': 'Skylar Grey', 'group': 'artist'},
{'id': 'Kaz James', 'group': 'artist'},
{'id': 'Sam Martin', 'group': 'artist'},
{'id': 'Emeli Sandé', 'group': 'artist'},
{'id': 'MAGIC!', 'group': 'artist'},
{'id': 'Sonny Wilson', 'group': 'artist'},
{'id': 'Fetty Wap', 'group': 'artist'},
{'id': 'Zara Larsson', 'group': 'artist'},
{'id': 'Cedric Gervais', 'group': 'artist'},
{'id': 'Robin Schulz', 'group': 'artist'},
{'id': 'Cheat Codes', 'group': 'artist'},
{'id': 'Lil Wayne', 'group': 'artist'},
{'id': 'Ester Dean', 'group': 'artist'},
{'id': 'Justin Bieber', 'group': 'artist'},
{'id': 'Dimitri Vegas & Like Mike', 'group': 'artist'},
{'id': 'Kiiara', 'group': 'artist'},
{'id': 'Charli XCX', 'group': 'artist'},
{'id': 'French Montana', 'group': 'artist'},
{'id': 'Jamie Scott', 'group': 'artist'},
{'id': 'Romy Dya', 'group': 'artist'},
{'id': 'Sean Paul', 'group': 'artist'},
{'id': 'Becky G', 'group': 'artist'},
{'id': 'Brooks', 'group': 'artist'},
{'id': 'Anne‐Marie', 'group': 'artist'},
{'id': 'Black Coffee', 'group': 'artist'},
{'id': 'Delilah Montagu', 'group': 'artist'},
{'id': 'Jason Derulo', 'group': 'artist'},
{'id': 'Willy William', 'group': 'artist'},
{'id': 'Netsky', 'group': 'artist'},
{'id': 'Loote', 'group': 'artist'},
{'id': 'Tom Staar', 'group': 'artist'},
{'id': 'RAYE', 'group': 'artist'},
{'id': 'Daddy Yankee', 'group': 'artist'},
{'id': 'Afro Bros', 'group': 'artist'},
{'id': 'Natti Natasha', 'group': 'artist'},
{'id': 'Martin Solveig', 'group': 'artist'},
{'id': 'MORTEN', 'group': 'artist'},
{'id': 'Aloe Blacc', 'group': 'artist'},
{'id': 'Lovespeake', 'group': 'artist'},
{'id': 'Lanie Gardner', 'group': 'artist'},
{'id': 'Joel Corry', 'group': 'artist'},
{'id': 'Galantis', 'group': 'artist'},
{'id': 'Little Mix', 'group': 'artist'},
{'id': 'MistaJam', 'group': 'artist'},
{'id': 'John Newman', 'group': 'artist'},
{'id': 'Devito', 'group': 'artist'},
{'id': 'Bebe Rexha', 'group': 'artist'},
{'id': 'A Boogie Wit da Hoodie', 'group': 'artist'},
{'id': 'Roland Clark', 'group': 'artist'},
{'id': 'Faithless', 'group': 'artist'},
{'id': 'Felix da Housecat', 'group': 'artist'},
{'id': 'Miss Kittin', 'group': 'artist'},
{'id': 'Bryson Tiller', 'group': 'artist'},
{'id': 'Ella Henderson', 'group': 'artist'},
{'id': 'Sigala', 'group': 'artist'},
{'id': 'Sam Ryder', 'group': 'artist'},
{'id': 'Chris Brown', 'group': 'artist'},
{'id': 'Fat Joe', 'group': 'artist'},
{'id': 'Remy Ma', 'group': 'artist'},
{'id': 'Infa‐Red', 'group': 'artist'},
{'id': 'Bruno Mars', 'group': 'artist'},
{'id': 'Angerfist', 'group': 'artist'},
{'id': 'DJ Vince', 'group': 'artist'},
{'id': 'Predator', 'group': 'artist'},
{'id': 'DJ Outblast', 'group': 'artist'},
{'id': 'MC Nolz', 'group': 'artist'},
{'id': 'MC Tha Watcher', 'group': 'artist'},
{'id': 'Miss K8', 'group': 'artist'},
{'id': 'The Bloody Beetroots', 'group': 'artist'},
{'id': 'Sidney Samson', 'group': 'artist'},
{'id': 'Miss Palmer', 'group': 'artist'},
{'id': 'Rivers Cuomo', 'group': 'artist'},
{'id': 'Diana Gordon', 'group': 'artist'},
{'id': 'Angger Dimas', 'group': 'artist'},
{'id': 'Iggy Azalea', 'group': 'artist'},
{'id': 'Chris Lake', 'group': 'artist'},
{'id': 'Tujamo', 'group': 'artist'},
{'id': 'Linkin Park', 'group': 'artist'},
{'id': 'R3HAB', 'group': 'artist'},
{'id': 'Deorro', 'group': 'artist'},
{'id': 'Waka Flocka Flame', 'group': 'artist'},
{'id': 'Kid Ink', 'group': 'artist'},
{'id': 'Moxie Raia', 'group': 'artist'},
{'id': 'Felix Jaehn', 'group': 'artist'},
{'id': 'Adam Lambert', 'group': 'artist'},
{'id': 'Boehm', 'group': 'artist'},
{'id': 'Don Diablo', 'group': 'artist'},
{'id': 'Lush & Simon', 'group': 'artist'},
{'id': 'Louis Tomlinson', 'group': 'artist'},
{'id': 'Young Egypt', 'group': 'artist'},
{'id': 'DVBBS', 'group': 'artist'},
{'id': '2 Chainz', 'group': 'artist'},
{'id': 'Play-N-Skillz', 'group': 'artist'},
{'id': 'Elvis Crespo', 'group': 'artist'},
{'id': 'Quintino', 'group': 'artist'},
{'id': 'Laidback Luke', 'group': 'artist'},
{'id': 'Marnik', 'group': 'artist'},
{'id': 'MAKJ', 'group': 'artist'},
{'id': 'Max Styler', 'group': 'artist'},
{'id': 'Ina Wroldsen', 'group': 'artist'},
{'id': 'BTS', 'group': 'artist'},
{'id': 'Alan Walker', 'group': 'artist'},
{'id': 'ISÁK', 'group': 'artist'},
{'id': 'Dagny', 'group': 'artist'},
{'id': 'MONSTA X', 'group': 'artist'},
{'id': 'Alok', 'group': 'artist'},
{'id': 'Kris Kiss', 'group': 'artist'},
{'id': 'Darren Criss', 'group': 'artist'},
{'id': 'Timmy Trumpet', 'group': 'artist'},
{'id': 'Dr. Phunk', 'group': 'artist'},
{'id': 'Backstreet Boys', 'group': 'artist'},
{'id': 'Sting', 'group': 'artist'},
{'id': 'SHAED', 'group': 'artist'},
{'id': 'LAY', 'group': 'artist'},
{'id': 'will.i.am', 'group': 'artist'},
{'id': 'Frank Walker', 'group': 'artist'},
{'id': 'AJ Mitchell', 'group': 'artist'},
{'id': 'Yellow Claw', 'group': 'artist'},
{'id': 'RUNN', 'group': 'artist'},
{'id': 'SEKAI NO OWARI', 'group': 'artist'},
{'id': 'DJ Diesel', 'group': 'artist'},
{'id': 'Lil Jon', 'group': 'artist'},
{'id': 'Chiddy Bang', 'group': 'artist'},
{'id': 'Rune RK', 'group': 'artist'},
{'id': 'Nicholas Furlong', 'group': 'artist'},
{'id': 'Flux Pavilion', 'group': 'artist'},
{'id': 'Fall Out Boy', 'group': 'artist'},
{'id': 'NERVO', 'group': 'artist'},
{'id': 'Tony Junior', 'group': 'artist'},
{'id': 'Walk off the Earth', 'group': 'artist'},
{'id': 'Sherry St. Germain', 'group': 'artist'},
{'id': 'blink‐182', 'group': 'artist'},
{'id': 'Rich the Kid', 'group': 'artist'},
{'id': 'iLoveMakonnen', 'group': 'artist'},
{'id': 'Bodycode', 'group': 'artist'},
{'id': 'Nina Kraviz', 'group': 'artist'},
{'id': 'Gimmick', 'group': 'artist'},
{'id': 'Darkstar', 'group': 'artist'},
{'id': 'Rising Star', 'group': 'artist'},
{'id': 'Perpetuous Dreamer', 'group': 'artist'},
{'id': 'System F', 'group': 'artist'},
{'id': 'Ray Wilson', 'group': 'artist'},
{'id': 'Justine Suissa', 'group': 'artist'},
{'id': 'M.I.K.E.', 'group': 'artist'},
{'id': 'Jan Vayne', 'group': 'artist'},
{'id': 'Nadia Ali', 'group': 'artist'},
{'id': 'Racoon', 'group': 'artist'},
{'id': 'Herman Brood', 'group': 'artist'},
{'id': 'Rank 1', 'group': 'artist'},
{'id': 'Kush', 'group': 'artist'},
{'id': 'Tony Scott', 'group': 'artist'},
{'id': 'DJ Remy & Roland Klinkenberg', 'group': 'artist'},
{'id': 'Susana', 'group': 'artist'},
{'id': 'DJ Shah', 'group': 'artist'},
{'id': 'Chris Jones', 'group': 'artist'},
{'id': 'Sharon den Adel', 'group': 'artist'},
{'id': 'Jennifer Rene', 'group': 'artist'},
{'id': 'Jacqueline Govaert', 'group': 'artist'},
{'id': 'VanVelzen', 'group': 'artist'},
{'id': 'Sophie Ellis‐Bextor', 'group': 'artist'},
{'id': 'Laura V', 'group': 'artist'},
{'id': 'Gaia', 'group': 'artist'},
{'id': 'Ferry Corsten', 'group': 'artist'},
{'id': 'Adam Young', 'group': 'artist'},
{'id': 'Ana Criado', 'group': 'artist'},
{'id': 'Ørjan Nilsen', 'group': 'artist'},
{'id': 'Fiora', 'group': 'artist'},
{'id': 'Markus Schulz', 'group': 'artist'},
{'id': 'ARTY', 'group': 'artist'},
{'id': 'W&W', 'group': 'artist'},
{'id': 'Trevor Guthrie', 'group': 'artist'},
{'id': 'Cindy Alma', 'group': 'artist'},
{'id': 'Andrew Rayel', 'group': 'artist'},
{'id': 'Mark Sixma', 'group': 'artist'},
{'id': 'Mr. Probz', 'group': 'artist'},
{'id': 'Jean‐Michel Jarre', 'group': 'artist'},
{'id': 'Kensington', 'group': 'artist'},
{'id': 'Human Resource', 'group': 'artist'},
{'id': 'Garibay', 'group': 'artist'},
{'id': 'Olaf Blackwood', 'group': 'artist'},
{'id': 'Josh Cumbee', 'group': 'artist'},
{'id': 'James Newman', 'group': 'artist'},
{'id': 'Vini Vici', 'group': 'artist'},
{'id': 'Sunnery James & Ryan Marciano', 'group': 'artist'},
{'id': 'Bonnie McKee', 'group': 'artist'},
{'id': 'Marco Borsato', 'group': 'artist'},
{'id': 'Davina Michelle', 'group': 'artist'},
{'id': 'MaRLo', 'group': 'artist'},
{'id': 'Mila Josef', 'group': 'artist'},
{'id': 'Fatum', 'group': 'artist'},
{'id': 'Brennan Heart', 'group': 'artist'},
{'id': 'Andreas Moe', 'group': 'artist'},
{'id': 'Blasterjaxx', 'group': 'artist'},
{'id': 'Duncan Laurence', 'group': 'artist'},
{'id': 'Avalan', 'group': 'artist'},
{'id': 'Alesso', 'group': 'artist'},
{'id': 'DubVision', 'group': 'artist'},
{'id': 'YOU', 'group': 'artist'},
{'id': 'Sam Gray', 'group': 'artist'},
{'id': 'Eric Vloeimans', 'group': 'artist'},
{'id': 'Hardwell', 'group': 'artist'},
{'id': 'I-Fan', 'group': 'artist'},
{'id': 'Funkadelic', 'group': 'artist'},
{'id': 'Franky Rizardo', 'group': 'artist'},
{'id': 'Chuckie', 'group': 'artist'},
{'id': 'Ambush', 'group': 'artist'},
{'id': 'Joeysuki', 'group': 'artist'},
{'id': 'Dannic', 'group': 'artist'},
{'id': 'Mitch Crown', 'group': 'artist'},
{'id': 'Red Carpet', 'group': 'artist'},
{'id': 'Amba Shepherd', 'group': 'artist'},
{'id': 'Dyro', 'group': 'artist'},
{'id': 'Bright Lights', 'group': 'artist'},
{'id': 'Joey Dale', 'group': 'artist'},
{'id': 'Fatman Scoop', 'group': 'artist'},
{'id': 'Haris', 'group': 'artist'},
{'id': 'Jake Reese', 'group': 'artist'},
{'id': 'Thomas Newson', 'group': 'artist'},
{'id': 'Austin Mahone', 'group': 'artist'},
{'id': 'Bizzey', 'group': 'artist'},
{'id': 'Lil’ Kleine', 'group': 'artist'},
{'id': 'Chivv', 'group': 'artist'},
{'id': 'Wildstylez', 'group': 'artist'},
{'id': 'KiFi', 'group': 'artist'},
{'id': 'Kaaze', 'group': 'artist'},
{'id': 'Suyano', 'group': 'artist'},
{'id': 'Richie Loop', 'group': 'artist'},
{'id': 'VINAI', 'group': 'artist'},
{'id': 'Cam Meekins', 'group': 'artist'},
{'id': 'Conor Maynard', 'group': 'artist'},
{'id': 'Maddix', 'group': 'artist'},
{'id': '4 Strings', 'group': 'artist'},
{'id': 'Sub Zero Project', 'group': 'artist'},
{'id': 'Henry Fong', 'group': 'artist'},
{'id': 'Mr. Vegas', 'group': 'artist'},
{'id': 'Miss Monique', 'group': 'artist'},
{'id': 'The Alexsander', 'group': 'artist'},
{'id': 'Vania', 'group': 'artist'},
{'id': 'Nora en Pure', 'group': 'artist'},
{'id': 'Passenger 10', 'group': 'artist'},
{'id': 'Penny Foster', 'group': 'artist'},
{'id': 'Redondo', 'group': 'artist'},
{'id': 'Ashibah', 'group': 'artist'},
{'id': 'Golden Boy', 'group': 'artist'},
{'id': 'Kris Menace', 'group': 'artist'},
{'id': 'Guy Gerber', 'group': 'artist'},
{'id': 'ANNA', 'group': 'artist'},
{'id': 'The Partysquad', 'group': 'artist'},
{'id': 'Major Lazer', 'group': 'artist'},
{'id': 'Vybz Kartel', 'group': 'artist'},
{'id': 'Bobby Burns', 'group': 'artist'},
{'id': 'Eva Simons', 'group': 'artist'},
{'id': 'Pitbull', 'group': 'artist'},
{'id': 'Nayer', 'group': 'artist'},
{'id': 'Shermanology', 'group': 'artist'},
{'id': 'Spree Wilson', 'group': 'artist'},
{'id': 'Mike Taylor', 'group': 'artist'},
{'id': 'Hawkboy', 'group': 'artist'},
{'id': 'Oliver Rosa', 'group': 'artist'},
{'id': 'Dirtcaps', 'group': 'artist'},
{'id': 'Stush', 'group': 'artist'},
{'id': 'Stanaj', 'group': 'artist'},
{'id': 'D.O.D.', 'group': 'artist'},
{'id': 'TIM-BER', 'group': 'artist'},
{'id': 'Jewelz & Sparks', 'group': 'artist'},
{'id': 'Chico Rose', 'group': 'artist'},
{'id': 'Yves V', 'group': 'artist'},
{'id': 'Ally Brooke', 'group': 'artist'},
{'id': 'Jeremih', 'group': 'artist'},
{'id': 'Azteck', 'group': 'artist'},
{'id': 'Imanbek', 'group': 'artist'},
{'id': 'Gia Koka', 'group': 'artist'},
{'id': 'Never Sleeps', 'group': 'artist'},
{'id': 'Keane', 'group': 'artist'},
{'id': 'Wrabel', 'group': 'artist'},
{'id': 'Thirty Seconds to Mars', 'group': 'artist'},
{'id': 'Scott Brown', 'group': 'artist'},
{'id': 'Paul Elstak', 'group': 'artist'},
{'id': 'DJ Rab S', 'group': 'artist'},
{'id': 'Marc Smith', 'group': 'artist'},
{'id': 'Gillian Tennant', 'group': 'artist'},
{'id': 'DJ Neophyte', 'group': 'artist'},
{'id': 'DJ Brisk', 'group': 'artist'},
{'id': 'Brisk & Trixxy', 'group': 'artist'},
{'id': 'Mark Smith', 'group': 'artist'},
{'id': 'Plus System', 'group': 'artist'},
{'id': 'Ultrabeat', 'group': 'artist'},
{'id': 'Si Thompson', 'group': 'artist'},
{'id': 'Special D.', 'group': 'artist'},
{'id': 'Re-Style', 'group': 'artist'},
{'id': 'Ceci', 'group': 'artist'},
{'id': 'Kelly C', 'group': 'artist'},
{'id': 'Ganah', 'group': 'artist'},
{'id': 'Bridson', 'group': 'artist'},
{'id': 'Lenny Dee', 'group': 'artist'},
{'id': 'DJ Rob', 'group': 'artist'},
{'id': 'MC Hughie Babe', 'group': 'artist'},
{'id': 'The Stunned Guys', 'group': 'artist'},
{'id': 'Teenage Warning', 'group': 'artist'},
{'id': 'Urban Menace', 'group': 'artist'},
{'id': 'Attic & Stylzz', 'group': 'artist'},
{'id': 'DJ Panic', 'group': 'artist'},
{'id': 'DJ Distortion', 'group': 'artist'},
{'id': 'Firestone', 'group': 'artist'},
{'id': 'DJ Dione', 'group': 'artist'},
{'id': 'Tommyknocker', 'group': 'artist'},
{'id': 'New Kids', 'group': 'artist'},
{'id': 'Jantine', 'group': 'artist'},
{'id': 'Psycho Boys Club', 'group': 'artist'},
{'id': 'Restrained', 'group': 'artist'},
{'id': 'electronic', 'group': 'musical_genre'},
{'id': 'trance', 'group': 'musical_genre'},
{'id': 'hard trance', 'group': 'musical_genre'},
{'id': 'progressive trance', 'group': 'musical_genre'},
{'id': 'progressive house', 'group': 'musical_genre'},
{'id': 'techno', 'group': 'musical_genre'},
{'id': 'tech trance', 'group': 'musical_genre'},
{'id': 'house', 'group': 'musical_genre'},
{'id': 'tribal house', 'group': 'musical_genre'},
{'id': 'dutch trance', 'group': 'musical_genre'},
{'id': 'male vocal trance', 'group': 'musical_genre'},
{'id': 'male vocals', 'group': 'musical_genre'},
{'id': 'spoken vocals', 'group': 'musical_genre'},
{'id': 'vocal trance', 'group': 'musical_genre'},
{'id': 'electro', 'group': 'musical_genre'},
{'id': 'tech house', 'group': 'musical_genre'},
{'id': 'electro house', 'group': 'musical_genre'},
{'id': 'dance', 'group': 'musical_genre'},
{'id': 'hip hop', 'group': 'musical_genre'},
{'id': 'euro house', 'group': 'musical_genre'},
{'id': 'dubstep', 'group': 'musical_genre'},
{'id': 'rnb', 'group': 'musical_genre'},
{'id': 'swing', 'group': 'musical_genre'},
{'id': 'festival progressive house', 'group': 'musical_genre'},
{'id': 'dance-pop', 'group': 'musical_genre'},
{'id': 'pop', 'group': 'musical_genre'},
{'id': 'bassline', 'group': 'musical_genre'},
{'id': 'electropop', 'group': 'musical_genre'},
{'id': 'deep house', 'group': 'musical_genre'},
{'id': 'hardstyle', 'group': 'musical_genre'},
{'id': 'trap', 'group': 'musical_genre'},
{'id': 'psytrance', 'group': 'musical_genre'},
{'id': 'other pop', 'group': 'musical_genre'},
{'id': 'rhythm blues', 'group': 'musical_genre'},
{'id': 'todd in the shadows', 'group': 'musical_genre'},
{'id': 'electronica', 'group': 'musical_genre'},
{'id': 'electro pop', 'group': 'musical_genre'},
{'id': 'pop rap', 'group': 'musical_genre'},
{'id': 'who s that chick', 'group': 'musical_genre'},
{'id': 'hip house', 'group': 'musical_genre'},
{'id': 'david guetta', 'group': 'musical_genre'},
{'id': 'edm', 'group': 'musical_genre'},
{'id': 'vocal', 'group': 'musical_genre'},
{'id': 'acid house', 'group': 'musical_genre'},
{'id': 'future bass', 'group': 'musical_genre'},
{'id': 'future bounce', 'group': 'musical_genre'},
{'id': 'synth-pop', 'group': 'musical_genre'},
{'id': 'synthwave', 'group': 'musical_genre'},
{'id': 'rock', 'group': 'musical_genre'},
{'id': 'reggae', 'group': 'musical_genre'},
{'id': 'big room', 'group': 'musical_genre'},
{'id': 'gabber', 'group': 'musical_genre'},
{'id': 'breaks', 'group': 'musical_genre'},
{'id': 'dutch house', 'group': 'musical_genre'},
{'id': 'moombahton', 'group': 'musical_genre'},
{'id': 'big room house', 'group': 'musical_genre'},
{'id': 'alternative rock', 'group': 'musical_genre'},
{'id': 'trap edm', 'group': 'musical_genre'},
{'id': 'minimal', 'group': 'musical_genre'},
{'id': 'disco', 'group': 'musical_genre'},
{'id': 'breakbeat', 'group': 'musical_genre'},
{'id': 'downtempo', 'group': 'musical_genre'},
{'id': 'symphonic trance', 'group': 'musical_genre'},
{'id': 'uplifting', 'group': 'musical_genre'},
{'id': 'uplifting trance', 'group': 'musical_genre'},
{'id': 'melodic trance', 'group': 'musical_genre'},
{'id': 'funk', 'group': 'musical_genre'},
{'id': 'soul', 'group': 'musical_genre'},
{'id': 'armin van buuren', 'group': 'musical_genre'},
{'id': 'best of', 'group': 'musical_genre'},
{'id': 'big room trance', 'group': 'musical_genre'},
{'id': 'deep techno', 'group': 'musical_genre'},
{'id': 'christmas', 'group': 'musical_genre'},
{'id': 'ballad', 'group': 'musical_genre'},
{'id': 'euphoric hardstyle', 'group': 'musical_genre'},
{'id': 'nederpop', 'group': 'musical_genre'},
{'id': 'spoken word', 'group': 'musical_genre'},
{'id': 'hard techno', 'group': 'musical_genre'},
{'id': 'smiley on cover', 'group': 'musical_genre'},
{'id': 'hardcore', 'group': 'musical_genre'},
{'id': 'melodic techno', 'group': 'musical_genre'},
{'id': 'breakcore', 'group': 'musical_genre'},
{'id': 'experimental', 'group': 'musical_genre'},
{'id': 'idm', 'group': 'musical_genre'},
{'id': 'electronic; pop', 'group': 'musical_genre'},
{'id': 'v a', 'group': 'musical_genre'},
{'id': 'dance and house', 'group': 'musical_genre'},
{'id': 'rap', 'group': 'musical_genre'},
{'id': '124 bpm', 'group': 'musical_genre'},
{'id': 'hard house', 'group': 'musical_genre'},
{'id': 'happy hardcore', 'group': 'musical_genre'},
{'id': 'uk hardcore', 'group': 'musical_genre'},
{'id': 'eurodance', 'group': 'musical_genre'}]