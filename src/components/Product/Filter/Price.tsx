import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export default function Price() {
    const [range, setRange] = useState([1000, 10000000]);
    const handleChangePrice = (value: number[]) => {
        setRange(value);
    };

    return (
        <div className="">
            <em className="flex justify-center py-8 text-title3_b not-italic">
                {range[0]} ~ {range[1]}
            </em>
            <Slider
                defaultValue={[1000, 1000000]}
                max={1000000}
                step={10000}
                min={10000}
                value={range}
                onValueChange={handleChangePrice}
            />
        </div>
    );
}
