import { GrayBorderToggleButton } from '../common/Button';

interface IProps {
    close: boolean;
    active: boolean;
    filterName: string;
}
export default function FilterBtn({ close, active, filterName }: IProps) {
    return (
        <span>
            <GrayBorderToggleButton close={close} active={active}>
                {filterName}
            </GrayBorderToggleButton>
        </span>
    );
}
