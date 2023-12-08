import React, { useState, useEffect } from "react";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import classes from "./Settings.module.css";
import MultipleDropdown from "./functionals/MultipleDropdown";
import AccountSettings from "../sections/AccountSettings";

function Settings() {
  const isOwner = false; // true => user is a pet owner, false => user is a pet sitter
  const [petowner, setPetowner] = useState({
    amountPets: 0,
    about: "",
    mypets: [

    ]
  })

  const [userPreferences, setUserPreferences] = useState({
    residence: "Lower Austria",
    offeredServices: [],
    workableCities: [],
    suitablePets: [],
    unsuitablePets: [],
    hasDisabilities: false,
    ownsCar: true,
  });

  const [allCities, setAllCities] = useState(["City1", "City2", "City3"]); // Replace with actual city data
  const [allPets, setAllPets] = useState(["Dog", "Cat", "Bird"]); // Replace with actual pet data
  const [allServices, setAllServices] = useState([
    "Pet Sitting",
    "Pet Grooming",
    // ...
  ]);

  const handleServicesChange = (selectedServices) => {
    setUserPreferences((prevPreferences) => ({
      ...prevPreferences,
      offeredServices: selectedServices,
    }));
  };

  const [services, setServices] = useState([
    "Pet Sitting",
    "Pet Grooming",
    // ...
  ]);

  useEffect(() => {
    console.log(userPreferences.offeredServices)
  }, [userPreferences.offeredServices])

  
  const handleAmountPetsChange = (event) => {
    const amountPetsValue = event.target.value;
    // Hier kannst du weitere Validierungen hinzufügen, falls notwendig

    setPetowner({
      ...petowner,
      amountPets: amountPetsValue,
      mypets: Array.from({ length: amountPetsValue }, (_, index) => petowner.mypets[index] || {
        name: "",
        birthday: "",
        neededServices: [],
        about: ""
      })
    });
  };

  const handlePetChange = (index, field, value) => {
    setPetowner((prev) => ({
      ...prev,
      mypets: prev.mypets.map((pet, i) =>
        i === index ? { ...pet, [field]: value } : pet
      ),
    }));
  };

  const handleAboutChange = (value) => {
    setPetowner((prev) => ({
      ...prev,
      about: value,
    }));
  };

  return (
    <div>
      <Header></Header>
      <main className={classes.main}>
        {isOwner == false ? (
          <div className={classes.p_container}>
            <div className={classes.page_title}>
              Please give information about your services for the most
              qualitative matchmaking
            </div>
            <div className={classes.p_content}>
              <div className={classes.p_column_1}>
              <MultipleDropdown
                  label="Select workable cities"
                  options={allCities}
                  selectedOptions={userPreferences.workableCities}
                  onOptionsChange={(selectedOptions) =>
                    setUserPreferences((prevPreferences) => ({
                      ...prevPreferences,
                      workableCities: selectedOptions,
                    }))
                  }
                />
                <MultipleDropdown
                  label="Select suitable pets"
                  options={allPets}
                  selectedOptions={userPreferences.suitablePets}
                  onOptionsChange={(selectedOptions) =>
                    setUserPreferences((prevPreferences) => ({
                      ...prevPreferences,
                      suitablePets: selectedOptions,
                    }))
                  }
                />
                <MultipleDropdown
                  label="Select unsuitable pets"
                  options={allPets}
                  selectedOptions={userPreferences.unsuitablePets}
                  onOptionsChange={(selectedOptions) =>
                    setUserPreferences((prevPreferences) => ({
                      ...prevPreferences,
                      unsuitablePets: selectedOptions,
                    }))
                  }
                />
                <MultipleDropdown
                  label="Select offered services"
                  options={allServices}
                  selectedOptions={userPreferences.offeredServices}
                  onOptionsChange={handleServicesChange}
                />
                <div className={classes.save_button}>SAVE</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.p_container}>
            <div className={classes.page_title}>
            Introduce your pets to achieve maximum matchmaking quality
            </div>
            <div className={classes.input_container_first}>
                <label htmlFor="amountPets">Anzahl der Haustiere</label>
                <input
                    className={classes.selectinput}
                    type="number"
                    id="amountPets"
                    name="amountPets"
                    value={petowner.amountPets}
                    onChange={handleAmountPetsChange}
                    max={10}
                    min={0}
                />
            </div>
            {petowner.mypets.map((pet, index) => (
                <div className={classes.pets_container} key={index}>
                    <div className={classes.pet_title}>{index + 1}. Pet</div>
                    <div className={classes.pet_input_container}>
                        <label className={classes.pet_label}>Pet's name</label>
                        <input
                            type="text"
                            className={classes.pet_input}
                            placeholder="e.g felix"
                            id={`name-${index}`}
                            name={`name-${index}`}
                            value={pet.name}
                            onChange={(e) => handlePetChange(index, 'name', e.target.value)}
                            required
                        />
                    </div>
                    <div className={classes.pet_input_container}>
                        <label htmlFor={`birthday-${index}`} className={classes.pet_label}>Pet's birthday:</label>
                        <input
                            type="date"
                            className={classes.pet_input}
                            id={`birthday-${index}`}
                            name={`birthday-${index}`}
                            value={pet.birthday}
                            onChange={(e) => handlePetChange(index, 'birthday', e.target.value)}
                            required
                        />
                    </div>
                    <MultipleDropdown
                        label="What does your pet need?"
                        options={['Grooming', 'Fütterung', 'Spielzeit', 'Tierarztbesuch']} // Beispieloptionen
                        selectedOptions={pet.neededServices}
                        onOptionsChange={(updatedOptions) => handlePetChange(index, 'neededServices', updatedOptions)}
                    />
                    <div className={classes.pet_input_container}>
                        <label htmlFor={`about-${index}`} className={classes.pet_label}>About {petowner.mypets[index].name}</label>
                        <textarea
                            className={classes.pet_textarea}
                            id={`about-${index}`}
                            name={`about-${index}`}
                            value={pet.about}
                            onChange={(e) => handlePetChange(index, 'about', e.target.value)}
                            required
                        />
                    </div>
                </div>
            ))}

            <div className={classes.aboutme_textarea}>
                <label className={classes.pet_label}>About me</label>
                <textarea
                    className={classes.pet_textarea}
                    value={petowner.about}
                    onChange={(e) => handleAboutChange(e.target.value)}
                />
            </div>
            <div className={classes.save_button}>Save</div>
        </div>
    
            )}

            <AccountSettings  />
        </main>
        <Footer Name={"Nisa"} Surname={"Arslan"} />
        </div>
  );
}

export default Settings;
