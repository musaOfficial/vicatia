import classes from './SignupForm.module.css'
import Logo from './../../public/images/logo.png'
import Paw from './../../public/images/paw.png'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Router, { useRouter } from 'next/router';
import Link from 'next/link'

function SignupForm(){

    var width = 1000;

    if(typeof window != 'undefined'){
        const [widths, setWidth]   = useState(window.innerWidth);
        const [heights, setHeight] = useState(window.innerHeight);
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        useEffect(() => {
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }, []);
        width = widths;
    }

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    async function onSubmit(){
        handleErrors();
        // Wenn erfolgreich, Weiterleitung zur Profilseite des Benutzers

        // Serverseitige Überprüfung für den Alter notwendig (14 oder älter)
       
    }



    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        birth_date: new Date(),
        gender: "",
        country: "",
        city: "",
        password: "",
        confirmpassword: "",
        isPetowner: undefined,
        newsletter: true,
    })

    // Diese Funktion wird aufgerufen, wenn Veränderungen in den Inputs passieren (außer in Country & City)
    const handleChange = (event) => {
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const handleCheckChange = (event) => {
        const { name, checked } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
        console.log(state.newsletter)
      };

    /* 
        Diese Funktion ladet alle Länder und ermittelt automatisch den Standort des Benutzers,
        wodurch wir seinen aktuellen Land und Stadt bekommen und die Felder automatisch befüllen können.
    */
    useEffect(() => {
    // Länder laden
    fetch('https://countriesnow.space/api/v0.1/countries/iso')
        .then(response => response.json())
        .then(data => {
        // Setze die Länder im State
        setCountries(data.data);
        })
        .catch(error => console.error('Error fetching countries:', error));
    }, []);
    

  
  // In der handleCountryChange-Funktion
  const handleCountryChange = async (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
  
    setState(prevState => ({
      ...prevState,
      country: value,
    }));
  
    try {
      // Städte für das ausgewählte Land laden
      const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: value }), // Hier wird jetzt der korrekte Wert verwendet
      });
  
      const data = await response.json();
  
      // Setze die Städte im State
      setCities(data.data);
  
      // Setze ausgewählte Stadt zurück, da sich das Land geändert hat
      setSelectedCity('');
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };
  
  // In der handleCityChange-Funktion
  const handleCityChange = (e) => {
    const value = e.target.value;
  
    setSelectedCity(value);
  
    setState(prevState => ({
      ...prevState,
      city: value,
    }));

    console.log(state);
  };

  const calculateMinDate = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 14);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}; 

    function handleIsOwner(b){
        setState(prevState => ({
            ...prevState,
            isPetowner: b
        }));
    }

    function handleGenderChange(e){
        setState(prevState => ({
            ...prevState,
            gender: e.value
        }))
    }

    return (
    <div className={classes.container}>
        <div className={classes.logo}>
            <Image src={Logo} draggable="false" alt='Logo'/>
        </div>
        {width <= 980 && <div className={classes.reserveleft}></div>}
        {width > 980 && <div className={classes.left}>
            <div className={classes.heading}>Welcome Page</div>
            <div className={classes.description}>Sign up to<br></br>continue access</div>
            <div className={classes.paw}>
                <Image src={Paw} alt='Paw Icon' />
            </div>
        </div>}
        <div className={classes.right}>
            {state.isPetowner !== undefined ? <><div className={classes.signupas}><span>Signup</span></div>
            <form onSubmit={onSubmit} className={classes.form}>
                <div className={classes.relative}>
                    <input 
                        type='text'
                        name='firstname'
                        value={state.firstname}
                        onChange={handleChange}
                        className={classes.input} 
                        placeholder='Name'
                        required
                        maxLength={20}
                    />

                </div>
                <div className={classes.relative}>
                <input 
                    type='text'
                    name='lastname'
                    value={state.lastname}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Surname'
                    required
                    maxLength={20}
                />

                </div>
                <div className={classes.relative}>
                    <select id="gender" name='gender' value={state.gender} className={classes.selectinput} onChange={handleGenderChange} required>
                        <option value="" disabled className={classes.option}>Select your gender</option>
                        <option className={classes.option}>Male</option>
                        <option className={classes.option}>Female</option>
                    </select>
                </div>
                <div className={classes.relative}>
                <input 
                    type='email'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Email'
                    required
                    maxLength={35}
                />

                </div>
                <div className={classes.relative}>
                <input 
                    type='number'
                    name='phonenumber'
                    value={state.phonenumber}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Phone number'
                    required
                    maxLength={17}
                    
                />
                </div>
                <div className={classes.relative}>
                    <input 
                        type='date'
                        name='birth_date'
                        value={state.birth_date}
                        onChange={handleChange}
                        className={classes.input} 
                        placeholder='Birth date'
                        max={calculateMinDate()} 
                        required
                        
                    />
                </div>
                <div className={classes.relative}>
                    <select id="country" name='country' value={selectedCountry} className={classes.selectinput} onChange={handleCountryChange} required>
                        <option value="" disabled className={classes.option}>Country</option>
                        {countries.map((country, index) => (
                            <option className={classes.option} key={index} value={country.iso2}>
                            {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.relative}>
                    <select id="city" name='city' value={selectedCity} className={classes.selectinput} onChange={handleCityChange} required>
                    <option value="" disabled className={classes.option}>City</option>
                    {cities.map((city, index) => (
                        <option className={classes.option} key={index} value={city}>
                        {city}
                        </option>
                    ))}
                    </select>
                </div>
                <div className={classes.relative}>
                <input 
                    type='password'
                    minLength={7}
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Create password'
                    required
                />

                </div>
                <div className={classes.relative}>
                <input 
                    type='password'
                    name='confirmpassword'
                    value={state.confirmpassword}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Confirm password'
                    required
                />
                </div>
                <div className={classes.relative && classes.check}>
                    <input type='checkbox' className={classes.checkbox} checked={state.newsletter} name='newsletter' onChange={handleCheckChange} value={state.newsletter}></input>
                    <label className={classes.label}>I would like to receive promotional codes and discounts from the newsletter</label>
                </div>
                <div className={classes.relative}>
                    <p>By creating an account, you acknowledge and agree to our <Link href={"/terms-of-service"}><span className={classes.link}>terms of service</span></Link>, and you have read and accepted the <Link href={"/global-privacy-policy"}><span className={classes.link}>Global Privacy Policy.</span></Link></p>
                </div>
                <div className={classes.error}>{state.password != state.confirmpassword && "The passwords don't match"}</div>
                
                <button className={classes.button} disabled={state.password != state.confirmpassword} type='submit'>Signup</button>
            </form>
            <div className={classes.existingacc}>Already have an account? <Link href={"/login"}><span className={classes.underline}>Login</span></Link></div></> : 
            <>

            <div className={classes.c_right}>
                <div className={classes.c_signupas}><span>Sign up</span><span>as</span></div>
                <div className={classes.c_button} onClick={() => handleIsOwner(true)}>Pet Owner</div>
                <div className={classes.c_or}>OR</div>
                <div className={classes.c_button} onClick={() => handleIsOwner(false)}>Pet Sitter</div>
                <div className={classes.c_existingacc}>Already have an account? <Link href={"/login"}><span className={classes.c_underline}>Login</span></Link></div>
            </div>
            </>}
        </div>

    </div>
    )
} export default SignupForm;