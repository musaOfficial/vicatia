import React, { useState, useEffect } from 'react';
import classes from './Petsitters.module.css';
import Footer from '../ui/Footer';
import Header from '../ui/Header';
import MultipleDropdown from './functionals/MultipleDropdown';
import services from '../data/services';
import SitterCard from './functionals/SitterCard';
function Petsitters() {

    const [petsitters, setPetsitters] = useState([
        {
          user_id: 1,
          profileImage: '/images/sitter.jpg',
          firstName: 'John',
          lastName: 'Doe',
          birthday: '1990-01-15',
          city: 'Vienna',
          rating: 4.5,
          about_me: 'I love taking care of pets and ensuring they are happy and healthy.',
        },
        {
          user_id: 2,
          profileImage: '/images/sitter.jpg',
          firstName: 'Jane',
          lastName: 'Smith',
          birthday: '1985-06-22',
          city: 'Berlin',
          rating: 2.2,
          about_me: 'Experienced petsitter with a passion for animals of all kinds.',
        },
        {
          user_id: 3,
          profileImage: '/images/sitter.jpg',
          firstName: 'Michael',
          lastName: 'Johnson',
          birthday: '1982-09-10',
          city: 'Paris',
          rating: 3.8,
          about_me: 'Dedicated to providing top-notch care for your furry friends.',
        },
        {
          user_id: 4,
          profileImage: '/images/sitter.jpg',
          firstName: 'Emily',
          lastName: 'Anderson',
          birthday: '1993-04-02',
          city: 'New York',
          rating: 1.0,
          about_me: 'Passionate about creating a loving environment for your pets.',
        },
        {
          user_id: 5,
          profileImage: '/images/sitter.jpg',
          firstName: 'David',
          lastName: 'Clark',
          birthday: '1988-11-18',
          city: 'London',
          rating: 0.7,
          about_me: 'Experienced in handling pets of various sizes and breeds.',
        },
        {
          user_id: 6,
          profileImage: '/images/sitter.jpg',
          firstName: 'Megan',
          lastName: 'Taylor',
          birthday: '1980-07-30',
          city: 'Sydney',
          rating: 1.3,
          about_me: 'Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.Committed to making every pet feel safe and loved.',
        },
        {
          user_id: 7,
          profileImage: '/images/sitter.jpg',
          firstName: 'Robert',
          lastName: 'Miller',
          birthday: '1987-02-14',
          city: 'Tokyo',
          rating: 3.6,
          about_me: 'Skilled in pet care and behavioral training.',
        },
        {
          user_id: 8,
          profileImage: '/images/sitter.jpg',
          firstName: 'Amanda',
          lastName: 'Brown',
          birthday: '1991-08-05',
          city: 'Toronto',
          rating: 4.9,
          about_me: 'Devoted to creating a positive experience for your pets.',
        },
        {
          user_id: 9,
          profileImage: '/images/sitter.jpg',
          firstName: 'Christopher',
          lastName: 'Hill',
          birthday: '1984-03-25',
          city: 'Rome',
          rating: 3.4,
          about_me: 'Passionate about animal welfare and happiness.',
        },
        {
          user_id: 10,
          profileImage: '/images/sitter.jpg',
          firstName: 'Olivia',
          lastName: 'Turner',
          birthday: '1989-12-12',
          city: 'Cape Town',
          rating: 2.1,
          about_me: 'Experienced in providing love and care for pets of all kinds.',
        },
      ]);

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Albania");
  const [cities, setCities] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServicesChange = (services) => {
    setSelectedServices(services);
  };

  const handleCitiesChange = (cities) => {
    setSelectedCities(cities);
  };

  useEffect(() => {
    // Städte für das festgelegte Land ("Albania") laden
    const fetchCities = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country: selectedCountry }),
        });

        const data = await response.json();
        // Annahme: Die API gibt die Städte im Datenfeld "data" zurück
        const cities = data.data;
        setCities(cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [selectedCountry]);

  const handleRemoveCity = (removedCity) => {
    const updatedCities = selectedCities.filter((city) => city !== removedCity);
    setSelectedCities(updatedCities);
  };

  const [search, setSearch] = useState("");

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <div className={classes.filter_container}>
          <MultipleDropdown
            label="Select Cities"
            options={cities}
            selectedOptions={selectedCities}
            onOptionsChange={handleCitiesChange}
          />
          <div className={classes._seperator}></div>
          <MultipleDropdown
            label="Select Services"
            options={services}
            selectedOptions={selectedServices}
            onOptionsChange={handleServicesChange}
          />
        </div>
        <div className={classes.results_container}>
            <div className={classes.filter}>
                <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search by name' className={classes.input} />
            </div>
            {petsitters.map((sitter) => (
            <SitterCard
              key={sitter.user_id}
              user_id={sitter.user_id}
              profileImage={sitter.profileImage}
              firstName={sitter.firstName}
              lastName={sitter.lastName}
              birthday={sitter.birthday}
              city={sitter.city}
              rating={sitter.rating}
              about_me={sitter.about_me}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Petsitters;
