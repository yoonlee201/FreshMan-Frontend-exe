import { FilterContainer } from '@/components/FixedFilter';
import { CategoryList } from '@/components/Product';

export default function ProductPage() {
    return (
        <>
            <FilterContainer showCategory />
            <CategoryList />
        </>
    );
}
