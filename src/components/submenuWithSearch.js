import React, {useState} from 'react'
import longMenu from '../assets/longMenu.js'
import Fuse from "fuse.js"


const SearchBar = ({onChange, placeholder}) => {
    return (
      <div className="Search">
        <span className="SearchSpan">
        <i class="bi bi-search"></i>
        </span>
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    )
  }

const SubmenuWithSearch = props => {
    
    const [data, setData] = useState(longMenu);

    const searchData = (pattern) => {
        if (!pattern) {
            setData(longMenu)
            return
        }

        const fuse = new Fuse(data, {
            keys: ["GroupTitle", "Name"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setData([])
        } else {
            result.forEach(({item}) => {
                matches.push(item)
            })
            setData(matches)
        }
    }

    return(
        <div className='submenu-search bg-light'>
            <SearchBar
                    placeholder="Search"
                    onChange={(e) => searchData(e.target.value)}
                />
            <div 
                style={{
                    'width':'550px',
                    'display':"flex",
                    'flex-direction':"column",
                    'flex-wrap':"wrap",
                    'height':"100vh"
                }}
            >
                
                {
                    data.map((group)=>{
                        return(
                            <div class='p-3'>
                                <a href={group.GroupLink}><h5>{group.GroupTitle}</h5></a>
                                <div class='d-flex flex-column'>
                                    {
                                        group.GroupContents.map((item)=>
                                            <a href={item.Link}>{item.Name}</a>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubmenuWithSearch