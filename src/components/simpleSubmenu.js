import React from 'react'
import chem from '../assets/chem.PNG'

const SimpleSubmenu = porps => {
    return (
        <>
            <ul class="sub-menu" id="subjects">
                                <li class="border rounded">
                                    <a href="#">
                                        <img src={chem}></img>
                                        <>
                                            Chemistry
                                        </>
                                    </a>
                                </li>
                                <li class="border rounded">
                                    <a href="#">
                                        <img src={chem}></img>
                                        <>
                                            Physics
                                        </>
                                    </a>
                                </li>
                                <li class="border rounded">
                                    <a href="#">
                                        <img src={chem}></img>
                                        <>
                                            Mathematics
                                        </>
                                    </a>
                                </li>
                                <li class="border rounded">
                                    <a href="#">
                                        <img src={chem}></img>
                                        <>
                                            Biology
                                        </>
                                    </a>
                                </li>
                                <li class="border rounded">
                                    <a href="#">
                                        <img src={chem}></img>
                                        <>
                                            Applied Computing
                                        </>
                                    </a>
                                </li>
                            </ul>
        </>
    )
}

export default SimpleSubmenu