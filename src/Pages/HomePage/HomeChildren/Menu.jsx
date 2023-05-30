
import MenuItem from '../../../components/MenuItem';
import useMenu from '../../../components/useMenu';
import SectionTitle from '../../../components/SectionTitle';

const Menu = () => {

    // useEffect(() => {
    //     fetch('menue.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popular = data.filter(d => d.category === 'popular')
    //             setPopularMenu(popular)
    //         })
    // }, [])
    const [menu] = useMenu()

    const populars = menu.filter(d => d.category === 'popular')




    return (
        <div>
            <section>
                <SectionTitle
                    heading="from our menu"
                    subheading="Check it out">

                </SectionTitle>
            </section>
            <div className='md:grid-cols-2 grid gap-6 w-4/5 mx-auto mb-28'>

                {
                    populars.map(popular => <MenuItem popular={popular}></MenuItem>)
                }

            </div>

        </div>
    );
};

export default Menu;