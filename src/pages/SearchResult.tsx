import RoomDetails from '../assets/components/details/RoomDetails';
import FeuturedListing from '../assets/components/homepage/FeuturedListing';
import FilterBar from '../assets/components/homepage/Filtersection';
import FooterHero from '../assets/components/homepage/FooterHero';

const SearchResult = () => {
  return (
    <>
      <section className='space-y-20 my-20'>
        <FilterBar />
        <FeuturedListing />
     
      </section>
      <FooterHero />
    </>
  );
};

export default SearchResult;
