import { useEffect, useState } from 'react';
import { getCategories } from '../../api/categories.js';
import { NavBarItem } from '../NavBarItem';
import { Loader } from '../Loader';

export const NavBar = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCategories([])
        setLoading(true)
        getCategories()
            .then((items) => {
                items = [{id: 0, name: "Todos"}, ...items]
                setCategories(items)
                setLoading(false)
            })
            .catch((e) => console.log(e))
    }, []);

    return (
        <div className="header__nav">
            <Loader loading = {loading} text='categorías' />
            {
                    categories.map((category) => (
                        <NavBarItem
                            key={category.id}
                            category={category}
                        />
                    ))

            }
        </div>
    )
}