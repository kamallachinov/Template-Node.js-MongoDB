import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import './Navbarr.scss'
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { SearchContext } from '../../Pages/Context/Products';

function Navbarr() {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const { products, setFilteredProducts } = useContext(SearchContext);

    const search = (e) => {
        setFilteredProducts(products.filter(item => {
            return item.title.toLowerCase().includes(e.target.value.toLowerCase());
        }))
    }
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#FEE2B3") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <>
            <nav className='navtag' style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s"
            }}>
                <div className='companyName'>
                    Company
                </div>
                <div className='Links'>
                    <Link to={'/'} className="link">Home</Link>
                    <Link to={'/create'} className="link">Add</Link>
                    <div >
                        <Input icon='search' placeholder='Search...' onChange={search} />
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbarr