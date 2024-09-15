import { GrayBorderToggleButton } from '../common/Button';

export default function RecentSearchList() {
    return (
        <section className="mt-8">
            <h3 className="text-body1_b">최근 검색어</h3>
            <ul className="mt-3 flex flex-row flex-wrap gap-2">
                <li>
                    <GrayBorderToggleButton close>
                        남자 베이스 추천
                    </GrayBorderToggleButton>
                </li>
            </ul>
        </section>
    );
}
