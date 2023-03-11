import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilterBy } from "../../features/filter/filterSlice";
import { fetchSortedPosts, fetchPosts } from "../../features/posts/postsSlice";


const HomeAside = () => {

    const dispatch = useDispatch();
    const { filterBy } = useSelector(selectFilter);
    const [ sortBy, setSortBy ] = useState('');


    const sortHandeler = (e) => {

        setSortBy(e.target.value)

        if(e.target.value === 'newest'){
            dispatch(fetchSortedPosts('createdAt'))
        }

        if(e.target.value === 'most_liked'){
            dispatch(fetchSortedPosts('likes'))
        }

        if(e.target.value === ''){
            dispatch(fetchPosts());
        }
        
    }

    const filterHandeler = (e) => {
        dispatch(setFilterBy(e.target.value))
    }

    return(
        <>
            <aside>
                <div className="sidebar-items">
                    <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select onChange={sortHandeler} value={sortBy}  name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                    </div>
                    <div className="sidebar-content">
                    <h4>Filter</h4>
                    <div className="radio-group">
                        <div>
                            <input onClick={filterHandeler} checked={filterBy === 'all'} value="all" type="radio" name="filter" id="lws-all"  className="radio" />
                            <label htmlFor="lws-all">All</label>
                        </div>
                        <div>
                            <input onClick={filterHandeler} checked={filterBy === 'saved'} value="saved" type="radio" name="filter" id="lws-saved" className="radio" />
                            <label htmlFor="lws-saved">Saved</label>
                        </div>
                    </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default HomeAside;