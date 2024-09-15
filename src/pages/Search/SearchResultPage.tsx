import { FilterContainer } from '@/components/FixedFilter';
import SearchInput from '@/components/search/SearchInput';
import SearchResultList from '@/components/search/SearchResultList';

export default function SearchResultPage() {
    return (
        <>
            <SearchInput result />
            <FilterContainer />
            <SearchResultList />
        </>
    );
}
