couple_a = Couple.create(father: "Jack", mother: "Cleo", breed: "Golden Retriever")
couple_b = Couple.create(father: "Henry", mother: "Daisy", breed: "Bichon Frise")
couple_c = Couple.create(father: "Zeus", mother: "Samantha", breed: "German Shepherd")

puppy_1 = Puppy.create(name: "Max", breed: "Golden Retriever", price: 1167, sex: "male", couple_id: 1)
puppy_2 = Puppy.create(name: "Luna", breed: "Golden Retriever", price: 1192, sex: "female", couple_id: 1)
puppy_3 = Puppy.create(name: "Cooper", breed: "Golden Retriever", price: 1451, sex: "male", couple_id: 1)

puppy_4 = Puppy.create(name: "Maggie", breed: "Bichon Frise", price: 1118, sex: "female", couple_id: 2)
puppy_5 = Puppy.create(name: "Jackson", breed: "Bichon Frise", price: 1260, sex: "male", couple_id: 2)
puppy_6 = Puppy.create(name: "Zoe", breed: "Bichon Frise", price: 940, sex: "female", couple_id: 2)

puppy_7 = Puppy.create(name: "Clifford", breed: "German Shepherd", price: 1182, sex: "male", couple_id: 3)
puppy_8 = Puppy.create(name: "Dolly", breed: "German Shepherd", price: 965, sex: "female", couple_id: 3)
puppy_9 = Puppy.create(name: "Lucky", breed: "German Shepherd", price: 1091, sex: "male", couple_id: 3)

