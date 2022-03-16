import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1 className='header-title'>find the team you deserve</h1>
                    <h2>Browse project offers by:</h2>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Keyword"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Location"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Category"/>
                            </div>
                            <div class="col search-button">
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Start Searching</button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;